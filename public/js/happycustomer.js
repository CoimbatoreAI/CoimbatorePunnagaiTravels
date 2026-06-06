document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("image-modal");
    let modalImg = document.getElementById("modal-image");
    let closeModal = document.getElementById("close-modal");

    document.querySelectorAll(".gallery-wrapper > div > img").forEach((img) => {
      img.addEventListener("click", function () {
        modal.style.display = "none";
        modalImg.src = this.src;
      });
    });

    closeModal.addEventListener("click", function () {
      modal.style.display = "none";
    });
  });

  // modal.style.display = "block";