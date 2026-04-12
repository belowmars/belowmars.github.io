async function loadComponent(id, file) {
  const target = document.getElementById(id);
  if (!target) return;

  try {
    const response = await fetch(file);
    if (!response.ok) {
      throw new Error(`Failed to load ${file}`);
    }

    target.innerHTML = await response.text();
    markActiveNav();
  } catch (error) {
    console.error(error);
  }
}

function markActiveNav() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (href === "/index.html" && currentPath === "/")) {
      link.classList.add("active");
    }
  });
}

loadComponent("site-header", "/components/header.html");
loadComponent("site-nav", "/components/nav.html");
loadComponent("site-footer", "/components/footer.html");