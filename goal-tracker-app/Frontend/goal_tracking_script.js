function createEntry(entryType) {
    const entryBox = document.createElement("div");
    entryBox.classList.add("entry");
    entryBox.style.position = "relative"; // Add relative positioning for the absolute buttons

    // Title Input and Label
    const titleInput = document.createElement("input");
    titleInput.placeholder = "Enter title";
    titleInput.style.width = "100%";
    titleInput.style.marginBottom = "10px";

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title:";
    titleLabel.style.fontSize = "12px";
    titleLabel.style.fontWeight = "bold";
    titleLabel.style.marginBottom = "5px";

    // Description Input and Label
    const descInput = document.createElement("textarea");
    descInput.placeholder = "Enter description";
    descInput.style.width = "100%";
    descInput.style.marginBottom = "10px";

    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description:";
    descriptionLabel.style.fontSize = "12px";
    descriptionLabel.style.fontWeight = "bold";
    descriptionLabel.style.marginBottom = "10px";

    // Dropdown Label and Dropdown
    const entryAssociatedLabel = document.createElement("label");
    entryAssociatedLabel.textContent = "What entry is this goal associated with?";
    entryAssociatedLabel.style.fontSize = "12px";
    entryAssociatedLabel.style.fontWeight = "bold";
    entryAssociatedLabel.style.marginBottom = "10px";

    const journalDropdown = document.createElement("select");
    journalDropdown.style.width = "100%";
    journalDropdown.style.height = "35px";
    journalDropdown.style.marginBottom = "10px";
    const option1 = document.createElement("option");
    option1.textContent = "Select a journal entry";
    option1.value = "";
    journalDropdown.appendChild(option1);

    const option2 = document.createElement("option");
    option2.textContent = "Morning Reflection";
    option2.value = "morning";
    journalDropdown.appendChild(option2);

    const option3 = document.createElement("option");
    option3.textContent = "Gratitude List";
    option3.value = "gratitude";
    journalDropdown.appendChild(option3);

    const option4 = document.createElement("option");
    option4.textContent = "Goal Setting";
    option4.value = "goalSetting";
    journalDropdown.appendChild(option4);

    const option5 = document.createElement("option");
    option5.textContent = "Evening Reflection";
    option5.value = "evening";
    journalDropdown.appendChild(option5);

    // Goal Total Units (denominator) input field
    const totalUnitsLabel = document.createElement("label");
    totalUnitsLabel.textContent = "Total Units:";
    totalUnitsLabel.style.fontSize = "12px";
    totalUnitsLabel.style.fontWeight = "bold";
    totalUnitsLabel.style.marginBottom = "5px";

    const totalUnitsInput = document.createElement("input");
    totalUnitsInput.placeholder = "Enter total units for this goal";
    totalUnitsInput.type = "number";
    totalUnitsInput.style.width = "100%";
    totalUnitsInput.style.marginBottom = "10px";

    // Create Save and Cancel buttons
    const saveButton = document.createElement("button");
    saveButton.classList.add("save-button");
    saveButton.textContent = "Save";

    const cancelButton = document.createElement("button");
    cancelButton.classList.add("cancel-button");
    cancelButton.textContent = "Cancel";

    // Edit and Delete button icons (small icons)
    const editButton = document.createElement("button");
    editButton.classList.add("edit-button");
    editButton.innerHTML = "✎";

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.innerHTML = "🗑️";

    // Style the edit and delete buttons
    editButton.style.position = "absolute";
    editButton.style.top = "10px";
    editButton.style.right = "10px";
    editButton.style.fontSize = "16px";
    editButton.style.background = "none";
    editButton.style.border = "none";
    editButton.style.cursor = "pointer";
    editButton.style.color = "#555";

    deleteButton.style.position = "absolute";
    deleteButton.style.top = "10px";
    deleteButton.style.right = "40px";
    deleteButton.style.fontSize = "16px";
    deleteButton.style.background = "none";
    deleteButton.style.border = "none";
    deleteButton.style.cursor = "pointer";
    deleteButton.style.color = "#d9534f";

    // Event listener for delete button
    deleteButton.addEventListener("click", function() {
        if (confirm("Are you sure you want to delete this entry?")) {
            entryBox.remove();
        }
    });

    // Event listener for the edit button
    editButton.addEventListener("click", function() {
        // On edit, replace content with inputs
        entryBox.innerHTML = "";
        entryBox.appendChild(titleLabel);
        entryBox.appendChild(titleInput);
        entryBox.appendChild(descriptionLabel);
        entryBox.appendChild(descInput);
        entryBox.appendChild(entryAssociatedLabel);
        entryBox.appendChild(journalDropdown);
        entryBox.appendChild(totalUnitsLabel);
        entryBox.appendChild(totalUnitsInput);
        entryBox.appendChild(saveButton);
        entryBox.appendChild(cancelButton);
        entryBox.appendChild(editButton);
        entryBox.appendChild(deleteButton);
    });

    saveButton.addEventListener("click", function() {
        const title = titleInput.value;
        const description = descInput.value;
        const journalEntry = journalDropdown.value;
        const totalUnits = totalUnitsInput.value;

        if (title && description && totalUnits) {
            const titleElement = document.createElement("h4");
            titleElement.textContent = title;
            const descElement = document.createElement("p");
            descElement.textContent = description;

            // Create a label for the journal entry dropdown after saving
            const savedJournalLabel = document.createElement("label");
            savedJournalLabel.textContent = "What entry is this goal associated with?";
            savedJournalLabel.style.fontSize = "12px";
            savedJournalLabel.style.fontWeight = "bold";
            savedJournalLabel.style.marginBottom = "5px";

            // Update the entryContent with saved details
            const entryContent = document.createElement("div");

            // Conditionally append labels based on field values
            if (title) {
                entryContent.appendChild(titleLabel);
                entryContent.appendChild(titleElement);
            }

            if (description) {
                entryContent.appendChild(descriptionLabel);
                entryContent.appendChild(descElement);
            }

            if (journalEntry) {
                entryContent.appendChild(savedJournalLabel);
                const journalEntryElement = document.createElement("p");
                const selectedOption = journalDropdown.options[journalDropdown.selectedIndex].text;
                journalEntryElement.textContent = selectedOption;
                entryContent.appendChild(journalEntryElement);
            }

            if (totalUnits) {
                entryContent.appendChild(totalUnitsLabel);
                const totalUnitsElement = document.createElement("p");
                totalUnitsElement.textContent = totalUnits;
                entryContent.appendChild(totalUnitsElement);
            }

            // Add the progress bar
            const progressContainer = document.createElement("div");
            progressContainer.style.position = "relative";
            progressContainer.style.height = "20px";
            progressContainer.style.backgroundColor = "#e0e0e0";
            progressContainer.style.borderRadius = "10px";
            progressContainer.style.overflow = "hidden";

            const progressBar = document.createElement("div");
            progressBar.style.height = "100%";
            progressBar.style.backgroundColor = "#388BFF";
            progressBar.style.width = "0%"; // Initial progress (0%)

            // Create progress ratio (separate numerator and denominator)
            const progressRatio = document.createElement("div");
            progressRatio.style.position = "absolute";
            progressRatio.style.right = "48px";
            progressRatio.style.bottom = "30px";
            progressRatio.style.transform = "translateY(-50%)";
            progressRatio.style.color = "#000";
            progressRatio.style.fontSize = "14px";

            // Numerator input (editable and wider)
            const numeratorInput = document.createElement("input");
            numeratorInput.value = `0`; // Set initial value to 0
            numeratorInput.type = "number";
            numeratorInput.style.width = "70px";  // Make the numerator wider
            numeratorInput.style.marginRight = "5px";

            // Denominator input (readonly)
            const denominatorInput = document.createElement("input");
            denominatorInput.value = totalUnits; // Set the total units as the denominator
            denominatorInput.type = "text";
            denominatorInput.style.width = "50px";
            denominatorInput.style.border = "none";
            denominatorInput.style.backgroundColor = "#f0f0f0"; // Make it visually non-editable
            denominatorInput.disabled = true;

            progressRatio.appendChild(numeratorInput);
            progressRatio.appendChild(document.createTextNode(" / ")); // Add slash
            progressRatio.appendChild(denominatorInput);

            progressContainer.appendChild(progressBar);

            entryContent.appendChild(progressContainer);
            entryContent.appendChild(progressRatio);

            // Attach the entryContent back to the entryBox
            entryBox.innerHTML = "";
            entryBox.appendChild(entryContent);

            entryBox.appendChild(editButton);
            entryBox.appendChild(deleteButton);

            // Update progress bar dynamically
            numeratorInput.addEventListener("input", function() {
                const numeratorValue = parseInt(numeratorInput.value) || 0;
                const denominatorValue = parseInt(denominatorInput.value) || 1;
                const progress = Math.min((numeratorValue / denominatorValue) * 100, 100); // Cap at 100%
                progressBar.style.width = progress + "%";
            });
        }
    });

    cancelButton.addEventListener("click", function() {
        entryBox.remove();
    });

    // Append elements to entryBox initially (in edit mode)
    entryBox.appendChild(titleLabel);
    entryBox.appendChild(titleInput);
    entryBox.appendChild(descriptionLabel);
    entryBox.appendChild(descInput);
    entryBox.appendChild(entryAssociatedLabel);
    entryBox.appendChild(journalDropdown);
    entryBox.appendChild(totalUnitsLabel);
    entryBox.appendChild(totalUnitsInput);
    entryBox.appendChild(saveButton);
    entryBox.appendChild(cancelButton);
    entryBox.appendChild(editButton);
    entryBox.appendChild(deleteButton);

    // Append the entry box to the container
    const containerId = entryType === 'goal' ? 'goalEntries' : 'futureEntries';
    document.getElementById(containerId).appendChild(entryBox);
}

// Goal Entry Logic
document.getElementById("addGoalBtn").addEventListener("click", function() {
    createEntry('goal');
});
