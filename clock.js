let hrs=document.getElementById("hrs");
let min=document.getElementById("min");
let sec=document.getElementById("sec");
let ampm=document.getElementById("ampm");
setInterval(() => {
   let date=new Date();
   let h=date.getHours();
   let m=date.getMinutes();
   let s=date.getSeconds();
   ampm.textContent=h<=12?"AM":"PM";
   if (h>12) {h=h-12;}
   hrs.textContent=(h<10?"0":"")+h;
   // min.textContent=(h<10?"0":"")+m;
   min.textContent=m;
   sec.textContent=(s<10?"0":"")+s;
   
}, 1000);
