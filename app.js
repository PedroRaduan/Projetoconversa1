function login(){
    localStorage.setItem('Nome', document.getElementById('password').value);
    window.location = 'conversa2.html';
}