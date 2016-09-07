// Compiled by ClojureScript 1.9.225 {}
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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__9026__auto__,writer__9027__auto__,opt__9028__auto__){
return cljs.core._write.call(null,writer__9027__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__9502__auto__ = [];
var len__9495__auto___14356 = arguments.length;
var i__9496__auto___14357 = (0);
while(true){
if((i__9496__auto___14357 < len__9495__auto___14356)){
args__9502__auto__.push((arguments[i__9496__auto___14357]));

var G__14358 = (i__9496__auto___14357 + (1));
i__9496__auto___14357 = G__14358;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq14355){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14355));
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
var args__9502__auto__ = [];
var len__9495__auto___14360 = arguments.length;
var i__9496__auto___14361 = (0);
while(true){
if((i__9496__auto___14361 < len__9495__auto___14360)){
args__9502__auto__.push((arguments[i__9496__auto___14361]));

var G__14362 = (i__9496__auto___14361 + (1));
i__9496__auto___14361 = G__14362;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq14359){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14359));
});

var g_QMARK__14363 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_14364 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__14363){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__14363))
,null));
var mkg_14365 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__14363,g_14364){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__14363,g_14364))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__14363,g_14364,mkg_14365){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__14363).call(null,x);
});})(g_QMARK__14363,g_14364,mkg_14365))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__14363,g_14364,mkg_14365){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_14365).call(null,gfn);
});})(g_QMARK__14363,g_14364,mkg_14365))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__14363,g_14364,mkg_14365){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_14364).call(null,generator);
});})(g_QMARK__14363,g_14364,mkg_14365))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__10900__auto___14384 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__10900__auto___14384){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14385 = arguments.length;
var i__9496__auto___14386 = (0);
while(true){
if((i__9496__auto___14386 < len__9495__auto___14385)){
args__9502__auto__.push((arguments[i__9496__auto___14386]));

var G__14387 = (i__9496__auto___14386 + (1));
i__9496__auto___14386 = G__14387;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10900__auto___14384))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10900__auto___14384){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10900__auto___14384),args);
});})(g__10900__auto___14384))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__10900__auto___14384){
return (function (seq14366){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14366));
});})(g__10900__auto___14384))
;


var g__10900__auto___14388 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__10900__auto___14388){
return (function cljs$spec$impl$gen$list(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14389 = arguments.length;
var i__9496__auto___14390 = (0);
while(true){
if((i__9496__auto___14390 < len__9495__auto___14389)){
args__9502__auto__.push((arguments[i__9496__auto___14390]));

var G__14391 = (i__9496__auto___14390 + (1));
i__9496__auto___14390 = G__14391;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10900__auto___14388))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10900__auto___14388){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10900__auto___14388),args);
});})(g__10900__auto___14388))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__10900__auto___14388){
return (function (seq14367){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14367));
});})(g__10900__auto___14388))
;


var g__10900__auto___14392 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__10900__auto___14392){
return (function cljs$spec$impl$gen$map(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14393 = arguments.length;
var i__9496__auto___14394 = (0);
while(true){
if((i__9496__auto___14394 < len__9495__auto___14393)){
args__9502__auto__.push((arguments[i__9496__auto___14394]));

var G__14395 = (i__9496__auto___14394 + (1));
i__9496__auto___14394 = G__14395;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10900__auto___14392))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10900__auto___14392){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10900__auto___14392),args);
});})(g__10900__auto___14392))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__10900__auto___14392){
return (function (seq14368){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14368));
});})(g__10900__auto___14392))
;


var g__10900__auto___14396 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__10900__auto___14396){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14397 = arguments.length;
var i__9496__auto___14398 = (0);
while(true){
if((i__9496__auto___14398 < len__9495__auto___14397)){
args__9502__auto__.push((arguments[i__9496__auto___14398]));

var G__14399 = (i__9496__auto___14398 + (1));
i__9496__auto___14398 = G__14399;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10900__auto___14396))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10900__auto___14396){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10900__auto___14396),args);
});})(g__10900__auto___14396))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__10900__auto___14396){
return (function (seq14369){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14369));
});})(g__10900__auto___14396))
;


var g__10900__auto___14400 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__10900__auto___14400){
return (function cljs$spec$impl$gen$set(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14401 = arguments.length;
var i__9496__auto___14402 = (0);
while(true){
if((i__9496__auto___14402 < len__9495__auto___14401)){
args__9502__auto__.push((arguments[i__9496__auto___14402]));

var G__14403 = (i__9496__auto___14402 + (1));
i__9496__auto___14402 = G__14403;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10900__auto___14400))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10900__auto___14400){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10900__auto___14400),args);
});})(g__10900__auto___14400))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__10900__auto___14400){
return (function (seq14370){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14370));
});})(g__10900__auto___14400))
;


var g__10900__auto___14404 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__10900__auto___14404){
return (function cljs$spec$impl$gen$vector(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14405 = arguments.length;
var i__9496__auto___14406 = (0);
while(true){
if((i__9496__auto___14406 < len__9495__auto___14405)){
args__9502__auto__.push((arguments[i__9496__auto___14406]));

var G__14407 = (i__9496__auto___14406 + (1));
i__9496__auto___14406 = G__14407;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10900__auto___14404))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10900__auto___14404){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10900__auto___14404),args);
});})(g__10900__auto___14404))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__10900__auto___14404){
return (function (seq14371){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14371));
});})(g__10900__auto___14404))
;


var g__10900__auto___14408 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__10900__auto___14408){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14409 = arguments.length;
var i__9496__auto___14410 = (0);
while(true){
if((i__9496__auto___14410 < len__9495__auto___14409)){
args__9502__auto__.push((arguments[i__9496__auto___14410]));

var G__14411 = (i__9496__auto___14410 + (1));
i__9496__auto___14410 = G__14411;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10900__auto___14408))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10900__auto___14408){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10900__auto___14408),args);
});})(g__10900__auto___14408))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__10900__auto___14408){
return (function (seq14372){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14372));
});})(g__10900__auto___14408))
;


var g__10900__auto___14412 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__10900__auto___14412){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14413 = arguments.length;
var i__9496__auto___14414 = (0);
while(true){
if((i__9496__auto___14414 < len__9495__auto___14413)){
args__9502__auto__.push((arguments[i__9496__auto___14414]));

var G__14415 = (i__9496__auto___14414 + (1));
i__9496__auto___14414 = G__14415;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10900__auto___14412))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10900__auto___14412){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10900__auto___14412),args);
});})(g__10900__auto___14412))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__10900__auto___14412){
return (function (seq14373){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14373));
});})(g__10900__auto___14412))
;


var g__10900__auto___14416 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__10900__auto___14416){
return (function cljs$spec$impl$gen$elements(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14417 = arguments.length;
var i__9496__auto___14418 = (0);
while(true){
if((i__9496__auto___14418 < len__9495__auto___14417)){
args__9502__auto__.push((arguments[i__9496__auto___14418]));

var G__14419 = (i__9496__auto___14418 + (1));
i__9496__auto___14418 = G__14419;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10900__auto___14416))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10900__auto___14416){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10900__auto___14416),args);
});})(g__10900__auto___14416))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__10900__auto___14416){
return (function (seq14374){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14374));
});})(g__10900__auto___14416))
;


var g__10900__auto___14420 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__10900__auto___14420){
return (function cljs$spec$impl$gen$bind(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14421 = arguments.length;
var i__9496__auto___14422 = (0);
while(true){
if((i__9496__auto___14422 < len__9495__auto___14421)){
args__9502__auto__.push((arguments[i__9496__auto___14422]));

var G__14423 = (i__9496__auto___14422 + (1));
i__9496__auto___14422 = G__14423;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10900__auto___14420))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10900__auto___14420){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10900__auto___14420),args);
});})(g__10900__auto___14420))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__10900__auto___14420){
return (function (seq14375){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14375));
});})(g__10900__auto___14420))
;


var g__10900__auto___14424 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__10900__auto___14424){
return (function cljs$spec$impl$gen$choose(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14425 = arguments.length;
var i__9496__auto___14426 = (0);
while(true){
if((i__9496__auto___14426 < len__9495__auto___14425)){
args__9502__auto__.push((arguments[i__9496__auto___14426]));

var G__14427 = (i__9496__auto___14426 + (1));
i__9496__auto___14426 = G__14427;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10900__auto___14424))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10900__auto___14424){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10900__auto___14424),args);
});})(g__10900__auto___14424))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__10900__auto___14424){
return (function (seq14376){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14376));
});})(g__10900__auto___14424))
;


var g__10900__auto___14428 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__10900__auto___14428){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14429 = arguments.length;
var i__9496__auto___14430 = (0);
while(true){
if((i__9496__auto___14430 < len__9495__auto___14429)){
args__9502__auto__.push((arguments[i__9496__auto___14430]));

var G__14431 = (i__9496__auto___14430 + (1));
i__9496__auto___14430 = G__14431;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10900__auto___14428))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10900__auto___14428){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10900__auto___14428),args);
});})(g__10900__auto___14428))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__10900__auto___14428){
return (function (seq14377){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14377));
});})(g__10900__auto___14428))
;


var g__10900__auto___14432 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__10900__auto___14432){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14433 = arguments.length;
var i__9496__auto___14434 = (0);
while(true){
if((i__9496__auto___14434 < len__9495__auto___14433)){
args__9502__auto__.push((arguments[i__9496__auto___14434]));

var G__14435 = (i__9496__auto___14434 + (1));
i__9496__auto___14434 = G__14435;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10900__auto___14432))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10900__auto___14432){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10900__auto___14432),args);
});})(g__10900__auto___14432))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__10900__auto___14432){
return (function (seq14378){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14378));
});})(g__10900__auto___14432))
;


var g__10900__auto___14436 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__10900__auto___14436){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14437 = arguments.length;
var i__9496__auto___14438 = (0);
while(true){
if((i__9496__auto___14438 < len__9495__auto___14437)){
args__9502__auto__.push((arguments[i__9496__auto___14438]));

var G__14439 = (i__9496__auto___14438 + (1));
i__9496__auto___14438 = G__14439;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10900__auto___14436))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10900__auto___14436){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10900__auto___14436),args);
});})(g__10900__auto___14436))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__10900__auto___14436){
return (function (seq14379){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14379));
});})(g__10900__auto___14436))
;


var g__10900__auto___14440 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__10900__auto___14440){
return (function cljs$spec$impl$gen$sample(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14441 = arguments.length;
var i__9496__auto___14442 = (0);
while(true){
if((i__9496__auto___14442 < len__9495__auto___14441)){
args__9502__auto__.push((arguments[i__9496__auto___14442]));

var G__14443 = (i__9496__auto___14442 + (1));
i__9496__auto___14442 = G__14443;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10900__auto___14440))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10900__auto___14440){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10900__auto___14440),args);
});})(g__10900__auto___14440))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__10900__auto___14440){
return (function (seq14380){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14380));
});})(g__10900__auto___14440))
;


var g__10900__auto___14444 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__10900__auto___14444){
return (function cljs$spec$impl$gen$return(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14445 = arguments.length;
var i__9496__auto___14446 = (0);
while(true){
if((i__9496__auto___14446 < len__9495__auto___14445)){
args__9502__auto__.push((arguments[i__9496__auto___14446]));

var G__14447 = (i__9496__auto___14446 + (1));
i__9496__auto___14446 = G__14447;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10900__auto___14444))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10900__auto___14444){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10900__auto___14444),args);
});})(g__10900__auto___14444))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__10900__auto___14444){
return (function (seq14381){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14381));
});})(g__10900__auto___14444))
;


var g__10900__auto___14448 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__10900__auto___14448){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14449 = arguments.length;
var i__9496__auto___14450 = (0);
while(true){
if((i__9496__auto___14450 < len__9495__auto___14449)){
args__9502__auto__.push((arguments[i__9496__auto___14450]));

var G__14451 = (i__9496__auto___14450 + (1));
i__9496__auto___14450 = G__14451;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10900__auto___14448))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10900__auto___14448){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10900__auto___14448),args);
});})(g__10900__auto___14448))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__10900__auto___14448){
return (function (seq14382){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14382));
});})(g__10900__auto___14448))
;


var g__10900__auto___14452 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__10900__auto___14452){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14453 = arguments.length;
var i__9496__auto___14454 = (0);
while(true){
if((i__9496__auto___14454 < len__9495__auto___14453)){
args__9502__auto__.push((arguments[i__9496__auto___14454]));

var G__14455 = (i__9496__auto___14454 + (1));
i__9496__auto___14454 = G__14455;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10900__auto___14452))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10900__auto___14452){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10900__auto___14452),args);
});})(g__10900__auto___14452))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__10900__auto___14452){
return (function (seq14383){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14383));
});})(g__10900__auto___14452))
;

var g__10913__auto___14477 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__10913__auto___14477){
return (function cljs$spec$impl$gen$any(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14478 = arguments.length;
var i__9496__auto___14479 = (0);
while(true){
if((i__9496__auto___14479 < len__9495__auto___14478)){
args__9502__auto__.push((arguments[i__9496__auto___14479]));

var G__14480 = (i__9496__auto___14479 + (1));
i__9496__auto___14479 = G__14480;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10913__auto___14477))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10913__auto___14477){
return (function (args){
return cljs.core.deref.call(null,g__10913__auto___14477);
});})(g__10913__auto___14477))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__10913__auto___14477){
return (function (seq14456){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14456));
});})(g__10913__auto___14477))
;


var g__10913__auto___14481 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__10913__auto___14481){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14482 = arguments.length;
var i__9496__auto___14483 = (0);
while(true){
if((i__9496__auto___14483 < len__9495__auto___14482)){
args__9502__auto__.push((arguments[i__9496__auto___14483]));

var G__14484 = (i__9496__auto___14483 + (1));
i__9496__auto___14483 = G__14484;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10913__auto___14481))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10913__auto___14481){
return (function (args){
return cljs.core.deref.call(null,g__10913__auto___14481);
});})(g__10913__auto___14481))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__10913__auto___14481){
return (function (seq14457){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14457));
});})(g__10913__auto___14481))
;


var g__10913__auto___14485 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__10913__auto___14485){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14486 = arguments.length;
var i__9496__auto___14487 = (0);
while(true){
if((i__9496__auto___14487 < len__9495__auto___14486)){
args__9502__auto__.push((arguments[i__9496__auto___14487]));

var G__14488 = (i__9496__auto___14487 + (1));
i__9496__auto___14487 = G__14488;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10913__auto___14485))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10913__auto___14485){
return (function (args){
return cljs.core.deref.call(null,g__10913__auto___14485);
});})(g__10913__auto___14485))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__10913__auto___14485){
return (function (seq14458){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14458));
});})(g__10913__auto___14485))
;


var g__10913__auto___14489 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__10913__auto___14489){
return (function cljs$spec$impl$gen$char(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14490 = arguments.length;
var i__9496__auto___14491 = (0);
while(true){
if((i__9496__auto___14491 < len__9495__auto___14490)){
args__9502__auto__.push((arguments[i__9496__auto___14491]));

var G__14492 = (i__9496__auto___14491 + (1));
i__9496__auto___14491 = G__14492;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10913__auto___14489))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10913__auto___14489){
return (function (args){
return cljs.core.deref.call(null,g__10913__auto___14489);
});})(g__10913__auto___14489))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__10913__auto___14489){
return (function (seq14459){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14459));
});})(g__10913__auto___14489))
;


var g__10913__auto___14493 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__10913__auto___14493){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14494 = arguments.length;
var i__9496__auto___14495 = (0);
while(true){
if((i__9496__auto___14495 < len__9495__auto___14494)){
args__9502__auto__.push((arguments[i__9496__auto___14495]));

var G__14496 = (i__9496__auto___14495 + (1));
i__9496__auto___14495 = G__14496;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10913__auto___14493))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10913__auto___14493){
return (function (args){
return cljs.core.deref.call(null,g__10913__auto___14493);
});})(g__10913__auto___14493))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__10913__auto___14493){
return (function (seq14460){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14460));
});})(g__10913__auto___14493))
;


var g__10913__auto___14497 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__10913__auto___14497){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14498 = arguments.length;
var i__9496__auto___14499 = (0);
while(true){
if((i__9496__auto___14499 < len__9495__auto___14498)){
args__9502__auto__.push((arguments[i__9496__auto___14499]));

var G__14500 = (i__9496__auto___14499 + (1));
i__9496__auto___14499 = G__14500;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10913__auto___14497))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10913__auto___14497){
return (function (args){
return cljs.core.deref.call(null,g__10913__auto___14497);
});})(g__10913__auto___14497))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__10913__auto___14497){
return (function (seq14461){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14461));
});})(g__10913__auto___14497))
;


var g__10913__auto___14501 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__10913__auto___14501){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14502 = arguments.length;
var i__9496__auto___14503 = (0);
while(true){
if((i__9496__auto___14503 < len__9495__auto___14502)){
args__9502__auto__.push((arguments[i__9496__auto___14503]));

var G__14504 = (i__9496__auto___14503 + (1));
i__9496__auto___14503 = G__14504;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10913__auto___14501))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10913__auto___14501){
return (function (args){
return cljs.core.deref.call(null,g__10913__auto___14501);
});})(g__10913__auto___14501))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__10913__auto___14501){
return (function (seq14462){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14462));
});})(g__10913__auto___14501))
;


var g__10913__auto___14505 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__10913__auto___14505){
return (function cljs$spec$impl$gen$double(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14506 = arguments.length;
var i__9496__auto___14507 = (0);
while(true){
if((i__9496__auto___14507 < len__9495__auto___14506)){
args__9502__auto__.push((arguments[i__9496__auto___14507]));

var G__14508 = (i__9496__auto___14507 + (1));
i__9496__auto___14507 = G__14508;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10913__auto___14505))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10913__auto___14505){
return (function (args){
return cljs.core.deref.call(null,g__10913__auto___14505);
});})(g__10913__auto___14505))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__10913__auto___14505){
return (function (seq14463){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14463));
});})(g__10913__auto___14505))
;


var g__10913__auto___14509 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__10913__auto___14509){
return (function cljs$spec$impl$gen$int(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14510 = arguments.length;
var i__9496__auto___14511 = (0);
while(true){
if((i__9496__auto___14511 < len__9495__auto___14510)){
args__9502__auto__.push((arguments[i__9496__auto___14511]));

var G__14512 = (i__9496__auto___14511 + (1));
i__9496__auto___14511 = G__14512;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10913__auto___14509))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10913__auto___14509){
return (function (args){
return cljs.core.deref.call(null,g__10913__auto___14509);
});})(g__10913__auto___14509))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__10913__auto___14509){
return (function (seq14464){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14464));
});})(g__10913__auto___14509))
;


var g__10913__auto___14513 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__10913__auto___14513){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14514 = arguments.length;
var i__9496__auto___14515 = (0);
while(true){
if((i__9496__auto___14515 < len__9495__auto___14514)){
args__9502__auto__.push((arguments[i__9496__auto___14515]));

var G__14516 = (i__9496__auto___14515 + (1));
i__9496__auto___14515 = G__14516;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10913__auto___14513))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10913__auto___14513){
return (function (args){
return cljs.core.deref.call(null,g__10913__auto___14513);
});})(g__10913__auto___14513))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__10913__auto___14513){
return (function (seq14465){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14465));
});})(g__10913__auto___14513))
;


var g__10913__auto___14517 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__10913__auto___14517){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14518 = arguments.length;
var i__9496__auto___14519 = (0);
while(true){
if((i__9496__auto___14519 < len__9495__auto___14518)){
args__9502__auto__.push((arguments[i__9496__auto___14519]));

var G__14520 = (i__9496__auto___14519 + (1));
i__9496__auto___14519 = G__14520;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10913__auto___14517))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10913__auto___14517){
return (function (args){
return cljs.core.deref.call(null,g__10913__auto___14517);
});})(g__10913__auto___14517))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__10913__auto___14517){
return (function (seq14466){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14466));
});})(g__10913__auto___14517))
;


var g__10913__auto___14521 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__10913__auto___14521){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14522 = arguments.length;
var i__9496__auto___14523 = (0);
while(true){
if((i__9496__auto___14523 < len__9495__auto___14522)){
args__9502__auto__.push((arguments[i__9496__auto___14523]));

var G__14524 = (i__9496__auto___14523 + (1));
i__9496__auto___14523 = G__14524;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10913__auto___14521))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10913__auto___14521){
return (function (args){
return cljs.core.deref.call(null,g__10913__auto___14521);
});})(g__10913__auto___14521))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__10913__auto___14521){
return (function (seq14467){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14467));
});})(g__10913__auto___14521))
;


var g__10913__auto___14525 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__10913__auto___14525){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14526 = arguments.length;
var i__9496__auto___14527 = (0);
while(true){
if((i__9496__auto___14527 < len__9495__auto___14526)){
args__9502__auto__.push((arguments[i__9496__auto___14527]));

var G__14528 = (i__9496__auto___14527 + (1));
i__9496__auto___14527 = G__14528;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10913__auto___14525))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10913__auto___14525){
return (function (args){
return cljs.core.deref.call(null,g__10913__auto___14525);
});})(g__10913__auto___14525))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__10913__auto___14525){
return (function (seq14468){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14468));
});})(g__10913__auto___14525))
;


var g__10913__auto___14529 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__10913__auto___14529){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14530 = arguments.length;
var i__9496__auto___14531 = (0);
while(true){
if((i__9496__auto___14531 < len__9495__auto___14530)){
args__9502__auto__.push((arguments[i__9496__auto___14531]));

var G__14532 = (i__9496__auto___14531 + (1));
i__9496__auto___14531 = G__14532;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10913__auto___14529))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10913__auto___14529){
return (function (args){
return cljs.core.deref.call(null,g__10913__auto___14529);
});})(g__10913__auto___14529))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__10913__auto___14529){
return (function (seq14469){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14469));
});})(g__10913__auto___14529))
;


var g__10913__auto___14533 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__10913__auto___14533){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14534 = arguments.length;
var i__9496__auto___14535 = (0);
while(true){
if((i__9496__auto___14535 < len__9495__auto___14534)){
args__9502__auto__.push((arguments[i__9496__auto___14535]));

var G__14536 = (i__9496__auto___14535 + (1));
i__9496__auto___14535 = G__14536;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10913__auto___14533))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10913__auto___14533){
return (function (args){
return cljs.core.deref.call(null,g__10913__auto___14533);
});})(g__10913__auto___14533))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__10913__auto___14533){
return (function (seq14470){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14470));
});})(g__10913__auto___14533))
;


var g__10913__auto___14537 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__10913__auto___14537){
return (function cljs$spec$impl$gen$string(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14538 = arguments.length;
var i__9496__auto___14539 = (0);
while(true){
if((i__9496__auto___14539 < len__9495__auto___14538)){
args__9502__auto__.push((arguments[i__9496__auto___14539]));

var G__14540 = (i__9496__auto___14539 + (1));
i__9496__auto___14539 = G__14540;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10913__auto___14537))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10913__auto___14537){
return (function (args){
return cljs.core.deref.call(null,g__10913__auto___14537);
});})(g__10913__auto___14537))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__10913__auto___14537){
return (function (seq14471){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14471));
});})(g__10913__auto___14537))
;


var g__10913__auto___14541 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__10913__auto___14541){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14542 = arguments.length;
var i__9496__auto___14543 = (0);
while(true){
if((i__9496__auto___14543 < len__9495__auto___14542)){
args__9502__auto__.push((arguments[i__9496__auto___14543]));

var G__14544 = (i__9496__auto___14543 + (1));
i__9496__auto___14543 = G__14544;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10913__auto___14541))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10913__auto___14541){
return (function (args){
return cljs.core.deref.call(null,g__10913__auto___14541);
});})(g__10913__auto___14541))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__10913__auto___14541){
return (function (seq14472){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14472));
});})(g__10913__auto___14541))
;


var g__10913__auto___14545 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__10913__auto___14545){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14546 = arguments.length;
var i__9496__auto___14547 = (0);
while(true){
if((i__9496__auto___14547 < len__9495__auto___14546)){
args__9502__auto__.push((arguments[i__9496__auto___14547]));

var G__14548 = (i__9496__auto___14547 + (1));
i__9496__auto___14547 = G__14548;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10913__auto___14545))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10913__auto___14545){
return (function (args){
return cljs.core.deref.call(null,g__10913__auto___14545);
});})(g__10913__auto___14545))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__10913__auto___14545){
return (function (seq14473){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14473));
});})(g__10913__auto___14545))
;


var g__10913__auto___14549 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__10913__auto___14549){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14550 = arguments.length;
var i__9496__auto___14551 = (0);
while(true){
if((i__9496__auto___14551 < len__9495__auto___14550)){
args__9502__auto__.push((arguments[i__9496__auto___14551]));

var G__14552 = (i__9496__auto___14551 + (1));
i__9496__auto___14551 = G__14552;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10913__auto___14549))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10913__auto___14549){
return (function (args){
return cljs.core.deref.call(null,g__10913__auto___14549);
});})(g__10913__auto___14549))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__10913__auto___14549){
return (function (seq14474){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14474));
});})(g__10913__auto___14549))
;


var g__10913__auto___14553 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__10913__auto___14553){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14554 = arguments.length;
var i__9496__auto___14555 = (0);
while(true){
if((i__9496__auto___14555 < len__9495__auto___14554)){
args__9502__auto__.push((arguments[i__9496__auto___14555]));

var G__14556 = (i__9496__auto___14555 + (1));
i__9496__auto___14555 = G__14556;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10913__auto___14553))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10913__auto___14553){
return (function (args){
return cljs.core.deref.call(null,g__10913__auto___14553);
});})(g__10913__auto___14553))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__10913__auto___14553){
return (function (seq14475){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14475));
});})(g__10913__auto___14553))
;


var g__10913__auto___14557 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__10913__auto___14557){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14558 = arguments.length;
var i__9496__auto___14559 = (0);
while(true){
if((i__9496__auto___14559 < len__9495__auto___14558)){
args__9502__auto__.push((arguments[i__9496__auto___14559]));

var G__14560 = (i__9496__auto___14559 + (1));
i__9496__auto___14559 = G__14560;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});})(g__10913__auto___14557))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10913__auto___14557){
return (function (args){
return cljs.core.deref.call(null,g__10913__auto___14557);
});})(g__10913__auto___14557))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__10913__auto___14557){
return (function (seq14476){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14476));
});})(g__10913__auto___14557))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__9502__auto__ = [];
var len__9495__auto___14563 = arguments.length;
var i__9496__auto___14564 = (0);
while(true){
if((i__9496__auto___14564 < len__9495__auto___14563)){
args__9502__auto__.push((arguments[i__9496__auto___14564]));

var G__14565 = (i__9496__auto___14564 + (1));
i__9496__auto___14564 = G__14565;
continue;
} else {
}
break;
}

var argseq__9503__auto__ = ((((0) < args__9502__auto__.length))?(new cljs.core.IndexedSeq(args__9502__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__9503__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__14561_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__14561_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq14562){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14562));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__14566_SHARP_){
return (new Date(p1__14566_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
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