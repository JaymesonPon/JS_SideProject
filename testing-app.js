let Names = [] 
Names = getInfo()

let filter = {
    text: ''
}

document.querySelector('#form').addEventListener('submit', function (e){
    e.preventDefault()
    Names.push({
        id: uuidv4(),
        firstName: e.target.elements.firstNameTextbox.value,
        lastName: e.target.elements.lastNameTextbox.value
    })

    saveInfo(Names)
    e.target.elements.firstNameTextbox.value = ''
    e.target.elements.lastNameTextbox.value = ''
    renderItems(Names)
})

document.querySelector('#clearData').addEventListener('click', function(){
    clearData()
    saveInfo(Names)
    createResultsDOM(Names)
    document.querySelector('#displayDiv').innerHTML = ''

})

document.querySelector('#filterTextbox').addEventListener('input', function (e){
    filter.text = e.target.value
    console.log(filter)
    renderItems(Names)
})