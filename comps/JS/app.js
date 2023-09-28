document.querySelector('.hamburger').addEventListener('click', (e)=>{
    document.querySelector('.nav-buttons-mobile').classList.toggle('hidden-nav')
    let i=0;
    document.querySelectorAll('.hamburger span').forEach((span)=>{ 
      i+=1; 
      span.classList.toggle(`close-${i}`);
     })
  })