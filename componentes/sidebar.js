// sidebar.js

// Carregar categorias do arquivo categorias.js
function loadCategories() {
    // Supondo que o arquivo categorias.js já tenha sido carregado e o objeto window.categorias esteja disponível
    const categoriesContainer = document.getElementById('categories-container');
    
    window.categorias.forEach(categoria => {
        const categoryItem = document.createElement('div');
        categoryItem.className = 'sidebar-item';
        categoryItem.textContent = categoria;
        categoryItem.onclick = function() {
            window.location.href = `categoria.html?categoria=${encodeURIComponent(categoria)}`;
        };
        categoriesContainer.appendChild(categoryItem);
    });
}

// Carregar componente sidebar.html
function loadSidebar() {
    fetch('componentes/sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-container').innerHTML = data;
            checkAdmin();
            loadCategories(); // Chamar a função para carregar categorias
        })
        .catch(error => console.error('Error loading sidebar:', error));
}

// Função para verificar se o usuario é admin e mostrar os itens permitidos para os users admin
function checkAdmin() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const userKey = Object.keys(userData)[0];
    const isAdmin = userData[userKey].admin;

    if (isAdmin) {
        // Adicionar botão registrar usuario
        const adminItem = document.createElement('div');
        adminItem.className = 'sidebar-item';
        adminItem.textContent = 'Registrar Usuário';
        adminItem.onclick = function () {
            window.location.href = 'register.html';
        };
        document.getElementById('admin-item').appendChild(adminItem);

        // Adicionar botão lista usuarios
        const adminItemList = document.createElement('div');
        adminItemList.className = 'sidebar-item';
        adminItemList.textContent = 'Lista de Usuários';
        adminItemList.onclick = function () {
            window.location.href = 'users.html';
        };
        document.getElementById('admin-item').appendChild(adminItemList);
    }
}

document.addEventListener('DOMContentLoaded', loadSidebar);
