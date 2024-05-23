document
  .getElementById("dark-mode-toggle")
  .addEventListener("change", function () {
    if (this.checked) {
      document.body.classList.add("light-mode");
      document.getElementById("dark-mode-text").innerText = "Dark Mode";
    } else {
      document.body.classList.remove("light-mode");
      document.getElementById("dark-mode-text").innerText = "Light Mode";
    }
  });
