<script>
  // Handle dropdown menu toggle
  let isDropdownOpen = false;

  document.getElementById("profileButton").onclick = function(event) {
      const dropdownMenu1 = document.getElementById("dropdownMenu1");
      const dropdownMenu2 = document.getElementById("dropdownMenu2");

      // Toggle between displaying the dropdown menus
      if (isDropdownOpen) {
          dropdownMenu1.style.display = "none";
          dropdownMenu2.style.display = "none";
      } else {
          dropdownMenu1.style.display = "block"; // Show the first dropdown
          dropdownMenu2.style.display = "none"; // Hide the second dropdown
      }

      isDropdownOpen = !isDropdownOpen;
      event.stopPropagation(); // Prevents triggering the window click listener
  };

  // Close the dropdown if clicked outside
  window.onclick = function(event) {
      const dropdownMenu1 = document.getElementById("dropdownMenu1");
      const dropdownMenu2 = document.getElementById("dropdownMenu2");

      if (!event.target.closest(".top-bar.profile-icon") && !event.target.closest("#profileButton")) {
          dropdownMenu1.style.display = "none";
          dropdownMenu2.style.display = "none";
          isDropdownOpen = false;
      }
  }
</script>