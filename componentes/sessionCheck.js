// Função para verificar se os dados do usuário estão salvos no localStorage
function checkUserData() {
    const userDataString = localStorage.getItem('userData');
    if (!userDataString) {
        // Se não houver dados do usuário, redirecione para a página de login
        window.location.href = 'login.html';
    }
}

// Chama a função de verificação durante o carregamento da página
document.addEventListener('DOMContentLoaded', checkUserData);