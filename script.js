class Hover {
    constructor(option) {
      this.el = document.querySelector(option.el);
      this.el.style.transition = "0.3s"; // Плавность движения кнопки
      this.el.addEventListener("mouseover", () => this.move());
    }
  
    random(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  
    move() {
        this.el.style.marginLeft =
        this.random(0, innerWidth - this.el.clientWidth - 100) + "px";
      this.el.style.marginTop =
        this.random(0, innerHeight - this.el.clientHeight - 100) + "px";
    }
  }
  
  const hoverEl = new Hover({
    el: ".btn__no",
  });

  document.querySelector('.btn__yes').addEventListener('click', () => {
    // Показываем контейнер с изображением
    document.querySelector('.image-container').style.display = 'block';
    document.querySelector('.main__text').style.display = "none"
    document.querySelector(".btn__yes").style.display = "none"
    document.querySelector(".btn__no").style.display = "none"
  });
  
  