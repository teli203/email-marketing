document.addEventListener("DOMContentLoaded", () => {
    // Function to show a modal with a copy button and close functionality
    function showModal(discountCode) {
        let modal = document.createElement("div");
        modal.style.position = "fixed";
        modal.style.top = "50%";
        modal.style.left = "50%";
        modal.style.transform = "translate(-50%, -50%)";
        modal.style.background = "#e5e5e5";
        modal.style.padding = "20px";
        modal.style.borderRadius = "10px";
        modal.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.9)";
        modal.style.textAlign = "center";
        modal.style.zIndex = "1000";
        modal.style.position = "fixed";
        modal.style.width = "auto";
        modal.style.maxWidth = "300px";
    // X Close Module function & style
        let closeButton = document.createElement("button");
        closeButton.innerHTML = "&times;";
        closeButton.style.position = "absolute";
        closeButton.style.top = "10px";
        closeButton.style.right = "10px";
        closeButton.style.background = "transparent";
        closeButton.style.border = "none";
        closeButton.style.fontSize = "18px";
        closeButton.style.cursor = "pointer";
        closeButton.addEventListener("click", () => {
            document.body.removeChild(modal);
        });

        let message = document.createElement("p");
        message.textContent = `Discount Code: ${discountCode}`;
        modal.appendChild(closeButton); 
        modal.appendChild(message);

        let copyButton = document.createElement("button");
        copyButton.innerHTML = "&#x2398; Copy";
        copyButton.style.marginTop = "10px";
        copyButton.style.padding = "8px 12px";
        copyButton.style.background = "#191919";
        copyButton.style.color = "#fff";
        copyButton.style.border = "none";
        copyButton.style.borderRadius = "5px";
        copyButton.style.cursor = "pointer";
    
        copyButton.addEventListener("click", () => {
            navigator.clipboard.writeText(discountCode).then(() => {
                copyButton.textContent = "Copied!";
                setTimeout(() => {
                    document.body.removeChild(modal);
                }, 2000);
            }).catch(() => {
                alert("Failed to copy the discount code. Please try again.");
            });
        });

        modal.appendChild(copyButton);
        document.body.appendChild(modal);

        // Close modal when clicking outside of the modal
        setTimeout(() => {
            document.addEventListener("click", (event) => {
                if (!modal.contains(event.target) && !event.target.classList.contains("a-button")) {
                    document.body.removeChild(modal);
                }
            }, { once: true });
        }, 0);
    }

    // Handle discount button click
    document.querySelector(".a-button").addEventListener("click", () => {
        const discountCode = "XYZLMNOP";
        showModal(discountCode);
    });

    // Handle newsletter button click
    document.querySelector(".b-button").addEventListener("click", () => {
        window.location.href = "/pages/news-letter.html";
    });

    // Handle RSVP button click
    document.querySelector(".c-button").addEventListener("click", () => {
        window.location.href = "/pages/rsvp.html";
    });

    // Handle survey button click
    document.querySelector(".d-button").addEventListener("click", () => {
        window.location.href = "/pages/survey.html";
    });
});
