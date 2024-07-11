class CustomError extends Error {
	public statusCode: number;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	constructor(code: number, message: string) {
		super(message);

		this.statusCode = code;

		Error.captureStackTrace(this, this.constructor);
	}
}

export default CustomError;