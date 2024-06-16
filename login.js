function validarLogin(){
    usuario.setAttribute('autocomplete','off');
    let user = document.getElementById('usuario').value
    let password = document.getElementById('senha').value
    let userBanco = localStorage.getItem('nome')
    let passwordBanco = localStorage.getItem('senha')
    if(user == userBanco && password == passwordBanco){
        window.location.href="index.html";
    }else{
        alert('Login ou senha inválidos')
        document.getElementById('usuario').value = ""
        document.getElementById('senha').value = ""
    }
}
function levarCadastro(){
    window.location.href="cadastro.html"
}
function cadastrar(){
    localStorage.setItem('nome', document.getElementById('usuarioCadastro').value)
    localStorage.setItem('senha', document.getElementById('senhaCadastro').value)
    window.location.href='login.html'
}