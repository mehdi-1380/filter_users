

function render(){
    const body = document.querySelector('body');
    let id = location.href.split('?')[1];

    id = id.split('=')[1];
    let user = USERS.find(item=>item.id == id);

   let template = `<section class="container">

    <header class="profile">

        <div class="profile-image">

            <img src="${user.image}">

            <h2>${user.firstname} ${user.lastname}</h2>

            <span>${user.job}</span>

        </div>

        <div class="profile-info">

            <div class="card">
                <strong>👤 جنسیت</strong>
                <span>${user.gender}</span>
            </div>

            <div class="card">
                <strong>🎂 سن</strong>
                <span>${user.age} سال</span>
            </div>

            <div class="card">
                <strong>📍 آدرس</strong>
                <span>${user.address.country} , ${user.address.city} , ${user.address.street}</span>
            </div>

            <div class="card">
                <strong>💻 نام کاربری</strong>
                <span>${user.login.username}</span>
            </div>

            <div class="card">
                <strong>✉ ایمیل</strong>
                <span>${user.login.email}</span>
            </div>

            <div class="card">
                <strong>📞 شماره تماس</strong>
                <span>${user.mobile}</span>
            </div>

        </div>

    </header>

    <main class="about">

        <h2>
            🧠 ${user.personality.title}
        </h2>

        <p>

            ${user.personality.description}

        </p>

    </main>

</section>`;

body.innerHTML = template;

}

render();