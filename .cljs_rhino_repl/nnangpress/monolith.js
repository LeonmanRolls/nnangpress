// Compiled by ClojureScript 1.9.293 {}
goog.provide('nnangpress.monolith');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('nnangpress.utils');
goog.require('clojure.zip');
nnangpress.monolith.monolith = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
nnangpress.monolith.monolith_watcher_init = (function nnangpress$monolith$monolith_watcher_init(monolith){
return cljs.core.add_watch.call(null,monolith,new cljs.core.Keyword(null,"watcher","watcher",2145165251),(function (key,atom,old_state,new_state){
var uid = "SGXvf26OEpeVDQ79XIH2V71fVnT2";
var user_data_ref = firebase.database().ref([cljs.core.str("users/"),cljs.core.str(uid)].join(''));
cljs.core.prn.call(null,"-- Atom Changed --");

return user_data_ref.set(({"username": "wellwell", "email": "leon.talbert@gmail.com", "data": cljs.core.pr_str.call(null,cljs.core.deref.call(null,monolith))}));
}));
});
nnangpress.monolith.current_route_map = (function nnangpress$monolith$current_route_map(route,routes_map){
var xs = cljs.core.rest.call(null,route);
var fxs = cljs.core.first.call(null,xs);
var idx = nnangpress.utils.index_of.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"route-name","route-name",-932603717),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(routes_map))),[cljs.core.str("/"),cljs.core.str(fxs)].join(''));
if(cljs.core.empty_QMARK_.call(null,xs)){
return routes_map;
} else {
return nnangpress.monolith.current_route_map.call(null,xs,cljs.core.get.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(routes_map),idx));

}
});
nnangpress.monolith.current_widgets = (function nnangpress$monolith$current_widgets(route,routes_map){
var xs = cljs.core.rest.call(null,route);
var fxs = cljs.core.first.call(null,xs);
var idx = nnangpress.utils.index_of.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"route-name","route-name",-932603717),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(routes_map))),[cljs.core.str("/"),cljs.core.str(fxs)].join(''));
if(cljs.core.empty_QMARK_.call(null,xs)){
return new cljs.core.Keyword(null,"widgets","widgets",-159098978).cljs$core$IFn$_invoke$arity$1(routes_map);
} else {
return nnangpress.monolith.current_widgets.call(null,xs,cljs.core.get.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(routes_map),idx));

}
});
nnangpress.monolith.ref_cursor_init = (function nnangpress$monolith$ref_cursor_init(monolith){
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

nnangpress.monolith.logo_text = (function nnangpress$monolith$ref_cursor_init_$_logo_text(){
return om.core.ref_cursor.call(null,new cljs.core.Keyword(null,"logo-text","logo-text",-580816517).cljs$core$IFn$_invoke$arity$1(om.core.root_cursor.call(null,monolith)));
});

return (
nnangpress.monolith.logo_hint = (function nnangpress$monolith$ref_cursor_init_$_logo_hint(){
return om.core.ref_cursor.call(null,new cljs.core.Keyword(null,"nav-hint","nav-hint",859950035).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"routes-map","routes-map",-676138881).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"route-widget","route-widget",1702261979).cljs$core$IFn$_invoke$arity$1(om.core.root_cursor.call(null,monolith)))));
}))
;
});

//# sourceMappingURL=monolith.js.map