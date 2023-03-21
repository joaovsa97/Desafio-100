const atividade01 = () => {
    const msg = document.getElementById("msg").value

    atv1exec(msg);
}

const atv1exec = (param) => {
    const res = document.getElementById("res")

    return res.innerText = param
}

const atividade02= () => {
    const num1 = document.getElementById("num1").value
    const num2 = document.getElementById("num2").value

    atv2exec(num1,num2);
}

const atv2exec = (n1, n2) => {
    const res = document.getElementById("res")

    soma = Number(n1) + Number(n2)

    return res.innerText = soma
}

const atividade03 = () => {
    const nome = document.getElementById("name")
    let msg = document.getElementById("msg")

    if(nome.value != ''){
        nome.setAttribute("disabled", '')
    }

    obj = {
        name: nome.value,
        message: msg.value
    }

    atv3exec(obj)
}

const atv3exec = (obj) => {
    const res = document.getElementById("res")

    return res.innerText = "User: " + obj.name + "\nMessage: " + obj.message
}