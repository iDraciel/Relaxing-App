const container = document.querySelector('.container')
const text = document.querySelector('#text')

const totalTime = 9000
const breatheTime = (totalTime / 3)
const holdTime =  (totalTime / 9) * 2

breatheAnimation()

function breatheAnimation () {
  text.innerHTML ='Breathe In!'
  container.className = 'container grow'

  setTimeout ( () => {
    text.innerHTML = 'Hold'


    setTimeout ( () =>{
      text.innerText = 'Breathe Out!'
      container.className = 'container shrink'
    }, holdTime)

  },breatheTime)
}

setInterval(breatheAnimation, totalTime)
