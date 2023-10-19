
        function onDOMLoaded() {
            // Create a new text node with the message
            var textNode = document.createTextNode("DOM load success");

            // Create a <p> element to contain the text node
            var paragraph = document.createElement("p");
            paragraph.appendChild(textNode);

            // Append the <p> element to the body
            document.body.appendChild(paragraph);

            // Remove this script element from the body
            var scriptElement = document.querySelector("script");
            scriptElement.parentNode.removeChild(scriptElement);
        }

        // Add an event listener for DOMContentLoaded
        document.addEventListener("DOMContentLoaded", onDOMLoaded);

