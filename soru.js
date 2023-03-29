function Soru(soruMetni, cevapSecenekleri,dogruCevap){

    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
    
};

Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap === this.dogruCevap;
};


let sorular = [
    new Soru("1-Hangisi js paket yönetim uygulamasıdır?",{ a:"Node.js",b:"Typescript", c:"Npm",d:"Nuget"},"c"),
    new Soru("2-Hangisi .net paket yönetim uygulamasıdır?",{ a:"Node.js",b:"Nuget", c:"Npm", d:"Typescript"},"b"),
    new Soru("3-Hangisi backend kapsamında değerlendirilir?",{ a:"Node.js",b:"typescript", c:"angular", d:"react"},"a"),
    new Soru("4-Hangisi js programlama dilini kullanmaz?",{ a:"react",b:"angular", c:"vuejs", d:"asp.net"},"d"),
    new Soru("5-Hangisi frontend kapsamında değerlendirilmez?",{ a:"css",b:"html", c:"js", d:"sql"},"d")
];