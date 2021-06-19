//Requisitos
// =>IMC = peso / altura^2;
// =>Retorno um único número;
// =>Erro se não for número;
// =>Erro se não houver números; Ou validação do formulário caso não houver parâmetros;

//Classificação
//Muito abaixo do peso 16 a 16.9;
//Abaixo do peso 17 a 18.4;
//Normal 18.5 a 24.9;
//Acima do peso 25 a 29.9;
//Obesidade Grau 1 30 a 34.9;
//Obesidade Grau 2 35 a 40;
//Obesidade Grau 3 > 40
 
//Metodologia
// =>Função para validar os parâmetros; 
// =>Função para calcular o IMC;
// =>Função para classificar o resultado;

//isNaN => identifica se o número é not a number, ou seja não pode ser convertido para número
(function(win, doc) {
    const $weight = doc.querySelector(".weightValue");//Input peso
    const $heigth = doc.querySelector(".heigthValue");//Input altura
    const $result = doc.querySelector(".result"); //div resultado
    const $btnCalc = doc.querySelector(".btnCalc"); //botão de calculo
    const $btnReset = doc.querySelector(".btnReset"); //botão de limpar dados;


    $btnCalc.addEventListener("click", calcIMC);
    $btnReset.addEventListener("click", reset)

    
    function dataValidation(w, h){
        if(w === "" || h === ""){
            throw Error(win.alert("Campo vazio"));
        }
        if(w < 0 || h < 0){
            throw Error("Somente números positivos");
        }
        if(isNaN(w) || isNaN(h)){
            throw Error("Somente números");
        }
    }
    
    function calcIMC(){
        let weigth = $weight.value;
        let heigth = $heigth.value;

        dataValidation(weigth, heigth);
    
        weigth = parseFloat(weigth);
        heigth = parseFloat(heigth);

        let resultCalc = (weigth / (heigth * heigth));
        $result.textContent = (`Indice - ${resultCalc.toFixed(3)} kg/m^2`);

        return rankIMC(resultCalc);
    }

    function rankIMC(res){
        if(res <= 16.9){
            $result.textContent += (" - Você está muito abaixo do peso");
        } else if(res <= 18.4){
            $result.textContent += (" - Você está abaixo do peso");
        } else if(res <= 24.9){
            $result.textContent += (" - Você está com peso ideal");
        } else if(res <= 29.9){
            $result.textContent += (" - Você está acima do peso");
        } else if(res <= 34.9){
            $result.textContent += (" - Você está com obesidade de grau 1");
        } else if(res <= 40){
            $result.textContent += (" - Você está com obesidade de grau 2");
        } else{
            $result.textContent += (" - Você está com obesidade de grau 3");
        }
    }

    function reset(){
        $weight.value = "";
        $heigth.value = "";
        $result.textContent = "";
    }

})(window, document);