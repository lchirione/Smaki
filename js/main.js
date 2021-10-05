const items = document.getElementById('items')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()


document.addEventListener('DOMContentLoaded', () => { 
    fetchData() 
});

// Lista de productos
const fetchData = async () => {
    try {
        const res = await fetch('../data/listaDeProductos.json');
        const data = await res.json()
        //console.log(data)
        pintarCards(data)
    } catch (error) {
        console.log(error);
    }
}

// Mostar los productos
const pintarCards = data => {
    data.forEach(producto => {
        templateCard.querySelector('h5').textContent = producto.title
        templateCard.querySelector('p').textContent = producto.precio
        templateCard.querySelector('img').setAttribute('src', producto.image)
        templateCard.querySelector('.btn').dataset.id = producto.id


        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
   items.appendChild(fragment)
}