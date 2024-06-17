const button = document.getElementById("myButton");
const resultDiv = document.getElementById("result");

button.addEventListener("click", function() {
    const myString = "Token string returned";
    resultDiv.textContent = myString; 

    // Send the string to the Android WebView's JavaScript interface:
    if (typeof Android !== 'undefined' && Android.onButtonClicked) { 
        Android.onButtonClicked(myString); 
    } else {
        const errorMessage = document.createElement("p");
        errorMessage.textContent = "Android interface is not available";
        errorMessage.style.color = "red";
        document.body.appendChild(errorMessage);
    }
});