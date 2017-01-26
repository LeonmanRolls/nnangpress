// Compiled by ClojureScript 1.9.293 {}
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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__10468__auto__,writer__10469__auto__,opt__10470__auto__){
return cljs.core._write.call(null,writer__10469__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13787 = arguments.length;
var i__10971__auto___13788 = (0);
while(true){
if((i__10971__auto___13788 < len__10970__auto___13787)){
args__10977__auto__.push((arguments[i__10971__auto___13788]));

var G__13789 = (i__10971__auto___13788 + (1));
i__10971__auto___13788 = G__13789;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq13786){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13786));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13791 = arguments.length;
var i__10971__auto___13792 = (0);
while(true){
if((i__10971__auto___13792 < len__10970__auto___13791)){
args__10977__auto__.push((arguments[i__10971__auto___13792]));

var G__13793 = (i__10971__auto___13792 + (1));
i__10971__auto___13792 = G__13793;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq13790){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13790));
});

var g_QMARK__13794 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_13795 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__13794){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__13794))
,null));
var mkg_13796 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__13794,g_13795){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__13794,g_13795))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__13794,g_13795,mkg_13796){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__13794).call(null,x);
});})(g_QMARK__13794,g_13795,mkg_13796))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__13794,g_13795,mkg_13796){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_13796).call(null,gfn);
});})(g_QMARK__13794,g_13795,mkg_13796))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__13794,g_13795,mkg_13796){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_13795).call(null,generator);
});})(g_QMARK__13794,g_13795,mkg_13796))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__11046__auto___13815 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__11046__auto___13815){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13816 = arguments.length;
var i__10971__auto___13817 = (0);
while(true){
if((i__10971__auto___13817 < len__10970__auto___13816)){
args__10977__auto__.push((arguments[i__10971__auto___13817]));

var G__13818 = (i__10971__auto___13817 + (1));
i__10971__auto___13817 = G__13818;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11046__auto___13815))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11046__auto___13815){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11046__auto___13815),args);
});})(g__11046__auto___13815))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__11046__auto___13815){
return (function (seq13797){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13797));
});})(g__11046__auto___13815))
;


var g__11046__auto___13819 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__11046__auto___13819){
return (function cljs$spec$impl$gen$list(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13820 = arguments.length;
var i__10971__auto___13821 = (0);
while(true){
if((i__10971__auto___13821 < len__10970__auto___13820)){
args__10977__auto__.push((arguments[i__10971__auto___13821]));

var G__13822 = (i__10971__auto___13821 + (1));
i__10971__auto___13821 = G__13822;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11046__auto___13819))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11046__auto___13819){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11046__auto___13819),args);
});})(g__11046__auto___13819))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__11046__auto___13819){
return (function (seq13798){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13798));
});})(g__11046__auto___13819))
;


var g__11046__auto___13823 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__11046__auto___13823){
return (function cljs$spec$impl$gen$map(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13824 = arguments.length;
var i__10971__auto___13825 = (0);
while(true){
if((i__10971__auto___13825 < len__10970__auto___13824)){
args__10977__auto__.push((arguments[i__10971__auto___13825]));

var G__13826 = (i__10971__auto___13825 + (1));
i__10971__auto___13825 = G__13826;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11046__auto___13823))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11046__auto___13823){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11046__auto___13823),args);
});})(g__11046__auto___13823))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__11046__auto___13823){
return (function (seq13799){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13799));
});})(g__11046__auto___13823))
;


var g__11046__auto___13827 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__11046__auto___13827){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13828 = arguments.length;
var i__10971__auto___13829 = (0);
while(true){
if((i__10971__auto___13829 < len__10970__auto___13828)){
args__10977__auto__.push((arguments[i__10971__auto___13829]));

var G__13830 = (i__10971__auto___13829 + (1));
i__10971__auto___13829 = G__13830;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11046__auto___13827))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11046__auto___13827){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11046__auto___13827),args);
});})(g__11046__auto___13827))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__11046__auto___13827){
return (function (seq13800){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13800));
});})(g__11046__auto___13827))
;


var g__11046__auto___13831 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__11046__auto___13831){
return (function cljs$spec$impl$gen$set(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13832 = arguments.length;
var i__10971__auto___13833 = (0);
while(true){
if((i__10971__auto___13833 < len__10970__auto___13832)){
args__10977__auto__.push((arguments[i__10971__auto___13833]));

var G__13834 = (i__10971__auto___13833 + (1));
i__10971__auto___13833 = G__13834;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11046__auto___13831))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11046__auto___13831){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11046__auto___13831),args);
});})(g__11046__auto___13831))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__11046__auto___13831){
return (function (seq13801){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13801));
});})(g__11046__auto___13831))
;


var g__11046__auto___13835 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__11046__auto___13835){
return (function cljs$spec$impl$gen$vector(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13836 = arguments.length;
var i__10971__auto___13837 = (0);
while(true){
if((i__10971__auto___13837 < len__10970__auto___13836)){
args__10977__auto__.push((arguments[i__10971__auto___13837]));

var G__13838 = (i__10971__auto___13837 + (1));
i__10971__auto___13837 = G__13838;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11046__auto___13835))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11046__auto___13835){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11046__auto___13835),args);
});})(g__11046__auto___13835))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__11046__auto___13835){
return (function (seq13802){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13802));
});})(g__11046__auto___13835))
;


var g__11046__auto___13839 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__11046__auto___13839){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13840 = arguments.length;
var i__10971__auto___13841 = (0);
while(true){
if((i__10971__auto___13841 < len__10970__auto___13840)){
args__10977__auto__.push((arguments[i__10971__auto___13841]));

var G__13842 = (i__10971__auto___13841 + (1));
i__10971__auto___13841 = G__13842;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11046__auto___13839))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11046__auto___13839){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11046__auto___13839),args);
});})(g__11046__auto___13839))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__11046__auto___13839){
return (function (seq13803){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13803));
});})(g__11046__auto___13839))
;


var g__11046__auto___13843 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__11046__auto___13843){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13844 = arguments.length;
var i__10971__auto___13845 = (0);
while(true){
if((i__10971__auto___13845 < len__10970__auto___13844)){
args__10977__auto__.push((arguments[i__10971__auto___13845]));

var G__13846 = (i__10971__auto___13845 + (1));
i__10971__auto___13845 = G__13846;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11046__auto___13843))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11046__auto___13843){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11046__auto___13843),args);
});})(g__11046__auto___13843))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__11046__auto___13843){
return (function (seq13804){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13804));
});})(g__11046__auto___13843))
;


var g__11046__auto___13847 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__11046__auto___13847){
return (function cljs$spec$impl$gen$elements(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13848 = arguments.length;
var i__10971__auto___13849 = (0);
while(true){
if((i__10971__auto___13849 < len__10970__auto___13848)){
args__10977__auto__.push((arguments[i__10971__auto___13849]));

var G__13850 = (i__10971__auto___13849 + (1));
i__10971__auto___13849 = G__13850;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11046__auto___13847))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11046__auto___13847){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11046__auto___13847),args);
});})(g__11046__auto___13847))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__11046__auto___13847){
return (function (seq13805){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13805));
});})(g__11046__auto___13847))
;


var g__11046__auto___13851 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__11046__auto___13851){
return (function cljs$spec$impl$gen$bind(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13852 = arguments.length;
var i__10971__auto___13853 = (0);
while(true){
if((i__10971__auto___13853 < len__10970__auto___13852)){
args__10977__auto__.push((arguments[i__10971__auto___13853]));

var G__13854 = (i__10971__auto___13853 + (1));
i__10971__auto___13853 = G__13854;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11046__auto___13851))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11046__auto___13851){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11046__auto___13851),args);
});})(g__11046__auto___13851))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__11046__auto___13851){
return (function (seq13806){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13806));
});})(g__11046__auto___13851))
;


var g__11046__auto___13855 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__11046__auto___13855){
return (function cljs$spec$impl$gen$choose(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13856 = arguments.length;
var i__10971__auto___13857 = (0);
while(true){
if((i__10971__auto___13857 < len__10970__auto___13856)){
args__10977__auto__.push((arguments[i__10971__auto___13857]));

var G__13858 = (i__10971__auto___13857 + (1));
i__10971__auto___13857 = G__13858;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11046__auto___13855))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11046__auto___13855){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11046__auto___13855),args);
});})(g__11046__auto___13855))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__11046__auto___13855){
return (function (seq13807){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13807));
});})(g__11046__auto___13855))
;


var g__11046__auto___13859 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__11046__auto___13859){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13860 = arguments.length;
var i__10971__auto___13861 = (0);
while(true){
if((i__10971__auto___13861 < len__10970__auto___13860)){
args__10977__auto__.push((arguments[i__10971__auto___13861]));

var G__13862 = (i__10971__auto___13861 + (1));
i__10971__auto___13861 = G__13862;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11046__auto___13859))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11046__auto___13859){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11046__auto___13859),args);
});})(g__11046__auto___13859))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__11046__auto___13859){
return (function (seq13808){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13808));
});})(g__11046__auto___13859))
;


var g__11046__auto___13863 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__11046__auto___13863){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13864 = arguments.length;
var i__10971__auto___13865 = (0);
while(true){
if((i__10971__auto___13865 < len__10970__auto___13864)){
args__10977__auto__.push((arguments[i__10971__auto___13865]));

var G__13866 = (i__10971__auto___13865 + (1));
i__10971__auto___13865 = G__13866;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11046__auto___13863))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11046__auto___13863){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11046__auto___13863),args);
});})(g__11046__auto___13863))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__11046__auto___13863){
return (function (seq13809){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13809));
});})(g__11046__auto___13863))
;


var g__11046__auto___13867 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__11046__auto___13867){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13868 = arguments.length;
var i__10971__auto___13869 = (0);
while(true){
if((i__10971__auto___13869 < len__10970__auto___13868)){
args__10977__auto__.push((arguments[i__10971__auto___13869]));

var G__13870 = (i__10971__auto___13869 + (1));
i__10971__auto___13869 = G__13870;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11046__auto___13867))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11046__auto___13867){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11046__auto___13867),args);
});})(g__11046__auto___13867))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__11046__auto___13867){
return (function (seq13810){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13810));
});})(g__11046__auto___13867))
;


var g__11046__auto___13871 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__11046__auto___13871){
return (function cljs$spec$impl$gen$sample(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13872 = arguments.length;
var i__10971__auto___13873 = (0);
while(true){
if((i__10971__auto___13873 < len__10970__auto___13872)){
args__10977__auto__.push((arguments[i__10971__auto___13873]));

var G__13874 = (i__10971__auto___13873 + (1));
i__10971__auto___13873 = G__13874;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11046__auto___13871))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11046__auto___13871){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11046__auto___13871),args);
});})(g__11046__auto___13871))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__11046__auto___13871){
return (function (seq13811){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13811));
});})(g__11046__auto___13871))
;


var g__11046__auto___13875 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__11046__auto___13875){
return (function cljs$spec$impl$gen$return(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13876 = arguments.length;
var i__10971__auto___13877 = (0);
while(true){
if((i__10971__auto___13877 < len__10970__auto___13876)){
args__10977__auto__.push((arguments[i__10971__auto___13877]));

var G__13878 = (i__10971__auto___13877 + (1));
i__10971__auto___13877 = G__13878;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11046__auto___13875))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11046__auto___13875){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11046__auto___13875),args);
});})(g__11046__auto___13875))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__11046__auto___13875){
return (function (seq13812){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13812));
});})(g__11046__auto___13875))
;


var g__11046__auto___13879 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__11046__auto___13879){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13880 = arguments.length;
var i__10971__auto___13881 = (0);
while(true){
if((i__10971__auto___13881 < len__10970__auto___13880)){
args__10977__auto__.push((arguments[i__10971__auto___13881]));

var G__13882 = (i__10971__auto___13881 + (1));
i__10971__auto___13881 = G__13882;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11046__auto___13879))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11046__auto___13879){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11046__auto___13879),args);
});})(g__11046__auto___13879))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__11046__auto___13879){
return (function (seq13813){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13813));
});})(g__11046__auto___13879))
;


var g__11046__auto___13883 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__11046__auto___13883){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13884 = arguments.length;
var i__10971__auto___13885 = (0);
while(true){
if((i__10971__auto___13885 < len__10970__auto___13884)){
args__10977__auto__.push((arguments[i__10971__auto___13885]));

var G__13886 = (i__10971__auto___13885 + (1));
i__10971__auto___13885 = G__13886;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11046__auto___13883))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11046__auto___13883){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11046__auto___13883),args);
});})(g__11046__auto___13883))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__11046__auto___13883){
return (function (seq13814){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13814));
});})(g__11046__auto___13883))
;

var g__11059__auto___13908 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__11059__auto___13908){
return (function cljs$spec$impl$gen$any(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13909 = arguments.length;
var i__10971__auto___13910 = (0);
while(true){
if((i__10971__auto___13910 < len__10970__auto___13909)){
args__10977__auto__.push((arguments[i__10971__auto___13910]));

var G__13911 = (i__10971__auto___13910 + (1));
i__10971__auto___13910 = G__13911;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11059__auto___13908))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11059__auto___13908){
return (function (args){
return cljs.core.deref.call(null,g__11059__auto___13908);
});})(g__11059__auto___13908))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__11059__auto___13908){
return (function (seq13887){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13887));
});})(g__11059__auto___13908))
;


var g__11059__auto___13912 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__11059__auto___13912){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13913 = arguments.length;
var i__10971__auto___13914 = (0);
while(true){
if((i__10971__auto___13914 < len__10970__auto___13913)){
args__10977__auto__.push((arguments[i__10971__auto___13914]));

var G__13915 = (i__10971__auto___13914 + (1));
i__10971__auto___13914 = G__13915;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11059__auto___13912))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11059__auto___13912){
return (function (args){
return cljs.core.deref.call(null,g__11059__auto___13912);
});})(g__11059__auto___13912))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__11059__auto___13912){
return (function (seq13888){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13888));
});})(g__11059__auto___13912))
;


var g__11059__auto___13916 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__11059__auto___13916){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13917 = arguments.length;
var i__10971__auto___13918 = (0);
while(true){
if((i__10971__auto___13918 < len__10970__auto___13917)){
args__10977__auto__.push((arguments[i__10971__auto___13918]));

var G__13919 = (i__10971__auto___13918 + (1));
i__10971__auto___13918 = G__13919;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11059__auto___13916))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11059__auto___13916){
return (function (args){
return cljs.core.deref.call(null,g__11059__auto___13916);
});})(g__11059__auto___13916))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__11059__auto___13916){
return (function (seq13889){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13889));
});})(g__11059__auto___13916))
;


var g__11059__auto___13920 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__11059__auto___13920){
return (function cljs$spec$impl$gen$char(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13921 = arguments.length;
var i__10971__auto___13922 = (0);
while(true){
if((i__10971__auto___13922 < len__10970__auto___13921)){
args__10977__auto__.push((arguments[i__10971__auto___13922]));

var G__13923 = (i__10971__auto___13922 + (1));
i__10971__auto___13922 = G__13923;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11059__auto___13920))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11059__auto___13920){
return (function (args){
return cljs.core.deref.call(null,g__11059__auto___13920);
});})(g__11059__auto___13920))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__11059__auto___13920){
return (function (seq13890){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13890));
});})(g__11059__auto___13920))
;


var g__11059__auto___13924 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__11059__auto___13924){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13925 = arguments.length;
var i__10971__auto___13926 = (0);
while(true){
if((i__10971__auto___13926 < len__10970__auto___13925)){
args__10977__auto__.push((arguments[i__10971__auto___13926]));

var G__13927 = (i__10971__auto___13926 + (1));
i__10971__auto___13926 = G__13927;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11059__auto___13924))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11059__auto___13924){
return (function (args){
return cljs.core.deref.call(null,g__11059__auto___13924);
});})(g__11059__auto___13924))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__11059__auto___13924){
return (function (seq13891){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13891));
});})(g__11059__auto___13924))
;


var g__11059__auto___13928 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__11059__auto___13928){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13929 = arguments.length;
var i__10971__auto___13930 = (0);
while(true){
if((i__10971__auto___13930 < len__10970__auto___13929)){
args__10977__auto__.push((arguments[i__10971__auto___13930]));

var G__13931 = (i__10971__auto___13930 + (1));
i__10971__auto___13930 = G__13931;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11059__auto___13928))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11059__auto___13928){
return (function (args){
return cljs.core.deref.call(null,g__11059__auto___13928);
});})(g__11059__auto___13928))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__11059__auto___13928){
return (function (seq13892){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13892));
});})(g__11059__auto___13928))
;


var g__11059__auto___13932 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__11059__auto___13932){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13933 = arguments.length;
var i__10971__auto___13934 = (0);
while(true){
if((i__10971__auto___13934 < len__10970__auto___13933)){
args__10977__auto__.push((arguments[i__10971__auto___13934]));

var G__13935 = (i__10971__auto___13934 + (1));
i__10971__auto___13934 = G__13935;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11059__auto___13932))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11059__auto___13932){
return (function (args){
return cljs.core.deref.call(null,g__11059__auto___13932);
});})(g__11059__auto___13932))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__11059__auto___13932){
return (function (seq13893){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13893));
});})(g__11059__auto___13932))
;


var g__11059__auto___13936 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__11059__auto___13936){
return (function cljs$spec$impl$gen$double(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13937 = arguments.length;
var i__10971__auto___13938 = (0);
while(true){
if((i__10971__auto___13938 < len__10970__auto___13937)){
args__10977__auto__.push((arguments[i__10971__auto___13938]));

var G__13939 = (i__10971__auto___13938 + (1));
i__10971__auto___13938 = G__13939;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11059__auto___13936))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11059__auto___13936){
return (function (args){
return cljs.core.deref.call(null,g__11059__auto___13936);
});})(g__11059__auto___13936))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__11059__auto___13936){
return (function (seq13894){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13894));
});})(g__11059__auto___13936))
;


var g__11059__auto___13940 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__11059__auto___13940){
return (function cljs$spec$impl$gen$int(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13941 = arguments.length;
var i__10971__auto___13942 = (0);
while(true){
if((i__10971__auto___13942 < len__10970__auto___13941)){
args__10977__auto__.push((arguments[i__10971__auto___13942]));

var G__13943 = (i__10971__auto___13942 + (1));
i__10971__auto___13942 = G__13943;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11059__auto___13940))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11059__auto___13940){
return (function (args){
return cljs.core.deref.call(null,g__11059__auto___13940);
});})(g__11059__auto___13940))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__11059__auto___13940){
return (function (seq13895){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13895));
});})(g__11059__auto___13940))
;


var g__11059__auto___13944 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__11059__auto___13944){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13945 = arguments.length;
var i__10971__auto___13946 = (0);
while(true){
if((i__10971__auto___13946 < len__10970__auto___13945)){
args__10977__auto__.push((arguments[i__10971__auto___13946]));

var G__13947 = (i__10971__auto___13946 + (1));
i__10971__auto___13946 = G__13947;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11059__auto___13944))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11059__auto___13944){
return (function (args){
return cljs.core.deref.call(null,g__11059__auto___13944);
});})(g__11059__auto___13944))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__11059__auto___13944){
return (function (seq13896){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13896));
});})(g__11059__auto___13944))
;


var g__11059__auto___13948 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__11059__auto___13948){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13949 = arguments.length;
var i__10971__auto___13950 = (0);
while(true){
if((i__10971__auto___13950 < len__10970__auto___13949)){
args__10977__auto__.push((arguments[i__10971__auto___13950]));

var G__13951 = (i__10971__auto___13950 + (1));
i__10971__auto___13950 = G__13951;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11059__auto___13948))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11059__auto___13948){
return (function (args){
return cljs.core.deref.call(null,g__11059__auto___13948);
});})(g__11059__auto___13948))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__11059__auto___13948){
return (function (seq13897){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13897));
});})(g__11059__auto___13948))
;


var g__11059__auto___13952 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__11059__auto___13952){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13953 = arguments.length;
var i__10971__auto___13954 = (0);
while(true){
if((i__10971__auto___13954 < len__10970__auto___13953)){
args__10977__auto__.push((arguments[i__10971__auto___13954]));

var G__13955 = (i__10971__auto___13954 + (1));
i__10971__auto___13954 = G__13955;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11059__auto___13952))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11059__auto___13952){
return (function (args){
return cljs.core.deref.call(null,g__11059__auto___13952);
});})(g__11059__auto___13952))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__11059__auto___13952){
return (function (seq13898){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13898));
});})(g__11059__auto___13952))
;


var g__11059__auto___13956 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__11059__auto___13956){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13957 = arguments.length;
var i__10971__auto___13958 = (0);
while(true){
if((i__10971__auto___13958 < len__10970__auto___13957)){
args__10977__auto__.push((arguments[i__10971__auto___13958]));

var G__13959 = (i__10971__auto___13958 + (1));
i__10971__auto___13958 = G__13959;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11059__auto___13956))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11059__auto___13956){
return (function (args){
return cljs.core.deref.call(null,g__11059__auto___13956);
});})(g__11059__auto___13956))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__11059__auto___13956){
return (function (seq13899){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13899));
});})(g__11059__auto___13956))
;


var g__11059__auto___13960 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__11059__auto___13960){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13961 = arguments.length;
var i__10971__auto___13962 = (0);
while(true){
if((i__10971__auto___13962 < len__10970__auto___13961)){
args__10977__auto__.push((arguments[i__10971__auto___13962]));

var G__13963 = (i__10971__auto___13962 + (1));
i__10971__auto___13962 = G__13963;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11059__auto___13960))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11059__auto___13960){
return (function (args){
return cljs.core.deref.call(null,g__11059__auto___13960);
});})(g__11059__auto___13960))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__11059__auto___13960){
return (function (seq13900){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13900));
});})(g__11059__auto___13960))
;


var g__11059__auto___13964 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__11059__auto___13964){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13965 = arguments.length;
var i__10971__auto___13966 = (0);
while(true){
if((i__10971__auto___13966 < len__10970__auto___13965)){
args__10977__auto__.push((arguments[i__10971__auto___13966]));

var G__13967 = (i__10971__auto___13966 + (1));
i__10971__auto___13966 = G__13967;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11059__auto___13964))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11059__auto___13964){
return (function (args){
return cljs.core.deref.call(null,g__11059__auto___13964);
});})(g__11059__auto___13964))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__11059__auto___13964){
return (function (seq13901){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13901));
});})(g__11059__auto___13964))
;


var g__11059__auto___13968 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__11059__auto___13968){
return (function cljs$spec$impl$gen$string(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13969 = arguments.length;
var i__10971__auto___13970 = (0);
while(true){
if((i__10971__auto___13970 < len__10970__auto___13969)){
args__10977__auto__.push((arguments[i__10971__auto___13970]));

var G__13971 = (i__10971__auto___13970 + (1));
i__10971__auto___13970 = G__13971;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11059__auto___13968))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11059__auto___13968){
return (function (args){
return cljs.core.deref.call(null,g__11059__auto___13968);
});})(g__11059__auto___13968))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__11059__auto___13968){
return (function (seq13902){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13902));
});})(g__11059__auto___13968))
;


var g__11059__auto___13972 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__11059__auto___13972){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13973 = arguments.length;
var i__10971__auto___13974 = (0);
while(true){
if((i__10971__auto___13974 < len__10970__auto___13973)){
args__10977__auto__.push((arguments[i__10971__auto___13974]));

var G__13975 = (i__10971__auto___13974 + (1));
i__10971__auto___13974 = G__13975;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11059__auto___13972))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11059__auto___13972){
return (function (args){
return cljs.core.deref.call(null,g__11059__auto___13972);
});})(g__11059__auto___13972))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__11059__auto___13972){
return (function (seq13903){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13903));
});})(g__11059__auto___13972))
;


var g__11059__auto___13976 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__11059__auto___13976){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13977 = arguments.length;
var i__10971__auto___13978 = (0);
while(true){
if((i__10971__auto___13978 < len__10970__auto___13977)){
args__10977__auto__.push((arguments[i__10971__auto___13978]));

var G__13979 = (i__10971__auto___13978 + (1));
i__10971__auto___13978 = G__13979;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11059__auto___13976))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11059__auto___13976){
return (function (args){
return cljs.core.deref.call(null,g__11059__auto___13976);
});})(g__11059__auto___13976))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__11059__auto___13976){
return (function (seq13904){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13904));
});})(g__11059__auto___13976))
;


var g__11059__auto___13980 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__11059__auto___13980){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13981 = arguments.length;
var i__10971__auto___13982 = (0);
while(true){
if((i__10971__auto___13982 < len__10970__auto___13981)){
args__10977__auto__.push((arguments[i__10971__auto___13982]));

var G__13983 = (i__10971__auto___13982 + (1));
i__10971__auto___13982 = G__13983;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11059__auto___13980))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11059__auto___13980){
return (function (args){
return cljs.core.deref.call(null,g__11059__auto___13980);
});})(g__11059__auto___13980))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__11059__auto___13980){
return (function (seq13905){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13905));
});})(g__11059__auto___13980))
;


var g__11059__auto___13984 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__11059__auto___13984){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13985 = arguments.length;
var i__10971__auto___13986 = (0);
while(true){
if((i__10971__auto___13986 < len__10970__auto___13985)){
args__10977__auto__.push((arguments[i__10971__auto___13986]));

var G__13987 = (i__10971__auto___13986 + (1));
i__10971__auto___13986 = G__13987;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11059__auto___13984))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11059__auto___13984){
return (function (args){
return cljs.core.deref.call(null,g__11059__auto___13984);
});})(g__11059__auto___13984))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__11059__auto___13984){
return (function (seq13906){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13906));
});})(g__11059__auto___13984))
;


var g__11059__auto___13988 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__11059__auto___13988){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13989 = arguments.length;
var i__10971__auto___13990 = (0);
while(true){
if((i__10971__auto___13990 < len__10970__auto___13989)){
args__10977__auto__.push((arguments[i__10971__auto___13990]));

var G__13991 = (i__10971__auto___13990 + (1));
i__10971__auto___13990 = G__13991;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});})(g__11059__auto___13988))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11059__auto___13988){
return (function (args){
return cljs.core.deref.call(null,g__11059__auto___13988);
});})(g__11059__auto___13988))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__11059__auto___13988){
return (function (seq13907){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13907));
});})(g__11059__auto___13988))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__10977__auto__ = [];
var len__10970__auto___13994 = arguments.length;
var i__10971__auto___13995 = (0);
while(true){
if((i__10971__auto___13995 < len__10970__auto___13994)){
args__10977__auto__.push((arguments[i__10971__auto___13995]));

var G__13996 = (i__10971__auto___13995 + (1));
i__10971__auto___13995 = G__13996;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((0) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__10978__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__13992_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__13992_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq13993){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13993));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__13997_SHARP_){
return (new Date(p1__13997_SHARP_));
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