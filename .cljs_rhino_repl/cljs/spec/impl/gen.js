// Compiled by ClojureScript 1.9.521 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__12477__auto__,writer__12478__auto__,opt__12479__auto__){
return cljs.core._write.call(null,writer__12478__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16395 = arguments.length;
var i__13042__auto___16396 = (0);
while(true){
if((i__13042__auto___16396 < len__13041__auto___16395)){
args__13048__auto__.push((arguments[i__13042__auto___16396]));

var G__16397 = (i__13042__auto___16396 + (1));
i__13042__auto___16396 = G__16397;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq16394){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16394));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16399 = arguments.length;
var i__13042__auto___16400 = (0);
while(true){
if((i__13042__auto___16400 < len__13041__auto___16399)){
args__13048__auto__.push((arguments[i__13042__auto___16400]));

var G__16401 = (i__13042__auto___16400 + (1));
i__13042__auto___16400 = G__16401;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq16398){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16398));
});

var g_QMARK__16402 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_16403 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__16402){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__16402))
,null));
var mkg_16404 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__16402,g_16403){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__16402,g_16403))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__16402,g_16403,mkg_16404){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__16402).call(null,x);
});})(g_QMARK__16402,g_16403,mkg_16404))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__16402,g_16403,mkg_16404){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_16404).call(null,gfn);
});})(g_QMARK__16402,g_16403,mkg_16404))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__16402,g_16403,mkg_16404){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_16403).call(null,generator);
});})(g_QMARK__16402,g_16403,mkg_16404))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__14285__auto___16424 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__14285__auto___16424){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16425 = arguments.length;
var i__13042__auto___16426 = (0);
while(true){
if((i__13042__auto___16426 < len__13041__auto___16425)){
args__13048__auto__.push((arguments[i__13042__auto___16426]));

var G__16427 = (i__13042__auto___16426 + (1));
i__13042__auto___16426 = G__16427;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14285__auto___16424))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14285__auto___16424){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14285__auto___16424),args);
});})(g__14285__auto___16424))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__14285__auto___16424){
return (function (seq16405){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16405));
});})(g__14285__auto___16424))
;


var g__14285__auto___16428 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__14285__auto___16428){
return (function cljs$spec$impl$gen$list(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16429 = arguments.length;
var i__13042__auto___16430 = (0);
while(true){
if((i__13042__auto___16430 < len__13041__auto___16429)){
args__13048__auto__.push((arguments[i__13042__auto___16430]));

var G__16431 = (i__13042__auto___16430 + (1));
i__13042__auto___16430 = G__16431;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14285__auto___16428))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14285__auto___16428){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14285__auto___16428),args);
});})(g__14285__auto___16428))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__14285__auto___16428){
return (function (seq16406){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16406));
});})(g__14285__auto___16428))
;


var g__14285__auto___16432 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__14285__auto___16432){
return (function cljs$spec$impl$gen$map(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16433 = arguments.length;
var i__13042__auto___16434 = (0);
while(true){
if((i__13042__auto___16434 < len__13041__auto___16433)){
args__13048__auto__.push((arguments[i__13042__auto___16434]));

var G__16435 = (i__13042__auto___16434 + (1));
i__13042__auto___16434 = G__16435;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14285__auto___16432))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14285__auto___16432){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14285__auto___16432),args);
});})(g__14285__auto___16432))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__14285__auto___16432){
return (function (seq16407){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16407));
});})(g__14285__auto___16432))
;


var g__14285__auto___16436 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__14285__auto___16436){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16437 = arguments.length;
var i__13042__auto___16438 = (0);
while(true){
if((i__13042__auto___16438 < len__13041__auto___16437)){
args__13048__auto__.push((arguments[i__13042__auto___16438]));

var G__16439 = (i__13042__auto___16438 + (1));
i__13042__auto___16438 = G__16439;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14285__auto___16436))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14285__auto___16436){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14285__auto___16436),args);
});})(g__14285__auto___16436))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__14285__auto___16436){
return (function (seq16408){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16408));
});})(g__14285__auto___16436))
;


var g__14285__auto___16440 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__14285__auto___16440){
return (function cljs$spec$impl$gen$set(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16441 = arguments.length;
var i__13042__auto___16442 = (0);
while(true){
if((i__13042__auto___16442 < len__13041__auto___16441)){
args__13048__auto__.push((arguments[i__13042__auto___16442]));

var G__16443 = (i__13042__auto___16442 + (1));
i__13042__auto___16442 = G__16443;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14285__auto___16440))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14285__auto___16440){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14285__auto___16440),args);
});})(g__14285__auto___16440))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__14285__auto___16440){
return (function (seq16409){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16409));
});})(g__14285__auto___16440))
;


var g__14285__auto___16444 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__14285__auto___16444){
return (function cljs$spec$impl$gen$vector(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16445 = arguments.length;
var i__13042__auto___16446 = (0);
while(true){
if((i__13042__auto___16446 < len__13041__auto___16445)){
args__13048__auto__.push((arguments[i__13042__auto___16446]));

var G__16447 = (i__13042__auto___16446 + (1));
i__13042__auto___16446 = G__16447;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14285__auto___16444))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14285__auto___16444){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14285__auto___16444),args);
});})(g__14285__auto___16444))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__14285__auto___16444){
return (function (seq16410){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16410));
});})(g__14285__auto___16444))
;


var g__14285__auto___16448 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__14285__auto___16448){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16449 = arguments.length;
var i__13042__auto___16450 = (0);
while(true){
if((i__13042__auto___16450 < len__13041__auto___16449)){
args__13048__auto__.push((arguments[i__13042__auto___16450]));

var G__16451 = (i__13042__auto___16450 + (1));
i__13042__auto___16450 = G__16451;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14285__auto___16448))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14285__auto___16448){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14285__auto___16448),args);
});})(g__14285__auto___16448))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__14285__auto___16448){
return (function (seq16411){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16411));
});})(g__14285__auto___16448))
;


var g__14285__auto___16452 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__14285__auto___16452){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16453 = arguments.length;
var i__13042__auto___16454 = (0);
while(true){
if((i__13042__auto___16454 < len__13041__auto___16453)){
args__13048__auto__.push((arguments[i__13042__auto___16454]));

var G__16455 = (i__13042__auto___16454 + (1));
i__13042__auto___16454 = G__16455;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14285__auto___16452))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14285__auto___16452){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14285__auto___16452),args);
});})(g__14285__auto___16452))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__14285__auto___16452){
return (function (seq16412){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16412));
});})(g__14285__auto___16452))
;


var g__14285__auto___16456 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__14285__auto___16456){
return (function cljs$spec$impl$gen$elements(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16457 = arguments.length;
var i__13042__auto___16458 = (0);
while(true){
if((i__13042__auto___16458 < len__13041__auto___16457)){
args__13048__auto__.push((arguments[i__13042__auto___16458]));

var G__16459 = (i__13042__auto___16458 + (1));
i__13042__auto___16458 = G__16459;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14285__auto___16456))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14285__auto___16456){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14285__auto___16456),args);
});})(g__14285__auto___16456))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__14285__auto___16456){
return (function (seq16413){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16413));
});})(g__14285__auto___16456))
;


var g__14285__auto___16460 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__14285__auto___16460){
return (function cljs$spec$impl$gen$bind(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16461 = arguments.length;
var i__13042__auto___16462 = (0);
while(true){
if((i__13042__auto___16462 < len__13041__auto___16461)){
args__13048__auto__.push((arguments[i__13042__auto___16462]));

var G__16463 = (i__13042__auto___16462 + (1));
i__13042__auto___16462 = G__16463;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14285__auto___16460))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14285__auto___16460){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14285__auto___16460),args);
});})(g__14285__auto___16460))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__14285__auto___16460){
return (function (seq16414){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16414));
});})(g__14285__auto___16460))
;


var g__14285__auto___16464 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__14285__auto___16464){
return (function cljs$spec$impl$gen$choose(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16465 = arguments.length;
var i__13042__auto___16466 = (0);
while(true){
if((i__13042__auto___16466 < len__13041__auto___16465)){
args__13048__auto__.push((arguments[i__13042__auto___16466]));

var G__16467 = (i__13042__auto___16466 + (1));
i__13042__auto___16466 = G__16467;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14285__auto___16464))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14285__auto___16464){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14285__auto___16464),args);
});})(g__14285__auto___16464))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__14285__auto___16464){
return (function (seq16415){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16415));
});})(g__14285__auto___16464))
;


var g__14285__auto___16468 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__14285__auto___16468){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16469 = arguments.length;
var i__13042__auto___16470 = (0);
while(true){
if((i__13042__auto___16470 < len__13041__auto___16469)){
args__13048__auto__.push((arguments[i__13042__auto___16470]));

var G__16471 = (i__13042__auto___16470 + (1));
i__13042__auto___16470 = G__16471;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14285__auto___16468))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14285__auto___16468){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14285__auto___16468),args);
});})(g__14285__auto___16468))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__14285__auto___16468){
return (function (seq16416){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16416));
});})(g__14285__auto___16468))
;


var g__14285__auto___16472 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__14285__auto___16472){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16473 = arguments.length;
var i__13042__auto___16474 = (0);
while(true){
if((i__13042__auto___16474 < len__13041__auto___16473)){
args__13048__auto__.push((arguments[i__13042__auto___16474]));

var G__16475 = (i__13042__auto___16474 + (1));
i__13042__auto___16474 = G__16475;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14285__auto___16472))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14285__auto___16472){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14285__auto___16472),args);
});})(g__14285__auto___16472))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__14285__auto___16472){
return (function (seq16417){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16417));
});})(g__14285__auto___16472))
;


var g__14285__auto___16476 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__14285__auto___16476){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16477 = arguments.length;
var i__13042__auto___16478 = (0);
while(true){
if((i__13042__auto___16478 < len__13041__auto___16477)){
args__13048__auto__.push((arguments[i__13042__auto___16478]));

var G__16479 = (i__13042__auto___16478 + (1));
i__13042__auto___16478 = G__16479;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14285__auto___16476))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14285__auto___16476){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14285__auto___16476),args);
});})(g__14285__auto___16476))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__14285__auto___16476){
return (function (seq16418){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16418));
});})(g__14285__auto___16476))
;


var g__14285__auto___16480 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__14285__auto___16480){
return (function cljs$spec$impl$gen$sample(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16481 = arguments.length;
var i__13042__auto___16482 = (0);
while(true){
if((i__13042__auto___16482 < len__13041__auto___16481)){
args__13048__auto__.push((arguments[i__13042__auto___16482]));

var G__16483 = (i__13042__auto___16482 + (1));
i__13042__auto___16482 = G__16483;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14285__auto___16480))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14285__auto___16480){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14285__auto___16480),args);
});})(g__14285__auto___16480))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__14285__auto___16480){
return (function (seq16419){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16419));
});})(g__14285__auto___16480))
;


var g__14285__auto___16484 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__14285__auto___16484){
return (function cljs$spec$impl$gen$return(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16485 = arguments.length;
var i__13042__auto___16486 = (0);
while(true){
if((i__13042__auto___16486 < len__13041__auto___16485)){
args__13048__auto__.push((arguments[i__13042__auto___16486]));

var G__16487 = (i__13042__auto___16486 + (1));
i__13042__auto___16486 = G__16487;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14285__auto___16484))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14285__auto___16484){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14285__auto___16484),args);
});})(g__14285__auto___16484))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__14285__auto___16484){
return (function (seq16420){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16420));
});})(g__14285__auto___16484))
;


var g__14285__auto___16488 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__14285__auto___16488){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16489 = arguments.length;
var i__13042__auto___16490 = (0);
while(true){
if((i__13042__auto___16490 < len__13041__auto___16489)){
args__13048__auto__.push((arguments[i__13042__auto___16490]));

var G__16491 = (i__13042__auto___16490 + (1));
i__13042__auto___16490 = G__16491;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14285__auto___16488))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14285__auto___16488){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14285__auto___16488),args);
});})(g__14285__auto___16488))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__14285__auto___16488){
return (function (seq16421){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16421));
});})(g__14285__auto___16488))
;


var g__14285__auto___16492 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__14285__auto___16492){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16493 = arguments.length;
var i__13042__auto___16494 = (0);
while(true){
if((i__13042__auto___16494 < len__13041__auto___16493)){
args__13048__auto__.push((arguments[i__13042__auto___16494]));

var G__16495 = (i__13042__auto___16494 + (1));
i__13042__auto___16494 = G__16495;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14285__auto___16492))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14285__auto___16492){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14285__auto___16492),args);
});})(g__14285__auto___16492))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__14285__auto___16492){
return (function (seq16422){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16422));
});})(g__14285__auto___16492))
;


var g__14285__auto___16496 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__14285__auto___16496){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16497 = arguments.length;
var i__13042__auto___16498 = (0);
while(true){
if((i__13042__auto___16498 < len__13041__auto___16497)){
args__13048__auto__.push((arguments[i__13042__auto___16498]));

var G__16499 = (i__13042__auto___16498 + (1));
i__13042__auto___16498 = G__16499;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14285__auto___16496))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14285__auto___16496){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14285__auto___16496),args);
});})(g__14285__auto___16496))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__14285__auto___16496){
return (function (seq16423){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16423));
});})(g__14285__auto___16496))
;

var g__14298__auto___16521 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__14298__auto___16521){
return (function cljs$spec$impl$gen$any(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16522 = arguments.length;
var i__13042__auto___16523 = (0);
while(true){
if((i__13042__auto___16523 < len__13041__auto___16522)){
args__13048__auto__.push((arguments[i__13042__auto___16523]));

var G__16524 = (i__13042__auto___16523 + (1));
i__13042__auto___16523 = G__16524;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14298__auto___16521))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14298__auto___16521){
return (function (args){
return cljs.core.deref.call(null,g__14298__auto___16521);
});})(g__14298__auto___16521))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__14298__auto___16521){
return (function (seq16500){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16500));
});})(g__14298__auto___16521))
;


var g__14298__auto___16525 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__14298__auto___16525){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16526 = arguments.length;
var i__13042__auto___16527 = (0);
while(true){
if((i__13042__auto___16527 < len__13041__auto___16526)){
args__13048__auto__.push((arguments[i__13042__auto___16527]));

var G__16528 = (i__13042__auto___16527 + (1));
i__13042__auto___16527 = G__16528;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14298__auto___16525))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14298__auto___16525){
return (function (args){
return cljs.core.deref.call(null,g__14298__auto___16525);
});})(g__14298__auto___16525))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__14298__auto___16525){
return (function (seq16501){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16501));
});})(g__14298__auto___16525))
;


var g__14298__auto___16529 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__14298__auto___16529){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16530 = arguments.length;
var i__13042__auto___16531 = (0);
while(true){
if((i__13042__auto___16531 < len__13041__auto___16530)){
args__13048__auto__.push((arguments[i__13042__auto___16531]));

var G__16532 = (i__13042__auto___16531 + (1));
i__13042__auto___16531 = G__16532;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14298__auto___16529))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14298__auto___16529){
return (function (args){
return cljs.core.deref.call(null,g__14298__auto___16529);
});})(g__14298__auto___16529))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__14298__auto___16529){
return (function (seq16502){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16502));
});})(g__14298__auto___16529))
;


var g__14298__auto___16533 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__14298__auto___16533){
return (function cljs$spec$impl$gen$char(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16534 = arguments.length;
var i__13042__auto___16535 = (0);
while(true){
if((i__13042__auto___16535 < len__13041__auto___16534)){
args__13048__auto__.push((arguments[i__13042__auto___16535]));

var G__16536 = (i__13042__auto___16535 + (1));
i__13042__auto___16535 = G__16536;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14298__auto___16533))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14298__auto___16533){
return (function (args){
return cljs.core.deref.call(null,g__14298__auto___16533);
});})(g__14298__auto___16533))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__14298__auto___16533){
return (function (seq16503){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16503));
});})(g__14298__auto___16533))
;


var g__14298__auto___16537 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__14298__auto___16537){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16538 = arguments.length;
var i__13042__auto___16539 = (0);
while(true){
if((i__13042__auto___16539 < len__13041__auto___16538)){
args__13048__auto__.push((arguments[i__13042__auto___16539]));

var G__16540 = (i__13042__auto___16539 + (1));
i__13042__auto___16539 = G__16540;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14298__auto___16537))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14298__auto___16537){
return (function (args){
return cljs.core.deref.call(null,g__14298__auto___16537);
});})(g__14298__auto___16537))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__14298__auto___16537){
return (function (seq16504){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16504));
});})(g__14298__auto___16537))
;


var g__14298__auto___16541 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__14298__auto___16541){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16542 = arguments.length;
var i__13042__auto___16543 = (0);
while(true){
if((i__13042__auto___16543 < len__13041__auto___16542)){
args__13048__auto__.push((arguments[i__13042__auto___16543]));

var G__16544 = (i__13042__auto___16543 + (1));
i__13042__auto___16543 = G__16544;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14298__auto___16541))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14298__auto___16541){
return (function (args){
return cljs.core.deref.call(null,g__14298__auto___16541);
});})(g__14298__auto___16541))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__14298__auto___16541){
return (function (seq16505){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16505));
});})(g__14298__auto___16541))
;


var g__14298__auto___16545 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__14298__auto___16545){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16546 = arguments.length;
var i__13042__auto___16547 = (0);
while(true){
if((i__13042__auto___16547 < len__13041__auto___16546)){
args__13048__auto__.push((arguments[i__13042__auto___16547]));

var G__16548 = (i__13042__auto___16547 + (1));
i__13042__auto___16547 = G__16548;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14298__auto___16545))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14298__auto___16545){
return (function (args){
return cljs.core.deref.call(null,g__14298__auto___16545);
});})(g__14298__auto___16545))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__14298__auto___16545){
return (function (seq16506){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16506));
});})(g__14298__auto___16545))
;


var g__14298__auto___16549 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__14298__auto___16549){
return (function cljs$spec$impl$gen$double(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16550 = arguments.length;
var i__13042__auto___16551 = (0);
while(true){
if((i__13042__auto___16551 < len__13041__auto___16550)){
args__13048__auto__.push((arguments[i__13042__auto___16551]));

var G__16552 = (i__13042__auto___16551 + (1));
i__13042__auto___16551 = G__16552;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14298__auto___16549))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14298__auto___16549){
return (function (args){
return cljs.core.deref.call(null,g__14298__auto___16549);
});})(g__14298__auto___16549))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__14298__auto___16549){
return (function (seq16507){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16507));
});})(g__14298__auto___16549))
;


var g__14298__auto___16553 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__14298__auto___16553){
return (function cljs$spec$impl$gen$int(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16554 = arguments.length;
var i__13042__auto___16555 = (0);
while(true){
if((i__13042__auto___16555 < len__13041__auto___16554)){
args__13048__auto__.push((arguments[i__13042__auto___16555]));

var G__16556 = (i__13042__auto___16555 + (1));
i__13042__auto___16555 = G__16556;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14298__auto___16553))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14298__auto___16553){
return (function (args){
return cljs.core.deref.call(null,g__14298__auto___16553);
});})(g__14298__auto___16553))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__14298__auto___16553){
return (function (seq16508){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16508));
});})(g__14298__auto___16553))
;


var g__14298__auto___16557 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__14298__auto___16557){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16558 = arguments.length;
var i__13042__auto___16559 = (0);
while(true){
if((i__13042__auto___16559 < len__13041__auto___16558)){
args__13048__auto__.push((arguments[i__13042__auto___16559]));

var G__16560 = (i__13042__auto___16559 + (1));
i__13042__auto___16559 = G__16560;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14298__auto___16557))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14298__auto___16557){
return (function (args){
return cljs.core.deref.call(null,g__14298__auto___16557);
});})(g__14298__auto___16557))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__14298__auto___16557){
return (function (seq16509){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16509));
});})(g__14298__auto___16557))
;


var g__14298__auto___16561 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__14298__auto___16561){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16562 = arguments.length;
var i__13042__auto___16563 = (0);
while(true){
if((i__13042__auto___16563 < len__13041__auto___16562)){
args__13048__auto__.push((arguments[i__13042__auto___16563]));

var G__16564 = (i__13042__auto___16563 + (1));
i__13042__auto___16563 = G__16564;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14298__auto___16561))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14298__auto___16561){
return (function (args){
return cljs.core.deref.call(null,g__14298__auto___16561);
});})(g__14298__auto___16561))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__14298__auto___16561){
return (function (seq16510){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16510));
});})(g__14298__auto___16561))
;


var g__14298__auto___16565 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__14298__auto___16565){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16566 = arguments.length;
var i__13042__auto___16567 = (0);
while(true){
if((i__13042__auto___16567 < len__13041__auto___16566)){
args__13048__auto__.push((arguments[i__13042__auto___16567]));

var G__16568 = (i__13042__auto___16567 + (1));
i__13042__auto___16567 = G__16568;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14298__auto___16565))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14298__auto___16565){
return (function (args){
return cljs.core.deref.call(null,g__14298__auto___16565);
});})(g__14298__auto___16565))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__14298__auto___16565){
return (function (seq16511){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16511));
});})(g__14298__auto___16565))
;


var g__14298__auto___16569 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__14298__auto___16569){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16570 = arguments.length;
var i__13042__auto___16571 = (0);
while(true){
if((i__13042__auto___16571 < len__13041__auto___16570)){
args__13048__auto__.push((arguments[i__13042__auto___16571]));

var G__16572 = (i__13042__auto___16571 + (1));
i__13042__auto___16571 = G__16572;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14298__auto___16569))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14298__auto___16569){
return (function (args){
return cljs.core.deref.call(null,g__14298__auto___16569);
});})(g__14298__auto___16569))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__14298__auto___16569){
return (function (seq16512){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16512));
});})(g__14298__auto___16569))
;


var g__14298__auto___16573 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__14298__auto___16573){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16574 = arguments.length;
var i__13042__auto___16575 = (0);
while(true){
if((i__13042__auto___16575 < len__13041__auto___16574)){
args__13048__auto__.push((arguments[i__13042__auto___16575]));

var G__16576 = (i__13042__auto___16575 + (1));
i__13042__auto___16575 = G__16576;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14298__auto___16573))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14298__auto___16573){
return (function (args){
return cljs.core.deref.call(null,g__14298__auto___16573);
});})(g__14298__auto___16573))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__14298__auto___16573){
return (function (seq16513){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16513));
});})(g__14298__auto___16573))
;


var g__14298__auto___16577 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__14298__auto___16577){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16578 = arguments.length;
var i__13042__auto___16579 = (0);
while(true){
if((i__13042__auto___16579 < len__13041__auto___16578)){
args__13048__auto__.push((arguments[i__13042__auto___16579]));

var G__16580 = (i__13042__auto___16579 + (1));
i__13042__auto___16579 = G__16580;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14298__auto___16577))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14298__auto___16577){
return (function (args){
return cljs.core.deref.call(null,g__14298__auto___16577);
});})(g__14298__auto___16577))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__14298__auto___16577){
return (function (seq16514){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16514));
});})(g__14298__auto___16577))
;


var g__14298__auto___16581 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__14298__auto___16581){
return (function cljs$spec$impl$gen$string(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16582 = arguments.length;
var i__13042__auto___16583 = (0);
while(true){
if((i__13042__auto___16583 < len__13041__auto___16582)){
args__13048__auto__.push((arguments[i__13042__auto___16583]));

var G__16584 = (i__13042__auto___16583 + (1));
i__13042__auto___16583 = G__16584;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14298__auto___16581))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14298__auto___16581){
return (function (args){
return cljs.core.deref.call(null,g__14298__auto___16581);
});})(g__14298__auto___16581))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__14298__auto___16581){
return (function (seq16515){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16515));
});})(g__14298__auto___16581))
;


var g__14298__auto___16585 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__14298__auto___16585){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16586 = arguments.length;
var i__13042__auto___16587 = (0);
while(true){
if((i__13042__auto___16587 < len__13041__auto___16586)){
args__13048__auto__.push((arguments[i__13042__auto___16587]));

var G__16588 = (i__13042__auto___16587 + (1));
i__13042__auto___16587 = G__16588;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14298__auto___16585))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14298__auto___16585){
return (function (args){
return cljs.core.deref.call(null,g__14298__auto___16585);
});})(g__14298__auto___16585))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__14298__auto___16585){
return (function (seq16516){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16516));
});})(g__14298__auto___16585))
;


var g__14298__auto___16589 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__14298__auto___16589){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16590 = arguments.length;
var i__13042__auto___16591 = (0);
while(true){
if((i__13042__auto___16591 < len__13041__auto___16590)){
args__13048__auto__.push((arguments[i__13042__auto___16591]));

var G__16592 = (i__13042__auto___16591 + (1));
i__13042__auto___16591 = G__16592;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14298__auto___16589))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14298__auto___16589){
return (function (args){
return cljs.core.deref.call(null,g__14298__auto___16589);
});})(g__14298__auto___16589))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__14298__auto___16589){
return (function (seq16517){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16517));
});})(g__14298__auto___16589))
;


var g__14298__auto___16593 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__14298__auto___16593){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16594 = arguments.length;
var i__13042__auto___16595 = (0);
while(true){
if((i__13042__auto___16595 < len__13041__auto___16594)){
args__13048__auto__.push((arguments[i__13042__auto___16595]));

var G__16596 = (i__13042__auto___16595 + (1));
i__13042__auto___16595 = G__16596;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14298__auto___16593))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14298__auto___16593){
return (function (args){
return cljs.core.deref.call(null,g__14298__auto___16593);
});})(g__14298__auto___16593))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__14298__auto___16593){
return (function (seq16518){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16518));
});})(g__14298__auto___16593))
;


var g__14298__auto___16597 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__14298__auto___16597){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16598 = arguments.length;
var i__13042__auto___16599 = (0);
while(true){
if((i__13042__auto___16599 < len__13041__auto___16598)){
args__13048__auto__.push((arguments[i__13042__auto___16599]));

var G__16600 = (i__13042__auto___16599 + (1));
i__13042__auto___16599 = G__16600;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14298__auto___16597))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14298__auto___16597){
return (function (args){
return cljs.core.deref.call(null,g__14298__auto___16597);
});})(g__14298__auto___16597))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__14298__auto___16597){
return (function (seq16519){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16519));
});})(g__14298__auto___16597))
;


var g__14298__auto___16601 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__14298__auto___16601){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16602 = arguments.length;
var i__13042__auto___16603 = (0);
while(true){
if((i__13042__auto___16603 < len__13041__auto___16602)){
args__13048__auto__.push((arguments[i__13042__auto___16603]));

var G__16604 = (i__13042__auto___16603 + (1));
i__13042__auto___16603 = G__16604;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});})(g__14298__auto___16601))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14298__auto___16601){
return (function (args){
return cljs.core.deref.call(null,g__14298__auto___16601);
});})(g__14298__auto___16601))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__14298__auto___16601){
return (function (seq16520){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16520));
});})(g__14298__auto___16601))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16607 = arguments.length;
var i__13042__auto___16608 = (0);
while(true){
if((i__13042__auto___16608 < len__13041__auto___16607)){
args__13048__auto__.push((arguments[i__13042__auto___16608]));

var G__16609 = (i__13042__auto___16608 + (1));
i__13042__auto___16608 = G__16609;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__16605_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__16605_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq16606){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16606));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__16610_SHARP_){
return (new Date(p1__16610_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map