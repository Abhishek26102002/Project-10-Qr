const divimg =document.getElementById("divimg");
const qrimg =document.getElementById("qrimg");
const inputid =document.getElementById("inputid");

function generateqr(){
    qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ inputid.value;
    // qrimg.classList.add("show-img");
    divimg.style.display="block";
}

inputid.addEventListener("keydown", function(event) {
    // Check if the Enter key is pressed
    if (event.key === "Enter") {
        generateqr(); // Call the function
    }
});
