function createEntry(entryType) {
    const entryBox = document.createElement("div");
    entryBox.classList.add("entry");

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

    // Add edit and delete buttons
    const editButton = document.createElement("button");
    editButton.classList.add("edit-button");
    editButton.innerHTML = "✎"; // Pencil icon (or use FontAwesome icon if you prefer)

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.innerHTML = "🗑️"; // Trash bin icon (or use FontAwesome icon if you prefer)

    // Style buttons to be small icons in the upper-right corner
    editButton.style.position = "absolute";
    editButton.style.top = "10px";  // Adjust the distance from the top
    editButton.style.right = "10px"; // Adjust the distance from the right
    editButton.style.fontSize = "16px";  // Make the icon smaller
    editButton.style.background = "none";
    editButton.style.border = "none";
    editButton.style.cursor = "pointer";
    editButton.style.color = "#555"; // Set a default color for the icon

    deleteButton.style.position = "absolute";
    deleteButton.style.top = "10px"; // Adjust the distance from the top
    deleteButton.style.right = "30px"; // Place it next to the edit button
    deleteButton.style.fontSize = "16px";  // Make the icon smaller
    deleteButton.style.background = "none";
    deleteButton.style.border = "none";
    deleteButton.style.cursor = "pointer";
    deleteButton.style.color = "#d9534f"; // Red color for the delete icon

    // Event listeners for edit and delete buttons
    editButton.addEventListener("click", function() {
        entryBox.innerHTML = ""; // Clear entry box
        entryBox.appendChild(titleInput);
        entryBox.appendChild(descInput);
        entryBox.appendChild(goalDropdown);
        entryBox.appendChild(saveButton); // Add save button back
    });

    deleteButton.addEventListener("click", function() {
        if (confirm("Are you sure you want to delete this entry?")) {
            entryBox.remove(); // Remove the entry box if confirmed
        }
    });

    // Append edit and delete buttons to the entry box
    entryBox.appendChild(editButton);
    entryBox.appendChild(deleteButton);

    // Save and Cancel buttons
    const saveButton = document.createElement("button");
    saveButton.classList.add("save-button");
    saveButton.textContent = "Save";

    const cancelButton = document.createElement("button");
    cancelButton.classList.add("cancel-button");
    cancelButton.textContent = "Cancel";


    // Entry content (extra content: title, description, goal, checkboxes)
    const entryContent = document.createElement("div");
    entryContent.style.display = "none"; // Initially hide extra content (description, goal)

    saveButton.addEventListener("click", function() {
        const title = titleInput.value;
        const description = descInput.value;
        const selectedGoal = goalDropdown.value;

        if (title && description) {
            // Clear the entry box
            entryBox.innerHTML = "";

            // Create and display the static content (title, checkboxes)
            const titleElement = document.createElement("h4");
            titleElement.textContent = title;
            entryBox.appendChild(titleLabel);
            entryBox.appendChild(titleElement); // Add title to the box

            // Create checkboxes for each day of the week (S, M, T, W, T, F, S)
            const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S']; // Abbreviations for each day of the week
            const checkboxesContainer = document.createElement("div");
            checkboxesContainer.style.display = "flex";
            checkboxesContainer.style.justifyContent = "center"; // Center the checkboxes horizontally
            checkboxesContainer.style.alignItems = "center"; // Center the checkboxes vertically
            checkboxesContainer.style.marginTop = "10px";
            checkboxesContainer.style.width = "100%"; // Ensure it takes full width of the parent container
            checkboxesContainer.style.padding = "0 10px"; // Add some padding to avoid touching the edges
            checkboxesContainer.style.gap = "10px"; // Adds some space between the checkboxes

            // Create checkboxes with appropriate styling
            daysOfWeek.forEach(day => {
                const checkboxWrapper = document.createElement("div");
                checkboxWrapper.style.marginRight = "10px";
                checkboxWrapper.style.marginBottom = "10px";

                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.id = `day-${day}`;
                checkbox.dataset.day = day; // Store the day for styling
                checkbox.style.display = "none"; // Hide the actual checkbox

                // Style the checkbox to look like a large circle
                checkboxWrapper.style.display = "flex";
                checkboxWrapper.style.justifyContent = "center";
                checkboxWrapper.style.alignItems = "center";
                checkboxWrapper.style.width = "40px"; // Size of the circle (40px)
                checkboxWrapper.style.height = "40px"; // Height of the circle (40px)
                checkboxWrapper.style.borderRadius = "50%"; // Make it circular
                checkboxWrapper.style.cursor = "pointer";
                checkboxWrapper.style.border = "2px solid #ddd"; // Light border for inactive state
                checkboxWrapper.style.transition = "background 0.3s, color 0.3s"; // Smooth transitions

                const letter = document.createElement("span");
                letter.textContent = day;
                letter.style.color = "#aaa"; // Default grey color when unchecked
                letter.style.fontSize = "18px";
                letter.style.transition = "color 0.3s"; // Smooth transition when checked/unchecked

                // Toggle checkbox and circle appearance on click
                checkboxWrapper.addEventListener("click", function() {
                    checkbox.checked = !checkbox.checked; // Toggle checkbox state

                    if (checkbox.checked) {
                        letter.style.color = "white"; // Change letter to white when checked
                        checkboxWrapper.style.background = "linear-gradient(to bottom, #388BFF, #5ECFFF)"; // Blue gradient when checked
                        checkboxWrapper.style.border = "#388BFF"; // Set the border to blue when checked
                    } else {
                        letter.style.color = "#aaa"; // Change letter back to grey when unchecked
                        checkboxWrapper.style.background = "white"; // White background when unchecked
                        checkboxWrapper.style.border = "2px solid #ddd"; // Revert border to grey when unchecked
                    }
                });

                checkboxWrapper.appendChild(letter);
                checkboxesContainer.appendChild(checkboxWrapper);
            });

            entryContent.appendChild(checkboxesContainer);
            entryContent.style.display = "block"; // Show extra content (checkboxes, description, goal)
            entryBox.appendChild(entryContent); // Append the extra content to the entry box

            // Add the entry content to the entry box
            entryBox.appendChild(descriptionLabelExpand);
            entryBox.appendChild(descriptionElement);
            entryBox.appendChild(goalLabelExpand);
            entryBox.appendChild(goalElement);
        }
    });

    // Add the static form elements
    entryBox.appendChild(titleLabel);
    entryBox.appendChild(titleInput);
    entryBox.appendChild(descLabel);
    entryBox.appendChild(descInput);
    entryBox.appendChild(goalLabel);
    entryBox.appendChild(goalDropdown);
    entryBox.appendChild(saveButton);
    entryBox.appendChild(cancelButton);

    return entryBox;
}
