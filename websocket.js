const websocket = new WebSocket("ws://127.0.0.1:8001");

function sendMessageToServer(data) {
    websocket.send(JSON.stringify(data));
}

websocket.addEventListener("message", ({ data }) => {
    const parsedData = JSON.parse(data);
    if (parsedData.message) {
        responseSpan.innerHTML = parsedData.message;
    }
})