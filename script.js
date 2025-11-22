const photo = document.getElementById('profilePhoto');
const aboutModal = document.getElementById('aboutModal');
if (photo) photo.onclick = () => aboutModal.style.display = 'flex';
if (aboutModal) aboutModal.querySelector('.close').onclick = () => aboutModal.style.display = 'none';

const form = document.getElementById('contactForm');
const confirmModal = document.getElementById('confirmModal');
if (form) {
  form.onsubmit = e => {
    e.preventDefault();
    confirmModal.style.display = 'flex';
  };
  document.getElementById('confirmYes').onclick = () => {
    confirmModal.style.display = 'none';
    alert('Form submitted!');
  };
  document.getElementById('confirmNo').onclick = () => confirmModal.style.display = 'none';
}
