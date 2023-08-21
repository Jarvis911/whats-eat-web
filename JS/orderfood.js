// MỞ MODAL

const products = document.querySelectorAll('.open-modal-button');
products.forEach(product=>{
    // console.log(product)
    var closeModalButton = document.querySelector('.close-modal-button');
    var modalOverlay = document.querySelector('.modal-overlay');
    
    product.addEventListener('click', () => {
        product.parentElement.nextElementSibling.style.display = 'flex';


    });
    
   $(".close-modal-button").click(()=>{
    $(".modal-overlay").hide()
   })
    
    $(".modal-overlay").click(()=>{
        $(".modal-overlay").hide()
    })
})


function closeModal() {
    modalOverlay.style.display = 'none';
}

// TĂNG GIẢM SỐ LƯỢNG SẢN PHẨM
const decButton = document.querySelector('.dec');
const incButton = document.querySelector('.inc');
const numberVar = document.querySelector('.number-var');

let quantity = 1; // Giá trị mặc định   

decButton.addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        updateQuantityDisplay();
    }
});

incButton.addEventListener('click', () => {
    quantity++;
    updateQuantityDisplay();
});

function updateQuantityDisplay() {
    numberVar.textContent = quantity;
}

//  CẬP NHẬT GIỎ HÀNG


// SCROLL
const moveToMainMeal = document.getElementById("main-meal");
moveToMainMeal.addEventListener("click", function () {
   window.scrollTo(0, 0);
});
const moveToSnack = document.getElementById("snack");
moveToSnack.addEventListener("click", function () {
   window.scrollTo(0, 2109);
});
const moveToDrink = document.getElementById("drink");
moveToDrink.addEventListener("click", function () {
   window.scrollTo(0, 4460);
});


// JSON
function sachGiaoKhoaGT(event){

    productContainerSGK.innerHTML = '';
        fetch("/JS/orderfood.json").then(res=>res.json()).then(data=>{
            for(let d of data)
            {
                if(d.type1=="sachgk"&&d.rawprice!=""){
                   productContainerSGK.insertAdjacentHTML("beforeend",`
                    <div class="product">
                    <img src="${d.image}">
                    <h2 class="product-name">${d.name}</h2>
                    <div class="price">${d.price}&#8363;</div>  
                    <ul class="prices">
                        <li><span class="raw-price">${d.rawprice}&#8363;</span></li>
                        <li><span class="offer">${d.offer}%</span></li>
                    </ul>   
                    <ul class="rate">
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>   
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        (0)
                    </ul>
                    <button class="cart-btn animate__animated animate__pulse">THÊM VÀO GIỎ HÀNG</button>
                </div>
                    `)}
            }
            addLocalStorage()
    }) 
    
}
