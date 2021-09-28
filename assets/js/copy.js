var modal = document.getElementById("vspl-modal");
var btn = document.getElementById("a__contacts");
var copyText = document.getElementById("copytext");

function timeout(){
	modal.style.display = "none";
}

$('#copy').click(function() {
	$(modal).fadeIn(100);
	modal.style.display = "block";
	setTimeout(timeout, 5000);

	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val($('#text').text()).select();
	document.execCommand("copy");
	$temp.remove();
});
