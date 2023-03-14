const atividade01 = () => {
    const intNum = document.getElementById("intNum");
    const decNum = document.getElementById("decNum");
    const res = document.getElementById("res");

    return res.textContent = "Result: " + (parseInt(intNum.value) * parseFloat(decNum.value));
}

const atividade02 = () => {
    const productName = document.getElementById("productName").value;
    const productQty = parseInt(document.getElementById("productQty").value);
    const res = document.getElementById("res");

    return res.innerText = productQty < 1 ? "Product out of stock" : ("Quantity of '" + productName + "' in stock: " + productQty);
}

const atividade03 = () => {
    const word = document.getElementById("word").value;
    const num = document.getElementById("num").value;
    const res = document.getElementById("res");

    return res.innerText = (word.toLowerCase() === 'hello' ? "You typed HELLO" : "You typed: " + word)
    +
    (num == 10 ? "\nYou typed the value 10" : "\nYou typed: " + num);
}

const atividade04 = () => {
    const word = document.getElementById("word").value;
    const num = document.getElementById("num").value;
    const res = document.getElementById("res");

    return res.innerText = (word.toLowerCase().includes("a") ? "The text typed contains letter 'a'" : "The text typed don't contain any letter 'a'")
    +
    ((num%2) == 0 ? "\nYou typed a even number" : "\nYou typed a odd number");
}

const atividade05 = () => {
    const res = document.getElementById("res");

    const numbers = [1,2,3,4,5,6,7,8,9];

    let holder = []

    numbers.forEach(e => {
        (e%2) == 0 ? holder.push(e) : null
    })

    return res.innerText = holder;
}

const atividade06 = () => {
    const productName = document.getElementById("name").value;
    const productPrice = parseFloat(document.getElementById("price").value).toFixed(2);
    const qty = parseInt(document.getElementById("quantity").value);
    const res = document.getElementById("res");

    let productObj = {
        name: productName,
        price: productPrice,
        qnt: qty 
    }

    total = parseFloat(productObj.qnt * productObj.price).toFixed(2);

    return res.innerText = "Product: " + productObj.name + "\nQuantity: " + productObj.qnt + "\nUnity Price: $" + productObj.price + "\nTotal Price: $" + total;
}

const atividade07 = () => {
    const word = document.getElementById("word").value;
    const num = document.getElementById("num").value;
    const base = document.getElementById("base").value;
    const res = document.getElementById("res");

    out = word + " " + num;

    return res.innerText = "You typed: " + out + (out == base ? "\nYour input was the same as the base" : "\nYour input was different to the base")
}

const atividade08 = () => {
    const intNum = document.getElementById("intNum");
    const decNum = document.getElementById("decNum");
    const res = document.getElementById("res");

    return res.textContent = "Result: " + parseFloat(parseInt(intNum.value) / parseFloat(decNum.value)).toFixed(2);
}

const atividade09 = () => {
    const intNum = document.getElementById("intNum").value;
    const res = document.getElementById("res");

    numbers = [1,2,3,4,5,6,7,8,9,10]
    big = []
    equal = []
    small = []

    numbers.forEach(e => {
        if(intNum > e){
            big.push(e)
        }else if(intNum == e ){
            equal.push(e)
        } else {
            small.push(e)
        }
    })

    return res.innerText = "Bigger: " + big + "\nEqual: " + equal + "\nSmaller: " + small
}

const atividade10 = () => {
    const inputName = document.getElementById("name");
    const inputAge = document.getElementById("age");
    const inputHeight = document.getElementById("height");
    const res = document.getElementById("res");

    user = {
        name : inputName.value,
        age : parseInt(inputAge.value),
        height : parseFloat(inputHeight.value).toFixed(2)
    }

    return res.innerText = "Name: " + user.name + (user.age < 18 ? "\nYou are not at legal age" :"\nYou are at legal age") +  (user.height < 1.70 ? "\nYou are smaller than 1.70cm" : "\nYou are higher than 1.70cm")
}