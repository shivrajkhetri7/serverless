const { getUserDetails } = require("./controller");

module.exports.handler = async (event) => {
    try {
        const payload = JSON.parse(event.body);
        const { userId = undefined } = payload;
        const response = await getUserDetails(userId);
        return {
            statusCode: 200,
            body: JSON.stringify(response),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(
                {
                    message: JSON.stringify(error?.message),
                    input: event,
                },
                null,
                2
            ),
        };
    }
};