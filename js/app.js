// CODE EXPLAINED channel
const clear = document.querySelector(".clear");
const daeElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

const options ={weekday : "long", month : "short", day : "nurmeric"}
const today = newDate();

dateElemennt.innerHTML = today.toLocaleDateString("en-US", options);

function addTodo(toDo,id,done,trash){
    const item = `<li class="item">
    <i class="fa fa-check-circle co" job="complete" id="0"></i>
    <p class="text lineThrough">${toDo}</p>
    <i class="fa fa-trash-o de" job="delete" id="0"></i></li>
    `;
    const position = "beforeend";
    list.insertAdjacentElement(position,item);
}
document.addEventListener("keyup",function(event){
    if(event.keyCode == 13){
        const toDo = input.nodeValue;
    if(toDo){
        addTodo(toDo);
    }
    input.nodeValue;
    }
})