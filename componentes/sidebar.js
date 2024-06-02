// carregar componente sidebar.html
function loadSidebar() {
    fetch('componentes/sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-container').innerHTML = data;
            checkAdmin();
        })
        .catch(error => console.error('Error loading sidebar:', error));
}

//função para verificar se o usuario é admin e mostrar os itens permitidos para os users admin
function checkAdmin() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const userKey = Object.keys(userData)[0];
    const isAdmin = userData[userKey].admin;

    if (isAdmin) {
        const adminItem = document.createElement('div');
        adminItem.className = 'sidebar-item';
        adminItem.textContent = 'Registrar Usuário';
        adminItem.onclick = function () {
            window.location.href = 'register.html';
        };
        document.getElementById('admin-item').appendChild(adminItem);
    }
}

document.addEventListener('DOMContentLoaded', loadSidebar);
