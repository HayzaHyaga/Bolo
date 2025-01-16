document.addEventListener('DOMContentLoaded', function() {
    const privacyLink = document.getElementById('privacy-link');

    // Cria o overlay
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.innerHTML = '<img src="pink.jpeg" alt="Logo do Site">';
    document.body.appendChild(overlay);

    // Remove o overlay após a página carregar
    setTimeout(function() {
        overlay.classList.add('hide');
        setTimeout(function() {
            document.body.removeChild(overlay);
        }, 1500); // Tempo da transição em milissegundos
    }, 500); // Pequeno atraso para garantir que a transição funcione

    if (privacyLink) {
        privacyLink.addEventListener('click', function(event) {
            event.preventDefault();

            // Adiciona a classe para mostrar o overlay instantaneamente
            overlay.classList.remove('hide');
            overlay.classList.add('show');

            // Redireciona após a transição
            setTimeout(function() {
                window.location.href = event.target.href;
            }, 10); // Tempo da transição em milissegundos
        });
    }
});