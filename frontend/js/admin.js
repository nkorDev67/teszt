const modal = document.getElementById("workerModal");
const openModalBtn = document.getElementById("addWorkerbtn");
const closeModalBtn = document.getElementById("closeWorkerbtn");

openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";

});
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

document.getElementById("saveWorkerbtn").addEventListener("click", () => {
  const email = document.getElementById("workerEmail").value;

  if (!email) {
    alert("Adj meg egy email címet!");
    return;
  }

  console.log("Szakember hozzáadása:", email);

  modal.style.display = "none";
});
