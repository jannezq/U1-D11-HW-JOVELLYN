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

function seeImgs() {
  let imgNodes = document.getElementsByClassName("hideImg");
  if (imgNodes.style.visibility === "visible") {
    imgNodes.style.visibility = "hidden";
  } else {
    imgNodes.style.visibility = "visible";
  }

  //   for (let i = 0; i < imgNodes.length; i++) {
  //     let imgNodes = imgNodes[i]

  //     imgNodes.classList.toggle('tableImg')

  /*if (imgNodes.style.visibility === "visible") {
    imgNodes.style.visibility = "hidden";
  } else {
    imgNodes.style.visibility = "visible";
  }*/
}
const seeImgss = function () {
  let imgNodes = document.getElementsByClassName("hideImg");
  imgNodes.classList.toggle("hidden");
};

function openLink1() {
  window.open(
    "https://www.amazon.co.uk/Apple-AirPods-Pro-2nd-generation/dp/B0BDJ37NF5?ref_=Oct_d_onr_d_560820&pd_rd_w=4Xdqm&content-id=amzn1.sym.df8f0dfe-37b1-4594-bbec-6b79ff430341&pf_rd_p=df8f0dfe-37b1-4594-bbec-6b79ff430341&pf_rd_r=QWMAX4YS4WBDZG7KYN56&pd_rd_wg=zlD9p&pd_rd_r=1db1803c-b2f8-4cc8-9137-08b040c55faf&pd_rd_i=B0BDJ37NF5"
  );
}
function openLink2() {
  window.open(
    "https://www.amazon.co.uk/Sony-WH-CH710N-Cancelling-Headphones-Assistant-Black/dp/B086LLYK4S?ref_=Oct_d_omwf_d_560820&pd_rd_w=NYrUl&content-id=amzn1.sym.11754b59-9e76-41e6-af29-c04f39ce138f&pf_rd_p=11754b59-9e76-41e6-af29-c04f39ce138f&pf_rd_r=QWMAX4YS4WBDZG7KYN56&pd_rd_wg=zlD9p&pd_rd_r=1db1803c-b2f8-4cc8-9137-08b040c55faf&pd_rd_i=B086LLYK4S&th=1"
  );
}
function openLink3() {
  window.open(
    "https://www.amazon.co.uk/Anker-Wireless-PowerWave-Upgraded-Fast-Charging-Black/dp/B07THHQMHM/ref=zg_mg_560820_sccl_15/261-1917735-1151446?psc=1"
  );
}
function openLink4() {
  window.open(
    "https://www.amazon.co.uk/dp/B07XLM7VR9/ref=sspa_dk_detail_0?psc=1&pf_rd_p=ef1fde52-be52-4827-9cf1-c31c9758a641&pf_rd_r=MC6X8T677VEJE4QZAZYJ&pd_rd_wg=HmoU6&pd_rd_w=uRTeS&content-id=amzn1.sym.ef1fde52-be52-4827-9cf1-c31c9758a641&pd_rd_r=a5204c54-8357-4a75-b212-1335f12bab04&s=officeproduct&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExVERHMzA3UkNBVTZIJmVuY3J5cHRlZElkPUEwNzA3NDg4UjROSzQwV0hNVEpaJmVuY3J5cHRlZEFkSWQ9QTAzMDcxNDgyRlZFSE81NjYyMEQwJndpZGdldE5hbWU9c3BfZGV0YWlsX3RoZW1hdGljJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="
  );
}
function openLink5() {
  window.open(
    "hhttps://www.amazon.co.uk/dp/B07XLM7VR9/ref=sspa_dk_detail_0?psc=1&pf_rd_p=ef1fde52-be52-4827-9cf1-c31c9758a641&pf_rd_r=MC6X8T677VEJE4QZAZYJ&pd_rd_wg=HmoU6&pd_rd_w=uRTeS&content-id=amzn1.sym.ef1fde52-be52-4827-9cf1-c31c9758a641&pd_rd_r=a5204c54-8357-4a75-b212-1335f12bab04&s=officeproduct&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExVERHMzA3UkNBVTZIJmVuY3J5cHRlZElkPUEwNzA3NDg4UjROSzQwV0hNVEpaJmVuY3J5cHRlZEFkSWQ9QTAzMDcxNDgyRlZFSE81NjYyMEQwJndpZGdldE5hbWU9c3BfZGV0YWlsX3RoZW1hdGljJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="
  );
}

function textMessage() {}
