import{v as l,b as t,c as n,d as i,e,f as o}from"./index-4c399f6e.js";const m={class:"grid"},_={class:"col-12"},p={class:"card"},r=e("h5",null,"Advanced",-1),u=e("h5",null,"Basic",-1),F={__name:"File",setup(h){const c=l(),s=()=>{c.add({severity:"info",summary:"Success",detail:"File Uploaded",life:3e3})};return(U,v)=>{const a=t("FileUpload"),d=t("Toast");return n(),i("div",m,[e("div",_,[e("div",p,[r,o(a,{name:"demo[]",onUploader:s,multiple:!0,accept:"image/*",maxFileSize:1e6,customUpload:""}),u,o(a,{mode:"basic",name:"demo[]",accept:"image/*",maxFileSize:1e6,onUploader:s,customUpload:""})])]),o(d)])}}};export{F as default};
