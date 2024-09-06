  const deficienciaSelect = document.getElementById('deficiencia');
  const outraDeficiencia = document.getElementById('outraDeficiencia');

  deficienciaSelect.addEventListener('change', () => {
    if (deficienciaSelect.value === 'outra') {
      outraDeficiencia.style.display = 'block';
    } else {
      outraDeficiencia.style.display = 'none';
    }
  }); 
  function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Para fins de depuração, mostra a seção no console

    // Inicializa uma string para armazenar o HTML dos resultados
    let resultados = "";

    // Itera sobre cada objeto na lista de dados
    for (let Dado of Dados) {
        // Cria um novo elemento HTML para cada resultado
        resultados += `
        <div class="item-resultado" data-deficiencia="visual,auditiva">
            <h2><a href="${Dado.link}" target="_blank">${Dado.titulo}</a></h2>
            <p class="descriçao-meta">${Dado.descriçao}</p>
            <ul>
                <li><strong>Benefícios:</strong> ${Dado.Benefícios}</li>
                <li><strong>Oportunidades:</strong> ${Dado.Oportunidades}</li>
            </ul>
            <p><strong>Contato:</strong> ${Dado.Contato}</p>
            <p><strong>Locais:</strong> ${Dado.Locais}</p>
            <p><strong>Setores:</strong> ${Dado.Setores}</p>
            <a href="${Dado.link}" target="_blank">Saiba mais</a>
        </div>
    `;
    }

    // Atualiza o conteúdo da seção com os resultados gerados
    section.innerHTML = resultados;
} 

