function headfix(e) {
  const temp = document.getElementById("headid");

  temp.style.position = "fixed";
  temp.style.width = "100%";
}

const temp1 = document.getElementById("headid");
console.log(temp1.getAttribute("class"));

function keyclk(e) {
  const destiny = e.parentNode.parentNode.firstElementChild;
  if (
    destiny.getAttribute("data-custom-attribute") ===
    e.childNodes[1].getAttribute("data-custom-attribute")
  ) {
    console.log(e.parentNode.parentNode.childNodes[5]);
    e.parentNode.parentNode.childNodes[5].style.display = "block";
    e.parentNode.parentNode.childNodes[7].style.display = "none";
  } else {
    alert("Answer is false! Research more");
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
    console.log(e.parentNode.parentNode.childNodes[5]);
    e.parentNode.parentNode.childNodes[5].style.display = "block";
    e.parentNode.parentNode.childNodes[7].style.display = "none";
  } else {
    alert("Answer is false! Research more");
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
    console.log(e.parentNode.parentNode.childNodes[5]);
    e.parentNode.parentNode.childNodes[5].style.display = "block";
    e.parentNode.parentNode.childNodes[7].style.display = "none";
  } else {
    alert("Answer is false! Research more");
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
    console.log(e.parentNode.parentNode.childNodes[5]);
    e.parentNode.parentNode.childNodes[5].style.display = "block";
    e.parentNode.parentNode.childNodes[7].style.display = "none";
  } else {
    alert("Answer is false! Research more");
    e.parentNode.parentNode.childNodes[5].style.display = "none";
    e.parentNode.parentNode.childNodes[7].style.display = "block";
  }
}
