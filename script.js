
const search = document.getElementById('searchInput');

search.addEventListener('input', function(){
let filter = search.value.toLowerCase();

document.querySelectorAll('.tool-card').forEach(card=>{
let text = card.innerText.toLowerCase();
card.style.display = text.includes(filter) ? 'block' : 'none';
});

});

const dropZone = document.getElementById("dropZone");

dropZone.addEventListener("dragover", e=>{
e.preventDefault();
dropZone.style.background="#F8E7A2";
});

dropZone.addEventListener("dragleave", ()=>{
dropZone.style.background="#fff";
});

dropZone.addEventListener("drop", e=>{
e.preventDefault();
let file = e.dataTransfer.files[0];
if(file){
dropZone.innerText = "Uploaded: " + file.name;
}
});

document.querySelectorAll(".tool-card").forEach(card=>{
card.addEventListener("click",()=>{
alert(card.innerText + " tool will open here (connect your tool logic).");
});
});
