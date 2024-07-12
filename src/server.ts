import { Server } from "http";
import app from "./app";
import { config } from "./config";

function main() {
	let server: Server;

	server = app.listen(config.port as unknown as number, () => {
		console.log(`server is running on port ${config.port}`);
	});

	process.on("unhandledRejection", (err) => {
		console.log(
			`😈 unahandledRejection is detected , shutting down ...`,
			err
		);
		if (server) {
			server.close(() => {
				process.exit(1);
			});
		}
		process.exit(1);
	});

	process.on("uncaughtException", () => {
		console.log(`👻 uncaughtException is detected , shutting down ...`);
		process.exit(1);
	});
}

main();