function aguardar() {
  const divAguardar = document.getElementById("div_aguardar");
  divAguardar.style.display = "block";
}

function finalizarAguardar(texto) {
  const divAguardar = document.getElementById("div_aguardar");
  const divErros = document.getElementById("div_erros_login");

  divAguardar.style.display = "none";

  if (texto) {
    divErros.style.display = "block";
    divErros.innerText = texto;
  } else {
    divErros.style.display = "none";
    divErros.innerText = "";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form_cadastro");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmar-senha").value;

    if (!email || !senha || !confirmarSenha) {
      finalizarAguardar("Preencha todos os campos.");
      return;
    }

    if (senha !== confirmarSenha) {
      finalizarAguardar("As senhas não coincidem.");
      return;
    }

    aguardar();

    // Simulação de requisição
    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailServer: email,
        senhaServer: senha
      }),
    })
      .then((resposta) => {
        if (resposta.ok) {
          finalizarAguardar();
          alert("Cadastro realizado com sucesso!");
          window.location.href = "login.html";
        } else {
          throw new Error("Erro no cadastro.");
        }
      })
      .catch((erro) => {
        console.error(erro);
        finalizarAguardar("Erro ao realizar o cadastro.");
      });
  });
});

