let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");
function opentab(tabName) {
  for (tablink of tabLinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabContents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}
let sideMenu = document.getElementById("sidemenu");

function openmenu(){
  sideMenu.style.right = "0"
}
function closemenu() {
  sideMenu.style.right = "-200px"
}