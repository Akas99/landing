funcModal=()=>{
    const modal =document.querySelector('.modal')
    const backdrop =document.querySelector('.backdrop')
    const content=document.querySelector('.modalContent')
    const modalCloseButton = document.querySelector('.modalCloseButton')
    content.innerHTML=''
    modal.classList.add('modalActive')
    backdrop.classList.add('backdropActive')
    const text =document.createElement('h3')
    text.textContent='Ваша заявка в обработке'
    content.append(text)
    
}

const applyTelega =()=>{
    
    const form=document.querySelector('#fr__form')
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        
        let company=document.querySelector('#inputCompany')
        let num=document.querySelector('#inputNum')
        let email=document.querySelector('#inputEmail')

        let bot = {
            TOKEN:'5754358669:AAEsrKECjWW4hVX1KdDip07hGgWlGgit5tM',
            chatID:'-621796365'
        }

        const telegramFetch2=()=>{
            const sendTelegram=`Компания: ${company.value}  Телефон:${num.value}  email:${email.value}`
        fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${sendTelegram}`,
        {
            method:'GET'
        }
        ).then(Response=>{
            funcModal()
        },error=>{
            alert('hello')
        }
        )
        }
        form.addEventListener('click',()=>{
            
            if(company.value.length>1 && num.value.length>8 && company.value.length<15 && num.value.length<15 && email.value.length>1 && email.value.length<15){
                telegramFetch2()
            }else{
                alert('ошибка')
            }
        })
        
    })
}
applyTelega()