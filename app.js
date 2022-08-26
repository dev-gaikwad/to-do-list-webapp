const inputItem = document.querySelector("#item-input");
const addItemBtn = document.querySelector("#add-item-btn");
const clearListBtn = document.querySelector("#clear-list-btn");

var itemList = []

addItemBtn.addEventListener("click", addItemClickHandler);
clearListBtn.addEventListener("click", clearListClickHandler);
displayList( itemList );

function addItemClickHandler(){
    const userInput = inputItem.value ;

    if (userInput === ""){
        alert("Task cannot be empty!");
    
    }
    inputItem.value = "";
    addTask( userInput );
    
}

function addTask ( newItem ){
    itemList.push( newItem );
    localStorage.setItem("task", newItem);

    let node = document.createElement("li");
    node.innerHTML = `<input class="checkbox" type="checkbox">`
    var textNode = document.createTextNode(newItem);
    node.appendChild(textNode);
    console.log(node);
    document.getElementById("output-list").appendChild(node);


}

function displayList( itemList ){
    const outputList = document.getElementById("output-list");

}

function clearListClickHandler(){
    localStorage.clear();
    console.log("List Cleared!");
}