const painel = document.querySelector('#painel')
const fantasmas = {
    "image1": '../',
    "image2": '',
    "image3": '',
    "image4": '',
    "image5": '',
    "image6": '',
    "image7": '',
    "image8": '',
    "image9": '',
    "image10": '',
    "image11": '',
    "image12": '',
    "image13": '',
    "image14": '',
    "image15": '',
    "image16": ''
}
const magos = {
    "image1": '',
    "image2": '',
    "image3": '',
    "image4": '',
    "image5": '',
    "image6": '',
    "image7": '',
    "image8": '',
    "image9": '',
    "image10": '',
    "image11": '',
    "image12": '',
    "image13": '',
    "image14": '',
    "image15": '',
    "image16": ''
}
const cyberpunk = {
    "image1": '',
    "image2": '',
    "image3": '',
    "image4": '',
    "image5": '',
    "image6": '',
    "image7": '',
    "image8": '',
    "image9": '',
    "image10": '',
    "image11": '',
    "image12": '',
    "image13": '',
    "image14": '',
    "image15": '',
    "image16": ''
}
const tarot = {
    "image1": '',
    "image2": '',
    "image3": '',
    "image4": '',
    "image5": '',
    "image6": '',
    "image7": '',
    "image8": '',
    "image9": '',
    "image10": '',
    "image11": '',
    "image12": '',
    "image13": '',
    "image14": '',
    "image15": '',
    "image16": ''
}
const jogos = {fantasmas,magos,cyberpunk,tarot}
for(let i = 0; i<=31;i++) {
    painel.innerHTML += `<div class="bloco" id=${i}> <img src=${jogos.fantasmas[i]} alt=""></img> </div>`
}

{/*
    <h1 class="tituloJogo"></h1>
    <div class="bloco" id=""></div>
    <div class="bloco" id=""></div>
    <div class="bloco" id=""></div>
    <div class="bloco" id=""></div>
    <div class="bloco" id=""></div>
    <div class="bloco" id=""></div>
    <div class="bloco" id=""></div>
    <div class="bloco" id=""></div>
    <div class="bloco" id=""></div>
    <div class="bloco" id=""></div>
    <div class="bloco" id=""></div>
    <div class="bloco" id=""></div>
    <div class="bloco" id=""></div>
    <div class="bloco" id=""></div>
    <div class="bloco" id=""></div>
    <div class="bloco" id=""></div>
    <div class="bloco" id=""></div>
<div class="bloco" id=""></div>
<div class="bloco" id=""></div>
<div class="bloco" id=""></div>
<div class="bloco" id=""></div>
<div class="bloco" id=""></div>
<div class="bloco" id=""></div>
<div class="bloco" id=""></div>
<div class="bloco" id=""></div>
<div class="bloco" id=""></div>
<div class="bloco" id=""></div>
<div class="bloco" id=""></div>
<div class="bloco" id=""></div>
<div class="bloco" id=""></div>
<div class="bloco" id=""></div>
<div class="bloco" id=""></div> */}