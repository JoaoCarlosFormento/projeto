function trocaPagina(pagina){
    let numero = pagina
    if(pagina == 1){
        window.location.href="index.html"
    }else if(pagina == 2){
        window.location.href="aboutMe.html"
    }else if(pagina == 3){
        window.location.href="contatos.html"
    }else if(pagina == 4){
        window.location.href="message.html"
    }
}