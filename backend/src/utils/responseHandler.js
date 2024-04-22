class ResponseHandler {
    constructor(statusCode, data = null, message = null, errors = []) {
        this.statusCode = statusCode;
        this.data = typeof data === 'string' ? null : data;
        this.message = typeof data === 'string' ? data : message || (statusCode < 400 ? 'Success' : 'Something went wrong');
        this.success = statusCode < 400;
        this.errors = errors;
    }
}

export { ResponseHandler };
