


const input  = document.querySelector('#favchap')
const button = document.querySelector('button')
const list   = document.querySelector('#list')

const addChapter = async () =>{
    const li     = document.createElement('li')
    const del    = document.createElement('button')

    del.innerHTML   = 'X'
    del.classList.add('delete')
    del.addEventListener('click', async () =>{
        list.removeChild(li)
        input.focus()
    })

    li.innerHTML    = input.value

    li.appendChild(del)
    list.appendChild(li)
}



const clearInput = async () =>{
    input.value = ''
}

button.addEventListener('click', async () =>{

    if (input.value.trim() !== '') {
        await addChapter()
        await clearInput()
     }

})



