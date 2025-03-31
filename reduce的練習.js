const { AsyncLocalStorage } = require("node:async_hooks");

function calculateAverage(arr){
    if(arr.length===0){
        return 0;
    }else{
        return arr.reduce((a,b)=>(a+b),0)/arr.length;
    }
}

console.log(calculateAverage([1, 2, 3, 4, 5])); // 應該回傳 3);
console.log(calculateAverage([10, 20, 30])); // 應該回傳 20
console.log(calculateAverage([])); // 應該回傳 0);

//先判斷陣列長度是否為0
//不是0的話用reduce語法對陣列內容做加總在除以陣列長度;
 
function groupObjectsByProperty(objects,propety){
    return objects.reduce((result,obj)=>{
        const key=obj[propety];
        if(result[key]){
            result[key].push(obj);
        }
            else{
                result[key]=[obj]
            }
            return result
        },{})
}


const objects = [
    { name: 'Alice', city: 'Taipei' },
    { name: 'Bob', city: 'Kaohsiung' },
    { name: 'Charlie', city: 'Taipei' },
    { name: 'David', city: 'Taichung' },
    { name: 'Eve', city: 'Kaohsiung' }
  ];
  
  console.log(groupObjectsByProperty(objects, 'city'));