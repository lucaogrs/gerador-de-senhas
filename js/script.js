document.addEventListener('DOMContentLoaded', function () {
    // Função para gerar senhas
    function generatePassword(length, useLowerCase, useUpperCase, useNumbers, useSpecialChars) {
        // Limitar o comprimento da senha a 32 caracteres
        if (length > 32) {
            document.getElementById('passw-output').value = 'Erro: O comprimento máximo da senha é 32 caracteres.';
            return;
        }

        const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numberChars = '0123456789';
        const specialChars = '$%&!@';
        let allChars = '';

        if (useLowerCase) allChars += lowerCaseChars;
        if (useUpperCase) allChars += upperCaseChars;
        if (useNumbers) allChars += numberChars;
        if (useSpecialChars) allChars += specialChars;

        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            password += allChars.charAt(randomIndex);
        }

        return password;
    }

    // Evento de clique no botão "Gerar senha"
    document.getElementById('generate-passw').addEventListener('click', function () {
        const length = document.getElementById('passw-lenght').value;
        const useLowerCase = document.getElementById('lower-case').checked;
        const useUpperCase = document.getElementById('upper-case').checked;
        const useNumbers = document.getElementById('numbers').checked;
        const useSpecialChars = document.getElementById('special-chars').checked;

        const generatedPassword = generatePassword(length, useLowerCase, useUpperCase, useNumbers, useSpecialChars);

        // Exibir a senha gerada ou a mensagem de erro
        document.getElementById('passw-output').value = generatedPassword || 'ERRO:escolha no maximo 32 caracteres para compor sua senha';
    });

    // Evento de clique no botão "Nova senha"
    document.getElementById('new-passw').addEventListener('click', function () {
        // Gerar uma nova senha
        const length = document.getElementById('passw-lenght').value;
        const useLowerCase = document.getElementById('lower-case').checked;
        const useUpperCase = document.getElementById('upper-case').checked;
        const useNumbers = document.getElementById('numbers').checked;
        const useSpecialChars = document.getElementById('special-chars').checked;

        const generatedPassword = generatePassword(length, useLowerCase, useUpperCase, useNumbers, useSpecialChars);

        // Exibir a nova senha gerada ou a mensagem de erro
        document.getElementById('passw-output').value = generatedPassword || '';
    });

    // Evento de clique no botão "Copiar senha"
    document.getElementById('copy-passw').addEventListener('click', function () {
        const passwordField = document.getElementById('passw-output');
        passwordField.select();
        document.execCommand('copy');
    });
});