document.addEventListener('DOMContentLoaded', function () { 
    //!!descomentar o 'function ()' para aplicar medidas de segurança, comentar para desenvolver.


    // Desabilitar clique direito
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    });

    // Não abrir ferramentas de desenvolvedor com Ctrl + Shift + C
    document.addEventListener('keydown', function (e) {
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        alert("Para segurança dos usuários, NÃO é permitido o uso das ferramentas de desenvolvedor.");
        // logout();
      }
    });

     // Não abrir ferramentas de desenvolvedor com Ctrl + Shift + I
     document.addEventListener('keydown', function (e) {
        if (e.ctrlKey && e.shiftKey && e.key === 'I') {
            e.preventDefault();
          alert("Para segurança dos usuários, NÃO é permitido o uso das ferramentas de desenvolvedor. ");
        //   logout();
        }
      });

      // desabilitar alt
     document.addEventListener('keydown', function (e) {
        if (e.altKey) {
            e.preventDefault();
          
        //   logout();
        }
      });

    // Interceptar Ctrl + U e limpar a página
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key.toLowerCase() === 'u') {
            
            e.preventDefault();
            alert("Para segurança dos usuários, NÃO é permitido o uso das ferramentas de desenvolvedor. ");
            // document.body.innerHTML = 'Ferramentas de desenvolvedor desativadas, pressione F5 ou atualize a página'; // Limpar o conteúdo da página
        }
    });

    

    // Detectar ferramentas de desenvolvedor baseando-se no desempenho
    function detectDevTools() {
        const start = performance.now();
        debugger;
        const end = performance.now();
        return end - start > 100;
    }

    // Verificar se as ferramentas de desenvolvedor estão abertas ao carregar a página
    if (detectDevTools()) {
        alert("Para segurança dos usuários, NÃO é permitido o uso das ferramentas de desenvolvedor. Efetuando Logout.");
        logout();
    }

    // Verificar periodicamente se as ferramentas de desenvolvedor foram abertas
    setInterval(function() {
        if (detectDevTools()) {
            alert("Para segurança dos usuários, NÃO é permitido o uso das ferramentas de desenvolvedor. Efetuando Logout.");
            logout();
        }
    }, 1000);
  });

  