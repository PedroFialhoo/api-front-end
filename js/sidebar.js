// Pega a URL atual da página
const currentURL = window.location.pathname;

// Carrega a sidebar via fetch
fetch('sidebar.html')
  .then(response => response.text())
  .then(data => {
    // Insere a sidebar no container
    document.getElementById('sidebar-container').innerHTML = data;

    // Agora seleciona os links da sidebar (depois que ela foi inserida)
    const links = document.querySelectorAll('.side-op');

    links.forEach(link => {
      // Compara o href do link com a URL atual
      if (link.getAttribute('href') === currentURL) {
        link.parentElement.classList.add('active'); // adiciona a classe 'active' no LI
      }
    });
  });
