// Compiled by ClojureScript 1.9.521 {}
goog.provide('cljs.spec');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('cljs.spec.impl.gen');
goog.require('clojure.string');
cljs.spec.MAX_INT = (9007199254740991);
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_check_limit_STAR_ = (101);
/**
 * The number of errors reported by explain in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_error_limit_STAR_ = (20);

/**
 * @interface
 */
cljs.spec.Spec = function(){};

cljs.spec.conform_STAR_ = (function cljs$spec$conform_STAR_(spec,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$conform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__12538__auto__ = (((spec == null))?null:spec);
var m__12539__auto__ = (cljs.spec.conform_STAR_[goog.typeOf(x__12538__auto__)]);
if(!((m__12539__auto__ == null))){
return m__12539__auto__.call(null,spec,x);
} else {
var m__12539__auto____$1 = (cljs.spec.conform_STAR_["_"]);
if(!((m__12539__auto____$1 == null))){
return m__12539__auto____$1.call(null,spec,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.conform*",spec);
}
}
}
});

cljs.spec.unform_STAR_ = (function cljs$spec$unform_STAR_(spec,y){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$unform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$unform_STAR_$arity$2(spec,y);
} else {
var x__12538__auto__ = (((spec == null))?null:spec);
var m__12539__auto__ = (cljs.spec.unform_STAR_[goog.typeOf(x__12538__auto__)]);
if(!((m__12539__auto__ == null))){
return m__12539__auto__.call(null,spec,y);
} else {
var m__12539__auto____$1 = (cljs.spec.unform_STAR_["_"]);
if(!((m__12539__auto____$1 == null))){
return m__12539__auto____$1.call(null,spec,y);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.unform*",spec);
}
}
}
});

cljs.spec.explain_STAR_ = (function cljs$spec$explain_STAR_(spec,path,via,in$,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$explain_STAR_$arity$5 == null)))){
return spec.cljs$spec$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__12538__auto__ = (((spec == null))?null:spec);
var m__12539__auto__ = (cljs.spec.explain_STAR_[goog.typeOf(x__12538__auto__)]);
if(!((m__12539__auto__ == null))){
return m__12539__auto__.call(null,spec,path,via,in$,x);
} else {
var m__12539__auto____$1 = (cljs.spec.explain_STAR_["_"]);
if(!((m__12539__auto____$1 == null))){
return m__12539__auto____$1.call(null,spec,path,via,in$,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.explain*",spec);
}
}
}
});

cljs.spec.gen_STAR_ = (function cljs$spec$gen_STAR_(spec,overrides,path,rmap){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$gen_STAR_$arity$4 == null)))){
return spec.cljs$spec$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__12538__auto__ = (((spec == null))?null:spec);
var m__12539__auto__ = (cljs.spec.gen_STAR_[goog.typeOf(x__12538__auto__)]);
if(!((m__12539__auto__ == null))){
return m__12539__auto__.call(null,spec,overrides,path,rmap);
} else {
var m__12539__auto____$1 = (cljs.spec.gen_STAR_["_"]);
if(!((m__12539__auto____$1 == null))){
return m__12539__auto____$1.call(null,spec,overrides,path,rmap);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.gen*",spec);
}
}
}
});

cljs.spec.with_gen_STAR_ = (function cljs$spec$with_gen_STAR_(spec,gfn){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$with_gen_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__12538__auto__ = (((spec == null))?null:spec);
var m__12539__auto__ = (cljs.spec.with_gen_STAR_[goog.typeOf(x__12538__auto__)]);
if(!((m__12539__auto__ == null))){
return m__12539__auto__.call(null,spec,gfn);
} else {
var m__12539__auto____$1 = (cljs.spec.with_gen_STAR_["_"]);
if(!((m__12539__auto____$1 == null))){
return m__12539__auto____$1.call(null,spec,gfn);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.with-gen*",spec);
}
}
}
});

cljs.spec.describe_STAR_ = (function cljs$spec$describe_STAR_(spec){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$describe_STAR_$arity$1 == null)))){
return spec.cljs$spec$Spec$describe_STAR_$arity$1(spec);
} else {
var x__12538__auto__ = (((spec == null))?null:spec);
var m__12539__auto__ = (cljs.spec.describe_STAR_[goog.typeOf(x__12538__auto__)]);
if(!((m__12539__auto__ == null))){
return m__12539__auto__.call(null,spec);
} else {
var m__12539__auto____$1 = (cljs.spec.describe_STAR_["_"]);
if(!((m__12539__auto____$1 == null))){
return m__12539__auto____$1.call(null,spec);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.describe*",spec);
}
}
}
});

if(typeof cljs.spec.registry_ref !== 'undefined'){
} else {
cljs.spec.registry_ref = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.deep_resolve = (function cljs$spec$deep_resolve(reg,k){
var spec = k;
while(true){
if(cljs.core.ident_QMARK_.call(null,spec)){
var G__15462 = cljs.core.get.call(null,reg,spec);
spec = G__15462;
continue;
} else {
return spec;
}
break;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not ident
 */
cljs.spec.reg_resolve = (function cljs$spec$reg_resolve(k){
if(cljs.core.ident_QMARK_.call(null,k)){
var reg = cljs.core.deref.call(null,cljs.spec.registry_ref);
var spec = cljs.core.get.call(null,reg,k);
if(!(cljs.core.ident_QMARK_.call(null,spec))){
return spec;
} else {
return cljs.spec.deep_resolve.call(null,reg,spec);
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.reg_resolve_BANG_ = (function cljs$spec$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_.call(null,k)){
var or__11820__auto__ = cljs.spec.reg_resolve.call(null,k);
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to resolve spec: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.spec_QMARK_ = (function cljs$spec$spec_QMARK_(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$spec$Spec$)))?true:false):false)){
return x;
} else {
return null;
}
});
/**
 * returns x if x is a (clojure.spec) regex op, else logical false
 */
cljs.spec.regex_QMARK_ = (function cljs$spec$regex_QMARK_(x){
var and__11808__auto__ = new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__11808__auto__)){
return x;
} else {
return and__11808__auto__;
}
});
cljs.spec.with_name = (function cljs$spec$with_name(spec,name){
if(cljs.core.ident_QMARK_.call(null,spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,spec))){
return cljs.core.assoc.call(null,spec,new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006),name);
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$)))?true:false):false)){
return cljs.core.with_meta.call(null,spec,cljs.core.assoc.call(null,cljs.core.meta.call(null,spec),new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006),name));
} else {
return null;
}
}
}
});
cljs.spec.spec_name = (function cljs$spec$spec_name(spec){
if(cljs.core.ident_QMARK_.call(null,spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,spec))){
return new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006).cljs$core$IFn$_invoke$arity$1(spec);
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$)))?true:false):false)){
return new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,spec));
} else {
return null;
}
}
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.maybe_spec = (function cljs$spec$maybe_spec(spec_or_k){
var s = (function (){var or__11820__auto__ = (function (){var and__11808__auto__ = cljs.core.ident_QMARK_.call(null,spec_or_k);
if(and__11808__auto__){
return cljs.spec.reg_resolve.call(null,spec_or_k);
} else {
return and__11808__auto__;
}
})();
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
var or__11820__auto____$1 = cljs.spec.spec_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__11820__auto____$1)){
return or__11820__auto____$1;
} else {
var or__11820__auto____$2 = cljs.spec.regex_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__11820__auto____$2)){
return or__11820__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,s))){
return cljs.spec.with_name.call(null,cljs.spec.regex_spec_impl.call(null,s,null),cljs.spec.spec_name.call(null,s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.the_spec = (function cljs$spec$the_spec(spec_or_k){
var or__11820__auto__ = cljs.spec.maybe_spec.call(null,spec_or_k);
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
if(cljs.core.ident_QMARK_.call(null,spec_or_k)){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to resolve spec: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_or_k)].join('')));
} else {
return null;
}
}
});

/**
 * @interface
 */
cljs.spec.Specize = function(){};

cljs.spec.specize_STAR_ = (function cljs$spec$specize_STAR_(var_args){
var args15469 = [];
var len__13041__auto___15472 = arguments.length;
var i__13042__auto___15473 = (0);
while(true){
if((i__13042__auto___15473 < len__13041__auto___15472)){
args15469.push((arguments[i__13042__auto___15473]));

var G__15474 = (i__13042__auto___15473 + (1));
i__13042__auto___15473 = G__15474;
continue;
} else {
}
break;
}

var G__15471 = args15469.length;
switch (G__15471) {
case 1:
return cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15469.length)].join('')));

}
});

cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.cljs$spec$Specize$specize_STAR_$arity$1 == null)))){
return _.cljs$spec$Specize$specize_STAR_$arity$1(_);
} else {
var x__12538__auto__ = (((_ == null))?null:_);
var m__12539__auto__ = (cljs.spec.specize_STAR_[goog.typeOf(x__12538__auto__)]);
if(!((m__12539__auto__ == null))){
return m__12539__auto__.call(null,_);
} else {
var m__12539__auto____$1 = (cljs.spec.specize_STAR_["_"]);
if(!((m__12539__auto____$1 == null))){
return m__12539__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Specize.specize*",_);
}
}
}
});

cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_,form){
if((!((_ == null))) && (!((_.cljs$spec$Specize$specize_STAR_$arity$2 == null)))){
return _.cljs$spec$Specize$specize_STAR_$arity$2(_,form);
} else {
var x__12538__auto__ = (((_ == null))?null:_);
var m__12539__auto__ = (cljs.spec.specize_STAR_[goog.typeOf(x__12538__auto__)]);
if(!((m__12539__auto__ == null))){
return m__12539__auto__.call(null,_,form);
} else {
var m__12539__auto____$1 = (cljs.spec.specize_STAR_["_"]);
if(!((m__12539__auto____$1 == null))){
return m__12539__auto____$1.call(null,_,form);
} else {
throw cljs.core.missing_protocol.call(null,"Specize.specize*",_);
}
}
}
});

cljs.spec.specize_STAR_.cljs$lang$maxFixedArity = 2;


cljs.core.Keyword.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (k){
var k__$1 = this;
return cljs.spec.specize_STAR_.call(null,cljs.spec.reg_resolve_BANG_.call(null,k__$1));
});

cljs.core.Keyword.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (k,_){
var k__$1 = this;
return cljs.spec.specize_STAR_.call(null,cljs.spec.reg_resolve_BANG_.call(null,k__$1));
});

cljs.core.Symbol.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Symbol.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.specize_STAR_.call(null,cljs.spec.reg_resolve_BANG_.call(null,s__$1));
});

cljs.core.Symbol.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (s,_){
var s__$1 = this;
return cljs.spec.specize_STAR_.call(null,cljs.spec.reg_resolve_BANG_.call(null,s__$1));
});

(cljs.spec.Specize["_"] = true);

(cljs.spec.specize_STAR_["_"] = (function() {
var G__15476 = null;
var G__15476__1 = (function (o){
return cljs.spec.spec_impl.call(null,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582),o,null,null);
});
var G__15476__2 = (function (o,form){
return cljs.spec.spec_impl.call(null,form,o,null,null);
});
G__15476 = function(o,form){
switch(arguments.length){
case 1:
return G__15476__1.call(this,o);
case 2:
return G__15476__2.call(this,o,form);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__15476.cljs$core$IFn$_invoke$arity$1 = G__15476__1;
G__15476.cljs$core$IFn$_invoke$arity$2 = G__15476__2;
return G__15476;
})()
);
cljs.spec.specize = (function cljs$spec$specize(var_args){
var args15477 = [];
var len__13041__auto___15480 = arguments.length;
var i__13042__auto___15481 = (0);
while(true){
if((i__13042__auto___15481 < len__13041__auto___15480)){
args15477.push((arguments[i__13042__auto___15481]));

var G__15482 = (i__13042__auto___15481 + (1));
i__13042__auto___15481 = G__15482;
continue;
} else {
}
break;
}

var G__15479 = args15477.length;
switch (G__15479) {
case 1:
return cljs.spec.specize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.specize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15477.length)].join('')));

}
});

cljs.spec.specize.cljs$core$IFn$_invoke$arity$1 = (function (s){
var or__11820__auto__ = cljs.spec.spec_QMARK_.call(null,s);
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
return cljs.spec.specize_STAR_.call(null,s);
}
});

cljs.spec.specize.cljs$core$IFn$_invoke$arity$2 = (function (s,form){
var or__11820__auto__ = cljs.spec.spec_QMARK_.call(null,s);
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
return cljs.spec.specize_STAR_.call(null,s,form);
}
});

cljs.spec.specize.cljs$lang$maxFixedArity = 2;

/**
 * tests the validity of a conform return value
 */
cljs.spec.invalid_QMARK_ = (function cljs$spec$invalid_QMARK_(ret){
return cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret);
});
/**
 * Given a spec and a value, returns :clojure.spec/invalid if value does not match spec,
 *   else the (possibly destructured) value.
 */
cljs.spec.conform = (function cljs$spec$conform(spec,x){
return cljs.spec.conform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.unform = (function cljs$spec$unform(spec,x){
return cljs.spec.unform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.form = (function cljs$spec$form(spec){
return cljs.spec.describe_STAR_.call(null,cljs.spec.specize.call(null,spec));
});
cljs.spec.abbrev = (function cljs$spec$abbrev(form){
if(cljs.core.seq_QMARK_.call(null,form)){
return clojure.walk.postwalk.call(null,(function (form__$1){
if(cljs.core.truth_((function (){var and__11808__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__11808__auto__){
return cljs.core.namespace.call(null,form__$1);
} else {
return and__11808__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form__$1));
} else {
if((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.first.call(null,form__$1))) && (cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.second.call(null,form__$1)))){
return cljs.core.last.call(null,form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__11808__auto__ = (form instanceof cljs.core.Symbol);
if(and__11808__auto__){
return cljs.core.namespace.call(null,form);
} else {
return and__11808__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.describe = (function cljs$spec$describe(spec){
return cljs.spec.abbrev.call(null,cljs.spec.form.call(null,spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.with_gen = (function cljs$spec$with_gen(spec,gen_fn){
var spec__$1 = cljs.spec.reg_resolve.call(null,spec);
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,spec__$1))){
return cljs.core.assoc.call(null,spec__$1,new cljs.core.Keyword("cljs.spec","gfn","cljs.spec/gfn",-432034727),gen_fn);
} else {
return cljs.spec.with_gen_STAR_.call(null,cljs.spec.specize.call(null,spec__$1),gen_fn);
}
});
cljs.spec.explain_data_STAR_ = (function cljs$spec$explain_data_STAR_(spec,path,via,in$,x){
var temp__6503__auto__ = cljs.spec.explain_STAR_.call(null,cljs.spec.specize.call(null,spec),path,via,in$,x);
if(cljs.core.truth_(temp__6503__auto__)){
var probs = temp__6503__auto__;
if(cljs.core.empty_QMARK_.call(null,probs)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),probs], null);
}
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a collection of problem-maps, where problem-map has at least :path :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.explain_data = (function cljs$spec$explain_data(spec,x){
return cljs.spec.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__6501__auto__ = cljs.spec.spec_name.call(null,spec);
if(cljs.core.truth_(temp__6501__auto__)){
var name = temp__6501__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * Default printer for explain-data. nil indicates a successful validation.
 */
cljs.spec.explain_printer = (function cljs$spec$explain_printer(ed){
if(cljs.core.truth_(ed)){
return cljs.core.print.call(null,(function (){var sb__12912__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_15524_15564 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_15525_15565 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_15524_15564,_STAR_print_fn_STAR_15525_15565,sb__12912__auto__){
return (function (x__12913__auto__){
return sb__12912__auto__.append(x__12913__auto__);
});})(_STAR_print_newline_STAR_15524_15564,_STAR_print_fn_STAR_15525_15565,sb__12912__auto__))
;

try{var seq__15526_15566 = cljs.core.seq.call(null,new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678).cljs$core$IFn$_invoke$arity$1(ed));
var chunk__15527_15567 = null;
var count__15528_15568 = (0);
var i__15529_15569 = (0);
while(true){
if((i__15529_15569 < count__15528_15568)){
var map__15530_15570 = cljs.core._nth.call(null,chunk__15527_15567,i__15529_15569);
var map__15530_15571__$1 = ((((!((map__15530_15570 == null)))?((((map__15530_15570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15530_15570.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15530_15570):map__15530_15570);
var prob_15572 = map__15530_15571__$1;
var path_15573 = cljs.core.get.call(null,map__15530_15571__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_15574 = cljs.core.get.call(null,map__15530_15571__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_15575 = cljs.core.get.call(null,map__15530_15571__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_15576 = cljs.core.get.call(null,map__15530_15571__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_15577 = cljs.core.get.call(null,map__15530_15571__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_15578 = cljs.core.get.call(null,map__15530_15571__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_15578)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_15578),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_15575);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_15577)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_15577)));
}

if(cljs.core.empty_QMARK_.call(null,path_15573)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_15573));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,cljs.spec.abbrev.call(null,pred_15574));

if(cljs.core.truth_(reason_15576)){
cljs.core.print.call(null,", ",reason_15576);
} else {
}

var seq__15532_15579 = cljs.core.seq.call(null,prob_15572);
var chunk__15533_15580 = null;
var count__15534_15581 = (0);
var i__15535_15582 = (0);
while(true){
if((i__15535_15582 < count__15534_15581)){
var vec__15536_15583 = cljs.core._nth.call(null,chunk__15533_15580,i__15535_15582);
var k_15584 = cljs.core.nth.call(null,vec__15536_15583,(0),null);
var v_15585 = cljs.core.nth.call(null,vec__15536_15583,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_15584))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_15584)," ");

cljs.core.pr.call(null,v_15585);
}

var G__15586 = seq__15532_15579;
var G__15587 = chunk__15533_15580;
var G__15588 = count__15534_15581;
var G__15589 = (i__15535_15582 + (1));
seq__15532_15579 = G__15586;
chunk__15533_15580 = G__15587;
count__15534_15581 = G__15588;
i__15535_15582 = G__15589;
continue;
} else {
var temp__6503__auto___15590 = cljs.core.seq.call(null,seq__15532_15579);
if(temp__6503__auto___15590){
var seq__15532_15591__$1 = temp__6503__auto___15590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15532_15591__$1)){
var c__12731__auto___15592 = cljs.core.chunk_first.call(null,seq__15532_15591__$1);
var G__15593 = cljs.core.chunk_rest.call(null,seq__15532_15591__$1);
var G__15594 = c__12731__auto___15592;
var G__15595 = cljs.core.count.call(null,c__12731__auto___15592);
var G__15596 = (0);
seq__15532_15579 = G__15593;
chunk__15533_15580 = G__15594;
count__15534_15581 = G__15595;
i__15535_15582 = G__15596;
continue;
} else {
var vec__15539_15597 = cljs.core.first.call(null,seq__15532_15591__$1);
var k_15598 = cljs.core.nth.call(null,vec__15539_15597,(0),null);
var v_15599 = cljs.core.nth.call(null,vec__15539_15597,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_15598))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_15598)," ");

cljs.core.pr.call(null,v_15599);
}

var G__15600 = cljs.core.next.call(null,seq__15532_15591__$1);
var G__15601 = null;
var G__15602 = (0);
var G__15603 = (0);
seq__15532_15579 = G__15600;
chunk__15533_15580 = G__15601;
count__15534_15581 = G__15602;
i__15535_15582 = G__15603;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__15604 = seq__15526_15566;
var G__15605 = chunk__15527_15567;
var G__15606 = count__15528_15568;
var G__15607 = (i__15529_15569 + (1));
seq__15526_15566 = G__15604;
chunk__15527_15567 = G__15605;
count__15528_15568 = G__15606;
i__15529_15569 = G__15607;
continue;
} else {
var temp__6503__auto___15608 = cljs.core.seq.call(null,seq__15526_15566);
if(temp__6503__auto___15608){
var seq__15526_15609__$1 = temp__6503__auto___15608;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15526_15609__$1)){
var c__12731__auto___15610 = cljs.core.chunk_first.call(null,seq__15526_15609__$1);
var G__15611 = cljs.core.chunk_rest.call(null,seq__15526_15609__$1);
var G__15612 = c__12731__auto___15610;
var G__15613 = cljs.core.count.call(null,c__12731__auto___15610);
var G__15614 = (0);
seq__15526_15566 = G__15611;
chunk__15527_15567 = G__15612;
count__15528_15568 = G__15613;
i__15529_15569 = G__15614;
continue;
} else {
var map__15542_15615 = cljs.core.first.call(null,seq__15526_15609__$1);
var map__15542_15616__$1 = ((((!((map__15542_15615 == null)))?((((map__15542_15615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15542_15615.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15542_15615):map__15542_15615);
var prob_15617 = map__15542_15616__$1;
var path_15618 = cljs.core.get.call(null,map__15542_15616__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_15619 = cljs.core.get.call(null,map__15542_15616__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_15620 = cljs.core.get.call(null,map__15542_15616__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_15621 = cljs.core.get.call(null,map__15542_15616__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_15622 = cljs.core.get.call(null,map__15542_15616__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_15623 = cljs.core.get.call(null,map__15542_15616__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_15623)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_15623),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_15620);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_15622)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_15622)));
}

if(cljs.core.empty_QMARK_.call(null,path_15618)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_15618));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,cljs.spec.abbrev.call(null,pred_15619));

if(cljs.core.truth_(reason_15621)){
cljs.core.print.call(null,", ",reason_15621);
} else {
}

var seq__15544_15624 = cljs.core.seq.call(null,prob_15617);
var chunk__15545_15625 = null;
var count__15546_15626 = (0);
var i__15547_15627 = (0);
while(true){
if((i__15547_15627 < count__15546_15626)){
var vec__15548_15628 = cljs.core._nth.call(null,chunk__15545_15625,i__15547_15627);
var k_15629 = cljs.core.nth.call(null,vec__15548_15628,(0),null);
var v_15630 = cljs.core.nth.call(null,vec__15548_15628,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_15629))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_15629)," ");

cljs.core.pr.call(null,v_15630);
}

var G__15631 = seq__15544_15624;
var G__15632 = chunk__15545_15625;
var G__15633 = count__15546_15626;
var G__15634 = (i__15547_15627 + (1));
seq__15544_15624 = G__15631;
chunk__15545_15625 = G__15632;
count__15546_15626 = G__15633;
i__15547_15627 = G__15634;
continue;
} else {
var temp__6503__auto___15635__$1 = cljs.core.seq.call(null,seq__15544_15624);
if(temp__6503__auto___15635__$1){
var seq__15544_15636__$1 = temp__6503__auto___15635__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15544_15636__$1)){
var c__12731__auto___15637 = cljs.core.chunk_first.call(null,seq__15544_15636__$1);
var G__15638 = cljs.core.chunk_rest.call(null,seq__15544_15636__$1);
var G__15639 = c__12731__auto___15637;
var G__15640 = cljs.core.count.call(null,c__12731__auto___15637);
var G__15641 = (0);
seq__15544_15624 = G__15638;
chunk__15545_15625 = G__15639;
count__15546_15626 = G__15640;
i__15547_15627 = G__15641;
continue;
} else {
var vec__15551_15642 = cljs.core.first.call(null,seq__15544_15636__$1);
var k_15643 = cljs.core.nth.call(null,vec__15551_15642,(0),null);
var v_15644 = cljs.core.nth.call(null,vec__15551_15642,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_15643))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_15643)," ");

cljs.core.pr.call(null,v_15644);
}

var G__15645 = cljs.core.next.call(null,seq__15544_15636__$1);
var G__15646 = null;
var G__15647 = (0);
var G__15648 = (0);
seq__15544_15624 = G__15645;
chunk__15545_15625 = G__15646;
count__15546_15626 = G__15647;
i__15547_15627 = G__15648;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__15649 = cljs.core.next.call(null,seq__15526_15609__$1);
var G__15650 = null;
var G__15651 = (0);
var G__15652 = (0);
seq__15526_15566 = G__15649;
chunk__15527_15567 = G__15650;
count__15528_15568 = G__15651;
i__15529_15569 = G__15652;
continue;
}
} else {
}
}
break;
}

var seq__15554_15653 = cljs.core.seq.call(null,ed);
var chunk__15555_15654 = null;
var count__15556_15655 = (0);
var i__15557_15656 = (0);
while(true){
if((i__15557_15656 < count__15556_15655)){
var vec__15558_15657 = cljs.core._nth.call(null,chunk__15555_15654,i__15557_15656);
var k_15658 = cljs.core.nth.call(null,vec__15558_15657,(0),null);
var v_15659 = cljs.core.nth.call(null,vec__15558_15657,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_15658))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_15658)," ");

cljs.core.pr.call(null,v_15659);

cljs.core.newline.call(null);
}

var G__15660 = seq__15554_15653;
var G__15661 = chunk__15555_15654;
var G__15662 = count__15556_15655;
var G__15663 = (i__15557_15656 + (1));
seq__15554_15653 = G__15660;
chunk__15555_15654 = G__15661;
count__15556_15655 = G__15662;
i__15557_15656 = G__15663;
continue;
} else {
var temp__6503__auto___15664 = cljs.core.seq.call(null,seq__15554_15653);
if(temp__6503__auto___15664){
var seq__15554_15665__$1 = temp__6503__auto___15664;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15554_15665__$1)){
var c__12731__auto___15666 = cljs.core.chunk_first.call(null,seq__15554_15665__$1);
var G__15667 = cljs.core.chunk_rest.call(null,seq__15554_15665__$1);
var G__15668 = c__12731__auto___15666;
var G__15669 = cljs.core.count.call(null,c__12731__auto___15666);
var G__15670 = (0);
seq__15554_15653 = G__15667;
chunk__15555_15654 = G__15668;
count__15556_15655 = G__15669;
i__15557_15656 = G__15670;
continue;
} else {
var vec__15561_15671 = cljs.core.first.call(null,seq__15554_15665__$1);
var k_15672 = cljs.core.nth.call(null,vec__15561_15671,(0),null);
var v_15673 = cljs.core.nth.call(null,vec__15561_15671,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_15672))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_15672)," ");

cljs.core.pr.call(null,v_15673);

cljs.core.newline.call(null);
}

var G__15674 = cljs.core.next.call(null,seq__15554_15665__$1);
var G__15675 = null;
var G__15676 = (0);
var G__15677 = (0);
seq__15554_15653 = G__15674;
chunk__15555_15654 = G__15675;
count__15556_15655 = G__15676;
i__15557_15656 = G__15677;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_15525_15565;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_15524_15564;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__12912__auto__)].join('');
})());
} else {
return cljs.core.println.call(null,"Success!");
}
});
cljs.spec._STAR_explain_out_STAR_ = cljs.spec.explain_printer;
/**
 * Prints explanation data (per 'explain-data') to *out* using the printer in *explain-out*,
 *  by default explain-printer.
 */
cljs.spec.explain_out = (function cljs$spec$explain_out(ed){
return cljs.spec._STAR_explain_out_STAR_.call(null,ed);
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.explain = (function cljs$spec$explain(spec,x){
return cljs.spec.explain_out.call(null,cljs.spec.explain_data.call(null,spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.explain_str = (function cljs$spec$explain_str(spec,x){
var sb__12912__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_15680_15682 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_15681_15683 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_15680_15682,_STAR_print_fn_STAR_15681_15683,sb__12912__auto__){
return (function (x__12913__auto__){
return sb__12912__auto__.append(x__12913__auto__);
});})(_STAR_print_newline_STAR_15680_15682,_STAR_print_fn_STAR_15681_15683,sb__12912__auto__))
;

try{cljs.spec.explain.call(null,spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_15681_15683;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_15680_15682;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__12912__auto__)].join('');
});
cljs.spec.gensub = (function cljs$spec$gensub(spec,overrides,path,rmap,form){
var spec__$1 = cljs.spec.specize.call(null,spec);
var temp__6501__auto__ = (function (){var or__11820__auto__ = (function (){var temp__6503__auto__ = (function (){var or__11820__auto__ = cljs.core.get.call(null,overrides,(function (){var or__11820__auto__ = cljs.spec.spec_name.call(null,spec__$1);
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
return spec__$1;
}
})());
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
return cljs.core.get.call(null,overrides,path);
}
})();
if(cljs.core.truth_(temp__6503__auto__)){
var gfn = temp__6503__auto__;
return gfn.call(null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
return cljs.spec.gen_STAR_.call(null,spec__$1,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__6501__auto__)){
var g = temp__6501__auto__;
return cljs.spec.impl.gen.such_that.call(null,((function (g,temp__6501__auto__,spec__$1){
return (function (p1__15684_SHARP_){
return cljs.spec.valid_QMARK_.call(null,spec__$1,p1__15684_SHARP_);
});})(g,temp__6501__auto__,spec__$1))
,g,(100));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to construct gen at: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" for: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.abbrev.call(null,form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map spec names or paths (vectors of keywords) to no-arg
 *   generator-creating fns. These will be used instead of the generators at those
 *   names/paths. Note that parent generator (in the spec or overrides
 *   map) will supersede those of any subtrees. A generator for a regex
 *   op must always return a sequential collection (i.e. a generator for
 *   s/? should return either an empty sequence/vector or a
 *   sequence/vector with one item in it)
 */
cljs.spec.gen = (function cljs$spec$gen(var_args){
var args15685 = [];
var len__13041__auto___15688 = arguments.length;
var i__13042__auto___15689 = (0);
while(true){
if((i__13042__auto___15689 < len__13041__auto___15688)){
args15685.push((arguments[i__13042__auto___15689]));

var G__15690 = (i__13042__auto___15689 + (1));
i__13042__auto___15689 = G__15690;
continue;
} else {
}
break;
}

var G__15687 = args15685.length;
switch (G__15687) {
case 1:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15685.length)].join('')));

}
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.gen.call(null,spec,null);
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.gensub.call(null,spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086),cljs.spec._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.gen.cljs$lang$maxFixedArity = 2;

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.def_impl = (function cljs$spec$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__11808__auto__ = cljs.core.ident_QMARK_.call(null,k);
if(and__11808__auto__){
return cljs.core.namespace.call(null,k);
} else {
return and__11808__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("k must be namespaced keyword or resolveable symbol"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(c/and (ident? k) (namespace k))")].join('')));
}

var spec__$1 = (cljs.core.truth_((function (){var or__11820__auto__ = cljs.spec.spec_QMARK_.call(null,spec);
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
var or__11820__auto____$1 = cljs.spec.regex_QMARK_.call(null,spec);
if(cljs.core.truth_(or__11820__auto____$1)){
return or__11820__auto____$1;
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.registry_ref),spec);
}
}
})())?spec:cljs.spec.spec_impl.call(null,form,spec,null,null));
cljs.core.swap_BANG_.call(null,cljs.spec.registry_ref,cljs.core.assoc,k,cljs.spec.with_name.call(null,spec__$1,k));

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.registry = (function cljs$spec$registry(){
return cljs.core.deref.call(null,cljs.spec.registry_ref);
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.__GT_sym = (function cljs$spec$__GT_sym(x){
if(cljs.core.var_QMARK_.call(null,x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.get_spec = (function cljs$spec$get_spec(k){
return cljs.core.get.call(null,cljs.spec.registry.call(null),(((k instanceof cljs.core.Keyword))?k:cljs.spec.__GT_sym.call(null,k)));
});
cljs.spec.macroexpand_check = (function cljs$spec$macroexpand_check(v,args){
var specs = cljs.spec.get_spec.call(null,v);
var temp__6503__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__6503__auto__)){
var arg_spec = temp__6503__auto__;
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,cljs.spec.conform.call(null,arg_spec,args)))){
var ed = cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,arg_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576)], null),(function (){var temp__6501__auto__ = cljs.spec.spec_name.call(null,arg_spec);
if(cljs.core.truth_(temp__6501__auto__)){
var name = temp__6501__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),new cljs.core.Keyword("cljs.spec","args","cljs.spec/args",-367019609),args);
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Call to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.__GT_sym.call(null,v)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" did not conform to spec:\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__12912__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_15694_15696 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_15695_15697 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_15694_15696,_STAR_print_fn_STAR_15695_15697,sb__12912__auto__,ed,arg_spec,temp__6503__auto__,specs){
return (function (x__12913__auto__){
return sb__12912__auto__.append(x__12913__auto__);
});})(_STAR_print_newline_STAR_15694_15696,_STAR_print_fn_STAR_15695_15697,sb__12912__auto__,ed,arg_spec,temp__6503__auto__,specs))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_15695_15697;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_15694_15696;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__12912__auto__)].join('');
})())].join('')));
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.recur_limit_QMARK_ = (function cljs$spec$recur_limit_QMARK_(rmap,id,path,k){
return ((cljs.core.get.call(null,rmap,id) > new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086).cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,path),k));
});
cljs.spec.inck = (function cljs$spec$inck(m,k){
return cljs.core.assoc.call(null,m,k,((function (){var or__11820__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.dt = (function cljs$spec$dt(var_args){
var args15698 = [];
var len__13041__auto___15701 = arguments.length;
var i__13042__auto___15702 = (0);
while(true){
if((i__13042__auto___15702 < len__13041__auto___15701)){
args15698.push((arguments[i__13042__auto___15702]));

var G__15703 = (i__13042__auto___15702 + (1));
i__13042__auto___15702 = G__15703;
continue;
} else {
}
break;
}

var G__15700 = args15698.length;
switch (G__15700) {
case 3:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15698.length)].join('')));

}
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.dt.call(null,pred,x,form,null);
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__6501__auto__ = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(temp__6501__auto__)){
var spec = temp__6501__auto__;
return cljs.spec.conform.call(null,spec,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return pred.call(null,x);
} else {
if(cljs.core.truth_(pred.call(null,x))){
return x;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,form)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is not a fn, expected predicate fn")].join('')));
}
}
} else {
return x;
}
});

cljs.spec.dt.cljs$lang$maxFixedArity = 4;

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.valid_QMARK_ = (function cljs$spec$valid_QMARK_(var_args){
var args15705 = [];
var len__13041__auto___15708 = arguments.length;
var i__13042__auto___15709 = (0);
while(true){
if((i__13042__auto___15709 < len__13041__auto___15708)){
args15705.push((arguments[i__13042__auto___15709]));

var G__15710 = (i__13042__auto___15709 + (1));
i__13042__auto___15709 = G__15710;
continue;
} else {
}
break;
}

var G__15707 = args15705.length;
switch (G__15707) {
case 2:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15705.length)].join('')));

}
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
var spec__$1 = cljs.spec.specize.call(null,spec);
return cljs.core.not.call(null,cljs.spec.invalid_QMARK_.call(null,cljs.spec.conform_STAR_.call(null,spec__$1,x)));
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
var spec__$1 = cljs.spec.specize.call(null,spec,form);
return cljs.core.not.call(null,cljs.spec.invalid_QMARK_.call(null,cljs.spec.conform_STAR_.call(null,spec__$1,x)));
});

cljs.spec.valid_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * internal helper function that returns true when x is valid for spec.
 */
cljs.spec.pvalid_QMARK_ = (function cljs$spec$pvalid_QMARK_(var_args){
var args15712 = [];
var len__13041__auto___15715 = arguments.length;
var i__13042__auto___15716 = (0);
while(true){
if((i__13042__auto___15716 < len__13041__auto___15715)){
args15712.push((arguments[i__13042__auto___15716]));

var G__15717 = (i__13042__auto___15716 + (1));
i__13042__auto___15716 = G__15717;
continue;
} else {
}
break;
}

var G__15714 = args15712.length;
switch (G__15714) {
case 2:
return cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15712.length)].join('')));

}
});

cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return cljs.core.not.call(null,cljs.spec.invalid_QMARK_.call(null,cljs.spec.dt.call(null,pred,x,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582))));
});

cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.core.not.call(null,cljs.spec.invalid_QMARK_.call(null,cljs.spec.dt.call(null,pred,x,form)));
});

cljs.spec.pvalid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.explain_1 = (function cljs$spec$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.maybe_spec.call(null,pred);
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred__$1))){
return cljs.spec.explain_STAR_.call(null,pred__$1,path,(function (){var temp__6501__auto__ = cljs.spec.spec_name.call(null,pred__$1);
if(cljs.core.truth_(temp__6501__auto__)){
var name = temp__6501__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})(),in$,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form),new cljs.core.Keyword(null,"val","val",128701612),v,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.map_spec_impl = (function cljs$spec$map_spec_impl(p__15722){
var map__15762 = p__15722;
var map__15762__$1 = ((((!((map__15762 == null)))?((((map__15762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15762.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15762):map__15762);
var argm = map__15762__$1;
var opt = cljs.core.get.call(null,map__15762__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.call(null,map__15762__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.call(null,map__15762__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var gfn = cljs.core.get.call(null,map__15762__$1,new cljs.core.Keyword(null,"gfn","gfn",791517474));
var pred_exprs = cljs.core.get.call(null,map__15762__$1,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395));
var keys_pred = cljs.core.get.call(null,map__15762__$1,new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739));
var opt_keys = cljs.core.get.call(null,map__15762__$1,new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261));
var req_specs = cljs.core.get.call(null,map__15762__$1,new cljs.core.Keyword(null,"req-specs","req-specs",553962313));
var req = cljs.core.get.call(null,map__15762__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_keys = cljs.core.get.call(null,map__15762__$1,new cljs.core.Keyword(null,"req-keys","req-keys",514319221));
var opt_specs = cljs.core.get.call(null,map__15762__$1,new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450));
var pred_forms = cljs.core.get.call(null,map__15762__$1,new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832));
var k__GT_s = cljs.core.zipmap.call(null,cljs.core.concat.call(null,req_keys,opt_keys),cljs.core.concat.call(null,req_specs,opt_specs));
var keys__GT_specnames = ((function (k__GT_s,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__15719_SHARP_){
var or__11820__auto__ = k__GT_s.call(null,p1__15719_SHARP_);
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
return p1__15719_SHARP_;
}
});})(k__GT_s,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid.call(null);
if(typeof cljs.spec.t_cljs$spec15764 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec15764 = (function (map__15762,keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,req,id,p__15722,req_keys,opt_specs,k__GT_s,pred_forms,meta15765){
this.map__15762 = map__15762;
this.keys__GT_specnames = keys__GT_specnames;
this.opt = opt;
this.req_un = req_un;
this.opt_un = opt_un;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.req_specs = req_specs;
this.req = req;
this.id = id;
this.p__15722 = p__15722;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta15765 = meta15765;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec15764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_15766,meta15765__$1){
var self__ = this;
var _15766__$1 = this;
return (new cljs.spec.t_cljs$spec15764(self__.map__15762,self__.keys__GT_specnames,self__.opt,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.req_specs,self__.req,self__.id,self__.p__15722,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta15765__$1));
});})(k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec15764.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_15766){
var self__ = this;
var _15766__$1 = this;
return self__.meta15765;
});})(k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec15764.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec15764.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec15764.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec15764.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec15764.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys_pred.call(null,m))){
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__15773 = m;
var vec__15774 = G__15773;
var seq__15775 = cljs.core.seq.call(null,vec__15774);
var first__15776 = cljs.core.first.call(null,seq__15775);
var seq__15775__$1 = cljs.core.next.call(null,seq__15775);
var vec__15777 = first__15776;
var k = cljs.core.nth.call(null,vec__15777,(0),null);
var v = cljs.core.nth.call(null,vec__15777,(1),null);
var ks = seq__15775__$1;
var keys = vec__15774;
var ret__$1 = ret;
var G__15773__$1 = G__15773;
while(true){
var ret__$2 = ret__$1;
var vec__15780 = G__15773__$1;
var seq__15781 = cljs.core.seq.call(null,vec__15780);
var first__15782 = cljs.core.first.call(null,seq__15781);
var seq__15781__$1 = cljs.core.next.call(null,seq__15781);
var vec__15783 = first__15782;
var k__$1 = cljs.core.nth.call(null,vec__15783,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__15783,(1),null);
var ks__$1 = seq__15781__$1;
var keys__$1 = vec__15780;
if(cljs.core.truth_(keys__$1)){
var sname = self__.keys__GT_specnames.call(null,k__$1);
var temp__6501__auto__ = cljs.core.get.call(null,reg,sname);
if(cljs.core.truth_(temp__6501__auto__)){
var s = temp__6501__auto__;
var cv = cljs.spec.conform.call(null,s,v__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,cv))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__15801 = (((cv === v__$1))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,cv));
var G__15802 = ks__$1;
ret__$1 = G__15801;
G__15773__$1 = G__15802;
continue;
}
} else {
var G__15803 = ret__$2;
var G__15804 = ks__$1;
ret__$1 = G__15803;
G__15773__$1 = G__15804;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec15764.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__15789 = cljs.core.keys.call(null,m);
var vec__15790 = G__15789;
var seq__15791 = cljs.core.seq.call(null,vec__15790);
var first__15792 = cljs.core.first.call(null,seq__15791);
var seq__15791__$1 = cljs.core.next.call(null,seq__15791);
var k = first__15792;
var ks = seq__15791__$1;
var keys = vec__15790;
var ret__$1 = ret;
var G__15789__$1 = G__15789;
while(true){
var ret__$2 = ret__$1;
var vec__15793 = G__15789__$1;
var seq__15794 = cljs.core.seq.call(null,vec__15793);
var first__15795 = cljs.core.first.call(null,seq__15794);
var seq__15794__$1 = cljs.core.next.call(null,seq__15794);
var k__$1 = first__15795;
var ks__$1 = seq__15794__$1;
var keys__$1 = vec__15793;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specnames.call(null,k__$1))){
var cv = cljs.core.get.call(null,m,k__$1);
var v = cljs.spec.unform.call(null,self__.keys__GT_specnames.call(null,k__$1),cv);
var G__15805 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,v));
var G__15806 = ks__$1;
ret__$1 = G__15805;
G__15789__$1 = G__15806;
continue;
} else {
var G__15807 = ret__$2;
var G__15808 = ks__$1;
ret__$1 = G__15807;
G__15789__$1 = G__15808;
continue;
}
} else {
return ret__$2;
}
break;
}
});})(k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec15764.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.map_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var reg = cljs.spec.registry.call(null);
return cljs.core.apply.call(null,cljs.core.concat,(function (){var temp__6503__auto__ = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_(pred.call(null,x))){
return null;
} else {
return cljs.spec.abbrev.call(null,form);
}
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__6503__auto__){
var probs = temp__6503__auto__;
return cljs.core.map.call(null,((function (probs,temp__6503__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__15720_SHARP_){
return cljs.core.identity.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),p1__15720_SHARP_,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
});})(probs,temp__6503__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,probs);
} else {
return null;
}
})(),cljs.core.map.call(null,((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__15796){
var vec__15797 = p__15796;
var k = cljs.core.nth.call(null,vec__15797,(0),null);
var v = cljs.core.nth.call(null,vec__15797,(1),null);
if(cljs.core.truth_((function (){var or__11820__auto__ = !(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specnames.call(null,k)));
if(or__11820__auto__){
return or__11820__auto__;
} else {
return cljs.spec.pvalid_QMARK_.call(null,self__.keys__GT_specnames.call(null,k),v,k);
}
})())){
return null;
} else {
return cljs.spec.explain_1.call(null,self__.keys__GT_specnames.call(null,k),self__.keys__GT_specnames.call(null,k),cljs.core.conj.call(null,path,k),via,cljs.core.conj.call(null,in$,k),v);
}
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq.call(null,x)));
}
});})(k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec15764.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
var gen = ((function (rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var req_gens = cljs.core.map.call(null,gen,self__.req_keys,self__.req_specs);
var opt_gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.concat.call(null,req_gens,opt_gens))){
var reqs = cljs.core.zipmap.call(null,self__.req_keys,req_gens);
var opts = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,opt_gens);
return cljs.spec.impl.gen.bind.call(null,cljs.spec.impl.gen.choose.call(null,(0),cljs.core.count.call(null,opts)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__15721_SHARP_){
var args = cljs.core.concat.call(null,cljs.core.seq.call(null,reqs),((cljs.core.seq.call(null,opts))?cljs.core.shuffle.call(null,cljs.core.seq.call(null,opts)):null));
return cljs.core.apply.call(null,cljs.spec.impl.gen.hash_map,cljs.core.apply.call(null,cljs.core.concat,cljs.core.take.call(null,(p1__15721_SHARP_ + cljs.core.count.call(null,reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
);
} else {
return null;
}
}
});})(k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec15764.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.map_spec_impl.call(null,cljs.core.assoc.call(null,self__.argm,new cljs.core.Keyword(null,"gfn","gfn",791517474),gfn__$1));
});})(k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec15764.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),(function (){var G__15800 = cljs.core.PersistentVector.EMPTY;
var G__15800__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.call(null,G__15800,new cljs.core.Keyword(null,"req","req",-326448303),self__.req):G__15800);
var G__15800__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.call(null,G__15800__$1,new cljs.core.Keyword(null,"opt","opt",-794706369),self__.opt):G__15800__$1);
var G__15800__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.call(null,G__15800__$2,new cljs.core.Keyword(null,"req-un","req-un",1074571008),self__.req_un):G__15800__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.call(null,G__15800__$3,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),self__.opt_un);
} else {
return G__15800__$3;
}
})());
});})(k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec15764.getBasis = ((function (k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map__15762","map__15762",-104405727,null),new cljs.core.Symbol(null,"keys->specnames","keys->specnames",1791294693,null),new cljs.core.Symbol(null,"opt","opt",845825158,null),new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"keys-pred","keys-pred",-1795451030,null),new cljs.core.Symbol(null,"argm","argm",-181546357,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"p__15722","p__15722",-1304174212,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"k->s","k->s",-1685112801,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"meta15765","meta15765",-1392703147,null)], null);
});})(k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec15764.cljs$lang$type = true;

cljs.spec.t_cljs$spec15764.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec15764";

cljs.spec.t_cljs$spec15764.cljs$lang$ctorPrWriter = ((function (k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__12477__auto__,writer__12478__auto__,opt__12479__auto__){
return cljs.core._write.call(null,writer__12478__auto__,"cljs.spec/t_cljs$spec15764");
});})(k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.__GT_t_cljs$spec15764 = ((function (k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$map_spec_impl_$___GT_t_cljs$spec15764(map__15762__$2,keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,req__$1,id__$1,p__15722__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta15765){
return (new cljs.spec.t_cljs$spec15764(map__15762__$2,keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,req__$1,id__$1,p__15722__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta15765));
});})(k__GT_s,keys__GT_specnames,id,map__15762,map__15762__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.t_cljs$spec15764(map__15762__$1,keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,req,id,p__15722,req_keys,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.spec_impl = (function cljs$spec$spec_impl(var_args){
var args15809 = [];
var len__13041__auto___15817 = arguments.length;
var i__13042__auto___15818 = (0);
while(true){
if((i__13042__auto___15818 < len__13041__auto___15817)){
args15809.push((arguments[i__13042__auto___15818]));

var G__15819 = (i__13042__auto___15818 + (1));
i__13042__auto___15818 = G__15819;
continue;
} else {
}
break;
}

var G__15811 = args15809.length;
switch (G__15811) {
case 4:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15809.length)].join('')));

}
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.spec_impl.call(null,form,pred,gfn,cpred_QMARK_,null);
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred))){
var G__15812 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__15812,gfn);
} else {
return G__15812;
}
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,pred))){
return cljs.spec.regex_spec_impl.call(null,pred,gfn);
} else {
if(cljs.core.ident_QMARK_.call(null,pred)){
var G__15813 = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__15813,gfn);
} else {
return G__15813;
}
} else {
if(typeof cljs.spec.t_cljs$spec15814 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec15814 = (function (form,pred,gfn,cpred_QMARK_,unc,meta15815){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta15815 = meta15815;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec15814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15816,meta15815__$1){
var self__ = this;
var _15816__$1 = this;
return (new cljs.spec.t_cljs$spec15814(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta15815__$1));
});

cljs.spec.t_cljs$spec15814.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15816){
var self__ = this;
var _15816__$1 = this;
return self__.meta15815;
});

cljs.spec.t_cljs$spec15814.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec15814.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.t_cljs$spec15814.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.t_cljs$spec15814.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec15814.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = self__.pred.call(null,x);
if(cljs.core.truth_(self__.cpred_QMARK_)){
return ret;
} else {
if(cljs.core.truth_(ret)){
return x;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
});

cljs.spec.t_cljs$spec15814.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return self__.unc.call(null,x);
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
});

cljs.spec.t_cljs$spec15814.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,cljs.spec.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,self__.form),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
});

cljs.spec.t_cljs$spec15814.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.gen_for_pred.call(null,self__.pred);
}
});

cljs.spec.t_cljs$spec15814.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.spec_impl.call(null,self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_,self__.unc);
});

cljs.spec.t_cljs$spec15814.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.t_cljs$spec15814.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"cpred?","cpred?",35589515,null),new cljs.core.Symbol(null,"unc","unc",-465250751,null),new cljs.core.Symbol(null,"meta15815","meta15815",-1731649917,null)], null);
});

cljs.spec.t_cljs$spec15814.cljs$lang$type = true;

cljs.spec.t_cljs$spec15814.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec15814";

cljs.spec.t_cljs$spec15814.cljs$lang$ctorPrWriter = (function (this__12477__auto__,writer__12478__auto__,opt__12479__auto__){
return cljs.core._write.call(null,writer__12478__auto__,"cljs.spec/t_cljs$spec15814");
});

cljs.spec.__GT_t_cljs$spec15814 = (function cljs$spec$__GT_t_cljs$spec15814(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta15815){
return (new cljs.spec.t_cljs$spec15814(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta15815));
});

}

return (new cljs.spec.t_cljs$spec15814(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});

cljs.spec.spec_impl.cljs$lang$maxFixedArity = 5;

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.multi_spec_impl = (function cljs$spec$multi_spec_impl(var_args){
var args15826 = [];
var len__13041__auto___15840 = arguments.length;
var i__13042__auto___15841 = (0);
while(true){
if((i__13042__auto___15841 < len__13041__auto___15840)){
args15826.push((arguments[i__13042__auto___15841]));

var G__15842 = (i__13042__auto___15841 + (1));
i__13042__auto___15841 = G__15842;
continue;
} else {
}
break;
}

var G__15828 = args15826.length;
switch (G__15828) {
case 3:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15826.length)].join('')));

}
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.multi_spec_impl.call(null,form,mmvar,retag,null);
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid.call(null);
var predx = ((function (id){
return (function (p1__15821_SHARP_){
var mm = cljs.core.deref.call(null,mmvar);
var and__11808__auto__ = cljs.core._get_method.call(null,mm,cljs.core._dispatch_fn.call(null,mm).call(null,p1__15821_SHARP_));
if(cljs.core.truth_(and__11808__auto__)){
return mm.call(null,p1__15821_SHARP_);
} else {
return and__11808__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__15822_SHARP_){
return cljs.core._dispatch_fn.call(null,cljs.core.deref.call(null,mmvar)).call(null,p1__15822_SHARP_);
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__15823_SHARP_,p2__15824_SHARP_){
return cljs.core.assoc.call(null,p1__15823_SHARP_,retag,p2__15824_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.t_cljs$spec15829 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec15829 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta15830){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta15830 = meta15830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec15829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_15831,meta15830__$1){
var self__ = this;
var _15831__$1 = this;
return (new cljs.spec.t_cljs$spec15829(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta15830__$1));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec15829.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_15831){
var self__ = this;
var _15831__$1 = this;
return self__.meta15830;
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec15829.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec15829.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec15829.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec15829.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec15829.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__6501__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__6501__auto__)){
var pred = temp__6501__auto__;
return cljs.spec.dt.call(null,pred,x,self__.form);
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec15829.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__6501__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__6501__auto__)){
var pred = temp__6501__auto__;
return cljs.spec.unform.call(null,pred,x);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No method of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.form),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" for dispatch value: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.dval.call(null,x))].join('')));
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec15829.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = self__.dval.call(null,x);
var path__$1 = cljs.core.conj.call(null,path,dv);
var temp__6501__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__6501__auto__)){
var pred = temp__6501__auto__;
return cljs.spec.explain_1.call(null,self__.form,pred,path__$1,via,in$,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,self__.form),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"reason","reason",-2070751759),"no method",new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec15829.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__15832){
var vec__15833 = p__15832;
var k = cljs.core.nth.call(null,vec__15833,(0),null);
var f = cljs.core.nth.call(null,vec__15833,(1),null);
var p = f.call(null,null);
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,p,vec__15833,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.impl.gen.fmap.call(null,((function (rmap__$1,p,vec__15833,k,f,___$1,id,predx,dval,tag){
return (function (p1__15825_SHARP_){
return self__.tag.call(null,p1__15825_SHARP_,k);
});})(rmap__$1,p,vec__15833,k,f,___$1,id,predx,dval,tag))
,cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,cljs.core._conj.call(null,(function (){var x__12754__auto__ = self__.form;
return cljs.core._conj.call(null,(function (){var x__12754__auto____$1 = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__12754__auto____$1);
})(),x__12754__auto__);
})(),new cljs.core.Symbol(null,"method","method",1696235119,null))));
});})(rmap__$1,p,vec__15833,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,cljs.core.remove.call(null,((function (gen,___$1,id,predx,dval,tag){
return (function (p__15836){
var vec__15837 = p__15836;
var k = cljs.core.nth.call(null,vec__15837,(0),null);
return cljs.spec.invalid_QMARK_.call(null,k);
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$.call(null,cljs.core.deref.call(null,self__.mmvar)))));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.spec.impl.gen.one_of.call(null,gs);
} else {
return null;
}
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec15829.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.multi_spec_impl.call(null,self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec15829.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","multi-spec","cljs.spec/multi-spec",-2053297814,null)),(function (){var x__12754__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__12754__auto__);
})(),(function (){var x__12754__auto__ = self__.retag;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__12754__auto__);
})())));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec15829.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"mmvar","mmvar",-1714325675,null),new cljs.core.Symbol(null,"retag","retag",528972725,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"predx","predx",2063470948,null),new cljs.core.Symbol(null,"dval","dval",835211877,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta15830","meta15830",-483094600,null)], null);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec15829.cljs$lang$type = true;

cljs.spec.t_cljs$spec15829.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec15829";

cljs.spec.t_cljs$spec15829.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__12477__auto__,writer__12478__auto__,opt__12479__auto__){
return cljs.core._write.call(null,writer__12478__auto__,"cljs.spec/t_cljs$spec15829");
});})(id,predx,dval,tag))
;

cljs.spec.__GT_t_cljs$spec15829 = ((function (id,predx,dval,tag){
return (function cljs$spec$__GT_t_cljs$spec15829(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta15830){
return (new cljs.spec.t_cljs$spec15829(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta15830));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.t_cljs$spec15829(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.tuple_impl = (function cljs$spec$tuple_impl(var_args){
var args15844 = [];
var len__13041__auto___15850 = arguments.length;
var i__13042__auto___15851 = (0);
while(true){
if((i__13042__auto___15851 < len__13041__auto___15850)){
args15844.push((arguments[i__13042__auto___15851]));

var G__15852 = (i__13042__auto___15851 + (1));
i__13042__auto___15851 = G__15852;
continue;
} else {
}
break;
}

var G__15846 = args15844.length;
switch (G__15846) {
case 2:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15844.length)].join('')));

}
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.tuple_impl.call(null,forms,preds,null);
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.call(null,cljs.spec.specize,preds,forms);
}),null));
var cnt = cljs.core.count.call(null,preds);
if(typeof cljs.spec.t_cljs$spec15847 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec15847 = (function (forms,preds,gfn,specs,cnt,meta15848){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cnt = cnt;
this.meta15848 = meta15848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec15847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cnt){
return (function (_15849,meta15848__$1){
var self__ = this;
var _15849__$1 = this;
return (new cljs.spec.t_cljs$spec15847(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cnt,meta15848__$1));
});})(specs,cnt))
;

cljs.spec.t_cljs$spec15847.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cnt){
return (function (_15849){
var self__ = this;
var _15849__$1 = this;
return self__.meta15848;
});})(specs,cnt))
;

cljs.spec.t_cljs$spec15847.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec15847.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (specs,cnt){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

cljs.spec.t_cljs$spec15847.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (specs,cnt){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

cljs.spec.t_cljs$spec15847.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec15847.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var specs__$1 = cljs.core.deref.call(null,self__.specs);
if(!((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),self__.cnt)))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,self__.cnt)){
return ret;
} else {
var v = x.call(null,i);
var cv = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,i),v);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,cv))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__15854 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,cv));
var G__15855 = (i + (1));
ret = G__15854;
i = G__15855;
continue;
}
}
break;
}
}
});})(specs,cnt))
;

cljs.spec.t_cljs$spec15847.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds)))){
} else {
throw (new Error("Assert failed: (c/and (vector? x) (= (count x) (count preds)))"));
}

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var cv = x.call(null,i);
var v = cljs.spec.unform.call(null,self__.preds.call(null,i),cv);
var G__15856 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,v));
var G__15857 = (i + (1));
ret = G__15856;
i = G__15857;
continue;
}
break;
}
});})(specs,cnt))
;

cljs.spec.t_cljs$spec15847.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs,cnt){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__12754__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__12754__auto__);
})(),(function (){var x__12754__auto__ = cljs.core.count.call(null,self__.preds);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__12754__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (___$1,specs,cnt){
return (function (i,form,pred){
var v = x.call(null,i);
if(cljs.core.truth_(cljs.spec.pvalid_QMARK_.call(null,pred,v))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,i),via,cljs.core.conj.call(null,in$,i),v);
}
});})(___$1,specs,cnt))
,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.forms,self__.preds));

}
}
});})(specs,cnt))
;

cljs.spec.t_cljs$spec15847.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs,cnt){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,specs,cnt){
return (function (i,p,f){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,i),rmap,f);
});})(___$1,specs,cnt))
;
var gs = cljs.core.map.call(null,gen,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gs);
} else {
return null;
}
}
});})(specs,cnt))
;

cljs.spec.t_cljs$spec15847.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.tuple_impl.call(null,self__.forms,self__.preds,gfn__$1);
});})(specs,cnt))
;

cljs.spec.t_cljs$spec15847.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs,cnt){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","tuple","cljs.spec/tuple",500419708,null)),self__.forms)));
});})(specs,cnt))
;

cljs.spec.t_cljs$spec15847.getBasis = ((function (specs,cnt){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"meta15848","meta15848",-277438670,null)], null);
});})(specs,cnt))
;

cljs.spec.t_cljs$spec15847.cljs$lang$type = true;

cljs.spec.t_cljs$spec15847.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec15847";

cljs.spec.t_cljs$spec15847.cljs$lang$ctorPrWriter = ((function (specs,cnt){
return (function (this__12477__auto__,writer__12478__auto__,opt__12479__auto__){
return cljs.core._write.call(null,writer__12478__auto__,"cljs.spec/t_cljs$spec15847");
});})(specs,cnt))
;

cljs.spec.__GT_t_cljs$spec15847 = ((function (specs,cnt){
return (function cljs$spec$__GT_t_cljs$spec15847(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta15848){
return (new cljs.spec.t_cljs$spec15847(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta15848));
});})(specs,cnt))
;

}

return (new cljs.spec.t_cljs$spec15847(forms,preds,gfn,specs,cnt,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.tuple_impl.cljs$lang$maxFixedArity = 3;

cljs.spec.tagged_ret = (function cljs$spec$tagged_ret(v){
var x15859 = v;
x15859.cljs$core$IMapEntry$ = cljs.core.PROTOCOL_SENTINEL;

x15859.cljs$core$IMapEntry$_key$arity$1 = ((function (x15859){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(0));
});})(x15859))
;

x15859.cljs$core$IMapEntry$_val$arity$1 = ((function (x15859){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(1));
});})(x15859))
;

return x15859;
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.or_spec_impl = (function cljs$spec$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid.call(null);
var kps = cljs.core.zipmap.call(null,keys,preds);
var specs = (new cljs.core.Delay(((function (id,kps){
return (function (){
return cljs.core.mapv.call(null,cljs.spec.specize,preds,forms);
});})(id,kps))
,null));
var cform = (function (){var G__15868 = cljs.core.count.call(null,preds);
switch (G__15868) {
case (2):
return ((function (G__15868,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret))){
var ret__$1 = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(1)),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret__$1))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,(1)),ret__$1], null));
}
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,(0)),ret], null));
}
});
;})(G__15868,id,kps,specs))

break;
case (3):
return ((function (G__15868,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret))){
var ret__$1 = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(1)),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret__$1))){
var ret__$2 = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(2)),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret__$2))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,(2)),ret__$2], null));
}
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,(1)),ret__$1], null));
}
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,(0)),ret], null));
}
});
;})(G__15868,id,kps,specs))

break;
default:
return ((function (G__15868,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var i = (0);
while(true){
if((i < cljs.core.count.call(null,specs__$1))){
var spec = specs__$1.call(null,i);
var ret = cljs.spec.conform_STAR_.call(null,spec,x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret))){
var G__15877 = (i + (1));
i = G__15877;
continue;
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,i),ret], null));
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
break;
}
});
;})(G__15868,id,kps,specs))

}
})();
if(typeof cljs.spec.t_cljs$spec15869 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec15869 = (function (keys,forms,preds,gfn,id,kps,specs,cform,meta15870){
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.specs = specs;
this.cform = cform;
this.meta15870 = meta15870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec15869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,specs,cform){
return (function (_15871,meta15870__$1){
var self__ = this;
var _15871__$1 = this;
return (new cljs.spec.t_cljs$spec15869(self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.specs,self__.cform,meta15870__$1));
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec15869.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,specs,cform){
return (function (_15871){
var self__ = this;
var _15871__$1 = this;
return self__.meta15870;
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec15869.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec15869.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec15869.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec15869.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec15869.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec15869.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,p__15872){
var self__ = this;
var vec__15873 = p__15872;
var k = cljs.core.nth.call(null,vec__15873,(0),null);
var x = cljs.core.nth.call(null,vec__15873,(1),null);
var ___$1 = this;
return cljs.spec.unform.call(null,self__.kps.call(null,k),x);
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec15869.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,kps,specs,cform){
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.spec.pvalid_QMARK_.call(null,this$__$1,x))){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (this$__$1,id,kps,specs,cform){
return (function (k,form,pred){
if(cljs.core.truth_(cljs.spec.pvalid_QMARK_.call(null,pred,x))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,k),via,in$,x);
}
});})(this$__$1,id,kps,specs,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec15869.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,kps,specs,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,kps,specs,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,___$1,id,kps,specs,cform){
return (function (){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,kps,specs,cform))
,null)));
}
});})(___$1,id,kps,specs,cform))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_.call(null,gs)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gs);
}
}
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec15869.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1);
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec15869.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null)),cljs.core.mapcat.call(null,cljs.core.vector,self__.keys,self__.forms))));
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec15869.getBasis = ((function (id,kps,specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"kps","kps",-1157342767,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta15870","meta15870",1955912754,null)], null);
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec15869.cljs$lang$type = true;

cljs.spec.t_cljs$spec15869.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec15869";

cljs.spec.t_cljs$spec15869.cljs$lang$ctorPrWriter = ((function (id,kps,specs,cform){
return (function (this__12477__auto__,writer__12478__auto__,opt__12479__auto__){
return cljs.core._write.call(null,writer__12478__auto__,"cljs.spec/t_cljs$spec15869");
});})(id,kps,specs,cform))
;

cljs.spec.__GT_t_cljs$spec15869 = ((function (id,kps,specs,cform){
return (function cljs$spec$or_spec_impl_$___GT_t_cljs$spec15869(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta15870){
return (new cljs.spec.t_cljs$spec15869(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta15870));
});})(id,kps,specs,cform))
;

}

return (new cljs.spec.t_cljs$spec15869(keys,forms,preds,gfn,id,kps,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.and_preds = (function cljs$spec$and_preds(x,preds,forms){
var ret = x;
var G__15904 = preds;
var vec__15906 = G__15904;
var seq__15907 = cljs.core.seq.call(null,vec__15906);
var first__15908 = cljs.core.first.call(null,seq__15907);
var seq__15907__$1 = cljs.core.next.call(null,seq__15907);
var pred = first__15908;
var preds__$1 = seq__15907__$1;
var G__15905 = forms;
var vec__15909 = G__15905;
var seq__15910 = cljs.core.seq.call(null,vec__15909);
var first__15911 = cljs.core.first.call(null,seq__15910);
var seq__15910__$1 = cljs.core.next.call(null,seq__15910);
var form = first__15911;
var forms__$1 = seq__15910__$1;
var ret__$1 = ret;
var G__15904__$1 = G__15904;
var G__15905__$1 = G__15905;
while(true){
var ret__$2 = ret__$1;
var vec__15912 = G__15904__$1;
var seq__15913 = cljs.core.seq.call(null,vec__15912);
var first__15914 = cljs.core.first.call(null,seq__15913);
var seq__15913__$1 = cljs.core.next.call(null,seq__15913);
var pred__$1 = first__15914;
var preds__$2 = seq__15913__$1;
var vec__15915 = G__15905__$1;
var seq__15916 = cljs.core.seq.call(null,vec__15915);
var first__15917 = cljs.core.first.call(null,seq__15916);
var seq__15916__$1 = cljs.core.next.call(null,seq__15916);
var form__$1 = first__15917;
var forms__$2 = seq__15916__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,nret))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__15918 = nret;
var G__15919 = preds__$2;
var G__15920 = forms__$2;
ret__$1 = G__15918;
G__15904__$1 = G__15919;
G__15905__$1 = G__15920;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.explain_pred_list = (function cljs$spec$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__15947 = forms;
var vec__15949 = G__15947;
var seq__15950 = cljs.core.seq.call(null,vec__15949);
var first__15951 = cljs.core.first.call(null,seq__15950);
var seq__15950__$1 = cljs.core.next.call(null,seq__15950);
var form = first__15951;
var forms__$1 = seq__15950__$1;
var G__15948 = preds;
var vec__15952 = G__15948;
var seq__15953 = cljs.core.seq.call(null,vec__15952);
var first__15954 = cljs.core.first.call(null,seq__15953);
var seq__15953__$1 = cljs.core.next.call(null,seq__15953);
var pred = first__15954;
var preds__$1 = seq__15953__$1;
var ret__$1 = ret;
var G__15947__$1 = G__15947;
var G__15948__$1 = G__15948;
while(true){
var ret__$2 = ret__$1;
var vec__15955 = G__15947__$1;
var seq__15956 = cljs.core.seq.call(null,vec__15955);
var first__15957 = cljs.core.first.call(null,seq__15956);
var seq__15956__$1 = cljs.core.next.call(null,seq__15956);
var form__$1 = first__15957;
var forms__$2 = seq__15956__$1;
var vec__15958 = G__15948__$1;
var seq__15959 = cljs.core.seq.call(null,vec__15958);
var first__15960 = cljs.core.first.call(null,seq__15959);
var seq__15959__$1 = cljs.core.next.call(null,seq__15959);
var pred__$1 = first__15960;
var preds__$2 = seq__15959__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,nret))){
return cljs.spec.explain_1.call(null,form__$1,pred__$1,path,via,in$,ret__$2);
} else {
var G__15961 = nret;
var G__15962 = forms__$2;
var G__15963 = preds__$2;
ret__$1 = G__15961;
G__15947__$1 = G__15962;
G__15948__$1 = G__15963;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.and_spec_impl = (function cljs$spec$and_spec_impl(forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.call(null,cljs.spec.specize,preds,forms);
}),null));
var cform = (function (){var G__15970 = cljs.core.count.call(null,preds);
switch (G__15970) {
case (2):
return ((function (G__15970,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
return cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(1)),ret);
}
});
;})(G__15970,specs))

break;
case (3):
return ((function (G__15970,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var ret__$1 = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(1)),ret);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret__$1))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
return cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(2)),ret__$1);
}
}
});
;})(G__15970,specs))

break;
default:
return ((function (G__15970,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = x;
var i = (0);
while(true){
if((i < cljs.core.count.call(null,specs__$1))){
var nret = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,i),ret);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,nret))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__15975 = nret;
var G__15976 = (i + (1));
ret = G__15975;
i = G__15976;
continue;
}
} else {
return ret;
}
break;
}
});
;})(G__15970,specs))

}
})();
if(typeof cljs.spec.t_cljs$spec15971 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec15971 = (function (forms,preds,gfn,specs,cform,meta15972){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cform = cform;
this.meta15972 = meta15972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec15971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cform){
return (function (_15973,meta15972__$1){
var self__ = this;
var _15973__$1 = this;
return (new cljs.spec.t_cljs$spec15971(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cform,meta15972__$1));
});})(specs,cform))
;

cljs.spec.t_cljs$spec15971.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cform){
return (function (_15973){
var self__ = this;
var _15973__$1 = this;
return self__.meta15972;
});})(specs,cform))
;

cljs.spec.t_cljs$spec15971.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec15971.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

cljs.spec.t_cljs$spec15971.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

cljs.spec.t_cljs$spec15971.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec15971.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(specs,cform))
;

cljs.spec.t_cljs$spec15971.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.call(null,((function (___$1,specs,cform){
return (function (p1__15965_SHARP_,p2__15964_SHARP_){
return cljs.spec.unform.call(null,p2__15964_SHARP_,p1__15965_SHARP_);
});})(___$1,specs,cform))
,x,cljs.core.reverse.call(null,self__.preds));
});})(specs,cform))
;

cljs.spec.t_cljs$spec15971.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs,cform){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.explain_pred_list.call(null,self__.forms,self__.preds,path,via,in$,x);
});})(specs,cform))
;

cljs.spec.t_cljs$spec15971.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gensub.call(null,cljs.core.first.call(null,self__.preds),overrides,path,rmap,cljs.core.first.call(null,self__.forms));
}
});})(specs,cform))
;

cljs.spec.t_cljs$spec15971.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});})(specs,cform))
;

cljs.spec.t_cljs$spec15971.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","and","cljs.spec/and",-7296553,null)),self__.forms)));
});})(specs,cform))
;

cljs.spec.t_cljs$spec15971.getBasis = ((function (specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta15972","meta15972",1225590487,null)], null);
});})(specs,cform))
;

cljs.spec.t_cljs$spec15971.cljs$lang$type = true;

cljs.spec.t_cljs$spec15971.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec15971";

cljs.spec.t_cljs$spec15971.cljs$lang$ctorPrWriter = ((function (specs,cform){
return (function (this__12477__auto__,writer__12478__auto__,opt__12479__auto__){
return cljs.core._write.call(null,writer__12478__auto__,"cljs.spec/t_cljs$spec15971");
});})(specs,cform))
;

cljs.spec.__GT_t_cljs$spec15971 = ((function (specs,cform){
return (function cljs$spec$and_spec_impl_$___GT_t_cljs$spec15971(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta15972){
return (new cljs.spec.t_cljs$spec15971(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta15972));
});})(specs,cform))
;

}

return (new cljs.spec.t_cljs$spec15971(forms,preds,gfn,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.coll_prob = (function cljs$spec$coll_prob(x,kfn,kform,distinct,count,min_count,max_count,path,via,in$){
var pred = (function (){var or__11820__auto__ = kfn;
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
return cljs.core.coll_QMARK_;
}
})();
var kform__$1 = (function (){var or__11820__auto__ = kform;
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
return new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null);
}
})();
if(cljs.core.not.call(null,cljs.spec.pvalid_QMARK_.call(null,pred,x))){
return cljs.spec.explain_1.call(null,kform__$1,pred,path,via,in$,x);
} else {
if(cljs.core.truth_((function (){var and__11808__auto__ = count;
if(cljs.core.truth_(and__11808__auto__)){
return cljs.core.not_EQ_.call(null,count,cljs.core.bounded_count.call(null,count,x));
} else {
return and__11808__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__12754__auto__ = count;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__12754__auto__);
})(),(function (){var x__12754__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__12754__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__11808__auto__ = (function (){var or__11820__auto__ = min_count;
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
return max_count;
}
})();
if(cljs.core.truth_(and__11808__auto__)){
return !((((function (){var or__11820__auto__ = min_count;
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x))) && ((cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x) <= (function (){var or__11820__auto__ = max_count;
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
return cljs.spec.MAX_INT;
}
})())));
} else {
return and__11808__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null)),(function (){var x__12754__auto__ = (function (){var or__11820__auto__ = min_count;
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
return (0);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__12754__auto__);
})(),(function (){var x__12754__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__12754__auto__);
})(),(function (){var x__12754__auto__ = (function (){var or__11820__auto__ = max_count;
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
return cljs.spec.MAX_INT;
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__12754__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__11808__auto__ = distinct;
if(cljs.core.truth_(and__11808__auto__)){
return (!(cljs.core.empty_QMARK_.call(null,x))) && (cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,x)));
} else {
return and__11808__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
}
}
}
});
/**
 * Do not call this directly, use 'merge'
 */
cljs.spec.merge_spec_impl = (function cljs$spec$merge_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec15988 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec15988 = (function (forms,preds,gfn,meta15989){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta15989 = meta15989;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec15988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15990,meta15989__$1){
var self__ = this;
var _15990__$1 = this;
return (new cljs.spec.t_cljs$spec15988(self__.forms,self__.preds,self__.gfn,meta15989__$1));
});

cljs.spec.t_cljs$spec15988.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15990){
var self__ = this;
var _15990__$1 = this;
return self__.meta15989;
});

cljs.spec.t_cljs$spec15988.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec15988.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.t_cljs$spec15988.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.t_cljs$spec15988.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec15988.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.call(null,((function (___$1){
return (function (p1__15977_SHARP_,p2__15978_SHARP_){
return cljs.spec.dt.call(null,p1__15977_SHARP_,x,p2__15978_SHARP_);
});})(___$1))
,self__.preds,self__.forms);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.spec.invalid_QMARK_,ms))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
return cljs.core.apply.call(null,cljs.core.merge,ms);
}
});

cljs.spec.t_cljs$spec15988.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (___$1){
return (function (p1__15979_SHARP_){
return cljs.spec.unform.call(null,p1__15979_SHARP_,x);
});})(___$1))
,cljs.core.reverse.call(null,self__.preds)));
});

cljs.spec.t_cljs$spec15988.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (___$1){
return (function (p1__15980_SHARP_,p2__15981_SHARP_){
return cljs.spec.explain_1.call(null,p1__15980_SHARP_,p2__15981_SHARP_,path,via,in$,x);
});})(___$1))
,self__.forms,self__.preds));
});

cljs.spec.t_cljs$spec15988.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.fmap.call(null,((function (___$1){
return (function (p1__15982_SHARP_){
return cljs.core.apply.call(null,cljs.core.merge,p1__15982_SHARP_);
});})(___$1))
,cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,cljs.core.map.call(null,((function (___$1){
return (function (p1__15983_SHARP_,p2__15984_SHARP_){
return cljs.spec.gensub.call(null,p1__15983_SHARP_,overrides,path,rmap,p2__15984_SHARP_);
});})(___$1))
,self__.preds,self__.forms)));
}
});

cljs.spec.t_cljs$spec15988.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.merge_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec15988.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","merge","cljs.spec/merge",-838422687,null)),self__.forms)));
});

cljs.spec.t_cljs$spec15988.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta15989","meta15989",-173106252,null)], null);
});

cljs.spec.t_cljs$spec15988.cljs$lang$type = true;

cljs.spec.t_cljs$spec15988.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec15988";

cljs.spec.t_cljs$spec15988.cljs$lang$ctorPrWriter = (function (this__12477__auto__,writer__12478__auto__,opt__12479__auto__){
return cljs.core._write.call(null,writer__12478__auto__,"cljs.spec/t_cljs$spec15988");
});

cljs.spec.__GT_t_cljs$spec15988 = (function cljs$spec$merge_spec_impl_$___GT_t_cljs$spec15988(forms__$1,preds__$1,gfn__$1,meta15989){
return (new cljs.spec.t_cljs$spec15988(forms__$1,preds__$1,gfn__$1,meta15989));
});

}

return (new cljs.spec.t_cljs$spec15988(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'every', 'every-kv', 'coll-of' or 'map-of'
 */
cljs.spec.every_impl = (function cljs$spec$every_impl(var_args){
var args15995 = [];
var len__13041__auto___16027 = arguments.length;
var i__13042__auto___16028 = (0);
while(true){
if((i__13042__auto___16028 < len__13041__auto___16027)){
args15995.push((arguments[i__13042__auto___16028]));

var G__16029 = (i__13042__auto___16028 + (1));
i__13042__auto___16028 = G__16029;
continue;
} else {
}
break;
}

var G__15997 = args15995.length;
switch (G__15997) {
case 3:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15995.length)].join('')));

}
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.every_impl.call(null,form,pred,opts,null);
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__15998,gfn){
var map__15999 = p__15998;
var map__15999__$1 = ((((!((map__15999 == null)))?((((map__15999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15999.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15999):map__15999);
var opts = map__15999__$1;
var max_count = cljs.core.get.call(null,map__15999__$1,new cljs.core.Keyword(null,"max-count","max-count",1539185305));
var kfn = cljs.core.get.call(null,map__15999__$1,new cljs.core.Keyword("cljs.spec","kfn","cljs.spec/kfn",293196937));
var gen_max = cljs.core.get.call(null,map__15999__$1,new cljs.core.Keyword(null,"gen-max","gen-max",-793680445),(20));
var conform_all = cljs.core.get.call(null,map__15999__$1,new cljs.core.Keyword("cljs.spec","conform-all","cljs.spec/conform-all",-1945029907));
var conform_keys = cljs.core.get.call(null,map__15999__$1,new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814));
var describe_form = cljs.core.get.call(null,map__15999__$1,new cljs.core.Keyword("cljs.spec","describe","cljs.spec/describe",165584687));
var distinct = cljs.core.get.call(null,map__15999__$1,new cljs.core.Keyword(null,"distinct","distinct",-1788879121));
var kind_form = cljs.core.get.call(null,map__15999__$1,new cljs.core.Keyword("cljs.spec","kind-form","cljs.spec/kind-form",997489303));
var gen_into = cljs.core.get.call(null,map__15999__$1,new cljs.core.Keyword(null,"into","into",-150836029));
var count = cljs.core.get.call(null,map__15999__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var min_count = cljs.core.get.call(null,map__15999__$1,new cljs.core.Keyword(null,"min-count","min-count",1594709013));
var kind = cljs.core.get.call(null,map__15999__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var cpred = cljs.core.get.call(null,map__15999__$1,new cljs.core.Keyword("cljs.spec","cpred","cljs.spec/cpred",1439199454));
var conform_into = gen_into;
var spec = (new cljs.core.Delay(((function (conform_into,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (){
return cljs.spec.specize.call(null,pred);
});})(conform_into,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,null));
var check_QMARK_ = ((function (conform_into,spec,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (p1__15991_SHARP_){
return cljs.spec.valid_QMARK_.call(null,cljs.core.deref.call(null,spec),p1__15991_SHARP_);
});})(conform_into,spec,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;
var kfn__$1 = (function (){var or__11820__auto__ = kfn;
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
return ((function (or__11820__auto__,conform_into,spec,check_QMARK_,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (i,v){
return i;
});
;})(or__11820__auto__,conform_into,spec,check_QMARK_,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
}
})();
var addcv = ((function (conform_into,spec,check_QMARK_,kfn__$1,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (ret,i,v,cv){
return cljs.core.conj.call(null,ret,cv);
});})(conform_into,spec,check_QMARK_,kfn__$1,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;
var cfns = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (x){
if((cljs.core.vector_QMARK_.call(null,x)) && ((cljs.core.not.call(null,conform_into)) || (cljs.core.vector_QMARK_.call(null,conform_into)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (ret,i,v,cv){
if((v === cv)){
return ret;
} else {
return cljs.core.assoc.call(null,ret,i,cv);
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,cljs.core.identity], null);
} else {
if(cljs.core.truth_((function (){var and__11808__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__11808__auto__){
var or__11820__auto__ = (function (){var and__11808__auto____$1 = kind;
if(cljs.core.truth_(and__11808__auto____$1)){
return cljs.core.not.call(null,conform_into);
} else {
return and__11808__auto____$1;
}
})();
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
return cljs.core.map_QMARK_.call(null,conform_into);
}
} else {
return and__11808__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (ret,i,v,cv){
if(((v === cv)) && (cljs.core.not.call(null,conform_keys))){
return ret;
} else {
return cljs.core.assoc.call(null,ret,cljs.core.nth.call(null,(cljs.core.truth_(conform_keys)?cv:v),(0)),cljs.core.nth.call(null,cv,(1)));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,cljs.core.identity], null);
} else {
if((cljs.core.list_QMARK_.call(null,conform_into)) || (cljs.core.seq_QMARK_.call(null,conform_into)) || ((cljs.core.not.call(null,conform_into)) && ((cljs.core.list_QMARK_.call(null,x)) || (cljs.core.seq_QMARK_.call(null,x))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty,addcv,cljs.core.reverse], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (p1__15992_SHARP_){
return cljs.core.empty.call(null,(function (){var or__11820__auto__ = conform_into;
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
return p1__15992_SHARP_;
}
})());
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,addcv,cljs.core.identity], null);

}
}
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;
if(typeof cljs.spec.t_cljs$spec16001 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec16001 = (function (form,max_count,map__15999,check_QMARK_,p__15998,gfn,gen_max,pred,cpred,conform_keys,kind_form,addcv,cfns,describe_form,distinct,spec,kfn,gen_into,count,min_count,opts,kind,conform_all,conform_into,meta16002){
this.form = form;
this.max_count = max_count;
this.map__15999 = map__15999;
this.check_QMARK_ = check_QMARK_;
this.p__15998 = p__15998;
this.gfn = gfn;
this.gen_max = gen_max;
this.pred = pred;
this.cpred = cpred;
this.conform_keys = conform_keys;
this.kind_form = kind_form;
this.addcv = addcv;
this.cfns = cfns;
this.describe_form = describe_form;
this.distinct = distinct;
this.spec = spec;
this.kfn = kfn;
this.gen_into = gen_into;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.kind = kind;
this.conform_all = conform_all;
this.conform_into = conform_into;
this.meta16002 = meta16002;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec16001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_16003,meta16002__$1){
var self__ = this;
var _16003__$1 = this;
return (new cljs.spec.t_cljs$spec16001(self__.form,self__.max_count,self__.map__15999,self__.check_QMARK_,self__.p__15998,self__.gfn,self__.gen_max,self__.pred,self__.cpred,self__.conform_keys,self__.kind_form,self__.addcv,self__.cfns,self__.describe_form,self__.distinct,self__.spec,self__.kfn,self__.gen_into,self__.count,self__.min_count,self__.opts,self__.kind,self__.conform_all,self__.conform_into,meta16002__$1));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec16001.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_16003){
var self__ = this;
var _16003__$1 = this;
return self__.meta16002;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec16001.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec16001.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec16001.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec16001.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec16001.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var spec__$1 = cljs.core.deref.call(null,self__.spec);
if(cljs.core.not.call(null,self__.cpred.call(null,x))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
if(cljs.core.truth_(self__.conform_all)){
var vec__16004 = self__.cfns.call(null,x);
var init = cljs.core.nth.call(null,vec__16004,(0),null);
var add = cljs.core.nth.call(null,vec__16004,(1),null);
var complete = cljs.core.nth.call(null,vec__16004,(2),null);
var ret = init.call(null,x);
var i = (0);
var G__16010 = cljs.core.seq.call(null,x);
var vec__16011 = G__16010;
var seq__16012 = cljs.core.seq.call(null,vec__16011);
var first__16013 = cljs.core.first.call(null,seq__16012);
var seq__16012__$1 = cljs.core.next.call(null,seq__16012);
var v = first__16013;
var vs = seq__16012__$1;
var vseq = vec__16011;
var ret__$1 = ret;
var i__$1 = i;
var G__16010__$1 = G__16010;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__16014 = G__16010__$1;
var seq__16015 = cljs.core.seq.call(null,vec__16014);
var first__16016 = cljs.core.first.call(null,seq__16015);
var seq__16015__$1 = cljs.core.next.call(null,seq__16015);
var v__$1 = first__16016;
var vs__$1 = seq__16015__$1;
var vseq__$1 = vec__16014;
if(vseq__$1){
var cv = cljs.spec.conform_STAR_.call(null,spec__$1,v__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,cv))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__16031 = add.call(null,ret__$2,i__$2,v__$1,cv);
var G__16032 = (i__$2 + (1));
var G__16033 = vs__$1;
ret__$1 = G__16031;
i__$1 = G__16032;
G__16010__$1 = G__16033;
continue;
}
} else {
return complete.call(null,ret__$2);
}
break;
}
} else {
if(cljs.core.indexed_QMARK_.call(null,x)){
var step = (function (){var x__12158__auto__ = (1);
var y__12159__auto__ = cljs.core.long$.call(null,(cljs.core.count.call(null,x) / cljs.spec._STAR_coll_check_limit_STAR_));
return ((x__12158__auto__ > y__12159__auto__) ? x__12158__auto__ : y__12159__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count.call(null,x))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,spec__$1,cljs.core.nth.call(null,x,i)))){
var G__16034 = (i + step);
i = G__16034;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
} else {
var limit = cljs.spec._STAR_coll_check_limit_STAR_;
var i = (0);
var G__16020 = cljs.core.seq.call(null,x);
var vec__16021 = G__16020;
var seq__16022 = cljs.core.seq.call(null,vec__16021);
var first__16023 = cljs.core.first.call(null,seq__16022);
var seq__16022__$1 = cljs.core.next.call(null,seq__16022);
var v = first__16023;
var vs = seq__16022__$1;
var vseq = vec__16021;
var i__$1 = i;
var G__16020__$1 = G__16020;
while(true){
var i__$2 = i__$1;
var vec__16024 = G__16020__$1;
var seq__16025 = cljs.core.seq.call(null,vec__16024);
var first__16026 = cljs.core.first.call(null,seq__16025);
var seq__16025__$1 = cljs.core.next.call(null,seq__16025);
var v__$1 = first__16026;
var vs__$1 = seq__16025__$1;
var vseq__$1 = vec__16024;
if(((vseq__$1 == null)) || (cljs.core._EQ_.call(null,i__$2,limit))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,spec__$1,v__$1))){
var G__16035 = (i__$2 + (1));
var G__16036 = vs__$1;
i__$1 = G__16035;
G__16020__$1 = G__16036;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);

}
}
break;
}
}

}
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec16001.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return x;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec16001.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var or__11820__auto__ = cljs.spec.coll_prob.call(null,x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,path,via,in$);
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.concat,(cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.call(null,cljs.core.take,cljs.spec._STAR_coll_error_limit_STAR_)).call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (or__11820__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (i,v){
var k = self__.kfn.call(null,i,v);
if(cljs.core.truth_(self__.check_QMARK_.call(null,v))){
return null;
} else {
var prob = cljs.spec.explain_1.call(null,self__.form,self__.pred,path,via,cljs.core.conj.call(null,in$,k),v);
return prob;
}
});})(or__11820__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,cljs.core.range.call(null),x))));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec16001.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var pgen = cljs.spec.gensub.call(null,self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.impl.gen.bind.call(null,(cljs.core.truth_(self__.gen_into)?cljs.spec.impl.gen.return$.call(null,cljs.core.empty.call(null,self__.gen_into)):(cljs.core.truth_(self__.kind)?cljs.spec.impl.gen.fmap.call(null,((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (p1__15993_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__15993_SHARP_)){
return p1__15993_SHARP_;
} else {
return cljs.core.empty.call(null,p1__15993_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,cljs.spec.gensub.call(null,self__.kind,overrides,path,rmap,self__.form)):cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY)
)),((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (init){
return cljs.spec.impl.gen.fmap.call(null,((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (p1__15994_SHARP_){
if(cljs.core.vector_QMARK_.call(null,init)){
return p1__15994_SHARP_;
} else {
return cljs.core.into.call(null,init,p1__15994_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-elements","num-elements",1960422107),self__.count,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null)):cljs.spec.impl.gen.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-elements","min-elements",949370780),(function (){var or__11820__auto__ = self__.min_count;
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"max-elements","max-elements",433034073),(function (){var or__11820__auto__ = self__.max_count;
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
var x__12158__auto__ = self__.gen_max;
var y__12159__auto__ = ((2) * (function (){var or__11820__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__11820__auto____$1)){
return or__11820__auto____$1;
} else {
return (0);
}
})());
return ((x__12158__auto__ > y__12159__auto__) ? x__12158__auto__ : y__12159__auto__);
}
})(),new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null))):(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector.call(null,pgen,self__.count):(cljs.core.truth_((function (){var or__11820__auto__ = self__.min_count;
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.impl.gen.vector.call(null,pgen,(function (){var or__11820__auto__ = self__.min_count;
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
return (0);
}
})(),(function (){var or__11820__auto__ = self__.max_count;
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
var x__12158__auto__ = self__.gen_max;
var y__12159__auto__ = ((2) * (function (){var or__11820__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__11820__auto____$1)){
return or__11820__auto____$1;
} else {
return (0);
}
})());
return ((x__12158__auto__ > y__12159__auto__) ? x__12158__auto__ : y__12159__auto__);
}
})()):cljs.spec.impl.gen.vector.call(null,pgen,(0),self__.gen_max)
))));
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
);
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec16001.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.every_impl.call(null,self__.form,self__.pred,self__.opts,gfn__$1);
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec16001.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_){
var self__ = this;
var ___$1 = this;
var or__11820__auto__ = self__.describe_form;
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","every","cljs.spec/every",-1899705480,null)),(function (){var x__12754__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__12754__auto__);
})(),cljs.core.mapcat.call(null,cljs.core.identity,self__.opts))));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec16001.getBasis = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (){
return new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"max-count","max-count",-1115250464,null),new cljs.core.Symbol(null,"map__15999","map__15999",1805147426,null),new cljs.core.Symbol(null,"check?","check?",409539557,null),new cljs.core.Symbol(null,"p__15998","p__15998",-678750073,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"gen-max","gen-max",846851082,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"cpred","cpred",-540353554,null),new cljs.core.Symbol(null,"conform-keys","conform-keys",-159510287,null),new cljs.core.Symbol(null,"kind-form","kind-form",1155997457,null),new cljs.core.Symbol(null,"addcv","addcv",-1552991247,null),new cljs.core.Symbol(null,"cfns","cfns",1335482066,null),new cljs.core.Symbol(null,"describe-form","describe-form",-1410156588,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"gen-into","gen-into",592640985,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"min-count","min-count",-1059726756,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"conform-all","conform-all",-980179459,null),new cljs.core.Symbol(null,"conform-into","conform-into",-1039113729,null),new cljs.core.Symbol(null,"meta16002","meta16002",1985186500,null)], null);
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec16001.cljs$lang$type = true;

cljs.spec.t_cljs$spec16001.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec16001";

cljs.spec.t_cljs$spec16001.cljs$lang$ctorPrWriter = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (this__12477__auto__,writer__12478__auto__,opt__12479__auto__){
return cljs.core._write.call(null,writer__12478__auto__,"cljs.spec/t_cljs$spec16001");
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.__GT_t_cljs$spec16001 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function cljs$spec$__GT_t_cljs$spec16001(form__$1,max_count__$1,map__15999__$2,check_QMARK___$1,p__15998__$1,gfn__$1,gen_max__$1,pred__$1,cpred__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,distinct__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta16002){
return (new cljs.spec.t_cljs$spec16001(form__$1,max_count__$1,map__15999__$2,check_QMARK___$1,p__15998__$1,gfn__$1,gen_max__$1,pred__$1,cpred__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,distinct__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta16002));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15999,map__15999__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

}

return (new cljs.spec.t_cljs$spec16001(form,max_count,map__15999__$1,check_QMARK_,p__15998,gfn,gen_max,pred,cpred,conform_keys,kind_form,addcv,cfns,describe_form,distinct,spec,kfn__$1,gen_into,count,min_count,opts,kind,conform_all,conform_into,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.every_impl.cljs$lang$maxFixedArity = 4;

cljs.spec.accept = (function cljs$spec$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword(null,"ret","ret",-468222814),x], null);
});
cljs.spec.accept_QMARK_ = (function cljs$spec$accept_QMARK_(p__16037){
var map__16040 = p__16037;
var map__16040__$1 = ((((!((map__16040 == null)))?((((map__16040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16040.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16040):map__16040);
var op = cljs.core.get.call(null,map__16040__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
return cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),op);
});
cljs.spec.pcat_STAR_ = (function cljs$spec$pcat_STAR_(p__16042){
var map__16054 = p__16042;
var map__16054__$1 = ((((!((map__16054 == null)))?((((map__16054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16054.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16054):map__16054);
var vec__16055 = cljs.core.get.call(null,map__16054__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__16056 = cljs.core.seq.call(null,vec__16055);
var first__16057 = cljs.core.first.call(null,seq__16056);
var seq__16056__$1 = cljs.core.next.call(null,seq__16056);
var p1 = first__16057;
var pr = seq__16056__$1;
var ps = vec__16055;
var vec__16058 = cljs.core.get.call(null,map__16054__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__16059 = cljs.core.seq.call(null,vec__16058);
var first__16060 = cljs.core.first.call(null,seq__16059);
var seq__16059__$1 = cljs.core.next.call(null,seq__16059);
var k1 = first__16060;
var kr = seq__16059__$1;
var ks = vec__16058;
var vec__16061 = cljs.core.get.call(null,map__16054__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var seq__16062 = cljs.core.seq.call(null,vec__16061);
var first__16063 = cljs.core.first.call(null,seq__16062);
var seq__16062__$1 = cljs.core.next.call(null,seq__16062);
var f1 = first__16063;
var fr = seq__16062__$1;
var forms = vec__16061;
var ret = cljs.core.get.call(null,map__16054__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var rep_PLUS_ = cljs.core.get.call(null,map__16054__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ps)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
var rp = new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.call(null,ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,rp]):rp));
if(pr){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),fr,new cljs.core.Keyword(null,"ret","ret",-468222814),ret__$1], null));
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"rep+","rep+",-281382396),rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.pcat = (function cljs$spec$pcat(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16066 = arguments.length;
var i__13042__auto___16067 = (0);
while(true){
if((i__13042__auto___16067 < len__13041__auto___16066)){
args__13048__auto__.push((arguments[i__13042__auto___16067]));

var G__16068 = (i__13042__auto___16067 + (1));
i__13042__auto___16067 = G__16068;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});

cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.pcat.cljs$lang$maxFixedArity = (0);

cljs.spec.pcat.cljs$lang$applyTo = (function (seq16065){
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16065));
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.cat_impl = (function cljs$spec$cat_impl(ks,ps,forms){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.rep_STAR_ = (function cljs$spec$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),new cljs.core.Keyword(null,"p2","p2",905500641),p2,new cljs.core.Keyword(null,"splice","splice",449588165),splice,new cljs.core.Keyword(null,"forms","forms",2045992350),form,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null)], null);
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p2,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)));
} else {
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p1,new cljs.core.Keyword(null,"ret","ret",-468222814),ret);
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.rep_impl = (function cljs$spec$rep_impl(form,p){
return cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.rep_PLUS_impl = (function cljs$spec$rep_PLUS_impl(form,p){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__12754__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__12754__auto__);
})(),(function (){var x__12754__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null)),(function (){var x__12754__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__12754__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__12754__auto__);
})())))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"rep+","rep+",-281382396),form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.amp_impl = (function cljs$spec$amp_impl(re,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),new cljs.core.Keyword(null,"p1","p1",-936759954),re,new cljs.core.Keyword(null,"ps","ps",292358046),preds,new cljs.core.Keyword(null,"forms","forms",2045992350),pred_forms], null);
});
cljs.spec.filter_alt = (function cljs$spec$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__11820__auto__ = ks;
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.call(null,(function (p1__16069_SHARP_){
return f.call(null,cljs.core.first.call(null,p1__16069_SHARP_));
}),cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__11820__auto__ = cljs.core.seq.call(null,ks);
if(or__11820__auto__){
return or__11820__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__11820__auto__ = cljs.core.seq.call(null,forms);
if(or__11820__auto__){
return or__11820__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq.call(null,cljs.core.map.call(null,((function (pks){
return (function (p1__16070_SHARP_){
return cljs.core.nth.call(null,p1__16070_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.filter.call(null,f,ps)),ks,forms], null);
}
});
cljs.spec.alt_STAR_ = (function cljs$spec$alt_STAR_(ps,ks,forms){
var vec__16080 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.core.identity);
var vec__16083 = cljs.core.nth.call(null,vec__16080,(0),null);
var seq__16084 = cljs.core.seq.call(null,vec__16083);
var first__16085 = cljs.core.first.call(null,seq__16084);
var seq__16084__$1 = cljs.core.next.call(null,seq__16084);
var p1 = first__16085;
var pr = seq__16084__$1;
var ps__$1 = vec__16083;
var vec__16086 = cljs.core.nth.call(null,vec__16080,(1),null);
var k1 = cljs.core.nth.call(null,vec__16086,(0),null);
var ks__$1 = vec__16086;
var forms__$1 = cljs.core.nth.call(null,vec__16080,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),new cljs.core.Keyword(null,"ps","ps",292358046),ps__$1,new cljs.core.Keyword(null,"ks","ks",1900203942),ks__$1,new cljs.core.Keyword(null,"forms","forms",2045992350),forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.spec.accept.call(null,cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)], null)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alts = (function cljs$spec$alts(var_args){
var args__13048__auto__ = [];
var len__13041__auto___16090 = arguments.length;
var i__13042__auto___16091 = (0);
while(true){
if((i__13042__auto___16091 < len__13041__auto___16090)){
args__13048__auto__.push((arguments[i__13042__auto___16091]));

var G__16092 = (i__13042__auto___16091 + (1));
i__13042__auto___16091 = G__16092;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((0) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((0)),(0),null)):null);
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__13049__auto__);
});

cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alt_STAR_.call(null,ps,null,null);
});

cljs.spec.alts.cljs$lang$maxFixedArity = (0);

cljs.spec.alts.cljs$lang$applyTo = (function (seq16089){
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16089));
});

cljs.spec.alt2 = (function cljs$spec$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__11808__auto__ = p1;
if(cljs.core.truth_(and__11808__auto__)){
return p2;
} else {
return and__11808__auto__;
}
})())){
return cljs.spec.alts.call(null,p1,p2);
} else {
var or__11820__auto__ = p1;
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alt_impl = (function cljs$spec$alt_impl(ks,ps,forms){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,ps,ks,forms),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null));
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.maybe_impl = (function cljs$spec$maybe_impl(p,form){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.accept.call(null,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718)], null)),new cljs.core.Keyword(null,"maybe","maybe",-314397560),form);
});
cljs.spec.noret_QMARK_ = (function cljs$spec$noret_QMARK_(p1,pret){
var or__11820__auto__ = cljs.core._EQ_.call(null,pret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718));
if(or__11820__auto__){
return or__11820__auto__;
} else {
var or__11820__auto____$1 = (function (){var and__11808__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),null], null), null).call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(cljs.spec.reg_resolve_BANG_.call(null,p1)));
if(cljs.core.truth_(and__11808__auto__)){
return cljs.core.empty_QMARK_.call(null,pret);
} else {
return and__11808__auto__;
}
})();
if(cljs.core.truth_(or__11820__auto____$1)){
return or__11820__auto____$1;
} else {
return null;
}
}
});
cljs.spec.accept_nil_QMARK_ = (function cljs$spec$accept_nil_QMARK_(p){
var map__16096 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__16096__$1 = ((((!((map__16096 == null)))?((((map__16096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16096.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16096):map__16096);
var p__$1 = map__16096__$1;
var op = cljs.core.get.call(null,map__16096__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__16096__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var p1 = cljs.core.get.call(null,map__16096__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__16096__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__16096__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__16098 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__16098)){
return true;
} else {
if(cljs.core._EQ_.call(null,null,G__16098)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__16098)){
var and__11808__auto__ = cljs.spec.accept_nil_QMARK_.call(null,p1);
if(cljs.core.truth_(and__11808__auto__)){
var or__11820__auto__ = cljs.spec.noret_QMARK_.call(null,p1,cljs.spec.preturn.call(null,p1));
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
var ret = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1),ps,cljs.core.next.call(null,forms));
return cljs.core.not.call(null,cljs.spec.invalid_QMARK_.call(null,ret));
}
} else {
return and__11808__auto__;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__16098)){
var or__11820__auto__ = (p1 === p2);
if(or__11820__auto__){
return or__11820__auto__;
} else {
return cljs.spec.accept_nil_QMARK_.call(null,p1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__16098)){
return cljs.core.every_QMARK_.call(null,cljs.spec.accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__16098)){
return cljs.core.some.call(null,cljs.spec.accept_nil_QMARK_,ps);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.preturn = (function cljs$spec$preturn(p){
var map__16117 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__16117__$1 = ((((!((map__16117 == null)))?((((map__16117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16117.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16117):map__16117);
var p__$1 = map__16117__$1;
var vec__16118 = cljs.core.get.call(null,map__16117__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__16119 = cljs.core.seq.call(null,vec__16118);
var first__16120 = cljs.core.first.call(null,seq__16119);
var seq__16119__$1 = cljs.core.next.call(null,seq__16119);
var p0 = first__16120;
var pr = seq__16119__$1;
var ps = vec__16118;
var vec__16121 = cljs.core.get.call(null,map__16117__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__16121,(0),null);
var ks = vec__16121;
var op = cljs.core.get.call(null,map__16117__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__16117__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__16117__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__16117__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__16125 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__16125)){
return ret;
} else {
if(cljs.core._EQ_.call(null,null,G__16125)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__16125)){
var pret = cljs.spec.preturn.call(null,p1);
if(cljs.core.truth_(cljs.spec.noret_QMARK_.call(null,p1,pret))){
return new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718);
} else {
return cljs.spec.and_preds.call(null,pret,ps,forms);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__16125)){
return cljs.spec.add_ret.call(null,p1,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__16125)){
return cljs.spec.add_ret.call(null,p0,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__16125)){
var vec__16126 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.spec.accept_nil_QMARK_);
var vec__16129 = cljs.core.nth.call(null,vec__16126,(0),null);
var p0__$1 = cljs.core.nth.call(null,vec__16129,(0),null);
var vec__16132 = cljs.core.nth.call(null,vec__16126,(1),null);
var k0 = cljs.core.nth.call(null,vec__16132,(0),null);
var r = (((p0__$1 == null))?new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718):cljs.spec.preturn.call(null,p0__$1));
if(cljs.core.truth_(k0)){
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k0,r], null));
} else {
return r;
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.op_unform = (function cljs$spec$op_unform(p,x){
var map__16151 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__16151__$1 = ((((!((map__16151 == null)))?((((map__16151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16151.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16151):map__16151);
var p__$1 = map__16151__$1;
var vec__16152 = cljs.core.get.call(null,map__16151__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__16153 = cljs.core.seq.call(null,vec__16152);
var first__16154 = cljs.core.first.call(null,seq__16153);
var seq__16153__$1 = cljs.core.next.call(null,seq__16153);
var p0 = first__16154;
var pr = seq__16153__$1;
var ps = vec__16152;
var vec__16155 = cljs.core.get.call(null,map__16151__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__16155,(0),null);
var ks = vec__16155;
var op = cljs.core.get.call(null,map__16151__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__16151__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__16151__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__16151__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.call(null,map__16151__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__16151__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var kps = cljs.core.zipmap.call(null,ks,ps);
var G__16159 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__16159)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.call(null,null,G__16159)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform.call(null,p__$1,x)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__16159)){
var px = cljs.core.reduce.call(null,((function (G__16159,map__16151,map__16151__$1,p__$1,vec__16152,seq__16153,first__16154,seq__16153__$1,p0,pr,ps,vec__16155,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__16136_SHARP_,p2__16135_SHARP_){
return cljs.spec.unform.call(null,p2__16135_SHARP_,p1__16136_SHARP_);
});})(G__16159,map__16151,map__16151__$1,p__$1,vec__16152,seq__16153,first__16154,seq__16153__$1,p0,pr,ps,vec__16155,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse.call(null,ps));
return cljs.spec.op_unform.call(null,p1,px);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__16159)){
return cljs.core.mapcat.call(null,((function (G__16159,map__16151,map__16151__$1,p__$1,vec__16152,seq__16153,first__16154,seq__16153__$1,p0,pr,ps,vec__16155,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__16137_SHARP_){
return cljs.spec.op_unform.call(null,p1,p1__16137_SHARP_);
});})(G__16159,map__16151,map__16151__$1,p__$1,vec__16152,seq__16153,first__16154,seq__16153__$1,p0,pr,ps,vec__16155,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__16159)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.call(null,((function (G__16159,map__16151,map__16151__$1,p__$1,vec__16152,seq__16153,first__16154,seq__16153__$1,p0,pr,ps,vec__16155,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__16138_SHARP_){
return cljs.spec.op_unform.call(null,p0,p1__16138_SHARP_);
});})(G__16159,map__16151,map__16151__$1,p__$1,vec__16152,seq__16153,first__16154,seq__16153__$1,p0,pr,ps,vec__16155,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
return cljs.core.mapcat.call(null,((function (G__16159,map__16151,map__16151__$1,p__$1,vec__16152,seq__16153,first__16154,seq__16153__$1,p0,pr,ps,vec__16155,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_.call(null,x,k__$1)){
return cljs.spec.op_unform.call(null,kps.call(null,k__$1),cljs.core.get.call(null,x,k__$1));
} else {
return null;
}
});})(G__16159,map__16151,map__16151__$1,p__$1,vec__16152,seq__16153,first__16154,seq__16153__$1,p0,pr,ps,vec__16155,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,ks);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__16159)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform.call(null,p0,x)], null);
} else {
var vec__16160 = x;
var k__$1 = cljs.core.nth.call(null,vec__16160,(0),null);
var v = cljs.core.nth.call(null,vec__16160,(1),null);
return cljs.spec.op_unform.call(null,kps.call(null,k__$1),v);
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.add_ret = (function cljs$spec$add_ret(p,r,k){
var map__16166 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__16166__$1 = ((((!((map__16166 == null)))?((((map__16166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16166.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16166):map__16166);
var p__$1 = map__16166__$1;
var op = cljs.core.get.call(null,map__16166__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__16166__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var splice = cljs.core.get.call(null,map__16166__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var prop = ((function (map__16166,map__16166__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core.empty_QMARK_.call(null,ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
});})(map__16166,map__16166__$1,p__$1,op,ps,splice))
;
var G__16168 = op;
if(cljs.core._EQ_.call(null,null,G__16168)){
return r;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__16168)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__16168)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__16168)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__16168)){
return prop.call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__16168)){
return prop.call(null);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.deriv = (function cljs$spec$deriv(p,x){
var map__16179 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__16179__$1 = ((((!((map__16179 == null)))?((((map__16179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16179.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16179):map__16179);
var p__$1 = map__16179__$1;
var vec__16180 = cljs.core.get.call(null,map__16179__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__16181 = cljs.core.seq.call(null,vec__16180);
var first__16182 = cljs.core.first.call(null,seq__16181);
var seq__16181__$1 = cljs.core.next.call(null,seq__16181);
var p0 = first__16182;
var pr = seq__16181__$1;
var ps = vec__16180;
var vec__16183 = cljs.core.get.call(null,map__16179__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__16184 = cljs.core.seq.call(null,vec__16183);
var first__16185 = cljs.core.first.call(null,seq__16184);
var seq__16184__$1 = cljs.core.next.call(null,seq__16184);
var k0 = first__16185;
var kr = seq__16184__$1;
var ks = vec__16183;
var op = cljs.core.get.call(null,map__16179__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__16179__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__16179__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__16179__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.call(null,map__16179__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var forms = cljs.core.get.call(null,map__16179__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
if(cljs.core.truth_(p__$1)){
var G__16187 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__16187)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__16187)){
var ret__$1 = cljs.spec.dt.call(null,p__$1,x,p__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret__$1))){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__16187)){
var temp__6503__auto__ = cljs.spec.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__6503__auto__)){
var p1__$1 = temp__6503__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1__$1),ps,cljs.core.next.call(null,forms));
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret__$1))){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return cljs.spec.amp_impl.call(null,p1__$1,ps,forms);
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__16187)){
return cljs.spec.alt2.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.cons.call(null,cljs.spec.deriv.call(null,p0,x),pr),new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),ret], null)),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p0))?cljs.spec.deriv.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.next.call(null,forms),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.spec.add_ret.call(null,p0,ret,k0)], null)),x):null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__16187)){
return cljs.spec.alt_STAR_.call(null,cljs.core.map.call(null,((function (G__16187,map__16179,map__16179__$1,p__$1,vec__16180,seq__16181,first__16182,seq__16181__$1,p0,pr,ps,vec__16183,seq__16184,first__16185,seq__16184__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__16169_SHARP_){
return cljs.spec.deriv.call(null,p1__16169_SHARP_,x);
});})(G__16187,map__16179,map__16179__$1,p__$1,vec__16180,seq__16181,first__16182,seq__16181__$1,p0,pr,ps,vec__16183,seq__16184,first__16185,seq__16184__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__16187)){
return cljs.spec.alt2.call(null,cljs.spec.rep_STAR_.call(null,cljs.spec.deriv.call(null,p1,x),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))?cljs.spec.deriv.call(null,cljs.spec.rep_STAR_.call(null,p2,p2,cljs.spec.add_ret.call(null,p1,ret,null),splice,forms),x):null));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_describe = (function cljs$spec$op_describe(p){
var map__16191 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__16191__$1 = ((((!((map__16191 == null)))?((((map__16191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16191.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16191):map__16191);
var p__$1 = map__16191__$1;
var op = cljs.core.get.call(null,map__16191__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__16191__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__16191__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__16191__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__16191__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__16191__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var rep_PLUS_ = cljs.core.get.call(null,map__16191__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__16191__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
if(cljs.core.truth_(p__$1)){
var G__16193 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__16193)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__16193)){
return p__$1;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__16193)){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("clojure.spec","&","clojure.spec/&",-770935491,null),cljs.spec.op_describe.call(null,p1),forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__16193)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core._conj.call(null,(function (){var x__12754__auto__ = rep_PLUS_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__12754__auto__);
})(),new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),cljs.core.mapcat.call(null,cljs.core.vector,(function (){var or__11820__auto__ = cljs.core.seq.call(null,ks);
if(or__11820__auto__){
return or__11820__auto__;
} else {
return cljs.core.repeat.call(null,new cljs.core.Keyword(null,"_","_",1453416199));
}
})(),forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__16193)){
if(cljs.core.truth_(maybe)){
return cljs.core._conj.call(null,(function (){var x__12754__auto__ = maybe;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__12754__auto__);
})(),new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","alt","cljs.spec/alt",157113396,null),cljs.core.mapcat.call(null,cljs.core.vector,ks,forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__16193)){
var x__12754__auto__ = (cljs.core.truth_(splice)?new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null):new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null));
return cljs.core._conj.call(null,(function (){var x__12754__auto____$1 = forms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__12754__auto____$1);
})(),x__12754__auto__);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_explain = (function cljs$spec$op_explain(form,p,path,via,in$,input){
var vec__16207 = input;
var x = cljs.core.nth.call(null,vec__16207,(0),null);
var input__$1 = vec__16207;
var map__16210 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__16210__$1 = ((((!((map__16210 == null)))?((((map__16210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16210.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16210):map__16210);
var p__$1 = map__16210__$1;
var op = cljs.core.get.call(null,map__16210__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__16210__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__16210__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__16210__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__16210__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__16210__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__16210__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var via__$1 = (function (){var temp__6501__auto__ = cljs.spec.spec_name.call(null,p__$1);
if(cljs.core.truth_(temp__6501__auto__)){
var name = temp__6501__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__16207,x,input__$1,map__16210,map__16210__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Insufficient input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form__$1),new cljs.core.Keyword(null,"val","val",128701612),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"via","via",-1904457336),via__$1,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
});})(vec__16207,x,input__$1,map__16210,map__16210__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__16212 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__16212)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__16212)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,form);
} else {
return cljs.spec.explain_1.call(null,form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__16212)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))){
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1));
} else {
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p1));
}
} else {
var temp__6501__auto__ = cljs.spec.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__6501__auto__)){
var p1__$1 = temp__6501__auto__;
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1__$1));
} else {
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p1),p1,path,via__$1,in$,input__$1);
}
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__16212)){
var pkfs = cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__11820__auto__ = cljs.core.seq.call(null,ks);
if(or__11820__auto__){
return or__11820__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__11820__auto__ = cljs.core.seq.call(null,forms);
if(or__11820__auto__){
return or__11820__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
var vec__16213 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,pkfs)))?cljs.core.first.call(null,pkfs):cljs.core.first.call(null,cljs.core.remove.call(null,((function (pkfs,G__16212,vec__16207,x,input__$1,map__16210,map__16210__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__16216){
var vec__16217 = p__16216;
var p__$2 = cljs.core.nth.call(null,vec__16217,(0),null);
return cljs.spec.accept_nil_QMARK_.call(null,p__$2);
});})(pkfs,G__16212,vec__16207,x,input__$1,map__16210,map__16210__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.call(null,vec__16213,(0),null);
var k = cljs.core.nth.call(null,vec__16213,(1),null);
var form__$1 = cljs.core.nth.call(null,vec__16213,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path);
var form__$2 = (function (){var or__11820__auto__ = form__$1;
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})();
if((cljs.core.empty_QMARK_.call(null,input__$1)) && (cljs.core.not.call(null,pred))){
return insufficient.call(null,path__$1,form__$2);
} else {
return cljs.spec.op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__16212)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p__$1));
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (G__16212,vec__16207,x,input__$1,map__16210,map__16210__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
return cljs.spec.op_explain.call(null,(function (){var or__11820__auto__ = form__$1;
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})(),pred,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),via__$1,in$,input__$1);
});})(G__16212,vec__16207,x,input__$1,map__16210,map__16210__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__11820__auto__ = cljs.core.seq.call(null,ks);
if(or__11820__auto__){
return or__11820__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__11820__auto__ = cljs.core.seq.call(null,forms);
if(or__11820__auto__){
return or__11820__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__16212)){
return cljs.spec.op_explain.call(null,(((p1 === p2))?forms:cljs.spec.op_describe.call(null,p1)),p1,path,via__$1,in$,input__$1);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.re_gen = (function cljs$spec$re_gen(p,overrides,path,rmap,f){
var map__16226 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__16226__$1 = ((((!((map__16226 == null)))?((((map__16226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16226.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16226):map__16226);
var p__$1 = map__16226__$1;
var ps = cljs.core.get.call(null,map__16226__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var forms = cljs.core.get.call(null,map__16226__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var p2 = cljs.core.get.call(null,map__16226__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__16226__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.call(null,map__16226__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ks = cljs.core.get.call(null,map__16226__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var p1 = cljs.core.get.call(null,map__16226__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var gfn = cljs.core.get.call(null,map__16226__$1,new cljs.core.Keyword("cljs.spec","gfn","cljs.spec/gfn",-432034727));
var id = cljs.core.get.call(null,map__16226__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var op = cljs.core.get.call(null,map__16226__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.inck.call(null,rmap,id):rmap);
var ggens = ((function (map__16226,map__16226__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__16226,map__16226__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__11808__auto__ = rmap__$1;
if(cljs.core.truth_(and__11808__auto__)){
var and__11808__auto____$1 = id;
if(cljs.core.truth_(and__11808__auto____$1)){
var and__11808__auto____$2 = k;
if(cljs.core.truth_(and__11808__auto____$2)){
return cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,path,k);
} else {
return and__11808__auto____$2;
}
} else {
return and__11808__auto____$1;
}
} else {
return and__11808__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (map__16226,map__16226__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (){
return cljs.spec.re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__11820__auto__ = f__$1;
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
return p__$2;
}
})());
});})(map__16226,map__16226__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
,null)));
} else {
return cljs.spec.re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__11820__auto__ = f__$1;
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
return p__$2;
}
})());
}
}
});})(map__16226,map__16226__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
;
return cljs.core.map.call(null,gen,ps__$1,(function (){var or__11820__auto__ = cljs.core.seq.call(null,ks__$1);
if(or__11820__auto__){
return or__11820__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__11820__auto__ = cljs.core.seq.call(null,forms__$1);
if(or__11820__auto__){
return or__11820__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
});})(map__16226,map__16226__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
;
var or__11820__auto__ = (function (){var temp__6503__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(temp__6503__auto__)){
var g = temp__6503__auto__;
var G__16229 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"accept","accept",1874130431),G__16229)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
if(cljs.core._EQ_.call(null,null,G__16229)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
var or__11820__auto____$1 = (cljs.core.truth_(gfn)?gfn.call(null):null);
if(cljs.core.truth_(or__11820__auto____$1)){
return or__11820__auto____$1;
} else {
if(cljs.core.truth_(p__$1)){
var G__16230 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__16230)){
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.spec.impl.gen.return$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null));
}
} else {
if(cljs.core._EQ_.call(null,null,G__16230)){
var temp__6503__auto__ = cljs.spec.gensub.call(null,p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__6503__auto__)){
var g = temp__6503__auto__;
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__16230)){
return cljs.spec.re_gen.call(null,p1,overrides,path,rmap__$1,cljs.spec.op_describe.call(null,p1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__16230)){
var gens = ggens.call(null,ps,ks,forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gens)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__16230)){
var gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,ggens.call(null,ps,ks,forms));
if(cljs.core.empty_QMARK_.call(null,gens)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gens);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__16230)){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
var temp__6503__auto__ = cljs.spec.re_gen.call(null,p2,overrides,path,rmap__$1,forms);
if(cljs.core.truth_(temp__6503__auto__)){
var g = temp__6503__auto__;
return cljs.spec.impl.gen.fmap.call(null,((function (g,temp__6503__auto__,G__16230,or__11820__auto____$1,or__11820__auto__,map__16226,map__16226__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1,ggens){
return (function (p1__16220_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__16220_SHARP_);
});})(g,temp__6503__auto__,G__16230,or__11820__auto____$1,or__11820__auto__,map__16226,map__16226__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1,ggens))
,cljs.spec.impl.gen.vector.call(null,g));
} else {
return null;
}
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
}
});
cljs.spec.re_conform = (function cljs$spec$re_conform(p,p__16231){
while(true){
var vec__16235 = p__16231;
var seq__16236 = cljs.core.seq.call(null,vec__16235);
var first__16237 = cljs.core.first.call(null,seq__16236);
var seq__16236__$1 = cljs.core.next.call(null,seq__16236);
var x = first__16237;
var xs = seq__16236__$1;
var data = vec__16235;
if(cljs.core.empty_QMARK_.call(null,data)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p))){
var ret = cljs.spec.preturn.call(null,p);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return null;
} else {
return ret;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
var temp__6501__auto__ = cljs.spec.deriv.call(null,p,x);
if(cljs.core.truth_(temp__6501__auto__)){
var dp = temp__6501__auto__;
var G__16238 = dp;
var G__16239 = xs;
p = G__16238;
p__16231 = G__16239;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
});
cljs.spec.re_explain = (function cljs$spec$re_explain(path,via,in$,re,input){
var p = re;
var G__16253 = input;
var vec__16254 = G__16253;
var seq__16255 = cljs.core.seq.call(null,vec__16254);
var first__16256 = cljs.core.first.call(null,seq__16255);
var seq__16255__$1 = cljs.core.next.call(null,seq__16255);
var x = first__16256;
var xs = seq__16255__$1;
var data = vec__16254;
var i = (0);
var p__$1 = p;
var G__16253__$1 = G__16253;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__16257 = G__16253__$1;
var seq__16258 = cljs.core.seq.call(null,vec__16257);
var first__16259 = cljs.core.first.call(null,seq__16258);
var seq__16258__$1 = cljs.core.next.call(null,seq__16258);
var x__$1 = first__16259;
var xs__$1 = seq__16258__$1;
var data__$1 = vec__16257;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_.call(null,data__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p__$2))){
return null;
} else {
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__6501__auto__ = cljs.spec.deriv.call(null,p__$2,x__$1);
if(cljs.core.truth_(temp__6501__auto__)){
var dp = temp__6501__auto__;
var G__16260 = dp;
var G__16261 = xs__$1;
var G__16262 = (i__$2 + (1));
p__$1 = G__16260;
G__16253__$1 = G__16261;
i__$1 = G__16262;
continue;
} else {
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p__$2))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p__$2),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649))){
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,re)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
} else {
var or__11820__auto__ = cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,p__$2)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.regex_spec_impl = (function cljs$spec$regex_spec_impl(re,gfn){
if(typeof cljs.spec.t_cljs$spec16266 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec16266 = (function (re,gfn,meta16267){
this.re = re;
this.gfn = gfn;
this.meta16267 = meta16267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec16266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16268,meta16267__$1){
var self__ = this;
var _16268__$1 = this;
return (new cljs.spec.t_cljs$spec16266(self__.re,self__.gfn,meta16267__$1));
});

cljs.spec.t_cljs$spec16266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16268){
var self__ = this;
var _16268__$1 = this;
return self__.meta16267;
});

cljs.spec.t_cljs$spec16266.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec16266.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.t_cljs$spec16266.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.t_cljs$spec16266.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec16266.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_conform.call(null,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});

cljs.spec.t_cljs$spec16266.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_unform.call(null,self__.re,x);
});

cljs.spec.t_cljs$spec16266.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_explain.call(null,path,via,in$,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,self__.re)),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});

cljs.spec.t_cljs$spec16266.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.re_gen.call(null,self__.re,overrides,path,rmap,cljs.spec.op_describe.call(null,self__.re));
}
});

cljs.spec.t_cljs$spec16266.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.regex_spec_impl.call(null,self__.re,gfn__$1);
});

cljs.spec.t_cljs$spec16266.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_describe.call(null,self__.re);
});

cljs.spec.t_cljs$spec16266.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta16267","meta16267",-1181334795,null)], null);
});

cljs.spec.t_cljs$spec16266.cljs$lang$type = true;

cljs.spec.t_cljs$spec16266.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec16266";

cljs.spec.t_cljs$spec16266.cljs$lang$ctorPrWriter = (function (this__12477__auto__,writer__12478__auto__,opt__12479__auto__){
return cljs.core._write.call(null,writer__12478__auto__,"cljs.spec/t_cljs$spec16266");
});

cljs.spec.__GT_t_cljs$spec16266 = (function cljs$spec$regex_spec_impl_$___GT_t_cljs$spec16266(re__$1,gfn__$1,meta16267){
return (new cljs.spec.t_cljs$spec16266(re__$1,gfn__$1,meta16267));
});

}

return (new cljs.spec.t_cljs$spec16266(re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.call_valid_QMARK_ = (function cljs$spec$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,cargs))){
return null;
} else {
var ret = cljs.core.apply.call(null,f,args);
var cret = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__11808__auto__ = cljs.core.not.call(null,cljs.spec.invalid_QMARK_.call(null,cret));
if(and__11808__auto__){
if(cljs.core.truth_(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.pvalid_QMARK_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return true;
}
} else {
return and__11808__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.validate_fn = (function cljs$spec$validate_fn(f,specs,iters){
var g = cljs.spec.gen.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.impl.gen.for_all_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
return (function (p1__16269_SHARP_){
return cljs.spec.call_valid_QMARK_.call(null,f,specs,p1__16269_SHARP_);
});})(g))
);
var ret = cljs.spec.impl.gen.quick_check.call(null,iters,prop);
var temp__6501__auto__ = new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__6501__auto__)){
var vec__16273 = temp__6501__auto__;
var smallest = cljs.core.nth.call(null,vec__16273,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.fspec_impl = (function cljs$spec$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),argspec,new cljs.core.Keyword(null,"ret","ret",-468222814),retspec,new cljs.core.Keyword(null,"fn","fn",-1175266204),fnspec], null);
if(typeof cljs.spec.t_cljs$spec16282 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.t_cljs$spec16282 = (function (argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta16283){
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta16283 = meta16283;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec16282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_16284,meta16283__$1){
var self__ = this;
var _16284__$1 = this;
return (new cljs.spec.t_cljs$spec16282(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta16283__$1));
});})(specs))
;

cljs.spec.t_cljs$spec16282.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_16284){
var self__ = this;
var _16284__$1 = this;
return self__.meta16283;
});})(specs))
;

cljs.spec.t_cljs$spec16282.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,self__.specs,k);
});})(specs))
;

cljs.spec.t_cljs$spec16282.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.specs,k,not_found);
});})(specs))
;

cljs.spec.t_cljs$spec16282.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec16282.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (specs){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

cljs.spec.t_cljs$spec16282.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (specs){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

cljs.spec.t_cljs$spec16282.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec16282.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
if((f === cljs.spec.validate_fn.call(null,f,self__.specs,cljs.spec._STAR_fspec_iterations_STAR_))){
return f;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(specs))
;

cljs.spec.t_cljs$spec16282.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;

cljs.spec.t_cljs$spec16282.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
var args = cljs.spec.validate_fn.call(null,f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.call(null,f,args);
}catch (e16285){if((e16285 instanceof Error)){
var t = e16285;
return t;
} else {
throw e16285;

}
}})();
if((ret instanceof Error)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"fn","fn",465265323,null)),new cljs.core.Keyword(null,"val","val",128701612),args,new cljs.core.Keyword(null,"reason","reason",-2070751759),ret.message,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var cret = cljs.spec.dt.call(null,self__.retspec,ret,self__.rform);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,cret))){
return cljs.spec.explain_1.call(null,self__.rform,self__.retspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"ret","ret",-468222814)),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.conform.call(null,self__.argspec,args);
return cljs.spec.explain_1.call(null,self__.fform,self__.fnspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"fn","fn",-1175266204)),via,in$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return null;
}
}
}
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Keyword(null,"val","val",128701612),f,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(specs))
;

cljs.spec.t_cljs$spec16282.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,overrides,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.return$.call(null,((function (___$3,specs){
return (function() { 
var G__16288__delegate = function (args){
if(cljs.core.truth_(cljs.spec.pvalid_QMARK_.call(null,self__.argspec,args))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__12912__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_16286_16289 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_16287_16290 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_16286_16289,_STAR_print_fn_STAR_16287_16290,sb__12912__auto__,___$3,specs){
return (function (x__12913__auto__){
return sb__12912__auto__.append(x__12913__auto__);
});})(_STAR_print_newline_STAR_16286_16289,_STAR_print_fn_STAR_16287_16290,sb__12912__auto__,___$3,specs))
;

try{cljs.spec.explain.call(null,self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_16287_16290;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_16286_16289;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__12912__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(pvalid? argspec args)")].join('')));
}

return cljs.spec.impl.gen.generate.call(null,cljs.spec.gen.call(null,self__.retspec,overrides));
};
var G__16288 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16291__i = 0, G__16291__a = new Array(arguments.length -  0);
while (G__16291__i < G__16291__a.length) {G__16291__a[G__16291__i] = arguments[G__16291__i + 0]; ++G__16291__i;}
  args = new cljs.core.IndexedSeq(G__16291__a,0);
} 
return G__16288__delegate.call(this,args);};
G__16288.cljs$lang$maxFixedArity = 0;
G__16288.cljs$lang$applyTo = (function (arglist__16292){
var args = cljs.core.seq(arglist__16292);
return G__16288__delegate(args);
});
G__16288.cljs$core$IFn$_invoke$arity$variadic = G__16288__delegate;
return G__16288;
})()
;})(___$3,specs))
);
}
});})(specs))
;

cljs.spec.t_cljs$spec16282.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1);
});})(specs))
;

cljs.spec.t_cljs$spec16282.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"args","args",1315556576)),(function (){var x__12754__auto__ = self__.aform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__12754__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ret","ret",-468222814)),(function (){var x__12754__auto__ = self__.rform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__12754__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fn","fn",-1175266204)),(function (){var x__12754__auto__ = self__.fform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__12754__auto__);
})())));
});})(specs))
;

cljs.spec.t_cljs$spec16282.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"meta16283","meta16283",594005947,null)], null);
});})(specs))
;

cljs.spec.t_cljs$spec16282.cljs$lang$type = true;

cljs.spec.t_cljs$spec16282.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec16282";

cljs.spec.t_cljs$spec16282.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__12477__auto__,writer__12478__auto__,opt__12479__auto__){
return cljs.core._write.call(null,writer__12478__auto__,"cljs.spec/t_cljs$spec16282");
});})(specs))
;

cljs.spec.__GT_t_cljs$spec16282 = ((function (specs){
return (function cljs$spec$fspec_impl_$___GT_t_cljs$spec16282(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta16283){
return (new cljs.spec.t_cljs$spec16282(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta16283));
});})(specs))
;

}

return (new cljs.spec.t_cljs$spec16282(argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.def_impl.call(null,new cljs.core.Keyword("cljs.spec","kvs->map","cljs.spec/kvs->map",-1189105441),cljs.core.list(new cljs.core.Symbol("cljs.spec","conformer","cljs.spec/conformer",-236330417,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__16293#","p1__16293#",909952747,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__16293#","p1__16293#",909952747,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__16293#","p1__16293#",909952747,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__16294#","p1__16294#",-707814010,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"p1__16294#","p1__16294#",-707814010,null)))),cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec","conformer","cljs.spec/conformer",-236330417,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"%","%",-950237169,null)))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__16293_SHARP_){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),p1__16293_SHARP_),cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),p1__16293_SHARP_));
}),null,true,(function (p1__16294_SHARP_){
return cljs.core.map.call(null,(function (p__16295){
var vec__16296 = p__16295;
var k = cljs.core.nth.call(null,vec__16296,(0),null);
var v = cljs.core.nth.call(null,vec__16296,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),k,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),v], null);
}),p1__16294_SHARP_);
})));
/**
 * takes a spec and returns a spec that has the same properties except
 *   'conform' returns the original (not the conformed) value. Note, will specize regex ops.
 */
cljs.spec.nonconforming = (function cljs$spec$nonconforming(spec){
var spec__$1 = cljs.spec.specize.call(null,spec);
if(typeof cljs.spec.t_cljs$spec16302 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec16302 = (function (spec,meta16303){
this.spec = spec;
this.meta16303 = meta16303;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec16302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec__$1){
return (function (_16304,meta16303__$1){
var self__ = this;
var _16304__$1 = this;
return (new cljs.spec.t_cljs$spec16302(self__.spec,meta16303__$1));
});})(spec__$1))
;

cljs.spec.t_cljs$spec16302.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec__$1){
return (function (_16304){
var self__ = this;
var _16304__$1 = this;
return self__.meta16303;
});})(spec__$1))
;

cljs.spec.t_cljs$spec16302.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec16302.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (spec__$1){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

cljs.spec.t_cljs$spec16302.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (spec__$1){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

cljs.spec.t_cljs$spec16302.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec16302.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (spec__$1){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = cljs.spec.conform_STAR_.call(null,self__.spec,x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
return x;
}
});})(spec__$1))
;

cljs.spec.t_cljs$spec16302.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (spec__$1){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.unform_STAR_.call(null,self__.spec,x);
});})(spec__$1))
;

cljs.spec.t_cljs$spec16302.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (spec__$1){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.explain_STAR_.call(null,self__.spec,path,via,in$,x);
});})(spec__$1))
;

cljs.spec.t_cljs$spec16302.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (spec__$1){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
return cljs.spec.gen_STAR_.call(null,self__.spec,overrides,path,rmap);
});})(spec__$1))
;

cljs.spec.t_cljs$spec16302.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (spec__$1){
return (function (_,gfn){
var self__ = this;
var ___$1 = this;
return cljs.spec.nonconforming.call(null,cljs.spec.with_gen_STAR_.call(null,self__.spec,gfn));
});})(spec__$1))
;

cljs.spec.t_cljs$spec16302.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (spec__$1){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","nonconforming","cljs.spec/nonconforming",1245350756,null)),(function (){var x__12754__auto__ = cljs.spec.describe_STAR_.call(null,self__.spec);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__12754__auto__);
})())));
});})(spec__$1))
;

cljs.spec.t_cljs$spec16302.getBasis = ((function (spec__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"meta16303","meta16303",-2088955733,null)], null);
});})(spec__$1))
;

cljs.spec.t_cljs$spec16302.cljs$lang$type = true;

cljs.spec.t_cljs$spec16302.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec16302";

cljs.spec.t_cljs$spec16302.cljs$lang$ctorPrWriter = ((function (spec__$1){
return (function (this__12477__auto__,writer__12478__auto__,opt__12479__auto__){
return cljs.core._write.call(null,writer__12478__auto__,"cljs.spec/t_cljs$spec16302");
});})(spec__$1))
;

cljs.spec.__GT_t_cljs$spec16302 = ((function (spec__$1){
return (function cljs$spec$nonconforming_$___GT_t_cljs$spec16302(spec__$2,meta16303){
return (new cljs.spec.t_cljs$spec16302(spec__$2,meta16303));
});})(spec__$1))
;

}

return (new cljs.spec.t_cljs$spec16302(spec__$1,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'nilable'
 */
cljs.spec.nilable_impl = (function cljs$spec$nilable_impl(form,pred,gfn){
var spec = cljs.spec.specize.call(null,pred,form);
if(typeof cljs.spec.t_cljs$spec16308 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec16308 = (function (form,pred,gfn,spec,meta16309){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.spec = spec;
this.meta16309 = meta16309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec16308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec){
return (function (_16310,meta16309__$1){
var self__ = this;
var _16310__$1 = this;
return (new cljs.spec.t_cljs$spec16308(self__.form,self__.pred,self__.gfn,self__.spec,meta16309__$1));
});})(spec))
;

cljs.spec.t_cljs$spec16308.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec){
return (function (_16310){
var self__ = this;
var _16310__$1 = this;
return self__.meta16309;
});})(spec))
;

cljs.spec.t_cljs$spec16308.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec16308.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (spec){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

cljs.spec.t_cljs$spec16308.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (spec){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

cljs.spec.t_cljs$spec16308.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec16308.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (spec){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.conform_STAR_.call(null,self__.spec,x);
}
});})(spec))
;

cljs.spec.t_cljs$spec16308.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (spec){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.unform_STAR_.call(null,self__.spec,x);
}
});})(spec))
;

cljs.spec.t_cljs$spec16308.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (spec){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var or__11820__auto__ = cljs.spec.pvalid_QMARK_.call(null,self__.spec,x);
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
return (x == null);
}
})())){
return null;
} else {
return cljs.core.conj.call(null,cljs.spec.explain_1.call(null,self__.form,self__.pred,cljs.core.conj.call(null,path,new cljs.core.Keyword("cljs.spec","pred","cljs.spec/pred",1523333614)),via,in$,x),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.call(null,path,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718)),new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
}
});})(spec))
;

cljs.spec.t_cljs$spec16308.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (spec){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.frequency.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.impl.gen.return$.call(null,null);
});})(___$1,spec))
,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.gensub.call(null,self__.pred,overrides,cljs.core.conj.call(null,path,new cljs.core.Keyword("cljs.spec","pred","cljs.spec/pred",1523333614)),rmap,self__.form);
});})(___$1,spec))
,null)))], null)], null));
}
});})(spec))
;

cljs.spec.t_cljs$spec16308.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (spec){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.nilable_impl.call(null,self__.form,self__.pred,gfn__$1);
});})(spec))
;

cljs.spec.t_cljs$spec16308.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (spec){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","nilable","cljs.spec/nilable",-139722052,null)),(function (){var x__12754__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__12754__auto__);
})())));
});})(spec))
;

cljs.spec.t_cljs$spec16308.getBasis = ((function (spec){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"meta16309","meta16309",1481143567,null)], null);
});})(spec))
;

cljs.spec.t_cljs$spec16308.cljs$lang$type = true;

cljs.spec.t_cljs$spec16308.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec16308";

cljs.spec.t_cljs$spec16308.cljs$lang$ctorPrWriter = ((function (spec){
return (function (this__12477__auto__,writer__12478__auto__,opt__12479__auto__){
return cljs.core._write.call(null,writer__12478__auto__,"cljs.spec/t_cljs$spec16308");
});})(spec))
;

cljs.spec.__GT_t_cljs$spec16308 = ((function (spec){
return (function cljs$spec$nilable_impl_$___GT_t_cljs$spec16308(form__$1,pred__$1,gfn__$1,spec__$1,meta16309){
return (new cljs.spec.t_cljs$spec16308(form__$1,pred__$1,gfn__$1,spec__$1,meta16309));
});})(spec))
;

}

return (new cljs.spec.t_cljs$spec16308(form,pred,gfn,spec,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.exercise = (function cljs$spec$exercise(var_args){
var args16312 = [];
var len__13041__auto___16315 = arguments.length;
var i__13042__auto___16316 = (0);
while(true){
if((i__13042__auto___16316 < len__13041__auto___16315)){
args16312.push((arguments[i__13042__auto___16316]));

var G__16317 = (i__13042__auto___16316 + (1));
i__13042__auto___16316 = G__16317;
continue;
} else {
}
break;
}

var G__16314 = args16312.length;
switch (G__16314) {
case 1:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16312.length)].join('')));

}
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.exercise.call(null,spec,(10));
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.exercise.call(null,spec,n,null);
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.call(null,(function (p1__16311_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__16311_SHARP_,cljs.spec.conform.call(null,spec,p1__16311_SHARP_)],null));
}),cljs.spec.impl.gen.sample.call(null,cljs.spec.gen.call(null,spec,overrides),n));
});

cljs.spec.exercise.cljs$lang$maxFixedArity = 3;

/**
 * Return true if inst at or after start and before end
 */
cljs.spec.inst_in_range_QMARK_ = (function cljs$spec$inst_in_range_QMARK_(start,end,inst){
var and__11808__auto__ = cljs.core.inst_QMARK_.call(null,inst);
if(and__11808__auto__){
var t = cljs.core.inst_ms.call(null,inst);
return ((cljs.core.inst_ms.call(null,start) <= t)) && ((t < cljs.core.inst_ms.call(null,end)));
} else {
return and__11808__auto__;
}
});
/**
 * Return true if start <= val and val < end
 */
cljs.spec.int_in_range_QMARK_ = (function cljs$spec$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_.call(null,val)){
return ((start <= val)) && ((val < end));
} else {
if((val instanceof goog.math.Long)){
var and__11808__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__11808__auto__)){
return val.lessThan(end);
} else {
return and__11808__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__11808__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__11808__auto__)){
return val.lessThan(end);
} else {
return and__11808__auto__;
}
} else {
return false;

}
}
}
});
if(typeof cljs.spec._STAR_compile_asserts_STAR_ !== 'undefined'){
} else {
/**
 * If true, compiler will enable spec asserts, which are then
 * subject to runtime control via check-asserts? If false, compiler
 * will eliminate all spec assert overhead. See 'assert'.
 * Initially set to the negation of the ':elide-asserts' compiler option.
 * Defaults to true.
 */
cljs.spec._STAR_compile_asserts_STAR_ = true;
}
if(typeof cljs.spec._STAR_runtime_asserts_STAR_ !== 'undefined'){
} else {
cljs.spec._STAR_runtime_asserts_STAR_ = false;
}
/**
 * Returns the value set by check-asserts.
 */
cljs.spec.check_asserts_QMARK_ = (function cljs$spec$check_asserts_QMARK_(){
return cljs.spec._STAR_runtime_asserts_STAR_;
});
/**
 * Enable or disable spec asserts that have been compiled
 * with '*compile-asserts*' true.  See 'assert'.
 * Initially set to boolean value of cljs.spec/*runtime-asserts*.
 * Defaults to false.
 */
cljs.spec.check_asserts = (function cljs$spec$check_asserts(flag){
return cljs.spec._STAR_runtime_asserts_STAR_ = flag;
});
/**
 * Do not call this directly, use 'assert'.
 */
cljs.spec.assert_STAR_ = (function cljs$spec$assert_STAR_(spec,x){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,spec,x))){
return x;
} else {
var ed = cljs.core.merge.call(null,cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,x),new cljs.core.Keyword("cljs.spec","failure","cljs.spec/failure",1931120592),new cljs.core.Keyword(null,"assertion-failed","assertion-failed",-970534477)));
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Spec assertion failed\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__12912__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_16321_16323 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_16322_16324 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_16321_16323,_STAR_print_fn_STAR_16322_16324,sb__12912__auto__,ed){
return (function (x__12913__auto__){
return sb__12912__auto__.append(x__12913__auto__);
});})(_STAR_print_newline_STAR_16321_16323,_STAR_print_fn_STAR_16322_16324,sb__12912__auto__,ed))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_16322_16324;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_16321_16323;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__12912__auto__)].join('');
})())].join('')));
}
});

//# sourceMappingURL=spec.js.map