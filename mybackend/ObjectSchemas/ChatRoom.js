const ChatRoom = (numberOfPeople, namesOfUsers, messages) => {
    return {
        numberOfPeople: {
            type: Int32Array,
            default: 0
        },
        namesOfUsers: [],
        messages: [],
    }
}

module.exports = [ChatRoom];