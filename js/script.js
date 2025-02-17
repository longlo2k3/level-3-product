const menuIcon = document.querySelector(".menu-icon");
const headerMobile = document.querySelector(".header-mobile");
const HeaderWeb = document.querySelector(".header-web");
const closeIcon = document.querySelector(".close-icon img");
const menuActions = document.querySelector(".header-web .menu nav");
const notifiIcon = document.querySelector(
  ".header-actions .cirle-img:nth-child(2)"
);
const userIcon = document.querySelector(".header-actions .user-icon");
const greeting = document.querySelector(".header-actions .user-greeting");
const slideShow = document.querySelector(".slideshow");
const slideWrapper = document.querySelector(".slideshow-img");
const prevBtn = document.querySelector(
  ".img-product .slideshow i:nth-child(1)"
);
const nextBtn = document.querySelector(
  ".img-product .slideshow i:nth-last-child(1)"
);

//menu mobile
menuIcon.addEventListener("click", () => {
  headerMobile.classList.toggle("hide-mobile");
});

closeIcon.addEventListener("click", () => {
  headerMobile.classList.toggle("hide-mobile");
});

headerMobile.classList.contains("hide-mobile")
  ? (document.querySelector("body").style.backgroundColor = "#ffffff")
  : (document.querySelector("body").style.backgroundColor = "#0009");

window.addEventListener("resize", () => {
  if (window.innerWidth <= 1024) {
    menuIcon.classList.remove("hide");
    menuActions.classList.add("hide");
    // notifiIcon.classList.add("hide");
    userIcon.classList.add("hide");
    greeting.classList.add("hide");
  } else {
    menuIcon.classList.add("hide");
    headerMobile.classList.add("hide-mobile");
    menuActions.classList.remove("hide");
    // notifiIcon.classList.remove("hide");
    userIcon.classList.remove("hide");
    greeting.classList.remove("hide");
  }
});

let currentIndex = 0;
const visibleSlides = 4;
const totalSlides = document.querySelectorAll(".slideshow-img img").length;
const slideWidth = 100;
const images = slideWrapper.querySelectorAll("img");
const mainImg = document.querySelector(".main-img");

//slideshow
function updateSlidePosition() {
  images.forEach((img, index) => {
    img.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  });
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < totalSlides - visibleSlides) {
    currentIndex++;
    updateSlidePosition();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlidePosition();
  }
});

// active img
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    const activeImages = document.querySelectorAll(".active-img");
    activeImages.forEach((activeImg) => {
      if (activeImg !== img) {
        activeImg.classList.remove("active-img");
      }
    });
    img.classList.add("active-img");
    mainImg.src = img.src;
  });
});

// active color

const circle = document.querySelectorAll(".circle");
const activeColor = document.querySelector(".active-color");

circle.forEach((item) => {
  item.addEventListener("click", () => {
    circle.forEach((item) => {
      item.classList.remove("active-color");
    });
    const computedStyle = getComputedStyle(item);
    console.log(computedStyle.backgroundColor);

    computedStyle.backgroundColor !== "rgba(0, 0, 0, 0)"
      ? (activeColor.style.borderColor = computedStyle.backgroundColor)
      : (activeColor.style.borderColor = "#ccb99e");
    item.appendChild(activeColor);
  });
});

// check size
const size = document.querySelectorAll("input[type='radio']");
const customRadio = document.querySelectorAll(".choice-size label");

size.forEach((item) => {
  item.addEventListener("click", () => {
    size.forEach((item) => {
      item.checked = false;
    });
    item.checked = true;
    customRadio.forEach((item) => {
      item.classList.remove("active");
    });
    item.parentElement.classList.add("active");
  });
});

//animation button
const button = document.querySelector(".quanlity button");

setInterval(() => {
  button.classList.toggle("animation-button");
}, 5000);

//quanlity product
const minus = document.querySelector(".quanlity i:nth-child(1)");
const plus = document.querySelector(".quanlity i:nth-last-child(1)");
const quantity = document.querySelector(".quanlity p");
const cardBtn = document.querySelector(".quanlity button");
const quanlityCard = document.querySelector(
  ".header-actions .cirle-img:nth-child(1) div span"
);
const quanlityCardCount = document.querySelector(".quanlity-card");
let count = 0;

minus.addEventListener("click", () => {
  quantity.textContent = Number(quantity.textContent) - 1;
});
plus.addEventListener("click", () => {
  quantity.textContent = Number(quantity.textContent) + 1;
});

cardBtn.addEventListener("click", () => {
  quanlityCardCount.classList.add("zoom");
  setTimeout(() => {
    quanlityCardCount.classList.remove("zoom");
  }, 3000);
  quanlityCard.textContent =
    Number(quanlityCard.textContent) + Number(quantity.textContent);
});

// active overview
const overviewLabel = document.querySelectorAll(".overview-label p");
const overviewContent = document.querySelectorAll(".overview-content .content");

overviewLabel.forEach((item) => {
  item.addEventListener("click", () => {
    overviewContent.forEach((i) => {
      if (i.getAttribute("name") !== item.getAttribute("name")) {
        i.classList.add("hide-content");
        i.classList.remove("active-content");
      } else {
        i.classList.remove("hide-content");
        i.classList.add("active-content");
      }
    });
    overviewLabel.forEach((item) => {
      item.classList.remove("active-label");
    });
    item.classList.add("active-label");
  });
});

// active like
const activeLike = document.querySelectorAll(".like");

activeLike.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active-like");
  });
});

//  add product to showall
const showAll = document.querySelector(".show-all");
const content = document.querySelector("input[id='title']");
const textarea = document.querySelector("textarea[id='content']");
const btn = document.querySelector("button[type='submit']");

btn.addEventListener("click", () => {
  showAll.innerHTML += `
    <div class="review-card">
                    <div class="avatar">A.T</div>
                    <div class="review-content">
                      <div class="user-info">
                        <span class="username">Nicolas Cage</span>
                        <span class="time">3 Days ago</span>
                      </div>
                      <div class="rating">★★★★★</div>
                      <h4 class="review-title">${content.value}</h4>
                      <p class="navigation">
                        ${textarea.value}
                      </p>
                      <div class="actions">
                        <span class="like"
                          ><span class="material-symbols-outlined">
                            thumb_up
                          </span>
                          Like</span
                        >
                        <span class="reply">Replay</span>
                      </div>
                    </div>
                  </div>
  `;
});

// slide show reletated product
const slideWrapperRelated = document.querySelectorAll(".slide");
const prevBtnRelated = document.querySelector(".arrow:first-child");
const nextBtnRelated = document.querySelector(".arrow:last-child");
const totalSlidesRelated = slideWrapperRelated.length;
let currentIndexRelated = 0;
let visibleSlidesRelated = 6;
window.addEventListener("resize", () => {
  visibleSlidesRelated = Math.floor(
    document.querySelector(".slide-releated").offsetWidth / 220
  );
});

function updateSlidePositionRelated() {
  slideWrapperRelated.forEach((img, index) => {
    img.style.transform = `translateX(-${
      currentIndexRelated * (slideWrapperRelated[0].offsetWidth + 10)
    }px)`;
  });
}

nextBtnRelated.addEventListener("click", () => {
  if (currentIndexRelated < totalSlidesRelated - visibleSlidesRelated) {
    console.log(currentIndexRelated, totalSlidesRelated, visibleSlidesRelated);
    currentIndexRelated++;
    updateSlidePositionRelated();
  }
});
prevBtnRelated.addEventListener("click", () => {
  if (currentIndexRelated > 0) {
    currentIndexRelated--;
    updateSlidePositionRelated();
  }
});
