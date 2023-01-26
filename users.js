class User {
    name

    constructor(name = 'guest') {
        this.name = name
    }
}

const printUser = (user) => {
    console.table({ userName: user.name })
}

//דרך נוספת לייצא פונקציונליות
exports.User = User
exports.printTheUser = printUser

// module.exports = {
//     printTheUser:printUser, User: User
// }