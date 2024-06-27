// links

var headerLink = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand">Sistema de apoio</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item"><a class="nav-link" href="./format.html">Formatar</a></li>
                        <li class="nav-item"><a class="nav-link" href="./projetos.html">Projetos</a></li>
                        <li class="nav-item"><a class="nav-link" href="./material.html">Material Técnico</a></li>
                    </ul>
                </div>
            </div>
        </nav>
   `

var header = document.getElementsByTagName("body")[0]; // Acessa o primeiro (e único) elemento <header>

if (header) { // Verifica se o elemento <header> existe
    header.innerHTML = headerLink;
}