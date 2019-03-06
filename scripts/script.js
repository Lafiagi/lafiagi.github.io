if (document.title === "Login") {
	let container = document.querySelector("#container");
	container.style.height = "350px";

}
if (document.title === "Password Recovery") {
	document.querySelector("#container").style.maxHeight="250px";
	document.querySelector("#aligner").style.marginTop="40px";
	//container.style.maxHeight="10px";
}


function display(page) {
	if (page === 'Compose') {
		let board = document.querySelector("#left");
		board.innerHTML = "<textarea rows = 10 cols = 40 style= 'margin-top:20px;' placeholder = 'Write Your Message Here' ></textarea> <button href='#' id='sb' onclick='display('Compose') style= 'margin-top:0px;'>Send</button>"
		return
	}

	if (page === "Home") {
		window.location.href="profile.html";
		return
	}


	let board = document.querySelector("#left");
	board.innerHTML = "<br><br>This is Your " + page + " page"
}