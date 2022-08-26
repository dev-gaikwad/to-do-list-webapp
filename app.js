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
        return false;
    }
    inputItem.value = "";
    addTask( userInput );
    
}

function addTask ( newItem ){
    itemList.push( newItem );
    localStorage.setItem("task", newItem);

    let node = document.createElement("li");
    node.innerHTML = `<label><input type="checkbox" class="checkbox"><span>${newItem}</span></label>`
    // var textNode = document.createTextNode(newItem);
    // node.appendChild(textNode);
    document.getElementById("output-list").appendChild(node);


}

function displayList( itemList ){
    const outputList = document.getElementById("output-list");

}

function clearListClickHandler(){
    localStorage.clear();
    console.log("List Cleared!");
}