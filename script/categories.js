const categoriesGlobal=()=>{
const data = {
    burgers: [
        {
            name: 'Super burger',
            img: './images/burger.png'
        },
        {
            name: 'Mega burger',
            img: './images/burger2.png'
        },
        {
            name: 'Extra burger',
            img: './images/burger1.png'
        },
    ],
    pizzas: [
        {
            name: 'Italian pizza',
            img: './images/pizza.png'
        },
        {
            name: 'Meat pizza',
            img: './images/pizza1.png'
        },

    ],
    sushi: [
        {
            name: 'sushi',
            img: './images/sushi.png'
        },
        {
            name: 'sushi 2',
            img: './images/sushi1.png'
        },
        {
            name: 'sushi 3',
            img: './images/sushi2.png'
        },
        {
            name: 'sushi 4',
            img: './images/sushi3.png'
        },
    ]
}

const burgers =data.burgers
const pizzas=data.pizzas
const sushi=data.sushi
const all=[...burgers,...sushi,...pizzas]

const categories=(data)=>{
    const output=document.querySelector('.output')
    output.innerHTML=''
    data.forEach(el=>{
        const col=document.createElement('div')
        const box=document.createElement('div')
        const img=document.createElement('img')
        const name=document.createElement('p')

        col.className='col-3'
        box.className='categories__box'

        img.src=el.img
        name.textContent=el.name

        box.append(name,img)
        col.append(box)
        output.append(col)
    })
}
categories(all)

const buttonClickRender=()=>{
    const btn=document.querySelectorAll('.btn')
    btn.forEach(el=>{
        el.addEventListener('click',()=>{
            if(el.classList.contains('burger')){
                categories(burgers);
            }else if(el.classList.contains('pizza')){
                categories(pizzas);
            }else if(el.classList.contains('sushi')){
                categories(sushi);
            }else{
                categories(all);
            }
        })
       
    })

}
buttonClickRender()

const click =()=>{
    const btn=document.querySelectorAll('.btn')
    for(let i =0;i<btn.length;i++){
        btn[i].addEventListener('click',()=>{
            btn.forEach((el,index)=>{
                if(i===index){
                    el.classList.add('active')
                }else{
                    el.classList.remove('active')
                }
            })
        })
    }
}
click()




}
categoriesGlobal()