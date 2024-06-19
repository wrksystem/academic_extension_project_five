document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Coletar dados do formulário
    const formData = new FormData(event.target);
    const data = {
      nome: formData.get("nome"),
      email: formData.get("email"),
      telefone: formData.get("telefone"),
      proposta: formData.get("proposta"),
    };

    // Enviar dados para a API 'SheetDB'
    fetch("https://sheetdb.io/api/v1/kjfq2n8h94oji", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Redirecionar o usuário após o envio bem-sucedido
        window.location.href = "/index.html";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });