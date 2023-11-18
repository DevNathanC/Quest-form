const form = document.getElementById("formulario")
const nome = document.getElementById("nome")
const email = document.getElementById("email")
const telefone = document.getElementById("telefone")
const mensagem = document.getElementById("mensagem")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const nomeValue = nome.value;
    const emailValue = email.value;
    const telefoneValue = telefone.value;
    const mensagemValue = mensagem.value;

    if (nomeValue == '') {
        setErrorFor(nome, 'Campo obrigatório')
    } else {
        setSuccessFor(nome);
    }

    if (emailValue == "") {
        setErrorFor(email, 'Campo obrigatório')
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, 'Email invalido')

    } else {
        setSuccessFor(email)
    }

    if (telefoneValue == '') {
        setErrorFor(telefone, 'Campo obrigatório')
    } else {
        setSuccessFor(telefone)
    }

    if (mensagemValue == '') {
        setErrorFor(mensagem, 'Campo obrigatório')
    } else {
        setSuccessFor(mensagem)
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;
    formControl.className = "form-control campo-negado"
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control campo-valido';
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}
