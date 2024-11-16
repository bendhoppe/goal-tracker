function createEntry(entryType) {
    const entryBox = document.createElement("div");
    entryBox.classList.add("entry");
    // Add relative positioning to the entry box to contain the absolute positioned buttons
    entryBox.style.position = "relative"; // This is the key fix
    // Add this inside your createEntry() function, after the "entryBox.style.position = 'relative';"

   // Combine a colorful gradient with a fade-to-white effect at the bottom
    entryBox.style.background = `
     linear-gradient(to bottom, rgba(255, 255, 255, 0) 0.1%, rgba(255, 255, 255, 1) 10%), /* Fade-to-white gradient */
     linear-gradient(to right, #ffffff, #b3e6ff, #d4b3ff, #ffb3d9, #ffd9b3, #ffffff) /* Soft pastel gradient with white on edges */
    `;
    entryBox.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.2)"; // Subtle shadow for depth
    entryBox.style.paddingTop = "40px"; // Add space at the top for the gradient to be visible
    entryBox.style.borderRadius = "10px"; // Rounded corners for a softer look
    entryBox.style.marginBottom = "20px"; // Add margin between entries
    entryBox.style.transition = "box-shadow 0.3s ease, background 0.3s ease"; // Smooth transition for the glow


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

    // Edit and Delete button icons (small icons)
    const editButton = document.createElement("button");
    editButton.classList.add("edit-button");
    editButton.innerHTML = "✎"; // Pencil icon

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.innerHTML = "️️🗑️"; // Cross icon for delete button

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

    // Event listeners for the edit and delete buttons
    editButton.addEventListener("click", function() {
        // On edit, replace content with inputs
        entryBox.innerHTML = ""; // Clear entry box
        entryBox.appendChild(titleLabel);
        entryBox.appendChild(titleInput);
        entryBox.appendChild(descLabel);
        entryBox.appendChild(descInput);
        entryBox.appendChild(goalLabel);
        entryBox.appendChild(goalDropdown);
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

    // Save and Cancel buttons
    const saveButton = document.createElement("button");
    saveButton.classList.add("save-button");
    saveButton.textContent = "Save";

    const cancelButton = document.createElement("button");
    cancelButton.classList.add("cancel-button");
    cancelButton.textContent = "Cancel";

    // Entry content (extra content: title, description, goal)
    const entryContent = document.createElement("div");
    entryContent.style.display = "none"; // Initially hide extra content (description, goal)

 saveButton.addEventListener("click", function() {
    const title = titleInput.value;
    const description = descInput.value;
    const selectedGoal = goalDropdown.value;

    if (title && description) {
        // Clear the entry box
        entryBox.innerHTML = "";

        // Create and display the static content (title, description, goal)
        const titleElement = document.createElement("h4");
        titleElement.textContent = title;
        entryBox.appendChild(titleElement);

        const descElement = document.createElement("p");
        descElement.textContent = description;
        entryBox.appendChild(descElement);

        // Create a label for the selected goal
        const goalLabel = document.createElement("p");
        goalLabel.textContent = `Goal: ${selectedGoal}`;
        entryBox.appendChild(goalLabel);

        // Create a container for the checkboxes and the circular gauge
        const container = document.createElement("div");
        container.style.display = "flex"; // Use flexbox to align checkboxes and gauge side by side
        container.style.alignItems = "center"; // Vertically align items
        container.style.marginTop = "20px"; // Space between content and the items
        container.style.justifyContent = "space-between"; // Distribute space between items

        // Create checkboxes for each day of the week (S, M, T, W, T, F, S)
        const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        const checkboxesContainer = document.createElement("div");
        checkboxesContainer.style.display = "flex"; // Checkboxes in a horizontal row
        checkboxesContainer.style.alignItems = "center"; // Align them vertically centered
        checkboxesContainer.style.gap = "50px"; // Increased space between checkboxes

        // Track the number of checked boxes
        let checkedCount = 0;
        const totalCheckboxes = daysOfWeek.length;

        // The circumference of the gauge's circle is 314 (2 * PI * radius), and we divide it into 7 steps.
        const step = 314 / totalCheckboxes; // Step size for each checkbox

        // Function to update the circular progress gauge
        function updateGauge() {
            // Calculate the stroke-dashoffset based on the number of checked checkboxes
            const strokeDashOffset = 314 - (step * checkedCount); // 314 is the circumference, subtract step * checkedCount
            percentageText.textContent = `${Math.round((checkedCount / totalCheckboxes) * 100)}%`;

            // Update the stroke dash offset to reflect progress
            progressCircle.setAttribute("stroke-dashoffset", strokeDashOffset);

            // Animate the gauge fill transition
            progressCircle.style.transition = "stroke-dashoffset 0.5s ease"; // Smooth transition
        }

        // Create the circular gauge with SVG (smaller size)
        const gaugeWrapper = document.createElement("div");
        gaugeWrapper.style.position = "relative";
        gaugeWrapper.style.width = "120px"; // Slightly smaller size for the gauge
        gaugeWrapper.style.height = "120px"; // Slightly smaller size for the gauge
        gaugeWrapper.style.marginLeft = "20px"; // Space between the checkboxes and the gauge
        gaugeWrapper.style.display = "flex";
        gaugeWrapper.style.justifyContent = "center";
        gaugeWrapper.style.alignItems = "center";

        // Create an SVG for the circular gauge
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "120");
        svg.setAttribute("height", "120");
        svg.setAttribute("viewBox", "0 0 120 120");

        // Background circle (gray color for the empty part)
        const backgroundCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        backgroundCircle.setAttribute("cx", "60"); // Center X
        backgroundCircle.setAttribute("cy", "60"); // Center Y
        backgroundCircle.setAttribute("r", "50"); // Radius
        backgroundCircle.setAttribute("fill", "white");
        backgroundCircle.setAttribute("stroke", "#ddd"); // Light gray stroke
        backgroundCircle.setAttribute("stroke-width", "8");
        svg.appendChild(backgroundCircle);

        // Foreground circle (colored ring for the progress)
        const progressCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        progressCircle.setAttribute("cx", "60");
        progressCircle.setAttribute("cy", "60");
        progressCircle.setAttribute("r", "50");
        progressCircle.setAttribute("fill", "transparent");
        progressCircle.setAttribute("stroke", "#388BFF"); // Initial color blue
        progressCircle.setAttribute("stroke-width", "8");
        progressCircle.setAttribute("stroke-dasharray", "314"); // Circumference of the circle
        progressCircle.setAttribute("stroke-dashoffset", "314"); // Start with full circle (no progress)
        progressCircle.setAttribute("stroke-linecap", "round"); // Rounded edges for the stroke
        svg.appendChild(progressCircle);

        // Add the percentage text in the center of the circle
        const percentageText = document.createElement("span");
        percentageText.style.position = "absolute";
        percentageText.style.fontSize = "16px";
        percentageText.style.fontWeight = "bold";
        percentageText.style.color = "#333";
        percentageText.style.transition = "color 0.3s"; // Smooth transition
        percentageText.textContent = "0%"; // Start with 0%
        gaugeWrapper.appendChild(svg);
        gaugeWrapper.appendChild(percentageText);

        // Append the gauge and checkboxes to the container
        container.appendChild(checkboxesContainer);
        container.appendChild(gaugeWrapper);
        entryBox.appendChild(container);

        // Create checkboxes with appropriate styling
        daysOfWeek.forEach(day => {
            const checkboxWrapper = document.createElement("div");

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = `day-${day}`;
            checkbox.dataset.day = day;

            // Style the checkbox to look like a square with slightly rounded corners
            checkboxWrapper.style.display = "flex";
            checkboxWrapper.style.justifyContent = "center";
            checkboxWrapper.style.alignItems = "center";
            checkboxWrapper.style.width = "60px";
            checkboxWrapper.style.height = "60px";
            checkboxWrapper.style.borderRadius = "5px";
            checkboxWrapper.style.cursor = "pointer";
            checkboxWrapper.style.border = "2px solid #ddd";
            checkboxWrapper.style.transition = "background 0.3s, color 0.3s, transform 0.2s"; // Add subtle animation for scale-up

            const letter = document.createElement("span");
            letter.textContent = day;
            letter.style.color = "#aaa";
            letter.style.fontSize = "20px";
            letter.style.transition = "color 0.3s";

            // Toggle checkbox and square appearance on click
            checkboxWrapper.addEventListener("click", function() {
                checkbox.checked = !checkbox.checked;

                if (checkbox.checked) {
                    letter.style.color = "white";
                    checkboxWrapper.style.background = "linear-gradient(to bottom, #388BFF, #5ECFFF)";
                    checkboxWrapper.style.border = "#388BFF";
                    checkedCount++;

                    // Add subtle animation when the checkbox is checked (scale-up effect)
                    checkboxWrapper.style.transform = "scale(1.1)";
                    setTimeout(() => {
                        checkboxWrapper.style.transform = "scale(1)"; // Reset to original size
                    }, 200);
                } else {
                    letter.style.color = "#aaa";
                    checkboxWrapper.style.background = "white";
                    checkboxWrapper.style.border = "2px solid #ddd";
                    checkedCount--;
                }

                // Update the progress gauge after each change
                updateGauge();
            });

            checkboxWrapper.appendChild(letter);
            checkboxesContainer.appendChild(checkboxWrapper);
        });

        entryBox.appendChild(deleteButton);
        entryBox.appendChild(editButton);
    }
});


    // Cancel button functionality
    cancelButton.addEventListener("click", function() {
        entryBox.remove(); // Remove the entry box
    });

    // Append input elements (title, description, goal)
    entryBox.appendChild(titleLabel);
    entryBox.appendChild(titleInput);
    entryBox.appendChild(descLabel);
    entryBox.appendChild(descInput);
    entryBox.appendChild(goalLabel);
    entryBox.appendChild(goalDropdown);
    entryBox.appendChild(saveButton);
    entryBox.appendChild(cancelButton); // Add the cancel button to the entry box
    entryBox.appendChild(entryContent);

    // Append the entry box to the corresponding container
    const containerId = entryType === 'habit' ? 'habitEntries' : 'goalEntries';
    document.getElementById(containerId).appendChild(entryBox);
}

// Habit Entry Logic
document.getElementById("addHabitBtn").addEventListener("click", function() {
    createEntry('habit'); // Call the refactored function for habit entry
});
