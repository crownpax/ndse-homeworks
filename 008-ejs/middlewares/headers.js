export const getHeaders = (req, res, next) => {
    res.set({
        "Content-Security-Policy": "default-src 'self'"
    });
    next();
}
