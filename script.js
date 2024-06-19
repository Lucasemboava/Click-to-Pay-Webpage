const button = document.getElementById("myButton");
const resultDiv = document.getElementById("result");

button.addEventListener("click", function() {
    const myString = "This is the string returned when you click!";
    resultDiv.textContent = myString; 

    // Check for and send to Android
    if (typeof Android !== 'undefined' && Android.sendTokenToApp) { 
        Android.sendTokenToApp(myString); 
    }

    // Check for and send to iOS
    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.ios) {
        window.webkit.messageHandlers.ios.postMessage(myString);
    } else {
        // Display a message on the webpage if neither interface is found
        const errorMessage = document.createElement("p"); 
        errorMessage.textContent = "Neither Android nor iOS interface is available";
        errorMessage.style.color = "red"; 
        document.body.appendChild(errorMessage); 
    }
});