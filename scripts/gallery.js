// Gallery Page
const btn_photo = document.querySelector(".photo-btn");
const btn_vdo = document.querySelector(".vdo-btn");
const photo_items = document.querySelector(".gallery__items__photos");
const vdo__items = document.querySelector(".gallery__items__vdo");

btn_photo.addEventListener("click", function () {
	btn_vdo.classList.remove("active");
	btn_photo.classList.add("active");
	vdo__items.style.display = "none";
	photo_items.style.display = "flex";
});

btn_vdo.addEventListener("click", function () {
	btn_photo.classList.remove("active");
	btn_vdo.classList.add("active");
	photo_items.style.display = "none";
	vdo__items.style.display = "flex";
});

// Video play on Hover
const vdos = document.querySelectorAll('.vdo_items iframe');

// vdos.forEach( (vdo) => {
// 	vdo.addEventListener('mouseover', () => {
// 		vdo = vdo.src += '?autoplay=1';
// 	})
// })

