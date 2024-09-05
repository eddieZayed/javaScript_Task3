
var programmingLanguages = ['Python','Java','C++'];
var PL = "";
for(var i=0;i<programmingLanguages.length;i++){
    PL+=`<li>${programmingLanguages[i]}</li>`;
}
document.querySelector("ul").innerHTML=PL;