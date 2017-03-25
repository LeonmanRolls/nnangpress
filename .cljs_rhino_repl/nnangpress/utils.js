// Compiled by ClojureScript 1.9.293 {}
goog.provide('nnangpress.utils');
goog.require('cljs.core');
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
var G__16325 = (i + (1));
i = G__16325;
continue;

}
}
break;
}
});
nnangpress.utils.tree_seq_path = (function nnangpress$utils$tree_seq_path(var_args){
var args__10977__auto__ = [];
var len__10970__auto___16334 = arguments.length;
var i__10971__auto___16335 = (0);
while(true){
if((i__10971__auto___16335 < len__10970__auto___16334)){
args__10977__auto__.push((arguments[i__10971__auto___16335]));

var G__16336 = (i__10971__auto___16335 + (1));
i__10971__auto___16335 = G__16336;
continue;
} else {
}
break;
}

var argseq__10978__auto__ = ((((3) < args__10977__auto__.length))?(new cljs.core.IndexedSeq(args__10977__auto__.slice((3)),(0),null)):null);
return nnangpress.utils.tree_seq_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10978__auto__);
});

nnangpress.utils.tree_seq_path.cljs$core$IFn$_invoke$arity$variadic = (function (branch_QMARK_,children,root,p__16330){
var vec__16331 = p__16330;
var node_fn = cljs.core.nth.call(null,vec__16331,(0),null);
var node_fn__$1 = (function (){var or__9862__auto__ = node_fn;
if(cljs.core.truth_(or__9862__auto__)){
return or__9862__auto__;
} else {
return cljs.core.identity;
}
})();
var walk = ((function (node_fn__$1,vec__16331,node_fn){
return (function nnangpress$utils$walk(path,node){
var new_path = cljs.core.conj.call(null,path,node_fn__$1.call(null,node));
return (new cljs.core.LazySeq(null,((function (new_path,node_fn__$1,vec__16331,node_fn){
return (function (){
return cljs.core.cons.call(null,new_path,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,cljs.core.partial.call(null,nnangpress$utils$walk,new_path),children.call(null,node)):null));
});})(new_path,node_fn__$1,vec__16331,node_fn))
,null,null));
});})(node_fn__$1,vec__16331,node_fn))
;
return walk.call(null,cljs.core.PersistentVector.EMPTY,root);
});

nnangpress.utils.tree_seq_path.cljs$lang$maxFixedArity = (3);

nnangpress.utils.tree_seq_path.cljs$lang$applyTo = (function (seq16326){
var G__16327 = cljs.core.first.call(null,seq16326);
var seq16326__$1 = cljs.core.next.call(null,seq16326);
var G__16328 = cljs.core.first.call(null,seq16326__$1);
var seq16326__$2 = cljs.core.next.call(null,seq16326__$1);
var G__16329 = cljs.core.first.call(null,seq16326__$2);
var seq16326__$3 = cljs.core.next.call(null,seq16326__$2);
return nnangpress.utils.tree_seq_path.cljs$core$IFn$_invoke$arity$variadic(G__16327,G__16328,G__16329,seq16326__$3);
});

nnangpress.utils.string_contains_QMARK_ = (function nnangpress$utils$string_contains_QMARK_(x,y){
return cljs.core.not_EQ_.call(null,(-1),x.indexOf(y));
});
/**
 * remove elem in coll
 */
nnangpress.utils.vec_remove = (function nnangpress$utils$vec_remove(coll,pos){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,coll,(0),pos),cljs.core.subvec.call(null,coll,(pos + (1)))));
});
nnangpress.utils.uid = (function nnangpress$utils$uid(){
return cljs.core.random_uuid.call(null).toString();
});

//# sourceMappingURL=utils.js.map