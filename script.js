let button = document.querySelector('#btn')


button.addEventListener( 'click', itemDoEvento =>{
    itemDoEvento.preventDefault()//prevenir ações padrões.
    let nome = document.querySelector('#nome').value
    let valor = document.querySelector('#price').value
    let imagem = document.querySelector('#imgUrl').value

    let card = document.createElement("div")
    card.classList.add('item')

    let imgUrl = document.createElement("div")//div criado dentro da div principal
    imgUrl.innerHTML = `<img src = "${imagem}">`

    let nomeCard = document.createElement('p')
    nomeCard.textContent = `${nome}`

    let priceCard = document.createElement('p')
    priceCard.textContent = `${valor}`

    card.appendChild(imgUrl)
    card.appendChild(nomeCard)
    card.appendChild(priceCard)

    let lista = document.querySelector('#lista')
    lista.appendChild(card)


})
//addEvent
/* 1º CRIOU-SE EVENTO;
   2º COLETOU-SE OS INPUTS
   3º CRIOU-SE TAGS
   4º CRIOU-SE O CARD
*/