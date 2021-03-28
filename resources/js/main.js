const kontaktBtn = document.getElementById("kontakt-btn")
const kontaktExitIcon = document.getElementById("kontakt-modal-exit-icon")
const kontaktModalBackdrop = document.getElementById("kontakt-modal-backdrop");

function toggleKontaktModal () {
  const emailContent = document.getElementById("email-content");
  if (emailContent.innerHTML === "") {
    const email =  "morten@mortenthomsen.dk";
    emailContent.innerHTML = email;
    const sendEmailLogo = document.getElementById("email-logo");
    sendEmailLogo.href = "mailto: " + email;
  }
  const modal = document.getElementById("kontakt-modal");
  const backdrop = kontaktModalBackdrop
  modal.classList.toggle("pseudo-hidden");
  if (backdrop.classList.contains("hidden")) {
    backdrop.classList.toggle("hidden");
    backdrop.classList.toggle("pseudo-hidden");
  } else {
    backdrop.classList.toggle("pseudo-hidden");
    setTimeout(() => {
      backdrop.classList.toggle("hidden");
    }, 500);
  }
}

kontaktBtn.addEventListener("click", toggleKontaktModal);
kontaktExitIcon.addEventListener("click", toggleKontaktModal);
kontaktModalBackdrop.addEventListener("click", toggleKontaktModal);

const cvBtn = document.getElementById("cv-btn");
const cvModalExitIcon = document.getElementById("cv-modal-exit-icon");
const cvModalBackdrop = document.getElementById("cv-modal-backdrop");

function toggleCvModal () {
  const modal = document.getElementById("cv-modal");
  const backdrop = cvModalBackdrop
  modal.classList.toggle("pseudo-hidden");
  if (backdrop.classList.contains("hidden")) {
    backdrop.classList.toggle("hidden");
    backdrop.classList.toggle("pseudo-hidden");
  } else {
    backdrop.classList.toggle("pseudo-hidden");
    setTimeout(() => {
      backdrop.classList.toggle("hidden");
    }, 500);
  }
}

cvBtn.addEventListener("click", toggleCvModal);
cvModalExitIcon.addEventListener("click", toggleCvModal);
cvModalBackdrop.addEventListener("click", toggleCvModal);

const cvPreviewImage = document.getElementById("cv-preview-image");

cvPreviewImage.addEventListener("click", () => {
  window.open("data/CV2021_MRT_preview.png");
});