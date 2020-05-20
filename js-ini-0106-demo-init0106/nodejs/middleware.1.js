const logTime = (req, res, netxt) => {
    const timeNow = Date.now();
    console.log({ timeNow })
    netxt();
}
module.exports = {
    logTime
};