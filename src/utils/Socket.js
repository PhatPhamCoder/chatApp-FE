import socketIOClient from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
const URL = "https://chatapp-be-4p01.onrender.com/";

export const socket = socketIOClient.connect(URL);
