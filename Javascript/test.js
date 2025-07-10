const arr = [1, 2, 3, 4, 5];

const result = (arr) => arr.map((arr) => arr * 8).filter((arr) => arr > 20);
//用map創一新陣列把陣列每個值都＊8，在用filter判斷新的陣列>20為true的值挑出來
console.log(result(arr));
