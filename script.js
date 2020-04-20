const Calculator = {
    count: 0,
    negcount: 0,

    startGame: function() {
        Calculator.num1 = Calculator.getRandom(),
        Calculator.num2 = Calculator.getRandom();
        document.getElementById("number1").innerHTML = ``;
        document.getElementById("true__answer").innerHTML = ``;
        document.getElementById("congratulation").innerHTML = ``;
        document.getElementById("number1").innerHTML += `${Calculator.num1} * ${Calculator.num2} ?`;
    },

    getRandom: function() {
        let rand = 1 - 0.5 + Math.random() * (10 - 1 + 1);
        return Math.round(rand);
    },
    getAnswer: function() {
        let ans = +document.getElementById("answer").value,
        answer = Calculator.num1 * Calculator.num2;
        document.getElementById("answer").value = ``;
        document.getElementById("number1").innerHTML = ``;

        if (ans == answer) {
            document.getElementById("true__answer").innerHTML = ``;
            document.getElementById("true__answer").style.color = "green";
            document.getElementById("true__answer").innerHTML += `Вірно`;
            Calculator.count++;
            if (Calculator.count == 30) {
                document.getElementById("congratulation").innerHTML = `Молодчинка, можеш йти до дядька`;
            }
        } else {
            Calculator.negcount++;
            console.log(Calculator.negcount);
            document.getElementById("true__answer").innerHTML = ``;
            document.getElementById("true__answer").style.color = "red";
            document.getElementById("true__answer").innerHTML += `Невірно`;
            if (Calculator.negcount == 5) {
                Calculator.count = 0;
                Calculator.negcount = 0;
                document.getElementById("congratulation").innerHTML = `Вчи краще, всі спроби обнулилися!((`;
            }
        }
    }
    
};



