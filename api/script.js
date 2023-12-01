'use strict'
document.addEventListener('DOMContentLoaded', pokeApi);

/* Accediendo a los pokemon*/
let URL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20';
let contador = 0;
const spinner = document.getElementById('spinner');
const errorMsg = document.getElementById('errorMsg');
const pokemonName = document.getElementById('pokemonName');
const pokeCards = document.getElementById('pokeCards');
const listado = document.getElementById('listado');


/* NEXT 20 */
const nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click', ()=>{
  contador += 20;
  URL = `https://pokeapi.co/api/v2/pokemon?offset=${contador}&limit=20`
  pokeApi();
  disable(contador);
  indiceListado(contador);
});

/* PREVIOUS 20 */
const previousBtn = document.getElementById('previousBtn');
previousBtn.addEventListener('click', ()=>{
  contador -= 20;
  URL = `https://pokeapi.co/api/v2/pokemon?offset=${contador}&limit=20`
  pokeApi();
  disable(contador);
  indiceListado(contador);
});



async function pokeApi(){
  try{
      let respuesta = await fetch(URL);
      respuesta = await respuesta.json();
      mostrarNombres(respuesta.results);
  } catch (error) {
      console.log(error)
  } finally { 
    spinner.classList.toggle('hide'); 
  }
}



async function mostrarNombres(pokemons) {
  const pokeCards = document.getElementById('pokeCards')
  let contenidoHTML = '';
  for(let i = 0; i < pokemons.length; i++){
    const pokemon = pokemons[i];
    const imagenPokemon = await pokeImagen(pokemon.url);
    contenidoHTML += `<div class='pokeCard'>
      <img src=' ${imagenPokemon.sprites.front_default} ' alt=' ${pokemon.name} ' />
      <h3> ${ pokemon.name } </h3>
    </div>`;
  }
  pokeCards.innerHTML = contenidoHTML;
}

async function pokeImagen(pokeURL){
  try{
    let resultado = await fetch(pokeURL);
    return await resultado.json();
  } catch (error){
    console.log(error)
  } 

}


/* Disable btns */
function disable(contador){
  if(contador === 0){
    previousBtn.setAttribute('disabled', '');
  } else {
    previousBtn.removeAttribute('disabled');
  }
}
disable(contador);

/* Indice del listado */
function indiceListado(contador){
  listado.textContent = `Pokemons del ${contador + 1} al ${contador + 20}`;
}
indiceListado(contador);