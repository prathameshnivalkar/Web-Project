document.addEventListener("DOMContentLoaded", function () {
   let b1 = document.querySelector("#table");
   b1.addEventListener("click",
    ()=>
    {
        const chatBox = document.createElement("div");
        chatBox.innerHTML = `
            <div id="chat-container" class="chat-container">
                <div id="chat-box" class="chat-box"></div>
                <input id="chat-input" type="text" placeholder="Type your message..." />
                <button id="send-btn">Send</button>
            </div>
        `;
        document.body.appendChild(chatBox);
        
        const chatBoxElement = document.getElementById("chat-box");
        const chatInput = document.getElementById("chat-input");
        const sendBtn = document.getElementById("send-btn");
        
        sendBtn.addEventListener("click", handleChat);
        chatInput.addEventListener("keypress", function (e) {
            if (e.key === "Enter") handleChat();
        });
        
        function handleChat() {
            const userMessage = chatInput.value.trim();
            if (!userMessage) return;
            
            addMessage("You", userMessage);
            chatInput.value = "";
            
            setTimeout(() => {
                const botReply = getBotResponse(userMessage);
                addMessage("Bot", botReply);
            }, true);
        }
        
        function addMessage(sender, message) {
            const messageElement = document.createElement("div");
            messageElement.classList.add("chat-message");
            messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
            chatBoxElement.appendChild(messageElement);
            chatBoxElement.scrollTop = chatBoxElement.scrollHeight;
        }
        
        function getBotResponse(userMessage) {
            if (userMessage.toLowerCase().includes("book")) {
                return "Sure! What date and time would you like to book a table for?";
            } else if (userMessage.toLowerCase().includes("menu")) {
                return "You can check our menu at our website: [link here].";
            } else {
                return "I'm here to assist you with table bookings. How can I help?";
            }
        }
        
        // Basic Chatbox Styling
        const style = document.createElement("style");
        style.innerHTML = `
            .chat-container { position: fixed; bottom: 20px; right: 20px; width: 300px; border: 1px solid #ccc; border-radius: 10px; padding: 10px; background: white; box-shadow: 0px 0px 10px rgba(0,0,0,0.1); }
            .chat-box { max-height: 200px; overflow-y: auto; padding: 5px; border-bottom: 1px solid #ddd; }
            .chat-message { margin: 5px 0; }
            #chat-input { width: 80%; padding: 5px; }
            #send-btn { padding: 5px; cursor: pointer; }
        `;
        document.head.appendChild(style);
    }
   );
});
