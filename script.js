const header = document.querySelector(".header");
const burger = document.querySelector(".burger");


burger.addEventListener("click", () => {
    header.classList.toggle("mobile-header");
    if (header.classList.contains("mobile-header")) {
        document.body.classList.add("no-scroll");
    } else {
        document.body.classList.remove("no-scroll");
    }
})


// ---------------------------------contact-list------------------------------------

const contactsList = document.querySelector(".contacts-list");
const btn = document.querySelector(".header .btn");

btn.addEventListener("click", () => {
    console.log(contactsList);
    contactsList.classList.toggle("active");
})

// ----------------------------------accordion--------------------------------------
let coll = document.getElementsByClassName("collapsible");


for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;

    if(this.classList.contains('active')) {
        this.parentNode.style.backgroundColor = "#35B5C2";
        content.style.maxHeight = content.scrollHeight + "px";
    } else{
        this.parentNode.style.backgroundColor = "#F9F9F9";
        content.style.maxHeight = null;
    }
  });
}



  // ----------------------------------card-img---------------------------------------
 const cardBigImg = document.querySelector(".card-big-img img");
//  console.log(cardBigImg); 
 const cardSlider = document.querySelectorAll(".card-slider img");
//  console.log(cardSlider);

 cardSlider.forEach(item => {
    item.addEventListener("click", () => {
        cardBigImg.src = item.src;
        cardBigImg.classList.add("active");
    })
 })