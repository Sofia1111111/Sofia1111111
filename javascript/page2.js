// function clickHandler () {
//     alert('Registered succesfully')
//     console.log ('click was succesful')
// }

let formElement = document.getElementById('registration');

formElement.addEventListener ("submit", function(event){
    event.preventDefault();

    let errors = {};
    let form = event.target;

    //username ვალიდაცია
    let username = document.querySelector('[name="username"]').value;
    //ვალიდაციის შემოწმება:
    if (username.length > 5 && username == "") {//თუ input-ის სიგრძე არის 5ზე ნაკლები ან ცარიელია, error-ს ობიექტში ჩავარდება key, რომელსაც იმ სახელს ვარქმევთ, რა name ატრიბუტის მნიშვნელობაც გვექნება გაწერილი html-ში (must). value კი არის ტექსტი რაც გვინდა
        errors.username = "Username value must be more than 5 character and can not be empty";
    }

    //password
    let password = document.getElementById('passw').value;
    let password2 = document.getElementById('passw2').value;

    if (password != password2) {
        errors.password2 = 'Passwords do not match';
        alert('passwords do not match');

    }

    //checkbox 
    let agree = document.getElementById('agree').checked;
    if (!agree) { //თუ არ არის true 
        errors.agree = 'You must agree to our conditions';
    }

    //radio 
    let gender = false;

    form.querySelectorAll('[name="gender"]').forEach(item => {
        if (item.checked){
            gender = true;
        }
    })
    if (!gender) {
        errors.gender = 'Select Your Gender'; 
    }

    console.log(errors);


    form.querySelectorAll('.error-text').forEach((element) =>{//ეს გვჭირდება იმისთვის, რომ ერთხელ რომ ამოაგდებს ერორს თუ შემდეგ სწორად დავწერეთ error ტექსტი გაქრეს
        element.innerHTML = '';//ყოველ ჯერზე გაასუფთავებს div-ს
    })

    for (let item in errors) {//errors-ს ობიექტიდან გადავუაროთ თითოეულ key-ს. შესაბამისად კონსოლში თუ აითემს დავლოგავთ, გამოჩნდება, username, agree, gender, password2 
        console.log(item);

        let textError = document.getElementById('error_' + item);//id-ის საშუალებით ვიღებთ იმ div-ს რომელშიც უნდა ჩავაგდოთ error ტექსტი. თუ არანაირი შეცდომა არ მოხდა, ეს TextError იქნება ცარიელი, for ციკლი საერთოდ არ შესრულდება

        if (textError) {//თუ textError არის true, მასში უნდა ჩავარდეს, errors ცვლადის key-ები ანუ item-ები
            textError.textContent = errors[item];
        }
    }

    if (Object.keys(errors).length == 0) {//ეს ნიშნავს რომ თუ errors.keys ცარიელია, დაასაბმითე ფორმა
        form.submit();
        alert('Registered succesfully')
    }

});
    // let errors = {
    //     username: 'Username value must be more than 5 character and can not be empty';
    //     gender: 'Select Your Gender';
    //     agree: 'You must agree to our conditions';
    //     password2: 'Passwords do not match';
    // }

function validationEmail() {
    let form = document.getElementById('form');
    let email = document.getElementById('email').value;
    let errorText = document.getElementById('text');

    let emailStucture = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //https://emailregex.com

    if (email.match(emailStucture)) {
        form.classList.add('valid');
        errorText.innerHTML = 'Your Email Is Valid';
        errorText.style.color = '#BEE5B0';
        errorText.style.fontWeight = "bold";
        errorText.style.fontFamily = "acme";
    }else{
        form.classList.remove('valid');
        form.classList.add('invalid');
        errorText.innerHTML = 'Your Email Is Invalid';
        errorText.style.color = '#ff6961';
        errorText.style.fontWeight = "bold";
        errorText.style.fontFamily = "acme";
    }
    if (email == ''){
        form.classList.remove('valid');
        form.classList.add('invalid');
        errorText.innerHTML = 'Enter Your Email';
        errorText.style.color = '#C1F0EA';
        errorText.style.fontWeight = "bold";
        errorText.style.fontFamily = "acme";
    }
}


let data = [
    {
        id:1,
        imageUrl:'/assets/insta.png', 
        title: 'Instagram',
        url:'https://instagram.com',//სად მინდა რომ გადამამისართოს
    },
    {
        id:2,
        imageUrl:'/assets/facebook.jpeg',
        title:'Facebook',
        url:'https://facebook.com'
    },
    {
        id:3,
        imageUrl:'/assets/twitter.png',
        title:'Twitter',
        url:'https://twitter.com'
    },
    {
        id:4,
        imageUrl:'/assets/snapchat.png',
        title:'Snapchat',
        url:'https://snapchat.com'
    },
];


const arrowLeft = document.getElementById('arrow-left'); //ელემენტი შევინახეთ ცვლადში
const arrowRigth = document.getElementById('arrow-right');
const sliderContent = document.getElementById('slider-content');
const dotBurtuli = document.getElementsByClassName('dot');//dot ელემნტი შევინახოთ ცვლადში

let sliderIndex = 0; //სლაიდერინდექსი იქნება 0, რადგან მასივის პირველი ობიექტის ინდექსია 0

function createAtag(item) { //item არის data მასივიდან დაბრუნდებული თითოეული ობიექტი 
    const tag = document.createElement('a');//ვქმნით a ელემენტს
    tag.setAttribute('href', item.url);//ვუმატებთ href ატრიბუტზე, რომ დაწოლა და ლინკზე გადასვლა იყოს შესაძლებელი 
    tag.classList.add('slide');//მივანიჭეთ კლასის სახელი

    return tag; //დავაბრუნოთ ეს შექმნილი a tag თავისი href ატრიბუტით, მნიშვნელობით და ა.შ.
}

//იგივე პრინციპით ვქმნით image tag-ს
function createImgtag(item) { 
    const tagImage = document.createElement('img');
    tagImage.setAttribute('src', item.imageUrl);
    tagImage.setAttribute('alt', item.title);//alt ატრიბუტში იწერება ინფორმაცია, თუ სურათი არ გაიხსნა, ამ შემთხვევაში გადავცემთ title-ს
    
   
    return tagImage; //დავაბრუნოთ ეს tag
}

function createH2tag(item) { 
    const tagTitle = document.createElement('h2');
    //ქვედა სამივე მეთოდი ერთი და იგივე შედეგს გვაძლევს
    tagTitle.innerText = item.title; //h2-ში ჩავაგდოთ ის კონტენტი, რაც არის მითითებული title-ში
    //tagTitle.textContent
    //tagTitle.append
    tagTitle.classList.add('slider-title');//მივანიჭოთ კლასი

    return tagTitle; //დავაბრუნოთ ეს tag
}
//dot-ებისთვის ვქმნით ფუნქციას, რომლსაც გადაეცემა თითოელი ობიექტი პარამეტრად, გვინდა რომ რომელ დოტსაც დავაწვებით იმ სლაიდზე გადავიდეს
function createDots(item){//შევქმენით ფუნქცია
   const dotsParent = document.createElement('div');//შევქმენით ბურთულას მშობელი ელემენტი რომელიც შევინახეთ ცვლადში
   dotsParent.classList.add('dotsParent');//მივანიჭეთ კლასი

   //გადავუარეთ forEach-ის საშუალებით ყოველ ბურთულა ელემენტს
   data.forEach (element =>{
    const dotChild = document.createElement('div');
    dotChild.classList.add('dot');
    dotChild.setAttribute('data-id', element.id - 1 );//აქ რადგან id-ების თვლას ვიწყებთ 1-დან, ჩვენ კი გვჭირდება იდექსების გამოყენება ანუ 0-დან დაწყება, ვწერთ element.id - 1, რადგან მიწვდეს მასივში არსებულ პირველ ელემენტს რომლის ინდექსია 0

    dotChild.addEventListener('click', function(event){
        let id = event.target.getAttribute('data-id');//გვაქვს 4 ბურთულა და რომელსაც დავაწვები ის გახდება event.target და ჩავარდება id ცვლადში
        sliderIndex = id; //სლაიდერინდექსი უნდა გახდეს ეს id, რომ შესაბამის სლაიდზე გადავიდეს
        setSlide();
    })
    dotsParent.appendChild(dotChild);
   });
   return dotsParent;
}
function currentDotActive() {
    dotBurtuli[sliderIndex].classList.add('active')//რა მნიშვნელობაც ექნება სლაიდერიდექსს ის შესაბამისი დოტი უნდა იყოს აქტიური, რომ აქტიურ ბურთულად მივანიჭოთ დამატებითი სტილები
}

function setSlide() {
    sliderContent.innerHTML = '';//ეს გვჭირდება რომ შემდეგ სლაიდზე გადასვლისას, ძველი ფოტო არ დატოვოს და წაიშალოს კონტენტი
    const slideItem = createAtag(data[sliderIndex]);//შევქმენით ახალი ცვლადი, რომელშიც ვიძახებთ createAtag ფუნქციას, რომელსაც პარამეტრად გადავცემთ data მასივის პირველ ობიექტს, რომელიც შევინახეთ sliderIndex ცვლადში. createAtag ფუნქციის გამოძახება დაგვჭირდა იმიტომ, რომ მიხვდეს რომ ამ ცვლადში ვინახავთ createAtag ფუნქციიდან დაბრუნებულ პასუხს ანუ A tag-ს ამ შემთხვევაში
    const h2Tag = createH2tag(data[sliderIndex]);//იგივე გავაკეთეთ h2 tag - სთვისაც
    const imgTag = createImgtag(data[sliderIndex]);//იგივე ფოტოს თეგისთვის
    const dots = createDots();//ვქმნით ცვლადს, რომელშიც ვაგდებთ ფუნქციას, რითაც შეიქმება, dot-ი

    slideItem.appendChild(imgTag);//a tag-ში ჩავაგდოთ img tag-ი
    slideItem.appendChild(h2Tag);//ასევე h2-ც
    sliderContent.appendChild(slideItem);//sliderContent-ში ჩავაგდოთ ჩვენი slideItem
    sliderContent.appendChild(dots);//sliderContent-ში ჩავაგდოთ dots


    currentDotActive();
    console.log(slideItem);
}
// ავტომატურად სამ წამში გადავიდეს მომდევნო სლაიდზე, ამიტომ arrowLeft და arrowRight გაგვაქვს ცალკე ფუნქციაში
function arrowLeftClick () {
    if (sliderIndex == 0) {
        sliderIndex = data.length - 1;//გვინდა რომ პირველი სლაიდზე უკან დაჭერის შემთხვევაში გადავიდეს ბოლო სლაიდზე
        setSlide();
        return;
    }
    sliderIndex--;
    setSlide();
}

function arrowRightClick () {
    if (sliderIndex == data.length - 1){
        sliderIndex = 0;//ბოლო სლაიდზე წინ დაჭერის შემთხვევაში გადავიდეს პირველ სლაიდზე, აქ გვჭირდება 1 ტოლობის ნიშანი რომელიც ნიშნავს უდრის, და არა == ტოლობა რომელიც ნიშნავს შედარებას
        setSlide();
        return;
    }
    sliderIndex++;
    setSlide();
}
arrowLeft.addEventListener("click", arrowLeftClick); //შესაბამისად აქ ქლიქზე გადავცემთ arrowLeftClick-ს 
arrowRigth.addEventListener("click", arrowRightClick);
setInterval ( () => {//ავტომატური გადასვლა
    arrowRightClick();//გადავცემთ მარჯვნივ გადასვლას რომ ავტომატურად გადავიდეს მარჯვნივ
}, 3000)//სამ წამში



// arrowLeft.addEventListener('click', function(){//მარცხენა ღილაკზე კლიკის შემთხვევში სლაიდერ ინდექსი რომელიც თავდაპირველად იყო 0, უნდა დაიკლოს 1-ით
//     if (sliderIndex == 0) {//თუ პირველ სლაიდზე ვართ, უკან 
//         return;// რომ არ გადავიდეს, ვაჩერებთ ფუნქციას
//     }
//     sliderIndex --;
//     setSlide();//ფუნქციას ვიძახებთ თავიდან რადგან როცა სლაიდერ ინდექსი გახდება -1, უნდა შეიცვალოს ყველა დანარჩენი ინფორმაციაც (სურათის წყარო, სათაური, a tag-ის მისამართი)
// })

// arrowRigth.addEventListener('click', function(){//მარჯვენა ღილაკზე კლიკის შემთხვევში სლაიდერ ინდექსი რომელიც თავდაპირველად იყო 0, უნდა მოიმატოს 1-ით
//     if (sliderIndex == data.length - 1){//თუ ბოლო სლაიდზე 
//         return;//ვართ, წინ რომ აღარ გადავიდეს, ვაჩერებთ
//     }
//     sliderIndex ++;
//     setSlide();//ფუნქციას ვიძახებთ თავიდან რადგან როცა სლაიდერ ინდექსი გახდება 1, უნდა შეიცვალოს ყველა დანარჩენი ინფორმაციაც (სურათის წყარო, სათაური, a tag-ის მისამართი)
// });

setSlide();
