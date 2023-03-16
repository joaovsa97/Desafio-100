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