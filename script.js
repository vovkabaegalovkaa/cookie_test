let form = document.querySelector("#form");
if(getCookie("userLogin")){
    console.log(document.cookie);
    console.log("fsdfsfs");
    let name = getCookie('userLogin');
    form.remove();
    let h = document.createElement('h1');
    h.innerHTML = `Hello, ${name}!`;
    document.body.appendChild(h);
}
else{

    let loginNice = false;
    let pwNice = false;
    form.addEventListener("submit", () => {
        event.preventDefault();
        let ps = document.querySelectorAll("p");
        ps.forEach(el =>{
            el.remove();
        })
        loginNice = false;
        pwNice = false;
        checkLogin(form.elements.login);
        checkPassword(form.elements.password);
        if(pwNice && loginNice){
            let response = fetch("http://localhost:81/lesson84%20(trying%20to%20send%20cookie)/index.php",
                {
                    method: "POST",
                    headers: {
                        'Content-Type':'application/x-www-form-urlencoded', 
                    },
                    body: `login=${form.elements.login.value}&pw=${form.elements.password.value}`
                }
            )
            response.then(response => {
                return response.text();
            }).then(data => {
                alert(data);
            }).catch(error => {
                console.error('Error:', error);
            });
        }
    })
    function checkLogin(login){
        if(login.value.length == 0){
            let p = document.createElement('p');
            p.innerHTML = "Please enter data";
            login.parentNode.insertBefore(p, login.nextSibling);
        }
        else{
            loginNice = true;
        }
    }
    function checkPassword(pw){
        if(pw.value.length == 0){
            let p = document.createElement('p');
            p.innerHTML = "Please enter data";
            pw.parentNode.insertBefore(p, pw.nextSibling);
        }
        else{
            pwNice = true;
        }
    }
    
}
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
