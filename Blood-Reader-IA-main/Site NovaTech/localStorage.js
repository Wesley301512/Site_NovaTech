function saveUserData(email, password) {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
}

function loadUserData() {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    return { email, password };
}

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    saveUserData(email, password);

    document.getElementById('registerEmail').value = '';
    document.getElementById('registerPassword').value = '';
});


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const { email, password } = loadUserData();
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;
    if (email === loginEmail && password === loginPassword) {
        alert('Login bem-sucedido!');
      
        document.getElementById('loginEmail').value = '';
        document.getElementById('loginPassword').value = '';
    } else {
        alert('Email ou senha incorretos.');
    }
});