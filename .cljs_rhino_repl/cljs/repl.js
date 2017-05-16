// Compiled by ClojureScript 1.9.521 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__15342){
var map__15367 = p__15342;
var map__15367__$1 = ((((!((map__15367 == null)))?((((map__15367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15367.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15367):map__15367);
var m = map__15367__$1;
var n = cljs.core.get.call(null,map__15367__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__15367__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__6503__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6503__auto__)){
var ns = temp__6503__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__15369_15391 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15370_15392 = null;
var count__15371_15393 = (0);
var i__15372_15394 = (0);
while(true){
if((i__15372_15394 < count__15371_15393)){
var f_15395 = cljs.core._nth.call(null,chunk__15370_15392,i__15372_15394);
cljs.core.println.call(null,"  ",f_15395);

var G__15396 = seq__15369_15391;
var G__15397 = chunk__15370_15392;
var G__15398 = count__15371_15393;
var G__15399 = (i__15372_15394 + (1));
seq__15369_15391 = G__15396;
chunk__15370_15392 = G__15397;
count__15371_15393 = G__15398;
i__15372_15394 = G__15399;
continue;
} else {
var temp__6503__auto___15400 = cljs.core.seq.call(null,seq__15369_15391);
if(temp__6503__auto___15400){
var seq__15369_15401__$1 = temp__6503__auto___15400;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15369_15401__$1)){
var c__12731__auto___15402 = cljs.core.chunk_first.call(null,seq__15369_15401__$1);
var G__15403 = cljs.core.chunk_rest.call(null,seq__15369_15401__$1);
var G__15404 = c__12731__auto___15402;
var G__15405 = cljs.core.count.call(null,c__12731__auto___15402);
var G__15406 = (0);
seq__15369_15391 = G__15403;
chunk__15370_15392 = G__15404;
count__15371_15393 = G__15405;
i__15372_15394 = G__15406;
continue;
} else {
var f_15407 = cljs.core.first.call(null,seq__15369_15401__$1);
cljs.core.println.call(null,"  ",f_15407);

var G__15408 = cljs.core.next.call(null,seq__15369_15401__$1);
var G__15409 = null;
var G__15410 = (0);
var G__15411 = (0);
seq__15369_15391 = G__15408;
chunk__15370_15392 = G__15409;
count__15371_15393 = G__15410;
i__15372_15394 = G__15411;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_15412 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__11820__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_15412);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_15412)))?cljs.core.second.call(null,arglists_15412):arglists_15412));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__15373_15413 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15374_15414 = null;
var count__15375_15415 = (0);
var i__15376_15416 = (0);
while(true){
if((i__15376_15416 < count__15375_15415)){
var vec__15377_15417 = cljs.core._nth.call(null,chunk__15374_15414,i__15376_15416);
var name_15418 = cljs.core.nth.call(null,vec__15377_15417,(0),null);
var map__15380_15419 = cljs.core.nth.call(null,vec__15377_15417,(1),null);
var map__15380_15420__$1 = ((((!((map__15380_15419 == null)))?((((map__15380_15419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15380_15419.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15380_15419):map__15380_15419);
var doc_15421 = cljs.core.get.call(null,map__15380_15420__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_15422 = cljs.core.get.call(null,map__15380_15420__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_15418);

cljs.core.println.call(null," ",arglists_15422);

if(cljs.core.truth_(doc_15421)){
cljs.core.println.call(null," ",doc_15421);
} else {
}

var G__15423 = seq__15373_15413;
var G__15424 = chunk__15374_15414;
var G__15425 = count__15375_15415;
var G__15426 = (i__15376_15416 + (1));
seq__15373_15413 = G__15423;
chunk__15374_15414 = G__15424;
count__15375_15415 = G__15425;
i__15376_15416 = G__15426;
continue;
} else {
var temp__6503__auto___15427 = cljs.core.seq.call(null,seq__15373_15413);
if(temp__6503__auto___15427){
var seq__15373_15428__$1 = temp__6503__auto___15427;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15373_15428__$1)){
var c__12731__auto___15429 = cljs.core.chunk_first.call(null,seq__15373_15428__$1);
var G__15430 = cljs.core.chunk_rest.call(null,seq__15373_15428__$1);
var G__15431 = c__12731__auto___15429;
var G__15432 = cljs.core.count.call(null,c__12731__auto___15429);
var G__15433 = (0);
seq__15373_15413 = G__15430;
chunk__15374_15414 = G__15431;
count__15375_15415 = G__15432;
i__15376_15416 = G__15433;
continue;
} else {
var vec__15382_15434 = cljs.core.first.call(null,seq__15373_15428__$1);
var name_15435 = cljs.core.nth.call(null,vec__15382_15434,(0),null);
var map__15385_15436 = cljs.core.nth.call(null,vec__15382_15434,(1),null);
var map__15385_15437__$1 = ((((!((map__15385_15436 == null)))?((((map__15385_15436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15385_15436.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15385_15436):map__15385_15436);
var doc_15438 = cljs.core.get.call(null,map__15385_15437__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_15439 = cljs.core.get.call(null,map__15385_15437__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_15435);

cljs.core.println.call(null," ",arglists_15439);

if(cljs.core.truth_(doc_15438)){
cljs.core.println.call(null," ",doc_15438);
} else {
}

var G__15440 = cljs.core.next.call(null,seq__15373_15428__$1);
var G__15441 = null;
var G__15442 = (0);
var G__15443 = (0);
seq__15373_15413 = G__15440;
chunk__15374_15414 = G__15441;
count__15375_15415 = G__15442;
i__15376_15416 = G__15443;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6503__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6503__auto__)){
var fnspec = temp__6503__auto__;
cljs.core.print.call(null,"Spec");

var seq__15387 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__15388 = null;
var count__15389 = (0);
var i__15390 = (0);
while(true){
if((i__15390 < count__15389)){
var role = cljs.core._nth.call(null,chunk__15388,i__15390);
var temp__6503__auto___15444__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6503__auto___15444__$1)){
var spec_15445 = temp__6503__auto___15444__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_15445));
} else {
}

var G__15446 = seq__15387;
var G__15447 = chunk__15388;
var G__15448 = count__15389;
var G__15449 = (i__15390 + (1));
seq__15387 = G__15446;
chunk__15388 = G__15447;
count__15389 = G__15448;
i__15390 = G__15449;
continue;
} else {
var temp__6503__auto____$1 = cljs.core.seq.call(null,seq__15387);
if(temp__6503__auto____$1){
var seq__15387__$1 = temp__6503__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15387__$1)){
var c__12731__auto__ = cljs.core.chunk_first.call(null,seq__15387__$1);
var G__15450 = cljs.core.chunk_rest.call(null,seq__15387__$1);
var G__15451 = c__12731__auto__;
var G__15452 = cljs.core.count.call(null,c__12731__auto__);
var G__15453 = (0);
seq__15387 = G__15450;
chunk__15388 = G__15451;
count__15389 = G__15452;
i__15390 = G__15453;
continue;
} else {
var role = cljs.core.first.call(null,seq__15387__$1);
var temp__6503__auto___15454__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6503__auto___15454__$2)){
var spec_15455 = temp__6503__auto___15454__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_15455));
} else {
}

var G__15456 = cljs.core.next.call(null,seq__15387__$1);
var G__15457 = null;
var G__15458 = (0);
var G__15459 = (0);
seq__15387 = G__15456;
chunk__15388 = G__15457;
count__15389 = G__15458;
i__15390 = G__15459;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map