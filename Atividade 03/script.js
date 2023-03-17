const atividade01 = () => {
    const number = document.getElementById("intNum").value;
    const res = document.getElementById("res");

    return res.innerText = number > 0 ? "This is a positive number" : "This is a negative number"
}

const atividade02 = () => {
    const number = document.getElementById("intNum").value;
    const res = document.getElementById("res");

    return res.innerText = (number%2) == 0 ? "This is a even number" : "This is a odd number"
}

const atividade03 = () => {
    const productName = (document.getElementById("word").value).toLowerCase();
    const res = document.getElementById("res");

    return res.innerText = productName.includes("promoção") ? "Product is on sale!" : "Product is not on sale!"
}

const atividade04 = () => {
    const number = document.getElementById("intNum").value;
    const res = document.getElementById("res");

    if( typeof number != 'string' ){
        if(number > 10){
            return res.innerText = "The number is higher than 10"
        } else
        if (number == 10){
            return res.innerText = "The number is equal than 10"
        } else {
            return res.innerText = "The number is lower than 10"
        }
    } else {
        return res.innerText = "Invalid input"
    }
}

const atividade05 = () => {
    const number = document.getElementById("intNum").value;
    const res = document.getElementById("res");

    if((number%3)===0 && (number%5)===0){
        return res.innerText = "The number is multiple of 3 and 5"
    } else if ((number%5)===0){
        return res.innerText = "The number is multiple of 5"
    } else if ((number%3)===0){
        return res.innerText = "The number is multiple of 3"
    } else {
        return res.innerText = "The number is not multiple of 3 or 5"
    }
}

const atividade06 = () => {
    const date = document.getElementById("date");
    const res = document.getElementById("res");

    year = new Date(date.value).getFullYear()

    return res.innerText = (year%4) == 0 ? "The date selected is from a leap year" : "The date selected is not from a leap year"
}

const atividade07 = () => {
    const date = document.getElementById("date");
    const res = document.getElementById("res");

    switch (date.value) {
        case '1': return res.innerText = "January";
        case '2': return res.innerText = "February";
        case '3': return res.innerText = "March";
        case '4': return res.innerText = "April";
        case '5': return res.innerText = "May";
        case '6': return res.innerText = "June";
        case '7': return res.innerText = "July";
        case '8': return res.innerText = "August";
        case '9': return res.innerText = "September";
        case '10': return res.innerText = "October";
        case '11': return res.innerText = "November";
        case '12': return res.innerText = "December";
        default : return res.innerText = "Invalid number, please input a number between 1 and 12";
    }
}

const atividade08 = () => {
    const date = document.getElementById("date");
    const res = document.getElementById("res");

    switch (date.value) {
        case '1': return res.innerText = "Monday is a business day";
        case '2': return res.innerText = "Tuesday is a business day";
        case '3': return res.innerText = "Wednesday is a business day";
        case '4': return res.innerText = "Thursday is a business day";
        case '5': return res.innerText = "Friday is a business day";
        case '6': return res.innerText = "Saturday is weekend";
        case '7': return res.innerText = "Sunday is weekend";
        default : return res.innerText = "Invalid number, please input a number between 1 and 7";
    }
}

const atividade09 = () => {
    const number = document.getElementById("intNum").value;
    const res = document.getElementById("res");

    if((number%2)===0 && (number%3)===0 && (number%5)===0 ){
        return res.innerText = "The number is multiple of 2, 3 and 5"
    } else {
        return res.innerText = "The number is not multiple of 2, 3 and 5"
    }
}

const atividade10 = () => {
    const inputName = document.getElementById("name");
    const inputAge = document.getElementById("age");
    const inputCity = document.getElementById("city");
    const res = document.getElementById("res");

    const user = {
        name : inputName.value,
        age : parseInt(inputAge.value),
        city : inputCity.value.toLowerCase,
        isValid: true
    }

    switch(user.isValid){
        case user.age > 18 : case user.city.includes("são paulo") : 
            return res.innerText = "This person is at legal age and live in São Paulo";
        case user.age < 18: case user.city.includes("São Paulo") : 
            return res.innerText = "This person is not at legal age and live in São Paulo";
        case user.age > 18 : 
            return res.innerText = "This person is at legal age, but don't live in São Paulo";
        case user.age < 18 : 
            return res.innerText = "This person is at not legal age and don't live in São Paulo";
        default : "Please verify your inputs";
    }
}