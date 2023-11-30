'use strict'

export const fotoPerro = () => {
    // Apis - Random Dog Pic
    const URL2 = 'https://dog.ceo/api/breeds/image/random';
    const randomPicBtn = document.getElementById('randomPicBtn') ;
    const dogPic = document.getElementById('dogPic') ;

    randomPicBtn.addEventListener('click', randomPic);

    async function randomPic(){
        try{
            let respuesta = await fetch(URL2);
            respuesta = await respuesta.json();
            const pic = respuesta.message;
            dogPic.src = pic;
        } catch(error) {
            console.log(error)
        }
    }
}