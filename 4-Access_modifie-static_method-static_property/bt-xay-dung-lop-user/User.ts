enum Role{
    admin =1,
    user= 2,
}
export class User {
    protected name: string;
    protected email: string;
    role: Role;
    constructor(name: string, email: string, role: Role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    getInfo() {
        return console.log(`${this.name} ${this.email} ${this.role}`)
    }
    static isAdmin(user) {
       if (user.role === 1) {
           console.log(user.name + ' là Adimin')
       } else if (user.role === 2) {
           console.log(user.name + ' là người dùng bình thường')
       }
    }
    setName(value: string) {
        this.name = value;
    }
    setEmail(value: string) {
        this.email = value;
    }
    setRole(value: Role) {
        this.role = value;
    }
}