const overlay = document.getElementById("modal-overlay");
const card = document.getElementById("product-card");

const openModalBtns = document.querySelectorAll(".openModal");

const closeModalBtn = document.getElementById("closeModalBtn");
const closeModalX = document.getElementById("closeModal");
const modalImg = document.getElementById("detailsImage");
const state = document.getElementById("newState");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalDesc = document.getElementById("modalDescription");
const openModal = (e) => {
  overlay.classList.remove("hidden");
  setTimeout(() => {
    card.classList.remove("scale-95", "opacity-0");
    card.classList.add("scale-100", "opacity-100");
  }, 10);
};

openModalBtns.forEach((btn) => {
  btn.onclick = () => {
    const dataString = btn.dataset.product;
    console.log("dataString:", dataString);
    if (dataString) {
      const product = JSON.parse(dataString);

      if (product.newState) {
        console.log("es nuevo");
        state.classList.remove("hidden");
      } else {
        console.log("no es nuevo");
        state.classList.add("hidden");
      }

      if (modalImg) modalImg.src = product.img;
      if (modalTitle) modalTitle.textContent = product.title;
      if (modalSubtitle) modalSubtitle.textContent = product.subtitle;
      if (modalDesc) modalDesc.textContent = product.description;
    }

    openModal();
  };
});

const closeModal = () => {
  card.classList.remove("scale-100", "opacity-100");
  card.classList.add("scale-95", "opacity-0");
  setTimeout(() => {
    overlay.classList.add("hidden");
  }, 300);
};

if (closeModalBtn) {
  closeModalBtn.onclick = () => {
    closeModal();
  };
}

if (closeModalX) {
  closeModalX.onclick = () => {
    console.log("click close X");
    closeModal();
  };
}

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModal();
});
