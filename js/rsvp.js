document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        
        // Clear input fields
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("company").value = "";
        
        // Display confirmation message
        const message = document.createElement("p");
        message.textContent = "Thank you! Your spot has been reserved.";
        message.style.color = "white";
        message.style.fontWeight = "bold";
        message.style.marginTop = "25px";
        
        form.appendChild(message);
    });
});
