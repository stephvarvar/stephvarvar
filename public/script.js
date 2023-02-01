
// Navigation
let nav = document.querySelector('.nav')

let btn = document.querySelector('#btn')

nav.classList

let navOpen = document.querySelector('#btn').addEventListener('click', function() {
    nav.classList.toggle('hidden')
})

let closeNav = document.querySelector('#nav').addEventListener('click', function() {
    nav.classList.toggle('hidden')
})

// Modal

let modalBtn = document.querySelector('#mdl')

let modal = document.querySelector('.modalopen')


let modalOpen = document.querySelector('#mdl').addEventListener('click', function() {
    modal.classList.toggle('hidden')
})

let modalClose = document.querySelector('#modalclose').addEventListener('click', function() {
    modal.classList.toggle('hidden')
})

let modalExit = document.querySelector('#modalexit').addEventListener('click', function() {
    modal.classList.toggle('hidden')
})







