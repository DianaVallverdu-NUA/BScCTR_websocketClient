const websocket = new WebSocket("ws://127.0.0.1:8001");

function sendMessageToServer(message){
    console.log("sending message", message);
    websocket.send(JSON.stringify(message));
}