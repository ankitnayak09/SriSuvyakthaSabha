const html = document.querySelector("html");
const checkBox = document.querySelector(".nav-container input");
const hamburger_icon = document.querySelector(".hamburger-lines");
checkBox.addEventListener("click", hideMenu);

function hideMenu() {
	if (checkBox.checked == true) {
		html.classList.add("overflow-y");
		document.getElementById("about").style.visibility = "hidden";
	} else {
		html.classList.remove("overflow-y");
		document.getElementById("about").style.visibility = "visible";
	}
}
