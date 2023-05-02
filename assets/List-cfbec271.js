import{P as D}from"./ProductService-c3f21ab6.js";import{_ as F,r as l,o as I,b as d,c as T,d as k,e,f as o,g as n,t as s,n as y,i as h,p as U,l as K}from"./index-4c399f6e.js";const c=r=>(U("data-v-ab711204"),r=r(),K(),r),N={class:"grid"},j={class:"col-12"},M={class:"card"},H=c(()=>e("h5",null,"DataView",-1)),$={class:"grid grid-nogutter"},z={class:"col-6 text-left"},A={class:"col-6 text-right"},E={class:"col-12"},q={class:"flex flex-column md:flex-row align-items-center p-3 w-full"},G=["src","alt"],J={class:"flex-1 text-center md:text-left"},Q={class:"font-bold text-2xl"},W={class:"mb-3"},X={class:"flex align-items-center"},Y=c(()=>e("i",{class:"pi pi-tag mr-2"},null,-1)),Z={class:"font-semibold"},P={class:"flex flex-row md:flex-column justify-content-between w-full md:w-auto align-items-center md:align-items-end mt-5 md:mt-0"},ee={class:"text-2xl font-semibold mb-2 align-self-center md:align-self-end"},te={class:"col-12 md:col-4"},ae={class:"card m-3 border-1 surface-border"},se={class:"flex align-items-center justify-content-between"},oe={class:"flex align-items-center"},le=c(()=>e("i",{class:"pi pi-tag mr-2"},null,-1)),ne={class:"font-semibold"},de={class:"text-center"},ie=["src","alt"],ce={class:"text-2xl font-bold"},re={class:"mb-3"},ue={class:"flex align-items-center justify-content-between"},me={class:"text-2xl font-semibold"},_e={class:"col-12 lg:col-8"},ve={class:"card"},pe=c(()=>e("h5",null,"PickList",-1)),he={class:"col-12 lg:col-4"},ge={class:"card"},fe=c(()=>e("h5",null,"OrderList",-1)),be={__name:"List",setup(r){const g=l([[{name:"San Francisco",code:"SF"},{name:"London",code:"LDN"},{name:"Paris",code:"PRS"},{name:"Istanbul",code:"IST"},{name:"Berlin",code:"BRL"},{name:"Barcelona",code:"BRC"},{name:"Rome",code:"RM"}],[]]),f=l([{name:"San Francisco",code:"SF"},{name:"London",code:"LDN"},{name:"Paris",code:"PRS"},{name:"Istanbul",code:"IST"},{name:"Berlin",code:"BRL"},{name:"Barcelona",code:"BRC"},{name:"Rome",code:"RM"}]),b=l(null),_=l("grid"),u=l(null),v=l(null),p=l(null),V=l([{label:"Price High to Low",value:"!price"},{label:"Price Low to High",value:"price"}]),S=new D;I(()=>{S.getProductsSmall().then(i=>b.value=i)});const L=i=>{const a=i.value.value,m=i.value;a.indexOf("!")===0?(v.value=-1,p.value=a.substring(1,a.length),u.value=m):(v.value=1,p.value=a,u.value=m)};return(i,a)=>{const m=d("Dropdown"),O=d("DataViewLayoutOptions"),x=d("Rating"),w=d("Button"),B=d("DataView"),C=d("PickList"),R=d("OrderList");return T(),k("div",N,[e("div",j,[e("div",M,[H,o(B,{value:b.value,layout:_.value,paginator:!0,rows:9,sortOrder:v.value,sortField:p.value},{header:n(()=>[e("div",$,[e("div",z,[o(m,{modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=t=>u.value=t),options:V.value,optionLabel:"label",placeholder:"Sort By Price",onChange:a[1]||(a[1]=t=>L(t))},null,8,["modelValue","options"])]),e("div",A,[o(O,{modelValue:_.value,"onUpdate:modelValue":a[2]||(a[2]=t=>_.value=t)},null,8,["modelValue"])])])]),list:n(t=>[e("div",E,[e("div",q,[e("img",{src:"demo/images/product/"+t.data.image,alt:t.data.name,class:"my-4 md:my-0 w-9 md:w-10rem shadow-2 mr-5"},null,8,G),e("div",J,[e("div",Q,s(t.data.name),1),e("div",W,s(t.data.description),1),o(x,{modelValue:t.data.rating,readonly:!0,cancel:!1,class:"mb-2"},null,8,["modelValue"]),e("div",X,[Y,e("span",Z,s(t.data.category),1)])]),e("div",P,[e("span",ee,"$"+s(t.data.price),1),o(w,{icon:"pi pi-shopping-cart",label:"Add to Cart",disabled:t.data.inventoryStatus==="OUTOFSTOCK",class:"mb-2"},null,8,["disabled"]),e("span",{class:y("product-badge status-"+t.data.inventoryStatus.toLowerCase())},s(t.data.inventoryStatus),3)])])])]),grid:n(t=>[e("div",te,[e("div",ae,[e("div",se,[e("div",oe,[le,e("span",ne,s(t.data.category),1)]),e("span",{class:y("product-badge status-"+t.data.inventoryStatus.toLowerCase())},s(t.data.inventoryStatus),3)]),e("div",de,[e("img",{src:"demo/images/product/"+t.data.image,alt:t.data.name,class:"w-9 shadow-2 my-3 mx-0"},null,8,ie),e("div",ce,s(t.data.name),1),e("div",re,s(t.data.description),1),o(x,{modelValue:t.data.rating,readonly:!0,cancel:!1},null,8,["modelValue"])]),e("div",ue,[e("span",me,"$"+s(t.data.price),1),o(w,{icon:"pi pi-shopping-cart",disabled:t.data.inventoryStatus==="OUTOFSTOCK"},null,8,["disabled"])])])])]),_:1},8,["value","layout","sortOrder","sortField"])])]),e("div",_e,[e("div",ve,[pe,o(C,{modelValue:g.value,"onUpdate:modelValue":a[3]||(a[3]=t=>g.value=t),listStyle:"height:250px",dataKey:"code"},{sourceheader:n(()=>[h(" From ")]),targetheader:n(()=>[h(" To ")]),item:n(t=>[e("div",null,s(t.item.name),1)]),_:1},8,["modelValue"])])]),e("div",he,[e("div",ge,[fe,o(R,{modelValue:f.value,"onUpdate:modelValue":a[4]||(a[4]=t=>f.value=t),listStyle:"height:250px",dataKey:"code",rows:10},{header:n(()=>[h(" Cities ")]),item:n(t=>[e("div",null,s(t.item.name),1)]),_:1},8,["modelValue"])])])])}}},ye=F(be,[["__scopeId","data-v-ab711204"]]);export{ye as default};
