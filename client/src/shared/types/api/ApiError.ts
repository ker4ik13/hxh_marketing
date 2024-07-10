export interface ApiError {
	data: null;
	error: {
		status: number;
		name: string;
		message: string;
		details?: unknown;
	};
}
