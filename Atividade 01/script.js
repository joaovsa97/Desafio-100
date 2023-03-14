// Declaração variaveis globais

var objProd = []

const atividade01 = () => {
    let msg = document.getElementById("welcome");
    let name = document.getElementById("name");

    // return msg.textContent = "Welcome "+ name.value;
    msg.innerHTML = "Welcome " + name.value;
}

const atividade02 = () => {
    const intNum = document.getElementById("intNum");
    const decNum = document.getElementById("decNum");
    const res = document.getElementById("res");

    return res.textContent = "Result: " + (parseInt(intNum.value) + parseFloat(decNum.value));
}

const atividade03 = () => {
    let birthYear = document.getElementById("birthYear").value;
    const currentYear = document.getElementById("currentYear").value;
    const res = document.getElementById("res");

    birthYear = new Date(birthYear).getFullYear();

    currentYear <= birthYear ? res.innerText = "Invalid Date" : res.innerText = "Your age: " + parseInt(currentYear - birthYear);
}

// const atividade04 = () => {

// }

const atividade10 = () => {
    var tableBody = document.getElementById("table")

    objProd.push({ nome: document.getElementById('nomeProd').value, 
        preco: document.getElementById('precProd').value })

    tableBody.innerHTML = ""

    for(var i = 0; i < objProd.length; i++) {
        var row = tableBody.insertRow(-1)
        var nome = row.insertCell(-1)

        nome.appendChild(document.createTextNode(objProd[i].nome))

        var preco = row.insertCell(-1)
        preco.appendChild(document.createTextNode(objProd[i].preco))
    }

    document.getElementById('nomeProd').value = ''
    document.getElementById('precProd').value = ''
}