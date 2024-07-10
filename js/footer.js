var footerhtml = `
        <div class="container">
            <p>&copy; 2024 Klassmatt. Todos os direitos reservados.</p>
        </div>
    `;

var footer = document.getElementsByTagName("footer")[0]; // Acessa o primeiro (e único) elemento <footer>

if (footer) { // Verifica se o elemento <footer> existe
    footer.innerHTML = footerhtml;
}