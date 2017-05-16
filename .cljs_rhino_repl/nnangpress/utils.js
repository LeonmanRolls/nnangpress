// Compiled by ClojureScript 1.9.521 {}
goog.provide('nnangpress.utils');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
/**
 * return the index of the supplied item, or nil
 */
nnangpress.utils.index_of = (function nnangpress$utils$index_of(v,item){
var len = cljs.core.count.call(null,v);
var i = (0);
while(true){
if((len <= i)){
return null;
} else {
if(cljs.core._EQ_.call(null,item,cljs.core.get.call(null,v,i))){
return i;
} else {
var G__28920 = (i + (1));
i = G__28920;
continue;

}
}
break;
}
});
nnangpress.utils.index_of_key_val = (function nnangpress$utils$index_of_key_val(s,key,val){
var idx = (0);
var items = s;
while(true){
if(cljs.core.empty_QMARK_.call(null,items)){
return null;
} else {
if(cljs.core._EQ_.call(null,val,key.call(null,cljs.core.first.call(null,items)))){
return idx;
} else {
var G__28921 = (idx + (1));
var G__28922 = cljs.core.rest.call(null,items);
idx = G__28921;
items = G__28922;
continue;

}
}
break;
}
});
nnangpress.utils.tree_seq_path = (function nnangpress$utils$tree_seq_path(var_args){
var args__13048__auto__ = [];
var len__13041__auto___28931 = arguments.length;
var i__13042__auto___28932 = (0);
while(true){
if((i__13042__auto___28932 < len__13041__auto___28931)){
args__13048__auto__.push((arguments[i__13042__auto___28932]));

var G__28933 = (i__13042__auto___28932 + (1));
i__13042__auto___28932 = G__28933;
continue;
} else {
}
break;
}

var argseq__13049__auto__ = ((((3) < args__13048__auto__.length))?(new cljs.core.IndexedSeq(args__13048__auto__.slice((3)),(0),null)):null);
return nnangpress.utils.tree_seq_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13049__auto__);
});

nnangpress.utils.tree_seq_path.cljs$core$IFn$_invoke$arity$variadic = (function (branch_QMARK_,children,root,p__28927){
var vec__28928 = p__28927;
var node_fn = cljs.core.nth.call(null,vec__28928,(0),null);
var node_fn__$1 = (function (){var or__11820__auto__ = node_fn;
if(cljs.core.truth_(or__11820__auto__)){
return or__11820__auto__;
} else {
return cljs.core.identity;
}
})();
var walk = ((function (node_fn__$1,vec__28928,node_fn){
return (function nnangpress$utils$walk(path,node){
var new_path = cljs.core.conj.call(null,path,node_fn__$1.call(null,node));
return (new cljs.core.LazySeq(null,((function (new_path,node_fn__$1,vec__28928,node_fn){
return (function (){
return cljs.core.cons.call(null,new_path,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,cljs.core.partial.call(null,nnangpress$utils$walk,new_path),children.call(null,node)):null));
});})(new_path,node_fn__$1,vec__28928,node_fn))
,null,null));
});})(node_fn__$1,vec__28928,node_fn))
;
return walk.call(null,cljs.core.PersistentVector.EMPTY,root);
});

nnangpress.utils.tree_seq_path.cljs$lang$maxFixedArity = (3);

nnangpress.utils.tree_seq_path.cljs$lang$applyTo = (function (seq28923){
var G__28924 = cljs.core.first.call(null,seq28923);
var seq28923__$1 = cljs.core.next.call(null,seq28923);
var G__28925 = cljs.core.first.call(null,seq28923__$1);
var seq28923__$2 = cljs.core.next.call(null,seq28923__$1);
var G__28926 = cljs.core.first.call(null,seq28923__$2);
var seq28923__$3 = cljs.core.next.call(null,seq28923__$2);
return nnangpress.utils.tree_seq_path.cljs$core$IFn$_invoke$arity$variadic(G__28924,G__28925,G__28926,seq28923__$3);
});

/**
 * Subject then thing you are searching for.
 */
nnangpress.utils.string_contains_QMARK_ = (function nnangpress$utils$string_contains_QMARK_(x,y){
return cljs.core.not_EQ_.call(null,(-1),x.indexOf(y));
});
/**
 * remove elem in coll
 */
nnangpress.utils.vec_remove = (function nnangpress$utils$vec_remove(coll,pos){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,coll,(0),pos),cljs.core.subvec.call(null,coll,(pos + (1)))));
});
/**
 * Random string with hyphens
 */
nnangpress.utils.uid = (function nnangpress$utils$uid(var_args){
var args28934 = [];
var len__13041__auto___28937 = arguments.length;
var i__13042__auto___28938 = (0);
while(true){
if((i__13042__auto___28938 < len__13041__auto___28937)){
args28934.push((arguments[i__13042__auto___28938]));

var G__28939 = (i__13042__auto___28938 + (1));
i__13042__auto___28938 = G__28939;
continue;
} else {
}
break;
}

var G__28936 = args28934.length;
switch (G__28936) {
case 0:
return nnangpress.utils.uid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return nnangpress.utils.uid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28934.length)].join('')));

}
});

nnangpress.utils.uid.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.random_uuid.call(null).toString();
});

nnangpress.utils.uid.cljs$core$IFn$_invoke$arity$1 = (function (length){
return cljs.core.subs.call(null,cljs.core.random_uuid.call(null).toString(),(0),length);
});

nnangpress.utils.uid.cljs$lang$maxFixedArity = 1;

/**
 * Swap two elements inside a vector
 */
nnangpress.utils.vec_swap = (function nnangpress$utils$vec_swap(v,i1,i2){
return cljs.core.assoc.call(null,v,i2,v.call(null,i1),i1,v.call(null,i2));
});
/**
 * Makes true false and false true. This too shall pass.
 */
nnangpress.utils.toggle = (function nnangpress$utils$toggle(bool){
return cljs.core.not.call(null,bool);
});
/**
 * Remove hyphens from a string, used in going from a route name to something displayable in navbar.
 */
nnangpress.utils.str_beautify = (function nnangpress$utils$str_beautify(s){
return clojure.string.replace.call(null,cljs.core.subs.call(null,s,(1)),/-/," ");
});
/**
 * Mainly for making a string storable as a route name.
 */
nnangpress.utils.str_uglify = (function nnangpress$utils$str_uglify(s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,s,/ /,"-"))].join('');
});
/**
 * 
 */
nnangpress.utils.atom_QMARK_ = (function nnangpress$utils$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
/**
 * This exists because core contains? only works on maps.
 */
nnangpress.utils.coll_contains_QMARK_ = (function nnangpress$utils$coll_contains_QMARK_(coll,x){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__28941_SHARP_){
return cljs.core._EQ_.call(null,x,p1__28941_SHARP_);
}),coll))){
return true;
} else {
return false;
}
});
nnangpress.utils.timeout = (function nnangpress$utils$timeout(ms){
var c = cljs.core.async.chan.call(null);
setTimeout(((function (c){
return (function (){
return cljs.core.async.close_BANG_.call(null,c);
});})(c))
,ms);

return c;
});

//# sourceMappingURL=utils.js.map