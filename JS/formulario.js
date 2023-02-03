const inputs = document.getElementsByClassName(`formulario__input`)


for( let i = 0; i < inputs.length; i++){
    inputs[i].addEventListener(`keyup`, function(){
        if(this.value.length >= 1){
            this.nextElementSibling.classList.add(`fijar`)
        } else {
            this.nextElementSibling.classList.remove(`fijar`)
        }
    })
}

const form = document.querySelector(`#formulario`)
const mailTo = document.querySelector(`#truco`)

form.addEventListener(`submit`,handleSubmit )

function handleSubmit (event) {
    event.preventDefault()
    //
    const f = new FormData(this)
    console.log(f.get(`nombre`))
    mailTo.setAttribute(`href`, `mailto:tbolotnicoff@gmail.com?subject=${f.get(`nombre`)}${f.get(`correo`)}&body=${f.get(`mensaje`)}`)
    mailTo.click()
}



