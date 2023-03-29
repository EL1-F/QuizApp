function UI(){
    this.startBtn = document.querySelector(".start_btn"),
    this.optionList =document.querySelector(".option_list"),
    this.quizBox = document.querySelector(".quiz_box"),
    this.nextBtn = document.querySelector(".next_btn"),
    this.scoreBox=document.querySelector(".score_box"),
    this.quitButton= document.querySelector(".btn_quit"),
    this.replayButton= document.querySelector(".btn_replay"),
    this.correctIcon= `<div class="icon"><i class="fas fa-check"></i></div>`,
    this.incorrectIcon= `<div class="icon"><i class="fas fa-times"></i></div>`
    this.timeText = document.querySelector(".time_text"),
    this.timeSecond = document.querySelector(".time_second"),
    this.timeLine =document.querySelector(".time_line")
}

UI.prototype.soruGoster= function(soru) {
    let soru_metni = `<span>${soru.soruMetni}</span>`;
    let secenekeler = ``;

    for(let secenek in soru.cevapSecenekleri){
        secenekeler+=
        `
            <div class="option">
                <span><b>${secenek}</b>) ${soru.cevapSecenekleri[secenek]}</span>
            </div>
        `;
    }

    document.querySelector(".question_text").innerHTML=soru_metni;
    this.optionList.innerHTML = secenekeler;


    const options= this.optionList.querySelectorAll(".option");
    for (let opt of options) {
        opt.setAttribute("onclick", "optionSelected(this)")
    };
};

UI.prototype.soruSayisiniGoster=function(soruSirasi,toplamSoru) {
    let tag = `<span class="badge">${soruSirasi} / ${toplamSoru}</span>`;
    document.querySelector(".quiz_box .question_index").innerHTML=tag;
}

UI.prototype.skoruGoster = function(toplamSoru,dogruCevap){
    let tag = `Toplam ${toplamSoru} sorudan ${dogruCevap} doğru cevap verdiniz.`;
    document.querySelector(".score_box .score_text").innerHTML = tag;
};