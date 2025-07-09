const findMax=(arr)=>{
  let Max=arr[0];//假設陣列第一個為最大
  for(let i=0;i<arr.length;i++){
    if(Max<arr[i]){ //for迴圈判斷arr[i]有沒有比Max大
      Max=arr[i] //有的話賦值給Max
    }
  }return Max  // 回傳Ｍax
}

const arr = [3, 7, 2, 99, 20];

console.log(findMax(arr));
