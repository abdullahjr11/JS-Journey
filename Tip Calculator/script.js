const btnEl = document.getElementById("calculate");
const totalbill = document.getElementById("total");
const totalTip = document.getElementById("totalTip");

function calculateTotal() {
  console.log("Button clicked!"); 
  const bill = Number(document.getElementById("bill").value);
  const tip = Number(document.getElementById("tip").value);

  const total = bill * (1 + tip / 100);
  totalbill.innerText = total.toFixed(1);

  const totaltip = total - bill;
  totalTip.innerText = totaltip.toFixed(1);

}

btnEl.addEventListener("click", calculateTotal);
