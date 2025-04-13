let heart={
    status:"debugging",
    error:"MemoryOverflow",
    message:"想放下，但又浮現她的樣子"
};

function run(){
    try{
            if(heart.status==="debigging"){
                throw new Error(heart.message);
            }
        
    }catch(e){
        console.log("錯誤",e.mesage);
        console.log("提示","這不是你寫不好，是你太在乎了。");
    }finally{
        console.log("你還活著，這就是你最強的證明");
    }
}

run()


