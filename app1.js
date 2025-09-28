const wrapper = document.querySelector('.sliderwrapper');
const menuItem = document.querySelectorAll('.menuItem');

const products = [
  {
    id: 1,
    title: "LOVING KINDNESS",
    price: 263,
    colors: [
      {
        code: "lightgray",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "PEACE",
    price: 263,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "HEALTH",
    price: 263,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "red",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "SUCCESS",
    price: 262,
    colors: [
      {
        code: "lightgray",
        img: "./img/crater.png",
      },
      {
        code: "goldenrod",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "WEALTH",
    price: 261,
    colors: [
      {
        code: "lightblue",
        img: "./img/hippie.png",
      },
      {
        code: "lightgray",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector('.productImg');
const currentProductTitle = document.querySelector('.productTitle');
const currentProductPrice = document.querySelector('.productPrice');
const currentProductColors = document.querySelectorAll('.Color');
const currentProductSizes = document.querySelectorAll('.size');

menuItem.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        console.log("You Clicked" + index);
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index];

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;
        
        //assigning colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img
    })
})

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click",() => {
    currentProductSizes.forEach(size => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
})

close.addEventListener("click", () => {
  payment.style.display = "none";
})