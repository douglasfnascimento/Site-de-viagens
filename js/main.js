// Adiciona evento de clique ao botão "Reserve"
document.querySelector("#reserve-button").addEventListener("click", function() {
    window.open("https://wa.me/SEUNUMERODOTELEFONE", "_blank");
  });
  
  // Adiciona evento de clique ao botão "Saiba mais"
  document.querySelectorAll(".btn-more").forEach(function(btn) {
    btn.addEventListener("click", function() {
      // Código para redirecionar o usuário para a página de informações sobre o passeio correspondente
    });
  });
  
  // Adiciona evento de clique ao botão "Enviar" do formulário de contato
  document.querySelector("#submit-button").addEventListener("click", function() {
    // Código para validar os campos do formulário e enviar os dados para um servidor
  });
  