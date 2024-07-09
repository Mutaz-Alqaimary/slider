let images = Array.from(document.querySelectorAll(".images-container img"));
let slideNumber = document.querySelector(".images-container .slide-number");
let bulletsContainer = document.querySelector(".pagination-container .bullets");
let preButton = document.querySelector(".pagination-container .pre");
let nextButton = document.querySelector(".pagination-container .next");

let numOfSlides = images.length;

let currentSlide = 1;

let list = document.createElement("ul");
bulletsContainer.appendChild(list);

for (let i = 1; i <= numOfSlides; i++) {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(i));
  li.id = i;
  list.appendChild(li);
}

let bullets = Array.from(document.querySelectorAll("ul li"));

theChecker();

preButton.onclick = function prePage() {
  if (!this.classList.contains("disabled")) {
    currentSlide--;
    theChecker();
  }
};

nextButton.onclick = function nextPage() {
  if (!this.classList.contains("disabled")) {
    currentSlide++;
    theChecker();
  }
};

bullets.forEach((e) => {
  e.onclick = function () {
    currentSlide = parseInt(this.getAttribute("id"));
    theChecker();
  };
});

function theChecker() {
  slideNumber.textContent = `Slide #${currentSlide}`;

  removeAllActive();

  bullets[currentSlide - 1].classList.add("active");

  images[currentSlide - 1].classList.add("active");

  if (currentSlide === 1) {
    preButton.classList.add("disabled");
  } else {
    preButton.classList.remove("disabled");
  }

  if (currentSlide === numOfSlides) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

function removeAllActive() {
  bullets.forEach((e) => {
    e.classList.remove("active");
  });

  images.forEach((e) => {
    e.classList.remove("active");
  });
}
