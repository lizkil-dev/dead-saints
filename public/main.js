// document.querySelector('button').addEventListener('click', apiRequest)

// async function apiRequest(){
//     const saintName = document.querySelector('input').value
//     try{
//       // const response = await fetch(`/api?name=${saintName}`) alternative schreib- bzw. suchweise nach query-parameter
//         const response = await fetch(`/api/${saintName}`)
//         const data = await response.json()

//         console.log(data)
//         document.querySelector('img').src = data.imgSrc
//         document.querySelector('h2').innerText = data.death
//         document.querySelector('p').innerText = data.description
//     }catch(error){
//         console.log(error)
//     }
// }

document.querySelector('.sebastian').addEventListener('click', () => apiRequest('St. Sebastian'))
document.querySelector('.stephen').addEventListener('click', () => apiRequest('St. Stephen'))
document.querySelector('.cassius').addEventListener('click', () => apiRequest('St. Cassius'))
document.querySelector('.lawrence').addEventListener('click', () => apiRequest('St. Lawrence'))
document.querySelector('.bartholomew').addEventListener('click', () => apiRequest('St. Bartholomew'))


async function apiRequest(name){
    let saintName = name
    // const saintName = document.querySelector('input').value
    try{
      const response = await fetch(`/api?name=${saintName}`) // alternative schreib- bzw. suchweise nach query-parameter
        // const response = await fetch(`/api/${saintName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('img').src = data.imgSrc
        document.querySelector('h2').innerText = data.name
        document.querySelector('h3').innerText = data.death
        document.querySelector('p').innerText = data.description
    }catch(error){
        console.log(error)
    }
}