// The following code block is intended to act as the underlying logic for an interactive,
// scrollable menu of plants for the user to choose from once they click the button within
// their Greenhouse to "Add a plant". A menu should extend from the button when clicked, 
//be scrollable with all of the plants that we have available, and close once the user has clicked
// the plant they wish to add.

// This should also provide logic to the "Add a plant" button itself for the user to click

// I have also added logic to create a "Remove plant" button for the user to click when a plant exists,
// and resets the condition of the list item in the Greenhouse back to the "Add a plant" state and deletes
// the "Remove plant" button

// Much of this is currently (as of 03/06/2024) placeholder code and will need to be adjusted
// to actually interact with the rest of our codebase

document.addEventListener('DOMContentLoaded', function() {
    // Select the highlightable button
    const addButton = document.getElementById('add-plant-button');

    // Select the scrollable menu
    const menu = document.getElementById('plant-menu');

    // Add click event listener to the highlightable button
    addButton.addEventListener('click', function() {
        // Toggle the visibility of the scrollable menu
        menu.classList.toggle('show');
    });

    // Add click event listener to each plant option in the menu
    const plantOptions = document.querySelectorAll('.plant-option');
    plantOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            // Get the selected plant's information
            const plantId = option.dataset.plantId;
            const plantName = option.textContent;

            // Close the scrollable menu
            menu.classList.remove('show');

            // Perform the action to add the selected plant to the greenhouse
            addPlantToGreenhouse(plantId, plantName);
        });
    });

    // Add click event listener to each remove plant button
    const removePlantButtons = document.querySelectorAll('.remove-plant-button');
    removePlantButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Find the parent plant slot
            const plantSlot = button.closest('.plant-slot');
            
            // Reset the plant slot to have the "Add a plant" button
            plantSlot.innerHTML = '<button class="add-plant-button">Add a Plant</button>';

            // Perform any additional actions (e.g., removing the plant from the database)
            removePlantFromGreenhouse(plantSlot);
        });
    });

    // Function to add the selected plant to the greenhouse
    function addPlantToGreenhouse(plantId, plantName) {
        // Here you would implement the logic to send a request to the server
        // to add the selected plant to the user's greenhouse
        console.log(`Adding plant ${plantName} with ID ${plantId} to the greenhouse`);
    }

    // Function to remove the plant from the greenhouse
    function removePlantFromGreenhouse(plantSlot) {
        // Here you would implement the logic to send a request to the server
        // to remove the plant from the user's greenhouse
        console.log('Removing plant from the greenhouse');
    }
});
