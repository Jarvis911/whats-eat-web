// Input Places From Json File

function loadPlaces() {
  fetch("/DATA/places.json").then(res => res.json()).then(data => {
      let h = "";
      for (let p of data)
      {
        h += `
      <div class="place-each" id="${p.idEach}">
        <div class="place-row">
            <img class="place-img" src="${p.image}">
              <div class="more-detail">
                <a href="${p.link}">
                  <button class="more-detail-button">
                    <i class="fa fa-info-circle" aria-hidden="true"></i> 
                    Xem đánh giá
                  </button>
                </a>
              </div>
          </div>
          <div class="place-info-grid">
            <div class="place-score">
              <p class="score">${p.score}</p>
            </div>
            <div class="place-info">
              <p class="place-name"> 
                  ${p.name}
              </p>
              <p class="place-address">
                  ${p.address}
              </p>
              <p class="place-type">
                <i class="fa fa-tag" style="font-size:20px; color: red"></i>
                  ${p.type}
              </p>
            </div>
          </div>
      </div>  
    `;
      // Cách 1
      document.getElementById("place").innerHTML = h;
      }
  })
}

window.onload = function() {
  loadPlaces();
}

window.onscroll = function() {
  scrollFunction();
}
        
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("button").style.display = "block";
    } else {
         document.getElementById("button").style.display = "none";
        }
 }
        
// When the user clicks on the button, scroll to the top of the document
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

document.addEventListener('scroll', () => {
  const menu = document.querySelector('.sidebar');
  if (window.scrollY >= 50) {
      menu.classList.add('scrolled');
  } else {
      menu.classList.remove('scrolled');
      }
});


//Scroll to places in side-bar part
document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('.sidebar-link');

  for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', scrollToSection);
  }

  function scrollToSection(event) {
      event.preventDefault();
      var targetId = event.currentTarget.getAttribute('data-target'); // Use data attribute for custom target IDs
      var targetSection = document.querySelector('#' + targetId);
      
      if (targetSection) {
          var yOffset = -80; // Adjust for any fixed header or offset
          var targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
          
          window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
          });
      }
  }
});

