// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}

function bindEventListeners (dots) {
  for (var i = 0; i < dots.length; i++) {
    // BIND YOUR EVENT LISTENERS HERE
    // The first one is provided for you
    dots[i].addEventListener('contextmenu', makeGreen)
  }
  for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', makeBlue)
  }

  for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener('dblclick', hide)
  }
}

function makeGreen (evt) {
  evt.preventDefault()
  evt.target.classList.toggle('green')
  updateCounts()
}

// CREATE FUNCTION makeBlue HERE
function makeBlue (evt) {
  evt.target.classList.toggle('blue')
  updateCounts()
}
// CREATE FUNCTION hide HERE
function hide (evt) {
  evt.target.classList.toggle('invisible')
  updateCounts()
}
function updateCounts () {
  var totals = {
    blue: 0,
    green: 0,
    invisible: 0
  }

  // console.log(document.getElementsByClassName("blue"))

 /* 
 
 Me trying to work stuff out:
 
 blue = count of blue dots
 green = count of green dots
 invisible = count of invisible dots

 totals = [count of blue, count of green, count of invisible dots]

 document.getElementsByClassName('invisible')[0] arr.length
Or is it - document.getElementsByClassName('blue-total')[0].length
Or is it - document.getElementsByClassName('green').length
Or is it - document.getElementsByClassName('invisible').length
 
 */
 
  // WRITE CODE HERE TO COUNT BLUE, GREEN, AND INVISIBLE DOTS

totals.blue = document.getElementsByClassName('blue').length
totals.green = document.getElementsByClassName('green').length
totals.invisible = document.getElementsByClassName('invisible').length

  // Once you've done the counting, this function will update the display
  displayTotals(totals)
}

function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
  }
}
