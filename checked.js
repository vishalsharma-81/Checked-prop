// Checked property for javasript

document.getElementById("myButton").onclick = function () {
    const myCheckBox = document.getElementById("myCheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");




    if (myCheckBox.checked) {
        console.log("You are subscribed!");
    }

    // one method  -
    /* if (document.getElementById("myCheckBox").checked){
         console.log("You are subscribed!");
     }*/
    else {
        console.log("You are NOT subscribed!");
    }

    if (visaBtn.checked) {
        console.log("you are paying with a visa!");
    }
    else if (mastercardBtn.checked) {
        console.log("you are paying with a mastercard!");
    }
    else if (paypalBtn.checked) {
        console.log("you are paying with paypal!");
    }
    else {
        console.log("you must select a payment mode");
    }
}