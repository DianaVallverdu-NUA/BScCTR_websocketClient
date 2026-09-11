const messageInput = document.getElementById("message");
const sendMessageButton = document.getElementById("send");

let message = "";

messageInput.oninput = (ev) => message = ev.target.value;

sendMessageButton.onclick = (ev) => {
    ev.preventDefault();
    sendMessageToServer(message);
}