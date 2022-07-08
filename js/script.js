let counter = 0;
let counter = 0;
function valid()
{
    let form = document.querySelector('.Form_Registration')
    let search = form.querySelectorAll('.search')
    let errors = form.querySelectorAll('.error');
    let password = form.querySelector('.search--password')
    let passwordConfirmation= form.querySelector('.search--password-confirmation')
    let flag =true

    if(errors){
        for(let i=0; i<errors.length; i++)
        {
            errors[i].remove()
            flag = false
        }
    }

    for(let i=0;i<search.length;i++)
    {
        if(!search[i].value)
        {
            let error = document.createElement('div')
            error.className = 'error'
            error.style.color = 'red'
            error.innerHTML = 'Заполните поле'
            form[i].parentElement.insertBefore(error, search[i])
            flag = false
        }
    }

    if(password.value != passwordConfirmation.value)
    {
        let error = document.createElement('div')
        error.className = 'error'
        error.style.color = 'red'
        error.innerHTML = 'Пароли не совпадают'
        password.parentElement.insertBefore(error, password)
        flag =false
    }
    if(flag)
    {
        alert("Регистрация прошла успешна")
        // let error = document.createElement('div')
        // error.className = 'error'
        // error.style.color = 'red'
        // error.innerHTML = 'Регистрация прошла успешна '
        // password.parentElement.insertBefore(error, form.querySelector('.button--addrecipe'))
    }
}


function Open_Section(Id_Section) {
    Close_Section();
    document.getElementById(Id_Section).style.display = "block";
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
}
function Close_Section()
{
    let content;
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    document.body.style.position = '';
    document.body.style.top = '';
}

if (trigger === 0) {
        updateLike(++counter);
        trigger = 1;
    }
    else {
        updateLike(--counter);
        trigger = 0;
    }
function Update_Likes(val) {
    document.getElementById("label").innerHTML = val;
}