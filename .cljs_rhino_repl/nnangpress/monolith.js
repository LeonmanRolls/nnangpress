// Compiled by ClojureScript 1.9.521 {}
goog.provide('nnangpress.monolith');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('nnangpress.utils');
goog.require('nnangpress.dom');
goog.require('nnangpress.specs');
goog.require('nnangpress.widgetdata');
goog.require('clojure.zip');
goog.require('cljs.spec');
goog.require('clojure.walk');
goog.require('cljs.core.async');
goog.require('nnangpress.firebase');


nnangpress.monolith.mobile_threshold = (1000);
cljs.spec.def_impl.call(null,new cljs.core.Keyword("nnangpress.monolith","all-widgets-data","nnangpress.monolith/all-widgets-data",796049895),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_);
cljs.spec.def_impl.call(null,new cljs.core.Keyword("nnangpress.monolith","current-route","nnangpress.monolith/current-route",936351965),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_);
cljs.spec.def_impl.call(null,new cljs.core.Keyword("nnangpress.monolith","edit-mode","nnangpress.monolith/edit-mode",-1474609446),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_);
cljs.spec.def_impl.call(null,new cljs.core.Keyword("nnangpress.monolith","logo-text","nnangpress.monolith/logo-text",-1712457806),new cljs.core.Keyword("nnangpress.widgetdata","widget-data-1","nnangpress.widgetdata/widget-data-1",-1017151460),new cljs.core.Keyword("nnangpress.widgetdata","widget-data-1","nnangpress.widgetdata/widget-data-1",-1017151460));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("nnangpress.monolith","logo-style","nnangpress.monolith/logo-style",165804265),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.def_impl.call(null,new cljs.core.Keyword("nnangpress.monolith","admin-route-widgets","nnangpress.monolith/admin-route-widgets",-661740700),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.def_impl.call(null,new cljs.core.Keyword("nnangpress.monolith","admin-sites","nnangpress.monolith/admin-sites",1648111891),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.def_impl.call(null,new cljs.core.Keyword("nnangpress.monolith","email","nnangpress.monolith/email",282075129),cljs.core.list(new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null),new cljs.core.Keyword(null,"non-cursor","non-cursor",475789067),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword("nnangpress.specs","indexed-cursor","nnangpress.specs/indexed-cursor",-525125884)),cljs.spec.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"non-cursor","non-cursor",475789067),new cljs.core.Keyword(null,"cursor","cursor",1011937484)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("nnangpress.specs","indexed-cursor","nnangpress.specs/indexed-cursor",-525125884)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector_QMARK_,new cljs.core.Keyword("nnangpress.specs","indexed-cursor","nnangpress.specs/indexed-cursor",-525125884)], null),null));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("nnangpress.monolith","site-name","nnangpress.monolith/site-name",-1043428236),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_);
cljs.spec.def_impl.call(null,new cljs.core.Keyword("nnangpress.monolith","site-state","nnangpress.monolith/site-state",141087633),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.def_impl.call(null,new cljs.core.Keyword("nnangpress.monolith","uid","nnangpress.monolith/uid",1445012669),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_);
cljs.spec.def_impl.call(null,new cljs.core.Keyword("nnangpress.monolith","uid","nnangpress.monolith/uid",1445012669),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_);
cljs.spec.def_impl.call(null,new cljs.core.Keyword("nnangpress.monolith","authed-uid-raw","nnangpress.monolith/authed-uid-raw",-2022015200),cljs.core.list(new cljs.core.Symbol("cljs.spec","and","cljs.spec/and",-7296553,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__23650#","p1__23650#",1926775918,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),new cljs.core.Symbol(null,"p1__23650#","p1__23650#",1926775918,null)))),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__23650_SHARP_){
return !(cljs.core.empty_QMARK_.call(null,p1__23650_SHARP_));
}),cljs.core.string_QMARK_], null),null));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("nnangpress.monolith","channel","nnangpress.monolith/channel",-810593631),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),cljs.core.list(new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),new cljs.core.Symbol("cljs.core.async.impl.channels","ManyToManyChannel","cljs.core.async.impl.channels/ManyToManyChannel",75017664,null))),(function (p1__23651_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.type.call(null,p1__23651_SHARP_),cljs.core.async.impl.channels.ManyToManyChannel);
}));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("nnangpress.monolith","name","nnangpress.monolith/name",842582584),new cljs.core.Keyword("nnangpress.specs","basic-mediumjs-wgt","nnangpress.specs/basic-mediumjs-wgt",-666006996),new cljs.core.Keyword("nnangpress.specs","basic-mediumjs-wgt","nnangpress.specs/basic-mediumjs-wgt",-666006996));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("nnangpress.monolith","description","nnangpress.monolith/description",1736855385),new cljs.core.Keyword("nnangpress.specs","basic-mediumjs-wgt","nnangpress.specs/basic-mediumjs-wgt",-666006996),new cljs.core.Keyword("nnangpress.specs","basic-mediumjs-wgt","nnangpress.specs/basic-mediumjs-wgt",-666006996));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("nnangpress.monolith","site-id","nnangpress.monolith/site-id",-465465873),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.def_impl.call(null,new cljs.core.Keyword("nnangpress.monolith","site-id-vec","nnangpress.monolith/site-id-vec",938929282),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_);
cljs.spec.def_impl.call(null,new cljs.core.Keyword("nnangpress.monolith","screenshot","nnangpress.monolith/screenshot",-164714251),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.def_impl.call(null,new cljs.core.Keyword("nnangpress.monolith","logo-data","nnangpress.monolith/logo-data",1922571263),cljs.core.list(new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","logo-text","nnangpress.monolith/logo-text",-1712457806),new cljs.core.Keyword("nnangpress.monolith","logo-style","nnangpress.monolith/logo-style",165804265)], null)),cljs.spec.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","logo-text","nnangpress.monolith/logo-text",-1712457806),new cljs.core.Keyword("nnangpress.monolith","logo-style","nnangpress.monolith/logo-style",165804265)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__23652){
return cljs.core.map_QMARK_.call(null,G__23652);
}),(function (G__23652){
return cljs.core.contains_QMARK_.call(null,G__23652,new cljs.core.Keyword(null,"logo-text","logo-text",-580816517));
}),(function (G__23652){
return cljs.core.contains_QMARK_.call(null,G__23652,new cljs.core.Keyword(null,"logo-style","logo-style",-854181182));
})], null),(function (G__23652){
return (cljs.core.map_QMARK_.call(null,G__23652)) && (cljs.core.contains_QMARK_.call(null,G__23652,new cljs.core.Keyword(null,"logo-text","logo-text",-580816517))) && (cljs.core.contains_QMARK_.call(null,G__23652,new cljs.core.Keyword(null,"logo-style","logo-style",-854181182)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","logo-text","nnangpress.monolith/logo-text",-1712457806),new cljs.core.Keyword("nnangpress.monolith","logo-style","nnangpress.monolith/logo-style",165804265)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"logo-text","logo-text",-580816517),new cljs.core.Keyword(null,"logo-style","logo-style",-854181182)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"logo-text","logo-text",-580816517))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"logo-style","logo-style",-854181182)))], null),null])));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("nnangpress.monolith","data","nnangpress.monolith/data",-1160427192),cljs.core.list(new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","email","nnangpress.monolith/email",282075129),new cljs.core.Keyword("nnangpress.monolith","logo-text","nnangpress.monolith/logo-text",-1712457806),new cljs.core.Keyword("nnangpress.monolith","route-widget","nnangpress.monolith/route-widget",713349860),new cljs.core.Keyword("nnangpress.monolith","site-name","nnangpress.monolith/site-name",-1043428236),new cljs.core.Keyword("nnangpress.monolith","site-state","nnangpress.monolith/site-state",141087633),new cljs.core.Keyword("nnangpress.monolith","uid","nnangpress.monolith/uid",1445012669)], null)),cljs.spec.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","email","nnangpress.monolith/email",282075129),new cljs.core.Keyword("nnangpress.monolith","logo-text","nnangpress.monolith/logo-text",-1712457806),new cljs.core.Keyword("nnangpress.monolith","route-widget","nnangpress.monolith/route-widget",713349860),new cljs.core.Keyword("nnangpress.monolith","site-name","nnangpress.monolith/site-name",-1043428236),new cljs.core.Keyword("nnangpress.monolith","site-state","nnangpress.monolith/site-state",141087633),new cljs.core.Keyword("nnangpress.monolith","uid","nnangpress.monolith/uid",1445012669)], null),null,null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__23653){
return cljs.core.map_QMARK_.call(null,G__23653);
}),(function (G__23653){
return cljs.core.contains_QMARK_.call(null,G__23653,new cljs.core.Keyword(null,"email","email",1415816706));
}),(function (G__23653){
return cljs.core.contains_QMARK_.call(null,G__23653,new cljs.core.Keyword(null,"logo-text","logo-text",-580816517));
}),(function (G__23653){
return cljs.core.contains_QMARK_.call(null,G__23653,new cljs.core.Keyword(null,"route-widget","route-widget",1702261979));
}),(function (G__23653){
return cljs.core.contains_QMARK_.call(null,G__23653,new cljs.core.Keyword(null,"site-name","site-name",490410553));
}),(function (G__23653){
return cljs.core.contains_QMARK_.call(null,G__23653,new cljs.core.Keyword(null,"site-state","site-state",1268076938));
}),(function (G__23653){
return cljs.core.contains_QMARK_.call(null,G__23653,new cljs.core.Keyword(null,"uid","uid",-1447769400));
})], null),(function (G__23653){
return (cljs.core.map_QMARK_.call(null,G__23653)) && (cljs.core.contains_QMARK_.call(null,G__23653,new cljs.core.Keyword(null,"email","email",1415816706))) && (cljs.core.contains_QMARK_.call(null,G__23653,new cljs.core.Keyword(null,"logo-text","logo-text",-580816517))) && (cljs.core.contains_QMARK_.call(null,G__23653,new cljs.core.Keyword(null,"route-widget","route-widget",1702261979))) && (cljs.core.contains_QMARK_.call(null,G__23653,new cljs.core.Keyword(null,"site-name","site-name",490410553))) && (cljs.core.contains_QMARK_.call(null,G__23653,new cljs.core.Keyword(null,"site-state","site-state",1268076938))) && (cljs.core.contains_QMARK_.call(null,G__23653,new cljs.core.Keyword(null,"uid","uid",-1447769400)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","email","nnangpress.monolith/email",282075129),new cljs.core.Keyword("nnangpress.monolith","logo-text","nnangpress.monolith/logo-text",-1712457806),new cljs.core.Keyword("nnangpress.monolith","route-widget","nnangpress.monolith/route-widget",713349860),new cljs.core.Keyword("nnangpress.monolith","site-name","nnangpress.monolith/site-name",-1043428236),new cljs.core.Keyword("nnangpress.monolith","site-state","nnangpress.monolith/site-state",141087633),new cljs.core.Keyword("nnangpress.monolith","uid","nnangpress.monolith/uid",1445012669)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"logo-text","logo-text",-580816517),new cljs.core.Keyword(null,"route-widget","route-widget",1702261979),new cljs.core.Keyword(null,"site-name","site-name",490410553),new cljs.core.Keyword(null,"site-state","site-state",1268076938),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"email","email",1415816706))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"logo-text","logo-text",-580816517))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"route-widget","route-widget",1702261979))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"site-name","site-name",490410553))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"site-state","site-state",1268076938))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"uid","uid",-1447769400)))], null),null])));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("nnangpress.monolith","all-data","nnangpress.monolith/all-data",1632257688),cljs.core.list(new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","all-widgets-data","nnangpress.monolith/all-widgets-data",796049895),new cljs.core.Keyword("nnangpress.monolith","uid","nnangpress.monolith/uid",1445012669),new cljs.core.Keyword("nnangpress.monolith","current-route","nnangpress.monolith/current-route",936351965),new cljs.core.Keyword("nnangpress.monolith","edit-mode","nnangpress.monolith/edit-mode",-1474609446),new cljs.core.Keyword("nnangpress.monolith","logo-text","nnangpress.monolith/logo-text",-1712457806),new cljs.core.Keyword("nnangpress.monolith","route-widget","nnangpress.monolith/route-widget",713349860)], null)),cljs.spec.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","all-widgets-data","nnangpress.monolith/all-widgets-data",796049895),new cljs.core.Keyword("nnangpress.monolith","uid","nnangpress.monolith/uid",1445012669),new cljs.core.Keyword("nnangpress.monolith","current-route","nnangpress.monolith/current-route",936351965),new cljs.core.Keyword("nnangpress.monolith","edit-mode","nnangpress.monolith/edit-mode",-1474609446),new cljs.core.Keyword("nnangpress.monolith","logo-text","nnangpress.monolith/logo-text",-1712457806),new cljs.core.Keyword("nnangpress.monolith","route-widget","nnangpress.monolith/route-widget",713349860)], null),null,null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__23654){
return cljs.core.map_QMARK_.call(null,G__23654);
}),(function (G__23654){
return cljs.core.contains_QMARK_.call(null,G__23654,new cljs.core.Keyword(null,"all-widgets-data","all-widgets-data",-360687632));
}),(function (G__23654){
return cljs.core.contains_QMARK_.call(null,G__23654,new cljs.core.Keyword(null,"uid","uid",-1447769400));
}),(function (G__23654){
return cljs.core.contains_QMARK_.call(null,G__23654,new cljs.core.Keyword(null,"current-route","current-route",2067529448));
}),(function (G__23654){
return cljs.core.contains_QMARK_.call(null,G__23654,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993));
}),(function (G__23654){
return cljs.core.contains_QMARK_.call(null,G__23654,new cljs.core.Keyword(null,"logo-text","logo-text",-580816517));
}),(function (G__23654){
return cljs.core.contains_QMARK_.call(null,G__23654,new cljs.core.Keyword(null,"route-widget","route-widget",1702261979));
})], null),(function (G__23654){
return (cljs.core.map_QMARK_.call(null,G__23654)) && (cljs.core.contains_QMARK_.call(null,G__23654,new cljs.core.Keyword(null,"all-widgets-data","all-widgets-data",-360687632))) && (cljs.core.contains_QMARK_.call(null,G__23654,new cljs.core.Keyword(null,"uid","uid",-1447769400))) && (cljs.core.contains_QMARK_.call(null,G__23654,new cljs.core.Keyword(null,"current-route","current-route",2067529448))) && (cljs.core.contains_QMARK_.call(null,G__23654,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993))) && (cljs.core.contains_QMARK_.call(null,G__23654,new cljs.core.Keyword(null,"logo-text","logo-text",-580816517))) && (cljs.core.contains_QMARK_.call(null,G__23654,new cljs.core.Keyword(null,"route-widget","route-widget",1702261979)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","all-widgets-data","nnangpress.monolith/all-widgets-data",796049895),new cljs.core.Keyword("nnangpress.monolith","uid","nnangpress.monolith/uid",1445012669),new cljs.core.Keyword("nnangpress.monolith","current-route","nnangpress.monolith/current-route",936351965),new cljs.core.Keyword("nnangpress.monolith","edit-mode","nnangpress.monolith/edit-mode",-1474609446),new cljs.core.Keyword("nnangpress.monolith","logo-text","nnangpress.monolith/logo-text",-1712457806),new cljs.core.Keyword("nnangpress.monolith","route-widget","nnangpress.monolith/route-widget",713349860)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-widgets-data","all-widgets-data",-360687632),new cljs.core.Keyword(null,"uid","uid",-1447769400),new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),new cljs.core.Keyword(null,"logo-text","logo-text",-580816517),new cljs.core.Keyword(null,"route-widget","route-widget",1702261979)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"all-widgets-data","all-widgets-data",-360687632))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"uid","uid",-1447769400))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"current-route","current-route",2067529448))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"logo-text","logo-text",-580816517))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"route-widget","route-widget",1702261979)))], null),null])));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("nnangpress.monolith","site-data","nnangpress.monolith/site-data",-398702694),cljs.core.list(new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","all-widgets-data","nnangpress.monolith/all-widgets-data",796049895),new cljs.core.Keyword("nnangpress.monolith","uid","nnangpress.monolith/uid",1445012669),new cljs.core.Keyword("nnangpress.monolith","site-name","nnangpress.monolith/site-name",-1043428236),new cljs.core.Keyword("nnangpress.monolith","current-route","nnangpress.monolith/current-route",936351965),new cljs.core.Keyword("nnangpress.monolith","edit-mode","nnangpress.monolith/edit-mode",-1474609446),new cljs.core.Keyword("nnangpress.monolith","logo-text","nnangpress.monolith/logo-text",-1712457806),new cljs.core.Keyword("nnangpress.monolith","route-widget","nnangpress.monolith/route-widget",713349860)], null)),cljs.spec.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","all-widgets-data","nnangpress.monolith/all-widgets-data",796049895),new cljs.core.Keyword("nnangpress.monolith","uid","nnangpress.monolith/uid",1445012669),new cljs.core.Keyword("nnangpress.monolith","site-name","nnangpress.monolith/site-name",-1043428236),new cljs.core.Keyword("nnangpress.monolith","current-route","nnangpress.monolith/current-route",936351965),new cljs.core.Keyword("nnangpress.monolith","edit-mode","nnangpress.monolith/edit-mode",-1474609446),new cljs.core.Keyword("nnangpress.monolith","logo-text","nnangpress.monolith/logo-text",-1712457806),new cljs.core.Keyword("nnangpress.monolith","route-widget","nnangpress.monolith/route-widget",713349860)], null),null,null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__23655){
return cljs.core.map_QMARK_.call(null,G__23655);
}),(function (G__23655){
return cljs.core.contains_QMARK_.call(null,G__23655,new cljs.core.Keyword(null,"all-widgets-data","all-widgets-data",-360687632));
}),(function (G__23655){
return cljs.core.contains_QMARK_.call(null,G__23655,new cljs.core.Keyword(null,"uid","uid",-1447769400));
}),(function (G__23655){
return cljs.core.contains_QMARK_.call(null,G__23655,new cljs.core.Keyword(null,"site-name","site-name",490410553));
}),(function (G__23655){
return cljs.core.contains_QMARK_.call(null,G__23655,new cljs.core.Keyword(null,"current-route","current-route",2067529448));
}),(function (G__23655){
return cljs.core.contains_QMARK_.call(null,G__23655,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993));
}),(function (G__23655){
return cljs.core.contains_QMARK_.call(null,G__23655,new cljs.core.Keyword(null,"logo-text","logo-text",-580816517));
}),(function (G__23655){
return cljs.core.contains_QMARK_.call(null,G__23655,new cljs.core.Keyword(null,"route-widget","route-widget",1702261979));
})], null),(function (G__23655){
return (cljs.core.map_QMARK_.call(null,G__23655)) && (cljs.core.contains_QMARK_.call(null,G__23655,new cljs.core.Keyword(null,"all-widgets-data","all-widgets-data",-360687632))) && (cljs.core.contains_QMARK_.call(null,G__23655,new cljs.core.Keyword(null,"uid","uid",-1447769400))) && (cljs.core.contains_QMARK_.call(null,G__23655,new cljs.core.Keyword(null,"site-name","site-name",490410553))) && (cljs.core.contains_QMARK_.call(null,G__23655,new cljs.core.Keyword(null,"current-route","current-route",2067529448))) && (cljs.core.contains_QMARK_.call(null,G__23655,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993))) && (cljs.core.contains_QMARK_.call(null,G__23655,new cljs.core.Keyword(null,"logo-text","logo-text",-580816517))) && (cljs.core.contains_QMARK_.call(null,G__23655,new cljs.core.Keyword(null,"route-widget","route-widget",1702261979)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","all-widgets-data","nnangpress.monolith/all-widgets-data",796049895),new cljs.core.Keyword("nnangpress.monolith","uid","nnangpress.monolith/uid",1445012669),new cljs.core.Keyword("nnangpress.monolith","site-name","nnangpress.monolith/site-name",-1043428236),new cljs.core.Keyword("nnangpress.monolith","current-route","nnangpress.monolith/current-route",936351965),new cljs.core.Keyword("nnangpress.monolith","edit-mode","nnangpress.monolith/edit-mode",-1474609446),new cljs.core.Keyword("nnangpress.monolith","logo-text","nnangpress.monolith/logo-text",-1712457806),new cljs.core.Keyword("nnangpress.monolith","route-widget","nnangpress.monolith/route-widget",713349860)], null),null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-widgets-data","all-widgets-data",-360687632),new cljs.core.Keyword(null,"uid","uid",-1447769400),new cljs.core.Keyword(null,"site-name","site-name",490410553),new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),new cljs.core.Keyword(null,"logo-text","logo-text",-580816517),new cljs.core.Keyword(null,"route-widget","route-widget",1702261979)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"all-widgets-data","all-widgets-data",-360687632))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"uid","uid",-1447769400))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"site-name","site-name",490410553))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"current-route","current-route",2067529448))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"logo-text","logo-text",-580816517))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"route-widget","route-widget",1702261979)))], null),null])));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("nnangpress.monolith","nangpress-data","nnangpress.monolith/nangpress-data",-1108060637),cljs.core.list(new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","admin-sites","nnangpress.monolith/admin-sites",1648111891),new cljs.core.Keyword("nnangpress.monolith","all-navs-data","nnangpress.monolith/all-navs-data",-1041926349),new cljs.core.Keyword("nnangpress.monolith","all-widgets-data","nnangpress.monolith/all-widgets-data",796049895),new cljs.core.Keyword("nnangpress.monolith","current-route","nnangpress.monolith/current-route",936351965),new cljs.core.Keyword("nnangpress.monolith","edit-mode","nnangpress.monolith/edit-mode",-1474609446),new cljs.core.Keyword("nnangpress.monolith","sidebar-data","nnangpress.monolith/sidebar-data",328707432),new cljs.core.Keyword("nnangpress.monolith","site-name","nnangpress.monolith/site-name",-1043428236),new cljs.core.Keyword("nnangpress.monolith","site-state","nnangpress.monolith/site-state",141087633),new cljs.core.Keyword("nnangpress.monolith","uid","nnangpress.monolith/uid",1445012669)], null)),cljs.spec.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","admin-sites","nnangpress.monolith/admin-sites",1648111891),new cljs.core.Keyword("nnangpress.monolith","all-navs-data","nnangpress.monolith/all-navs-data",-1041926349),new cljs.core.Keyword("nnangpress.monolith","all-widgets-data","nnangpress.monolith/all-widgets-data",796049895),new cljs.core.Keyword("nnangpress.monolith","current-route","nnangpress.monolith/current-route",936351965),new cljs.core.Keyword("nnangpress.monolith","edit-mode","nnangpress.monolith/edit-mode",-1474609446),new cljs.core.Keyword("nnangpress.monolith","sidebar-data","nnangpress.monolith/sidebar-data",328707432),new cljs.core.Keyword("nnangpress.monolith","site-name","nnangpress.monolith/site-name",-1043428236),new cljs.core.Keyword("nnangpress.monolith","site-state","nnangpress.monolith/site-state",141087633),new cljs.core.Keyword("nnangpress.monolith","uid","nnangpress.monolith/uid",1445012669)], null),null,null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__23656){
return cljs.core.map_QMARK_.call(null,G__23656);
}),(function (G__23656){
return cljs.core.contains_QMARK_.call(null,G__23656,new cljs.core.Keyword(null,"admin-sites","admin-sites",-1578992874));
}),(function (G__23656){
return cljs.core.contains_QMARK_.call(null,G__23656,new cljs.core.Keyword(null,"all-navs-data","all-navs-data",-1653609188));
}),(function (G__23656){
return cljs.core.contains_QMARK_.call(null,G__23656,new cljs.core.Keyword(null,"all-widgets-data","all-widgets-data",-360687632));
}),(function (G__23656){
return cljs.core.contains_QMARK_.call(null,G__23656,new cljs.core.Keyword(null,"current-route","current-route",2067529448));
}),(function (G__23656){
return cljs.core.contains_QMARK_.call(null,G__23656,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993));
}),(function (G__23656){
return cljs.core.contains_QMARK_.call(null,G__23656,new cljs.core.Keyword(null,"sidebar-data","sidebar-data",-834207905));
}),(function (G__23656){
return cljs.core.contains_QMARK_.call(null,G__23656,new cljs.core.Keyword(null,"site-name","site-name",490410553));
}),(function (G__23656){
return cljs.core.contains_QMARK_.call(null,G__23656,new cljs.core.Keyword(null,"site-state","site-state",1268076938));
}),(function (G__23656){
return cljs.core.contains_QMARK_.call(null,G__23656,new cljs.core.Keyword(null,"uid","uid",-1447769400));
})], null),(function (G__23656){
return (cljs.core.map_QMARK_.call(null,G__23656)) && (cljs.core.contains_QMARK_.call(null,G__23656,new cljs.core.Keyword(null,"admin-sites","admin-sites",-1578992874))) && (cljs.core.contains_QMARK_.call(null,G__23656,new cljs.core.Keyword(null,"all-navs-data","all-navs-data",-1653609188))) && (cljs.core.contains_QMARK_.call(null,G__23656,new cljs.core.Keyword(null,"all-widgets-data","all-widgets-data",-360687632))) && (cljs.core.contains_QMARK_.call(null,G__23656,new cljs.core.Keyword(null,"current-route","current-route",2067529448))) && (cljs.core.contains_QMARK_.call(null,G__23656,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993))) && (cljs.core.contains_QMARK_.call(null,G__23656,new cljs.core.Keyword(null,"sidebar-data","sidebar-data",-834207905))) && (cljs.core.contains_QMARK_.call(null,G__23656,new cljs.core.Keyword(null,"site-name","site-name",490410553))) && (cljs.core.contains_QMARK_.call(null,G__23656,new cljs.core.Keyword(null,"site-state","site-state",1268076938))) && (cljs.core.contains_QMARK_.call(null,G__23656,new cljs.core.Keyword(null,"uid","uid",-1447769400)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","admin-sites","nnangpress.monolith/admin-sites",1648111891),new cljs.core.Keyword("nnangpress.monolith","all-navs-data","nnangpress.monolith/all-navs-data",-1041926349),new cljs.core.Keyword("nnangpress.monolith","all-widgets-data","nnangpress.monolith/all-widgets-data",796049895),new cljs.core.Keyword("nnangpress.monolith","current-route","nnangpress.monolith/current-route",936351965),new cljs.core.Keyword("nnangpress.monolith","edit-mode","nnangpress.monolith/edit-mode",-1474609446),new cljs.core.Keyword("nnangpress.monolith","sidebar-data","nnangpress.monolith/sidebar-data",328707432),new cljs.core.Keyword("nnangpress.monolith","site-name","nnangpress.monolith/site-name",-1043428236),new cljs.core.Keyword("nnangpress.monolith","site-state","nnangpress.monolith/site-state",141087633),new cljs.core.Keyword("nnangpress.monolith","uid","nnangpress.monolith/uid",1445012669)], null),null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"admin-sites","admin-sites",-1578992874),new cljs.core.Keyword(null,"all-navs-data","all-navs-data",-1653609188),new cljs.core.Keyword(null,"all-widgets-data","all-widgets-data",-360687632),new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),new cljs.core.Keyword(null,"sidebar-data","sidebar-data",-834207905),new cljs.core.Keyword(null,"site-name","site-name",490410553),new cljs.core.Keyword(null,"site-state","site-state",1268076938),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"admin-sites","admin-sites",-1578992874))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"all-navs-data","all-navs-data",-1653609188))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"all-widgets-data","all-widgets-data",-360687632))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"current-route","current-route",2067529448))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"sidebar-data","sidebar-data",-834207905))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"site-name","site-name",490410553))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"site-state","site-state",1268076938))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"uid","uid",-1447769400)))], null),null])));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("nnangpress.monolith","site-with-meta","nnangpress.monolith/site-with-meta",1425946347),cljs.core.list(new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","site-id","nnangpress.monolith/site-id",-465465873),new cljs.core.Keyword("nnangpress.monolith","screenshot","nnangpress.monolith/screenshot",-164714251),new cljs.core.Keyword("nnangpress.monolith","name","nnangpress.monolith/name",842582584),new cljs.core.Keyword("nnangpress.monolith","description","nnangpress.monolith/description",1736855385),new cljs.core.Keyword("nnangpress.monolith","route-widget","nnangpress.monolith/route-widget",713349860)], null)),cljs.spec.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","site-id","nnangpress.monolith/site-id",-465465873),new cljs.core.Keyword("nnangpress.monolith","screenshot","nnangpress.monolith/screenshot",-164714251),new cljs.core.Keyword("nnangpress.monolith","name","nnangpress.monolith/name",842582584),new cljs.core.Keyword("nnangpress.monolith","description","nnangpress.monolith/description",1736855385),new cljs.core.Keyword("nnangpress.monolith","route-widget","nnangpress.monolith/route-widget",713349860)], null),null,null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__23657){
return cljs.core.map_QMARK_.call(null,G__23657);
}),(function (G__23657){
return cljs.core.contains_QMARK_.call(null,G__23657,new cljs.core.Keyword(null,"site-id","site-id",-1581972488));
}),(function (G__23657){
return cljs.core.contains_QMARK_.call(null,G__23657,new cljs.core.Keyword(null,"screenshot","screenshot",697978558));
}),(function (G__23657){
return cljs.core.contains_QMARK_.call(null,G__23657,new cljs.core.Keyword(null,"name","name",1843675177));
}),(function (G__23657){
return cljs.core.contains_QMARK_.call(null,G__23657,new cljs.core.Keyword(null,"description","description",-1428560544));
}),(function (G__23657){
return cljs.core.contains_QMARK_.call(null,G__23657,new cljs.core.Keyword(null,"route-widget","route-widget",1702261979));
})], null),(function (G__23657){
return (cljs.core.map_QMARK_.call(null,G__23657)) && (cljs.core.contains_QMARK_.call(null,G__23657,new cljs.core.Keyword(null,"site-id","site-id",-1581972488))) && (cljs.core.contains_QMARK_.call(null,G__23657,new cljs.core.Keyword(null,"screenshot","screenshot",697978558))) && (cljs.core.contains_QMARK_.call(null,G__23657,new cljs.core.Keyword(null,"name","name",1843675177))) && (cljs.core.contains_QMARK_.call(null,G__23657,new cljs.core.Keyword(null,"description","description",-1428560544))) && (cljs.core.contains_QMARK_.call(null,G__23657,new cljs.core.Keyword(null,"route-widget","route-widget",1702261979)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","site-id","nnangpress.monolith/site-id",-465465873),new cljs.core.Keyword("nnangpress.monolith","screenshot","nnangpress.monolith/screenshot",-164714251),new cljs.core.Keyword("nnangpress.monolith","name","nnangpress.monolith/name",842582584),new cljs.core.Keyword("nnangpress.monolith","description","nnangpress.monolith/description",1736855385),new cljs.core.Keyword("nnangpress.monolith","route-widget","nnangpress.monolith/route-widget",713349860)], null),null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"site-id","site-id",-1581972488),new cljs.core.Keyword(null,"screenshot","screenshot",697978558),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"route-widget","route-widget",1702261979)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"site-id","site-id",-1581972488))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"screenshot","screenshot",697978558))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"name","name",1843675177))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"description","description",-1428560544))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"route-widget","route-widget",1702261979)))], null),null])));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("nnangpress.monolith","children","nnangpress.monolith/children",-229853253),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"route-map","route-map",1707825717),cljs.core.list(new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null),new cljs.core.Keyword("nnangpress.monolith","route-map","nnangpress.monolith/route-map",-1589259218))),cljs.spec.cat_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-map","route-map",1707825717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.rep_impl.call(null,new cljs.core.Keyword("nnangpress.monolith","route-map","nnangpress.monolith/route-map",-1589259218),new cljs.core.Keyword("nnangpress.monolith","route-map","nnangpress.monolith/route-map",-1589259218))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null),new cljs.core.Keyword("nnangpress.monolith","route-map","nnangpress.monolith/route-map",-1589259218))], null)));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("nnangpress.monolith","route-map","nnangpress.monolith/route-map",-1589259218),cljs.core.list(new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","bg-img","nnangpress.monolith/bg-img",-728752726),new cljs.core.Keyword("nnangpress.monolith","grey-bg?","nnangpress.monolith/grey-bg?",-537757468),new cljs.core.Keyword("nnangpress.monolith","nav-hint","nnangpress.monolith/nav-hint",-286174786),new cljs.core.Keyword("nnangpress.monolith","nav-hint-style","nnangpress.monolith/nav-hint-style",-907890862),new cljs.core.Keyword("nnangpress.monolith","route-name","nnangpress.monolith/route-name",215276274),new cljs.core.Keyword("nnangpress.monolith","widgets","nnangpress.monolith/widgets",-1552890469),new cljs.core.Keyword("nnangpress.monolith","route-name-editable","nnangpress.monolith/route-name-editable",965512394),new cljs.core.Keyword("nnangpress.monolith","children","nnangpress.monolith/children",-229853253)], null)),cljs.spec.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","bg-img","nnangpress.monolith/bg-img",-728752726),new cljs.core.Keyword("nnangpress.monolith","grey-bg?","nnangpress.monolith/grey-bg?",-537757468),new cljs.core.Keyword("nnangpress.monolith","nav-hint","nnangpress.monolith/nav-hint",-286174786),new cljs.core.Keyword("nnangpress.monolith","nav-hint-style","nnangpress.monolith/nav-hint-style",-907890862),new cljs.core.Keyword("nnangpress.monolith","route-name","nnangpress.monolith/route-name",215276274),new cljs.core.Keyword("nnangpress.monolith","widgets","nnangpress.monolith/widgets",-1552890469),new cljs.core.Keyword("nnangpress.monolith","route-name-editable","nnangpress.monolith/route-name-editable",965512394),new cljs.core.Keyword("nnangpress.monolith","children","nnangpress.monolith/children",-229853253)], null),null,null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__23658){
return cljs.core.map_QMARK_.call(null,G__23658);
}),(function (G__23658){
return cljs.core.contains_QMARK_.call(null,G__23658,new cljs.core.Keyword(null,"bg-img","bg-img",292271023));
}),(function (G__23658){
return cljs.core.contains_QMARK_.call(null,G__23658,new cljs.core.Keyword(null,"grey-bg?","grey-bg?",-614408471));
}),(function (G__23658){
return cljs.core.contains_QMARK_.call(null,G__23658,new cljs.core.Keyword(null,"nav-hint","nav-hint",859950035));
}),(function (G__23658){
return cljs.core.contains_QMARK_.call(null,G__23658,new cljs.core.Keyword(null,"nav-hint-style","nav-hint-style",228007241));
}),(function (G__23658){
return cljs.core.contains_QMARK_.call(null,G__23658,new cljs.core.Keyword(null,"route-name","route-name",-932603717));
}),(function (G__23658){
return cljs.core.contains_QMARK_.call(null,G__23658,new cljs.core.Keyword(null,"widgets","widgets",-159098978));
}),(function (G__23658){
return cljs.core.contains_QMARK_.call(null,G__23658,new cljs.core.Keyword(null,"route-name-editable","route-name-editable",-182971695));
}),(function (G__23658){
return cljs.core.contains_QMARK_.call(null,G__23658,new cljs.core.Keyword(null,"children","children",-940561982));
})], null),(function (G__23658){
return (cljs.core.map_QMARK_.call(null,G__23658)) && (cljs.core.contains_QMARK_.call(null,G__23658,new cljs.core.Keyword(null,"bg-img","bg-img",292271023))) && (cljs.core.contains_QMARK_.call(null,G__23658,new cljs.core.Keyword(null,"grey-bg?","grey-bg?",-614408471))) && (cljs.core.contains_QMARK_.call(null,G__23658,new cljs.core.Keyword(null,"nav-hint","nav-hint",859950035))) && (cljs.core.contains_QMARK_.call(null,G__23658,new cljs.core.Keyword(null,"nav-hint-style","nav-hint-style",228007241))) && (cljs.core.contains_QMARK_.call(null,G__23658,new cljs.core.Keyword(null,"route-name","route-name",-932603717))) && (cljs.core.contains_QMARK_.call(null,G__23658,new cljs.core.Keyword(null,"widgets","widgets",-159098978))) && (cljs.core.contains_QMARK_.call(null,G__23658,new cljs.core.Keyword(null,"route-name-editable","route-name-editable",-182971695))) && (cljs.core.contains_QMARK_.call(null,G__23658,new cljs.core.Keyword(null,"children","children",-940561982)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","bg-img","nnangpress.monolith/bg-img",-728752726),new cljs.core.Keyword("nnangpress.monolith","grey-bg?","nnangpress.monolith/grey-bg?",-537757468),new cljs.core.Keyword("nnangpress.monolith","nav-hint","nnangpress.monolith/nav-hint",-286174786),new cljs.core.Keyword("nnangpress.monolith","nav-hint-style","nnangpress.monolith/nav-hint-style",-907890862),new cljs.core.Keyword("nnangpress.monolith","route-name","nnangpress.monolith/route-name",215276274),new cljs.core.Keyword("nnangpress.monolith","widgets","nnangpress.monolith/widgets",-1552890469),new cljs.core.Keyword("nnangpress.monolith","route-name-editable","nnangpress.monolith/route-name-editable",965512394),new cljs.core.Keyword("nnangpress.monolith","children","nnangpress.monolith/children",-229853253)], null),null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg-img","bg-img",292271023),new cljs.core.Keyword(null,"grey-bg?","grey-bg?",-614408471),new cljs.core.Keyword(null,"nav-hint","nav-hint",859950035),new cljs.core.Keyword(null,"nav-hint-style","nav-hint-style",228007241),new cljs.core.Keyword(null,"route-name","route-name",-932603717),new cljs.core.Keyword(null,"widgets","widgets",-159098978),new cljs.core.Keyword(null,"route-name-editable","route-name-editable",-182971695),new cljs.core.Keyword(null,"children","children",-940561982)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"bg-img","bg-img",292271023))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"grey-bg?","grey-bg?",-614408471))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"nav-hint","nav-hint",859950035))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"nav-hint-style","nav-hint-style",228007241))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"route-name","route-name",-932603717))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"widgets","widgets",-159098978))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"route-name-editable","route-name-editable",-182971695))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"children","children",-940561982)))], null),null])));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("nnangpress.monolith","routes-map","nnangpress.monolith/routes-map",-523484550),new cljs.core.Keyword("nnangpress.monolith","route-map","nnangpress.monolith/route-map",-1589259218),new cljs.core.Keyword("nnangpress.monolith","route-map","nnangpress.monolith/route-map",-1589259218));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("nnangpress.monolith","route-widget","nnangpress.monolith/route-widget",713349860),cljs.core.list(new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","logo-data","nnangpress.monolith/logo-data",1922571263),new cljs.core.Keyword("nnangpress.monolith","main-view-style","nnangpress.monolith/main-view-style",279241402),new cljs.core.Keyword("nnangpress.monolith","nav-style","nnangpress.monolith/nav-style",1564613169),new cljs.core.Keyword("nnangpress.monolith","route-widget-id","nnangpress.monolith/route-widget-id",2018847605),new cljs.core.Keyword("nnangpress.monolith","routes-map","nnangpress.monolith/routes-map",-523484550)], null)),cljs.spec.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","logo-data","nnangpress.monolith/logo-data",1922571263),new cljs.core.Keyword("nnangpress.monolith","main-view-style","nnangpress.monolith/main-view-style",279241402),new cljs.core.Keyword("nnangpress.monolith","nav-style","nnangpress.monolith/nav-style",1564613169),new cljs.core.Keyword("nnangpress.monolith","route-widget-id","nnangpress.monolith/route-widget-id",2018847605),new cljs.core.Keyword("nnangpress.monolith","routes-map","nnangpress.monolith/routes-map",-523484550)], null),null,null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__23659){
return cljs.core.map_QMARK_.call(null,G__23659);
}),(function (G__23659){
return cljs.core.contains_QMARK_.call(null,G__23659,new cljs.core.Keyword(null,"logo-data","logo-data",940266002));
}),(function (G__23659){
return cljs.core.contains_QMARK_.call(null,G__23659,new cljs.core.Keyword(null,"main-view-style","main-view-style",1477538001));
}),(function (G__23659){
return cljs.core.contains_QMARK_.call(null,G__23659,new cljs.core.Keyword(null,"nav-style","nav-style",432903224));
}),(function (G__23659){
return cljs.core.contains_QMARK_.call(null,G__23659,new cljs.core.Keyword(null,"route-widget-id","route-widget-id",94355820));
}),(function (G__23659){
return cljs.core.contains_QMARK_.call(null,G__23659,new cljs.core.Keyword(null,"routes-map","routes-map",-676138881));
})], null),(function (G__23659){
return (cljs.core.map_QMARK_.call(null,G__23659)) && (cljs.core.contains_QMARK_.call(null,G__23659,new cljs.core.Keyword(null,"logo-data","logo-data",940266002))) && (cljs.core.contains_QMARK_.call(null,G__23659,new cljs.core.Keyword(null,"main-view-style","main-view-style",1477538001))) && (cljs.core.contains_QMARK_.call(null,G__23659,new cljs.core.Keyword(null,"nav-style","nav-style",432903224))) && (cljs.core.contains_QMARK_.call(null,G__23659,new cljs.core.Keyword(null,"route-widget-id","route-widget-id",94355820))) && (cljs.core.contains_QMARK_.call(null,G__23659,new cljs.core.Keyword(null,"routes-map","routes-map",-676138881)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","logo-data","nnangpress.monolith/logo-data",1922571263),new cljs.core.Keyword("nnangpress.monolith","main-view-style","nnangpress.monolith/main-view-style",279241402),new cljs.core.Keyword("nnangpress.monolith","nav-style","nnangpress.monolith/nav-style",1564613169),new cljs.core.Keyword("nnangpress.monolith","route-widget-id","nnangpress.monolith/route-widget-id",2018847605),new cljs.core.Keyword("nnangpress.monolith","routes-map","nnangpress.monolith/routes-map",-523484550)], null),null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"logo-data","logo-data",940266002),new cljs.core.Keyword(null,"main-view-style","main-view-style",1477538001),new cljs.core.Keyword(null,"nav-style","nav-style",432903224),new cljs.core.Keyword(null,"route-widget-id","route-widget-id",94355820),new cljs.core.Keyword(null,"routes-map","routes-map",-676138881)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"logo-data","logo-data",940266002))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"main-view-style","main-view-style",1477538001))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"nav-style","nav-style",432903224))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"route-widget-id","route-widget-id",94355820))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"routes-map","routes-map",-676138881)))], null),null])));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("nnangpress.monolith","renderable","nnangpress.monolith/renderable",-282467519),cljs.core.list(new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","route-widget","nnangpress.monolith/route-widget",713349860),new cljs.core.Keyword("nnangpress.monolith","all-navs-data","nnangpress.monolith/all-navs-data",-1041926349),new cljs.core.Keyword("nnangpress.monolith","sidebar-data","nnangpress.monolith/sidebar-data",328707432),new cljs.core.Keyword("nnangpress.monolith","site-name","nnangpress.monolith/site-name",-1043428236),new cljs.core.Keyword("nnangpress.monolith","uid","nnangpress.monolith/uid",1445012669),new cljs.core.Keyword("nnangpress.monolith","email","nnangpress.monolith/email",282075129),new cljs.core.Keyword("nnangpress.monolith","edit-mode","nnangpress.monolith/edit-mode",-1474609446),new cljs.core.Keyword("nnangpress.monolith","all-widgets-data","nnangpress.monolith/all-widgets-data",796049895),new cljs.core.Keyword("nnangpress.monolith","current-route","nnangpress.monolith/current-route",936351965),new cljs.core.Keyword("nnangpress.monolith","site-id-vec","nnangpress.monolith/site-id-vec",938929282),new cljs.core.Keyword("nnangpress.monolith","site-state","nnangpress.monolith/site-state",141087633)], null)),cljs.spec.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","route-widget","nnangpress.monolith/route-widget",713349860),new cljs.core.Keyword("nnangpress.monolith","all-navs-data","nnangpress.monolith/all-navs-data",-1041926349),new cljs.core.Keyword("nnangpress.monolith","sidebar-data","nnangpress.monolith/sidebar-data",328707432),new cljs.core.Keyword("nnangpress.monolith","site-name","nnangpress.monolith/site-name",-1043428236),new cljs.core.Keyword("nnangpress.monolith","uid","nnangpress.monolith/uid",1445012669),new cljs.core.Keyword("nnangpress.monolith","email","nnangpress.monolith/email",282075129),new cljs.core.Keyword("nnangpress.monolith","edit-mode","nnangpress.monolith/edit-mode",-1474609446),new cljs.core.Keyword("nnangpress.monolith","all-widgets-data","nnangpress.monolith/all-widgets-data",796049895),new cljs.core.Keyword("nnangpress.monolith","current-route","nnangpress.monolith/current-route",936351965),new cljs.core.Keyword("nnangpress.monolith","site-id-vec","nnangpress.monolith/site-id-vec",938929282),new cljs.core.Keyword("nnangpress.monolith","site-state","nnangpress.monolith/site-state",141087633)], null),null,null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__23660){
return cljs.core.map_QMARK_.call(null,G__23660);
}),(function (G__23660){
return cljs.core.contains_QMARK_.call(null,G__23660,new cljs.core.Keyword(null,"route-widget","route-widget",1702261979));
}),(function (G__23660){
return cljs.core.contains_QMARK_.call(null,G__23660,new cljs.core.Keyword(null,"all-navs-data","all-navs-data",-1653609188));
}),(function (G__23660){
return cljs.core.contains_QMARK_.call(null,G__23660,new cljs.core.Keyword(null,"sidebar-data","sidebar-data",-834207905));
}),(function (G__23660){
return cljs.core.contains_QMARK_.call(null,G__23660,new cljs.core.Keyword(null,"site-name","site-name",490410553));
}),(function (G__23660){
return cljs.core.contains_QMARK_.call(null,G__23660,new cljs.core.Keyword(null,"uid","uid",-1447769400));
}),(function (G__23660){
return cljs.core.contains_QMARK_.call(null,G__23660,new cljs.core.Keyword(null,"email","email",1415816706));
}),(function (G__23660){
return cljs.core.contains_QMARK_.call(null,G__23660,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993));
}),(function (G__23660){
return cljs.core.contains_QMARK_.call(null,G__23660,new cljs.core.Keyword(null,"all-widgets-data","all-widgets-data",-360687632));
}),(function (G__23660){
return cljs.core.contains_QMARK_.call(null,G__23660,new cljs.core.Keyword(null,"current-route","current-route",2067529448));
}),(function (G__23660){
return cljs.core.contains_QMARK_.call(null,G__23660,new cljs.core.Keyword(null,"site-id-vec","site-id-vec",-211589911));
}),(function (G__23660){
return cljs.core.contains_QMARK_.call(null,G__23660,new cljs.core.Keyword(null,"site-state","site-state",1268076938));
})], null),(function (G__23660){
return (cljs.core.map_QMARK_.call(null,G__23660)) && (cljs.core.contains_QMARK_.call(null,G__23660,new cljs.core.Keyword(null,"route-widget","route-widget",1702261979))) && (cljs.core.contains_QMARK_.call(null,G__23660,new cljs.core.Keyword(null,"all-navs-data","all-navs-data",-1653609188))) && (cljs.core.contains_QMARK_.call(null,G__23660,new cljs.core.Keyword(null,"sidebar-data","sidebar-data",-834207905))) && (cljs.core.contains_QMARK_.call(null,G__23660,new cljs.core.Keyword(null,"site-name","site-name",490410553))) && (cljs.core.contains_QMARK_.call(null,G__23660,new cljs.core.Keyword(null,"uid","uid",-1447769400))) && (cljs.core.contains_QMARK_.call(null,G__23660,new cljs.core.Keyword(null,"email","email",1415816706))) && (cljs.core.contains_QMARK_.call(null,G__23660,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993))) && (cljs.core.contains_QMARK_.call(null,G__23660,new cljs.core.Keyword(null,"all-widgets-data","all-widgets-data",-360687632))) && (cljs.core.contains_QMARK_.call(null,G__23660,new cljs.core.Keyword(null,"current-route","current-route",2067529448))) && (cljs.core.contains_QMARK_.call(null,G__23660,new cljs.core.Keyword(null,"site-id-vec","site-id-vec",-211589911))) && (cljs.core.contains_QMARK_.call(null,G__23660,new cljs.core.Keyword(null,"site-state","site-state",1268076938)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","route-widget","nnangpress.monolith/route-widget",713349860),new cljs.core.Keyword("nnangpress.monolith","all-navs-data","nnangpress.monolith/all-navs-data",-1041926349),new cljs.core.Keyword("nnangpress.monolith","sidebar-data","nnangpress.monolith/sidebar-data",328707432),new cljs.core.Keyword("nnangpress.monolith","site-name","nnangpress.monolith/site-name",-1043428236),new cljs.core.Keyword("nnangpress.monolith","uid","nnangpress.monolith/uid",1445012669),new cljs.core.Keyword("nnangpress.monolith","email","nnangpress.monolith/email",282075129),new cljs.core.Keyword("nnangpress.monolith","edit-mode","nnangpress.monolith/edit-mode",-1474609446),new cljs.core.Keyword("nnangpress.monolith","all-widgets-data","nnangpress.monolith/all-widgets-data",796049895),new cljs.core.Keyword("nnangpress.monolith","current-route","nnangpress.monolith/current-route",936351965),new cljs.core.Keyword("nnangpress.monolith","site-id-vec","nnangpress.monolith/site-id-vec",938929282),new cljs.core.Keyword("nnangpress.monolith","site-state","nnangpress.monolith/site-state",141087633)], null),null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-widget","route-widget",1702261979),new cljs.core.Keyword(null,"all-navs-data","all-navs-data",-1653609188),new cljs.core.Keyword(null,"sidebar-data","sidebar-data",-834207905),new cljs.core.Keyword(null,"site-name","site-name",490410553),new cljs.core.Keyword(null,"uid","uid",-1447769400),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),new cljs.core.Keyword(null,"all-widgets-data","all-widgets-data",-360687632),new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.Keyword(null,"site-id-vec","site-id-vec",-211589911),new cljs.core.Keyword(null,"site-state","site-state",1268076938)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"route-widget","route-widget",1702261979))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"all-navs-data","all-navs-data",-1653609188))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"sidebar-data","sidebar-data",-834207905))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"site-name","site-name",490410553))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"uid","uid",-1447769400))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"email","email",1415816706))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"all-widgets-data","all-widgets-data",-360687632))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"current-route","current-route",2067529448))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"site-id-vec","site-id-vec",-211589911))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"site-state","site-state",1268076938)))], null),null])));
if(typeof nnangpress.monolith.monolith !== 'undefined'){
} else {
nnangpress.monolith.monolith = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
nnangpress.monolith.nangpress_data_cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Essentially the simplest nangpress site possible, with a tutorial widget on the homepage.
 */
nnangpress.monolith.new_route_widget = (function nnangpress$monolith$new_route_widget(){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"logo-data","logo-data",940266002),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"logo-style","logo-style",-854181182),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"200%",new cljs.core.Keyword(null,"textTransform","textTransform",-1959669529),"inherit"], null),new cljs.core.Keyword(null,"logo-text","logo-text",-580816517),nnangpress.widgetdata.widget_data.call(null,(1))], null),new cljs.core.Keyword(null,"main-view-style","main-view-style",1477538001),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dispaly","dispaly",-441015022),"inherit",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"170px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"170px"], null)], null),new cljs.core.Keyword(null,"nav-style","nav-style",432903224),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#CE4072"], null),new cljs.core.Keyword(null,"route-widget-id","route-widget-id",94355820),(0),new cljs.core.Keyword(null,"routes-map","routes-map",-676138881),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"bg-img","bg-img",292271023),"http://i.imgur.com/vRVh0IX.jpg",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"bg-img","bg-img",292271023),"http://i.imgur.com/vRVh0IX.jpg",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"bg-img","bg-img",292271023),"http://i.imgur.com/vRVh0IX.jpg",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"grey-bg?","grey-bg?",-614408471),true,new cljs.core.Keyword(null,"nav-hint","nav-hint",859950035),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Architects"], null),new cljs.core.Keyword(null,"nav-hint-style","nav-hint-style",228007241),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"black"], null),new cljs.core.Keyword(null,"route-name","route-name",-932603717),"/child-ola-ola",new cljs.core.Keyword(null,"route-name-editable","route-name-editable",-182971695),nnangpress.widgetdata.widget_data.call(null,(16)),new cljs.core.Keyword(null,"widgets","widgets",-159098978),cljs.core.PersistentVector.EMPTY], null)], null),new cljs.core.Keyword(null,"grey-bg?","grey-bg?",-614408471),true,new cljs.core.Keyword(null,"nav-hint","nav-hint",859950035),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Architects"], null),new cljs.core.Keyword(null,"nav-hint-style","nav-hint-style",228007241),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"black"], null),new cljs.core.Keyword(null,"route-name","route-name",-932603717),"/parent-ola-ola",new cljs.core.Keyword(null,"route-name-editable","route-name-editable",-182971695),nnangpress.widgetdata.widget_data.call(null,(16)),new cljs.core.Keyword(null,"widgets","widgets",-159098978),cljs.core.PersistentVector.EMPTY], null)], null),new cljs.core.Keyword(null,"grey-bg?","grey-bg?",-614408471),true,new cljs.core.Keyword(null,"nav-hint","nav-hint",859950035),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Architects"], null),new cljs.core.Keyword(null,"nav-hint-style","nav-hint-style",228007241),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"black"], null),new cljs.core.Keyword(null,"route-name","route-name",-932603717),"/",new cljs.core.Keyword(null,"route-name-editable","route-name-editable",-182971695),nnangpress.widgetdata.widget_data.call(null,(16)),new cljs.core.Keyword(null,"widgets","widgets",-159098978),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nnangpress.widgetdata.widget_data.call(null,(15))], null)], null)], null);
});
nnangpress.monolith.new_site_template = (function nnangpress$monolith$new_site_template(){

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),nnangpress.widgetdata.widget_data.call(null,(1)),new cljs.core.Keyword(null,"description","description",-1428560544),nnangpress.widgetdata.widget_data.call(null,(1)),new cljs.core.Keyword(null,"site-id","site-id",-1581972488),nnangpress.utils.uid.call(null),new cljs.core.Keyword(null,"screenshot","screenshot",697978558),"http://i.imgur.com/ZV4TMBp.png",new cljs.core.Keyword(null,"route-widget","route-widget",1702261979),nnangpress.monolith.new_route_widget.call(null)], null);
});
/**
 * Get the whole data map for the current route, reqires a seq of the route segments.
 */
nnangpress.monolith.current_route_map = (function nnangpress$monolith$current_route_map(route,routes_map){
var xs = cljs.core.rest.call(null,route);
var fxs = cljs.core.first.call(null,xs);
var idx = nnangpress.utils.index_of.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"route-name","route-name",-932603717),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(routes_map))),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fxs)].join(''));
if(cljs.core.empty_QMARK_.call(null,xs)){
return routes_map;
} else {
return nnangpress.monolith.current_route_map.call(null,xs,cljs.core.get.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(routes_map),idx));

}
});
nnangpress.monolith.monolith_watcher_init = (function nnangpress$monolith$monolith_watcher_init(monolith){
return cljs.core.add_watch.call(null,monolith,new cljs.core.Keyword(null,"watcher","watcher",2145165251),(function (key,atom,old_state,new_state){
cljs.core.prn.call(null,"-- Atom Changed --");

cljs.core.prn.call(null,"-- Site id vec --");

cljs.core.prn.call(null,new cljs.core.Keyword(null,"site-id-vec","site-id-vec",-211589911).cljs$core$IFn$_invoke$arity$1(new_state));

cljs.core.prn.call(null,"-- Site state --");

return cljs.core.prn.call(null,new cljs.core.Keyword(null,"site-state","site-state",1268076938).cljs$core$IFn$_invoke$arity$1(new_state));
}));
});
cljs.spec.def_impl.call(null,new cljs.core.Symbol("nnangpress.monolith","ref-cursor-init","nnangpress.monolith/ref-cursor-init",-683372428,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"monolith","monolith",1206975929),new cljs.core.Symbol("nnangpress.utils","atom?","nnangpress.utils/atom?",-499947928,null))),cljs.spec.fspec_impl.call(null,cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"monolith","monolith",1206975929),new cljs.core.Symbol("nnangpress.utils","atom?","nnangpress.utils/atom?",-499947928,null)),cljs.spec.cat_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monolith","monolith",1206975929)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nnangpress.utils.atom_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("nnangpress.utils","atom?","nnangpress.utils/atom?",-499947928,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"monolith","monolith",1206975929),new cljs.core.Symbol("nnangpress.utils","atom?","nnangpress.utils/atom?",-499947928,null)),null,null,null,null,null));
/**
 * Defines our monolith API for convenient access to data further down the tree.
 */
nnangpress.monolith.ref_cursor_init = (function nnangpress$monolith$ref_cursor_init(monolith){
nnangpress.monolith.route_widget_data = (function nnangpress$monolith$ref_cursor_init_$_route_widget_data(){
return om.core.ref_cursor.call(null,new cljs.core.Keyword(null,"route-widget","route-widget",1702261979).cljs$core$IFn$_invoke$arity$1(om.core.root_cursor.call(null,monolith)));
});

nnangpress.monolith.all_navs_data = (function nnangpress$monolith$ref_cursor_init_$_all_navs_data(){
return om.core.ref_cursor.call(null,new cljs.core.Keyword(null,"all-navs-data","all-navs-data",-1653609188).cljs$core$IFn$_invoke$arity$1(om.core.root_cursor.call(null,monolith)));
});

nnangpress.monolith.sidebar_data = (function nnangpress$monolith$ref_cursor_init_$_sidebar_data(){
return om.core.ref_cursor.call(null,new cljs.core.Keyword(null,"sidebar-data","sidebar-data",-834207905).cljs$core$IFn$_invoke$arity$1(om.core.root_cursor.call(null,monolith)));
});

nnangpress.monolith.site_name = (function nnangpress$monolith$ref_cursor_init_$_site_name(){
return om.core.ref_cursor.call(null,new cljs.core.Keyword(null,"site-name","site-name",490410553).cljs$core$IFn$_invoke$arity$1(om.core.root_cursor.call(null,monolith)));
});

nnangpress.monolith.uid = (function nnangpress$monolith$ref_cursor_init_$_uid(){
return om.core.ref_cursor.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(om.core.root_cursor.call(null,monolith)));
});

nnangpress.monolith.user_email = (function nnangpress$monolith$ref_cursor_init_$_user_email(){
return om.core.ref_cursor.call(null,new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(om.core.root_cursor.call(null,monolith)));
});

nnangpress.monolith.all_data = (function nnangpress$monolith$ref_cursor_init_$_all_data(){
return om.core.ref_cursor.call(null,om.core.root_cursor.call(null,monolith));
});

nnangpress.monolith.main_view_style = (function nnangpress$monolith$ref_cursor_init_$_main_view_style(){
return om.core.ref_cursor.call(null,new cljs.core.Keyword(null,"main-view-style","main-view-style",1477538001).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"route-widget","route-widget",1702261979).cljs$core$IFn$_invoke$arity$1(om.core.root_cursor.call(null,monolith))));
});

nnangpress.monolith.edit_mode = (function nnangpress$monolith$ref_cursor_init_$_edit_mode(){
return om.core.ref_cursor.call(null,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993).cljs$core$IFn$_invoke$arity$1(om.core.root_cursor.call(null,monolith)));
});

nnangpress.monolith.all_widgets_data = (function nnangpress$monolith$ref_cursor_init_$_all_widgets_data(){
return om.core.ref_cursor.call(null,new cljs.core.Keyword(null,"all-widgets-data","all-widgets-data",-360687632).cljs$core$IFn$_invoke$arity$1(om.core.root_cursor.call(null,monolith)));
});

nnangpress.monolith.routes_map = (function nnangpress$monolith$ref_cursor_init_$_routes_map(){
return om.core.ref_cursor.call(null,new cljs.core.Keyword(null,"routes-map","routes-map",-676138881).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"route-widget","route-widget",1702261979).cljs$core$IFn$_invoke$arity$1(om.core.root_cursor.call(null,monolith))));
});

nnangpress.monolith.current_route = (function nnangpress$monolith$ref_cursor_init_$_current_route(){
return om.core.ref_cursor.call(null,new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(om.core.root_cursor.call(null,monolith)));
});

return (
nnangpress.monolith.logo_hint = (function nnangpress$monolith$ref_cursor_init_$_logo_hint(){
return om.core.ref_cursor.call(null,new cljs.core.Keyword(null,"nav-hint","nav-hint",859950035).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"routes-map","routes-map",-676138881).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"route-widget","route-widget",1702261979).cljs$core$IFn$_invoke$arity$1(om.core.root_cursor.call(null,monolith)))));
}))
;
});
cljs.spec.def_impl.call(null,new cljs.core.Symbol("nnangpress.monolith","current-widgets","nnangpress.monolith/current-widgets",-2023063892,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"rotues-map","rotues-map",2147022290),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.fspec_impl.call(null,cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"rotues-map","rotues-map",2147022290),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"rotues-map","rotues-map",2147022290)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"rotues-map","rotues-map",2147022290),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),null,null,null,null,null));
/**
 * Get the widget(s) data for the current route
 */
nnangpress.monolith.current_widgets = (function nnangpress$monolith$current_widgets(route,routes_map){
var xs = cljs.core.rest.call(null,route);
var fxs = cljs.core.first.call(null,xs);
var idx = nnangpress.utils.index_of.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"route-name","route-name",-932603717),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(routes_map))),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fxs)].join(''));
if(cljs.core.empty_QMARK_.call(null,xs)){
return new cljs.core.Keyword(null,"widgets","widgets",-159098978).cljs$core$IFn$_invoke$arity$1(routes_map);
} else {
return nnangpress.monolith.current_widgets.call(null,xs,cljs.core.get.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(routes_map),idx));

}
});
/**
 * A wrapper around the raw current-widgets function. Initializes required reference cursors in order to return the 
 *   current widgets cursor.
 */
nnangpress.monolith.current_widgets_builder_LT__LT_ = (function nnangpress$monolith$current_widgets_builder_LT__LT_(owner){
var routes_map_obs = om.core.observe.call(null,owner,nnangpress.monolith.routes_map.call(null));
var current_route_obs = om.core.observe.call(null,owner,nnangpress.monolith.current_route.call(null));
var current_widgets = nnangpress.monolith.current_widgets.call(null,clojure.string.split.call(null,cljs.core.first.call(null,cljs.core.deref.call(null,current_route_obs)),/\//),routes_map_obs);
return current_widgets;
});
cljs.spec.def_impl.call(null,new cljs.core.Symbol("nnangpress.monolith","update-all","nnangpress.monolith/update-all",-1547891547,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("nnangpress.monolith","renderable","nnangpress.monolith/renderable",-282467519))),cljs.spec.fspec_impl.call(null,cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("nnangpress.monolith","renderable","nnangpress.monolith/renderable",-282467519)),cljs.spec.cat_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","renderable","nnangpress.monolith/renderable",-282467519)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","renderable","nnangpress.monolith/renderable",-282467519)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("nnangpress.monolith","renderable","nnangpress.monolith/renderable",-282467519)),null,null,null,null,null));
/**
 * Replace the entire monolith with a new monolith
 */
nnangpress.monolith.update_all = (function nnangpress$monolith$update_all(data){
return om.core.update_BANG_.call(null,nnangpress.monolith.all_data.call(null),data);
});
/**
 * Add current user email to data map
 */
nnangpress.monolith.add_current_user_email = (function nnangpress$monolith$add_current_user_email(data){
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"email","email",1415816706),nnangpress.monolith.user_email.call(null));
});
/**
 * Add current user email to data map
 */
nnangpress.monolith.add_current_uid = (function nnangpress$monolith$add_current_uid(data){
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"uid","uid",-1447769400),cljs.core.deref.call(null,nnangpress.monolith.uid.call(null)));
});
cljs.spec.def_impl.call(null,new cljs.core.Symbol("nnangpress.monolith","set-site-state","nnangpress.monolith/set-site-state",-870647189,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"renderable","renderable",-1247325782),new cljs.core.Keyword("nnangpress.monolith","renderable","nnangpress.monolith/renderable",-282467519),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))),cljs.spec.fspec_impl.call(null,cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"renderable","renderable",-1247325782),new cljs.core.Keyword("nnangpress.monolith","renderable","nnangpress.monolith/renderable",-282467519),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"renderable","renderable",-1247325782),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","renderable","nnangpress.monolith/renderable",-282467519),cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","renderable","nnangpress.monolith/renderable",-282467519),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"renderable","renderable",-1247325782),new cljs.core.Keyword("nnangpress.monolith","renderable","nnangpress.monolith/renderable",-282467519),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),null,null,null,null,null));
/**
 * 
 */
nnangpress.monolith.set_site_state = (function nnangpress$monolith$set_site_state(renderable,state){
return cljs.core.assoc.call(null,renderable,new cljs.core.Keyword(null,"site-state","site-state",1268076938),state);
});
/**
 * Toggle edit mode
 */
nnangpress.monolith.toggle_edit_mode = (function nnangpress$monolith$toggle_edit_mode(){
om.core.transact_BANG_.call(null,nnangpress.monolith.sidebar_data.call(null),new cljs.core.Keyword(null,"sidebar-visible","sidebar-visible",-1702604121),nnangpress.utils.toggle);

return om.core.transact_BANG_.call(null,nnangpress.monolith.edit_mode.call(null),(function (dabool){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not.call(null,cljs.core.first.call(null,dabool))], null);
}));
});
cljs.spec.def_impl.call(null,new cljs.core.Symbol("nnangpress.monolith","clj-empty->firebase-empty","nnangpress.monolith/clj-empty->firebase-empty",-573325532,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.fspec_impl.call(null,cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.cat_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),null,null,null,null,null));
/**
 * Opposite of firebase-empty->clj-empty
 */
nnangpress.monolith.clj_empty__GT_firebase_empty = (function nnangpress$monolith$clj_empty__GT_firebase_empty(data){
return clojure.walk.postwalk.call(null,(function (x){
if((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core.empty_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
} else {
return x;
}
}),data);
});
cljs.spec.def_impl.call(null,new cljs.core.Symbol("nnangpress.monolith","reset-monolith-atom!","nnangpress.monolith/reset-monolith-atom!",-1411299602,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("nnangpress.monolith","renderable","nnangpress.monolith/renderable",-282467519))),cljs.spec.fspec_impl.call(null,cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("nnangpress.monolith","renderable","nnangpress.monolith/renderable",-282467519)),cljs.spec.cat_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","renderable","nnangpress.monolith/renderable",-282467519)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","renderable","nnangpress.monolith/renderable",-282467519)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("nnangpress.monolith","renderable","nnangpress.monolith/renderable",-282467519)),null,null,null,null,null));
nnangpress.monolith.reset_monolith_atom_BANG_ = (function nnangpress$monolith$reset_monolith_atom_BANG_(data){
return cljs.core.reset_BANG_.call(null,nnangpress.monolith.monolith,data);
});
cljs.spec.def_impl.call(null,new cljs.core.Symbol("nnangpress.monolith","get-user-sites","nnangpress.monolith/get-user-sites",-1749444158,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"uid","uid",-1447769400),new cljs.core.Keyword("nnangpress.monolith","authed-uid-raw","nnangpress.monolith/authed-uid-raw",-2022015200),new cljs.core.Keyword(null,"chan","chan",-2103021695),new cljs.core.Keyword("nnangpress.monolith","channel","nnangpress.monolith/channel",-810593631))),cljs.spec.fspec_impl.call(null,cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"uid","uid",-1447769400),new cljs.core.Keyword("nnangpress.monolith","authed-uid-raw","nnangpress.monolith/authed-uid-raw",-2022015200),new cljs.core.Keyword(null,"chan","chan",-2103021695),new cljs.core.Keyword("nnangpress.monolith","channel","nnangpress.monolith/channel",-810593631)),cljs.spec.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uid","uid",-1447769400),new cljs.core.Keyword(null,"chan","chan",-2103021695)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","authed-uid-raw","nnangpress.monolith/authed-uid-raw",-2022015200),new cljs.core.Keyword("nnangpress.monolith","channel","nnangpress.monolith/channel",-810593631)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","authed-uid-raw","nnangpress.monolith/authed-uid-raw",-2022015200),new cljs.core.Keyword("nnangpress.monolith","channel","nnangpress.monolith/channel",-810593631)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"uid","uid",-1447769400),new cljs.core.Keyword("nnangpress.monolith","authed-uid-raw","nnangpress.monolith/authed-uid-raw",-2022015200),new cljs.core.Keyword(null,"chan","chan",-2103021695),new cljs.core.Keyword("nnangpress.monolith","channel","nnangpress.monolith/channel",-810593631)),null,null,null,null,null));
/**
 * Get all the site data for a given user
 */
nnangpress.monolith.get_user_sites = (function nnangpress$monolith$get_user_sites(uid,chan){
return nnangpress.firebase.firebase_get.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("users/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/sites")].join(''),chan);
});
cljs.spec.def_impl.call(null,new cljs.core.Symbol("nnangpress.monolith","user-site-index","nnangpress.monolith/user-site-index",-1754067388,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"uid","uid",-1447769400),new cljs.core.Keyword("nnangpress.monolith","authed-uid-raw","nnangpress.monolith/authed-uid-raw",-2022015200),new cljs.core.Keyword(null,"site-name","site-name",490410553),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("nnangpress.monolith","channel","nnangpress.monolith/channel",-810593631)),cljs.spec.fspec_impl.call(null,cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"uid","uid",-1447769400),new cljs.core.Keyword("nnangpress.monolith","authed-uid-raw","nnangpress.monolith/authed-uid-raw",-2022015200),new cljs.core.Keyword(null,"site-name","site-name",490410553),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uid","uid",-1447769400),new cljs.core.Keyword(null,"site-name","site-name",490410553)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","authed-uid-raw","nnangpress.monolith/authed-uid-raw",-2022015200),cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","authed-uid-raw","nnangpress.monolith/authed-uid-raw",-2022015200),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"uid","uid",-1447769400),new cljs.core.Keyword("nnangpress.monolith","authed-uid-raw","nnangpress.monolith/authed-uid-raw",-2022015200),new cljs.core.Keyword(null,"site-name","site-name",490410553),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.spec_impl.call(null,new cljs.core.Keyword("nnangpress.monolith","channel","nnangpress.monolith/channel",-810593631),new cljs.core.Keyword("nnangpress.monolith","channel","nnangpress.monolith/channel",-810593631),null,null),new cljs.core.Keyword("nnangpress.monolith","channel","nnangpress.monolith/channel",-810593631),null,null,null));
/**
 * Get the index of a user's site
 */
nnangpress.monolith.user_site_index = (function nnangpress$monolith$user_site_index(uid,site_id){
var c = cljs.core.async.chan.call(null);
var c__19461__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19461__auto__,c){
return (function (){
var f__19462__auto__ = (function (){var switch__19403__auto__ = ((function (c__19461__auto__,c){
return (function (state_23681){
var state_val_23682 = (state_23681[(1)]);
if((state_val_23682 === (1))){
var inst_23676 = nnangpress.monolith.get_user_sites.call(null,uid,c);
var state_23681__$1 = (function (){var statearr_23683 = state_23681;
(statearr_23683[(7)] = inst_23676);

return statearr_23683;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23681__$1,(2),c);
} else {
if((state_val_23682 === (2))){
var inst_23678 = (state_23681[(2)]);
var inst_23679 = nnangpress.utils.index_of_key_val.call(null,inst_23678,new cljs.core.Keyword(null,"site-id","site-id",-1581972488),site_id);
var state_23681__$1 = state_23681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23681__$1,inst_23679);
} else {
return null;
}
}
});})(c__19461__auto__,c))
;
return ((function (switch__19403__auto__,c__19461__auto__,c){
return (function() {
var nnangpress$monolith$user_site_index_$_state_machine__19404__auto__ = null;
var nnangpress$monolith$user_site_index_$_state_machine__19404__auto____0 = (function (){
var statearr_23687 = [null,null,null,null,null,null,null,null];
(statearr_23687[(0)] = nnangpress$monolith$user_site_index_$_state_machine__19404__auto__);

(statearr_23687[(1)] = (1));

return statearr_23687;
});
var nnangpress$monolith$user_site_index_$_state_machine__19404__auto____1 = (function (state_23681){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_23681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e23688){if((e23688 instanceof Object)){
var ex__19407__auto__ = e23688;
var statearr_23689_23691 = state_23681;
(statearr_23689_23691[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23692 = state_23681;
state_23681 = G__23692;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
nnangpress$monolith$user_site_index_$_state_machine__19404__auto__ = function(state_23681){
switch(arguments.length){
case 0:
return nnangpress$monolith$user_site_index_$_state_machine__19404__auto____0.call(this);
case 1:
return nnangpress$monolith$user_site_index_$_state_machine__19404__auto____1.call(this,state_23681);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
nnangpress$monolith$user_site_index_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = nnangpress$monolith$user_site_index_$_state_machine__19404__auto____0;
nnangpress$monolith$user_site_index_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = nnangpress$monolith$user_site_index_$_state_machine__19404__auto____1;
return nnangpress$monolith$user_site_index_$_state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19461__auto__,c))
})();
var state__19463__auto__ = (function (){var statearr_23690 = f__19462__auto__.call(null);
(statearr_23690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19461__auto__);

return statearr_23690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19463__auto__);
});})(c__19461__auto__,c))
);

return c__19461__auto__;
});
/**
 * Take a screenshot using html2canvas and returns a data uri string.
 */
nnangpress.monolith.screenshot_data_uri = (function nnangpress$monolith$screenshot_data_uri(out){
return html2canvas(nnangpress.dom.get_node_by_id.call(null,"body"),({"background": "#95a5a6", "onrendered": (function (canvas){
return cljs.core.async.put_BANG_.call(null,out,canvas.toDataURL());
})}));
});
cljs.spec.def_impl.call(null,new cljs.core.Symbol("nnangpress.monolith","save-site-data","nnangpress.monolith/save-site-data",-56046368,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),new cljs.core.Keyword(null,"three-args","three-args",298707074),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"uid","uid",-1447769400),new cljs.core.Keyword("nnangpress.monolith","authed-uid-raw","nnangpress.monolith/authed-uid-raw",-2022015200),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.list(new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null),new cljs.core.Keyword(null,"new-site","new-site",1569364387),new cljs.core.Keyword("nnangpress.monolith","site-with-meta","nnangpress.monolith/site-with-meta",1425946347),new cljs.core.Keyword(null,"update-site","update-site",1636646659),cljs.core.list(new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","screenshot","nnangpress.monolith/screenshot",-164714251),new cljs.core.Keyword("nnangpress.monolith","route-widget","nnangpress.monolith/route-widget",713349860)], null))),new cljs.core.Keyword(null,"idx-or-name","idx-or-name",-1320174238),cljs.core.list(new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null),new cljs.core.Keyword(null,"idx","idx",1053688473),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),new cljs.core.Keyword(null,"site-name","site-name",490410553),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))))),cljs.spec.fspec_impl.call(null,cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),new cljs.core.Keyword(null,"three-args","three-args",298707074),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"uid","uid",-1447769400),new cljs.core.Keyword("nnangpress.monolith","authed-uid-raw","nnangpress.monolith/authed-uid-raw",-2022015200),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.list(new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null),new cljs.core.Keyword(null,"new-site","new-site",1569364387),new cljs.core.Keyword("nnangpress.monolith","site-with-meta","nnangpress.monolith/site-with-meta",1425946347),new cljs.core.Keyword(null,"update-site","update-site",1636646659),cljs.core.list(new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","screenshot","nnangpress.monolith/screenshot",-164714251),new cljs.core.Keyword("nnangpress.monolith","route-widget","nnangpress.monolith/route-widget",713349860)], null))),new cljs.core.Keyword(null,"idx-or-name","idx-or-name",-1320174238),cljs.core.list(new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null),new cljs.core.Keyword(null,"idx","idx",1053688473),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),new cljs.core.Keyword(null,"site-name","site-name",490410553),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)))),cljs.spec.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"three-args","three-args",298707074)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"uid","uid",-1447769400),new cljs.core.Keyword("nnangpress.monolith","authed-uid-raw","nnangpress.monolith/authed-uid-raw",-2022015200),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.list(new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null),new cljs.core.Keyword(null,"new-site","new-site",1569364387),new cljs.core.Keyword("nnangpress.monolith","site-with-meta","nnangpress.monolith/site-with-meta",1425946347),new cljs.core.Keyword(null,"update-site","update-site",1636646659),cljs.core.list(new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","screenshot","nnangpress.monolith/screenshot",-164714251),new cljs.core.Keyword("nnangpress.monolith","route-widget","nnangpress.monolith/route-widget",713349860)], null))),new cljs.core.Keyword(null,"idx-or-name","idx-or-name",-1320174238),cljs.core.list(new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null),new cljs.core.Keyword(null,"idx","idx",1053688473),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),new cljs.core.Keyword(null,"site-name","site-name",490410553),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty_QMARK_,cljs.spec.cat_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uid","uid",-1447769400),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"idx-or-name","idx-or-name",-1320174238)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","authed-uid-raw","nnangpress.monolith/authed-uid-raw",-2022015200),cljs.spec.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-site","new-site",1569364387),new cljs.core.Keyword(null,"update-site","update-site",1636646659)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","site-with-meta","nnangpress.monolith/site-with-meta",1425946347),cljs.core.list(new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","screenshot","nnangpress.monolith/screenshot",-164714251),new cljs.core.Keyword("nnangpress.monolith","route-widget","nnangpress.monolith/route-widget",713349860)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","site-with-meta","nnangpress.monolith/site-with-meta",1425946347),cljs.spec.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","screenshot","nnangpress.monolith/screenshot",-164714251),new cljs.core.Keyword("nnangpress.monolith","route-widget","nnangpress.monolith/route-widget",713349860)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__23693){
return cljs.core.map_QMARK_.call(null,G__23693);
}),(function (G__23693){
return cljs.core.contains_QMARK_.call(null,G__23693,new cljs.core.Keyword(null,"screenshot","screenshot",697978558));
}),(function (G__23693){
return cljs.core.contains_QMARK_.call(null,G__23693,new cljs.core.Keyword(null,"route-widget","route-widget",1702261979));
})], null),(function (G__23693){
return (cljs.core.map_QMARK_.call(null,G__23693)) && (cljs.core.contains_QMARK_.call(null,G__23693,new cljs.core.Keyword(null,"screenshot","screenshot",697978558))) && (cljs.core.contains_QMARK_.call(null,G__23693,new cljs.core.Keyword(null,"route-widget","route-widget",1702261979)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","screenshot","nnangpress.monolith/screenshot",-164714251),new cljs.core.Keyword("nnangpress.monolith","route-widget","nnangpress.monolith/route-widget",713349860)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screenshot","screenshot",697978558),new cljs.core.Keyword(null,"route-widget","route-widget",1702261979)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"screenshot","screenshot",697978558))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"route-widget","route-widget",1702261979)))], null),null]))], null),null),cljs.spec.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473),new cljs.core.Keyword(null,"site-name","site-name",490410553)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.int_QMARK_,cljs.core.string_QMARK_], null),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","authed-uid-raw","nnangpress.monolith/authed-uid-raw",-2022015200),cljs.core.list(new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null),new cljs.core.Keyword(null,"new-site","new-site",1569364387),new cljs.core.Keyword("nnangpress.monolith","site-with-meta","nnangpress.monolith/site-with-meta",1425946347),new cljs.core.Keyword(null,"update-site","update-site",1636646659),cljs.core.list(new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","screenshot","nnangpress.monolith/screenshot",-164714251),new cljs.core.Keyword("nnangpress.monolith","route-widget","nnangpress.monolith/route-widget",713349860)], null))),cljs.core.list(new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null),new cljs.core.Keyword(null,"idx","idx",1053688473),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),new cljs.core.Keyword(null,"site-name","site-name",490410553),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))], null))], null),null),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),new cljs.core.Keyword(null,"three-args","three-args",298707074),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"uid","uid",-1447769400),new cljs.core.Keyword("nnangpress.monolith","authed-uid-raw","nnangpress.monolith/authed-uid-raw",-2022015200),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.list(new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null),new cljs.core.Keyword(null,"new-site","new-site",1569364387),new cljs.core.Keyword("nnangpress.monolith","site-with-meta","nnangpress.monolith/site-with-meta",1425946347),new cljs.core.Keyword(null,"update-site","update-site",1636646659),cljs.core.list(new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","screenshot","nnangpress.monolith/screenshot",-164714251),new cljs.core.Keyword("nnangpress.monolith","route-widget","nnangpress.monolith/route-widget",713349860)], null))),new cljs.core.Keyword(null,"idx-or-name","idx-or-name",-1320174238),cljs.core.list(new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null),new cljs.core.Keyword(null,"idx","idx",1053688473),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),new cljs.core.Keyword(null,"site-name","site-name",490410553),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)))),null,null,null,null,null));
/**
 * Save a user's site data by site name or index. Saves to site meta only updating route-map and screenshot.
 */
nnangpress.monolith.save_site_data = (function nnangpress$monolith$save_site_data(var_args){
var args23694 = [];
var len__13041__auto___23786 = arguments.length;
var i__13042__auto___23787 = (0);
while(true){
if((i__13042__auto___23787 < len__13041__auto___23786)){
args23694.push((arguments[i__13042__auto___23787]));

var G__23788 = (i__13042__auto___23787 + (1));
i__13042__auto___23787 = G__23788;
continue;
} else {
}
break;
}

var G__23696 = args23694.length;
switch (G__23696) {
case 0:
return nnangpress.monolith.save_site_data.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return nnangpress.monolith.save_site_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23694.length)].join('')));

}
});

nnangpress.monolith.save_site_data.cljs$core$IFn$_invoke$arity$0 = (function (){
var c__19461__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19461__auto__){
return (function (){
var f__19462__auto__ = (function (){var switch__19403__auto__ = ((function (c__19461__auto__){
return (function (state_23737){
var state_val_23738 = (state_23737[(1)]);
if((state_val_23738 === (7))){
var inst_23714 = (state_23737[(2)]);
var state_23737__$1 = state_23737;
var statearr_23739_23790 = state_23737__$1;
(statearr_23739_23790[(2)] = inst_23714);

(statearr_23739_23790[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23738 === (1))){
var inst_23698 = (state_23737[(7)]);
var inst_23701 = (state_23737[(8)]);
var inst_23698__$1 = cljs.core.async.chan.call(null);
var inst_23699 = nnangpress.monolith.screenshot_data_uri.call(null,inst_23698__$1);
var inst_23700 = nnangpress.monolith.all_data.call(null);
var inst_23701__$1 = cljs.core.deref.call(null,inst_23700);
var inst_23703 = (inst_23701__$1 == null);
var inst_23704 = cljs.core.not.call(null,inst_23703);
var state_23737__$1 = (function (){var statearr_23740 = state_23737;
(statearr_23740[(9)] = inst_23699);

(statearr_23740[(7)] = inst_23698__$1);

(statearr_23740[(8)] = inst_23701__$1);

return statearr_23740;
})();
if(inst_23704){
var statearr_23741_23791 = state_23737__$1;
(statearr_23741_23791[(1)] = (2));

} else {
var statearr_23742_23792 = state_23737__$1;
(statearr_23742_23792[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23738 === (4))){
var inst_23717 = (state_23737[(2)]);
var state_23737__$1 = state_23737;
if(cljs.core.truth_(inst_23717)){
var statearr_23743_23793 = state_23737__$1;
(statearr_23743_23793[(1)] = (8));

} else {
var statearr_23744_23794 = state_23737__$1;
(statearr_23744_23794[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23738 === (6))){
var state_23737__$1 = state_23737;
var statearr_23745_23795 = state_23737__$1;
(statearr_23745_23795[(2)] = false);

(statearr_23745_23795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23738 === (3))){
var state_23737__$1 = state_23737;
var statearr_23746_23796 = state_23737__$1;
(statearr_23746_23796[(2)] = false);

(statearr_23746_23796[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23738 === (2))){
var inst_23701 = (state_23737[(8)]);
var inst_23706 = inst_23701.cljs$lang$protocol_mask$partition0$;
var inst_23707 = (inst_23706 & (64));
var inst_23708 = inst_23701.cljs$core$ISeq$;
var inst_23709 = (cljs.core.PROTOCOL_SENTINEL === inst_23708);
var inst_23710 = (inst_23707) || (inst_23709);
var state_23737__$1 = state_23737;
if(cljs.core.truth_(inst_23710)){
var statearr_23747_23797 = state_23737__$1;
(statearr_23747_23797[(1)] = (5));

} else {
var statearr_23748_23798 = state_23737__$1;
(statearr_23748_23798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23738 === (11))){
var inst_23725 = (state_23737[(10)]);
var inst_23729 = (state_23737[(11)]);
var inst_23724 = (state_23737[(12)]);
var inst_23728 = (state_23737[(13)]);
var inst_23731 = (state_23737[(2)]);
var inst_23732 = [inst_23731,inst_23725];
var inst_23733 = cljs.core.PersistentHashMap.fromArrays(inst_23729,inst_23732);
var inst_23734 = cljs.core.first.call(null,inst_23724);
var inst_23735 = nnangpress.monolith.save_site_data.call(null,inst_23728,inst_23733,inst_23734);
var state_23737__$1 = state_23737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23737__$1,inst_23735);
} else {
if((state_val_23738 === (9))){
var inst_23701 = (state_23737[(8)]);
var state_23737__$1 = state_23737;
var statearr_23749_23799 = state_23737__$1;
(statearr_23749_23799[(2)] = inst_23701);

(statearr_23749_23799[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23738 === (5))){
var state_23737__$1 = state_23737;
var statearr_23750_23800 = state_23737__$1;
(statearr_23750_23800[(2)] = true);

(statearr_23750_23800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23738 === (10))){
var inst_23698 = (state_23737[(7)]);
var inst_23722 = (state_23737[(2)]);
var inst_23723 = cljs.core.get.call(null,inst_23722,new cljs.core.Keyword(null,"site-name","site-name",490410553));
var inst_23724 = cljs.core.get.call(null,inst_23722,new cljs.core.Keyword(null,"site-id-vec","site-id-vec",-211589911));
var inst_23725 = cljs.core.get.call(null,inst_23722,new cljs.core.Keyword(null,"route-widget","route-widget",1702261979));
var inst_23726 = nnangpress.monolith.uid.call(null);
var inst_23727 = cljs.core.deref.call(null,inst_23726);
var inst_23728 = cljs.core.first.call(null,inst_23727);
var inst_23729 = [new cljs.core.Keyword(null,"screenshot","screenshot",697978558),new cljs.core.Keyword(null,"route-widget","route-widget",1702261979)];
var state_23737__$1 = (function (){var statearr_23751 = state_23737;
(statearr_23751[(10)] = inst_23725);

(statearr_23751[(11)] = inst_23729);

(statearr_23751[(12)] = inst_23724);

(statearr_23751[(14)] = inst_23723);

(statearr_23751[(13)] = inst_23728);

return statearr_23751;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23737__$1,(11),inst_23698);
} else {
if((state_val_23738 === (8))){
var inst_23701 = (state_23737[(8)]);
var inst_23719 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23701);
var state_23737__$1 = state_23737;
var statearr_23752_23801 = state_23737__$1;
(statearr_23752_23801[(2)] = inst_23719);

(statearr_23752_23801[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19461__auto__))
;
return ((function (switch__19403__auto__,c__19461__auto__){
return (function() {
var nnangpress$monolith$state_machine__19404__auto__ = null;
var nnangpress$monolith$state_machine__19404__auto____0 = (function (){
var statearr_23756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23756[(0)] = nnangpress$monolith$state_machine__19404__auto__);

(statearr_23756[(1)] = (1));

return statearr_23756;
});
var nnangpress$monolith$state_machine__19404__auto____1 = (function (state_23737){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_23737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e23757){if((e23757 instanceof Object)){
var ex__19407__auto__ = e23757;
var statearr_23758_23802 = state_23737;
(statearr_23758_23802[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23803 = state_23737;
state_23737 = G__23803;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
nnangpress$monolith$state_machine__19404__auto__ = function(state_23737){
switch(arguments.length){
case 0:
return nnangpress$monolith$state_machine__19404__auto____0.call(this);
case 1:
return nnangpress$monolith$state_machine__19404__auto____1.call(this,state_23737);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
nnangpress$monolith$state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = nnangpress$monolith$state_machine__19404__auto____0;
nnangpress$monolith$state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = nnangpress$monolith$state_machine__19404__auto____1;
return nnangpress$monolith$state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19461__auto__))
})();
var state__19463__auto__ = (function (){var statearr_23759 = f__19462__auto__.call(null);
(statearr_23759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19461__auto__);

return statearr_23759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19463__auto__);
});})(c__19461__auto__))
);

return c__19461__auto__;
});

nnangpress.monolith.save_site_data.cljs$core$IFn$_invoke$arity$3 = (function (uid,data,idx_or_site_name){
var c__19461__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19461__auto__){
return (function (){
var f__19462__auto__ = (function (){var switch__19403__auto__ = ((function (c__19461__auto__){
return (function (state_23773){
var state_val_23774 = (state_23773[(1)]);
if((state_val_23774 === (1))){
var inst_23760 = cljs.core.int_QMARK_.call(null,idx_or_site_name);
var state_23773__$1 = state_23773;
if(inst_23760){
var statearr_23775_23804 = state_23773__$1;
(statearr_23775_23804[(1)] = (2));

} else {
var statearr_23776_23805 = state_23773__$1;
(statearr_23776_23805[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (2))){
var inst_23762 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("users/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/sites/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx_or_site_name)].join('');
var inst_23763 = nnangpress.firebase.fb_update.call(null,inst_23762,data);
var state_23773__$1 = state_23773;
var statearr_23777_23806 = state_23773__$1;
(statearr_23777_23806[(2)] = inst_23763);

(statearr_23777_23806[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (3))){
var inst_23765 = nnangpress.monolith.user_site_index.call(null,uid,idx_or_site_name);
var state_23773__$1 = state_23773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23773__$1,(5),inst_23765);
} else {
if((state_val_23774 === (4))){
var inst_23771 = (state_23773[(2)]);
var state_23773__$1 = state_23773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23773__$1,inst_23771);
} else {
if((state_val_23774 === (5))){
var inst_23767 = (state_23773[(2)]);
var inst_23768 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("users/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/sites/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23767)].join('');
var inst_23769 = nnangpress.firebase.fb_update.call(null,inst_23768,data);
var state_23773__$1 = state_23773;
var statearr_23778_23807 = state_23773__$1;
(statearr_23778_23807[(2)] = inst_23769);

(statearr_23778_23807[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__19461__auto__))
;
return ((function (switch__19403__auto__,c__19461__auto__){
return (function() {
var nnangpress$monolith$state_machine__19404__auto__ = null;
var nnangpress$monolith$state_machine__19404__auto____0 = (function (){
var statearr_23782 = [null,null,null,null,null,null,null];
(statearr_23782[(0)] = nnangpress$monolith$state_machine__19404__auto__);

(statearr_23782[(1)] = (1));

return statearr_23782;
});
var nnangpress$monolith$state_machine__19404__auto____1 = (function (state_23773){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_23773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e23783){if((e23783 instanceof Object)){
var ex__19407__auto__ = e23783;
var statearr_23784_23808 = state_23773;
(statearr_23784_23808[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23809 = state_23773;
state_23773 = G__23809;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
nnangpress$monolith$state_machine__19404__auto__ = function(state_23773){
switch(arguments.length){
case 0:
return nnangpress$monolith$state_machine__19404__auto____0.call(this);
case 1:
return nnangpress$monolith$state_machine__19404__auto____1.call(this,state_23773);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
nnangpress$monolith$state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = nnangpress$monolith$state_machine__19404__auto____0;
nnangpress$monolith$state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = nnangpress$monolith$state_machine__19404__auto____1;
return nnangpress$monolith$state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19461__auto__))
})();
var state__19463__auto__ = (function (){var statearr_23785 = f__19462__auto__.call(null);
(statearr_23785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19461__auto__);

return statearr_23785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19463__auto__);
});})(c__19461__auto__))
);

return c__19461__auto__;
});

nnangpress.monolith.save_site_data.cljs$lang$maxFixedArity = 3;

cljs.spec.def_impl.call(null,new cljs.core.Symbol("nnangpress.monolith","user-site-count","nnangpress.monolith/user-site-count",-1595656659,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"uid","uid",-1447769400),new cljs.core.Keyword("nnangpress.monolith","authed-uid-raw","nnangpress.monolith/authed-uid-raw",-2022015200),new cljs.core.Keyword(null,"chan","chan",-2103021695),new cljs.core.Keyword("nnangpress.monolith","channel","nnangpress.monolith/channel",-810593631)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("nnangpress.monolith","channel","nnangpress.monolith/channel",-810593631)),cljs.spec.fspec_impl.call(null,cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"uid","uid",-1447769400),new cljs.core.Keyword("nnangpress.monolith","authed-uid-raw","nnangpress.monolith/authed-uid-raw",-2022015200),new cljs.core.Keyword(null,"chan","chan",-2103021695),new cljs.core.Keyword("nnangpress.monolith","channel","nnangpress.monolith/channel",-810593631)),cljs.spec.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uid","uid",-1447769400),new cljs.core.Keyword(null,"chan","chan",-2103021695)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","authed-uid-raw","nnangpress.monolith/authed-uid-raw",-2022015200),new cljs.core.Keyword("nnangpress.monolith","channel","nnangpress.monolith/channel",-810593631)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nnangpress.monolith","authed-uid-raw","nnangpress.monolith/authed-uid-raw",-2022015200),new cljs.core.Keyword("nnangpress.monolith","channel","nnangpress.monolith/channel",-810593631)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"uid","uid",-1447769400),new cljs.core.Keyword("nnangpress.monolith","authed-uid-raw","nnangpress.monolith/authed-uid-raw",-2022015200),new cljs.core.Keyword(null,"chan","chan",-2103021695),new cljs.core.Keyword("nnangpress.monolith","channel","nnangpress.monolith/channel",-810593631)),cljs.spec.spec_impl.call(null,new cljs.core.Keyword("nnangpress.monolith","channel","nnangpress.monolith/channel",-810593631),new cljs.core.Keyword("nnangpress.monolith","channel","nnangpress.monolith/channel",-810593631),null,null),new cljs.core.Keyword("nnangpress.monolith","channel","nnangpress.monolith/channel",-810593631),null,null,null));
/**
 * number of sites a user has
 */
nnangpress.monolith.user_site_count = (function nnangpress$monolith$user_site_count(uid,out){
var c__19461__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19461__auto__){
return (function (){
var f__19462__auto__ = (function (){var switch__19403__auto__ = ((function (c__19461__auto__){
return (function (state_23834){
var state_val_23835 = (state_23834[(1)]);
if((state_val_23835 === (1))){
var inst_23827 = cljs.core.async.chan.call(null);
var inst_23828 = nnangpress.monolith.get_user_sites.call(null,uid,inst_23827);
var state_23834__$1 = (function (){var statearr_23836 = state_23834;
(statearr_23836[(7)] = inst_23828);

return statearr_23836;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23834__$1,(2),inst_23827);
} else {
if((state_val_23835 === (2))){
var inst_23830 = (state_23834[(2)]);
var inst_23831 = cljs.core.count.call(null,inst_23830);
var inst_23832 = cljs.core.async.put_BANG_.call(null,out,inst_23831);
var state_23834__$1 = state_23834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23834__$1,inst_23832);
} else {
return null;
}
}
});})(c__19461__auto__))
;
return ((function (switch__19403__auto__,c__19461__auto__){
return (function() {
var nnangpress$monolith$user_site_count_$_state_machine__19404__auto__ = null;
var nnangpress$monolith$user_site_count_$_state_machine__19404__auto____0 = (function (){
var statearr_23840 = [null,null,null,null,null,null,null,null];
(statearr_23840[(0)] = nnangpress$monolith$user_site_count_$_state_machine__19404__auto__);

(statearr_23840[(1)] = (1));

return statearr_23840;
});
var nnangpress$monolith$user_site_count_$_state_machine__19404__auto____1 = (function (state_23834){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_23834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e23841){if((e23841 instanceof Object)){
var ex__19407__auto__ = e23841;
var statearr_23842_23844 = state_23834;
(statearr_23842_23844[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23845 = state_23834;
state_23834 = G__23845;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
nnangpress$monolith$user_site_count_$_state_machine__19404__auto__ = function(state_23834){
switch(arguments.length){
case 0:
return nnangpress$monolith$user_site_count_$_state_machine__19404__auto____0.call(this);
case 1:
return nnangpress$monolith$user_site_count_$_state_machine__19404__auto____1.call(this,state_23834);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
nnangpress$monolith$user_site_count_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = nnangpress$monolith$user_site_count_$_state_machine__19404__auto____0;
nnangpress$monolith$user_site_count_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = nnangpress$monolith$user_site_count_$_state_machine__19404__auto____1;
return nnangpress$monolith$user_site_count_$_state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19461__auto__))
})();
var state__19463__auto__ = (function (){var statearr_23843 = f__19462__auto__.call(null);
(statearr_23843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19461__auto__);

return statearr_23843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19463__auto__);
});})(c__19461__auto__))
);

return c__19461__auto__;
});
/**
 * Save data as a new site
 */
nnangpress.monolith.new_site = (function nnangpress$monolith$new_site(){
var c__19461__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19461__auto__){
return (function (){
var f__19462__auto__ = (function (){var switch__19403__auto__ = ((function (c__19461__auto__){
return (function (state_23956){
var state_val_23957 = (state_23956[(1)]);
if((state_val_23957 === (7))){
var inst_23935 = (state_23956[(2)]);
var state_23956__$1 = state_23956;
var statearr_23958_23980 = state_23956__$1;
(statearr_23958_23980[(2)] = inst_23935);

(statearr_23958_23980[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23957 === (1))){
var inst_23914 = (state_23956[(7)]);
var inst_23916 = (state_23956[(8)]);
var inst_23922 = (state_23956[(9)]);
var inst_23915 = (state_23956[(10)]);
var inst_23914__$1 = nnangpress.monolith.uid.call(null);
var inst_23915__$1 = cljs.core.async.chan.call(null);
var inst_23916__$1 = cljs.core.async.chan.call(null);
var inst_23917 = cljs.core.deref.call(null,inst_23914__$1);
var inst_23918 = cljs.core.first.call(null,inst_23917);
var inst_23919 = nnangpress.monolith.user_site_count.call(null,inst_23918,inst_23915__$1);
var inst_23920 = nnangpress.monolith.screenshot_data_uri.call(null,inst_23916__$1);
var inst_23921 = nnangpress.monolith.all_data.call(null);
var inst_23922__$1 = cljs.core.deref.call(null,inst_23921);
var inst_23924 = (inst_23922__$1 == null);
var inst_23925 = cljs.core.not.call(null,inst_23924);
var state_23956__$1 = (function (){var statearr_23959 = state_23956;
(statearr_23959[(7)] = inst_23914__$1);

(statearr_23959[(11)] = inst_23919);

(statearr_23959[(8)] = inst_23916__$1);

(statearr_23959[(9)] = inst_23922__$1);

(statearr_23959[(10)] = inst_23915__$1);

(statearr_23959[(12)] = inst_23920);

return statearr_23959;
})();
if(inst_23925){
var statearr_23960_23981 = state_23956__$1;
(statearr_23960_23981[(1)] = (2));

} else {
var statearr_23961_23982 = state_23956__$1;
(statearr_23961_23982[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23957 === (4))){
var inst_23938 = (state_23956[(2)]);
var state_23956__$1 = state_23956;
if(cljs.core.truth_(inst_23938)){
var statearr_23962_23983 = state_23956__$1;
(statearr_23962_23983[(1)] = (8));

} else {
var statearr_23963_23984 = state_23956__$1;
(statearr_23963_23984[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23957 === (6))){
var state_23956__$1 = state_23956;
var statearr_23964_23985 = state_23956__$1;
(statearr_23964_23985[(2)] = false);

(statearr_23964_23985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23957 === (3))){
var state_23956__$1 = state_23956;
var statearr_23965_23986 = state_23956__$1;
(statearr_23965_23986[(2)] = false);

(statearr_23965_23986[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23957 === (12))){
var inst_23947 = (state_23956[(13)]);
var inst_23951 = (state_23956[(14)]);
var inst_23953 = (state_23956[(2)]);
var inst_23954 = nnangpress.monolith.save_site_data.call(null,inst_23947,inst_23951,inst_23953);
var state_23956__$1 = state_23956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23956__$1,inst_23954);
} else {
if((state_val_23957 === (2))){
var inst_23922 = (state_23956[(9)]);
var inst_23927 = inst_23922.cljs$lang$protocol_mask$partition0$;
var inst_23928 = (inst_23927 & (64));
var inst_23929 = inst_23922.cljs$core$ISeq$;
var inst_23930 = (cljs.core.PROTOCOL_SENTINEL === inst_23929);
var inst_23931 = (inst_23928) || (inst_23930);
var state_23956__$1 = state_23956;
if(cljs.core.truth_(inst_23931)){
var statearr_23966_23987 = state_23956__$1;
(statearr_23966_23987[(1)] = (5));

} else {
var statearr_23967_23988 = state_23956__$1;
(statearr_23967_23988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23957 === (11))){
var inst_23945 = (state_23956[(15)]);
var inst_23915 = (state_23956[(10)]);
var inst_23948 = (state_23956[(16)]);
var inst_23950 = (state_23956[(2)]);
var inst_23951 = cljs.core.assoc.call(null,inst_23948,new cljs.core.Keyword(null,"route-widget","route-widget",1702261979),inst_23945,new cljs.core.Keyword(null,"screenshot","screenshot",697978558),inst_23950);
var state_23956__$1 = (function (){var statearr_23968 = state_23956;
(statearr_23968[(14)] = inst_23951);

return statearr_23968;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23956__$1,(12),inst_23915);
} else {
if((state_val_23957 === (9))){
var inst_23922 = (state_23956[(9)]);
var state_23956__$1 = state_23956;
var statearr_23969_23989 = state_23956__$1;
(statearr_23969_23989[(2)] = inst_23922);

(statearr_23969_23989[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23957 === (5))){
var state_23956__$1 = state_23956;
var statearr_23970_23990 = state_23956__$1;
(statearr_23970_23990[(2)] = true);

(statearr_23970_23990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23957 === (10))){
var inst_23914 = (state_23956[(7)]);
var inst_23916 = (state_23956[(8)]);
var inst_23943 = (state_23956[(2)]);
var inst_23944 = cljs.core.get.call(null,inst_23943,new cljs.core.Keyword(null,"site-id","site-id",-1581972488));
var inst_23945 = cljs.core.get.call(null,inst_23943,new cljs.core.Keyword(null,"route-widget","route-widget",1702261979));
var inst_23946 = cljs.core.deref.call(null,inst_23914);
var inst_23947 = cljs.core.first.call(null,inst_23946);
var inst_23948 = nnangpress.monolith.new_site_template.call(null);
var state_23956__$1 = (function (){var statearr_23971 = state_23956;
(statearr_23971[(13)] = inst_23947);

(statearr_23971[(15)] = inst_23945);

(statearr_23971[(16)] = inst_23948);

(statearr_23971[(17)] = inst_23944);

return statearr_23971;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23956__$1,(11),inst_23916);
} else {
if((state_val_23957 === (8))){
var inst_23922 = (state_23956[(9)]);
var inst_23940 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23922);
var state_23956__$1 = state_23956;
var statearr_23972_23991 = state_23956__$1;
(statearr_23972_23991[(2)] = inst_23940);

(statearr_23972_23991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19461__auto__))
;
return ((function (switch__19403__auto__,c__19461__auto__){
return (function() {
var nnangpress$monolith$new_site_$_state_machine__19404__auto__ = null;
var nnangpress$monolith$new_site_$_state_machine__19404__auto____0 = (function (){
var statearr_23976 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23976[(0)] = nnangpress$monolith$new_site_$_state_machine__19404__auto__);

(statearr_23976[(1)] = (1));

return statearr_23976;
});
var nnangpress$monolith$new_site_$_state_machine__19404__auto____1 = (function (state_23956){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_23956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e23977){if((e23977 instanceof Object)){
var ex__19407__auto__ = e23977;
var statearr_23978_23992 = state_23956;
(statearr_23978_23992[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23993 = state_23956;
state_23956 = G__23993;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
nnangpress$monolith$new_site_$_state_machine__19404__auto__ = function(state_23956){
switch(arguments.length){
case 0:
return nnangpress$monolith$new_site_$_state_machine__19404__auto____0.call(this);
case 1:
return nnangpress$monolith$new_site_$_state_machine__19404__auto____1.call(this,state_23956);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
nnangpress$monolith$new_site_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = nnangpress$monolith$new_site_$_state_machine__19404__auto____0;
nnangpress$monolith$new_site_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = nnangpress$monolith$new_site_$_state_machine__19404__auto____1;
return nnangpress$monolith$new_site_$_state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19461__auto__))
})();
var state__19463__auto__ = (function (){var statearr_23979 = f__19462__auto__.call(null);
(statearr_23979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19461__auto__);

return statearr_23979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19463__auto__);
});})(c__19461__auto__))
);

return c__19461__auto__;
});
/**
 * Swap two elements of a vector cursor
 */
nnangpress.monolith.ref_vec_swap = (function nnangpress$monolith$ref_vec_swap(cursor,idx1,idx2){
return om.core.transact_BANG_.call(null,cursor,(function (xs){
return nnangpress.utils.vec_swap.call(null,xs,idx1,idx2);
}));
});
/**
 * Update monolith with current user data
 */
nnangpress.monolith.update_monolith_user_data = (function nnangpress$monolith$update_monolith_user_data(var_args){
var args23994 = [];
var len__13041__auto___23997 = arguments.length;
var i__13042__auto___23998 = (0);
while(true){
if((i__13042__auto___23998 < len__13041__auto___23997)){
args23994.push((arguments[i__13042__auto___23998]));

var G__23999 = (i__13042__auto___23998 + (1));
i__13042__auto___23998 = G__23999;
continue;
} else {
}
break;
}

var G__23996 = args23994.length;
switch (G__23996) {
case 1:
return nnangpress.monolith.update_monolith_user_data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nnangpress.monolith.update_monolith_user_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23994.length)].join('')));

}
});

nnangpress.monolith.update_monolith_user_data.cljs$core$IFn$_invoke$arity$1 = (function (monolith){
return nnangpress.monolith.update_monolith_user_data.call(null,monolith,nnangpress.firebase.current_user.call(null));
});

nnangpress.monolith.update_monolith_user_data.cljs$core$IFn$_invoke$arity$2 = (function (monolith,current_user){
return cljs.core.assoc.call(null,monolith,new cljs.core.Keyword(null,"uid","uid",-1447769400),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(current_user)?current_user.uid:"")], null),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(current_user)?current_user.email:"")], null));
});

nnangpress.monolith.update_monolith_user_data.cljs$lang$maxFixedArity = 2;

cljs.spec.def_impl.call(null,new cljs.core.Symbol("nnangpress.monolith","renderable-site->full-monolith","nnangpress.monolith/renderable-site->full-monolith",-20678100,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"renderable-stie","renderable-stie",-1572173280),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"nangpress-system-data","nangpress-system-data",1411513577),cljs.core.list(new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)))),cljs.spec.fspec_impl.call(null,cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"renderable-stie","renderable-stie",-1572173280),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"nangpress-system-data","nangpress-system-data",1411513577),cljs.core.list(new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"renderable-stie","renderable-stie",-1572173280),new cljs.core.Keyword(null,"nangpress-system-data","nangpress-system-data",1411513577)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.spec.maybe_impl.call(null,cljs.core.any_QMARK_,new cljs.core.Symbol(null,"any?","any?",-318999933,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"renderable-stie","renderable-stie",-1572173280),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"nangpress-system-data","nangpress-system-data",1411513577),cljs.core.list(new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),null,null,null,null,null));
/**
 * Combines a renderable site with system data to form full monolith
 */
nnangpress.monolith.renderable_site__GT_full_monolith = (function nnangpress$monolith$renderable_site__GT_full_monolith(var_args){
var args24001 = [];
var len__13041__auto___24019 = arguments.length;
var i__13042__auto___24020 = (0);
while(true){
if((i__13042__auto___24020 < len__13041__auto___24019)){
args24001.push((arguments[i__13042__auto___24020]));

var G__24021 = (i__13042__auto___24020 + (1));
i__13042__auto___24020 = G__24021;
continue;
} else {
}
break;
}

var G__24003 = args24001.length;
switch (G__24003) {
case 1:
return nnangpress.monolith.renderable_site__GT_full_monolith.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nnangpress.monolith.renderable_site__GT_full_monolith.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24001.length)].join('')));

}
});

nnangpress.monolith.renderable_site__GT_full_monolith.cljs$core$IFn$_invoke$arity$1 = (function (renderable_site){
var c = cljs.core.async.chan.call(null);
var c__19461__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19461__auto__,c){
return (function (){
var f__19462__auto__ = (function (){var switch__19403__auto__ = ((function (c__19461__auto__,c){
return (function (state_24009){
var state_val_24010 = (state_24009[(1)]);
if((state_val_24010 === (1))){
var inst_24004 = nnangpress.firebase.firebase_get.call(null,"nangpress-data/",c);
var state_24009__$1 = (function (){var statearr_24011 = state_24009;
(statearr_24011[(7)] = inst_24004);

return statearr_24011;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24009__$1,(2),c);
} else {
if((state_val_24010 === (2))){
var inst_24006 = (state_24009[(2)]);
var inst_24007 = nnangpress.monolith.renderable_site__GT_full_monolith.call(null,renderable_site,inst_24006);
var state_24009__$1 = state_24009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24009__$1,inst_24007);
} else {
return null;
}
}
});})(c__19461__auto__,c))
;
return ((function (switch__19403__auto__,c__19461__auto__,c){
return (function() {
var nnangpress$monolith$state_machine__19404__auto__ = null;
var nnangpress$monolith$state_machine__19404__auto____0 = (function (){
var statearr_24015 = [null,null,null,null,null,null,null,null];
(statearr_24015[(0)] = nnangpress$monolith$state_machine__19404__auto__);

(statearr_24015[(1)] = (1));

return statearr_24015;
});
var nnangpress$monolith$state_machine__19404__auto____1 = (function (state_24009){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_24009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e24016){if((e24016 instanceof Object)){
var ex__19407__auto__ = e24016;
var statearr_24017_24023 = state_24009;
(statearr_24017_24023[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24024 = state_24009;
state_24009 = G__24024;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
nnangpress$monolith$state_machine__19404__auto__ = function(state_24009){
switch(arguments.length){
case 0:
return nnangpress$monolith$state_machine__19404__auto____0.call(this);
case 1:
return nnangpress$monolith$state_machine__19404__auto____1.call(this,state_24009);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
nnangpress$monolith$state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = nnangpress$monolith$state_machine__19404__auto____0;
nnangpress$monolith$state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = nnangpress$monolith$state_machine__19404__auto____1;
return nnangpress$monolith$state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19461__auto__,c))
})();
var state__19463__auto__ = (function (){var statearr_24018 = f__19462__auto__.call(null);
(statearr_24018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19461__auto__);

return statearr_24018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19463__auto__);
});})(c__19461__auto__,c))
);

return c__19461__auto__;
});

nnangpress.monolith.renderable_site__GT_full_monolith.cljs$core$IFn$_invoke$arity$2 = (function (renderable_site,nangpress_system_data){
return cljs.core.merge.call(null,nangpress_system_data,renderable_site);
});

nnangpress.monolith.renderable_site__GT_full_monolith.cljs$lang$maxFixedArity = 2;

cljs.spec.def_impl.call(null,new cljs.core.Symbol("nnangpress.monolith","set-bg-img!","nnangpress.monolith/set-bg-img!",-514984240,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"bg-img","bg-img",292271023),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))),cljs.spec.fspec_impl.call(null,cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"bg-img","bg-img",292271023),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.cat_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg-img","bg-img",292271023)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"bg-img","bg-img",292271023),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),null,null,null,null,null));
/**
 * Set background colour or image.
 */
nnangpress.monolith.set_bg_img_BANG_ = (function nnangpress$monolith$set_bg_img_BANG_(bg_img){
if(cljs.core.truth_(nnangpress.utils.string_contains_QMARK_.call(null,bg_img,"#"))){
document.body.background = "";

return document.body.style.backgroundColor = bg_img;
} else {
if(cljs.core.truth_(nnangpress.utils.string_contains_QMARK_.call(null,bg_img,"linear"))){
return document.body.background = bg_img;
} else {
return document.body.background = bg_img;

}
}
});
/**
 * If they current route desires a grey background, then make it so, if not, remove the css class.
 */
nnangpress.monolith.set_bg_grey_BANG_ = (function nnangpress$monolith$set_bg_grey_BANG_(grey_bg_QMARK_){
if(cljs.core.truth_(grey_bg_QMARK_)){
return $("body").addClass("grey-out");
} else {
return $("body").removeClass("grey-out");
}
});
/**
 * Utilizes reference cursors using the react comopnent associated with the master component (although of course it
 *   can work with any component). This is here mainly so that conceptually the monlith can 'watch itself' and make 
 *   impure changes outside of react. For example setting the background image based on monolith changes. The background 
 *   image is better dealt with outside of react.
 */
nnangpress.monolith.independent_ref_cursor_watcher = (function nnangpress$monolith$independent_ref_cursor_watcher(owner){
var current_route = om.core.observe.call(null,owner,nnangpress.monolith.current_route.call(null));
var routes_map = om.core.observe.call(null,owner,nnangpress.monolith.routes_map.call(null));
var map__24027 = nnangpress.monolith.current_route_map.call(null,clojure.string.split.call(null,cljs.core.first.call(null,cljs.core.deref.call(null,current_route)),/\//),cljs.core.deref.call(null,routes_map));
var map__24027__$1 = ((((!((map__24027 == null)))?((((map__24027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24027.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24027):map__24027);
var bg_img = cljs.core.get.call(null,map__24027__$1,new cljs.core.Keyword(null,"bg-img","bg-img",292271023));
var grey_bg_QMARK_ = cljs.core.get.call(null,map__24027__$1,new cljs.core.Keyword(null,"grey-bg?","grey-bg?",-614408471));
if(cljs.core.truth_(bg_img)){
nnangpress.monolith.set_bg_img_BANG_.call(null,bg_img);

return nnangpress.monolith.set_bg_grey_BANG_.call(null,grey_bg_QMARK_);
} else {
return null;
}
});
/**
 * Givec a cursor vector, remove an element based on the val of a map in the vector
 */
nnangpress.monolith.ref_vec_map_delete_BANG_ = (function nnangpress$monolith$ref_vec_map_delete_BANG_(vec_ref,ikey,match_val){
return om.core.transact_BANG_.call(null,vec_ref,(function (xs){
return cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__24029_SHARP_){
return cljs.core._EQ_.call(null,ikey.call(null,p1__24029_SHARP_),match_val);
}),xs));
}));
});
/**
 * Transact in the second (idx 1) spot
 */
nnangpress.monolith.ref_vec_insert_second_BANG_ = (function nnangpress$monolith$ref_vec_insert_second_BANG_(ref_vec,new_elem){
return om.core.transact_BANG_.call(null,ref_vec,(function (xs){
return cljs.core.vec.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.rest.call(null,xs),new_elem),cljs.core.first.call(null,xs)));
}));
});
/**
 * Conj a reference curosr
 */
nnangpress.monolith.ref_conj_BANG_ = (function nnangpress$monolith$ref_conj_BANG_(ref_cur,subject){
return om.core.transact_BANG_.call(null,ref_cur,(function (x){
return cljs.core.conj.call(null,x,subject);
}));
});
/**
 * Update a component's local style.
 */
nnangpress.monolith.update_local_style_BANG_ = (function nnangpress$monolith$update_local_style_BANG_(owner,key,val){
return om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"local-style","local-style",1327002111),(function (x){
return cljs.core.update.call(null,x,key,(function (_){
return val;
}));
}));
});
/**
 * While waiting for proper system for dealing with user's sites, DNS etc. Live site refers to the state where the site 
 *   is being viewed under a custom domain name, not just the onwer browsing to it from their userhome.
 */
nnangpress.monolith.live_site_QMARK_ = (function nnangpress$monolith$live_site_QMARK_(){
return nnangpress.utils.string_contains_QMARK_.call(null,window.location.href,"leontalbert");
});
/**
 * Site state is important as it modifies various functions of nangpress.
 *   user: If a user is logged in and they are at nangpress.com, show the page that displays their sites.
 *   splash: If it's not a site and the user is not logged in, show the nangpress homepage.
 *   site: An actual site built with nangpress.
 *   site-stranger: Site where the user is not logged in.
 *   site-owner: Site where the user is logged in and is the owner of the site.
 *   site-visitor: Site where the user is logged in but is not the owner of the site.
 */
nnangpress.monolith.site_state_decider = (function nnangpress$monolith$site_state_decider(site_owner_QMARK_){
var site_QMARK_ = nnangpress.monolith.live_site_QMARK_.call(null);
var login_state = !(cljs.core.empty_QMARK_.call(null,cljs.core.first.call(null,nnangpress.monolith.user_email.call(null))));
if(!(login_state)){
return "site-stranger";
} else {
if(cljs.core.truth_((function (){var and__11808__auto__ = login_state;
if(and__11808__auto__){
return site_owner_QMARK_;
} else {
return and__11808__auto__;
}
})())){
return "site-owner";
} else {
if((login_state) && (cljs.core.not.call(null,site_owner_QMARK_))){
return "site-visitor";
} else {
if(!(login_state)){
return "splash";
} else {
if(login_state){
return "user";
} else {
return null;
}
}
}
}
}
});
/**
 * Utility for keeping site state up to date. Should be called on every major change to the monolith.
 */
nnangpress.monolith.update_site_state_BANG_ = (function nnangpress$monolith$update_site_state_BANG_(var_args){
var args24030 = [];
var len__13041__auto___24058 = arguments.length;
var i__13042__auto___24059 = (0);
while(true){
if((i__13042__auto___24059 < len__13041__auto___24058)){
args24030.push((arguments[i__13042__auto___24059]));

var G__24060 = (i__13042__auto___24059 + (1));
i__13042__auto___24059 = G__24060;
continue;
} else {
}
break;
}

var G__24032 = args24030.length;
switch (G__24032) {
case 0:
return nnangpress.monolith.update_site_state_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return nnangpress.monolith.update_site_state_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24030.length)].join('')));

}
});

nnangpress.monolith.update_site_state_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
var c__19461__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19461__auto__){
return (function (){
var f__19462__auto__ = (function (){var switch__19403__auto__ = ((function (c__19461__auto__){
return (function (state_24048){
var state_val_24049 = (state_24048[(1)]);
if((state_val_24049 === (1))){
var inst_24033 = nnangpress.monolith.all_data.call(null);
var inst_24034 = nnangpress.monolith.all_data.call(null);
var inst_24035 = cljs.core.deref.call(null,inst_24034);
var inst_24036 = new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(inst_24035);
var inst_24037 = cljs.core.first.call(null,inst_24036);
var inst_24038 = nnangpress.monolith.all_data.call(null);
var inst_24039 = cljs.core.deref.call(null,inst_24038);
var inst_24040 = new cljs.core.Keyword(null,"site-id-vec","site-id-vec",-211589911).cljs$core$IFn$_invoke$arity$1(inst_24039);
var inst_24041 = cljs.core.first.call(null,inst_24040);
var inst_24042 = nnangpress.firebase.site_owner_QMARK_.call(null,inst_24037,inst_24041);
var state_24048__$1 = (function (){var statearr_24050 = state_24048;
(statearr_24050[(7)] = inst_24033);

return statearr_24050;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24048__$1,(2),inst_24042);
} else {
if((state_val_24049 === (2))){
var inst_24033 = (state_24048[(7)]);
var inst_24044 = (state_24048[(2)]);
var inst_24045 = nnangpress.monolith.site_state_decider.call(null,inst_24044);
var inst_24046 = om.core.update_BANG_.call(null,inst_24033,new cljs.core.Keyword(null,"site-state","site-state",1268076938),inst_24045);
var state_24048__$1 = state_24048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24048__$1,inst_24046);
} else {
return null;
}
}
});})(c__19461__auto__))
;
return ((function (switch__19403__auto__,c__19461__auto__){
return (function() {
var nnangpress$monolith$state_machine__19404__auto__ = null;
var nnangpress$monolith$state_machine__19404__auto____0 = (function (){
var statearr_24054 = [null,null,null,null,null,null,null,null];
(statearr_24054[(0)] = nnangpress$monolith$state_machine__19404__auto__);

(statearr_24054[(1)] = (1));

return statearr_24054;
});
var nnangpress$monolith$state_machine__19404__auto____1 = (function (state_24048){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_24048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e24055){if((e24055 instanceof Object)){
var ex__19407__auto__ = e24055;
var statearr_24056_24062 = state_24048;
(statearr_24056_24062[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24063 = state_24048;
state_24048 = G__24063;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
nnangpress$monolith$state_machine__19404__auto__ = function(state_24048){
switch(arguments.length){
case 0:
return nnangpress$monolith$state_machine__19404__auto____0.call(this);
case 1:
return nnangpress$monolith$state_machine__19404__auto____1.call(this,state_24048);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
nnangpress$monolith$state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = nnangpress$monolith$state_machine__19404__auto____0;
nnangpress$monolith$state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = nnangpress$monolith$state_machine__19404__auto____1;
return nnangpress$monolith$state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19461__auto__))
})();
var state__19463__auto__ = (function (){var statearr_24057 = f__19462__auto__.call(null);
(statearr_24057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19461__auto__);

return statearr_24057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19463__auto__);
});})(c__19461__auto__))
);

return c__19461__auto__;
});

nnangpress.monolith.update_site_state_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (site_state){
return om.core.update_BANG_.call(null,nnangpress.monolith.all_data.call(null),new cljs.core.Keyword(null,"site-state","site-state",1268076938),site_state);
});

nnangpress.monolith.update_site_state_BANG_.cljs$lang$maxFixedArity = 1;

cljs.spec.def_impl.call(null,new cljs.core.Symbol("nnangpress.monolith","auth-state-load-site!","nnangpress.monolith/auth-state-load-site!",-415340013,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"root-component","root-component",-1807026475),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"root-node-id","root-node-id",901136990),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))),cljs.spec.fspec_impl.call(null,cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"root-component","root-component",-1807026475),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"root-node-id","root-node-id",901136990),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root-component","root-component",-1807026475),new cljs.core.Keyword(null,"root-node-id","root-node-id",901136990)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.fn_QMARK_,cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"root-component","root-component",-1807026475),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"root-node-id","root-node-id",901136990),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),null,null,null,null,null));
/**
 * Load site based on the auth state and/or the particular user. Also initializes the root component. 
 *   Portfolio site is being hardcoded for now until the system for dealing with DNS is implemented.
 */
nnangpress.monolith.auth_state_load_site_BANG_ = (function nnangpress$monolith$auth_state_load_site_BANG_(root_component,root_node_id){
var c__19461__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19461__auto__){
return (function (){
var f__19462__auto__ = (function (){var switch__19403__auto__ = ((function (c__19461__auto__){
return (function (state_24139){
var state_val_24140 = (state_24139[(1)]);
if((state_val_24140 === (1))){
var inst_24111 = nnangpress.monolith.live_site_QMARK_.call(null);
var state_24139__$1 = state_24139;
if(cljs.core.truth_(inst_24111)){
var statearr_24141_24158 = state_24139__$1;
(statearr_24141_24158[(1)] = (2));

} else {
var statearr_24142_24159 = state_24139__$1;
(statearr_24142_24159[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (2))){
var inst_24113 = cljs.core.async.chan.call(null);
var inst_24114 = nnangpress.firebase.firebase_get.call(null,"users/eKWcekJm6GMc4klsRG7CNvteCQN2/sites/1",inst_24113);
var state_24139__$1 = (function (){var statearr_24143 = state_24139;
(statearr_24143[(7)] = inst_24114);

return statearr_24143;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24139__$1,(6),inst_24113);
} else {
if((state_val_24140 === (3))){
var state_24139__$1 = state_24139;
var statearr_24144_24160 = state_24139__$1;
(statearr_24144_24160[(1)] = (7));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (4))){
var inst_24128 = (state_24139[(2)]);
var inst_24129 = nnangpress.monolith.all_data.call(null);
var inst_24130 = om.core.update_BANG_.call(null,inst_24129,new cljs.core.Keyword(null,"screen-size","screen-size",641239979),window.innerWidth);
var inst_24131 = [new cljs.core.Keyword(null,"target","target",253001721)];
var inst_24132 = document.getElementById(root_node_id);
var inst_24133 = [inst_24132];
var inst_24134 = cljs.core.PersistentHashMap.fromArrays(inst_24131,inst_24133);
var inst_24135 = om.core.root.call(null,root_component,nnangpress.monolith.monolith,inst_24134);
var inst_24136 = $("body");
var inst_24137 = inst_24136.addClass("loaded");
var state_24139__$1 = (function (){var statearr_24146 = state_24139;
(statearr_24146[(8)] = inst_24135);

(statearr_24146[(9)] = inst_24128);

(statearr_24146[(10)] = inst_24130);

return statearr_24146;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24139__$1,inst_24137);
} else {
if((state_val_24140 === (5))){
var inst_24119 = (state_24139[(2)]);
var state_24139__$1 = state_24139;
var statearr_24147_24161 = state_24139__$1;
(statearr_24147_24161[(2)] = inst_24119);

(statearr_24147_24161[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (6))){
var inst_24116 = (state_24139[(2)]);
var inst_24117 = nnangpress.monolith.site_transition.call(null,inst_24116);
var state_24139__$1 = state_24139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24139__$1,(5),inst_24117);
} else {
if((state_val_24140 === (7))){
var inst_24122 = cljs.core.deref.call(null,nnangpress.monolith.nangpress_data_cache);
var inst_24123 = nnangpress.monolith.site_transition.call(null,inst_24122);
var state_24139__$1 = state_24139;
var statearr_24148_24162 = state_24139__$1;
(statearr_24148_24162[(2)] = inst_24123);

(statearr_24148_24162[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (8))){
var state_24139__$1 = state_24139;
var statearr_24149_24163 = state_24139__$1;
(statearr_24149_24163[(2)] = null);

(statearr_24149_24163[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (9))){
var inst_24126 = (state_24139[(2)]);
var state_24139__$1 = state_24139;
var statearr_24150_24164 = state_24139__$1;
(statearr_24150_24164[(2)] = inst_24126);

(statearr_24150_24164[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__19461__auto__))
;
return ((function (switch__19403__auto__,c__19461__auto__){
return (function() {
var nnangpress$monolith$auth_state_load_site_BANG__$_state_machine__19404__auto__ = null;
var nnangpress$monolith$auth_state_load_site_BANG__$_state_machine__19404__auto____0 = (function (){
var statearr_24154 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24154[(0)] = nnangpress$monolith$auth_state_load_site_BANG__$_state_machine__19404__auto__);

(statearr_24154[(1)] = (1));

return statearr_24154;
});
var nnangpress$monolith$auth_state_load_site_BANG__$_state_machine__19404__auto____1 = (function (state_24139){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_24139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e24155){if((e24155 instanceof Object)){
var ex__19407__auto__ = e24155;
var statearr_24156_24165 = state_24139;
(statearr_24156_24165[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24166 = state_24139;
state_24139 = G__24166;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
nnangpress$monolith$auth_state_load_site_BANG__$_state_machine__19404__auto__ = function(state_24139){
switch(arguments.length){
case 0:
return nnangpress$monolith$auth_state_load_site_BANG__$_state_machine__19404__auto____0.call(this);
case 1:
return nnangpress$monolith$auth_state_load_site_BANG__$_state_machine__19404__auto____1.call(this,state_24139);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
nnangpress$monolith$auth_state_load_site_BANG__$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = nnangpress$monolith$auth_state_load_site_BANG__$_state_machine__19404__auto____0;
nnangpress$monolith$auth_state_load_site_BANG__$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = nnangpress$monolith$auth_state_load_site_BANG__$_state_machine__19404__auto____1;
return nnangpress$monolith$auth_state_load_site_BANG__$_state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19461__auto__))
})();
var state__19463__auto__ = (function (){var statearr_24157 = f__19462__auto__.call(null);
(statearr_24157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19461__auto__);

return statearr_24157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19463__auto__);
});})(c__19461__auto__))
);

return c__19461__auto__;
});
cljs.spec.def_impl.call(null,new cljs.core.Symbol("nnangpress.monolith","update-sites!!","nnangpress.monolith/update-sites!!",851377170,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"user-sites","user-sites",635489148),cljs.core.list(new cljs.core.Symbol("cljs.spec","coll-of","cljs.spec/coll-of",-1298051753,null),new cljs.core.Keyword("nnangpress.monolith","site-with-meta","nnangpress.monolith/site-with-meta",1425946347)),new cljs.core.Keyword(null,"uid","uid",-1447769400),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.fspec_impl.call(null,cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"user-sites","user-sites",635489148),cljs.core.list(new cljs.core.Symbol("cljs.spec","coll-of","cljs.spec/coll-of",-1298051753,null),new cljs.core.Keyword("nnangpress.monolith","site-with-meta","nnangpress.monolith/site-with-meta",1425946347)),new cljs.core.Keyword(null,"uid","uid",-1447769400),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-sites","user-sites",635489148),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.every_impl.call(null,new cljs.core.Keyword("nnangpress.monolith","site-with-meta","nnangpress.monolith/site-with-meta",1425946347),new cljs.core.Keyword("nnangpress.monolith","site-with-meta","nnangpress.monolith/site-with-meta",1425946347),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","conform-all","cljs.spec/conform-all",-1945029907),true,new cljs.core.Keyword("cljs.spec","describe","cljs.spec/describe",165584687),cljs.core.list(new cljs.core.Symbol("cljs.spec","coll-of","cljs.spec/coll-of",-1298051753,null),new cljs.core.Keyword("nnangpress.monolith","site-with-meta","nnangpress.monolith/site-with-meta",1425946347)),new cljs.core.Keyword("cljs.spec","kind-form","cljs.spec/kind-form",997489303),null,new cljs.core.Keyword("cljs.spec","cpred","cljs.spec/cpred",1439199454),(function (G__24167){
return cljs.core.coll_QMARK_.call(null,G__24167);
})], null),null),cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec","coll-of","cljs.spec/coll-of",-1298051753,null),new cljs.core.Keyword("nnangpress.monolith","site-with-meta","nnangpress.monolith/site-with-meta",1425946347)),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"user-sites","user-sites",635489148),cljs.core.list(new cljs.core.Symbol("cljs.spec","coll-of","cljs.spec/coll-of",-1298051753,null),new cljs.core.Keyword("nnangpress.monolith","site-with-meta","nnangpress.monolith/site-with-meta",1425946347)),new cljs.core.Keyword(null,"uid","uid",-1447769400),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),null,null,null,null,null));
/**
 * Takes all of the user's sites and tucks them away safely. Pre condition to somewhat protect user's data.
 */
nnangpress.monolith.update_sites_BANG__BANG_ = (function nnangpress$monolith$update_sites_BANG__BANG_(user_sites,uid){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,cljs.spec.every_impl.call(null,new cljs.core.Keyword("nnangpress.monolith","site-with-meta","nnangpress.monolith/site-with-meta",1425946347),new cljs.core.Keyword("nnangpress.monolith","site-with-meta","nnangpress.monolith/site-with-meta",1425946347),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","conform-all","cljs.spec/conform-all",-1945029907),true,new cljs.core.Keyword("cljs.spec","describe","cljs.spec/describe",165584687),cljs.core.list(new cljs.core.Symbol("cljs.spec","coll-of","cljs.spec/coll-of",-1298051753,null),new cljs.core.Keyword("nnangpress.monolith","site-with-meta","nnangpress.monolith/site-with-meta",1425946347)),new cljs.core.Keyword("cljs.spec","kind-form","cljs.spec/kind-form",997489303),null,new cljs.core.Keyword("cljs.spec","cpred","cljs.spec/cpred",1439199454),(function (G__24169){
return cljs.core.coll_QMARK_.call(null,G__24169);
})], null),null),user_sites))){
} else {
throw (new Error("Assert failed: (s/valid? (s/coll-of :nnangpress.monolith/site-with-meta) user-sites)"));
}

return nnangpress.firebase.fb_write.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("users/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/sites")].join(''),user_sites);
});
/**
 * 
 */
nnangpress.monolith.toggle_menu = (function nnangpress$monolith$toggle_menu(){
return om.core.transact_BANG_.call(null,nnangpress.monolith.sidebar_data.call(null),new cljs.core.Keyword(null,"sidebar-visible","sidebar-visible",-1702604121),nnangpress.utils.toggle);
});
if(typeof nnangpress.monolith.site_transition !== 'undefined'){
} else {
nnangpress.monolith.site_transition = (function (){var method_table__12851__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12852__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12853__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12854__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12855__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"nnangpress.monolith","site-transition"),((function (method_table__12851__auto__,prefer_table__12852__auto__,method_cache__12853__auto__,cached_hierarchy__12854__auto__,hierarchy__12855__auto__){
return (function (x){
if(cljs.core.contains_QMARK_.call(null,x,new cljs.core.Keyword(null,"admin-sites","admin-sites",-1578992874))){
return "nangpress-admin";
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);

}
});})(method_table__12851__auto__,prefer_table__12852__auto__,method_cache__12853__auto__,cached_hierarchy__12854__auto__,hierarchy__12855__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__12855__auto__,method_table__12851__auto__,prefer_table__12852__auto__,method_cache__12853__auto__,cached_hierarchy__12854__auto__));
})();
}
cljs.core._add_method.call(null,nnangpress.monolith.site_transition,"nangpress-admin",(function (nangpress_data){
var current_user = nnangpress.firebase.current_user.call(null);
return nnangpress.monolith.reset_monolith_atom_BANG_.call(null,nnangpress.monolith.update_monolith_user_data.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,nangpress_data,new cljs.core.Keyword(null,"route-widget","route-widget",1702261979),(cljs.core.truth_(current_user)?new cljs.core.Keyword(null,"route-widget","route-widget",1702261979).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"userhome","userhome",561792410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"admin-sites","admin-sites",-1578992874).cljs$core$IFn$_invoke$arity$1(nangpress_data))):new cljs.core.Keyword(null,"route-widget","route-widget",1702261979).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"homepage","homepage",-1646828249).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"admin-sites","admin-sites",-1578992874).cljs$core$IFn$_invoke$arity$1(nangpress_data))))),new cljs.core.Keyword(null,"site-id-vec","site-id-vec",-211589911),(cljs.core.truth_(current_user)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["userhome"], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["homepage"], null))),new cljs.core.Keyword(null,"site-state","site-state",1268076938),(cljs.core.truth_(current_user)?"user":"splash")),new cljs.core.Keyword(null,"admin-route-widgets","admin-route-widgets",506604905)),new cljs.core.Keyword(null,"admin-sites","admin-sites",-1578992874)),current_user));
}));
cljs.core._add_method.call(null,nnangpress.monolith.site_transition,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
var c__19461__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19461__auto__){
return (function (){
var f__19462__auto__ = (function (){var switch__19403__auto__ = ((function (c__19461__auto__){
return (function (state_24204){
var state_val_24205 = (state_24204[(1)]);
if((state_val_24205 === (7))){
var inst_24170 = (state_24204[(7)]);
var state_24204__$1 = state_24204;
if(cljs.core.truth_(inst_24170)){
var statearr_24206_24231 = state_24204__$1;
(statearr_24206_24231[(1)] = (9));

} else {
var statearr_24207_24232 = state_24204__$1;
(statearr_24207_24232[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24205 === (1))){
var inst_24170 = (state_24204[(7)]);
var inst_24170__$1 = nnangpress.firebase.current_user.call(null);
var state_24204__$1 = (function (){var statearr_24208 = state_24204;
(statearr_24208[(7)] = inst_24170__$1);

return statearr_24208;
})();
if(cljs.core.truth_(inst_24170__$1)){
var statearr_24209_24233 = state_24204__$1;
(statearr_24209_24233[(1)] = (2));

} else {
var statearr_24210_24234 = state_24204__$1;
(statearr_24210_24234[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24205 === (4))){
var inst_24179 = (state_24204[(2)]);
var inst_24180 = cljs.core.deref.call(null,nnangpress.monolith.nangpress_data_cache);
var inst_24181 = new cljs.core.Keyword(null,"route-widget","route-widget",1702261979).cljs$core$IFn$_invoke$arity$1(x);
var inst_24182 = cljs.core.assoc.call(null,inst_24180,new cljs.core.Keyword(null,"route-widget","route-widget",1702261979),inst_24181);
var inst_24183 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24184 = new cljs.core.Keyword(null,"site-id","site-id",-1581972488).cljs$core$IFn$_invoke$arity$1(x);
var inst_24185 = [inst_24184];
var inst_24186 = (new cljs.core.PersistentVector(null,1,(5),inst_24183,inst_24185,null));
var inst_24187 = cljs.core.assoc.call(null,inst_24182,new cljs.core.Keyword(null,"site-id-vec","site-id-vec",-211589911),inst_24186);
var state_24204__$1 = (function (){var statearr_24211 = state_24204;
(statearr_24211[(8)] = inst_24187);

return statearr_24211;
})();
if(cljs.core.truth_(inst_24179)){
var statearr_24212_24235 = state_24204__$1;
(statearr_24212_24235[(1)] = (6));

} else {
var statearr_24213_24236 = state_24204__$1;
(statearr_24213_24236[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24205 === (13))){
var state_24204__$1 = state_24204;
var statearr_24214_24237 = state_24204__$1;
(statearr_24214_24237[(2)] = null);

(statearr_24214_24237[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24205 === (6))){
var state_24204__$1 = state_24204;
var statearr_24215_24238 = state_24204__$1;
(statearr_24215_24238[(2)] = "site-owner");

(statearr_24215_24238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24205 === (3))){
var state_24204__$1 = state_24204;
var statearr_24216_24239 = state_24204__$1;
(statearr_24216_24239[(2)] = false);

(statearr_24216_24239[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24205 === (12))){
var state_24204__$1 = state_24204;
var statearr_24217_24240 = state_24204__$1;
(statearr_24217_24240[(2)] = "site-stranger");

(statearr_24217_24240[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24205 === (2))){
var inst_24170 = (state_24204[(7)]);
var inst_24172 = inst_24170.uid;
var inst_24173 = new cljs.core.Keyword(null,"site-id","site-id",-1581972488).cljs$core$IFn$_invoke$arity$1(x);
var inst_24174 = nnangpress.firebase.site_owner_QMARK_.call(null,inst_24172,inst_24173);
var state_24204__$1 = state_24204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24204__$1,(5),inst_24174);
} else {
if((state_val_24205 === (11))){
var inst_24197 = (state_24204[(2)]);
var state_24204__$1 = state_24204;
var statearr_24218_24241 = state_24204__$1;
(statearr_24218_24241[(2)] = inst_24197);

(statearr_24218_24241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24205 === (9))){
var state_24204__$1 = state_24204;
var statearr_24219_24242 = state_24204__$1;
(statearr_24219_24242[(2)] = "site-visitor");

(statearr_24219_24242[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24205 === (5))){
var inst_24176 = (state_24204[(2)]);
var state_24204__$1 = state_24204;
var statearr_24220_24243 = state_24204__$1;
(statearr_24220_24243[(2)] = inst_24176);

(statearr_24220_24243[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24205 === (14))){
var inst_24195 = (state_24204[(2)]);
var state_24204__$1 = state_24204;
var statearr_24221_24244 = state_24204__$1;
(statearr_24221_24244[(2)] = inst_24195);

(statearr_24221_24244[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24205 === (10))){
var state_24204__$1 = state_24204;
var statearr_24222_24245 = state_24204__$1;
(statearr_24222_24245[(1)] = (12));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24205 === (8))){
var inst_24170 = (state_24204[(7)]);
var inst_24187 = (state_24204[(8)]);
var inst_24199 = (state_24204[(2)]);
var inst_24200 = cljs.core.assoc.call(null,inst_24187,new cljs.core.Keyword(null,"site-state","site-state",1268076938),inst_24199);
var inst_24201 = nnangpress.monolith.update_monolith_user_data.call(null,inst_24200,inst_24170);
var inst_24202 = nnangpress.monolith.reset_monolith_atom_BANG_.call(null,inst_24201);
var state_24204__$1 = state_24204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24204__$1,inst_24202);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19461__auto__))
;
return ((function (switch__19403__auto__,c__19461__auto__){
return (function() {
var nnangpress$monolith$state_machine__19404__auto__ = null;
var nnangpress$monolith$state_machine__19404__auto____0 = (function (){
var statearr_24227 = [null,null,null,null,null,null,null,null,null];
(statearr_24227[(0)] = nnangpress$monolith$state_machine__19404__auto__);

(statearr_24227[(1)] = (1));

return statearr_24227;
});
var nnangpress$monolith$state_machine__19404__auto____1 = (function (state_24204){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_24204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e24228){if((e24228 instanceof Object)){
var ex__19407__auto__ = e24228;
var statearr_24229_24246 = state_24204;
(statearr_24229_24246[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24247 = state_24204;
state_24204 = G__24247;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
nnangpress$monolith$state_machine__19404__auto__ = function(state_24204){
switch(arguments.length){
case 0:
return nnangpress$monolith$state_machine__19404__auto____0.call(this);
case 1:
return nnangpress$monolith$state_machine__19404__auto____1.call(this,state_24204);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
nnangpress$monolith$state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = nnangpress$monolith$state_machine__19404__auto____0;
nnangpress$monolith$state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = nnangpress$monolith$state_machine__19404__auto____1;
return nnangpress$monolith$state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19461__auto__))
})();
var state__19463__auto__ = (function (){var statearr_24230 = f__19462__auto__.call(null);
(statearr_24230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19461__auto__);

return statearr_24230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19463__auto__);
});})(c__19461__auto__))
);

return c__19461__auto__;
}));

//# sourceMappingURL=monolith.js.map