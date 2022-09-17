// let p = document.getElementById ('title1');
// console.log (p)

function burgerMod () {
    const cont = document.getElementsByClassName ('container').item(0);
    const nav = document.getElementsByTagName ('nav'). item(0);
    nav.classList.toggle ('change');
    cont.classList.toggle ('modify');
}



function clickHandler() {
    alert('Logged in succesfully')
    console.log ('click was succesful')
}



let passwordShow = document.getElementById('showhide');
let icon = document.getElementById('toggleIcon');

icon.addEventListener('click', function(){
    if (passwordShow.type == 'password') {
        passwordShow.setAttribute('type', 'text');
        icon.classList.add('fa-eye-slash'); 
    }else{//და პირიქით
        icon.classList.add('fa-eye-slash');
        passwordShow.setAttribute('type', 'password');
    }
})



document.getElementById('login1').addEventListener('submit', function(event){

    let checkbox = document.getElementById('saveuser');
    if (checkbox.checked) {
        let username = document.getElementById('username1').value;
        Cookies.set('saveusername', username);
    }else{
        Cookies.remove('saveusername');
    }
    event.target.submit();
});


let saveUsersUsername = Cookies.get('saveusername');

if (saveUsersUsername){ 
    document.getElementById('username1').value = saveUsersUsername;
    document.getElementById('saveuser').checked = true;
}


let accordion = document.querySelectorAll('.container1');

for(let item of accordion) {//ამ სამ დივს გადავუვლით for-ის საშუალებით
    item.addEventListener('click', function(){//ქლიქზე, რომელსაც დავაწვები დაემატოს active კლასის სახელი
        this.classList.toggle('active');//this გახდება ის კონტეინერი რომელსაც დავაწვები, მუშაობს ისევე როგორც event target
    }) 
}

