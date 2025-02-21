// Кнопка назад
let goBack = function (){
    window.history.back();
};

// 1
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gameOne() {
    const randomInt = getRandomInt(1, 100);
    let userInput;

    while (true) {
        userInput = prompt("Введите число от 1 до 100 (или нажмите 'Отмена' для выхода):");
        
        if (userInput === null) {
            alert("Игра окончена. Спасибо за игру!");
            break;
        }

        let userInt = Number(userInput);

        if (isNaN(userInt) || userInt < 1 || userInt > 100) {
            alert("Пожалуйста, введите корректное число от 1 до 100.");
            continue;
        }

        if (userInt < randomInt) {
            alert("Загаданное число больше.");
        } else if (userInt > randomInt) {
            alert("Загаданное число меньше.");
        } else {
            alert(`Поздравляем! Вы угадали число ${randomInt}.`);
            break;
        }
    }
}

const randomSum = [];
// 2
function generateQuestion() {
    const operations = ['+', '-', '*', '/'];
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operation = operations[Math.floor(Math.random() * operations.length)];

    let question = '';
    let answer = 0;
    let num3 = 0;
    switch (operation) {
        case '+':
            question =(`${num1} + ${num2}`);
            answer = num1 + num2;
            break;
        case '-':
            question =(`${num1} - ${num2}`);
            answer = num1 - num2;
            break;
        case '*':
            question =(`${num1} * ${num2}`);
            answer = num1 * num2;
            break;
        case '/':
            num3 = num1 * num2;
            question =(`${num3} / ${num2}`); 
            answer = num1;
            break;
    }

    return { question, answer };
};
function gameTwo() {
    let userInput;
    let i = 0;
    while (true) {
        let mathQuestion = generateQuestion();
        console.log(mathQuestion); // Подсказка для знающих, чтобы правильно найти ответ xD
        userInput = prompt(`Какой получится ответ? ${mathQuestion.question}`);
        if (userInput === null) {
            alert("Игра окончена. Спасибо за игру!");
            break;
        }

        let userInt = Number(userInput);

        if (isNaN(userInt)) {
            alert("Пожалуйста, введите корректное число");
            continue;
        }

        if (userInput == mathQuestion.answer) {
            alert("Верно");
            i++;
        } else {
            alert("Неверно");
            i--;
        }
        if (i > 4) {
            alert("Ты решил все задачки, молодец")
            break;
        } else if (i == -5) {
            alert("Мне очень жаль, но у тебя не получается найти нужный ответ, потренируйся и приходи поиграть снова :)")
            break;
        }
    }
};

// 3
function generateVersa(text){
    return text.split('').reverse().join('');
}
function gameThree() {
    let userInput;
    let i = 0;
    while (true) {
        userInput = prompt(`Введи текст, чтобы я его перевернул`);
        if (userInput === null) {
            alert("Игра окончена. Спасибо за игру!");
            break;
        }
        let userString = String(userInput);
        alert(generateVersa(userString));
        break;
    }
};

// 4
const quiz = [
    {
        question: "Какого цвета небо?",
        options: [" 1. Красного ", "2. Синего ", "3. Зеленого"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: [" 1. Шесть ", "2. Семь ", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: [" 1. Четыре ", "2. Пять ", "3. Шесть"],
        correctAnswer: 2
    }
];
function gameFour(){
    let score = 0;
    let err = 0;
    for (let i = 0; i < quiz.length; i++) {
        const currentQuestion = quiz[i];
        let questionText = currentQuestion.question;
        for (let j = 0; j < currentQuestion.options.length; j++) {
            questionText += currentQuestion.options[j];
        }
        const userAnswer = prompt(questionText);
        if (userAnswer === null) {
            alert("Игра окончена. Спасибо за игру!");
            err++;
            break;
        }
        if (parseInt(userAnswer) === currentQuestion.correctAnswer) {
            score++;
        }
    }
    if (err != 1) {
        
        alert(`Вы ответили правильно на ${score} из ${quiz.length} вопросов.`);
    }
}

// 5
function getRandomChoice() {
    const choices = ["камень", "ножницы", "бумага"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
const win = "Победа";
const lose = "Поражение";
const draw = "Ничья"
function getWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return draw;
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        return win;
    } else {
        return lose;
    }
}
function gameFive() {
    while (true) {
        const userChoice = prompt("камень, ножницы или бумага");
         if (userChoice === null) {
            alert("Игра окончена. Спасибо за игру!");
            break;
        }
        userChoice.toLowerCase();
        if (!["камень", "ножницы", "бумага"].includes(userChoice)) {
            alert("Похоже вы неверно ввели, Пожалуйста, напишите камень, ножницы или бумага.");
            return;
        }

        const computerChoice = getRandomChoice();
        if (getWinner(userChoice, computerChoice) == win) {
            alert(`Ура! ${win}`);
        } else if (getWinner(userChoice, computerChoice) == lose) {
            alert(lose);
        } else {
            alert(draw);
        }
        
    }
    
}

function gameSix() {
    colorChange = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    const bgColor = document.querySelector('.mini-games')
    if (bgColor) bgColor.style.backgroundColor = colorChange;
}