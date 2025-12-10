function PrimeNumber(num) {
  // 1. 處理極端值：1 或小於 1 的數不是質數。
  if (num <= 1) return false;
  // 2. 核心檢查迴圈：只檢查從 2 到 N 的平方根之間的數。
  // (i * i <= num) 也是常見寫法，可以避免浮點數計算，但 Math.sqrt(num) 在現代 JS 執行效能上已優化且更直觀。
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // 3. 整除判斷：如果 N 能被 i 整除，立即確定 N 不是質數，回傳 false。
    if (num % i === 0) {
      return false;
    }
  }
  // 4. 質數確定：如果迴圈跑完都沒找到因子，N 就是質數，回傳 true。
  return true;
}
//Math.sqrt()傳入數字 對數字開根號回傳數字