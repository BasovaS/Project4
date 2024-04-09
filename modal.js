var modal = document.getElementById('modal');
var btn = document.getElementById('description');
var span = document.getElementById('close');

console.log(btn);
btn.onclick = function(){
    modal.style.display="block";
}

span.onclick=function(){
    modal.style.display="none";
}

