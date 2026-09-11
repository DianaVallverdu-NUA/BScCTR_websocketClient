const messageInput = document.getElementById("message");
const sendMessageButton = document.getElementById("send");
const responseSpan = document.getElementById("response");

let message = "";

messageInput.oninput = (ev) => message = ev.target.value;

sendMessageButton.onclick = (ev) => {
    ev.preventDefault();
    sendMessageToServer(message);
}