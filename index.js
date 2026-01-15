console.log("Завдання 1");

const listEl = document.getElementById("categories")
const items = listEl.children
const totalItems = items.length
console.log(`у списку ${totalItems} категорії`);

const mItems = [...items]

mItems.forEach((item) =>{
    const titleEl = item.querySelector("h2").textContent
    const listEl = item.querySelector("ul").children.length
console.log(`Категорія: ${titleEl}
Кількість: ${listEl}`);
})

console.log("Завдання 2");

const listRef = document.getElementById("ingredients")

const ingredients = [
 'Картопля',
 'Гриби',
 'Часник',
 'Помідори',
 'Зелень',
 'Приправи',
];

const item = ingredients.map((item) =>{
    const itemEl = document.createElement("li")
    itemEl.textContent = item
    return itemEl
})
listRef.append(...item)
console.log(listRef);

console.log("Завдання 3");

const listGallery = document.getElementById("gallery")

const images = [
 {
  url:
   'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'White and Black Long Fur Cat',
 },
 {
  url:
   'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
 },
 {
  url:
   'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Group of Horses Running',
 },
];

listGallery.classList.add("list")
const galleryItem = images.map((item) => {
    return `<li><img src = "${item.url}" alt = "${item.alt}" width = "200"></li>`
}).join("")

listGallery.insertAdjacentHTML("afterbegin", galleryItem)

console.log(galleryItem);

console.log("Завдання 4");

const buttonMin = document.querySelector("button[data-action='decrement']")
console.log(buttonMin);
const buttonPlus = document.querySelector("button[data-action='increment']")
console.log(buttonPlus);
const spanEl = document.getElementById("value")

let count = 0
buttonMin.addEventListener("click",()=>{
 count += 1
 spanEl.textContent = count

})
buttonPlus.addEventListener("click",()=>{
count -=1
spanEl.textContent = count
})








