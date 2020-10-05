/**
 * @param {number|string} port
 * 
 * @return {number}
 */
export default function normalizePort(port) {
    port = parseInt(port, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    throw new Error("Invalid Argument port: " + port);
}
