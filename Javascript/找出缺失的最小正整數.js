const bbb=[1]
const aaa=[1,9,6,7,3,2,4,8]

function missingNum(arr) {
    // code here
let result=arr.sort((a,b)=>a+b);
console.log(result);

for(let i=0;i<result.length;i++){
    
    if(result[i]!==i+1){
        return result.length+1;
    }
}

    }

console.log(missingNum(bbb))

