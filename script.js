const header = document.querySelector("header");
const stickyOffset = header.offsetTop;

function handleScroll() {
  if (window.pageYOffset > stickyOffset) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

window.addEventListener('scroll', handleScroll);
