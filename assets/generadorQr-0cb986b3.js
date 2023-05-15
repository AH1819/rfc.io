import{n as T,r as k,p as $,q as z,o as q,_ as J,b as S,k as Z,c as H,d as V,e as C,f as _,l as j,j as x}from"./index-6851d414.js";/*!
 * qrcode.vue v3.4.0
 * A Vue.js component to generate QRCode.
 * © 2017-2023 @scopewu(https://github.com/scopewu)
 * MIT License.
 */var O=function(){return O=Object.assign||function(l){for(var c,u=1,h=arguments.length;u<h;u++){c=arguments[u];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(l[d]=c[d])}return l},O.apply(this,arguments)},P;(function(s){var l=function(){function o(e,t,r,n){if(this.version=e,this.errorCorrectionLevel=t,this.modules=[],this.isFunction=[],e<o.MIN_VERSION||e>o.MAX_VERSION)throw new RangeError("Version value out of range");if(n<-1||n>7)throw new RangeError("Mask value out of range");this.size=e*4+17;for(var i=[],a=0;a<this.size;a++)i.push(!1);for(var a=0;a<this.size;a++)this.modules.push(i.slice()),this.isFunction.push(i.slice());this.drawFunctionPatterns();var f=this.addEccAndInterleave(r);if(this.drawCodewords(f),n==-1)for(var v=1e9,a=0;a<8;a++){this.applyMask(a),this.drawFormatBits(a);var p=this.getPenaltyScore();p<v&&(n=a,v=p),this.applyMask(a)}h(0<=n&&n<=7),this.mask=n,this.applyMask(n),this.drawFormatBits(n),this.isFunction=[]}return o.encodeText=function(e,t){var r=s.QrSegment.makeSegments(e);return o.encodeSegments(r,t)},o.encodeBinary=function(e,t){var r=s.QrSegment.makeBytes(e);return o.encodeSegments([r],t)},o.encodeSegments=function(e,t,r,n,i,a){if(r===void 0&&(r=1),n===void 0&&(n=40),i===void 0&&(i=-1),a===void 0&&(a=!0),!(o.MIN_VERSION<=r&&r<=n&&n<=o.MAX_VERSION)||i<-1||i>7)throw new RangeError("Invalid value");var f,v;for(f=r;;f++){var p=o.getNumDataCodewords(f,t)*8,E=d.getTotalBits(e,f);if(E<=p){v=E;break}if(f>=n)throw new RangeError("Data too long")}for(var g=0,w=[o.Ecc.MEDIUM,o.Ecc.QUARTILE,o.Ecc.HIGH];g<w.length;g++){var M=w[g];a&&v<=o.getNumDataCodewords(f,M)*8&&(t=M)}for(var m=[],R=0,A=e;R<A.length;R++){var N=A[R];c(N.mode.modeBits,4,m),c(N.numChars,N.mode.numCharCountBits(f),m);for(var I=0,B=N.getData();I<B.length;I++){var W=B[I];m.push(W)}}h(m.length==v);var D=o.getNumDataCodewords(f,t)*8;h(m.length<=D),c(0,Math.min(4,D-m.length),m),c(0,(8-m.length%8)%8,m),h(m.length%8==0);for(var U=236;m.length<D;U^=253)c(U,8,m);for(var Q=[];Q.length*8<m.length;)Q.push(0);return m.forEach(function(X,y){return Q[y>>>3]|=X<<7-(y&7)}),new o(f,t,Q,i)},o.prototype.getModule=function(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]},o.prototype.getModules=function(){return this.modules},o.prototype.drawFunctionPatterns=function(){for(var e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);for(var t=this.getAlignmentPatternPositions(),r=t.length,e=0;e<r;e++)for(var n=0;n<r;n++)e==0&&n==0||e==0&&n==r-1||e==r-1&&n==0||this.drawAlignmentPattern(t[e],t[n]);this.drawFormatBits(0),this.drawVersion()},o.prototype.drawFormatBits=function(e){for(var t=this.errorCorrectionLevel.formatBits<<3|e,r=t,n=0;n<10;n++)r=r<<1^(r>>>9)*1335;var i=(t<<10|r)^21522;h(i>>>15==0);for(var n=0;n<=5;n++)this.setFunctionModule(8,n,u(i,n));this.setFunctionModule(8,7,u(i,6)),this.setFunctionModule(8,8,u(i,7)),this.setFunctionModule(7,8,u(i,8));for(var n=9;n<15;n++)this.setFunctionModule(14-n,8,u(i,n));for(var n=0;n<8;n++)this.setFunctionModule(this.size-1-n,8,u(i,n));for(var n=8;n<15;n++)this.setFunctionModule(8,this.size-15+n,u(i,n));this.setFunctionModule(8,this.size-8,!0)},o.prototype.drawVersion=function(){if(!(this.version<7)){for(var e=this.version,t=0;t<12;t++)e=e<<1^(e>>>11)*7973;var r=this.version<<12|e;h(r>>>18==0);for(var t=0;t<18;t++){var n=u(r,t),i=this.size-11+t%3,a=Math.floor(t/3);this.setFunctionModule(i,a,n),this.setFunctionModule(a,i,n)}}},o.prototype.drawFinderPattern=function(e,t){for(var r=-4;r<=4;r++)for(var n=-4;n<=4;n++){var i=Math.max(Math.abs(n),Math.abs(r)),a=e+n,f=t+r;0<=a&&a<this.size&&0<=f&&f<this.size&&this.setFunctionModule(a,f,i!=2&&i!=4)}},o.prototype.drawAlignmentPattern=function(e,t){for(var r=-2;r<=2;r++)for(var n=-2;n<=2;n++)this.setFunctionModule(e+n,t+r,Math.max(Math.abs(n),Math.abs(r))!=1)},o.prototype.setFunctionModule=function(e,t,r){this.modules[t][e]=r,this.isFunction[t][e]=!0},o.prototype.addEccAndInterleave=function(e){var t=this.version,r=this.errorCorrectionLevel;if(e.length!=o.getNumDataCodewords(t,r))throw new RangeError("Invalid argument");for(var n=o.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][t],i=o.ECC_CODEWORDS_PER_BLOCK[r.ordinal][t],a=Math.floor(o.getNumRawDataModules(t)/8),f=n-a%n,v=Math.floor(a/n),p=[],E=o.reedSolomonComputeDivisor(i),g=0,w=0;g<n;g++){var M=e.slice(w,w+v-i+(g<f?0:1));w+=M.length;var m=o.reedSolomonComputeRemainder(M,E);g<f&&M.push(0),p.push(M.concat(m))}for(var R=[],A=function(N){p.forEach(function(I,B){(N!=v-i||B>=f)&&R.push(I[N])})},g=0;g<p[0].length;g++)A(g);return h(R.length==a),R},o.prototype.drawCodewords=function(e){if(e.length!=Math.floor(o.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");for(var t=0,r=this.size-1;r>=1;r-=2){r==6&&(r=5);for(var n=0;n<this.size;n++)for(var i=0;i<2;i++){var a=r-i,f=(r+1&2)==0,v=f?this.size-1-n:n;!this.isFunction[v][a]&&t<e.length*8&&(this.modules[v][a]=u(e[t>>>3],7-(t&7)),t++)}}h(t==e.length*8)},o.prototype.applyMask=function(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(var t=0;t<this.size;t++)for(var r=0;r<this.size;r++){var n=void 0;switch(e){case 0:n=(r+t)%2==0;break;case 1:n=t%2==0;break;case 2:n=r%3==0;break;case 3:n=(r+t)%3==0;break;case 4:n=(Math.floor(r/3)+Math.floor(t/2))%2==0;break;case 5:n=r*t%2+r*t%3==0;break;case 6:n=(r*t%2+r*t%3)%2==0;break;case 7:n=((r+t)%2+r*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][r]&&n&&(this.modules[t][r]=!this.modules[t][r])}},o.prototype.getPenaltyScore=function(){for(var e=0,t=0;t<this.size;t++){for(var r=!1,n=0,i=[0,0,0,0,0,0,0],a=0;a<this.size;a++)this.modules[t][a]==r?(n++,n==5?e+=o.PENALTY_N1:n>5&&e++):(this.finderPenaltyAddHistory(n,i),r||(e+=this.finderPenaltyCountPatterns(i)*o.PENALTY_N3),r=this.modules[t][a],n=1);e+=this.finderPenaltyTerminateAndCount(r,n,i)*o.PENALTY_N3}for(var a=0;a<this.size;a++){for(var r=!1,f=0,i=[0,0,0,0,0,0,0],t=0;t<this.size;t++)this.modules[t][a]==r?(f++,f==5?e+=o.PENALTY_N1:f>5&&e++):(this.finderPenaltyAddHistory(f,i),r||(e+=this.finderPenaltyCountPatterns(i)*o.PENALTY_N3),r=this.modules[t][a],f=1);e+=this.finderPenaltyTerminateAndCount(r,f,i)*o.PENALTY_N3}for(var t=0;t<this.size-1;t++)for(var a=0;a<this.size-1;a++){var v=this.modules[t][a];v==this.modules[t][a+1]&&v==this.modules[t+1][a]&&v==this.modules[t+1][a+1]&&(e+=o.PENALTY_N2)}for(var p=0,E=0,g=this.modules;E<g.length;E++){var w=g[E];p=w.reduce(function(R,A){return R+(A?1:0)},p)}var M=this.size*this.size,m=Math.ceil(Math.abs(p*20-M*10)/M)-1;return h(0<=m&&m<=9),e+=m*o.PENALTY_N4,h(0<=e&&e<=2568888),e},o.prototype.getAlignmentPatternPositions=function(){if(this.version==1)return[];for(var e=Math.floor(this.version/7)+2,t=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,r=[6],n=this.size-7;r.length<e;n-=t)r.splice(1,0,n);return r},o.getNumRawDataModules=function(e){if(e<o.MIN_VERSION||e>o.MAX_VERSION)throw new RangeError("Version number out of range");var t=(16*e+128)*e+64;if(e>=2){var r=Math.floor(e/7)+2;t-=(25*r-10)*r-55,e>=7&&(t-=36)}return h(208<=t&&t<=29648),t},o.getNumDataCodewords=function(e,t){return Math.floor(o.getNumRawDataModules(e)/8)-o.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e]*o.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]},o.reedSolomonComputeDivisor=function(e){if(e<1||e>255)throw new RangeError("Degree out of range");for(var t=[],r=0;r<e-1;r++)t.push(0);t.push(1);for(var n=1,r=0;r<e;r++){for(var i=0;i<t.length;i++)t[i]=o.reedSolomonMultiply(t[i],n),i+1<t.length&&(t[i]^=t[i+1]);n=o.reedSolomonMultiply(n,2)}return t},o.reedSolomonComputeRemainder=function(e,t){for(var r=t.map(function(v){return 0}),n=function(v){var p=v^r.shift();r.push(0),t.forEach(function(E,g){return r[g]^=o.reedSolomonMultiply(E,p)})},i=0,a=e;i<a.length;i++){var f=a[i];n(f)}return r},o.reedSolomonMultiply=function(e,t){if(e>>>8||t>>>8)throw new RangeError("Byte out of range");for(var r=0,n=7;n>=0;n--)r=r<<1^(r>>>7)*285,r^=(t>>>n&1)*e;return h(r>>>8==0),r},o.prototype.finderPenaltyCountPatterns=function(e){var t=e[1];h(t<=this.size*3);var r=t>0&&e[2]==t&&e[3]==t*3&&e[4]==t&&e[5]==t;return(r&&e[0]>=t*4&&e[6]>=t?1:0)+(r&&e[6]>=t*4&&e[0]>=t?1:0)},o.prototype.finderPenaltyTerminateAndCount=function(e,t,r){return e&&(this.finderPenaltyAddHistory(t,r),t=0),t+=this.size,this.finderPenaltyAddHistory(t,r),this.finderPenaltyCountPatterns(r)},o.prototype.finderPenaltyAddHistory=function(e,t){t[0]==0&&(e+=this.size),t.pop(),t.unshift(e)},o.MIN_VERSION=1,o.MAX_VERSION=40,o.PENALTY_N1=3,o.PENALTY_N2=3,o.PENALTY_N3=40,o.PENALTY_N4=10,o.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],o.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],o}();s.QrCode=l;function c(o,e,t){if(e<0||e>31||o>>>e)throw new RangeError("Value out of range");for(var r=e-1;r>=0;r--)t.push(o>>>r&1)}function u(o,e){return(o>>>e&1)!=0}function h(o){if(!o)throw new Error("Assertion error")}var d=function(){function o(e,t,r){if(this.mode=e,this.numChars=t,this.bitData=r,t<0)throw new RangeError("Invalid argument");this.bitData=r.slice()}return o.makeBytes=function(e){for(var t=[],r=0,n=e;r<n.length;r++){var i=n[r];c(i,8,t)}return new o(o.Mode.BYTE,e.length,t)},o.makeNumeric=function(e){if(!o.isNumeric(e))throw new RangeError("String contains non-numeric characters");for(var t=[],r=0;r<e.length;){var n=Math.min(e.length-r,3);c(parseInt(e.substring(r,r+n),10),n*3+1,t),r+=n}return new o(o.Mode.NUMERIC,e.length,t)},o.makeAlphanumeric=function(e){if(!o.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");var t=[],r;for(r=0;r+2<=e.length;r+=2){var n=o.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r))*45;n+=o.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r+1)),c(n,11,t)}return r<e.length&&c(o.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r)),6,t),new o(o.Mode.ALPHANUMERIC,e.length,t)},o.makeSegments=function(e){return e==""?[]:o.isNumeric(e)?[o.makeNumeric(e)]:o.isAlphanumeric(e)?[o.makeAlphanumeric(e)]:[o.makeBytes(o.toUtf8ByteArray(e))]},o.makeEci=function(e){var t=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<1<<7)c(e,8,t);else if(e<1<<14)c(2,2,t),c(e,14,t);else if(e<1e6)c(6,3,t),c(e,21,t);else throw new RangeError("ECI assignment value out of range");return new o(o.Mode.ECI,0,t)},o.isNumeric=function(e){return o.NUMERIC_REGEX.test(e)},o.isAlphanumeric=function(e){return o.ALPHANUMERIC_REGEX.test(e)},o.prototype.getData=function(){return this.bitData.slice()},o.getTotalBits=function(e,t){for(var r=0,n=0,i=e;n<i.length;n++){var a=i[n],f=a.mode.numCharCountBits(t);if(a.numChars>=1<<f)return 1/0;r+=4+f+a.bitData.length}return r},o.toUtf8ByteArray=function(e){e=encodeURI(e);for(var t=[],r=0;r<e.length;r++)e.charAt(r)!="%"?t.push(e.charCodeAt(r)):(t.push(parseInt(e.substring(r+1,r+3),16)),r+=2);return t},o.NUMERIC_REGEX=/^[0-9]*$/,o.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,o.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",o}();s.QrSegment=d})(P||(P={}));(function(s){(function(l){var c=function(){function u(h,d){this.ordinal=h,this.formatBits=d}return u.LOW=new u(0,1),u.MEDIUM=new u(1,0),u.QUARTILE=new u(2,3),u.HIGH=new u(3,2),u}();l.Ecc=c})(s.QrCode||(s.QrCode={}))})(P||(P={}));(function(s){(function(l){var c=function(){function u(h,d){this.modeBits=h,this.numBitsCharCount=d}return u.prototype.numCharCountBits=function(h){return this.numBitsCharCount[Math.floor((h+7)/17)]},u.NUMERIC=new u(1,[10,12,14]),u.ALPHANUMERIC=new u(2,[9,11,13]),u.BYTE=new u(4,[8,16,16]),u.KANJI=new u(8,[8,10,12]),u.ECI=new u(7,[0,0,0]),u}();l.Mode=c})(s.QrSegment||(s.QrSegment={}))})(P||(P={}));var b=P,G="H",F={L:b.QrCode.Ecc.LOW,M:b.QrCode.Ecc.MEDIUM,Q:b.QrCode.Ecc.QUARTILE,H:b.QrCode.Ecc.HIGH},ee=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function Y(s){return s in F}function K(s,l){l===void 0&&(l=0);var c=[];return s.forEach(function(u,h){var d=null;u.forEach(function(o,e){if(!o&&d!==null){c.push("M".concat(d+l," ").concat(h+l,"h").concat(e-d,"v1H").concat(d+l,"z")),d=null;return}if(e===u.length-1){if(!o)return;d===null?c.push("M".concat(e+l,",").concat(h+l," h1v1H").concat(e+l,"z")):c.push("M".concat(d+l,",").concat(h+l," h").concat(e+1-d,"v1H").concat(d+l,"z"));return}o&&d===null&&(d=e)})}),c.join("")}var L={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:G,validator:function(s){return Y(s)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0}},te=O(O({},L),{renderAs:{type:String,required:!1,default:"canvas",validator:function(s){return["canvas","svg"].indexOf(s)>-1}}}),re=T({name:"QRCodeSvg",props:L,setup:function(s){var l=k(0),c=k(""),u=function(){var h=s.value,d=s.level,o=s.margin,e=b.QrCode.encodeText(h,F[d]).getModules();l.value=e.length+o*2,c.value=K(e,o)};return u(),$(u),function(){return z("svg",{width:s.size,height:s.size,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(l.value," ").concat(l.value)},[z("path",{fill:s.background,d:"M0,0 h".concat(l.value,"v").concat(l.value,"H0z")}),z("path",{fill:s.foreground,d:c.value})])}}}),oe=T({name:"QRCodeCanvas",props:L,setup:function(s){var l=k(null),c=function(){var u=s.value,h=s.level,d=s.size,o=s.margin,e=s.background,t=s.foreground,r=l.value;if(r){var n=r.getContext("2d");if(n){var i=b.QrCode.encodeText(u,F[h]).getModules(),a=i.length+o*2,f=window.devicePixelRatio||1,v=d/a*f;r.height=r.width=d*f,n.scale(v,v),n.fillStyle=e,n.fillRect(0,0,a,a),n.fillStyle=t,ee?n.fill(new Path2D(K(i,o))):i.forEach(function(p,E){p.forEach(function(g,w){g&&n.fillRect(w+o,E+o,1,1)})})}}};return q(c),$(c),function(){return z("canvas",{ref:l,style:{width:"".concat(s.size,"px"),height:"".concat(s.size,"px")}})}}}),ne=T({name:"Qrcode",render:function(){var s=this.$props,l=s.renderAs,c=s.value,u=s.size,h=s.margin,d=s.level,o=s.background,e=s.foreground,t=u>>>0,r=h>>>0,n=Y(d)?d:G;return z(l==="svg"?re:oe,{value:c,size:t,margin:r,level:n,background:o,foreground:e})},props:te});const ae=T({data(){return{idsku:"",nombreP:"",precios:"",value:"",size:200,showQR:!1}},methods:{QR(){this.idsku===""||this.nombreP===""||this.precios===""?this.$toast.add({severity:"error",summary:"Error al generar el Codigo QR",detail:"Tienes Campos Vacios",life:5e3}):(this.value="Folio: "+this.idsku+`
Nombre del producto: `+this.nombreP+`
Precio: $`+this.precios,this.showQR=!0)}},components:{QrcodeVue:ne}}),ie={class:"grid"},se={class:"col-12 md:col-6"},ue={class:"card"},le=C("h5",null,"Generar CodigoQR de un producto",-1),ce={class:"p-fluid formgrid grid"},fe={class:"field col-12"},he=C("label",{for:"sku"},"Folio:",-1),de={class:"field col-12"},ve=C("label",{for:"nombre"},"Producto:",-1),me={class:"field col-12"},ge=C("label",{for:"precio"},"Precio:",-1),pe={class:"field col-12 md:col-6"},Ee={key:0,class:"flex align-items-center p-2"},Ce={class:"card"};function we(s,l,c,u,h,d){const o=S("InputText"),e=S("InputNumber"),t=S("Button"),r=S("Toast"),n=S("qrcode-vue"),i=Z("tooltip");return H(),V("div",ie,[C("div",se,[C("div",ue,[le,C("div",ce,[C("div",fe,[he,_(o,{id:"sku",type:"text",modelValue:s.idsku,"onUpdate:modelValue":l[0]||(l[0]=a=>s.idsku=a)},null,8,["modelValue"])]),C("div",de,[ve,_(o,{id:"nombre",type:"text",modelValue:s.nombreP,"onUpdate:modelValue":l[1]||(l[1]=a=>s.nombreP=a)},null,8,["modelValue"])]),C("div",me,[ge,_(e,{id:"precio",modelValue:s.precios,"onUpdate:modelValue":l[2]||(l[2]=a=>s.precios=a),minFractionDigits:2,maxFractionDigits:5},null,8,["modelValue"])]),C("div",pe,[j(_(t,{label:"Generar Código QR",class:"p-button-success mr-2 mb-2",onClick:l[3]||(l[3]=a=>s.QR())},null,512),[[i,"Click al presionar"]])])])])]),_(r),s.showQR?(H(),V("div",Ee,[C("div",Ce,[_(n,{value:s.value,size:s.size,level:"H"},null,8,["value","size"])])])):x("",!0)])}const Re=J(ae,[["render",we]]);export{Re as default};