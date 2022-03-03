const lab = document.querySelector('#lab')
const frenchie = document.querySelector('#frenchie')
const GSD = document.querySelector('#GSD')

document.querySelector('#labBest').addEventListener('click', labBest)
document.querySelector('#frenchieBest').addEventListener('click', frenchieBest)
document.querySelector('#GSDBest').addEventListener('click', GSDBest)

function labBest () {
  lab.classList.toggle('hidden')
  frenchie.classList.add('hidden')
  GSD.classList.add('hidden')
}

function frenchieBest () {
  lab.classList.add('hidden')
  frenchie.classList.toggle('hidden')
  GSD.classList.add('hidden')
}

function GSDBest () {
  lab.classList.add('hidden')
  frenchie.classList.add('hidden')
  GSD.classList.toggle('hidden')
}


