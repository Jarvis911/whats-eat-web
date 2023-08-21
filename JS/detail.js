function loadCmt() {
    fetch("/DATA/detail.json").then(res => res.json()).then(data => {
        let h = "";
        for (let p of data)
        {
            h += `
            <div class="review flex">        
                <div class="avt-client"><img src="/IMG/Dish11.png" alt="Avatar của khách hàng"></div> 
                <div>
                    <p><b>${p.name}</b></p>
                    <p style="color: red">${p.rate}</p>
                    <p>${p.time}</p>
                    <p style="margin-top: 0.5rem; font-size: 1rem">${p.react}</p>
                    <p><i class="fa-solid fa-thumbs-up"></i>&nbsp;${p.like}</p>
                </div>
            </div>
            `;
        document.getElementById("reviews").innerHTML = h;
        }
    })
}
window.onload = function() {
    loadCmt();
}