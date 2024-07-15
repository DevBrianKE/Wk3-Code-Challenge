// Array to store shopping list items
let shoppingListArray = [];

function renderList() {
    // Get the shopping list element from the HTML
    const shoppingList = document.getElementById("shoppingList");
    
    // Clear the list
    shoppingList.innerHTML = '';
    
    // Loop through each item in the shoppingListArray
    shoppingListArray.forEach((item, index) => {
        // Create a new list item (<li>) for each shopping list item
        const listItem = document.createElement('li');

        // Set the text content of the list item to the item's name
        listItem.textContent = item.name;
        
        // Toggle the 'completed' class based on the item's completion status
        if (item.completed) {
            listItem.classList.add('completed');
        } else {
            listItem.classList.remove('completed');
        }
        
        // Add an event listener to toggle completion when the item is clicked
        listItem.addEventListener('click', () => {
            item.completed = !item.completed; // Toggle the completion status
            renderList(); // Re-render the list to reflect the change
        });

        // Add the created list item to the shopping list
        shoppingList.appendChild(listItem);
    });
}



