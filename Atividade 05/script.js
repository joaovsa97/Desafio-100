list = []

const atividade01 = () => {
    const res = document.getElementById("res")
    const num1 = document.getElementById("num1").value
    const num2 = document.getElementById("num2").value

    somar = (n1, n2) => {
        return n1 + n2
    }

    return res.innerText = num1 + " + " + num2 + " = " + somar(Number(num1),Number(num2))
}

const atividade02 = () => {
    const res = document.getElementById("res")
    const num1 = document.getElementById("num1").value

    verifyNum = (n1) => {
        result = (n1 % 2) == 0 ? "Even" : "Odd"
        return result
    }

    res.innerText = "The number " + num1 + " is a " + verifyNum(num1) + " number."
}

const atividade03 = () => {
    const num = document.getElementById("num").value

    list.push(num)

    document.getElementById("num").value = ''
}

const atv3exec = () => {
    const res = document.getElementById("res")

    soma = 0

    list.forEach(e => {
        soma = soma + Number(e)
    });

    res.innerText = "The avarege of inputed numbers is: " + (Number(soma)/Number(list.length)) + "\nInputed number: " + list

    list = []
}

const atividade04 = () => {
    const num = document.getElementById("num").value

    list.push(num)

    document.getElementById("num").value = ''
}

const atv4exec = () => {
    const res = document.getElementById("res")

    higher = 0

    list.forEach(e => {
        Number(e) > higher ? higher = e : higher = higher
        console.log(e, higher)
    });

    res.innerText = higher

    list = []
}

const atividade05 = () => {
    const word = document.getElementById("word").value

    splited = word.split("")

    document.getElementById("word").value = ''

    return res.innerText = "The sorted letters in alphabetical order: \n" + splited.sort()
}

const atividade06 = () => {
    const word = document.getElementById("word").value

    list.push(word)

    document.getElementById("word").value = ''
}

const atv6exec = () => {
    const res = document.getElementById("res")

    sortedList = []

    for(i = 0; i < list.length; i++){
        console.log(sortedList, list[i])
        sortedList.push(list[i])
    }

    list = []

    return res.innerText = "The sorted list in alphabetical order: \n" + sortedList.sort()
}

const atividade07 = () => {
    const num = document.getElementById("num").value

    list.push(num)

    document.getElementById("num").value = ''
}

const atv7exec = () => {
    const res = document.getElementById("res")

    evenNums = []

    list.forEach(e => {
        (Number(e) % 2) == 0 ? evenNums.push(e) : null
    })

    list = []

    return res.innerText = "The even numbers are: \n" + evenNums
}

const atividade08 = () => {
    const num = Number(document.getElementById("num").value)
    const res = document.getElementById("res")

    List=[]

    for(i=0; i <= num; i++){
        if(num%i == 0) List.push(i)
    }

    document.getElementById("num").value = ''

    return res.innerText = "The divisor of " + num + " numbers are: \n" + List
}

const atividade09 = () => {
    const word = document.getElementById("word").value
    const res = document.getElementById("res")

    reg = /[\W_]/g

    console.log(word)
    norm = word.toLowerCase().replace(reg, '')

    reverseWord = norm.split('').reverse().join('');

    document.getElementById("word").value = ''

    isPalindrome = norm === reverseWord ? true : false

    return res.innerText = isPalindrome ? isPalindrome + "\nIt's a palindrome word" : isPalindrome + "\nIt's not a palindrome word"
}

const atividade10 = () => {
    const num1 = Number(document.getElementById("num1").value)
    const op = document.getElementById("op").value
    const num2 = Number(document.getElementById("num2").value)
    const res = document.getElementById("res")

    switch(op) {
        case '+' : return res.innerText = "Result: " + (num1 + num2);

        case '-' : return res.innerText = "Result: " + (num1 - num2);

        case '*' : return res.innerText = "Result: " + (num1 * num2);

        case '/' : return res.innerText = "Result: " + (num1 / num2);

        case '%' : return res.innerText = "Result: " + (num1 % num2);
    }
}