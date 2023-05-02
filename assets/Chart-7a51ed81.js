import{u as P,r as t,w as m,b as V,c as x,d as B,e as o,f as s}from"./index-4c399f6e.js";const k={class:"grid p-fluid"},w={class:"col-12 xl:col-6"},D={class:"card"},M=o("h5",null,"Linear Chart",-1),S={class:"col-12 xl:col-6"},O={class:"card"},J=o("h5",null,"Bar Chart",-1),A={class:"col-12 xl:col-6"},F={class:"card flex flex-column align-items-center"},E=o("h5",{class:"text-left w-full"},"Pie Chart",-1),H={class:"col-12 xl:col-6"},L={class:"card flex flex-column align-items-center"},N=o("h5",{class:"text-left w-full"},"Doughnut Chart",-1),R={class:"col-12 xl:col-6"},I={class:"card flex flex-column align-items-center"},T=o("h5",{class:"text-left w-full"},"Polar Area Chart",-1),j={class:"col-12 xl:col-6"},q={class:"card flex flex-column align-items-center"},z=o("h5",{class:"text-left w-full"},"Radar Chart",-1),W={__name:"Chart",setup(G){const{layoutConfig:v}=P();let e=getComputedStyle(document.documentElement),l=e.getPropertyValue("--text-color"),a=e.getPropertyValue("--text-color-secondary"),n=e.getPropertyValue("--surface-border");const i=t(null),d=t(null),u=t(null),p=t(null),g=t(null),y=t(null),c=t(null),_=t(null),h=t(null),C=t(null),f=()=>{e=getComputedStyle(document.documentElement),l=e.getPropertyValue("--text-color"),a=e.getPropertyValue("--text-color-secondary"),n=e.getPropertyValue("--surface-border")},b=()=>{p.value={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:e.getPropertyValue("--primary-500"),borderColor:e.getPropertyValue("--primary-500"),data:[65,59,80,81,56,55,40]},{label:"My Second dataset",backgroundColor:e.getPropertyValue("--primary-200"),borderColor:e.getPropertyValue("--primary-200"),data:[28,48,40,19,86,27,90]}]},h.value={plugins:{legend:{labels:{fontColor:l}}},scales:{x:{ticks:{color:a,font:{weight:500}},grid:{display:!1,drawBorder:!1}},y:{ticks:{color:a},grid:{color:n,drawBorder:!1}}}},d.value={labels:["A","B","C"],datasets:[{data:[540,325,702],backgroundColor:[e.getPropertyValue("--indigo-500"),e.getPropertyValue("--purple-500"),e.getPropertyValue("--teal-500")],hoverBackgroundColor:[e.getPropertyValue("--indigo-400"),e.getPropertyValue("--purple-400"),e.getPropertyValue("--teal-400")]}]},c.value={plugins:{legend:{labels:{usePointStyle:!0,color:l}}}},i.value={labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,backgroundColor:e.getPropertyValue("--primary-500"),borderColor:e.getPropertyValue("--primary-500"),tension:.4},{label:"Second Dataset",data:[28,48,40,19,86,27,90],fill:!1,backgroundColor:e.getPropertyValue("--primary-200"),borderColor:e.getPropertyValue("--primary-200"),tension:.4}]},y.value={plugins:{legend:{labels:{fontColor:l}}},scales:{x:{ticks:{color:a},grid:{color:n,drawBorder:!1}},y:{ticks:{color:a},grid:{color:n,drawBorder:!1}}}},u.value={datasets:[{data:[11,16,7,3],backgroundColor:[e.getPropertyValue("--indigo-500"),e.getPropertyValue("--purple-500"),e.getPropertyValue("--teal-500"),e.getPropertyValue("--orange-500")],label:"My dataset"}],labels:["Indigo","Purple","Teal","Orange"]},_.value={plugins:{legend:{labels:{color:l}}},scales:{r:{grid:{color:n}}}},g.value={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",borderColor:e.getPropertyValue("--indigo-400"),pointBackgroundColor:e.getPropertyValue("--indigo-400"),pointBorderColor:e.getPropertyValue("--indigo-400"),pointHoverBackgroundColor:l,pointHoverBorderColor:e.getPropertyValue("--indigo-400"),data:[65,59,90,81,56,55,40]},{label:"My Second dataset",borderColor:e.getPropertyValue("--purple-400"),pointBackgroundColor:e.getPropertyValue("--purple-400"),pointBorderColor:e.getPropertyValue("--purple-400"),pointHoverBackgroundColor:l,pointHoverBorderColor:e.getPropertyValue("--purple-400"),data:[28,48,40,19,96,27,100]}]},C.value={plugins:{legend:{labels:{fontColor:l}}},scales:{r:{grid:{color:a}}}}};return m(v.theme,()=>{f(),b()},{immediate:!0}),(K,Q)=>{const r=V("Chart",!0);return x(),B("div",k,[o("div",w,[o("div",D,[M,s(r,{type:"line",data:i.value,options:y.value},null,8,["data","options"])])]),o("div",S,[o("div",O,[J,s(r,{type:"bar",data:p.value,options:h.value},null,8,["data","options"])])]),o("div",A,[o("div",F,[E,s(r,{type:"pie",data:d.value,options:c.value},null,8,["data","options"])])]),o("div",H,[o("div",L,[N,s(r,{type:"doughnut",data:d.value,options:c.value},null,8,["data","options"])])]),o("div",R,[o("div",I,[T,s(r,{type:"polarArea",data:u.value,options:_.value},null,8,["data","options"])])]),o("div",j,[o("div",q,[z,s(r,{type:"radar",data:g.value,options:C.value},null,8,["data","options"])])])])}}};export{W as default};
