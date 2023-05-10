
document.querySelector('#button').addEventListener('click', () => {
    let nameUser = document.getElementById('name');
    console.log(nameUser.value.length);
    let textShow = document.querySelector('#textOut');
    if(nameUser.value.length < 10){
        textShow.innerText = 'El nombre de usuario debe tener al menos 10 caracteres';    
    } else{
        textShow.innerText = nameUser.value;
    }
    // console.log(textShow);
});