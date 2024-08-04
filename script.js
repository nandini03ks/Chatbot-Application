document.addEventListener("DOMContentLoaded", function() {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    sendBtn.addEventListener("click", function() {
        const message = userInput.value;
        if (message.trim() !== "") {
            addMessage("user", message);
            userInput.value = "";
            respondToUser(message);
        }
    });

    userInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendBtn.click();
        }
    });

    function addMessage(sender, message) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("chat-message", sender + "-message");
        messageDiv.textContent = message;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function respondToUser(message) {
        // Simulate bot response after a delay
        setTimeout(function() {
            const botResponse = generateBotResponse(message);
            addMessage("bot", botResponse);
        }, 1000);
    }

    function generateBotResponse(message) {
        // Simple bot responses for demonstration
        const responses = {
            "hi": "Hello! It's nice to meet you. How can I help you today?",
            "hello": "Hi there! How can I assist you?",
            "who are you":"I' am chatbot, how can I help you",
            "how are you": "I'm just a chatbot,what about you, but I'm here to help you!",
            "where are you now":"I am in cloud server",
            "what you want tell me":"I am not sure to answer this, but I am here to help, how can I help you",
            "what is Java Script":"JS is a scripting language used for dynamic and validation.",
            "What is html":"HTML is hyper text markup langauge and used to give the structure of the webpage.",
            "What is css":"CSS is a cascading style sheet used to give styles to the webpage.",
            "bye": "Goodbye! Have a great day!"

        };

        const lowerCaseMessage = message.toLowerCase();
        return responses[lowerCaseMessage] || "I'm not sure how to respond to that.";
    }
});
