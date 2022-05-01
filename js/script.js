

const input = document.querySelector('input');
const buttonSearch = document.querySelector('button');

// console.log(buttonSearch)
// console.log(input)

buttonSearch.addEventListener('click' , ()=>{
    const inputValue = input.value.toLowerCase();
    const span = document.getElementsByClassName('brand');
    const contenitore = document.querySelector('.container');
    // console.log('span', span);
    // console.log('input', inputValue);

    
    for(let i = 0; i < span.length; i++){
        const spanText = span[i].innerText.toLowerCase()
        console.log(span[i]);
        
        if(inputValue === spanText){

            console.log('questa é la card', span[i].parentNode);
            const bana = span[i].parentNode
            const bana2 = bana.parentNode
            console.log('bana2',bana2)
            contenitore.innerHTML = ' ';
            contenitore.append(bana2);

        }
        console.log('spantext', spanText);
        console.log('input', inputValue);
    }

});


console.log(products);
const container = document.querySelector('.container')
console.log(container)
const insertProducts = (array, toPrint)=>{array.forEach(element => {
    const {firstImg, secondImg, discount, tag, brand, productName, scountPrice, originalPrice} = element
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `<div class="card-image">
    <img class="first-image" src="${firstImg}" alt="nome prodotto">
    <img class="second-image" src="${secondImg}" alt="nome prodotto">
    <div class="heart">&hearts;</div>
    <div class="card-promo">
        <span class="card-discount">${discount}</span>
        <span class="card-tag">${tag}&agrave;</span>
    </div>
  </div>

  <div class="card-text">
    <span class="brand">${brand}</span>
    <h3 class="product-name">${productName}</h3>
    <span class="price">${scountPrice}&euro;</span>
    <del class="orginal-price">${originalPrice}&euro;</del>
  </div>
  <div class="card-text">
    <div class="btn btn-dark add-button">Aggiungi al carello</div>
  </div>`
    toPrint.append(card)
});}
insertProducts(products,container)
const cart = []
let totalPrice = 0
const allButtons = document.querySelectorAll('.add-button')
const cartHtml = document.querySelector(".added-Products")
const cartBtn = document.getElementById('cart')
cartBtn.addEventListener('click',()=>{cartHtml.classList.toggle('hide')})
allButtons.forEach((el, index)=> el.addEventListener('click',function(){ totalPrice = 0; cart.push(products[index]);  cartHtml.innerHTML=""; cart.forEach(obj =>{const {brand, firstImg, scountPrice,productName} = obj
    cartHtml.innerHTML += `
    <div class="item" style="border-bottom: solid 1px black;">
      <img src="${firstImg}" style="width: 50px;" alt="">
      <span>${brand}</span>
      <span>${productName}</span>
      <span>${scountPrice}&euro;</span>
    </div>`
  totalPrice += scountPrice

  })



 cartHtml.prepend(`the total is ${parseFloat(totalPrice.toFixed(2))} €`)


   
} ))
