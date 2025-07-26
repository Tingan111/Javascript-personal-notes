//1.基本型別定義
let username: string = "Tingan";
let age: number = 25;
let isTingan: boolean = true;
let hobbies: string[] = ["react", "js", "ts"];

//2.介面(Interface)定義
interface User {
    id: number;
    name: string;
    email: string;
    age?: number//可選屬性
}

//3.型別別名（Ｔype Alias)
type Status = "active" | "inactive" | "pending";

//4.類別(Class)定義
class UserMAnager {
    private users: User[] = [];

    constructor() {
        console.log("UserManager 已初始化");
    }
    //新增使用者
    getUser(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }
    //取得所有使用者
    getAllUsers(): User[] {
        return [...this.users]//回傳副本
    }
    //更新使用者狀態
    updateUserStatus(id: number, status: Status): booolean {
        const user = this.getUser(id);
        if (user) {
            console.log(`${user.name} 狀態更新為： ${status}`);
            return true;
        }
        return false;
    }
}
