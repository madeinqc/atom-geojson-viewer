// Compiled by ClojureScript 1.9.225 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__13419){
var map__13444 = p__13419;
var map__13444__$1 = ((((!((map__13444 == null)))?((((map__13444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13444):map__13444);
var m = map__13444__$1;
var n = cljs.core.get.call(null,map__13444__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__13444__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__13446_13468 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13447_13469 = null;
var count__13448_13470 = (0);
var i__13449_13471 = (0);
while(true){
if((i__13449_13471 < count__13448_13470)){
var f_13472 = cljs.core._nth.call(null,chunk__13447_13469,i__13449_13471);
cljs.core.println.call(null,"  ",f_13472);

var G__13473 = seq__13446_13468;
var G__13474 = chunk__13447_13469;
var G__13475 = count__13448_13470;
var G__13476 = (i__13449_13471 + (1));
seq__13446_13468 = G__13473;
chunk__13447_13469 = G__13474;
count__13448_13470 = G__13475;
i__13449_13471 = G__13476;
continue;
} else {
var temp__4657__auto___13477 = cljs.core.seq.call(null,seq__13446_13468);
if(temp__4657__auto___13477){
var seq__13446_13478__$1 = temp__4657__auto___13477;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13446_13478__$1)){
var c__9231__auto___13479 = cljs.core.chunk_first.call(null,seq__13446_13478__$1);
var G__13480 = cljs.core.chunk_rest.call(null,seq__13446_13478__$1);
var G__13481 = c__9231__auto___13479;
var G__13482 = cljs.core.count.call(null,c__9231__auto___13479);
var G__13483 = (0);
seq__13446_13468 = G__13480;
chunk__13447_13469 = G__13481;
count__13448_13470 = G__13482;
i__13449_13471 = G__13483;
continue;
} else {
var f_13484 = cljs.core.first.call(null,seq__13446_13478__$1);
cljs.core.println.call(null,"  ",f_13484);

var G__13485 = cljs.core.next.call(null,seq__13446_13478__$1);
var G__13486 = null;
var G__13487 = (0);
var G__13488 = (0);
seq__13446_13468 = G__13485;
chunk__13447_13469 = G__13486;
count__13448_13470 = G__13487;
i__13449_13471 = G__13488;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_13489 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__8420__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__8420__auto__)){
return or__8420__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_13489);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_13489)))?cljs.core.second.call(null,arglists_13489):arglists_13489));
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
var seq__13450_13490 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13451_13491 = null;
var count__13452_13492 = (0);
var i__13453_13493 = (0);
while(true){
if((i__13453_13493 < count__13452_13492)){
var vec__13454_13494 = cljs.core._nth.call(null,chunk__13451_13491,i__13453_13493);
var name_13495 = cljs.core.nth.call(null,vec__13454_13494,(0),null);
var map__13457_13496 = cljs.core.nth.call(null,vec__13454_13494,(1),null);
var map__13457_13497__$1 = ((((!((map__13457_13496 == null)))?((((map__13457_13496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13457_13496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13457_13496):map__13457_13496);
var doc_13498 = cljs.core.get.call(null,map__13457_13497__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13499 = cljs.core.get.call(null,map__13457_13497__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13495);

cljs.core.println.call(null," ",arglists_13499);

if(cljs.core.truth_(doc_13498)){
cljs.core.println.call(null," ",doc_13498);
} else {
}

var G__13500 = seq__13450_13490;
var G__13501 = chunk__13451_13491;
var G__13502 = count__13452_13492;
var G__13503 = (i__13453_13493 + (1));
seq__13450_13490 = G__13500;
chunk__13451_13491 = G__13501;
count__13452_13492 = G__13502;
i__13453_13493 = G__13503;
continue;
} else {
var temp__4657__auto___13504 = cljs.core.seq.call(null,seq__13450_13490);
if(temp__4657__auto___13504){
var seq__13450_13505__$1 = temp__4657__auto___13504;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13450_13505__$1)){
var c__9231__auto___13506 = cljs.core.chunk_first.call(null,seq__13450_13505__$1);
var G__13507 = cljs.core.chunk_rest.call(null,seq__13450_13505__$1);
var G__13508 = c__9231__auto___13506;
var G__13509 = cljs.core.count.call(null,c__9231__auto___13506);
var G__13510 = (0);
seq__13450_13490 = G__13507;
chunk__13451_13491 = G__13508;
count__13452_13492 = G__13509;
i__13453_13493 = G__13510;
continue;
} else {
var vec__13459_13511 = cljs.core.first.call(null,seq__13450_13505__$1);
var name_13512 = cljs.core.nth.call(null,vec__13459_13511,(0),null);
var map__13462_13513 = cljs.core.nth.call(null,vec__13459_13511,(1),null);
var map__13462_13514__$1 = ((((!((map__13462_13513 == null)))?((((map__13462_13513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13462_13513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13462_13513):map__13462_13513);
var doc_13515 = cljs.core.get.call(null,map__13462_13514__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13516 = cljs.core.get.call(null,map__13462_13514__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13512);

cljs.core.println.call(null," ",arglists_13516);

if(cljs.core.truth_(doc_13515)){
cljs.core.println.call(null," ",doc_13515);
} else {
}

var G__13517 = cljs.core.next.call(null,seq__13450_13505__$1);
var G__13518 = null;
var G__13519 = (0);
var G__13520 = (0);
seq__13450_13490 = G__13517;
chunk__13451_13491 = G__13518;
count__13452_13492 = G__13519;
i__13453_13493 = G__13520;
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

var seq__13464 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__13465 = null;
var count__13466 = (0);
var i__13467 = (0);
while(true){
if((i__13467 < count__13466)){
var role = cljs.core._nth.call(null,chunk__13465,i__13467);
var temp__4657__auto___13521__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___13521__$1)){
var spec_13522 = temp__4657__auto___13521__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_13522));
} else {
}

var G__13523 = seq__13464;
var G__13524 = chunk__13465;
var G__13525 = count__13466;
var G__13526 = (i__13467 + (1));
seq__13464 = G__13523;
chunk__13465 = G__13524;
count__13466 = G__13525;
i__13467 = G__13526;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__13464);
if(temp__4657__auto____$1){
var seq__13464__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13464__$1)){
var c__9231__auto__ = cljs.core.chunk_first.call(null,seq__13464__$1);
var G__13527 = cljs.core.chunk_rest.call(null,seq__13464__$1);
var G__13528 = c__9231__auto__;
var G__13529 = cljs.core.count.call(null,c__9231__auto__);
var G__13530 = (0);
seq__13464 = G__13527;
chunk__13465 = G__13528;
count__13466 = G__13529;
i__13467 = G__13530;
continue;
} else {
var role = cljs.core.first.call(null,seq__13464__$1);
var temp__4657__auto___13531__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___13531__$2)){
var spec_13532 = temp__4657__auto___13531__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_13532));
} else {
}

var G__13533 = cljs.core.next.call(null,seq__13464__$1);
var G__13534 = null;
var G__13535 = (0);
var G__13536 = (0);
seq__13464 = G__13533;
chunk__13465 = G__13534;
count__13466 = G__13535;
i__13467 = G__13536;
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