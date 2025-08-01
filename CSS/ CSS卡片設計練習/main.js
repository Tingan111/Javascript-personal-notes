document.querySelectorAll('.card-button, .action-btn').forEach(button=>{
  button.addEventListener('click',function(){
    //添加點擊動畫
    this.style.transform='scale(0.95)';
    setTimeout(()=>{
      this.style.transform='';
    },150);

    //模擬操作反饋
    const originalText=this.textContent;
    this.textContent='處理中....';
    setTimeout(()=>{
      this.textContent =originalText;
    },1000)
  });
});

//滾動時的視差效果
window.addEventListener('scroll',()=>{
  const scrolled= window.pageYOffset;
  const cards=document.querySelectorAll('.card, .flex-card');
  cards.forEach((card,index)=>{
    const rate =scrolled*-0.5;
    card.style.transform=`translateY(${rate*(index%3+1)*0.1}px)`;
  });
});
