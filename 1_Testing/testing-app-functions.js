const clearData = function() {
    Names = []
}

const getInfo = function () {
    const data = localStorage.getItem('info')
    if (data !== null) {
        return JSON.parse(data)
    } else {
        return []
    }

}

const saveInfo = function (data) {
    localStorage.setItem('info',JSON.stringify(data))
}

const createResultsDOM = function(name) {
        const divEl = document.createElement('div')
        const checkboxEl = document.createElement('input')
        checkboxEl.setAttribute('type','checkbox')
        const buttonEl = document.createElement('button')
        buttonEl.textContent = 'x'
        buttonEl.addEventListener('click', function(){
            //document.querySelector('#displayDiv').innerHTML = ''
            deleteItem(name.id)
            saveInfo(Names)
            renderItems(Names)
        })
        const nameOne = document.createElement('span')
        nameOne.className = 'namePara'
        nameOne.textContent = name.firstName + ' ' + name.lastName
        

        document.querySelector('#displayDiv').appendChild(divEl)
        divEl.appendChild(checkboxEl)
        divEl.appendChild(nameOne)
        divEl.appendChild(buttonEl)
}

const renderItems = function(Names) {
    document.querySelector('#displayDiv').innerHTML = ''
    filteredNames = filterItems(Names,filter)
    filteredNames.forEach(function(name){
        return createResultsDOM(name)
    })
}

const deleteItem = function (id) {
    const nameIndex = Names.findIndex(function (name){
        return name.id === id
    })
    Names.splice(nameIndex,1)

}

const filterItems = function(list,filters) {
    return list.filter(function(item){
        return item.firstName.toLowerCase().includes(filters.text.toLowerCase())
    })
}