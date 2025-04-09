const styles = document.getElementById("styles");
const toogleStyle_Btn = document.getElementById("toogleStyle_Btn");

let tgl = 2;
const tglFunc = () => {
  const overlay = document.getElementById("flash-overlay");

  // 1. Show the flash
  overlay.style.opacity = "1";

  // 2. After a short delay, hide it and switch style
  setTimeout(() => {
    overlay.style.opacity = "0";

    if (tgl == 2) {
      styles.setAttribute("href", "styles2.css");
      tgl = 3;
      console.log(tgl);
    } else if (tgl == 1) {
      styles.setAttribute("href", "styles1.css");
      tgl = 2;
      console.log(tgl);
    } else if (tgl == 3) {
      styles.setAttribute("href", "styles3.css");
      tgl = 4;
      console.log(tgl);
    } else if (tgl == 4) {
      styles.setAttribute("href", "styles4.css");
      tgl = 1;
      console.log(tgl);
    }
  }, 150);
};

toogleStyle_Btn.addEventListener("click", tglFunc);

const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
