const modalFunc = ()=>{
    const button = document.querySelector('.cover__button')
    const modalCloseButton =document.querySelector('.modalCloseButton')
    const modal =document.querySelector('.modal')
    const backdrop =document.querySelector('.backdrop')
    button.addEventListener('click',()=>{
        modal.classList.add('modalActive')
        backdrop.classList.add('backdropActive')
    })
    const removeClasses =()=>{
        modal.classList.remove('modalActive')
        backdrop.classList.remove('backdropActive')
    }
    modalCloseButton.addEventListener('click',removeClasses)
    backdrop.addEventListener('click',removeClasses)
    modal.addEventListener('click',(e)=>{
        e.stopPropagation()
    })



    const items = {
        first:['Burger',20],
        second:['Pizza',50],
        third:['Salad',10],
        fourth:['Sushi',15],
        fifth:['Lagman',14],
        sixth:['Plov',15],
        seventh:['Club-sandwich',11],
        eigth:['Steak',25],
    }

   
const modalFunc = (items) =>{
    const button = document.querySelector('.cover__button')
    const modalCloseButton = document.querySelector('.modalCloseButton')
    const modal = document.querySelector('.modal')
    const backdrop = document.querySelector('.backdrop')

    const content = document.querySelector('.modalContent')

    button.addEventListener('click',()=>{
        modal.classList.add('modalActive')
        backdrop.classList.add('backdropActive')
        
        showContent()
        
    })

    const removeClasses = () =>{
        content.innerHTML=''
        modal.classList.remove('modalActive')
        backdrop.classList.remove('backdropActive')
    }

    modalCloseButton.addEventListener('click', removeClasses)

    backdrop.addEventListener('click',removeClasses)

    modal.addEventListener('click',(e)=>{
        e.stopPropagation()
    })


    const showContent = () =>{
    const contentButton = document.createElement('button')
    const box=document.createElement('div')
    box.className='modal__box'
    contentButton.className='modalOrder'
    contentButton.textContent='ЗАКАЗАТЬ'
    content.append(contentButton, box)
    const values = Object.values(items) 
    values.forEach(el=>{
        const text = document.createElement('p')
        text.className='contentText'
        text.textContent=`${el[0]}: ${el[1]}$`
        box.append(text)
    })

    
    contentButton.addEventListener('click',()=>{
        content.innerHTML = `
            <h2>THANK YOU</h2>
            <p>Come back for another orders</p>
        `
        setTimeout(removeClasses,2000)
        
    }) }
}
modalFunc(items)



// const timer = () =>{
//     alert('timer has started');
// }
// setTimeout(timer,4000)
}
modalFunc()