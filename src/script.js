'use strict'

const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.close-btn')

closeBtn.addEventListener('click', function () {
    modal.classList.add('hidden')
    console.log('hi');
})