// Compiled by ClojureScript 1.9.293 {}
goog.provide('nnangpress.repl');
goog.require('cljs.core');
goog.require('nnangpress.monolith');
goog.require('cljs.reader');
nnangpress.repl.new_route = (function nnangpress$repl$new_route(route,data){
return firebase.database().ref(route).set(data);
});
nnangpress.repl.save_user_monolith = (function nnangpress$repl$save_user_monolith(){
var uid = "testing";
var user_data_ref = firebase.database().ref([cljs.core.str("users/"),cljs.core.str(uid)].join(''));
return user_data_ref.set(({"username": "wellwell", "email": "leon.talbert@gmail.com", "data": cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,nnangpress.monolith.monolith),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)}));
});
nnangpress.repl.load_data = (function nnangpress$repl$load_data(route,callback){
return firebase.database().ref(route).once("value").then((function (snapshot){
return callback.call(null,snapshot.val());
}));
});

//# sourceMappingURL=repl.js.map