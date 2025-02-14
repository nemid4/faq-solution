const button = document.querySelectorAll('.button')

button.forEach(btn =>{
    btn.addEventListener('click', function () {
        this.classList.toggle('active')
        const accordionAnswer = this.nextElementSibling
        const plusIcon = this.querySelector('.plus-icon')
        const minusIcon = this.querySelector('.minus-icon')

         
        if(accordionAnswer.style.maxHeight) {
            accordionAnswer.style.maxHeight = null
            plusIcon.style.display = 'flex'
            minusIcon.style.display = 'none'
        }
        else{accordionAnswer.style.maxHeight = accordionAnswer.scrollHeight +'px' 
            plusIcon.style.display = 'none'
            minusIcon.style.display= 'flex'


        }

        

    }
)
}

)

