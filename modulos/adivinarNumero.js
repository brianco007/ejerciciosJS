'use strict'

export function adivinarNumero(){
    // adivinar número
    const numPC = Math.floor(Math.random()*20)+1;
    let numUsuario;
    let contador = 5;

    const form = document.getElementById('form');
    const entrada = document.getElementById('entrada');
    const comentario = document.getElementById('comentario');
    const intentos = document.getElementById('intentos');
    const submitBtn = document.getElementById('submitBtn');

    console.log(numPC);

    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        contador--
        intentos.innerHTML = `N° de intentos: ${contador}`
        numUsuario = entrada.value;
        entrada.value = "";

        if(contador != 0){
            if(numUsuario == numPC){
                comentario.textContent = '🎉 Adivinaste! 🎉';
                intentos.style.display = 'none';
                entrada.style.display = 'none';
                submitBtn.style.display = 'none';
                const again = document.createElement('a');
                again.textContent = 'Jugar otra vez'
                again.setAttribute('href', '../index.html');
                form.appendChild(again);
            } else {
                comentario.textContent = 'No, sigue intentando';
                setTimeout(()=>{
                    comentario.textContent = '';
                }, 2000)
            }  
        } else{
                comentario.textContent = `Perdiste 😟 El número era ${numPC}`;
                intentos.style.display = 'none';
                entrada.style.display = 'none';
                submitBtn.style.display = 'none';
                const again = document.createElement('a');
                again.textContent = 'Jugar otra vez'
                again.setAttribute('href', '../index.html');
                form.appendChild(again);
        }
    })
}