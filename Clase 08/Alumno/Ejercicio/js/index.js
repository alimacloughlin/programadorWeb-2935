console.log('init app')

var mainListNode = document.getElementById('mainList')
mainListNode.innerHTML = ''

var texts = [ 'Ed', 'Edd', 'Eddy' ]

var liNode

for (var i = 0; i < texts.length; i++) {
  liNode = document.createElement('li')
  liNode.className = 'list-group-item'
  liNode.innerHTML = texts[i]
  mainListNode.appendChild(liNode)
}
