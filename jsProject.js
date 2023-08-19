function headfix(e) {
  const temp = document.getElementById("headid");
  const temp1 = document.getElementById("Total");
  temp1.style.position = "fixed";
  temp1.style.marginTop = "70px";
  temp1.style.width = "100%";
  temp.style.position = "fixed";
  temp.style.width = "100%";
}
const num = { number: 0 };

function keyclk(e) {
  const destiny = e.parentNode.parentNode.firstElementChild;
  if (
    destiny.getAttribute("data-custom-attribute") ===
    e.childNodes[1].getAttribute("data-custom-attribute")
  ) {
    const mainnum = num;
    mainnum.number += 5;
    const totaltemp = document.getElementById("Total");
    totaltemp.innerHTML = "Total Number:" + mainnum.number;
    e.parentNode.classList.add("disabled");
    totaltemp.style.textAlign = "center";
    e.parentNode.parentNode.childNodes[5].style.display = "block";
    e.parentNode.parentNode.childNodes[7].style.display = "none";
  } else {
    alert("Answer is false! Research more");
    const mainnum = num;
    mainnum.number -= 5;
    const totaltemp = document.getElementById("Total");
    totaltemp.innerHTML = "Total Number:" + mainnum.number;
    e.parentNode.classList.add("disabled");
    totaltemp.style.textAlign = "center";
    e.parentNode.parentNode.childNodes[5].style.display = "none";
    e.parentNode.parentNode.childNodes[7].style.display = "block";
  }
}
function hammerclk(e) {
  const destiny = e.parentNode.parentNode.firstElementChild;
  if (
    destiny.getAttribute("data-custom-attribute") ===
    e.childNodes[1].getAttribute("data-custom-attribute")
  ) {
    const mainnum = num;
    mainnum.number += 5;
    const totaltemp = document.getElementById("Total");
    totaltemp.innerHTML = "Total Number:" + mainnum.number;
    e.parentNode.classList.add("disabled");
    totaltemp.style.textAlign = "center";
    e.parentNode.parentNode.childNodes[5].style.display = "block";
    e.parentNode.parentNode.childNodes[7].style.display = "none";
  } else {
    alert("Answer is false! Research more");
    const mainnum = num;
    mainnum.number -= 5;
    const totaltemp = document.getElementById("Total");
    totaltemp.innerHTML = "Total Number:" + mainnum.number;
    e.parentNode.classList.add("disabled");
    totaltemp.style.textAlign = "center";
    e.parentNode.parentNode.childNodes[5].style.display = "none";
    e.parentNode.parentNode.childNodes[7].style.display = "block";
  }
}
function passwordclk(e) {
  const destiny = e.parentNode.parentNode.firstElementChild;
  if (
    destiny.getAttribute("data-custom-attribute") ===
    e.childNodes[1].getAttribute("data-custom-attribute")
  ) {
    const mainnum = num;
    mainnum.number += 5;
    const totaltemp = document.getElementById("Total");
    totaltemp.innerHTML = "Total Number:" + mainnum.number;
    e.parentNode.classList.add("disabled");
    totaltemp.style.textAlign = "center";
    e.parentNode.parentNode.childNodes[5].style.display = "block";
    e.parentNode.parentNode.childNodes[7].style.display = "none";
  } else {
    alert("Answer is false! Research more");
    const mainnum = num;
    mainnum.number -= 5;
    const totaltemp = document.getElementById("Total");
    totaltemp.innerHTML = "Total Number:" + mainnum.number;
    e.parentNode.classList.add("disabled");
    totaltemp.style.textAlign = "center";
    e.parentNode.parentNode.childNodes[5].style.display = "none";
    e.parentNode.parentNode.childNodes[7].style.display = "block";
  }
}
function screwclk(e) {
  const destiny = e.parentNode.parentNode.firstElementChild;
  if (
    destiny.getAttribute("data-custom-attribute") ===
    e.childNodes[1].getAttribute("data-custom-attribute")
  ) {
    const mainnum = num;
    mainnum.number += 5;
    const totaltemp = document.getElementById("Total");
    totaltemp.innerHTML = "Total Number:" + mainnum.number;
    e.parentNode.classList.add("disabled");
    totaltemp.style.textAlign = "center";
    e.parentNode.parentNode.childNodes[5].style.display = "block";
    e.parentNode.parentNode.childNodes[7].style.display = "none";
  } else {
    alert("Answer is false! Research more");
    const mainnum = num;
    mainnum.number -= 5;
    const totaltemp = document.getElementById("Total");
    totaltemp.innerHTML = "Total Number:" + mainnum.number;
    e.parentNode.classList.add("disabled");
    totaltemp.style.textAlign = "center";
    e.parentNode.parentNode.childNodes[5].style.display = "none";
    e.parentNode.parentNode.childNodes[7].style.display = "block";
  }
}
