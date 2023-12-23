function clearTextSlowly(elementId, interval) {
    const element = document.getElementById(elementId);
    let text = element.value;
    const length = text.length;
    
    for (let i = 0; i <= length; i++) {
        setTimeout(() => {
            element.value = text.substr(0, text.length - 1);
            text = element.value;
        }, i * interval);
    }
}





document.getElementById("sendButton").addEventListener("click", function() {
    clearTextSlowly('messageBox', 800);
    const messageBox = document.getElementById("messageBox");
    messageBox.value = ''; // Clear the message box
    const responses = [
        "Thank you for sharing",
        "I'll hold onto this message for you",
        "Your message is safe with me",
        "Thank you",
        "Well said"
        // More responses here
    ];
    document.getElementById("response").innerText = responses[Math.floor(Math.random() * responses.length)];
});
