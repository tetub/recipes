let counter = 0;

function valid()
{
    let form = document.querySelector('.Form_Registration');
    let search = form.querySelectorAll('.search');
    let errors = form.querySelectorAll('.error');
    let password = form.querySelector('.search--password');
    let passwordConfirmation= form.querySelector('.search--password-confirmation');
    let flag =true;

    if(errors){
        for(let i=0; i<errors.length; i++)
        {
            errors[i].remove();
            flag = false
        }
    }

    for(let i=0;i<search.length;i++)
    {
        if(!search[i].value)
        {
            let error = document.createElement('div');
            error.className = 'error';
            error.style.color = 'red';
            error.innerHTML = 'Заполните поле';
            form[i].parentElement.insertBefore(error, search[i]);
            flag = false;
        }
    }

    if(password.value != passwordConfirmation.value)
    {
        let error = document.createElement('div');
        error.className = 'error';
        error.style.color = 'red';
        error.innerHTML = 'Пароли не совпадают';
        password.parentElement.insertBefore(error, password);
        flag =false;
    }
    if(flag)
    {
        alert("Регистрация прошла успешна");
    }
}


function Open_Section(Id_Section) {
    Close_Section();
    document.getElementById(Id_Section).style.display = "block";
    document.body.style.top = `${window-scrollY}`;
}
function Close_Section()
{
    let content;
    content = document.getElementsByClassName("popUpWind");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    document.body.style.position = '';
    document.body.style.top = '';
}

function Click() {
	if(counter===0)
    Update_Likes(counter++);

else
	Update_Likes(counter--);
}
function Update_Likes(val) {
    document.getElementById("label").innerHTML = val;
}