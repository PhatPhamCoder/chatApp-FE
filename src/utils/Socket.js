import socketIOClient from "socket.io-client";
import { readFileSync } from "fs";
// "undefined" means the URL will be computed from the `window.location` object
const URL = "https://chatapp-be-4p01.onrender.com/";

export const socket = socketIOClient.connect(URL, {
  key: readFileSync("/path/to/client-key.pem"),
  cert: readFileSync("/path/to/client-cert.pem"),
  ca: [readFileSync("/path/to/server-cert.pem")],
});
