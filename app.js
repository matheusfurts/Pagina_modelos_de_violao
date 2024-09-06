function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // Inicializa uma string vazia para armazenar os resultados HTML
  let resultados = "";

  // Itera sobre cada objeto no array de dados
  for (let dado of dados) {
    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado</p>"
      return;
    }
    // Cria uma expressão regular que ignora case e busca por qualquer parte da string
    let regex = new RegExp(campoPesquisa, "i");

    if (dado.titulo.match(regex) || dado.descricao.match(regex)) {
      // Cria uma nova div para cada resultado, formatando o HTML com template literals
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Mais Informações ${dado.titulo}</a>
      </div>
    `;
    }
  }

  if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>";
  }

  // Atribui a string com os resultados ao conteúdo HTML da seção
  section.innerHTML = resultados;
}
