const atividade01 = () => {
    let res = document.getElementById("res");

    obj = []

    for(i = 1; i <= 10; i++){
        obj.push(i)
        res.innerText = obj;
    }
}

const atividade02 = () => {
    const res = document.getElementById("res");

    obj = []

    for(i = 0; i <= 20; i++){
        (i%2) == 0 ? obj.push(i) : null
    }
    return res.innerText = obj;
}

const atividade03 = () => {
    const res = document.getElementById("res");

    obj = []
    i=1

    while(i <= 5){
        obj.push(i)
        i++
    }

    return res.innerText = obj;
}

const atividade04 = () => {
    const res = document.getElementById("res")

    obj = []
    i=1

    while(i < 10){
        (i%2) == 0 ? null : obj.push(i)
        i++
    }
    return res.innerText = obj
}

const atividade05 = () => {
    const res = document.getElementById("res")

    obj = []
    i=1

    do {
        obj.push(i)
        i++
    } while(i <= 5)

    res.innerText = obj
}

const atividade06 = () => {
    const res = document.getElementById("res")

    obj = []
    i=0

    do {
        obj.push(i)
        i++
    } while(i <= 10)

    return res.innerText = obj
}

const atividade07 = () => {
    const res = document.getElementById("res")

    obj = []
    i=0

    for(i=1; i <=10; i++){
        obj.push(i * 7);
    }

    return res.innerText = obj
}

const atividade08 = () => {
    const res = document.getElementById("res")

    obj = [1]
    x = 0
    y = 1

    for(i=1; i < 10; i++){
        nextResult = x + y
        x = y
        y = nextResult
        obj.push(nextResult)
    }

    return res.innerText = obj
}

const atividade09 = () => {
    const res = document.getElementById("res")
    const num = document.getElementById("num")
    const numLabel = document.getElementById("numLabel")

    while ( num.value < 0 ) {
        return res.innerText = "Type a positive number"
    }

    if( num.value > 0) {
        num.style.display = 'none'
        numLabel.style.display = 'none'
        return res.innerText = "You typed a positive number"
    }
}

const atividade10 = () => {
    const res = document.getElementById("res")
    const pw = document.getElementById("pw").value

    isValid = false

    pw.split('').forEach(e => {
        if(isNaN(e*1)){
            if(e == e.toUpperCase()){
                isValid = true
            }
        }
    });



    if ((!isValid) && (pw.length < 8)){
        return res.innerText = "The password must contain at least a Uppercase letter and 8 digits"
    } else if(isValid == false ){    
        return res.innerText =  "The password must contain at least one Uppercase letter"
    } else if (pw.length < 8) {
        return res.innerText = "The password must contain at least 8 characters"
    } else {
        return res.innerText = "You typed a valid password!"
    }
}