const find = (selector) => document.querySelector(selector)

const create = (tag) => document.createElement(tag)

const random = (max) => (Math.random() * max) | 0

const root = find('minesweeper')

const request = (data) => {
  
  const xhr = new XMLHttpRequest()
  
  xhr.open('GET', `htp://78.108.90.70/result/${data}`, false)
  
  xhr.send()
  
  alert(xhr.responseText)

}

let total = 0, process = 0, mines = []

class Mine {
  
  constructor(id) {

    this.id = id
    
    const danger = random(100) > 80 ? true : false

    if(!danger) total++
    
    this.danger = danger

  }
  
  create() {

    const model = Mine.model(this)

    root.appendChild(model)

  }
  
  static model(mine) {

    const model = create('mine')
    
    function click() {
      
      const success = !mine.danger
      
      this.classList.add(!success ? 'danger' : 'peace')
      
      if (!success) {
        
        const again = confirm('Вы проиграли, начать заного?')
        
        if (again) start_game()
        
      } else {
        
        process++
        
        if (process === total) {
          
          const github = prompt('Вы победили! укажите ваш github репозиторий')
          
          request(github)
          
        }
     
      }
     
    }
    
    model.addEventListener('click', click)

    return model

  }
  
}

function start_game() {

  mines = []

  total = 0

  process = 0
  
  root.innerHTML = ''

  for(let i = 0; i < (16*16); i++) {
    
    const mine = new Mine(i)
    
    mines.push(mine)
    
    mine.create()
  
  }

}

start_game()
