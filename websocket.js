const websocket = new WebSocket("ws://127.0.0.1:8001");

function sendMessageToServer(data) {
    websocket.send(JSON.stringify(data));
}

websocket.addEventListener("message", ({ data }) => {
    const parsedData = JSON.parse(data);
    if(!parsedData.message) return;

    const newSpan = document.createElement("span");
    newSpan.innerHTML =  parsedData.message;
    logDiv.prepend(newSpan);
})