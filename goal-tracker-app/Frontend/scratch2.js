function createEntry(entryType) {
    const entryBox = document.createElement("div");
    entryBox.classList.add("entry");
    entryBox.style.position = "relative"; // Ensure buttons are inside the entry box

    // Title input with label
    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title:";
    titleLabel.style.fontSize = "12px"; // Small font size to match
    titleLabel.style.fontWeight = "bold"; // Bold style like the title
    titleLabel.style.marginBottom = "5px"; // Add a little space between label and input
    const titleInput = document.createElement("input");
    titleInput.placeholder = "Enter habit title";
    titleInput.style.width = "100%";
    titleInput.style.marginBottom = "10px";

    // Description input with label
    const descLabel = document.createElement("label");
    descLabel.textContent = "Description:";
    descLabel.style.fontSize = "12px"; // Same font size as title label
    descLabel.style.fontWeight = "bold"; // Match bold style
    descLabel.style.marginBottom = "5px"; // Same margin as title label
    const descInput = document.createElement("textarea");
    descInput.placeholder = "Enter habit description";
    descInput.style.width = "100%";
    descInput.style.marginBottom = "10px";

    // Dropdown for selecting the related goal with label
    const goalLabel = document.createElement("label");
    goalLabel.textContent = "What goal does this habit support?:";
    goalLabel.style.fontSize = "12px"; // Match font size to title label
    goalLabel.style.fontWeight = "bold"; // Bold style like the title
    goalLabel.style.marginBottom = "5px"; // Same margin as other labels
    const goalDropdown = document.createElement("select");
    const goals = ['Goal 1', 'Goal 2', 'Goal 3']; // Example goals, you can dynamically generate this list
    goals.forEach(goal => {
        const option = document.createElement("option");
        option.value = goal;
        option.textContent = goal;
        goalDropdown.appendChild(option);
    });
    goalDropdown.style.width = "100%";
    goalDropdown.style.marginBottom = "10px";
    goalDropdown.style.height = "30px"; // Set height for the dropdown
    goalDropdown.style.fontSize = "14px"; // Optional: adjust font size to fit the dropdown's height

    // Save and Cancel buttons
    const saveButton = document.createElement("button");
    saveButton.classList.add("save-button");
    saveButton.textContent = "Save";

    const cancelButton = document.createElement("button");
    cancelButton.classList.add("cancel-button");
    cancelButton.textContent = "Cancel";

    // Add edit and delete buttons
    const editButton = document.createElement("button");
    editButton.classList.add("edit-button");
    editButton.innerHTML = "✎"; // Pencil icon (or use FontAwesome icon if you prefer)

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.innerHTML = "🗑️"; // Trash bin icon (or use FontAwesome icon if you prefer)

    // Styling for buttons (edit, delete)
    editButton.style.position = "absolute";
    editButton.style.top = "10px";
    editButton.style.right = "10px";
    editButton.style.fontSize = "16px";
    editButton.style.background = "#f1f1f1"; // Ensure button is visible
    editButton.style.border = "1px solid #ccc"; // Add border to see it
    editButton.style.padding = "5px 10px"; // Add padding for better clickability
    editButton.style.cursor = "pointer";
    editButton.style.color = "#555";

    deleteButton.style.position = "absolute";
    deleteButton.style.top = "10px";
    deleteButton.style.right = "50px"; // Avoid overlap with edit button
    deleteButton.style.fontSize = "16px";
    deleteButton.style.background = "#f1f1f1"; // Ensure button is visible
    deleteButton.style.border = "1px solid #ccc"; // Add border to see it
    deleteButton.style.padding = "5px 10px"; // Add padding for better clickability
    deleteButton.style.cursor = "pointer";
    deleteButton.style.color = "#d9534f"; // Red for delete icon

    // Edit button logic
    editButton.addEventListener("click", function() {
        // Replace static content with inputs for editing
        entryBox.innerHTML = "";
        entryBox.appendChild(titleLabel);
        entryBox.appendChild(titleInput);
        entryBox.appendChild(descLabel);
        entryBox.appendChild(descInput);
        entryBox.appendChild(goalLabel);
        entryBox.appendChild(goalDropdown);
        entryBox.appendChild(saveButton);  // Add save button when editing
        entryBox.appendChild(cancelButton);  // Add cancel button
        entryBox.appendChild(editButton);  // Re-add edit button (if needed)
        entryBox.appendChild(deleteButton); // Re-add delete button (if needed)
    });

    // Delete button logic
    deleteButton.addEventListener("click", function() {
        if (confirm("Are you sure you want to delete this entry?")) {
            entryBox.remove(); // Remove the entry box if confirmed
        }
    });

    // Save button functionality
    saveButton.addEventListener("click", function() {
        const title = titleInput.value;
        const description = descInput.value;
        const selectedGoal = goalDropdown.value;

        if (title && description) {
            // Replace inputs with static content
            entryBox.innerHTML = "";

            // Display the static content (title, description, goal)
            const titleElement = document.createElement("h4");
            titleElement.textContent = title;
            entryBox.appendChild(titleLabel);
            entryBox.appendChild(titleElement); // Add title to the box

            const descriptionElement = document.createElement("p");
            descriptionElement.textContent = description;
            entryBox.appendChild(descriptionElement); // Add description

            const goalElement = document.createElement("p");
            goalElement.textContent = selectedGoal;
            entryBox.appendChild(goalElement); // Add selected goal

            // Re-add edit and delete buttons
            entryBox.appendChild(editButton);
            entryBox.appendChild(deleteButton);
        }
    });

    // Cancel button functionality
    cancelButton.addEventListener("click", function() {
        entryBox.remove(); // Remove the entry box
    });

    // Append input elements (title, description, goal) for initial entry
    entryBox.appendChild(titleLabel);
    entryBox.appendChild(titleInput);
    entryBox.appendChild(descLabel);
    entryBox.appendChild(descInput);
    entryBox.appendChild(goalLabel);
    entryBox.appendChild(goalDropdown);
    entryBox.appendChild(saveButton); // Initially show save button
    entryBox.appendChild(cancelButton); // Add the cancel button to the entry box
    entryBox.appendChild(editButton); // Show the edit button
    entryBox.appendChild(deleteButton); // Show the delete button

    // Append the entry box to the corresponding container
    const containerId = entryType === 'habit' ? 'habitEntries' : 'goalEntries';
    document.getElementById(containerId).appendChild(entryBox);
}

// Habit Entry Logic
document.getElementById("addHabitBtn").addEventListener("click", function() {
    createEntry('habit'); // Call the refactored function for habit entry
});
