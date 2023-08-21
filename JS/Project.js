function loadProducts() {
    fetch("/DATA/Product.json").then(res => res.json()).then(data => {
        let h = "";
        for (let p of data)
        {
            h += `
                <div class="product">
                    <div>
                        <div class="sale-off">
                            <p class="sale-off-percent">${p.sale}</p>
                            <p class="sale-off-label">GIẢM</p>
                        </div>
                        <div><img src="/IMG/${p.image}" alt="Food" /></div>
                        <div class="content-of-product">
                            <h4>${p.name}</h4> 
                            <div class="rate"><i class="fa-solid fa-star"></i><span>&nbsp;${p.rate}</span></div>
                            <p>${p.location}</p>
                            <p class="price"><b>&#8363;${p.price}.000</b></p>
                        </div>
                    </div>
                </div>
            `;
        document.getElementById("products").innerHTML = h;
        }
    })
}

window.onload = function() {
    loadProducts();
}

//Go to top button
window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
             document.getElementById("button").style.display = "block";
        } else {
             document.getElementById("button").style.display = "none";
        }
    }
    
function scrollToTop() {
    const scrollDuration = 300; // Duration of the smooth scroll animation in milliseconds
    const scrollStep = -window.scrollY / (scrollDuration / 15);
            
    function smoothScroll() {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
                requestAnimationFrame(smoothScroll);
        }
    }
    requestAnimationFrame(smoothScroll);
}

// When user scrolled down 50px, change menu setting
document.addEventListener('scroll', () => {
    const menu = document.querySelector('.menu');
    if (window.scrollY >= 50) {
        menu.classList.add('scrolled');
    } else {
        menu.classList.remove('scrolled');
        }
});


