import "dotenv/config";

import { Socket } from "socket.io";
import { ExtendedError } from "socket.io/dist/namespace";

const socketAuthorization = async (
    socket: Socket,
    next: (err?: ExtendedError | undefined) => void,
) => {
    if (process.env.SOCKET_SERVER_SECRET !== socket.handshake.auth.token) {
        return next(new Error("Unauthorized"));
    }
    next();
};

export default socketAuthorization;
