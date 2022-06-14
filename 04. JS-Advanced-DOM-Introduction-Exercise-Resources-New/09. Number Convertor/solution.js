function solve() {
    let binary = document.createElement('option')
    binary.value = 'binary'
    binary.innerHTML = 'Binary'
    let hexadecimal = document.createElement('option')
    hexadecimal.value = 'hexadecimal'
    hexadecimal.innerHTML = 'Hexadecimal'
    let options = document.getElementById('selectMenuTo')
    options.appendChild(binary)
    options.appendChild(hexadecimal)

    let button = document.getElementsByTagName('button')[0].addEventListener('click', onClick)

    function onClick () {
        let output = 0
        let number = Number(document.getElementById('input').value)
        let selectedOption = document.querySelector('#selectMenuTo option:checked').value

        if(selectedOption == 'binary'){
            output = number.toString(2)
        }else {
            output = number.toString(16).toUpperCase()
        }
        document.getElementById('result').value = output
    }

}