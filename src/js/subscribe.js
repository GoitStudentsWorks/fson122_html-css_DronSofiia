
  const form = document.querySelector(".subscribe-form");
  const modal = document.querySelector(".modal-subscription");
  const closeBtn = document.querySelector(".modal-icon-close");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    modal.style.display = "flex";
  });

  closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
  });
