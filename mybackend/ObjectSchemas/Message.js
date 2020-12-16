const Message = (user, message, time) => {
    return {
        user,
        message,
        time: new Date().getTime(),
        opened: false
    }
}

module.exports = Message;