const quiz = new Quiz(sorular);
const ui = new UI();

ui.startBtn.addEventListener("click",function() {
    ui.quizBox.classList.add("active");
    startTimer(10);
    startTimerLine();
    ui.soruGoster(quiz.soruGetir());
    ui.soruSayisiniGoster(quiz.soruIndex+1,quiz.sorular.length);
});

ui.nextBtn.addEventListener("click",function(){

    ui.nextBtn.classList.remove("show");

    if (quiz.sorular.length != quiz.soruIndex+1) {
        quiz.soruIndex +=1;
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiniGoster(quiz.soruIndex+1,quiz.sorular.length);
        ui.timeText.textContent= "Kalan Süre "
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(10);
        startTimerLine();
    }else{
        clearInterval(counter);
        clearInterval(counterLine);
        ui.scoreBox.classList.add("active");
        ui.quizBox.classList.remove("active");
        ui.skoruGoster(quiz.sorular.length,quiz.dogruCevapSayisi)
    }
});

function optionSelected(option) {
    clearInterval(counter);
    clearInterval(counterLine);
    let cevap = option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();
    ui.nextBtn.classList.add("show");

    if (soru.cevabiKontrolEt(cevap)) {
        quiz.dogruCevapSayisi+=1;
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend",ui.correctIcon);
    }else{
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend",ui.incorrectIcon);
    }

    for(let i=0; i<ui.optionList.children.length;i++){
        ui.optionList.children[i].classList.add("disabled");
    };
}

ui.quitButton.addEventListener("click",function () {
    window.location.reload();
});

ui.replayButton.addEventListener("click",function () {
    quiz.soruIndex=0;
    quiz.dogruCevapSayisi=0;
    ui.startBtn.click();
    ui.scoreBox.classList.remove("active");
});

let counter;

function startTimer(time) {
    counter=setInterval(timer,1000);

    function timer(){
        ui.timeSecond.textContent=time;
        time--;

        if (time<0) {
            clearInterval(counter);

            ui.timeText.textContent= "Süre Bitti "

            let cevap = quiz.soruGetir().dogruCevap;

            for(let option of ui.optionList.children){
                if (option.querySelector("span b").textContent === cevap) {
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend",ui.correctIcon);
                }

                option.classList.add("disabled");
            }

            ui.nextBtn.classList.add("show");
        }
    };
}

let counterLine;

function startTimerLine() {
    let lineWidth = 0;

    counterLine = setInterval(timer,100);

    function timer() {
        lineWidth+=5.5;
        ui.timeLine.style.width = lineWidth + "px";

        if (lineWidth> 599) {
            clearInterval(counterLine);
        }
    }
}