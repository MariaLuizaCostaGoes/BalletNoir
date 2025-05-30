// Login
document.getElementById("login-button").addEventListener("click", entrar);

function entrar() {
  const email = document.getElementById("id-login-input-email").value;
  const senha = document.getElementById("id-login-input-password").value;

  const msgErro = document.getElementById("msgErro");

  if (email === "" || senha === "") {
    msgErro.innerHTML = "Por favor, preencha todos os campos.";
    return;
  }

  // Exibe carregamento se quiser (se tiver um spinner)
  aguardar(); // opcional se você criou a função

  fetch("/usuarios/autenticar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      emailServer: email,
      senhaServer: senha
    })
  })
    .then(function (resposta) {
      if (resposta.ok) {
        resposta.json().then(json => {
          sessionStorage.EMAIL_USUARIO = json.email;
          sessionStorage.NOME_USUARIO = json.nome;
          sessionStorage.ID_USUARIO = json.id;

          // Redireciona para página inicial ou dashboard
          setTimeout(() => {
            window.location = "index.html";
          }, 1000);
        });
      } else {
        resposta.text().then(texto => {
          msgErro.innerHTML = texto;
          finalizarAguardar(texto); // se estiver usando
        });
      }
    })
    .catch(function (erro) {
      console.error("Erro na requisição:", erro);
      msgErro.innerHTML = "Erro ao tentar fazer login.";
      finalizarAguardar(); // se estiver usando
    });
}

document.getElementById("login-button").addEventListener("click", entrar);

function entrar() {
  const email = document.getElementById("id-login-input-email").value;
  const senha = document.getElementById("id-login-input-password").value;

  const msgErro = document.getElementById("msgErro");

  if (email === "" || senha === "") {
    msgErro.innerHTML = "Por favor, preencha todos os campos.";
    return;
  }


  // Cadastro
  document.getElementById("form_cadastro").addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmar-senha").value;

    const divAguardar = document.getElementById("div_aguardar");
    const divErros = document.getElementById("div_erros_login");

    divAguardar.style.display = "block";
    divErros.innerHTML = "";

    if (!nome || !email || !senha || !confirmarSenha) {
      divErros.innerHTML = "Por favor, preencha todos os campos.";
      divAguardar.style.display = "none";
      return;
    }

    if (senha !== confirmarSenha) {
      divErros.innerHTML = "As senhas não coincidem.";
      divAguardar.style.display = "none";
      return;
    }

    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nomeServer: nome,
        emailServer: email,
        senhaServer: senha,
      }),
    })
      .then((resposta) => {
        if (resposta.ok) {
          divErros.innerHTML = "Cadastro realizado com sucesso! Redirecionando...";
          setTimeout(() => {
            window.location.href = "login.html";
          }, 2000);
        } else {
          resposta.text().then(texto => {
            divErros.innerHTML = `Erro ao cadastrar: ${texto}`;
          });
        }
      })
      .catch((erro) => {
        console.error("Erro na requisição:", erro);
        divErros.innerHTML = "Erro inesperado ao tentar cadastrar.";
      })
      .finally(() => {
        divAguardar.style.display = "none";
      });
  });


  // Exibe carregamento se quiser (se tiver um spinner)
  aguardar(); // opcional se você criou a função

  fetch("/usuarios/autenticar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      emailServer: email,
      senhaServer: senha
    })
  })
    .then(function (resposta) {
      if (resposta.ok) {
        resposta.json().then(json => {
          sessionStorage.EMAIL_USUARIO = json.email;
          sessionStorage.NOME_USUARIO = json.nome;
          sessionStorage.ID_USUARIO = json.id;

          // Redireciona para página inicial ou dashboard
          setTimeout(() => {
            window.location = "index.html";
          }, 1000);
        });
      } else {
        resposta.text().then(texto => {
          msgErro.innerHTML = texto;
          finalizarAguardar(texto); // se estiver usando
        });
      }
    })
    .catch(function (erro) {
      console.error("Erro na requisição:", erro);
      msgErro.innerHTML = "Erro ao tentar fazer login.";
      finalizarAguardar(); // se estiver usando
    });
}

