function getDomRect() {
  const elem = document.querySelector(".myDiv"), // находим элемент по id
    info = document.getElementById("info"), // находим элемент по id
    domRect = elem.getBoundingClientRect(); // возвращаем объект, который содержит размеры элемента и его положение относительно видимой области просмотра

  // добавляем текстовое содержимое элементу
  console.log(domRect.right)
}
getDomRect();

