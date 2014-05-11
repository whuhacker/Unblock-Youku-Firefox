var player = document.getElementById("player");
var innerContent = player.innerHTML.replace("tvcCode=5001", "tvcCode=-1");
player.innerHTML = '';
player.innerHTML = innerContent;