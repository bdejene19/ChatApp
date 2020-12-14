const createUser = (username, time) => {
    return {
        username,
        time = new Date().getTime()
    }
}