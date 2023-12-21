function cambiarTema(){
    let theme = document.getElementById('theme').value;
    let body = document.getElementById('body');

    if(theme == "oscuro"){
        body.classList.add('theme-dark');
        body.classList.remove('theme-light');
        body.classList.remove('theme-free');
    } else if(theme == "claro"){
        body.classList.add('theme-light');
        body.classList.remove('theme-dark');
        body.classList.remove('theme-free');
    } else if(theme == "tema-libre"){
        body.classList.add('theme-free');
        body.classList.remove('theme-light');
        body.classList.remove('theme-dark');
    }

    document.getElementById('theme').value = '';

}

// Set Item
//localStorage.setItem("theme", "theme-free");
// Retrieve
document.getElementById("body").classList.add = localStorage.getItem("theme-free");