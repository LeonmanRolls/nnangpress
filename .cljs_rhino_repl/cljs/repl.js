// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__12801){
var map__12826 = p__12801;
var map__12826__$1 = ((((!((map__12826 == null)))?((((map__12826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12826.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12826):map__12826);
var m = map__12826__$1;
var n = cljs.core.get.call(null,map__12826__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__12826__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12828_12850 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12829_12851 = null;
var count__12830_12852 = (0);
var i__12831_12853 = (0);
while(true){
if((i__12831_12853 < count__12830_12852)){
var f_12854 = cljs.core._nth.call(null,chunk__12829_12851,i__12831_12853);
cljs.core.println.call(null,"  ",f_12854);

var G__12855 = seq__12828_12850;
var G__12856 = chunk__12829_12851;
var G__12857 = count__12830_12852;
var G__12858 = (i__12831_12853 + (1));
seq__12828_12850 = G__12855;
chunk__12829_12851 = G__12856;
count__12830_12852 = G__12857;
i__12831_12853 = G__12858;
continue;
} else {
var temp__4657__auto___12859 = cljs.core.seq.call(null,seq__12828_12850);
if(temp__4657__auto___12859){
var seq__12828_12860__$1 = temp__4657__auto___12859;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12828_12860__$1)){
var c__10676__auto___12861 = cljs.core.chunk_first.call(null,seq__12828_12860__$1);
var G__12862 = cljs.core.chunk_rest.call(null,seq__12828_12860__$1);
var G__12863 = c__10676__auto___12861;
var G__12864 = cljs.core.count.call(null,c__10676__auto___12861);
var G__12865 = (0);
seq__12828_12850 = G__12862;
chunk__12829_12851 = G__12863;
count__12830_12852 = G__12864;
i__12831_12853 = G__12865;
continue;
} else {
var f_12866 = cljs.core.first.call(null,seq__12828_12860__$1);
cljs.core.println.call(null,"  ",f_12866);

var G__12867 = cljs.core.next.call(null,seq__12828_12860__$1);
var G__12868 = null;
var G__12869 = (0);
var G__12870 = (0);
seq__12828_12850 = G__12867;
chunk__12829_12851 = G__12868;
count__12830_12852 = G__12869;
i__12831_12853 = G__12870;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12871 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__9862__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__9862__auto__)){
return or__9862__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_12871);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_12871)))?cljs.core.second.call(null,arglists_12871):arglists_12871));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__12832_12872 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12833_12873 = null;
var count__12834_12874 = (0);
var i__12835_12875 = (0);
while(true){
if((i__12835_12875 < count__12834_12874)){
var vec__12836_12876 = cljs.core._nth.call(null,chunk__12833_12873,i__12835_12875);
var name_12877 = cljs.core.nth.call(null,vec__12836_12876,(0),null);
var map__12839_12878 = cljs.core.nth.call(null,vec__12836_12876,(1),null);
var map__12839_12879__$1 = ((((!((map__12839_12878 == null)))?((((map__12839_12878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12839_12878.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12839_12878):map__12839_12878);
var doc_12880 = cljs.core.get.call(null,map__12839_12879__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12881 = cljs.core.get.call(null,map__12839_12879__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12877);

cljs.core.println.call(null," ",arglists_12881);

if(cljs.core.truth_(doc_12880)){
cljs.core.println.call(null," ",doc_12880);
} else {
}

var G__12882 = seq__12832_12872;
var G__12883 = chunk__12833_12873;
var G__12884 = count__12834_12874;
var G__12885 = (i__12835_12875 + (1));
seq__12832_12872 = G__12882;
chunk__12833_12873 = G__12883;
count__12834_12874 = G__12884;
i__12835_12875 = G__12885;
continue;
} else {
var temp__4657__auto___12886 = cljs.core.seq.call(null,seq__12832_12872);
if(temp__4657__auto___12886){
var seq__12832_12887__$1 = temp__4657__auto___12886;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12832_12887__$1)){
var c__10676__auto___12888 = cljs.core.chunk_first.call(null,seq__12832_12887__$1);
var G__12889 = cljs.core.chunk_rest.call(null,seq__12832_12887__$1);
var G__12890 = c__10676__auto___12888;
var G__12891 = cljs.core.count.call(null,c__10676__auto___12888);
var G__12892 = (0);
seq__12832_12872 = G__12889;
chunk__12833_12873 = G__12890;
count__12834_12874 = G__12891;
i__12835_12875 = G__12892;
continue;
} else {
var vec__12841_12893 = cljs.core.first.call(null,seq__12832_12887__$1);
var name_12894 = cljs.core.nth.call(null,vec__12841_12893,(0),null);
var map__12844_12895 = cljs.core.nth.call(null,vec__12841_12893,(1),null);
var map__12844_12896__$1 = ((((!((map__12844_12895 == null)))?((((map__12844_12895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12844_12895.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12844_12895):map__12844_12895);
var doc_12897 = cljs.core.get.call(null,map__12844_12896__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12898 = cljs.core.get.call(null,map__12844_12896__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12894);

cljs.core.println.call(null," ",arglists_12898);

if(cljs.core.truth_(doc_12897)){
cljs.core.println.call(null," ",doc_12897);
} else {
}

var G__12899 = cljs.core.next.call(null,seq__12832_12887__$1);
var G__12900 = null;
var G__12901 = (0);
var G__12902 = (0);
seq__12832_12872 = G__12899;
chunk__12833_12873 = G__12900;
count__12834_12874 = G__12901;
i__12835_12875 = G__12902;
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
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__12846 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__12847 = null;
var count__12848 = (0);
var i__12849 = (0);
while(true){
if((i__12849 < count__12848)){
var role = cljs.core._nth.call(null,chunk__12847,i__12849);
var temp__4657__auto___12903__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12903__$1)){
var spec_12904 = temp__4657__auto___12903__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_12904));
} else {
}

var G__12905 = seq__12846;
var G__12906 = chunk__12847;
var G__12907 = count__12848;
var G__12908 = (i__12849 + (1));
seq__12846 = G__12905;
chunk__12847 = G__12906;
count__12848 = G__12907;
i__12849 = G__12908;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__12846);
if(temp__4657__auto____$1){
var seq__12846__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12846__$1)){
var c__10676__auto__ = cljs.core.chunk_first.call(null,seq__12846__$1);
var G__12909 = cljs.core.chunk_rest.call(null,seq__12846__$1);
var G__12910 = c__10676__auto__;
var G__12911 = cljs.core.count.call(null,c__10676__auto__);
var G__12912 = (0);
seq__12846 = G__12909;
chunk__12847 = G__12910;
count__12848 = G__12911;
i__12849 = G__12912;
continue;
} else {
var role = cljs.core.first.call(null,seq__12846__$1);
var temp__4657__auto___12913__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12913__$2)){
var spec_12914 = temp__4657__auto___12913__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_12914));
} else {
}

var G__12915 = cljs.core.next.call(null,seq__12846__$1);
var G__12916 = null;
var G__12917 = (0);
var G__12918 = (0);
seq__12846 = G__12915;
chunk__12847 = G__12916;
count__12848 = G__12917;
i__12849 = G__12918;
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