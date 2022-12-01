const axios = require('axios');

module.exports = function (req, res, next) {
    try {
        const url = req.body.url;
        axios.get(url)
            .then((response) => {
                req.html = response.data;
            })
    } catch (error) {
        req.error = error;
        res.status(400).json({ "error": error.message })
    }
    next();
}