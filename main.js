function prox1() {
    document.getElementById("start").style.display = "none";
    document.getElementById("quiz1").style.visibility = "visible";
}

function prox2() {
    document.getElementById("quiz1").style.display = "none";
    document.getElementById("quiz2").style.visibility = "visible";
}

function prox3() {
    document.getElementById("quiz2").style.display = "none";
    document.getElementById("quiz3").style.visibility = "visible";
}

function prox4() {
    document.getElementById("quiz3").style.display = "none";
    document.getElementById("quiz4").style.visibility = "visible";
}

function prox5() {
    document.getElementById("quiz4").style.display = "none";
    document.getElementById("quiz5").style.visibility = "visible";
}

function prox6() {
    document.getElementById("quiz5").style.display = "none";
    document.getElementById("quiz6").style.visibility = "visible";
}

function prox7() {
    document.getElementById("quiz6").style.display = "none";
    document.getElementById("quiz7").style.visibility = "visible";
}

function prox8() {
    document.getElementById("quiz7").style.display = "none";
    document.getElementById("quiz8").style.visibility = "visible";
}

function prox9() {
    document.getElementById("quiz8").style.display = "none";
    document.getElementById("quiz9").style.visibility = "visible";
}

function prox10() {
    document.getElementById("quiz9").style.display = "none";
    document.getElementById("quiz10").style.visibility = "visible";
}


function terminei() {
    document.getElementById("quiz10").style.display = "none";
    document.getElementById("submeter").style.display = "none";
    let question1 = [...document.getElementsByName('question1')].filter(el => el.checked)[0]
    let question2 = [...document.getElementsByName('question2')].filter(el => el.checked)[0]
    let question3 = [...document.getElementsByName('question3')].filter(el => el.checked)[0]
    let question4 = [...document.getElementsByName('question4')].filter(el => el.checked)[0]
    let question5 = [...document.getElementsByName('question5')].filter(el => el.checked)[0]
    let question6 = [...document.getElementsByName('question6')].filter(el => el.checked)[0]
    let question7 = [...document.getElementsByName('question7')].filter(el => el.checked)[0]
    let question8 = [...document.getElementsByName('question8')].filter(el => el.checked)[0]
    let question9 = [...document.getElementsByName('question9')].filter(el => el.checked)[0]
    let question10 = [...document.getElementsByName('question10')].filter(el => el.checked)[0]

    let = correct = 0;
    let = wrong = 0;


    if (question1?.value === "JavaScript") {
        console.log('Correct Answer')
        correct++;
    } else {
        console.log('Wrong Answer')
        wrong++;
    }

    if (question2?.value === "6") {
        console.log('Correct Answer')
        correct++;
    } else {
        console.log('Wrong Answer')
        wrong++;
    }

    if (question3?.value === "As propriedades da última classe definida têm prioridade sobre as outras") {
        console.log('Correct Answer')
        correct++;
    } else {
        console.log('Wrong Answer')
        wrong++;
    }

    if (question4?.value === "Design que o utilizador não nota") {
        console.log('Correct Answer')
        correct++;
    } else {
        console.log('Wrong Answer')
        wrong++;
    }

    if (question5?.value === "Prototype") {
        console.log('Correct Answer')
        correct++;
    } else {
        console.log('Wrong Answer')
        wrong++;
    }
    if (question6?.value === "Erro") {
        console.log('Correct Answer')
        correct++;
    } else {
        console.log('Wrong Answer')
        wrong++;
    }
    if (question7?.value === "Os valores dos hashes têm que ser únicos, mas as chaves podem ser repetidas") {
        console.log('Correct Answer')
        correct++;
    } else {
        console.log('Wrong Answer')
        wrong++;
    }
    if (question8?.value === "Todas as anteriores") {
        console.log('Correct Answer')
        correct++;
    } else {
        console.log('Wrong Answer')
        wrong++;
    }
    if (question9?.value === "Trabalha com front end e back end") {
        console.log('Correct Answer')
        correct++;
    } else {
        console.log('Wrong Answer')
        wrong++;
    }
    if (question10?.value === "fd") {
        console.log('Correct Answer')
        correct++;
    } else {
        console.log('Wrong Answer')
        wrong++;
    }

    document.getElementById("mostrar").style.visibility = "visible";
    document.getElementById("certa").innerHTML += `<p>${correct} Acertos.</p>`;
    document.getElementById("errada").innerHTML += `<p>${wrong} Erros.</p>`;
}