class Users {
    
    constructor(){
        this.users = [];
    }

    addUser(id, username, roomId) {
        var user = {id, username, roomId};
        this.users.push(user);
        return user;
    }

    removeUser(id) {
        var user = this.getUser(id);
        if(user) {
            this.users = this.users.filter((user) => user.id !== id);
        }

        return user;
    }

    getUser(id) {
        return this.users.filter((user) => user.id === id)[0];
    }

    getUserList(roomId){
        var users = this.users.filter((user) => user.roomId === roomId);
        var namesArray = users.map((user) => user.username);

        return namesArray;
    }
}

module.exports = { Users };