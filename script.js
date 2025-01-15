document.addEventListener('DOMContentLoaded', function() {
    const privacyLink = document.getElementById('privacy-link');

    if (privacyLink) {
        privacyLink.addEventListener('click', function(event) {
            event.preventDefault();

            // Cria o overlay
            const overlay = document.createElement('div');
            overlay.className = 'overlay';
            overlay.innerHTML = '<img src="pink.jpeg" alt="Logo do Site">';
            document.body.appendChild(overlay);

            // Adiciona a classe para mostrar o overlay
            setTimeout(function() {
                overlay.classList.add('show');
            }, 10); // Pequeno atraso para garantir que a transição funcione

            // Redireciona após a transição
            setTimeout(function() {
                window.location.href = event.target.href;
            }, 500); // Tempo da transição em milissegundos
        });
    }
});