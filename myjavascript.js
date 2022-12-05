function changeTitle(newTitle) {
  let h1Node = document.querySelector("h1");

  h1Node.innerText = newTitle;
}

function colourBackgroundChange() {
  document.getElementById("main-page").style.backgroundColor = "beige";
}

function changeAddress(newAddress) {
  let pNode = document.getElementById("address-site");
  pNode.innerText = newAddress;
}
