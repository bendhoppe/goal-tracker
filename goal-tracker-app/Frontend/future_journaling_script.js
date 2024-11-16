function createEntry(entryType) {
    const entryBox = document.createElement("div");
    entryBox.classList.add("entry");
    entryBox.style.position = "relative"; // Ensure positioning context for the buttons

    // Create input fields for title and description
    const titleInput = document.createElement("input");
    titleInput.placeholder = "Enter title";
    titleInput.style.width = "100%";
    titleInput.style.marginBottom = "10px";

    // Create description label
    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description:";
    descriptionLabel.style.fontSize = "12px"; // Small font size to match
    descriptionLabel.style.fontWeight = "bold"; // Bold style like the title
    descriptionLabel.style.marginBottom = "5px"; // Add a little space between label and input

    // Create title label
    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title:";
    titleLabel.style.fontSize = "12px"; // Small font size to match
    titleLabel.style.fontWeight = "bold"; // Bold style like the title
    titleLabel.style.marginBottom = "5px"; // Add a little space between label and input

    const descInput = document.createElement("textarea");
    descInput.placeholder = "Enter description";
    descInput.style.width = "100%";
    descInput.style.marginBottom = "10px";

    // Create Save and Cancel buttons
    const saveButton = document.createElement("button");
    saveButton.classList.add("save-button");
    saveButton.textContent = "Save";

    const cancelButton = document.createElement("button");
    cancelButton.classList.add("cancel-button");
    cancelButton.textContent = "Cancel";

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.innerHTML = "🗑️"; // Trash bin icon

    // Edit and Delete button icons (small icons)
    const editButton = document.createElement("button");
    editButton.classList.add("edit-button");
    editButton.innerHTML = "✎"; // Pencil icon

    // Style the edit and delete buttons to be small and positioned in the top right corner
    editButton.style.position = "absolute";
    editButton.style.top = "10px";
    editButton.style.right = "10px";
    editButton.style.fontSize = "16px";
    editButton.style.background = "none";
    editButton.style.border = "none";
    editButton.style.cursor = "pointer";
    editButton.style.color = "#555"; // Dark color for edit icon

    deleteButton.style.position = "absolute";
    deleteButton.style.top = "10px";
    deleteButton.style.right = "40px"; // Position delete button near edit button
    deleteButton.style.fontSize = "16px";
    deleteButton.style.background = "none";
    deleteButton.style.border = "none";
    deleteButton.style.cursor = "pointer";
    deleteButton.style.color = "#d9534f"; // Red color for delete icon

    // Initially, hide the edit and delete buttons
    editButton.style.display = "none";
    deleteButton.style.display = "none";

    // Event listeners for the edit and delete buttons
    editButton.addEventListener("click", function() {
        // On edit, replace content with inputs
        entryBox.innerHTML = ""; // Clear entry box
        entryBox.appendChild(titleInput);
        entryBox.appendChild(descInput);
        entryBox.appendChild(saveButton);
        entryBox.appendChild(cancelButton);
        entryBox.appendChild(deleteButton);
        entryBox.appendChild(editButton);
    });

    deleteButton.addEventListener("click", function() {
        if (confirm("Are you sure you want to delete this entry?")) {
            entryBox.remove(); // Remove the entry box if confirmed
        }
    });

    // Save button event
    saveButton.addEventListener("click", function() {
        const title = titleInput.value;
        const description = descInput.value;

        if (title && description) {
            // Create static content (title and description)
            const titleElement = document.createElement("h4");
            titleElement.textContent = title;
            const descElement = document.createElement("p");
            descElement.textContent = description;
            const entryContent = document.createElement("div");
            entryContent.appendChild(titleLabel);
            entryContent.appendChild(titleElement);
            entryContent.appendChild(descriptionLabel);
            entryContent.appendChild(descElement);

            entryBox.innerHTML = ""; // Clear the entry box
            entryBox.appendChild(entryContent);

            // After saving, show the edit and delete buttons
            entryBox.appendChild(editButton);
            entryBox.appendChild(deleteButton);
            editButton.style.display = "inline-block"; // Make the edit button visible
            deleteButton.style.display = "inline-block"; // Make the delete button visible
        }
    });

    // Cancel button event
    cancelButton.addEventListener("click", function() {
        entryBox.remove(); // Remove the entry box if canceled
    });

    // Initially, append input fields and buttons to entryBox
    entryBox.appendChild(titleLabel);
    entryBox.appendChild(titleInput);
    entryBox.appendChild(descriptionLabel);
    entryBox.appendChild(descInput);
    entryBox.appendChild(saveButton);
    entryBox.appendChild(cancelButton);

    // Append entry box to the container
    const containerId = entryType === 'goal' ? 'goalEntries' : 'futureEntries';
    document.getElementById(containerId).appendChild(entryBox);
}

// Future Journaling Entry Logic
document.getElementById("addEntryBtn").addEventListener("click", function() {
    createEntry('entry'); // Call the function for journaling entry
});
