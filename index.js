var form = document.querySelector('form')

form.onsubmit = function(e) {
    var li = document.createElement('li')
    var inputValue = document.querySelector('input').value
    var content = document.createTextNode(inputValue)
    var ul = document.querySelector('ul')
    var button = document.createElement('button')
    e.preventDefault()
    if (inputValue === '') {
        alert('Enter your to-do item.')
    } else if (inputValue.trim().length==0) {
        alert('Enter your to-do item.')
    } else {
        ul.appendChild(li)
        li.appendChild(button)
        button.appendChild(content)
    }
    document.querySelector('input').value = ''
    var timesClicked = 0
    li.onclick = function() {
        timesClicked++
        if (timesClicked>1) {
            li.remove(li)
        } else {
            this.style.textDecoration = 'line-through'
        }
    }
}    

