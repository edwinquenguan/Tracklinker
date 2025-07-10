/* Usuario Administrador */
const adminUser = "admin";
const adminPass = "1234";

/* Usuario Almacén */
const warehouseUser = 'almacen';
const warehousePass = '1234';

/* Usuario Tecnico */ 
const technicalUser = 'tecnico';
const technicalPass = '1234';

/* Elementos del DOM */
const form = document.getElementById("login-form");
const modalError = document.getElementById("modal-error");
const closeModalIcon = document.getElementById("close-icon");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  /* Inputs */
  const user = document.getElementById("user").value.trim();
  const pass = document.getElementById("pass").value.trim();

  if (user === adminUser && pass === adminPass) {
    window.location.href = "../pages/roles/admin/home.html";
  } else if (user === warehouseUser && pass === warehousePass){
    window.location.href = '../pages/roles/almacen/home.html';
  } else if (user === technicalUser && pass == technicalPass){
    window.location.href = '../pages/roles/tecnico/home.html';
  }else {
    showModal();
  }
});

function showModal() {
  modalError.classList.add('show-modal');
}

closeModalIcon.addEventListener("click",  () => {
  modalError.classList.remove('show-modal');
});