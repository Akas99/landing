const second =()=>{
    const swiper = new Swiper(".mySecondSwiper", {
        
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints:{
            300:{
                slidesPerView:1,
                grid: {
                    rows: 2,
                  },
            },
            576:{
                slidesPerView:2,
                grid: {
                    rows: 2,
                  },
            },
            768:{
                slidesPerView:3,
                grid: {
                    rows: 2,
                  },
            },
            
        }
      });
      const secondData = [
        {
            name: 'Pizza',
            img:'./images/pizza.jpg'
        },
        {
            name: 'Sushi',
            img:'./images/sushi.jpg'
        },
        {
            name: 'Plov',
            img:'./images/plov.jpg'
        },
        {
            name: 'Burger',
            img:'./images/burger.jpg'
        },
        {
            name: 'Chicken Nuggets',
            img:'./images/naggets.jpg'
        },
        {
            name: 'Steak',
            img:'./images/steak.jpg'
        },
        {
            name: 'Lagman',
            img:'./images/lagman.jpg'
        },
        {
            name: 'Salad',
            img:'./images/salad.jpg'
        },
        {
            name: 'Club sandwich',
            img:'./images/sandwich.jpg'
        },
      ]

      const swiperFunc =(menu)=>{
        const sliderWrap = document.querySelector('.menu')
        menu.forEach(el=>{
            
            const slide =document.createElement('div')
            const text =document.createElement('h2')
            slide.className= 'swiper-slide'
            text.textContent= el.name
            text.className='swiper-text'
            slide.style.backgroundImage = `url(${el.img})`
            slide.append(text)
            sliderWrap.append(slide)
            console.log(slide)
        })
      }
      swiperFunc(secondData)
}
second()