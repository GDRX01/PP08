// SLIDER

const images = document.querySelectorAll('.slider__img');
const dots = document.querySelectorAll('.slider__line');
let currentSlide = 0;

function showSlide(n) {
  images.forEach(img => img.classList.remove('slider__img--active'));
  dots.forEach(dot => dot.classList.remove('slider__line--active'));

  images[n].classList.add('slider__img--active');
  dots[n].classList.add('slider__line--active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % images.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3600);

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

// SHOW PASSWORD

document.querySelectorAll('.password__field').forEach(field => {
  const input = field.querySelector('input[type="password"]')
  const button = field.querySelector('.btn_password')
  const icon = button.querySelector('img')

  const iconClose = '../icons/sign-eye-close.svg'
  const iconOpen = '../icons/sign-eye-open.svg'

  button.addEventListener('click', () => {
    const isHidden = input.type === 'password'
    input.type = isHidden ? 'text' : 'password'
    icon.src = isHidden ? iconOpen : iconClose
  })
})
