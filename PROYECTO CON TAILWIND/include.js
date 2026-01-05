const loadSection = (id, file) => {
  return fetch(file)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById(id).innerHTML = html;
    })
    .catch((err) => console.error(`Error cargando ${file}`, err));
};
const loadScripts = async () => {
  const contact = await import("./sections/contact/contact.js");
  const faq = await import("./sections/faq/faq.js");
  const toastScript = await import("./sections/popup/popup.js");
  const detallesScript = await import("./sections/detalles/detalles.js");
  const tokenLoader = await import("./tokenLoader.js");
  const techScript = await import("./sections/tech/tech.js");

  techScript();
  contact();
  toastScript();
  detallesScript();
  tokenLoader();
  faq();
};

(async () => {
  await Promise.all([
    loadSection("contact", "sections/contact/contact.html"),
    loadSection("faq", "sections/faq/faq.html"),
    loadSection("header", "sections/header/header.html"),
    loadSection("nav-mobile", "sections/nav/nav-mobile.html"),
    loadSection("hero", "sections/portrait/hero.html"),
    loadSection("services", "sections/services-container/services.html"),
    loadSection("support", "sections/support/support.html"),
    loadSection("tech", "sections/tech/tech.html"),
    loadSection("palabras", "sections/palabras/palabras.html"),
    loadSection("products", "sections/container-products/products.html"),
    loadSection("detalles", "sections/detalles/detalles.html"),
    loadSection("popup", "sections/popup/popup.html"),
    loadSection("paragraph", "sections/paragraph/paragraph.html"),
  ]).then(() => {});
})();
loadScripts();
