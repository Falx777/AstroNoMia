var element5 = document.querySelectorAll('[data-anim]');
function animaScroll(){
    var topPageWindow = window.pageYOffset+(window.innerHeight*3/4);
    element5.forEach(function(el3ment){
        if (topPageWindow > el3ment.offsetTop ){
            el3ment.classList.add('animation');
        }else{
            el3ment.classList.remove('animation');
        } 
    });
}

window.addEventListener('scroll',function(){
    animaScroll();
});

document.addEventListener('mouseover',function(){
    var today = new Date();
    var month = (today.getMonth() < 10) ? '0' + today.getMonth() : today.getMonth(); 
    var day = (today.getDate() < 10) ? '0' + today.getDate() : today.getDate();  
    var currentDatE = today.getFullYear() + '-' + month + '-' + day;
    //console.log(currentDatE)
    if(document.getElementById("date") != null){
        document.getElementById("date").setAttribute('max',currentDatE);
    }
});

function submit(){
    var sex;
    document.getElementsByName('sex').forEach(name => {
        if(name.checked){
            sex = name.value;
        }
    });
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    location.href = 'signIn_.html?name=' + name+ 'date=' + date + 'sex=' + sex + 'email=' + email + 'password=' + password;
}


function login(){
    var email = document.getElementById("emailL").value;
    var password = document.getElementById("passwordL").value;
    emailURL = document.URL.replace('%40', '@');
    email = 'email=' + email;
    if (emailURL.search(email) >=0 && email != ''){
        if (emailURL.search('password='+password) >=0 && password != ''){
            var b = emailURL.search('name=');
            var e = emailURL.search('date');
            var name = emailURL.slice(b,e);
            b = emailURL.search('sex=');
            e = emailURL.search('email');
            var sex = emailURL.slice(b,e);
            location.href = 'home_.html?'+name + '&' + sex;
        }
        else{
            alert('SENHA INCORRETA!')
        }
    }else{
        alert("USUÁRIO NÃO ENCONTRADO!")
    }
}
