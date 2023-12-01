'use strict'
document.addEventListener('DOMContentLoaded', pokeApi);

/* Accediendo a los pokemon*/
const URL = 'https://pokeapi.co/api/v2/pokemon/';
const spinner = document.getElementById('spinner');
const errorMsg = document.getElementById('errorMsg');
const pokemonName = document.getElementById('pokemonName');
const pokeCards = document.getElementById('pokeCards');


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

