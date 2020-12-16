let elements = document.querySelectorAll('.second-item');

for (let element of elements) {
  element.addEventListener('click', function () {
    Array.from(elements).forEach(item => item.classList.remove('active'))
    element.classList.add('active')
  });
}

let fundedLineGreen = document.querySelectorAll('.fourth-col-funded-line__green');
fundedLineGreen[1].style.width = "60%";


