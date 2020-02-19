
const database = [
    {
        title: 'Manchesterbyxa',
        imgUrl: 'images/clothes.1.jpg',
        price: '199 SEK'
    },
    {
        title: 'Skjorta med fickor',
        imgUrl: 'images/clothes.2.jpg',
        price: '189 SEK'
    },
    {
        title: 'Streetskor',
        imgUrl: 'images/clothes.3.jpg',
        price: '299 SEK'
    },
    {
        title: 'Tröja med ränder',
        imgUrl: 'images/clothes.4.jpg',
        price: '99 SEK'
    },
    {
        title: 'Hängselbyxa i linne',
        imgUrl: 'images/clothes.5.jpg',
        price: '199 SEK'
    },
    {
        title: 'Stickad kofta',
        imgUrl: 'images/clothes.cardigan.jpg',
        price: '199 SEK'
    },
    {
        title: 'Sneakers i manchestertyg',
        imgUrl: 'images/clothes.shoes.jpg',
        price: '299 SEK'
    },
    {
        title: 'Manchesterbyxa med foder',
        imgUrl: 'images/clothes.trousers.jpg',
        price: '199 SEK'
    }

];


function createItems() {

    for (i = 0; i < database.length; i++) {
        let object = database[i];

        let htmlItem = createItem(i, object);
        let htmlContiner = document.querySelector('.clothesContainer');

        htmlContiner.innerHTML += htmlItem

    }

}


function createItem(id, object) {

    return `
    <div class="continerContent">
        <div class="imageContainer">
            <img id="${id}" class="clothesimg" alt="${object.title}" src=${object.imgUrl}></div>
        <div class="infoText">
            <h5 class="objectTitle"><a href="">${object.title}</a></h5>
            <p class="price">${object.price}</p>
    </div>
    `
}

document.addEventListener("DOMContentLoaded", function () {
    createItems();

    let modal = document.querySelector('#modalContainer');
    let span = document.querySelector('.close');



    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (e) {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    }

    let clothesbtnsArray = document.querySelectorAll('.clothesimg');

    for (i = 0; i < clothesbtnsArray.length; i++) {
        let clothesbtn = clothesbtnsArray[i];

        clothesbtn.onclick = function () {
            modal.style.display = "block";
            let index = clothesbtn.getAttribute('id');

            let object = database[index];

            let modalTitle = document.querySelector('.modalTitel');
            modalTitle.innerHTML = object.title;
            let modalImge = document.querySelector('#modalImages');
            modalImge.src = object.imgUrl;

            let price = document.querySelector('.clothesPrice');
            price.innerHTML = object.price;


            
            let btnBasket = document.querySelector('#btnBasket');
            btnBasket.onclick = function (e) {
                let shoppingCart;

                if(localStorage.getItem('basket') === null) {
                    shoppingCart = [];
                }else {
                    shoppingCart = JSON.parse(localStorage.getItem('basket'));
                }
                
              
                shoppingCart.push(object);

                localStorage.setItem('basket', JSON.stringify(shoppingCart));

                modal.style.display = "none";
                showBasket();
                
                
            }
        }


    }
   
})




function displayShoppingItems() {

    let cartModalRows = document.querySelector('.cartModalRows');
      cartModalRows.innerHTML = '';

    let shoppingCart;

    if(localStorage.getItem('basket') === null) {
        shoppingCart = [];
    }else {   
         shoppingCart = JSON.parse(localStorage.getItem('basket'));

    }

    for (i = 0; i < shoppingCart.length; i++) {
        let object = shoppingCart[i];
        let htmlItem = createRow(i, object);
       
        cartModalRows.innerHTML += htmlItem
    }
}


function createRow(i, object) {
    return ` 

    <div class="cartContiner"><img class="cartShoppingImg" src=${object.imgUrl}>
   <div class="cartTitleItems"><p>${object.title}</p></div>
   <p class="cartPrice">${object.price}</P></div></div>
    
`
}

function showBasket() {
    let cartModal = document.querySelector('#cartModal');
    cartModal.style.display = 'block';
    displayShoppingItems();
    
}

document.addEventListener("DOMContentLoaded", function () {
    
    let cartModal = document.querySelector('#cartModal');
    let cartSpan = document.querySelector('.cartCloseBtn');
    let cartBtn = document.querySelector('#ShoppingCartBtn');
    let btnRemove = document.querySelector('#btnRemove');

    cartBtn.onclick = function () {
       showBasket();

    }


    cartSpan.onclick = function () {
        cartModal.style.display = 'none';

    }

    window.onclick = function (e) {
        if (e.target == cartModal) {
            cartModal.style.display = 'none';
        }
    }

    btnRemove.onclick = function () {
      localStorage.removeItem('basket');
        showBasket();
      
     }

})