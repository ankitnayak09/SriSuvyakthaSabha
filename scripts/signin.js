const modalSignIn = document.querySelector(".sign-in");
const modalSignUp = document.querySelector(".sign-up");

document.querySelector(".btn-signUp").addEventListener("click", function () {
	modalSignIn.style.display = "none";
	modalSignUp.style.display = "flex";
});

document.querySelector(".btn-signIn").addEventListener("click", function () {
	modalSignIn.style.display = "flex";
	modalSignUp.style.display = "none";
});

const vedas = document.querySelectorAll('input[name="veda"]');
const details = document.querySelector(".custom-select");

vedas.forEach((option) => {
	option.addEventListener("click", () => {
		if (option.getAttribute("id") != "default")
			details.removeAttribute("open");
	});
});

// Toggle Password
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
	// toggle the type attribute
	const type = password.getAttribute("type") === "password" ? "text" : "password";
	password.setAttribute("type", type);

	// toggle the icon
	this.classList.toggle("bi-eye");
});

