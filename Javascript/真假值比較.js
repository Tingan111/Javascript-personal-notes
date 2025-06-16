const test1=1;        //1強致轉換成true
console.log(test1??"aa");  
console.log(test1||"aa");
console.log(test1&&"aa");
console.log(test1?"aa":"bb");
console.log("----分隔線----");
const test2=0;          //0,"",false,-0,0n,NaN,unll,undefined代表falsy  0n為BigInt型別 es11才出
console.log(test2??"aa");  
console.log(test2||"aa");
console.log(test2&&"aa");
console.log(test2?"aa":"bb");
console.log("----分隔線----");
const test3=undefined;
console.log(test3??"aa");  
console.log(test3||"aa");
console.log(test3&&"aa");
console.log(test3?"aa":"bb");
console.log("----分隔線----");
console.log()
//只有unll跟undefined為unlish  卻也被歸類為falsy 但能用??特意判斷出來
//