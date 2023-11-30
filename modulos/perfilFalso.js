'use strict'

export const perfilFalso = () => {
    // consumiendo APIs - Perfiles falsos
    const URL = 'https://randomuser.me/api/';
    const fetchBtn = document.getElementById('fetchBtn');
    const info = document.querySelectorAll('.info');
    const spinner = document.querySelector('#spinner')

    fetchBtn.addEventListener('click', miApi);

    async function miApi(){
        info[0].classList.remove = ('hide');
        try{
            let respuesta = await fetch(URL);
            respuesta = await respuesta.json();
            const pic = respuesta.results[0].picture.large;
            const fullName = `${respuesta.results[0].name.first} ${respuesta.results[0].name.last}`;
            const age = respuesta.results[0].dob.age;
            info[0].src = pic;
            info[1].textContent = `Full Name: ${fullName}`;
            info[2].textContent = `Age: ${age}`;

        }catch(error){
            console.log(error)
        } finally{
            info[0].classList.add('hide');
            spinner.classList.remove('hide');
            setTimeout(()=>{
                spinner.classList.add('hide');
                info[0].classList.toggle('hide');
            },1000)
        }
    }
}