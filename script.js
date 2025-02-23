document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// Auto-scroll chatbox
function scrollToBottom() {
    let chatBox = document.getElementById("chatbox");
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getTimestamp() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function sendMessage() {
    let userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") return;

    let chatBox = document.getElementById("chatbox");

    // Append user message with timestamp
    let userMessage = document.createElement("div");
    userMessage.className = "message user-message";
    userMessage.innerHTML = `<div class="bubble">${userInput} <span class="timestamp">${getTimestamp()}</span></div>`;
    chatBox.appendChild(userMessage);

    // Clear input field
    document.getElementById("user-input").value = "";

    // Simulating bot "typing..."
    let botTyping = document.createElement("div");
    botTyping.className = "message bot-message typing-indicator";
    botTyping.innerHTML = `<div class="bubble">...</div>`;
    chatBox.appendChild(botTyping);
    scrollToBottom();

    // Send user message to backend
    fetch("/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userInput }),
    })
    .then(response => response.json())
    .then(data => {
        chatBox.removeChild(botTyping); // Remove typing indicator

        // Append bot response with timestamp
        let botMessage = document.createElement("div");
        botMessage.className = "message bot-message";
        botMessage.innerHTML = `<div class="bubble">${data.reply} <span class="timestamp">${getTimestamp()}</span></div>`;
        chatBox.appendChild(botMessage);
        scrollToBottom();
    })
    .catch(error => {
        console.error("Error:", error);
        chatBox.removeChild(botTyping); // Remove typing indicator if error occurs

        let errorMessage = document.createElement("div");
        errorMessage.className = "message bot-message";
        errorMessage.innerHTML = `<div class="bubble">Oops! Something went wrong. <span class="timestamp">${getTimestamp()}</span></div>`;
        chatBox.appendChild(errorMessage);
        scrollToBottom();
    });
}
