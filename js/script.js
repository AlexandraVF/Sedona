var link = document.querySelector(".search-link");
var popup = document.querySelector(".form-search")  
function changeOpacity(){
	popup.classList.toggle("form-show");
}

  link.addEventListener("click", changeOpacity);