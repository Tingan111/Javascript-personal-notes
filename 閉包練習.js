function createCounter(){
    let count=0;
    return function(){
    count++
    return count
    }
    }
    const abc=closesure()
    console.log(abc);
    console.log(abc);
    
    // 閉包的形成：
    // 函式裡面放變數之後內部再回傳一個函式裡面在對外部函式變數作用
    // 回傳變數之後在外定義一個變數封裝呼叫函式 使其函數裡的變數
    // 變成私有變數 讓外部能夠呼叫
    
    