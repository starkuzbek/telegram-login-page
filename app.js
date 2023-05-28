let qrpage = document.querySelector('.log-phone')
qrpage.addEventListener("click",function(){
     document.querySelector('.qr-page').style.display = 'none'
    document.querySelector('.sign-in').style.display = 'block'
})
let signext = document.querySelector('.sign-next')
signext.addEventListener("click",function(){
     document.querySelector('.qr-page').style.display = 'none'
    document.querySelector('.sign-in').style.display = 'none'
    document.querySelector('.code-page').style.display = 'block'
})

let number = document.querySelector('.number')
signext.addEventListener("click",function(){
    document.querySelector('.number-text').innerHTML = number.value
})
let penicon = document.querySelector('.pen-icon')
penicon.addEventListener("click",function(){
    document.querySelector('.code-page').style.display = 'none'
    document.querySelector('.sign-in').style.display = 'block'
})


// Telegram

let btnOne = document.querySelector('.all')
btnOne.addEventListener("click",function(){
    document.querySelector('.groupAll').style.display = 'block'
    document.querySelector('.newsAll').style.display = 'none'
    document.querySelector('.channalAll').style.display = 'none'
})

let btnTwo = document.querySelector('.news')
btnTwo.addEventListener("click",function(){
    document.querySelector('.groupAll').style.display = 'none'
    document.querySelector('.newsAll').style.display = 'block'
    document.querySelector('.channalAll').style.display = 'none'
})

let btnThree = document.querySelector('.channal')
btnThree.addEventListener("click",function(){
    document.querySelector('.groupAll').style.display = 'none'
    document.querySelector('.newsAll').style.display = 'none'
    document.querySelector('.channalAll').style.display = 'block'
})


let edit = document.querySelector('.setting')
edit.addEventListener("click",function(){
    document.querySelector('.edit').style.display = 'block'
})

let trash1 = document.querySelector('.trash1')
trash1.addEventListener("click", function(){
    document.querySelector('.all').style.display = 'none'
})

let trash2 = document.querySelector('.trash2')
trash2.addEventListener("click", function(){
    document.querySelector('.news').style.display = 'none'
})

let trash3 = document.querySelector('.trash3')
trash3.addEventListener("click", function(){
    document.querySelector('.channal').style.display = 'none'
})

let trash4 = document.querySelector('.trash4')
trash4.addEventListener("click", function(){
    document.querySelector('.owner').style.display = 'none'
})


let codebtn = document.querySelector('.code-btn')
let password = document.querySelector('.password')
codebtn.addEventListener("click",function(){
    if(password.value==1234){
        document.querySelector('.code-page').style.display = 'none'
        document.querySelector('.container').style.display = 'block'
    }
    else{
        alert('Kod xato')
    }
})