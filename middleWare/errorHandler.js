const { constants } = require("../constants");
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({ title: 'Velidation Error', message: err.message, stackTrace: err.stack, });
            break;
        case constants.UNAUTORIZED:
            res.json({ title: 'Un-authorized', message: err.message, stackTrace: err.stack, });
            break;
        case constants.FORBIDDEN:
            res.json({ title: 'Forbidden', message: err.message, stackTrace: err.stack, });
            break;
        case constants.NOT_FOUND:
            res.json({ title: 'Not found', message: err.message, stackTrace: err.stack, });
            break;
        case constants.SERVER_ERROR:
            res.json({ title: 'Server Error', message: err.message, stackTrace: err.stack, });
            break;

        default:
            res.json({ message: 'Success, No Error found' });
            break;
    }

}

module.exports = errorHandler;