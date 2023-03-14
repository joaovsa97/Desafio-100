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

const atividade04 = () => {
    const productName = document.getElementById("name");
    const productPrice = document.getElementById("price");
    const res = document.getElementById("resName");

    let price = parseFloat(productPrice.value).toFixed(2);
    
    return res.innerText = "Product Name: " + productName.value + "\n\nPrice: " + " U$ " + price;
}

const atividade05 = () => {
    const res = document.getElementById("res");

    const numbers = [1,2,3,4,5,6,7,8,9,0];
    let resp = 0;

    let holder = numbers.forEach(e => {
        resp = e + resp;
    });

    return res.innerText = "Numbers on array: " + numbers + "\n\n Result of addition: " + resp;
}

const atividade06 = () => {
    const inputName = document.getElementById("name");
    const inputAge = document.getElementById("age");
    const inputAddress = document.getElementById("address");
    const res = document.getElementById("res");

    user = {
        name : inputName.value,
        age : parseInt(inputAge.value),
        address : inputAddress.value
    }

    return res.innerText = "Name: " + user.name + "\nAge: " + user.age + "\nAddress: " + user.address;
}

const atividade07 = () => {
    const localDate = document.getElementById("localdate");
    const res = document.getElementById("res");

    let objectDate = new Date(localDate.value);

    valueDay = objectDate.getDate() + 1;
    valueMonth = objectDate.getMonth() + 1;

    day = valueDay <= 9 ? "0" + valueDay : valueDay;
    month = valueMonth < 10 ? "0" + valueMonth : valueMonth;
    year = objectDate.getFullYear();

    return res.innerText = year + "/" + month + "/" + day;
}

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