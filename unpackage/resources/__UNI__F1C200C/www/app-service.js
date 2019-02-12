var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
var Component = Component || function() {};
var definePlugin = definePlugin || function() {};
var requirePlugin = requirePlugin || function() {};
var Behavior = Behavior || function() {};
var $gwx;
  
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};
if(typeof __WXML_GLOBAL__ === 'undefined') __WXML_GLOBAL__={};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if("undefined"!==typeof debugInfo)
e.stack += "\n "+" "+" "+" at "+debugInfo[g.opindex][0]+":"+debugInfo[g.opindex][1]+":"+debugInfo[g.opindex][2];
throw e;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
return rev;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
var value = $gdc( raw, "" );
return value;
}
else
{
return raw;
}
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
return grb( z[opindex], env, scope, global, nothing );
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
return r===1 ? $gdc(o(),undefined,2) : o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules;
var p_={}
var cs
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
__WXML_GLOBAL__.debuginfo_set = __WXML_GLOBAL__.debuginfo_set || {};
var debugInfo=__WXML_GLOBAL__.debuginfo_set.$gwx || [];
if ( !__WXML_GLOBAL__.ops_init.$gwx){
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ca127c92']);debugInfo.push(['./components/m-icon/m-icon.vue.wxml',1,15]);Z([3,'1e095225']);debugInfo.push(['./components/m-input.vue.wxml',2,16]);Z([3,'_view data-v-d3817008 m-input-view']);debugInfo.push(['./components/m-input.vue.wxml',3,15]);Z([[2,'&&'],[[2,'&&'],[[7],[3,'clearable_']],[[2,'!'],[[7],[3,'displayable_']]]],[[6],[[7],[3,'value']],[3,'length']]]);debugInfo.push(['./components/m-input.vue.wxml',6,17]);Z([3,'handleProxy']);debugInfo.push(['./components/m-input.vue.wxml',7,64]);Z([3,'#666666']);debugInfo.push(['./components/m-input.vue.wxml',7,23]);Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'uh8-0']]]]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./components/m-input.vue.wxml',7,131]);Z([[7],[3,'$k']]);debugInfo.push(['./components/m-input.vue.wxml',7,117]);Z([1,'nLX-1']);debugInfo.push(['./components/m-input.vue.wxml',7,91]);Z(z[0]);debugInfo.push(['./components/m-input.vue.wxml',7,183]);Z([3,'20']);debugInfo.push(['./components/m-input.vue.wxml',7,51]);Z([3,'clear']);debugInfo.push(['./components/m-input.vue.wxml',7,38]);Z([[7],[3,'displayable_']]);debugInfo.push(['./components/m-input.vue.wxml',9,17]);Z(z[4]);debugInfo.push(['./components/m-input.vue.wxml',10,46]);Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'jQp-1']]]]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./components/m-input.vue.wxml',10,113]);Z(z[7]);debugInfo.push(['./components/m-input.vue.wxml',10,99]);Z([1,'lai-2']);debugInfo.push(['./components/m-input.vue.wxml',10,73]);Z(z[0]);debugInfo.push(['./components/m-input.vue.wxml',10,165]);Z(z[10]);debugInfo.push(['./components/m-input.vue.wxml',10,33]);Z([3,'eye']);debugInfo.push(['./components/m-input.vue.wxml',10,22]);Z([3,'16dcced3']);debugInfo.push(['./pages/game/game.vue.wxml',1,15]);Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./pages/game/game.wxml',1,71]);Z(z[20]);debugInfo.push(['./pages/game/game.wxml',1,55]);Z([3,'cdd7ce82']);debugInfo.push(['./pages/index/index.vue.wxml',1,15]);Z(z[21]);debugInfo.push(['./pages/index/index.wxml',1,73]);Z(z[23]);debugInfo.push(['./pages/index/index.wxml',1,57]);Z([3,'6b8c71ad']);debugInfo.push(['./pages/login/login.vue.wxml',1,15]);Z(z[21]);debugInfo.push(['./pages/login/login.wxml',1,73]);Z(z[26]);debugInfo.push(['./pages/login/login.wxml',1,57]);Z([3,'47a3b2da']);debugInfo.push(['./pages/my/my.vue.wxml',1,15]);Z(z[21]);debugInfo.push(['./pages/my/my.wxml',1,67]);Z(z[29]);debugInfo.push(['./pages/my/my.wxml',1,51]);Z([3,'237d1a13']);debugInfo.push(['./pages/new-page/new-page.vue.wxml',1,15]);Z(z[21]);debugInfo.push(['./pages/new-page/new-page.wxml',1,79]);Z(z[32]);debugInfo.push(['./pages/new-page/new-page.wxml',1,63]);Z([3,'b67ab91a']);debugInfo.push(['./pages/news/news.vue.wxml',1,15]);Z(z[21]);debugInfo.push(['./pages/news/news.wxml',1,71]);Z(z[35]);debugInfo.push(['./pages/news/news.wxml',1,55]);Z([3,'83eb7c1a']);debugInfo.push(['./pages/register/register.vue.wxml',1,15]);Z(z[21]);debugInfo.push(['./pages/register/register.wxml',1,79]);Z(z[38]);debugInfo.push(['./pages/register/register.wxml',1,63]);Z([3,'2dcc6c19']);debugInfo.push(['./pages/share/share.vue.wxml',1,15]);Z(z[21]);debugInfo.push(['./pages/share/share.wxml',1,73]);Z(z[41]);debugInfo.push(['./pages/share/share.wxml',1,57]);Z([3,'9d697bda']);debugInfo.push(['./pages/swiper/swiper.vue.wxml',1,15]);Z(z[21]);debugInfo.push(['./pages/swiper/swiper.wxml',1,75]);Z(z[44]);debugInfo.push(['./pages/swiper/swiper.wxml',1,59]);})(z);__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
__WXML_GLOBAL__.debuginfo_set.$gwx=debugInfo;
}
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);throw e;}
}}}()
var x=['./components/m-icon/m-icon.vue.wxml','./components/m-input.vue.wxml','/components/m-icon/m-icon.vue.wxml','./components/slots.wxml','./pages/game/game.vue.wxml','./pages/game/game.wxml','/pages/game/game.vue.wxml','./pages/index/index.vue.wxml','./pages/index/index.wxml','/pages/index/index.vue.wxml','./pages/login/login.vue.wxml','./pages/login/login.wxml','/pages/login/login.vue.wxml','./pages/my/my.vue.wxml','./pages/my/my.wxml','/pages/my/my.vue.wxml','./pages/new-page/new-page.vue.wxml','./pages/new-page/new-page.wxml','/pages/new-page/new-page.vue.wxml','./pages/news/news.vue.wxml','./pages/news/news.wxml','/pages/news/news.vue.wxml','./pages/register/register.vue.wxml','./pages/register/register.wxml','/pages/register/register.vue.wxml','./pages/share/share.vue.wxml','./pages/share/share.wxml','/pages/share/share.vue.wxml','./pages/swiper/swiper.vue.wxml','./pages/swiper/swiper.wxml','/pages/swiper/swiper.vue.wxml'];d_[x[0]]={}
d_[x[0]]["ca127c92"]=function(e,s,r,gg){
var b=x[0]+':ca127c92'
r.wxVkey=b
gg.f=$gdc(f_["./components/m-icon/m-icon.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
d_[x[1]]["1e095225"]=function(e,s,r,gg){
var b=x[1]+':1e095225'
r.wxVkey=b
gg.f=$gdc(f_["./components/m-input.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
cs.push("./components/m-input.vue.wxml:view:3:4")
var oB=_n('view')
_r(oB,'class',2,e,s,gg)
var xC=_v()
_(oB,xC)
if(_o(3,e,s,gg)){xC.wxVkey=1
cs.push("./components/m-input.vue.wxml:view:6:6")
var fE=_v()
_(xC,fE)
cs.push("./components/m-input.vue.wxml:template:7:8")
var cF=_o(9,e,s,gg)
var hG=_gd(x[1],cF,e_,d_)
if(hG){
var oH=_1(6,e,s,gg) || {}
var cur_globalf=gg.f
fE.wxXCkey=3
hG(oH,oH,fE,gg)
gg.f=cur_globalf
}
else _w(cF,x[1],7,183)
cs.pop()
cs.pop()
}
var oD=_v()
_(oB,oD)
if(_o(12,e,s,gg)){oD.wxVkey=1
cs.push("./components/m-input.vue.wxml:view:9:6")
var cI=_v()
_(oD,cI)
cs.push("./components/m-input.vue.wxml:template:10:8")
var oJ=_o(17,e,s,gg)
var lK=_gd(x[1],oJ,e_,d_)
if(lK){
var aL=_1(14,e,s,gg) || {}
var cur_globalf=gg.f
cI.wxXCkey=3
lK(aL,aL,cI,gg)
gg.f=cur_globalf
}
else _w(oJ,x[1],10,165)
cs.pop()
cs.pop()
}
xC.wxXCkey=1
oD.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m1=function(e,s,r,gg){
var xC=e_[x[1]].i
_ai(xC,x[2],e_,x[1],1,1)
xC.pop()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[x[2]],ic:[]}
d_[x[3]]={}
var m2=function(e,s,r,gg){
var fE=e_[x[3]].i
_ai(fE,x[2],e_,x[3],1,1)
fE.pop()
return r
}
e_[x[3]]={f:m2,j:[],i:[],ti:[x[2]],ic:[]}
d_[x[4]]={}
d_[x[4]]["16dcced3"]=function(e,s,r,gg){
var b=x[4]+':16dcced3'
r.wxVkey=b
gg.f=$gdc(f_["./pages/game/game.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[4]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m3=function(e,s,r,gg){
return r
}
e_[x[4]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m4=function(e,s,r,gg){
var oH=e_[x[5]].i
_ai(oH,x[6],e_,x[5],1,1)
var cI=_v()
_(r,cI)
cs.push("./pages/game/game.wxml:template:1:43")
var oJ=_o(22,e,s,gg)
var lK=_gd(x[5],oJ,e_,d_)
if(lK){
var aL=_1(21,e,s,gg) || {}
var cur_globalf=gg.f
cI.wxXCkey=3
lK(aL,aL,cI,gg)
gg.f=cur_globalf
}
else _w(oJ,x[5],1,55)
cs.pop()
oH.pop()
return r
}
e_[x[5]]={f:m4,j:[],i:[],ti:[x[6]],ic:[]}
d_[x[7]]={}
d_[x[7]]["cdd7ce82"]=function(e,s,r,gg){
var b=x[7]+':cdd7ce82'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[7]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m5=function(e,s,r,gg){
return r
}
e_[x[7]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m6=function(e,s,r,gg){
var bO=e_[x[8]].i
_ai(bO,x[9],e_,x[8],1,1)
var oP=_v()
_(r,oP)
cs.push("./pages/index/index.wxml:template:1:45")
var xQ=_o(25,e,s,gg)
var oR=_gd(x[8],xQ,e_,d_)
if(oR){
var fS=_1(24,e,s,gg) || {}
var cur_globalf=gg.f
oP.wxXCkey=3
oR(fS,fS,oP,gg)
gg.f=cur_globalf
}
else _w(xQ,x[8],1,57)
cs.pop()
bO.pop()
return r
}
e_[x[8]]={f:m6,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[10]]={}
d_[x[10]]["6b8c71ad"]=function(e,s,r,gg){
var b=x[10]+':6b8c71ad'
r.wxVkey=b
gg.f=$gdc(f_["./pages/login/login.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[10]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m7=function(e,s,r,gg){
return r
}
e_[x[10]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m8=function(e,s,r,gg){
var oV=e_[x[11]].i
_ai(oV,x[12],e_,x[11],1,1)
var cW=_v()
_(r,cW)
cs.push("./pages/login/login.wxml:template:1:45")
var oX=_o(28,e,s,gg)
var lY=_gd(x[11],oX,e_,d_)
if(lY){
var aZ=_1(27,e,s,gg) || {}
var cur_globalf=gg.f
cW.wxXCkey=3
lY(aZ,aZ,cW,gg)
gg.f=cur_globalf
}
else _w(oX,x[11],1,57)
cs.pop()
oV.pop()
return r
}
e_[x[11]]={f:m8,j:[],i:[],ti:[x[12]],ic:[]}
d_[x[13]]={}
d_[x[13]]["47a3b2da"]=function(e,s,r,gg){
var b=x[13]+':47a3b2da'
r.wxVkey=b
gg.f=$gdc(f_["./pages/my/my.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[13]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m9=function(e,s,r,gg){
return r
}
e_[x[13]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m10=function(e,s,r,gg){
var b3=e_[x[14]].i
_ai(b3,x[15],e_,x[14],1,1)
var o4=_v()
_(r,o4)
cs.push("./pages/my/my.wxml:template:1:39")
var x5=_o(31,e,s,gg)
var o6=_gd(x[14],x5,e_,d_)
if(o6){
var f7=_1(30,e,s,gg) || {}
var cur_globalf=gg.f
o4.wxXCkey=3
o6(f7,f7,o4,gg)
gg.f=cur_globalf
}
else _w(x5,x[14],1,51)
cs.pop()
b3.pop()
return r
}
e_[x[14]]={f:m10,j:[],i:[],ti:[x[15]],ic:[]}
d_[x[16]]={}
d_[x[16]]["237d1a13"]=function(e,s,r,gg){
var b=x[16]+':237d1a13'
r.wxVkey=b
gg.f=$gdc(f_["./pages/new-page/new-page.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[16]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m11=function(e,s,r,gg){
return r
}
e_[x[16]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m12=function(e,s,r,gg){
var o0=e_[x[17]].i
_ai(o0,x[18],e_,x[17],1,1)
var cAB=_v()
_(r,cAB)
cs.push("./pages/new-page/new-page.wxml:template:1:51")
var oBB=_o(34,e,s,gg)
var lCB=_gd(x[17],oBB,e_,d_)
if(lCB){
var aDB=_1(33,e,s,gg) || {}
var cur_globalf=gg.f
cAB.wxXCkey=3
lCB(aDB,aDB,cAB,gg)
gg.f=cur_globalf
}
else _w(oBB,x[17],1,63)
cs.pop()
o0.pop()
return r
}
e_[x[17]]={f:m12,j:[],i:[],ti:[x[18]],ic:[]}
d_[x[19]]={}
d_[x[19]]["b67ab91a"]=function(e,s,r,gg){
var b=x[19]+':b67ab91a'
r.wxVkey=b
gg.f=$gdc(f_["./pages/news/news.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[19]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m13=function(e,s,r,gg){
return r
}
e_[x[19]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m14=function(e,s,r,gg){
var bGB=e_[x[20]].i
_ai(bGB,x[21],e_,x[20],1,1)
var oHB=_v()
_(r,oHB)
cs.push("./pages/news/news.wxml:template:1:43")
var xIB=_o(37,e,s,gg)
var oJB=_gd(x[20],xIB,e_,d_)
if(oJB){
var fKB=_1(36,e,s,gg) || {}
var cur_globalf=gg.f
oHB.wxXCkey=3
oJB(fKB,fKB,oHB,gg)
gg.f=cur_globalf
}
else _w(xIB,x[20],1,55)
cs.pop()
bGB.pop()
return r
}
e_[x[20]]={f:m14,j:[],i:[],ti:[x[21]],ic:[]}
d_[x[22]]={}
d_[x[22]]["83eb7c1a"]=function(e,s,r,gg){
var b=x[22]+':83eb7c1a'
r.wxVkey=b
gg.f=$gdc(f_["./pages/register/register.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[22]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m15=function(e,s,r,gg){
return r
}
e_[x[22]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m16=function(e,s,r,gg){
var oNB=e_[x[23]].i
_ai(oNB,x[24],e_,x[23],1,1)
var cOB=_v()
_(r,cOB)
cs.push("./pages/register/register.wxml:template:1:51")
var oPB=_o(40,e,s,gg)
var lQB=_gd(x[23],oPB,e_,d_)
if(lQB){
var aRB=_1(39,e,s,gg) || {}
var cur_globalf=gg.f
cOB.wxXCkey=3
lQB(aRB,aRB,cOB,gg)
gg.f=cur_globalf
}
else _w(oPB,x[23],1,63)
cs.pop()
oNB.pop()
return r
}
e_[x[23]]={f:m16,j:[],i:[],ti:[x[24]],ic:[]}
d_[x[25]]={}
d_[x[25]]["2dcc6c19"]=function(e,s,r,gg){
var b=x[25]+':2dcc6c19'
r.wxVkey=b
gg.f=$gdc(f_["./pages/share/share.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[25]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m17=function(e,s,r,gg){
return r
}
e_[x[25]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m18=function(e,s,r,gg){
var bUB=e_[x[26]].i
_ai(bUB,x[27],e_,x[26],1,1)
var oVB=_v()
_(r,oVB)
cs.push("./pages/share/share.wxml:template:1:45")
var xWB=_o(43,e,s,gg)
var oXB=_gd(x[26],xWB,e_,d_)
if(oXB){
var fYB=_1(42,e,s,gg) || {}
var cur_globalf=gg.f
oVB.wxXCkey=3
oXB(fYB,fYB,oVB,gg)
gg.f=cur_globalf
}
else _w(xWB,x[26],1,57)
cs.pop()
bUB.pop()
return r
}
e_[x[26]]={f:m18,j:[],i:[],ti:[x[27]],ic:[]}
d_[x[28]]={}
d_[x[28]]["9d697bda"]=function(e,s,r,gg){
var b=x[28]+':9d697bda'
r.wxVkey=b
gg.f=$gdc(f_["./pages/swiper/swiper.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[28]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m19=function(e,s,r,gg){
return r
}
e_[x[28]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m20=function(e,s,r,gg){
var o2B=e_[x[29]].i
_ai(o2B,x[30],e_,x[29],1,1)
var c3B=_v()
_(r,c3B)
cs.push("./pages/swiper/swiper.wxml:template:1:47")
var o4B=_o(46,e,s,gg)
var l5B=_gd(x[29],o4B,e_,d_)
if(l5B){
var a6B=_1(45,e,s,gg) || {}
var cur_globalf=gg.f
c3B.wxXCkey=3
l5B(a6B,a6B,c3B,gg)
gg.f=cur_globalf
}
else _w(o4B,x[29],1,59)
cs.pop()
o2B.pop()
return r
}
e_[x[29]]={f:m20,j:[],i:[],ti:[x[30]],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/login/login","pages/register/register","pages/index/index","pages/news/news","pages/game/game","pages/share/share","pages/my/my","pages/new-page/new-page","pages/swiper/swiper"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#7A7E83","selectedColor":"#ff2600","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/index.png","selectedIconPath":"static/indexHL.png","text":"首页"},{"pagePath":"pages/news/news","iconPath":"static/news.png","selectedIconPath":"static/newsHL.png","text":"头条"},{"pagePath":"pages/game/game","iconPath":"static/zhuanqian.png","selectedIconPath":"static/zhuanqianHL.png","text":"赚钱"},{"pagePath":"pages/share/share","iconPath":"static/gift.png","selectedIconPath":"static/giftHL.png","text":"邀请"},{"pagePath":"pages/my/my","iconPath":"static/my.png","selectedIconPath":"static/myHL.png","text":"我的"}]},"networkTimeout":{},"debug":false,"functionalPages":false,"subPackages":[],"workers":"","preloadRule":{},"requiredBackgroundModes":[],"plugins":{},"resizable":false,"navigateToMiniProgramAppIdList":[],"permission":{},"usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');



define('common/manifest.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
!function(r){var e=global.webpackJsonp;global.webpackJsonp=function(n,u,c){for(var l,f,a,p=0,i=[];p<n.length;p++)f=n[p],o[f]&&i.push(o[f][0]),o[f]=0;for(l in u)Object.prototype.hasOwnProperty.call(u,l)&&(r[l]=u[l]);for(e&&e(n,u,c);i.length;)i.shift()();if(c)for(p=0;p<c.length;p++)a=t(t.s=c[p]);return a};var n={},o={11:0};function t(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return r[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=r,t.c=n,t.d=function(r,e,n){t.o(r,e)||Object.defineProperty(r,e,{configurable:!1,enumerable:!0,get:n})},t.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(e,"a",e),e},t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},t.p="/",t.oe=function(r){throw console.error(r),r}}([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
global.webpackJsonp([1],{0:function(t,e){t.exports=function(t,e,n,r,o){var i,a=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(i=t,a=t.default);var c,u="function"==typeof a?a.options:a;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),r&&(u._scopeId=r),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=c):n&&(c=n),c){var f=u.functional,p=f?u.render:u.beforeCreate;f?u.render=function(t,e){return c.call(e),p(t,e)}:u.beforeCreate=p?[].concat(p,c):[c]}return{esModule:i,exports:a,options:u}}},1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e;return a(e={data:{$root:{}},onLoad:function(e){var n=new i.default(t);this.$vm=n;var r=n.$root;r.__wxWebviewId__=this.__wxWebviewId__,r.$mp||(r.$mp={});var o=r.$mp;o.mpType="page",o.page=this,o.query=e,o.status="load",n.$mount()},handleProxy:function(t){return c(this).$handleProxyWithVue(t)},onShow:function(){var t=c(this);t.$mp.status="show",s(t,"onShow"),t.$nextTick(function(){t._initDataToMP()})},onReady:function(){var t=c(this);t.$mp.status="ready",s(t,"onReady")},onHide:function(){var t=c(this);t.$mp.status="hide",s(t,"onHide")},onUnload:function(){var t=c(this);s(t,"onUnload"),t.$destroy()},onPullDownRefresh:function(){s(c(this),"onPullDownRefresh")},onReachBottom:function(){s(c(this),"onReachBottom")},onPageScroll:function(t){s(c(this),"onPageScroll",t)},onTabItemTap:function(t){s(c(this),"onTabItemTap",t)}},"onPullDownRefresh",function(){s(c(this),"onPullDownRefresh")}),a(e,"onReachBottom",function(){s(c(this),"onReachBottom")}),a(e,"onShareAppMessage",t.onShareAppMessage?function(t){return s(c(this),"onShareAppMessage",t)}:null),a(e,"onPageScroll",function(t){s(c(this),"onPageScroll",t)}),a(e,"onTabItemTap",function(t){s(c(this),"onTabItemTap",t)}),a(e,"onNavigationBarButtonTap",function(t){s(c(this),"onNavigationBarButtonTap",t)}),a(e,"onBackPress",function(){return s(c(this),"onBackPress")}),a(e,"$getAppWebview",function(t){return plus.webview.getWebviewById(""+this.__wxWebviewId__)}),e};var r,o=n(2),i=(r=o)&&r.__esModule?r:{default:r};function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e,n){var r,o=t.$options[e];if("onError"===e&&o&&(o=[o]),o)for(var i=0,a=o.length;i<a;i++)r=o[i].call(t,n);return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return s(t,e,n)}),r}function c(t){return t.$vm.$root}},2:function(t,e,n){(function(e){try{e||(e={}),e.process=e.process||{},e.process.env=e.process.env||{},e.App=e.App||App,e.Page=e.Page||Page,e.Component=e.Component||Component,e.getApp=e.getApp||getApp}catch(t){}var n;n=function(){"use strict";function t(e,n,r,o){if(r!==o&&void 0!==r)if(null==r||null==o||typeof r!=typeof o)e[n]=r;else if(Array.isArray(r)&&Array.isArray(o))if(r.length===o.length)for(var i=0,a=r.length;i<a;++i)t(e,n+"["+i+"]",r[i],o[i]);else e[n]=r;else if("object"==typeof r&&"object"==typeof o){var s=Object.keys(r),c=Object.keys(o);if(s.length!==c.length)e[n]=r;else{var u=Object.create(null);for(i=0,a=s.length;i<a;++i)u[s[i]]=!0,u[c[i]]=!0;if(Object.keys(u).length!==s.length)e[n]=r;else for(i=0,a=s.length;i<a;++i){var f=s[i];t(e,n+"."+f,r[f],o[f])}}}else r!==o&&(e[n]=r)}function n(t){return void 0===t||null===t}function r(t){return void 0!==t&&null!==t}function o(t){return!0===t}function i(t){return"string"==typeof t||"number"==typeof t}function a(t){return null!==t&&"object"==typeof t}var s=Object.prototype.toString;function c(t){return"[object Object]"===s.call(t)}function u(t){var e=parseFloat(t);return e>=0&&Math.floor(e)===e&&isFinite(t)}function f(t){return null==t?"":"object"==typeof t?JSON.stringify(t,null,2):String(t)}function p(t){var e=parseFloat(t);return isNaN(e)?t:e}function l(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}l("slot,component",!0);var d=l("key,ref,slot,is");function h(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var v=Object.prototype.hasOwnProperty;function y(t,e){return v.call(t,e)}function m(t){var e=Object.create(null);return function(n){return e[n]||(e[n]=t(n))}}var g=/-(\w)/g,_=m(function(t){return t.replace(g,function(t,e){return e?e.toUpperCase():""})}),b=m(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),$=/([^-])([A-Z])/g,w=m(function(t){return t.replace($,"$1-$2").replace($,"$1-$2").toLowerCase()});function x(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function O(t,e){e=e||0;for(var n=t.length-e,r=new Array(n);n--;)r[n]=t[n+e];return r}function A(t,e){for(var n in e)t[n]=e[n];return t}function C(t,e,n){}var k=function(t,e,n){return!1},j=function(t){return t};function S(t,e){var n=a(t),r=a(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{return JSON.stringify(t)===JSON.stringify(e)}catch(n){return t===e}}function P(t,e){for(var n=0;n<t.length;n++)if(S(t[n],e))return n;return-1}function E(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var T="data-server-rendered",M=["component","directive","filter"],I=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","onLaunch","onLoad","onShow","onReady","onHide","onUnload","onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onTabItemTap","attached","ready","moved","detached","onUniNViewMessage","onNavigationBarButtonTap","onBackPress"],D={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:k,isReservedAttr:k,isUnknownElement:k,getTagNamespace:C,parsePlatformTagName:j,mustUseProp:k,_lifecycleHooks:I},N=Object.freeze({});function R(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var B=/[^\w.$]/;var L=C;function U(t,e,n){if(D.errorHandler)D.errorHandler.call(null,t,e,n);else{if(!F||"undefined"==typeof console)throw t;console.error(t)}}var V,H="__proto__"in{},F="undefined"!=typeof window,W=["mpvue-runtime"].join(),G=(W&&/msie|trident/.test(W),W&&W.indexOf("msie 9.0"),W&&W.indexOf("edge/")>0),q=(W&&W.indexOf("android"),W&&/iphone|ipad|ipod|ios/.test(W)),J=(W&&/chrome\/\d+/.test(W),{}.watch);if(F)try{var z={};Object.defineProperty(z,"passive",{get:function(){!0}}),window.addEventListener("test-passive",null,z)}catch(t){}var K=function(){return void 0===V&&(V=!F&&void 0!==e&&"server"===e.process.env.VUE_ENV),V},X=F&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function Z(t){return"function"==typeof t&&/native code/.test(t.toString())}var Q,Y="undefined"!=typeof Symbol&&Z(Symbol)&&"undefined"!=typeof Reflect&&Z(Reflect.ownKeys),tt=function(){var t,e=[],n=!1;function r(){n=!1;var t=e.slice(0);e.length=0;for(var r=0;r<t.length;r++)t[r]()}if("undefined"!=typeof Promise&&Z(Promise)){var o=Promise.resolve(),i=function(t){console.error(t)};t=function(){o.then(r).catch(i),q&&setTimeout(C)}}else t=function(){setTimeout(r,0)};return function(r,o){var i;if(e.push(function(){if(r)try{r.call(o)}catch(t){U(t,o,"nextTick")}else i&&i(o)}),n||(n=!0,t()),!r&&"undefined"!=typeof Promise)return new Promise(function(t,e){i=t})}}();Q="undefined"!=typeof Set&&Z(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var et=0,nt=function(){this.id=et++,this.subs=[]};nt.prototype.addSub=function(t){this.subs.push(t)},nt.prototype.removeSub=function(t){h(this.subs,t)},nt.prototype.depend=function(){nt.target&&nt.target.addDep(this)},nt.prototype.notify=function(){for(var t=this.subs.slice(),e=0,n=t.length;e<n;e++)t[e].update()},nt.target=null;var rt=[];var ot=Array.prototype,it=Object.create(ot);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=ot[t];R(it,t,function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2)}return o&&a.observeArray(o),a.dep.notify(),i})});var at=Object.getOwnPropertyNames(it),st={shouldConvert:!0},ct=function(t){(this.value=t,this.dep=new nt,this.vmCount=0,R(t,"__ob__",this),Array.isArray(t))?((H?ut:ft)(t,it,at),this.observeArray(t)):this.walk(t)};function ut(t,e,n){t.__proto__=e}function ft(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];R(t,i,e[i])}}function pt(t,e){var n;if(a(t))return y(t,"__ob__")&&t.__ob__ instanceof ct?n=t.__ob__:st.shouldConvert&&!K()&&(Array.isArray(t)||c(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new ct(t)),e&&n&&n.vmCount++,n}function lt(t,e,n,r,o){var i=new nt,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set,u=!o&&pt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return nt.target&&(i.depend(),u&&u.dep.depend(),Array.isArray(e)&&function t(e){for(var n=void 0,r=0,o=e.length;r<o;r++)(n=e[r])&&n.__ob__&&n.__ob__.dep.depend(),Array.isArray(n)&&t(n)}(e)),e},set:function(e){var r=s?s.call(t):n;e===r||e!=e&&r!=r||(c?c.call(t,e):n=e,u=!o&&pt(e),i.notify())}})}}function dt(t,e,n){if(Array.isArray(t)&&u(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(y(t,e))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(lt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function ht(t,e){if(Array.isArray(t)&&u(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||y(t,e)&&(delete t[e],n&&n.dep.notify())}}ct.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)lt(t,e[n],t[e[n]])},ct.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)pt(t[e])};var vt=D.optionMergeStrategies;function yt(t,e){if(!e)return t;for(var n,r,o,i=Object.keys(e),a=0;a<i.length;a++)r=t[n=i[a]],o=e[n],y(t,n)?c(r)&&c(o)&&yt(r,o):dt(t,n,o);return t}function mt(t,e,n){return n?t||e?function(){var r="function"==typeof e?e.call(n):e,o="function"==typeof t?t.call(n):void 0;return r?yt(r,o):o}:void 0:e?t?function(){return yt("function"==typeof e?e.call(this):e,t.call(this))}:e:t}function gt(t,e){return e?t?t.concat(e):Array.isArray(e)?e:[e]:t}function _t(t,e){var n=Object.create(t||null);return e?A(n,e):n}vt.data=function(t,e,n){return n?mt(t,e,n):e&&"function"!=typeof e?t:mt.call(this,t,e)},I.forEach(function(t){vt[t]=gt}),M.forEach(function(t){vt[t+"s"]=_t}),vt.watch=function(t,e){if(t===J&&(t=void 0),e===J&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var n={};for(var r in A(n,t),e){var o=n[r],i=e[r];o&&!Array.isArray(o)&&(o=[o]),n[r]=o?o.concat(i):Array.isArray(i)?i:[i]}return n},vt.props=vt.methods=vt.inject=vt.computed=function(t,e){if(!e)return Object.create(t||null);if(!t)return e;var n=Object.create(null);return A(n,t),A(n,e),n},vt.provide=mt;var bt=function(t,e){return void 0===e?t:e};function $t(t,e,n){"function"==typeof e&&(e=e.options),function(t){var e=t.props;if(e){var n,r,o={};if(Array.isArray(e))for(n=e.length;n--;)"string"==typeof(r=e[n])&&(o[_(r)]={type:null});else if(c(e))for(var i in e)r=e[i],o[_(i)]=c(r)?r:{type:r};t.props=o}}(e),function(t){var e=t.inject;if(Array.isArray(e))for(var n=t.inject={},r=0;r<e.length;r++)n[e[r]]=e[r]}(e),function(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"==typeof r&&(e[n]={bind:r,update:r})}}(e);var r=e.extends;if(r&&(t=$t(t,r,n)),e.mixins)for(var o=0,i=e.mixins.length;o<i;o++)t=$t(t,e.mixins[o],n);var a,s={};for(a in t)u(a);for(a in e)y(t,a)||u(a);function u(r){var o=vt[r]||bt;s[r]=o(t[r],e[r],n,r)}return s}function wt(t,e,n,r){if("string"==typeof n){var o=t[e];if(y(o,n))return o[n];var i=_(n);if(y(o,i))return o[i];var a=b(i);return y(o,a)?o[a]:o[n]||o[i]||o[a]}}function xt(t,e,n,r){var o=e[t],i=!y(n,t),a=n[t];if(At(Boolean,o.type)&&(i&&!y(o,"default")?a=!1:At(String,o.type)||""!==a&&a!==w(t)||(a=!0)),void 0===a){a=function(t,e,n){if(!y(e,"default"))return;var r=e.default;0;if(t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n])return t._props[n];return"function"==typeof r&&"Function"!==Ot(e.type)?r.call(t):r}(r,o,t);var s=st.shouldConvert;st.shouldConvert=!0,pt(a),st.shouldConvert=s}return a}function Ot(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function At(t,e){if(!Array.isArray(e))return Ot(e)===Ot(t);for(var n=0,r=e.length;n<r;n++)if(Ot(e[n])===Ot(t))return!0;return!1}var Ct=function(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.functionalContext=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},kt={child:{}};kt.child.get=function(){return this.componentInstance},Object.defineProperties(Ct.prototype,kt);var jt=function(t){void 0===t&&(t="");var e=new Ct;return e.text=t,e.isComment=!0,e};function St(t){return new Ct(void 0,void 0,void 0,String(t))}function Pt(t){var e=new Ct(t.tag,t.data,t.children,t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.isCloned=!0,e}function Et(t){for(var e=t.length,n=new Array(e),r=0;r<e;r++)n[r]=Pt(t[r]);return n}var Tt,Mt=m(function(t){var e="&"===t.charAt(0),n="~"===(t=e?t.slice(1):t).charAt(0),r="!"===(t=n?t.slice(1):t).charAt(0);return{name:t=r?t.slice(1):t,once:n,capture:r,passive:e}});function It(t){function e(){var t=arguments,n=e.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=n.slice(),o=0;o<r.length;o++)r[o].apply(null,t)}return e.fns=t,e}function Dt(t,e,n,o,i){if(r(e)){if(y(e,n))return t[n]=e[n],i||delete e[n],!0;if(y(e,o))return t[n]=e[o],i||delete e[o],!0}return!1}function Nt(t){return i(t)?[St(t)]:Array.isArray(t)?function t(e,a){var s=[];var c,u,f;for(c=0;c<e.length;c++)n(u=e[c])||"boolean"==typeof u||(f=s[s.length-1],Array.isArray(u)?s.push.apply(s,t(u,(a||"")+"_"+c)):i(u)?Rt(f)?f.text+=String(u):""!==u&&s.push(St(u)):Rt(u)&&Rt(f)?s[s.length-1]=St(f.text+u.text):(o(e._isVList)&&r(u.tag)&&n(u.key)&&r(a)&&(u.key="__vlist"+a+"_"+c+"__"),s.push(u)));return s}(t):void 0}function Rt(t){return r(t)&&r(t.text)&&!1===t.isComment}function Bt(t,e){return t.__esModule&&t.default&&(t=t.default),a(t)?e.extend(t):t}function Lt(t,e,n){n?Tt.$once(t,e):Tt.$on(t,e)}function Ut(t,e){Tt.$off(t,e)}function Vt(t,e,r){Tt=t,function(t,e,r,o,i){var a,s,c,u;for(a in t)s=t[a],c=e[a],u=Mt(a),n(s)||(n(c)?(n(s.fns)&&(s=t[a]=It(s)),r(u.name,s,u.once,u.capture,u.passive)):s!==c&&(c.fns=s,t[a]=c));for(a in e)n(t[a])&&o((u=Mt(a)).name,e[a],u.capture)}(e,r||{},Lt,Ut)}function Ht(t,e){var n={};if(!t)return n;for(var r=[],o=0,i=t.length;o<i;o++){var a=t[o];if(a.context!==e&&a.functionalContext!==e||!a.data||null==a.data.slot)r.push(a);else{var s=a.data.slot,c=n[s]||(n[s]=[]);"template"===a.tag?c.push.apply(c,a.children):c.push(a)}}return r.every(Ft)||(n.default=r),n}function Ft(t){return t.isComment||" "===t.text}function Wt(t,e){e=e||{};for(var n=0;n<t.length;n++)Array.isArray(t[n])?Wt(t[n],e):e[t[n].key]=t[n].fn;return e}var Gt=null;function qt(t,e,n){var r;return t.$el=e,t.$options.render||(t.$options.render=jt),Kt(t,"beforeMount"),r=function(){t._update(t._render(),n)},t._watcher=new oe(t,r,C),n=!1,null==t.$vnode&&(t._isMounted=!0,Kt(t,"mounted")),t}function Jt(t){for(;t&&(t=t.$parent);)if(t._inactive)return!0;return!1}function zt(t,e){if(e){if(t._directInactive=!1,Jt(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)zt(t.$children[n]);Kt(t,"activated")}}function Kt(t,e){var n=t.$options[e];if(n)for(var r=0,o=n.length;r<o;r++)try{n[r].call(t)}catch(n){U(n,t,e+" hook")}t._hasHookEvent&&t.$emit("hook:"+e)}var Xt=[],Zt=[],Qt={},Yt=!1,te=!1,ee=0;function ne(){var t,e;for(te=!0,Xt.sort(function(t,e){return t.id-e.id}),ee=0;ee<Xt.length;ee++)e=(t=Xt[ee]).id,Qt[e]=null,t.run();var n=Zt.slice(),r=Xt.slice();ee=Xt.length=Zt.length=0,Qt={},Yt=te=!1,function(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,zt(t[e],!0)}(n),function(t){var e=t.length;for(;e--;){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&Kt(r,"updated")}}(r),X&&D.devtools&&X.emit("flush")}var re=0,oe=function(t,e,n,r){this.vm=t,t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++re,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new Q,this.newDepIds=new Q,this.expression="","function"==typeof e?this.getter=e:(this.getter=function(t){if(!B.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}(e),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};oe.prototype.get=function(){var t,e;t=this,nt.target&&rt.push(nt.target),nt.target=t;var n,r=this.vm;try{e=this.getter.call(r,r)}catch(t){if(!this.user)throw t;U(t,r,'getter for watcher "'+this.expression+'"')}finally{this.deep&&(n=e,ie.clear(),function t(e,n){var r,o,i=Array.isArray(e);if((i||a(e))&&Object.isExtensible(e)){if(e.__ob__){var s=e.__ob__.dep.id;if(n.has(s))return;n.add(s)}if(i)for(r=e.length;r--;)t(e[r],n);else for(o=Object.keys(e),r=o.length;r--;)t(e[o[r]],n)}}(n,ie)),nt.target=rt.pop(),this.cleanupDeps()}return e},oe.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},oe.prototype.cleanupDeps=function(){for(var t=this.deps.length;t--;){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},oe.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():function(t){var e=t.id;if(null==Qt[e]){if(Qt[e]=!0,te){for(var n=Xt.length-1;n>ee&&Xt[n].id>t.id;)n--;Xt.splice(n+1,0,t)}else Xt.push(t);Yt||(Yt=!0,tt(ne))}}(this)},oe.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||a(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(t){U(t,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},oe.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},oe.prototype.depend=function(){for(var t=this.deps.length;t--;)this.deps[t].depend()},oe.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||h(this.vm._watchers,this);for(var t=this.deps.length;t--;)this.deps[t].removeSub(this);this.active=!1}};var ie=new Q;var ae={enumerable:!0,configurable:!0,get:C,set:C};function se(t,e,n){ae.get=function(){return this[e][n]},ae.set=function(t){this[e][n]=t},Object.defineProperty(t,n,ae)}function ce(t){t._watchers=[];var e=t.$options;e.props&&function(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;st.shouldConvert=i;var a=function(i){o.push(i);var a=xt(i,e,n,t);lt(r,i,a),i in t||se(t,"_props",i)};for(var s in e)a(s);st.shouldConvert=!0}(t,e.props),e.methods&&function(t,e){t.$options.props;for(var n in e)t[n]=null==e[n]?C:x(e[n],t)}(t,e.methods),e.data?function(t){var e=t.$options.data;c(e=t._data="function"==typeof e?function(t,e){try{return t.call(e)}catch(t){return U(t,e,"data()"),{}}}(e,t):e||{})||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);for(;o--;){var i=n[o];r&&y(r,i)||(void 0,36!==(a=(i+"").charCodeAt(0))&&95!==a&&se(t,"_data",i))}var a;pt(e,!0)}(t):pt(t._data={},!0),e.computed&&function(t,e){var n=t._computedWatchers=Object.create(null);for(var r in e){var o=e[r],i="function"==typeof o?o:o.get;n[r]=new oe(t,i,C,ue),r in t||fe(t,r,o)}}(t,e.computed),e.watch&&e.watch!==J&&function(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)le(t,n,r[o]);else le(t,n,r)}}(t,e.watch)}var ue={lazy:!0};function fe(t,e,n){"function"==typeof n?(ae.get=pe(e),ae.set=C):(ae.get=n.get?!1!==n.cache?pe(e):n.get:C,ae.set=n.set?n.set:C),Object.defineProperty(t,e,ae)}function pe(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),nt.target&&e.depend(),e.value}}function le(t,e,n,r){return c(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=t[n]),t.$watch(e,n,r)}function de(t,e){if(t){for(var n=Object.create(null),r=Y?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){for(var i=r[o],a=t[i],s=e;s;){if(s._provided&&a in s._provided){n[i]=s._provided[a];break}s=s.$parent}0}return n}}function he(t,e){for(var n in e)t[_(n)]=e[n]}var ve={init:function(t,e,n,o){if(!t.componentInstance||t.componentInstance._isDestroyed)(t.componentInstance=function(t,e,n,o){var i=t.componentOptions,a={_isComponent:!0,parent:e,propsData:i.propsData,_componentTag:i.tag,_parentVnode:t,_parentListeners:i.listeners,_renderChildren:i.children,_parentElm:n||null,_refElm:o||null},s=t.data.inlineTemplate;r(s)&&(a.render=s.render,a.staticRenderFns=s.staticRenderFns);return new i.Ctor(a)}(t,Gt,n,o)).$mount(e?t.elm:void 0,e);else if(t.data.keepAlive){var i=t;ve.prepatch(i,i)}},prepatch:function(t,e){var n=e.componentOptions;!function(t,e,n,r,o){var i=!!(o||t.$options._renderChildren||r.data.scopedSlots||t.$scopedSlots!==N);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=o,t.$attrs=r.data&&r.data.attrs,t.$listeners=n,e&&t.$options.props){st.shouldConvert=!1;for(var a=t._props,s=t.$options._propKeys||[],c=0;c<s.length;c++){var u=s[c];a[u]=xt(u,t.$options.props,e,t)}st.shouldConvert=!0,t.$options.propsData=e}if(n){var f=t.$options._parentListeners;t.$options._parentListeners=n,Vt(t,n,f)}i&&(t.$slots=Ht(o,r.context),t.$forceUpdate())}(e.componentInstance=t.componentInstance,n.propsData,n.listeners,e,n.children)},insert:function(t){var e,n=t.context,r=t.componentInstance;r._isMounted||(r._isMounted=!0,Kt(r,"mounted")),t.data.keepAlive&&(n._isMounted?((e=r)._inactive=!1,Zt.push(e)):zt(r,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?function t(e,n){if(!(n&&(e._directInactive=!0,Jt(e))||e._inactive)){e._inactive=!0;for(var r=0;r<e.$children.length;r++)t(e.$children[r]);Kt(e,"deactivated")}}(e,!0):e.$destroy())}},ye=Object.keys(ve);function me(t,e,i,s,c){if(!n(t)){var u=i.$options._base;if(a(t)&&(t=u.extend(t)),"function"==typeof t){var f;if(n(t.cid)&&void 0===(t=function(t,e,i){if(o(t.error)&&r(t.errorComp))return t.errorComp;if(r(t.resolved))return t.resolved;if(o(t.loading)&&r(t.loadingComp))return t.loadingComp;if(!r(t.contexts)){var s=t.contexts=[i],c=!0,u=function(){for(var t=0,e=s.length;t<e;t++)s[t].$forceUpdate()},f=E(function(n){t.resolved=Bt(n,e),c||u()}),p=E(function(e){r(t.errorComp)&&(t.error=!0,u())}),l=t(f,p);return a(l)&&("function"==typeof l.then?n(t.resolved)&&l.then(f,p):r(l.component)&&"function"==typeof l.component.then&&(l.component.then(f,p),r(l.error)&&(t.errorComp=Bt(l.error,e)),r(l.loading)&&(t.loadingComp=Bt(l.loading,e),0===l.delay?t.loading=!0:setTimeout(function(){n(t.resolved)&&n(t.error)&&(t.loading=!0,u())},l.delay||200)),r(l.timeout)&&setTimeout(function(){n(t.resolved)&&p(null)},l.timeout))),c=!1,t.loading?t.loadingComp:t.resolved}t.contexts.push(i)}(f=t,u,i)))return function(t,e,n,r,o){var i=jt();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}(f,e,i,s,c);e=e||{},Me(t),r(e.model)&&function(t,e){var n=t.model&&t.model.prop||"value",o=t.model&&t.model.event||"input";(e.props||(e.props={}))[n]=e.model.value;var i=e.on||(e.on={});r(i[o])?i[o]=[e.model.callback].concat(i[o]):i[o]=e.model.callback}(t.options,e);var p=function(t,e,o){var i=e.options.props;if(!n(i)){var a={},s=t.attrs,c=t.props;if(r(s)||r(c))for(var u in i){var f=w(u);Dt(a,c,u,f,!0)||Dt(a,s,u,f,!1)}return a}}(e,t);if(o(t.options.functional))return function(t,e,n,o,i){var a={},s=t.options.props;if(r(s))for(var c in s)a[c]=xt(c,s,e||{});else r(n.attrs)&&he(a,n.attrs),r(n.props)&&he(a,n.props);var u=Object.create(o),f=t.options.render.call(null,function(t,e,n,r){return $e(u,t,e,n,r,!0)},{data:n,props:a,children:i,parent:o,listeners:n.on||{},injections:de(t.options.inject,o),slots:function(){return Ht(i,o)}});return f instanceof Ct&&(f.functionalContext=o,f.functionalOptions=t.options,n.slot&&((f.data||(f.data={})).slot=n.slot)),f}(t,p,e,i,s);var l=e.on;if(o(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}!function(t){t.hook||(t.hook={});for(var e=0;e<ye.length;e++){var n=ye[e],r=t.hook[n],o=ve[n];t.hook[n]=r?ge(o,r):o}}(e);var h=t.options.name||c;return new Ct("vue-component-"+t.cid+(h?"-"+h:""),e,void 0,void 0,void 0,i,{Ctor:t,propsData:p,listeners:l,tag:c,children:s},f)}}}function ge(t,e){return function(n,r,o,i){t(n,r,o,i),e(n,r,o,i)}}var _e=1,be=2;function $e(t,e,a,s,c,u){return(Array.isArray(a)||i(a))&&(c=s,s=a,a=void 0),o(u)&&(c=be),function(t,e,o,i,a){if(r(o)&&r(o.__ob__))return jt();r(o)&&r(o.is)&&(e=o.is);if(!e)return jt();0;Array.isArray(i)&&"function"==typeof i[0]&&((o=o||{}).scopedSlots={default:i[0]},i.length=0);a===be?i=Nt(i):a===_e&&(i=function(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}(i));var s,c;if("string"==typeof e){var u;c=D.getTagNamespace(e),s=D.isReservedTag(e)?new Ct(D.parsePlatformTagName(e),o,i,void 0,void 0,t):r(u=wt(t.$options,"components",e))?me(u,o,t,i,e):new Ct(e,o,i,void 0,void 0,t)}else s=me(e,o,t,i);return r(s)?(c&&function t(e,o){e.ns=o;if("foreignObject"===e.tag)return;if(r(e.children))for(var i=0,a=e.children.length;i<a;i++){var s=e.children[i];r(s.tag)&&n(s.ns)&&t(s,o)}}(s,c),s):jt()}(t,e,a,s,c)}function we(t,e){var n,o,i,s,c;if(Array.isArray(t)||"string"==typeof t)for(n=new Array(t.length),o=0,i=t.length;o<i;o++)n[o]=e(t[o],o);else if("number"==typeof t)for(n=new Array(t),o=0;o<t;o++)n[o]=e(o+1,o);else if(a(t))for(s=Object.keys(t),n=new Array(s.length),o=0,i=s.length;o<i;o++)c=s[o],n[o]=e(t[c],c,o);return r(n)&&(n._isVList=!0),n}function xe(t,e,n,r){var o=this.$scopedSlots[t];if(o)return n=n||{},r&&(n=A(A({},r),n)),o(n)||e;var i=this.$slots[t];return i||e}function Oe(t){return wt(this.$options,"filters",t)||j}function Ae(t,e,n){var r=D.keyCodes[e]||n;return Array.isArray(r)?-1===r.indexOf(t):r!==t}function Ce(t,e,n,r,o){if(n)if(a(n)){var i;Array.isArray(n)&&(n=function(t){for(var e={},n=0;n<t.length;n++)t[n]&&A(e,t[n]);return e}(n));var s=function(a){if("class"===a||"style"===a||d(a))i=t;else{var s=t.attrs&&t.attrs.type;i=r||D.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}a in i||(i[a]=n[a],o&&((t.on||(t.on={}))["update:"+a]=function(t){n[a]=t}))};for(var c in n)s(c)}else;return t}function ke(t,e){var n=this._staticTrees[t];return n&&!e?Array.isArray(n)?Et(n):Pt(n):(Se(n=this._staticTrees[t]=this.$options.staticRenderFns[t].call(this._renderProxy),"__static__"+t,!1),n)}function je(t,e,n){return Se(t,"__once__"+e+(n?"_"+n:""),!0),t}function Se(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!=typeof t[r]&&Pe(t[r],e+"_"+r,n);else Pe(t,e,n)}function Pe(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ee(t,e){if(e)if(c(e)){var n=t.on=t.on?A({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(i,o):i}}else;return t}var Te=0;function Me(t){var e=t.options;if(t.super){var n=Me(t.super);if(n!==t.superOptions){t.superOptions=n;var r=function(t){var e,n=t.options,r=t.extendOptions,o=t.sealedOptions;for(var i in n)n[i]!==o[i]&&(e||(e={}),e[i]=Ie(n[i],r[i],o[i]));return e}(t);r&&A(t.extendOptions,r),(e=t.options=$t(n,t.extendOptions)).name&&(e.components[e.name]=t)}}return e}function Ie(t,e,n){if(Array.isArray(t)){var r=[];n=Array.isArray(n)?n:[n],e=Array.isArray(e)?e:[e];for(var o=0;o<t.length;o++)(e.indexOf(t[o])>=0||n.indexOf(t[o])<0)&&r.push(t[o]);return r}return t}function De(t){this._init(t)}function Ne(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name,a=function(t){this._init(t)};return(a.prototype=Object.create(n.prototype)).constructor=a,a.cid=e++,a.options=$t(n.options,t),a.super=n,a.options.props&&function(t){var e=t.options.props;for(var n in e)se(t.prototype,"_props",n)}(a),a.options.computed&&function(t){var e=t.options.computed;for(var n in e)fe(t.prototype,n,e[n])}(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,M.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=A({},a.options),o[r]=a,a}}De.prototype._init=function(t){var e=this;e._uid=Te++,e._isVue=!0,t&&t._isComponent?function(t,e){var n=t.$options=Object.create(t.constructor.options);n.parent=e.parent,n.propsData=e.propsData,n._parentVnode=e._parentVnode,n._parentListeners=e._parentListeners,n._renderChildren=e._renderChildren,n._componentTag=e._componentTag,n._parentElm=e._parentElm,n._refElm=e._refElm,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}(e,t):e.$options=$t(Me(e.constructor),t||{},e),e._renderProxy=e,e._self=e,function(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}(e),function(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&Vt(t,e)}(e),function(t){t._vnode=null,t._staticTrees=null;var e=t.$vnode=t.$options._parentVnode,n=e&&e.context;t.$slots=Ht(t.$options._renderChildren,n),t.$scopedSlots=N,t._c=function(e,n,r,o){return $e(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return $e(t,e,n,r,o,!0)};var r=e&&e.data;lt(t,"$attrs",r&&r.attrs,0,!0),lt(t,"$listeners",r&&r.on,0,!0)}(e),Kt(e,"beforeCreate"),function(t){var e=de(t.$options.inject,t);e&&(st.shouldConvert=!1,Object.keys(e).forEach(function(n){lt(t,n,e[n])}),st.shouldConvert=!0)}(e),ce(e),function(t){var e=t.$options.provide;e&&(t._provided="function"==typeof e?e.call(t):e)}(e),Kt(e,"created"),e.$options.el&&e.$mount(e.$options.el)},function(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=dt,t.prototype.$delete=ht,t.prototype.$watch=function(t,e,n){if(c(e))return le(this,t,e,n);(n=n||{}).user=!0;var r=new oe(this,t,e,n);return n.immediate&&e.call(this,r.value),function(){r.teardown()}}}(De),function(t){var e=/^hook:/;t.prototype.$on=function(t,n){if(Array.isArray(t))for(var r=0,o=t.length;r<o;r++)this.$on(t[r],n);else(this._events[t]||(this._events[t]=[])).push(n),e.test(t)&&(this._hasHookEvent=!0);return this},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,o=t.length;r<o;r++)this.$off(t[r],e);return n}var i,a=n._events[t];if(!a)return n;if(1===arguments.length)return n._events[t]=null,n;for(var s=a.length;s--;)if((i=a[s])===e||i.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this._events[t];if(e){e=e.length>1?O(e):e;for(var n=O(arguments,1),r=0,o=e.length;r<o;r++)try{e[r].apply(this,n)}catch(e){U(e,this,'event handler for "'+t+'"')}}return this}}(De),function(t){t.prototype._update=function(t,e){var n=this;n._isMounted&&Kt(n,"beforeUpdate");var r=n.$el,o=n._vnode,i=Gt;Gt=n,n._vnode=t,o?n.$el=n.__patch__(o,t):(n.$el=n.__patch__(n.$el,t,e,!1,n.$options._parentElm,n.$options._refElm),n.$options._parentElm=n.$options._refElm=null),Gt=i,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Kt(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||h(e.$children,t),t._watcher&&t._watcher.teardown();for(var n=t._watchers.length;n--;)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Kt(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null)}}}(De),function(t){t.prototype.$nextTick=function(t){return tt(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,o=n.staticRenderFns,i=n._parentVnode;if(e._isMounted)for(var a in e.$slots)e.$slots[a]=Et(e.$slots[a]);e.$scopedSlots=i&&i.data.scopedSlots||N,o&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=i;try{t=r.call(e._renderProxy,e.$createElement)}catch(n){U(n,e,"render function"),t=e._vnode}return t instanceof Ct||(t=jt()),t.parent=i,t},t.prototype._o=je,t.prototype._n=p,t.prototype._s=f,t.prototype._l=we,t.prototype._t=xe,t.prototype._q=S,t.prototype._i=P,t.prototype._m=ke,t.prototype._f=Oe,t.prototype._k=Ae,t.prototype._b=Ce,t.prototype._v=St,t.prototype._e=jt,t.prototype._u=Wt,t.prototype._g=Ee}(De);var Re=[String,RegExp,Array];function Be(t){return t&&(t.Ctor.options.name||t.tag)}function Le(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"==typeof t?t.split(",").indexOf(e)>-1:(n=t,"[object RegExp]"===s.call(n)&&t.test(e));var n}function Ue(t,e,n){for(var r in t){var o=t[r];if(o){var i=Be(o.componentOptions);i&&!n(i)&&(o!==e&&Ve(o),t[r]=null)}}}function Ve(t){t&&t.componentInstance.$destroy()}var He={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:Re,exclude:Re},created:function(){this.cache=Object.create(null)},destroyed:function(){for(var t in this.cache)Ve(this.cache[t])},watch:{include:function(t){Ue(this.cache,this._vnode,function(e){return Le(t,e)})},exclude:function(t){Ue(this.cache,this._vnode,function(e){return!Le(t,e)})}},render:function(){var t=function(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(r(n)&&r(n.componentOptions))return n}}(this.$slots.default),e=t&&t.componentOptions;if(e){var n=Be(e);if(n&&(this.include&&!Le(this.include,n)||this.exclude&&Le(this.exclude,n)))return t;var o=null==t.key?e.Ctor.cid+(e.tag?"::"+e.tag:""):t.key;this.cache[o]?t.componentInstance=this.cache[o].componentInstance:this.cache[o]=t,t.data.keepAlive=!0}return t}}};!function(t){var e={get:function(){return D}};Object.defineProperty(t,"config",e),t.util={warn:L,extend:A,mergeOptions:$t,defineReactive:lt},t.set=dt,t.delete=ht,t.nextTick=tt,t.options=Object.create(null),M.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,A(t.options.components,He),function(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=O(arguments,1);return n.unshift(this),"function"==typeof t.install?t.install.apply(t,n):"function"==typeof t&&t.apply(null,n),e.push(t),this}}(t),function(t){t.mixin=function(t){return this.options=$t(this.options,t),this}}(t),Ne(t),function(t){M.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&c(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"==typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}(t)}(De),Object.defineProperty(De.prototype,"$isServer",{get:K}),Object.defineProperty(De.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),De.version="2.4.1",De.mpvueVersion="1.0.12";var Fe=l("template,script,style,element,content,slot,link,meta,svg,view,a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select,slider,slider-neighbor,indicator,trisition,trisition-group,canvas,list,cell,header,loading,loading-indicator,refresh,scrollable,scroller,video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown",!0),We=l("style,class");l("web,spinner,switch,video,textarea,canvas,indicator,marquee,countdown",!0),l("embed,img,image,input,link,meta",!0);function Ge(t){return t&&t.$attrs?t.$attrs.mpcomid:"0"}var qe={tap:["tap","click"],touchstart:["touchstart"],touchmove:["touchmove"],touchcancel:["touchcancel"],touchend:["touchend"],longtap:["longtap"],input:["input"],blur:["change","blur"],submit:["submit"],focus:["focus"],scrolltoupper:["scrolltoupper"],scrolltolower:["scrolltolower"],scroll:["scroll"]},Je={};var ze=Object.freeze({createElement:function(t,e){return Je},createElementNS:function(t,e){return Je},createTextNode:function(t){return Je},createComment:function(t){return Je},insertBefore:function(t,e,n){},removeChild:function(t,e){},appendChild:function(t,e){},parentNode:function(t){return Je},nextSibling:function(t){return Je},tagName:function(t){return"div"},setTextContent:function(t,e){return Je},setAttribute:function(t,e,n){return Je}}),Ke={create:function(t,e){Xe(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Xe(t,!0),Xe(e))},destroy:function(t){Xe(t,!0)}};function Xe(t,e){var n=t.data.ref;if(n){var r=t.context,o=t.componentInstance||t.elm,i=r.$refs;e?Array.isArray(i[n])?h(i[n],o):i[n]===o&&(i[n]=void 0):t.data.refInFor?Array.isArray(i[n])?i[n].indexOf(o)<0&&i[n].push(o):i[n]=[o]:i[n]=o}}var Ze=new Ct("",{},[]),Qe=["create","activate","update","remove","destroy"];function Ye(t,e){return t.key===e.key&&(t.tag===e.tag&&t.isComment===e.isComment&&r(t.data)===r(e.data)&&function(t,e){if("input"!==t.tag)return!0;var n,o=r(n=t.data)&&r(n=n.attrs)&&n.type,i=r(n=e.data)&&r(n=n.attrs)&&n.type;return o===i}(t,e)||o(t.isAsyncPlaceholder)&&t.asyncFactory===e.asyncFactory&&n(e.asyncFactory.error))}function tn(t,e,n){var o,i,a={};for(o=e;o<=n;++o)r(i=t[o].key)&&(a[i]=o);return a}var en=function(t){var e,a,s={},c=t.modules,u=t.nodeOps;for(e=0;e<Qe.length;++e)for(s[Qe[e]]=[],a=0;a<c.length;++a)r(c[a][Qe[e]])&&s[Qe[e]].push(c[a][Qe[e]]);function f(t){var e=u.parentNode(t);r(e)&&u.removeChild(e,t)}function p(t,e,n,i,a){if(t.isRootInsert=!a,!function(t,e,n,i){var a=t.data;if(r(a)){var c=r(t.componentInstance)&&a.keepAlive;if(r(a=a.hook)&&r(a=a.init)&&a(t,!1,n,i),r(t.componentInstance))return d(t,e),o(c)&&function(t,e,n,o){for(var i,a=t;a.componentInstance;)if(a=a.componentInstance._vnode,r(i=a.data)&&r(i=i.transition)){for(i=0;i<s.activate.length;++i)s.activate[i](Ze,a);e.push(a);break}h(n,t.elm,o)}(t,e,n,i),!0}}(t,e,n,i)){var c=t.data,f=t.children,p=t.tag;r(p)?(t.elm=t.ns?u.createElementNS(t.ns,p):u.createElement(p,t),g(t),v(t,f,e),r(c)&&m(t,e),h(n,t.elm,i)):o(t.isComment)?(t.elm=u.createComment(t.text),h(n,t.elm,i)):(t.elm=u.createTextNode(t.text),h(n,t.elm,i))}}function d(t,e){r(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,y(t)?(m(t,e),g(t)):(Xe(t),e.push(t))}function h(t,e,n){r(t)&&(r(n)?n.parentNode===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function v(t,e,n){if(Array.isArray(e))for(var r=0;r<e.length;++r)p(e[r],n,t.elm,null,!0);else i(t.text)&&u.appendChild(t.elm,u.createTextNode(t.text))}function y(t){for(;t.componentInstance;)t=t.componentInstance._vnode;return r(t.tag)}function m(t,n){for(var o=0;o<s.create.length;++o)s.create[o](Ze,t);r(e=t.data.hook)&&(r(e.create)&&e.create(Ze,t),r(e.insert)&&n.push(t))}function g(t){for(var e,n=t;n;)r(e=n.context)&&r(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,""),n=n.parent;r(e=Gt)&&e!==t.context&&r(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,"")}function _(t,e,n,r,o,i){for(;r<=o;++r)p(n[r],i,t,e)}function b(t){var e,n,o=t.data;if(r(o))for(r(e=o.hook)&&r(e=e.destroy)&&e(t),e=0;e<s.destroy.length;++e)s.destroy[e](t);if(r(e=t.children))for(n=0;n<t.children.length;++n)b(t.children[n])}function $(t,e,n,o){for(;n<=o;++n){var i=e[n];r(i)&&(r(i.tag)?(w(i),b(i)):f(i.elm))}}function w(t,e){if(r(e)||r(t.data)){var n,o=s.remove.length+1;for(r(e)?e.listeners+=o:e=function(t,e){function n(){0==--n.listeners&&f(t)}return n.listeners=e,n}(t.elm,o),r(n=t.componentInstance)&&r(n=n._vnode)&&r(n.data)&&w(n,e),n=0;n<s.remove.length;++n)s.remove[n](t,e);r(n=t.data.hook)&&r(n=n.remove)?n(t,e):e()}else f(t.elm)}function x(t,e,i,a){if(t!==e){var c=e.elm=t.elm;if(o(t.isAsyncPlaceholder))r(e.asyncFactory.resolved)?C(t.elm,e,i):e.isAsyncPlaceholder=!0;else if(o(e.isStatic)&&o(t.isStatic)&&e.key===t.key&&(o(e.isCloned)||o(e.isOnce)))e.componentInstance=t.componentInstance;else{var f,l=e.data;r(l)&&r(f=l.hook)&&r(f=f.prepatch)&&f(t,e);var d=t.children,h=e.children;if(r(l)&&y(e)){for(f=0;f<s.update.length;++f)s.update[f](t,e);r(f=l.hook)&&r(f=f.update)&&f(t,e)}n(e.text)?r(d)&&r(h)?d!==h&&function(t,e,o,i,a){for(var s,c,f,l=0,d=0,h=e.length-1,v=e[0],y=e[h],m=o.length-1,g=o[0],b=o[m],w=!a;l<=h&&d<=m;)n(v)?v=e[++l]:n(y)?y=e[--h]:Ye(v,g)?(x(v,g,i),v=e[++l],g=o[++d]):Ye(y,b)?(x(y,b,i),y=e[--h],b=o[--m]):Ye(v,b)?(x(v,b,i),w&&u.insertBefore(t,v.elm,u.nextSibling(y.elm)),v=e[++l],b=o[--m]):Ye(y,g)?(x(y,g,i),w&&u.insertBefore(t,y.elm,v.elm),y=e[--h],g=o[++d]):(n(s)&&(s=tn(e,l,h)),n(c=r(g.key)?s[g.key]:null)?(p(g,i,t,v.elm),g=o[++d]):Ye(f=e[c],g)?(x(f,g,i),e[c]=void 0,w&&u.insertBefore(t,f.elm,v.elm),g=o[++d]):(p(g,i,t,v.elm),g=o[++d]));l>h?_(t,n(o[m+1])?null:o[m+1].elm,o,d,m,i):d>m&&$(0,e,l,h)}(c,d,h,i,a):r(h)?(r(t.text)&&u.setTextContent(c,""),_(c,null,h,0,h.length-1,i)):r(d)?$(0,d,0,d.length-1):r(t.text)&&u.setTextContent(c,""):t.text!==e.text&&u.setTextContent(c,e.text),r(l)&&r(f=l.hook)&&r(f=f.postpatch)&&f(t,e)}}}function O(t,e,n){if(o(n)&&r(t.parent))t.parent.data.pendingInsert=e;else for(var i=0;i<e.length;++i)e[i].data.hook.insert(e[i])}var A=l("attrs,style,class,staticClass,staticStyle,key");function C(t,n,i){if(o(n.isComment)&&r(n.asyncFactory))return n.elm=t,n.isAsyncPlaceholder=!0,!0;n.elm=t;var a=n.tag,s=n.data,c=n.children;if(r(s)&&(r(e=s.hook)&&r(e=e.init)&&e(n,!0),r(e=n.componentInstance)))return d(n,i),!0;if(r(a)){if(r(c))if(t.hasChildNodes()){for(var u=!0,f=t.firstChild,p=0;p<c.length;p++){if(!f||!C(f,c[p],i)){u=!1;break}f=f.nextSibling}if(!u||f)return!1}else v(n,c,i);if(r(s))for(var l in s)if(!A(l)){m(n,i);break}}else t.data!==n.text&&(t.data=n.text);return!0}return function(t,e,i,a,c,f){if(!n(e)){var l,d=!1,h=[];if(n(t))d=!0,p(e,h,c,f);else{var v=r(t.nodeType);if(!v&&Ye(t,e))x(t,e,h,a);else{if(v){if(1===t.nodeType&&t.hasAttribute(T)&&(t.removeAttribute(T),i=!0),o(i)&&C(t,e,h))return O(e,h,!0),t;l=t,t=new Ct(u.tagName(l).toLowerCase(),{},[],void 0,l)}var m=t.elm,g=u.parentNode(m);if(p(e,h,m._leaveCb?null:g,u.nextSibling(m)),r(e.parent)){for(var _=e.parent;_;)_.elm=e.elm,_=_.parent;if(y(e))for(var w=0;w<s.create.length;++w)s.create[w](Ze,e.parent)}r(g)?$(0,[t],0,0):r(t.tag)&&b(t)}}return O(e,h,d),e.elm}r(t)&&b(t)}}({nodeOps:ze,modules:[Ke]});function nn(t,e,n){var r,o=t.$options[e];if("onError"===e&&o&&(o=[o]),o)for(var i=0,a=o.length;i<a;i++)try{r=o[i].call(t,n)}catch(n){U(n,t,e+" hook")}return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return nn(t,e,n)}),r}function rn(t,e,n){if(t){var r,o,i;if(Array.isArray(t))for(r=t.length;r--;)"string"==typeof(o=t[r])&&(e[i=_(o)]={type:null});else if(c(t))for(var a in t)o=t[a],e[i=_(a)]=c(o)?o:{type:o};for(var s in e)if(e.hasOwnProperty(s)){var u=e[s];u.default&&(u.value=u.default);var f=u.observer;u.observer=function(t,e){n[i]=t,"function"==typeof f&&f.call(n,t,e)}}return e}}function on(t){var e=function t(e,n){void 0===n&&(n=[]);var r=(e||{}).$parent;return r?(n.unshift(Ge(r)),r.$parent?t(r,n):n):n}(t).join(","),n=e+(e?",":"")+Ge(t),r=Object.assign(function(t){return[].concat(Object.keys(t._data||{}),Object.keys(t._props||{}),Object.keys(t._mpProps||{}),Object.keys(t._computedWatchers||{})).reduce(function(e,n){return e[n]=t[n],e},{})}(t),{$k:n,$kk:n+",",$p:e}),o={};return o["$root."+n]=r,o}var an=function(t,e,n){var r,o,i,a=null,s=0;function c(){s=!1===n.leading?0:Date.now(),a=null,i=t.apply(r,o),a||(r=o=null)}return n||(n={}),function(u,f){var p=Date.now();s||!1!==n.leading||(s=p);var l=e-(p-s);return r=this,o=o?[u,Object.assign(o[1],f)]:[u,f],l<=0||l>e?(clearTimeout(a),a=null,s=p,i=t.apply(r,o),a||(r=o=null)):a||!1===n.trailing||(a=setTimeout(c,l)),i}}(function(t,e){t(e)},50);function sn(t){var e=t.$root.$mp||{},n=e.mpType;void 0===n&&(n="");var r=e.page;if("app"!==n&&r&&"function"==typeof r.setData)return r}return De.config.mustUseProp=function(){},De.config.isReservedTag=Fe,De.config.isReservedAttr=We,De.config.getTagNamespace=function(){},De.config.isUnknownElement=function(){},De.prototype.__patch__=function(){en.apply(this,arguments),this.$updateDataToMP()},De.prototype.$mount=function(t,e){var n=this,r=this.$options;if(r&&(r.render||r.mpType)){var o=r.mpType;return void 0===o&&(o="page"),this._initMP(o,function(){return qt(n,void 0,void 0)})}return qt(this,void 0,void 0)},De.prototype._initMP=function(t,n){var r=this.$root;r.$mp||(r.$mp={});var o,i,a=r.$mp;if(a.status)return"app"===t?nn(this,"onLaunch",a.appOptions):nn(this,"onLoad",a.query),n();if(a.mpType=t,a.status="register","app"===t)e.App({globalData:{appOptions:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLaunch:function(t){void 0===t&&(t={}),a.app=this,a.status="launch",this.globalData.appOptions=a.appOptions=t,nn(r,"onLaunch",t),n()},onShow:function(t){void 0===t&&(t={}),a.status="show",this.globalData.appOptions=a.appOptions=t,nn(r,"onShow",t)},onHide:function(){a.status="hide",nn(r,"onHide")},onError:function(t){nn(r,"onError",t)},onUniNViewMessage:function(t){nn(r,"onUniNViewMessage",t)}});else if("component"===t)i=(o=r)._mpProps={},Object.keys(o.$options.properties||{}).forEach(function(t){t in o||(se(o,"_mpProps",t),i[t]=void 0)}),pt(i,!0),e.Component({properties:function(t){var e=t.$options.properties,n=t.$options.props,r={};return rn(e,r,t),rn(n,r,t),r}(r),data:{$root:{}},methods:{handleProxy:function(t){return r.$handleProxyWithVue(t)}},created:function(){a.status="created",a.page=this},attached:function(){a.status="attached",nn(r,"attached")},ready:function(){a.status="ready",nn(r,"ready"),n(),r.$nextTick(function(){r._initDataToMP()})},moved:function(){nn(r,"moved")},detached:function(){a.status="detached",nn(r,"detached")}});else{var s=e.getApp();e.Page({data:{$root:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLoad:function(t){r.__wxWebviewId__=this.__wxWebviewId__,a.page=this,a.query=t,a.status="load",function(t,e){var n=e.$mp;t&&t.globalData&&(n.appOptions=t.globalData.appOptions)}(s,r),r.$options&&"function"==typeof r.$options.data&&Object.assign(r.$data,r.$options.data()),nn(r,"onLoad",t)},onShow:function(){r.__wxWebviewId__=this.__wxWebviewId__,a.page=this,a.status="show",nn(r,"onShow"),r.$nextTick(function(){r._initDataToMP()})},onReady:function(){a.status="ready",nn(r,"onReady"),n()},onHide:function(){a.status="hide",nn(r,"onHide")},onUnload:function(){a.status="unload",nn(r,"onUnload"),a.page=null},onPullDownRefresh:function(){nn(r,"onPullDownRefresh")},onReachBottom:function(){nn(r,"onReachBottom")},onShareAppMessage:r.$options.onShareAppMessage?function(t){return nn(r,"onShareAppMessage",t)}:null,onPageScroll:function(t){nn(r,"onPageScroll",t)},onTabItemTap:function(t){nn(r,"onTabItemTap",t)}})}},De.prototype.$updateDataToMP=function(){var e=sn(this);if(e){var n=on(this);an(e.setData.bind(e),JSON.parse(JSON.stringify(function(e,n){for(var r=Object.keys(e),o={},i=0,a=r.length;i<a;++i){for(var s=r[i],c=s.split("."),u=n[c[0]],f=1,p=c.length;f<p&&void 0!==u;++f)u=u[c[f]];t(o,s,e[s],u)}return o}(n,e.data))))}},De.prototype._initDataToMP=function(){var t=sn(this);if(t){var e=function t(e,n){void 0===n&&(n={});var r=e.$children;return r&&r.length&&r.forEach(function(e){return t(e,n)}),Object.assign(n,on(e))}(this.$root);t.setData(JSON.parse(JSON.stringify(e)))}},De.prototype.$handleProxyWithVue=function(t){var e=this.$root,n=t.type,r=t.target;void 0===r&&(r={});var o=(t.currentTarget||r).dataset;void 0===o&&(o={});var i=o.comkey;void 0===i&&(i="");var a=o.eventid,s=function(t,e){void 0===e&&(e=[]);var n=e.slice(1);return n.length?n.reduce(function(t,e){for(var n=t.$children.length,r=0;r<n;r++){var o=t.$children[r];if(Ge(o)===e)return t=o}return t},t):t}(e,i.split(","));if(s){var c=qe[n]||[n],u=function t(e,n,r){void 0===r&&(r=[]);var o=[];if(!e||!e.tag)return o;var i=e||{},a=i.data;void 0===a&&(a={});var s=i.children;void 0===s&&(s=[]);var c=i.componentInstance;c?Object.keys(c.$slots).forEach(function(e){var i=c.$slots[e];(Array.isArray(i)?i:[i]).forEach(function(e){o=o.concat(t(e,n,r))})}):s.forEach(function(e){o=o.concat(t(e,n,r))});var u=a.attrs,f=a.on;return u&&f&&u.eventid===n?(r.forEach(function(t){var e=f[t];"function"==typeof e?o.push(e):Array.isArray(e)&&(o=o.concat(e))}),o):o}(s._vnode,a,c);if(u.length){var f=function(t){var e=t.type,n=t.timeStamp,r=t.touches,o=t.detail;void 0===o&&(o={});var i=t.target;void 0===i&&(i={});var a=t.currentTarget;void 0===a&&(a={});var s={mp:t,type:e,timeStamp:n,x:o.x,y:o.y,target:Object.assign({},i,o),detail:o,currentTarget:a,stopPropagation:C,preventDefault:C};return r&&r.length&&(Object.assign(s,r[0]),s.touches=r),s}(t);if(1===u.length)return u[0](f);u.forEach(function(t){return t(f)})}}},De},t.exports=n()}).call(e,n(6))},3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"Store",function(){return f}),n.d(e,"install",function(){return g}),n.d(e,"mapState",function(){return _}),n.d(e,"mapMutations",function(){return b}),n.d(e,"mapGetters",function(){return $}),n.d(e,"mapActions",function(){return w}),n.d(e,"createNamespacedHelpers",function(){return x});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var r=function(t){if(Number(t.version.split(".")[0])>=2)t.mixin({beforeCreate:n});else{var e=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[n].concat(t.init):n,e.call(this,t)}}function n(){var t=this.$options;t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},o="undefined"!=typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function i(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}var a=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"==typeof n?n():n)||{}},s={namespaced:{configurable:!0}};s.namespaced.get=function(){return!!this._rawModule.namespaced},a.prototype.addChild=function(t,e){this._children[t]=e},a.prototype.removeChild=function(t){delete this._children[t]},a.prototype.getChild=function(t){return this._children[t]},a.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},a.prototype.forEachChild=function(t){i(this._children,t)},a.prototype.forEachGetter=function(t){this._rawModule.getters&&i(this._rawModule.getters,t)},a.prototype.forEachAction=function(t){this._rawModule.actions&&i(this._rawModule.actions,t)},a.prototype.forEachMutation=function(t){this._rawModule.mutations&&i(this._rawModule.mutations,t)},Object.defineProperties(a.prototype,s);var c=function(t){this.register([],t,!1)};c.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},c.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return t+((e=e.getChild(n)).namespaced?n+"/":"")},"")},c.prototype.update=function(t){!function t(e,n,r){0;n.update(r);if(r.modules)for(var o in r.modules){if(!n.getChild(o))return void 0;t(e.concat(o),n.getChild(o),r.modules[o])}}([],this.root,t)},c.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var o=new a(e,n);0===t.length?this.root=o:this.get(t.slice(0,-1)).addChild(t[t.length-1],o);e.modules&&i(e.modules,function(e,o){r.register(t.concat(o),e,n)})},c.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var u;var f=function(t){var e=this;void 0===t&&(t={}),!u&&"undefined"!=typeof window&&window.Vue&&g(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var i=t.state;void 0===i&&(i={}),"function"==typeof i&&(i=i()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new c(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new u;var a=this,s=this.dispatch,f=this.commit;this.dispatch=function(t,e){return s.call(a,t,e)},this.commit=function(t,e,n){return f.call(a,t,e,n)},this.strict=r,v(this,i,[],this._modules.root),h(this,i),n.forEach(function(t){return t(e)}),u.config.devtools&&function(t){o&&(t._devtoolHook=o,o.emit("vuex:init",t),o.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){o.emit("vuex:mutation",t,e)}))}(this)},p={state:{configurable:!0}};function l(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function d(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;v(t,n,[],t._modules.root,!0),h(t,n,e)}function h(t,e,n){var r=t._vm;t.getters={};var o={};i(t._wrappedGetters,function(e,n){o[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var a=u.config.silent;u.config.silent=!0,t._vm=new u({data:{$$state:e},computed:o}),u.config.silent=a,t.strict&&function(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}(t),r&&(n&&t._withCommit(function(){r._data.$$state=null}),u.nextTick(function(){return r.$destroy()}))}function v(t,e,n,r,o){var i=!n.length,a=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[a]=r),!i&&!o){var s=y(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){u.set(s,c,r.state)})}var f=r.context=function(t,e,n){var r=""===e,o={dispatch:r?t.dispatch:function(n,r,o){var i=m(n,r,o),a=i.payload,s=i.options,c=i.type;return s&&s.root||(c=e+c),t.dispatch(c,a)},commit:r?t.commit:function(n,r,o){var i=m(n,r,o),a=i.payload,s=i.options,c=i.type;s&&s.root||(c=e+c),t.commit(c,a,s)}};return Object.defineProperties(o,{getters:{get:r?function(){return t.getters}:function(){return function(t,e){var n={},r=e.length;return Object.keys(t.getters).forEach(function(o){if(o.slice(0,r)===e){var i=o.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[o]},enumerable:!0})}}),n}(t,e)}},state:{get:function(){return y(t.state,n)}}}),o}(t,a,n);r.forEachMutation(function(e,n){!function(t,e,n,r){(t._mutations[e]||(t._mutations[e]=[])).push(function(e){n.call(t,r.state,e)})}(t,a+n,e,f)}),r.forEachAction(function(e,n){var r=e.root?n:a+n,o=e.handler||e;!function(t,e,n,r){(t._actions[e]||(t._actions[e]=[])).push(function(e,o){var i,a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e,o);return(i=a)&&"function"==typeof i.then||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):a})}(t,r,o,f)}),r.forEachGetter(function(e,n){!function(t,e,n,r){if(t._wrappedGetters[e])return void 0;t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)}}(t,a+n,e,f)}),r.forEachChild(function(r,i){v(t,e,n.concat(i),r,o)})}function y(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function m(t,e,n){var r;return null!==(r=t)&&"object"==typeof r&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function g(t){u&&t===u||r(u=t)}p.state.get=function(){return this._vm._data.$$state},p.state.set=function(t){0},f.prototype.commit=function(t,e,n){var r=this,o=m(t,e,n),i=o.type,a=o.payload,s=(o.options,{type:i,payload:a}),c=this._mutations[i];c&&(this._withCommit(function(){c.forEach(function(t){t(a)})}),this._subscribers.forEach(function(t){return t(s,r.state)}))},f.prototype.dispatch=function(t,e){var n=this,r=m(t,e),o=r.type,i=r.payload,a={type:o,payload:i},s=this._actions[o];if(s)return this._actionSubscribers.forEach(function(t){return t(a,n.state)}),s.length>1?Promise.all(s.map(function(t){return t(i)})):s[0](i)},f.prototype.subscribe=function(t){return l(t,this._subscribers)},f.prototype.subscribeAction=function(t){return l(t,this._actionSubscribers)},f.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch(function(){return t(r.state,r.getters)},e,n)},f.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},f.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"==typeof t&&(t=[t]),this._modules.register(t,e),v(this,this.state,t,this._modules.get(t),n.preserveState),h(this,this.state)},f.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=y(e.state,t.slice(0,-1));u.delete(n,t[t.length-1])}),d(this)},f.prototype.hotUpdate=function(t){this._modules.update(t),d(this,!0)},f.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(f.prototype,p);var _=A(function(t,e){var n={};return O(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=C(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"==typeof o?o.call(this,e,n):e[o]},n[r].vuex=!0}),n}),b=A(function(t,e){var n={};return O(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var r=this.$store.commit;if(t){var i=C(this.$store,"mapMutations",t);if(!i)return;r=i.context.commit}return"function"==typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),$=A(function(t,e){var n={};return O(e).forEach(function(e){var r=e.key,o=e.val;o=t+o,n[r]=function(){if(!t||C(this.$store,"mapGetters",t))return this.$store.getters[o]},n[r].vuex=!0}),n}),w=A(function(t,e){var n={};return O(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var i=C(this.$store,"mapActions",t);if(!i)return;r=i.context.dispatch}return"function"==typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),x=function(t){return{mapState:_.bind(null,t),mapGetters:$.bind(null,t),mapMutations:b.bind(null,t),mapActions:w.bind(null,t)}};function O(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function A(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function C(t,e,n){return t._modulesNamespaceMap[n]}var k={Store:f,install:g,version:"3.0.1",mapState:_,mapMutations:b,mapGetters:$,mapActions:w,createNamespacedHelpers:x};e.default=k},4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return"function"==typeof t},o=/^on|^create|Sync$|Manager$|^pause/,i=["os","stopRecord","stopVoice","stopBackgroundAudio","stopPullDownRefresh","hideKeyboard","hideToast","hideLoading","showNavigationBarLoading","hideNavigationBarLoading","canIUse","navigateBack","closeSocket","pageScrollTo","drawCanvas"],a=function(t){return(!o.test(t)||"createBLEConnection"===t)&&!~i.indexOf(t)},s=function(t){return function(){for(var e=arguments.length,n=Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r(i.success)||r(i.fail)||r(i.complete)?t.apply(void 0,[i].concat(n)):new Promise(function(e,r){t.apply(void 0,[Object.assign({},i,{success:e,fail:r})].concat(n)),Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})}}).then(function(t){return[null,t]}).catch(function(t){return[t]})}},c=1e-4,u=750,f=!1,p=0,l=0;function d(t,e){var n,r,o,i;return 0===p&&(n=wx.getSystemInfoSync(),r=n.platform,o=n.pixelRatio,i=n.windowWidth,p=i,l=o,f="ios"===r),0===t?0:(t=t/u*(e||p),0===(t=Math.floor(t+c))?1!==l&&f?.5:1:t)}function h(t){return __requireNativePlugin__(t)}var v={},y={os:{plus:!0}};"undefined"!=typeof Proxy?v=new Proxy({},{get:function(t,e){return y.hasOwnProperty(e)?y[e]:"upx2px"===e?d:"requireNativePlugin"===e?h:wx.hasOwnProperty(e)?a(e)?s(wx[e]):wx[e]:void 0}}):(v.upx2px=d,v.requireNativePlugin=h,Object.keys(y).forEach(function(t){v[t]=y[t]}),Object.keys(wx).forEach(function(t){wx.hasOwnProperty(t)&&(a(t)?v[t]=s(wx[t]):v[t]=wx[t])}));var m=v;e.default=m},6:function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},65:function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},66:function(t,e,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n(9),i={},a=r&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,u=!1,f=function(){},p=null,l="data-vue-ssr-id",d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t){for(var e=0;e<t.length;e++){var n=t[e],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(y(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(y(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:a}}}}function v(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function y(t){var e,n,r=document.querySelector("style["+l+'~="'+t.id+'"]');if(r){if(u)return f;r.parentNode.removeChild(r)}if(d){var o=c++;r=s||(s=v()),e=_.bind(null,r,o,!1),n=_.bind(null,r,o,!0)}else r=v(),e=function(t,e){var n=e.css,r=e.media,o=e.sourceMap;r&&t.setAttribute("media",r);p.ssrId&&t.setAttribute(l,e.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}t.exports=function(t,e,n,r){u=n,p=r||{};var a=o(t,e);return h(a),function(e){for(var n=[],r=0;r<a.length;r++){var s=a[r];(c=i[s.id]).refs--,n.push(c)}e?h(a=o(t,e)):a=[];for(r=0;r<n.length;r++){var c;if(0===(c=n[r]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete i[c.id]}}}};var m,g=(m=[],function(t,e){return m[t]=e,m.filter(Boolean).join("\n")});function _(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},9:function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=i[0],s={id:t+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}}});
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([10],[,,,,,function(e,t,n){"use strict";var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=r(n(2)),a=r(n(7)),l=r(n(11));function r(e){return e&&e.__esModule?e:{default:e}}u.default.config.productionTip=!1,u.default.prototype.$store=l.default,a.default.mpType="app",new u.default(o({},a.default)).$mount()},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(10),u=n.n(o);var a=function(e){n(8)},l=n(0)(u.a,null,a,null,null);t.default=l.exports},function(e,t){},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(2)),u=a(n(3));function a(e){return e&&e.__esModule?e:{default:e}}o.default.use(u.default);var l=new u.default.Store({state:{forcedLogin:!1,hasLogin:!1,userName:""},mutations:{login:function(e,t){e.userName=t||"新用户",e.hasLogin=!0},logout:function(e){e.userName="",e.hasLogin=!1}}});t.default=l}],[5]);
});
require('app.js');


__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([0],[,,,,,,,,,,,,function(t,e,i){"use strict";var n=o(i(1)),s=o(i(13));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(s.default))},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(15),s=i.n(n),o=i(24);var a=function(t){i(14)},r=i(0)(s.a,o.a,a,null,null);e.default=r.exports},function(t,e){},function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n,s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},o=i(3),a=i(16),r=(n=a)&&n.__esModule?n:{default:n};e.default={components:{mInput:r.default},data:function(){return{providerList:[],hasProvider:!1,account:"",password:"",positionTop:0}},computed:(0,o.mapState)(["forcedLogin"]),methods:s({},(0,o.mapMutations)(["login"]),{initProvider:function(){var e=this,i=["weixin","qq","sinaweibo"];t.getProvider({service:"oauth",success:function(t){if(t.provider&&t.provider.length){for(var n=0;n<t.provider.length;n++)~i.indexOf(t.provider[n])&&e.providerList.push({value:t.provider[n],image:"../../static/img/"+t.provider[n]+".png"});e.hasProvider=!0}},fail:function(t){console.error("获取服务供应商失败："+JSON.stringify(t))}})},initPosition:function(){this.positionTop=t.getSystemInfoSync().windowHeight-100},bindLogin:function(){t.reLaunch({url:"../index/index"})},register:function(){t.navigateTo({url:"../register/register"})},oauth:function(e){var i=this;t.login({provider:e,success:function(n){t.getUserInfo({provider:e,success:function(t){i.toMain(t.userInfo.nickName)}})},fail:function(t){console.error("授权登录失败："+JSON.stringify(t))}})}}),onLoad:function(){this.initPosition(),this.initProvider()}}}).call(e,i(4).default)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(18),s=i.n(n),o=i(23);var a=function(t){i(17)},r=i(0)(s.a,o.a,a,null,null);e.default=r.exports},function(t,e){},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,s=i(19),o=(n=s)&&n.__esModule?n:{default:n};e.default={components:{mIcon:o.default},props:{type:String,value:String,placeholder:String,clearable:{type:[Boolean,String],default:!1},displayable:{type:[Boolean,String],default:!1},focus:{type:[Boolean,String],default:!1}},model:{prop:"value",event:"input"},data:function(){return{showPassword:!1,isFocus:!1}},computed:{inputType:function(){var t=this.type;return"password"===t?"text":t},clearable_:function(){return"false"!==String(this.clearable)},displayable_:function(){return"false"!==String(this.displayable)},focus_:function(){return"false"!==String(this.focus)}},methods:{clear:function(){this.value=""},display:function(){this.showPassword=!this.showPassword},onFocus:function(){this.isFocus=!0},onBlur:function(){var t=this;this.$nextTick(function(){t.isFocus=!1})},onInput:function(t){this.$emit("input",t.target.value)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(21),s=i.n(n),o=i(22);var a=function(t){i(20)},r=i(0)(s.a,o.a,a,null,null);e.default=r.exports},function(t,e){},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{type:String,color:String,size:{type:[Number,String],default:24}},computed:{fontSize:function(){var t=Number(this.size);return(t=isNaN(t)?24:t)+"px"}},methods:{onClick:function(){this.$emit("click")}}}},function(t,e,i){"use strict";var n={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("view",{staticClass:"m-icon",class:["m-icon-"+t.type],style:{color:t.color,"font-size":t.fontSize},attrs:{eventid:"w0M-0"},on:{click:function(e){t.onClick()}}})},staticRenderFns:[]};e.a=n},function(t,e,i){"use strict";var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"m-input-view"},[i("input",{staticClass:"m-input-input",attrs:{focus:t.focus_,type:t.inputType,value:t.value,placeholder:t.placeholder,password:"password"===t.type&&!t.showPassword,eventid:"PRI-0"},on:{input:t.onInput,focus:t.onFocus,blur:t.onBlur}}),t.clearable_&&!t.displayable_&&t.value.length?i("view",{staticClass:"m-input-icon"},[i("m-icon",{attrs:{color:"#666666",type:"clear",size:"20",eventid:"nLX-1",mpcomid:"uh8-0"},on:{click:t.clear}})],1):t._e(),t.displayable_?i("view",{staticClass:"m-input-icon"},[i("m-icon",{attrs:{color:t.showPassword?"#666666":"#cccccc",type:"eye",size:"20",eventid:"lai-2",mpcomid:"jQp-1"},on:{click:t.display}})],1):t._e()])},staticRenderFns:[]};e.a=n},function(t,e,i){"use strict";var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"bei-logo"},[i("image",{staticClass:"login-logo",attrs:{src:"../../static/logo.png"}}),i("view",{staticClass:"login mt40"},[t._m(0),i("view",{staticClass:"mt30"},[i("button",{staticClass:"login-btn btn",attrs:{eventid:"LS0-0"},on:{tap:t.bindLogin}},[t._v("登录")]),i("view",{staticClass:"link-area"},[i("view",{staticClass:"forget-pwd-btn fn_left",attrs:{eventid:"DjF-1"},on:{tap:t.register}},[t._v("一键注册")]),i("view",{staticClass:"forget-pwd-btn fn_right"},[t._v("忘记密码")])])],1)]),t.hasProvider?i("view",{staticClass:"oauth-row",style:{top:t.positionTop+"px"}},t._l(t.providerList,function(e,n){return i("view",{key:e.value,staticClass:"oauth-image"},[i("image",{attrs:{src:e.image,eventid:"qWC-2-"+n},on:{tap:function(i){t.oauth(e.value)}}})])})):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:" clearfix"},[e("view",{staticClass:"mui-input-line mui-input-row"},[e("view",{staticClass:"icos-iphone"}),e("input",{staticClass:"mui-input mui-input-clear",attrs:{id:"account",type:"tel",placeholder:"请输入账号"}})]),e("view",{staticClass:"mui-input-line mt10 mui-input-row"},[e("view",{staticClass:"icos-lock"}),e("input",{staticClass:"mui-input mui-input-clear",attrs:{id:"password",type:"password",placeholder:"请输入密码"}})])])}]};e.a=n}],[12]);
});
require('pages/login/login.js');
__wxRoute = 'pages/register/register';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/register/register.js';

define('pages/register/register.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([4],{25:function(t,i,e){"use strict";var s=n(e(1)),a=n(e(26));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(a.default))},26:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e(28),a=e.n(s),n=e(29);var c=function(t){e(27)},l=e(0)(a.a,n.a,c,null,null);i.default=l.exports},27:function(t,i){},28:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{}},methods:{primaryHandler:function(){t.reLaunch({url:"/pages/login/login"})}}}}).call(i,e(4).default)},29:function(t,i,e){"use strict";var s={render:function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"white"},[i("image",{staticClass:"login-logo",attrs:{src:"../../static/zhuce2.png"}}),i("view",{staticClass:"clearfix"},[this._m(0),this._m(1),this._m(2),this._m(3),i("view",{staticClass:"btn-next btn ",attrs:{eventid:"G3A-0"},on:{tap:this.primaryHandler}},[this._v("完成")]),this._m(4)])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"mui-input-line mt60"},[i("view",{staticClass:"icos-iphone"}),i("input",{staticClass:"mui-input",attrs:{type:"tel",maxlength:"11",id:"mobile",placeholder:"请输入账号"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"mui-input-line mt20"},[i("view",{staticClass:"icos-mation"}),i("input",{staticClass:"mui-input",staticStyle:{width:"50% !important"},attrs:{type:"tel",id:"Verification",maxlength:"4",placeholder:"验证码"}}),i("view",{staticClass:"regbtn"},[this._v("获取验证码")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"mui-input-line mt20"},[i("view",{staticClass:"icos-lock"}),i("input",{staticClass:"mui-input",attrs:{id:"password",type:"password",placeholder:"请输入密码"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"mui-input-line mt20 mb40"},[i("view",{staticClass:"icos-lock"}),i("input",{staticClass:"mui-input",attrs:{id:"password_confirm",type:"password",placeholder:"请确认密码"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"checkbox-text"},[i("input",{staticClass:"checked",attrs:{type:"checkbox",checked:"checked"}}),this._v(" 点击完成即表示同意"),i("view",{staticStyle:{color:"#ff9800",display:"inline-block"}},[this._v("《用户协议》")])])}]};i.a=s}},[25]);
});
require('pages/register/register.js');
__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([8],{30:function(e,t,s){"use strict";var n=i(s(1)),a=i(s(31));function i(e){return e&&e.__esModule?e:{default:e}}Page((0,n.default)(a.default))},31:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(33),a=s.n(n),i=s(34);var r=function(e){s(32)},u=s(0)(a.a,i.a,r,null,null);t.default=u.exports},32:function(e,t){},33:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{webviewStyles:{progress:{color:"#FF3333"}}}}}},34:function(e,t,s){"use strict";var n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("view",{staticClass:"index"},[e._m(0),s("view",{staticClass:"content"},[s("view",[s("web-view",{attrs:{"webview-styles":e.webviewStyles,src:"http://192.168.31.43:8899/Platform/index.html",eventid:"4jr-0",mpcomid:"jZ0-0"},on:{message:function(t){e.alert("aaaa")}}})],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("view",{staticClass:"status_bar"},[t("view",{staticClass:"top_view"})])}]};t.a=n}},[30]);
});
require('pages/index/index.js');
__wxRoute = 'pages/news/news';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/news/news.js';

define('pages/news/news.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([5],{35:function(e,t,s){"use strict";var a=i(s(1)),n=i(s(36));function i(e){return e&&e.__esModule?e:{default:e}}Page((0,a.default)(n.default))},36:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(38),n=s.n(a),i=s(39);var r=function(e){s(37)},u=s(0)(n.a,i.a,r,null,null);t.default=u.exports},37:function(e,t){},38:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{webviewStyles:{progress:{color:"#FF3333"}}}}}},39:function(e,t,s){"use strict";var a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("view",{staticClass:"index"},[e._m(0),s("view",{staticClass:"content"},[s("view",[s("web-view",{attrs:{"webview-styles":e.webviewStyles,src:"http://192.168.31.43:8899/Platform/toutiao.html",eventid:"vRs-0",mpcomid:"YYd-0"},on:{message:function(t){e.alert("aaaa")}}})],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("view",{staticClass:"status_bar"},[t("view",{staticClass:"top_view"})])}]};t.a=a}},[35]);
});
require('pages/news/news.js');
__wxRoute = 'pages/game/game';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/game/game.js';

define('pages/game/game.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([9],{40:function(e,t,s){"use strict";var a=i(s(1)),n=i(s(41));function i(e){return e&&e.__esModule?e:{default:e}}Page((0,a.default)(n.default))},41:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(43),n=s.n(a),i=s(44);var r=function(e){s(42)},u=s(0)(n.a,i.a,r,null,null);t.default=u.exports},42:function(e,t){},43:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{webviewStyles:{progress:{color:"#FF3333"}}}}}},44:function(e,t,s){"use strict";var a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("view",{staticClass:"index"},[e._m(0),s("view",{staticClass:"content"},[s("view",[s("web-view",{attrs:{"webview-styles":e.webviewStyles,src:"http://192.168.31.43:8899/Platform/make.html",eventid:"TPd-0",mpcomid:"T9L-0"},on:{message:function(t){e.alert("aaaa")}}})],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("view",{staticClass:"status_bar"},[t("view",{staticClass:"top_view"})])}]};t.a=a}},[40]);
});
require('pages/game/game.js');
__wxRoute = 'pages/share/share';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/share/share.js';

define('pages/share/share.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([3],{45:function(e,t,s){"use strict";var n=i(s(1)),a=i(s(46));function i(e){return e&&e.__esModule?e:{default:e}}Page((0,n.default)(a.default))},46:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(48),a=s.n(n),i=s(49);var r=function(e){s(47)},u=s(0)(a.a,i.a,r,null,null);t.default=u.exports},47:function(e,t){},48:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{webviewStyles:{progress:{color:"#FF3333"}}}}}},49:function(e,t,s){"use strict";var n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("view",{staticClass:"index"},[e._m(0),s("view",{staticClass:"content"},[s("view",[s("web-view",{attrs:{"webview-styles":e.webviewStyles,src:"http://192.168.31.43:8899/Platform/invite.html",eventid:"oqL-0",mpcomid:"Zv1-0"},on:{message:function(t){e.alert("aaaa")}}})],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("view",{staticClass:"status_bar"},[t("view",{staticClass:"top_view"})])}]};t.a=n}},[45]);
});
require('pages/share/share.js');
__wxRoute = 'pages/my/my';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/my.js';

define('pages/my/my.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([7],{50:function(e,t,s){"use strict";var a=i(s(1)),n=i(s(51));function i(e){return e&&e.__esModule?e:{default:e}}Page((0,a.default)(n.default))},51:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(53),n=s.n(a),i=s(54);var r=function(e){s(52)},c=s(0)(n.a,i.a,r,null,null);t.default=c.exports},52:function(e,t){},53:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{webviewStyles:{progress:{color:"#FF3333"}}}}}},54:function(e,t,s){"use strict";var a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("view",{staticClass:"index"},[e._m(0),s("view",{staticClass:"content"},[s("view",[s("web-view",{attrs:{"webview-styles":e.webviewStyles,src:"http://192.168.31.43:8899/Platform/my.html",eventid:"ylH-0",mpcomid:"hsc-0"},on:{message:function(t){e.alert("aaaa")}}})],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("view",{staticClass:"status_bar"},[t("view",{staticClass:"top_view"})])}]};t.a=a}},[50]);
});
require('pages/my/my.js');
__wxRoute = 'pages/new-page/new-page';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/new-page/new-page.js';

define('pages/new-page/new-page.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([6],{55:function(t,e,s){"use strict";var n=a(s(1)),i=a(s(56));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(i.default))},56:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(58),i=s.n(n),a=s(59);var r=function(t){s(57)},c=s(0)(i.a,a.a,r,null,null);e.default=c.exports},57:function(t,e){},58:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{src:""}},onLoad:function(t){t.src&&(this.src=t.src)}}},59:function(t,e,s){"use strict";var n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"index"},[this._m(0),e("view",{staticClass:"content"},[e("view",[e("web-view",{attrs:{src:this.src,mpcomid:"9Yp-0"}})],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"status_bar"},[e("view",{staticClass:"top_view"})])}]};e.a=n}},[55]);
});
require('pages/new-page/new-page.js');
__wxRoute = 'pages/swiper/swiper';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/swiper/swiper.js';

define('pages/swiper/swiper.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([2],{60:function(t,i,e){"use strict";var a=n(e(1)),s=n(e(61));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(s.default))},61:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e(63),s=e.n(a),n=e(64);var l=function(t){e(62)},c=e(0)(s.a,n.a,l,null,null);i.default=c.exports},62:function(t,i){},63:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{title:"swiper",background:["color1","color2","color3"],indicatorDots:!0,autoplay:!0,interval:2e3,duration:500}},methods:{changeIndicatorDots:function(t){this.indicatorDots=!this.indicatorDots},changeAutoplay:function(t){this.autoplay=!this.autoplay},intervalChange:function(t){this.interval=t.target.value},durationChange:function(t){this.duration=t.target.value}}}},64:function(t,i,e){"use strict";var a={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",[e("page-head",{attrs:{title:t.title,mpcomid:"KgR-0"}}),e("view",{staticClass:"uni-padding-wrap"},[e("view",{staticClass:"page-section swiper"},[e("view",{staticClass:"page-section-spacing"},[e("swiper",{staticClass:"swiper",attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration}},[e("swiper-item",{attrs:{mpcomid:"0Y7-1"}},[e("view",{staticClass:"swiper-item uni-bg-red"},[t._v("A")])]),e("swiper-item",{attrs:{mpcomid:"HPZ-2"}},[e("view",{staticClass:"swiper-item uni-bg-green"},[t._v("B")])]),e("swiper-item",{attrs:{mpcomid:"m5V-3"}},[e("view",{staticClass:"swiper-item uni-bg-blue"},[t._v("C")])])],1)],1)])]),e("view",{staticClass:"swiper-list"},[e("view",{staticClass:"uni-list-cell uni-list-cell-pd"},[e("view",{staticClass:"uni-list-cell-db"},[t._v("指示点")]),e("switch",{attrs:{checked:t.indicatorDots,eventid:"Ky0-0"},on:{change:t.changeIndicatorDots}})]),e("view",{staticClass:"uni-list-cell uni-list-cell-pd"},[e("view",{staticClass:"uni-list-cell-db"},[t._v("自动播放")]),e("switch",{attrs:{checked:t.autoplay,eventid:"JL3-1"},on:{change:t.changeAutoplay}})])]),e("view",{staticClass:"uni-padding-wrap"},[e("view",{staticClass:"uni-common-mt"},[e("text",[t._v("幻灯片切换时长(ms)")]),e("text",{staticClass:"info"},[t._v(t._s(t.duration))])]),e("slider",{attrs:{value:t.duration,min:"500",max:"2000",eventid:"dQh-2"},on:{change:t.durationChange}}),e("view",{staticClass:"uni-common-mt"},[e("text",[t._v("自动播放间隔时长(ms)")]),e("text",{staticClass:"info"},[t._v(t._s(t.interval))])]),e("slider",{attrs:{value:t.interval,min:"2000",max:"10000",eventid:"xQV-3"},on:{change:t.intervalChange}})])],1)},staticRenderFns:[]};i.a=a}},[60]);
});
require('pages/swiper/swiper.js');

