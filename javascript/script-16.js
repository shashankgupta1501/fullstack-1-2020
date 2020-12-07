const subBtn = document.querySelector("form button");
const ul=document.querySelector("ul");

subBtn.onclick=createListItem;
ul.onclick=action;

function createListItem(e) {
    e.preventDefault();
    let div=document.createElement("div");
    let text=document.querySelector("input").value;
    if (text.length<1) {alert("null string can not accepted.")}
    else {
        div.innerHTML='<li class="list-item">'+document.querySelector("input").value+'</li><button id="check-btn"><i class="fa fa-check"></i></button><button id="trash-btn"><i class="fa fa-trash"></i></button>';
        document.querySelector("input").value=null;
        document.querySelector("ul").appendChild(div);
    } 
}
function action(e) {
    if (e.target.id=="check-btn") {
        e.target.parentElement.classList.toggle("checked");
    }
    else if (e.target.id=="trash-btn") {
        e.target.parentElement.remove();
    }
}