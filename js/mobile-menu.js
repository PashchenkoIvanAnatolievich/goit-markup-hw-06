(() => {
    const menuRefs = {
        openMenuBtn: document.querySelector("[data-menu-open]"),
        closeMenuBtn: document.querySelector("[data-menu-close]"),
        menu: document.querySelector("[data-menu]"),
    };

    if (menuRefs.openMenuBtn && menuRefs.closeMenuBtn && menuRefs.menu) {
        menuRefs.openMenuBtn.addEventListener("click", toggleMenu);
        menuRefs.closeMenuBtn.addEventListener("click", toggleMenu);
    }

    function toggleMenu() {
        menuRefs.menu.classList.toggle("is-open");
    }
})();