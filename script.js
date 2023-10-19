//your JS code here. If required.
  // Function to be executed when the DOM is loaded
     
		   function onDOMLoaded() {
            // Find the <div> element with the id "output"
            var outputDiv = document.getElementById("output");

            // Check if the element exists
            if (outputDiv) {
                // Create a text node with the message
                var textNode = document.createTextNode("DOM load success");

                // Append the text node to the <div> element
                outputDiv.appendChild(textNode);
            }
        }

        // Add an event listener for the DOMContentLoaded event
        document.addEventListener("DOMContentLoaded", onDOMLoaded);
    </script>
