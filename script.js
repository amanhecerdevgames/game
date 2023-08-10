
function animateSunrise() {
  const sunriseDiv = document.querySelector('.amanhecer');
  sunriseDiv.style.transition = 'opacity 1s';

  setTimeout(() => {
    sunriseDiv.style.opacity = 0;
    setTimeout(() => {
      sunriseDiv.style.display = 'none';
    }, 1000);
  }, 2000); 
}


animateSunrise();


function atualizarLeiteDisponivel(quantidade) {
  const leiteDisponivelSpan = document.querySelector('.leite-disponivel');
  leiteDisponivelSpan.textContent = quantidade;
}

function atualizarOvosDisponiveis(quantidade) {
  const ovosDisponiveisSpan = document.querySelector('.ovos-disponiveis');
  ovosDisponiveisSpan.textContent = quantidade;
}

function atualizarCarnePorcoDisponivel() {
  quantidadeCarnePorcoDisponivel = quantidadePorcos - 2;
  if (quantidadeCarnePorcoDisponivel < 0) {
    quantidadeCarnePorcoDisponivel = 0;
  }
  
  const carnePorcoDisponivelSpan = document.querySelector('.porcos-disponiveis');
  carnePorcoDisponivelSpan.textContent = quantidadeCarnePorcoDisponivel;
}
let quantidadeVacas = 2;
let quantidadeLeiteDisponivel = 0;
let quantidadeLeiteColetado = 0;
let quantidadeMoedas = 0;

let quantidadeGalinhas = 2;
let quantidadeOvosDisponiveis = 0;
let quantidadeOvosColetados = 0;

let quantidadePorcos = 2;
let quantidadeCarnePorcoDisponivel = 0;
let quantidadeCarnePorcoCarnada = 0;

function comprarVaca() {
  if (quantidadeMoedas >= 10) {
    quantidadeMoedas -= 10;
    quantidadeVacas++;
    atualizarQuantidadeMoedas();
    atualizarQuantidadeVacas();
  } else {
    alert("Você não tem moedas suficientes para comprar uma vaca.");
  }
}

function coletarLeite() {
  quantidadeLeiteColetado += quantidadeLeiteDisponivel;
  quantidadeLeiteDisponivel = 0;

  atualizarLeiteDisponivel(quantidadeLeiteDisponivel);

  const quantLeiteSpan = document.querySelector('.quant_leite');
  quantLeiteSpan.textContent = quantidadeLeiteColetado;
}



function venderLeite() {
  if (quantidadeLeiteColetado > 0) {
    quantidadeMoedas += quantidadeLeiteColetado * 5;
    quantidadeLeiteColetado = 0;

    const quantLeiteSpan = document.querySelector('.quant_leite');
    quantLeiteSpan.textContent = quantidadeLeiteColetado;

    atualizarQuantidadeMoedas();
  }
}

function comprarGalinha() {
  if (quantidadeMoedas >= 5) {
    quantidadeMoedas -= 5;
    quantidadeGalinhas++;
    atualizarQuantidadeMoedas();
    atualizarQuantidadeGalinhas();
  } else {
    alert("Você não tem moedas suficientes para comprar uma galinha.");
  }
}

function coletarOvos() {
  quantidadeOvosColetados += quantidadeOvosDisponiveis;
  quantidadeOvosDisponiveis = 0;

  atualizarOvosDisponiveis(quantidadeOvosDisponiveis);

  const quantOvosSpan = document.querySelector('.quant_ovos');
  quantOvosSpan.textContent = quantidadeOvosColetados;
}

function venderOvos() {
  if (quantidadeOvosColetados > 0) {
    quantidadeMoedas += quantidadeOvosColetados * 2;
    quantidadeOvosColetados = 0;

    const quantOvosSpan = document.querySelector('.quant_ovos');
    quantOvosSpan.textContent = quantidadeOvosColetados;

    atualizarQuantidadeMoedas();
  }
}


function comprarPorco() {
  if (quantidadeMoedas >= 15) {
    quantidadeMoedas -= 15;
    quantidadePorcos++;
    atualizarQuantidadeMoedas();
    atualizarQuantidadePorcos();
  } else {
    alert("Você não tem moedas suficientes para comprar um porco.");
  }
}

function carnearPorcos() {
  quantidadeCarnePorcoCarnada += quantidadeCarnePorcoDisponivel;
  quantidadeCarnePorcoDisponivel = 0;
  quantidadePorcos = 2;

  atualizarCarnePorcoDisponivel();
  atualizarQuantidadePorcos();

  const quantCarnePorcoSpan = document.querySelector('.quant_carne_porc');
  quantCarnePorcoSpan.textContent = quantidadeCarnePorcoCarnada;
}


function venderPorcos() {
  if (quantidadeCarnePorcoCarnada > 0) {
    quantidadeMoedas += quantidadeCarnePorcoCarnada * 10;
    quantidadeCarnePorcoCarnada = 0;

    const quantCarnePorcoSpan = document.querySelector('.quant_carne_porc');
    quantCarnePorcoSpan.textContent = quantidadeCarnePorcoCarnada;

    atualizarQuantidadeMoedas();
  }
}

function atualizarQuantidadePorcos() {
  const quantPorcosSpan = document.querySelector('.quant_porc');
  quantPorcosSpan.textContent = quantidadePorcos;
}

function reproduzirPorcos() {
  quantidadePorcos++; 
  atualizarQuantidadePorcos(); 
}

setInterval(reproduzirPorcos, 20000); // 4000 ms = 4 segundos

function iniciarJogoPorcos() {
  quantidadeCarnePorcoDisponivel = quantidadePorcos - 2;
  atualizarQuantidadeMoedas();
  atualizarCarnePorcoDisponivel(); 

  const comprarPorcoBtn = document.querySelector('.comprarPorco');
  comprarPorcoBtn.addEventListener('click', comprarPorco);

  const carnearPorcosBtn = document.querySelector('.coletarPorcos');
  carnearPorcosBtn.addEventListener('click', carnearPorcos);

  const venderPorcosBtn = document.querySelector('.venderPorcos');
  venderPorcosBtn.addEventListener('click', venderPorcos);

  setInterval(produzirCarnePorco, 10000); 
}


iniciarJogoPorcos();

function produzirCarnePorco() {
  quantidadeCarnePorcoDisponivel += quantidadePorcos;
  atualizarCarnePorcoDisponivel(quantidadeCarnePorcoDisponivel);
}



function atualizarQuantidadeVacas() {
  const quantVacasSpan = document.querySelector('.quant_vacas');
  quantVacasSpan.textContent = quantidadeVacas;
}

function atualizarQuantidadeGalinhas() {
  const quantGalinhasSpan = document.querySelector('.quant_galinhas');
  quantGalinhasSpan.textContent = quantidadeGalinhas;
}

function atualizarQuantidadeMoedas() {
  const quantMoedasSpan = document.querySelector('.quantidade-moedas');
  quantMoedasSpan.textContent = quantidadeMoedas;
}

function iniciarJogo() {
  atualizarQuantidadeVacas();
  atualizarQuantidadeGalinhas();
  atualizarQuantidadeMoedas();
  atualizarLeiteDisponivel(quantidadeLeiteDisponivel);
  atualizarOvosDisponiveis(quantidadeOvosDisponiveis);

  const comprarVacaBtn = document.querySelector('.comprarVaca');
  comprarVacaBtn.addEventListener('click', comprarVaca);

  const coletarLeiteBtn = document.querySelector('.coletarLeite');
  coletarLeiteBtn.addEventListener('click', coletarLeite);

  const venderLeiteBtn = document.querySelector('.venderLeite');
  venderLeiteBtn.addEventListener('click', venderLeite);

  const comprarGalinhaBtn = document.querySelector('.comprarGalinha');
  comprarGalinhaBtn.addEventListener('click', comprarGalinha);

  const coletarOvosBtn = document.querySelector('.coletarOvos');
  coletarOvosBtn.addEventListener('click', coletarOvos);

  const venderOvosBtn = document.querySelector('.venderOvos');
  venderOvosBtn.addEventListener('click', venderOvos);


}

iniciarJogo();



function produzirLeite() {
  quantidadeLeiteDisponivel += quantidadeVacas;
  atualizarLeiteDisponivel(quantidadeLeiteDisponivel);
}

function produzirOvos() {
  quantidadeOvosDisponiveis += quantidadeGalinhas;
  atualizarOvosDisponiveis(quantidadeOvosDisponiveis);
}

setInterval(produzirLeite, 20000);

setInterval(produzirOvos, 10000);

function salvarDadosJogo() {
  const dadosJogo = {
    quantidadeVacas,
    quantidadeLeiteDisponivel,
    quantidadeLeiteColetado,
    quantidadeMoedas,
    quantidadeGalinhas,
    quantidadeOvosDisponiveis,
    quantidadeOvosColetados,
    quantidadePorcos,
    quantidadeCarnePorcoDisponivel,
    quantidadeCarnePorcoCarnada,
   
  };

  localStorage.setItem('dadosJogo', JSON.stringify(dadosJogo));
}

function carregarDadosJogo() {
  const dadosJogo = JSON.parse(localStorage.getItem('dadosJogo'));
  if (dadosJogo) {
    quantidadeVacas = dadosJogo.quantidadeVacas;
    quantidadeLeiteDisponivel = dadosJogo.quantidadeLeiteDisponivel;
    quantidadeLeiteColetado = dadosJogo.quantidadeLeiteColetado;
    quantidadeMoedas = dadosJogo.quantidadeMoedas;
    quantidadeGalinhas = dadosJogo.quantidadeGalinhas;
    quantidadeOvosDisponiveis = dadosJogo.quantidadeOvosDisponiveis;
    quantidadeOvosColetados = dadosJogo.quantidadeOvosColetados;
    quantidadePorcos = dadosJogo.quantidadePorcos;
    quantidadeCarnePorcoDisponivel = dadosJogo.quantidadeCarnePorcoDisponivel;
    quantidadeCarnePorcoCarnada = dadosJogo.quantidadeCarnePorcoCarnada;
    


    atualizarQuantidadeVacas();
    atualizarQuantidadeGalinhas();
    atualizarQuantidadeMoedas();
    atualizarLeiteDisponivel(quantidadeLeiteDisponivel);
    atualizarOvosDisponiveis(quantidadeOvosDisponiveis);
    atualizarQuantidadePorcos();
    atualizarCarnePorcoDisponivel();
    atualizarQuantidadePorcos();
    atualizarCarnePorcoDisponivel();
    atualizarQuantidadePorcos();
    atualizarCarnePorcoDisponivel();
  
  }
}



carregarDadosJogo();


document.addEventListener('DOMContentLoaded', function() {
  // Adicionar um ouvinte de evento de clique ao botão
  const botaoSalvar = document.getElementById('salvarBotao');
  botaoSalvar.addEventListener('click', function() {
      salvarDadosJogo();
  });
});
