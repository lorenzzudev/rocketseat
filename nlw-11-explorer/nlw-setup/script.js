const form = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(form);
const button = document.querySelector("header button");

button.addEventListener("click", add);
form.addEventListener("change", save);

function add() {
  const today = new Date().toLocaleDateString("pt-PT").slice(0, 5);

  const dayExists = nlwSetup.dayExists(today);

  if (dayExists) {
    alert("Day Already Exists ❌");
    return;
  }

  alert("Day added ✔️");
  nlwSetup.addDay("20/01");
}

function save() {
  localStorage.setItem("NLWSetup@Habits", JSON.stringify(nlwSetup.data));
}

const data = JSON.parse(localStorage.getItem("NLWSetup@Habits")) || {};
nlwSetup.setData(data);
nlwSetup.load();
