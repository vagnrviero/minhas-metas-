// Seleção dos elementos da interface
const botoes = document.querySelectorAll(".aba-botao");

// Função simples para alternar o estado ativo visual das abas
botoes.forEach((botao) => {
    botao.addEventListener("click", function () {
        // Remove a classe ativo de todos os botões
        botoes.forEach(b => b.classList.remove("ativo"));
        
        // Adiciona a classe ativo no botão clicado
        this.classList.add("ativo");
        
        // Aqui você pode expandir a lógica para mudar os textos dinamicamente
    });
});
