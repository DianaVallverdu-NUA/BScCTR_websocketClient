const messageInput = document.getElementById("message");
const sendMessageButton = document.getElementById("send");
const responseSpan = document.getElementById("response");
const submitNameButton = document.getElementById("submit");
const nameInput = document.getElementById("name");

let username = "";
let message = "";

nameInput.oninput = (ev) => username = ev.target.value;
messageInput.oninput = (ev) => message = ev.target.value;


sendMessageButton.onclick = (ev) => {
    ev.preventDefault();
    const data = {message: message};
    sendMessageToServer(data);
}

submitNameButton.onclick = (ev) => {
    ev.preventDefault();
    const data = {name: username};
    sendMessageToServer(data);
}