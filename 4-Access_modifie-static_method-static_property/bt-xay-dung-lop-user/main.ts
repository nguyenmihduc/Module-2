import  {User} from "./User";

let user1 = new User("minh", "minh@gmail",1)
let user2 = new User("duc", "duc@gmail",2)

user1.getInfo()
user2.getInfo()

User.isAdmin(user1)
User.isAdmin(user2)

user1.setRole(2)

User.isAdmin(user1)
User.isAdmin(user2)