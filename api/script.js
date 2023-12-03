'use strict'
document.addEventListener('DOMContentLoaded', pokeApi);

/* Accediendo a los pokemon*/
let URL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20';
let contador = 0;
const spinner = document.getElementById('spinner');
const errorMsg = document.getElementById('errorMsg');
const pokeCards = document.getElementById('pokeCards');
const listado = document.getElementById('listado');



/* NEXT 20 */
const nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click', ()=>{
  counter += 20;
  URL = `https://pokeapi.co/api/v2/pokemon?offset=${counter}&limit=20`
  pokeApi();
  disable(counter);
  indiceListado(counter);
});

/* PREVIOUS 20 */
const previousBtn = document.getElementById('previousBtn');
previousBtn.addEventListener('click', ()=>{
  counter -= 20;
  URL = `https://pokeapi.co/api/v2/pokemon?offset=${counter}&limit=20`
  pokeApi();
  disable(counter);
  indiceListado(counter);
});



async function pokeApi(){
  try{
      let respuesta = await fetch(URL);
      respuesta = await respuesta.json();
      mostrarNombres(respuesta.results);

  } catch (error) {
      errorMsg.classList.toggle('ocultar');
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
disable(counter);

/* Indice del listado */
function indiceListado(contador){
  listado.textContent = `Pokemons del ${contador + 1} al ${contador + 20}`;
}
indiceListado(counter);

