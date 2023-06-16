(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $(".navbar").addClass("sticky-top shadow-sm");
    } else {
      $(".navbar").removeClass("sticky-top shadow-sm");
    }
  });

  // Dropdown on mouse hover
  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";

  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
      $dropdown.hover(
        function () {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function () {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    margin: 24,
    dots: true,
    loop: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
})(jQuery);

const baseURL = "http://localhost:5000/api/v1";
async function fetchDestinations(countryCode) {
  console.log(countryCode);
  const response = await fetch(
    `${baseURL}/places/destinations?country_code=${countryCode}`
  );
  const data = await response.json();
  return data;
}

async function fetchSingleDestinations(id) {
  const response = await fetch(`${baseURL}/places/destinations/${id}`);
  const data = await response.json();
  return data;
}

async function getCountries() {
  const response = await fetch(`${baseURL}/places/countries`);
  const data = await response.json();
  return data;
}

// Get Country Drop Down
const country = document.getElementById("country-dropdown");
country.addEventListener("click", async () => {
  let { data } = await getCountries();
  console.log(data);
  data.map((element) => {
    let options = document.createElement("option");
    options.setAttribute("value", element.country_code);
    options.appendChild(document.createTextNode(element.country_name));
    country.appendChild(options);
  });
});

// Get Search Destination
const destinations = document.getElementById("search-destination");

destinations.addEventListener("click", async (e) => {
  let selectValue = e.target.previousElementSibling.value;
  const { data } = await fetchDestinations(selectValue);

  const mainSearchClass = document.getElementById("search-result-main");
  mainSearchClass.style.display = "initial";

  let searchResult = document.getElementById("search-result");
  searchResult.innerHTML = "";
  data.features.forEach((element) => {
    let starText = "";
    for (let i = 0; i < element.properties.rate; i++) {
      starText += `<small class="fa fa-star text-primary"></small>`;
    }
    searchResult.innerHTML += `
    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="package-item">
                        <div class="text-center p-4">
                            <h3 class="mb-0">${element.properties.name}</h3>
                            <div class="mb-3">
                            ${starText}
                            </div>
                            <div class="d-flex justify-content-center mb-2">
                                <button data-id="${element.properties.xid}" class="btn btn-sm btn-primary px-3 border-end openModalBtn" style="border-radius: 30px;">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>`;
  });
  var modal = document.getElementById("myModal");
  var openModalBtn = document.querySelectorAll(".openModalBtn");
  var closeModalBtn = document.getElementsByClassName("close");
  closeModalBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  openModalBtn.forEach((btn) => {
    btn.onclick = async function (e) {
      const id = e.target.getAttribute("data-id");
      const { data } = await fetchSingleDestinations(id);
      console.log(data);
      console.log(id);
      modal.style.display = "block";

      let starText = "";
      for (let i = 0; i < parseInt(data.rate); i++) {
        starText += `<small class="fa fa-star text-primary"></small>`;
      }
      modal.innerHTML = `
      <div class="modal-content">
      <div class="sub-modal-content">
        
        
        <span class="close">&times;</span>
      </div>
      <div class="col-lg-12 col-md-10 wow fadeInUp" data-wow-delay="0.1s">
        <div class="package-item">
    
            <div class="d-flex border-bottom">
                <small class="flex-fill text-center border-end py-2 modal-city" >${data.address.city}</small>
                <small class="flex-fill text-center border-end py-2 modal-state">${data.address.state}</small>
                <small class="flex-fill text-center py-2 modal-country">${data.address.country}</small>
            </div>
            <div class="text-center p-4">
                <h3 class="mb-0">${data.name}</h3>
                <div class="mb-3">
                    ${starText}
                </div>
                <p class="modal-description">${data.wikipedia_extracts.text}</p>
                <div class="d-flex justify-content-center mb-2">
                    <a href="#" class="btn btn-sm btn-primary px-3 modal-review border-end" style="border-radius: 30px 0 0 30px;">Reviews</a>
                    <a href="/booking.html" class="btn btn-sm btn-primary px-3 modal-book" style="border-radius: 0 30px 30px 0;">Book Now</a>
                </div>
            </div>
        </div>
    </div>
        
      `;
    };
  });
});

function togglePasswordVisibility() {
  var passwordField = document.getElementById("passwordField");
  if (passwordField.type === "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
}

window.addEventListener("load", () => {
  const username = localStorage.getItem("username");
  if (username) {
    const registerBtn = document.getElementById("major-check");

    registerBtn.innerHTML = localStorage.getItem("username");
  }
});
