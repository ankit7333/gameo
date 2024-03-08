'use strict';
const footerMenuActive = function(){
    const list = document.querySelectorAll('footer li');
    const activeList = function(){
        list.forEach( (item) => item.classList.remove('active'));
        this.classList.add('active');
    }
    list.forEach((item) => item.addEventListener('click', activeList));
}
footerMenuActive();
