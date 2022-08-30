// Рабочая версия без использования класса
// const answerBall = document.querySelector('.answer');
// const answerTxt = document.querySelector('.answer__text');
// const answers = ['Yeap', 'Nope', 'Surely', "I'll tell you later"];

// const chooseAnswer = () => answers[Math.round(Math.random() * (answers.length - 1))];
// const setAnswer = () => answerTxt.textContent = chooseAnswer();

// answerBall.addEventListener('click', setAnswer);

class AnsweringBall {
    
    static getRefs(rootSelector) {
        const base = document.querySelector(rootSelector);
        return {
            ball: base.querySelector('.answer'),
            ballTxt: base.querySelector('.answer__txt'),
        }
    }

    static getAnswer(answers) {
        return answers[Math.round(Math.random() * (answers.length - 1))];
    }

    static makeLive(obj) {
        obj.refs.ball.addEventListener('click', obj.setAnswer);
    }

    constructor({ root = '.container', variants } = {}) {
        this.refs = AnsweringBall.getRefs(root);
        this.answers = variants;
        AnsweringBall.makeLive(this);
    }

    setAnswer = () => this.refs.ballTxt.textContent = AnsweringBall.getAnswer(this.answers);

}

const thisBall = new AnsweringBall({ root: '.container', variants: ['Yeap', 'Nope', "May be"] });
