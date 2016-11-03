<script>
window.onload = function(){
	document.getElementById("xti").onclick = ligar;
}

function ligar(){
	document.getElementById("xti").src = "img/xlamp_on.png";
	setTimeout("desligar()",3000);
}
function desligar(){
	document.getElementById("xti").src = "img/xlamp_off.png";
}
</scrip>