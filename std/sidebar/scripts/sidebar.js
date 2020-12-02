(function sidebar() {
  let key = "sidebar-open";
  let el = document.getElementById("sidebar");
  if (el && sessionStorage) {
    el.checked = sessionStorage.getItem(key);
    el.addEventListener("change", (e) => {
      sessionStorage.setItem(key, e.currentTarget.checked ? "open" : "");
    });
  }
})();
