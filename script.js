    document.getElementById("loginForm").addEventListener("submit", function(event) {
        var username = document.getElementById("username").value.trim();
        var password = document.getElementById("password").value.trim();
        var usernameError = document.getElementById("usernameError");
        var passwordError = document.getElementById("passwordError");
        var isValid = true;

        // Verificar se o campo de nome de usuário está vazio
        if (username === "") {
            usernameError.textContent = "Nome de usuário é obrigatório";
            event.preventDefault();
            isValid = false;
        } else {
            usernameError.textContent = "";
        }

        // Verificar se o campo de senha está vazio
        if (password === "") {
            passwordError.textContent = "Senha é obrigatória";
            event.preventDefault();
            isValid = false;
        } else {
            passwordError.textContent = "";
        }

        // Se algum campo estiver vazio, impedir o envio do formulário
        if (!isValid) {
            event.preventDefault();
        }
    });