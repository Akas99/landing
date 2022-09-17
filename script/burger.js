const burgerFunc =()=>{
    const nav=document.querySelector('.nav')
    const burger=document.querySelector('.mobile-btn')
    burger.addEventListener('click',()=>{
        burger.classList.toggle('show-mobile-btn')
        nav.classList.toggle('show-nav')
    })
}
burgerFunc()