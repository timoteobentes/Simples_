let btn = document.getElementById("btn")
let result = document.getElementById("result")


btn.addEventListener("click", function() {
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value

    if (peso == "" || altura == "") {
        btn.innerHTML = "Insira os dados!"
    } else {

        
        let imc = (peso / ((altura * altura) / 10000)).toFixed(2)
        
        btn.innerHTML = imc
    }

})
