'use strict'

// header lighting

export const lighting = () => {
    const colors = ['orange', 'pink', 'voilet', 'lightblue', 'lightgreen'];
    const lights = document.querySelectorAll('.lights');
    const topa = document.getElementById('top');
    let index = 0;

    let verticalScroll = window.scrollY;

    setInterval(function(){
        topa.style.boxShadow =`0 0 15px ${colors[index]}`;
        lights.forEach(light => {
            light.style.color = `${colors[index]}`;
        })
        if(index === colors.length-1){
            index = 0
        } else{
            index++
        }
    }, 900)
}

