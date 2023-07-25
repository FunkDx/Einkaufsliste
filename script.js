var enterButton = document.getElementById("enter");
var input = document.getElementById("benutzerInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function erstellenEintrag() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    li.addEventListener("click", abgehaktEintrag);
function abgehaktEintrag() {
    li.classList.toggle("done");
    var löschenBtn = document.createElement("button");
    löschenBtn.appendChild(document.createTextNode("X"));
    li.appendChild(löschenBtn);
function löschenEintrag() {
        li.classList.add("delete");
        löschenBtn.addEventListener("click", löschenEintrag);
    }
}
}

enterButton.addEventListener("click", erstellenEintrag)




