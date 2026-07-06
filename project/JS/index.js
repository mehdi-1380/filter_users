function render(list){
    const main = document.querySelector('main');

    let template = list.map((item)=>{
        return `<div class="user">
            <div class="image">
                <div class="box_image">
                <img src="${item.image}" alt="">
                </div>
            </div>
            <div class="cart">
                <div>
                    <strong>نام و نام خانوادگی :</strong>
                    <span>${item.firstname} ${item.lastname}</span>
                </div>
                 <div>
                    <strong>شماره تماس :</strong>
                    <span>${item.mobile}</span>
                </div>
                 <div>
                    <strong> ایمیل :</strong>
                    <span>${item.login.email}</span>
                </div>
                <div>
                    <strong>آدرس :</strong>
                    <span>${item.address.country} , ${item.address.city} , ${item.address.street}</span>
                </div>
            </div>
            <div class="read_more">
                <button><a href="/PAGE/page.html?id=${item.id}" id="1"> بیشتر بخوانید </a></button>
            </div>
       </div>`
    });

    main.innerHTML = template.join('');
}

function filterCountry(){
    let countries = USERS.map(item=>item.address.country);

    countries = new Set(countries);


    const division_filter  = document.querySelector('.division_filter');

    let template = Array.from(countries).map((item)=>{
        return `<div>
                <label for="${item}"> ${item} </label>
                <input type="checkbox" id="${item}" name="country" value="${item}" onchange="rednercountry(event)">
                </div>
                `});

        console.log(countries);
    division_filter.innerHTML = template.join('');
    

}

function filtergender(){

    const division_gender = document.querySelector('.division_gender');

    let genders = USERS.map(item=>item.gender);

    genders = new Set(genders);

    let template = Array.from(genders).map( (item) =>{
        return `<div>
                <label for="${item}"> ${item} </label>
                <input type="checkbox" id="${item}" name="gender" value="${item}" onchange="rendergender(event)">
                </div>`
    }
    );

    division_gender.innerHTML = template.join('');
}
let valuesgender = [];
function rendergender(event){
    const {value , checked} = event.target;
    if(checked){
    valuesgender.push(value);
    }else{
        valuesgender = valuesgender.filter(item=>item != value);
    }

   
    

   aply();
}

let valuescountry = [];

function rednercountry(event){
    const {value , checked} = event.target;

    if(checked){
        valuescountry.push(value);
    }else{
        valuescountry = valuescountry.filter(item=> item != value);
    }
    
    

    aply();
}

function aply(){
    let users = USERS.filter((item)=>{
        const gender = valuesgender.length == 0 || valuesgender.includes(item.gender);
        const country = valuescountry.length == 0 || valuescountry.includes(item.address.country);

        return gender && country ;
    });

    render(users);
}


filtergender();

filterCountry();

render(USERS);