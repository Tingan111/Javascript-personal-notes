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
class UserManager {
    private users: User[] = [];

    constructor() {
        console.log("UserManager 已初始化");
    }

    addUser(user:User):void{
this.users.push(user);
console.log(`使用者${user.name}已新增`);
   }
    //取得使用者
    getUser(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }
    //取得所有使用者
    getAllUsers(): User[] {
        return [...this.users]//回傳副本
    }
    //更新使用者狀態
    updateUserStatus(id: number, status: Status): boolean {
        const user = this.getUser(id);
        if (user) {
            console.log(`${user.name} 狀態更新為： ${status}`);
            return true;
        }
        return false;
    }
}

//5. 泛型函數(Generic Function)
function createArray<T>(length: number, value: T): T[] {
    return Array(length).fill(value);
}

//6.實際使用範例
function main(): void {
    console.log("TypeScript基礎練習");



//建立 UserManager 實例
const userManager = new UserManager();

//建立一些使用者
const users: User[] = [
    { id: 1, name: "Alice", email: "alice@example.com", age: 25 },
    { id: 2, name: "Bob", email: "bob@example.com", age: 25 },
    { id: 3, name: "Charlie", email: "charlie@example.com", age: 30 },
];

//新增使用者
users.forEach(user => userManager.addUser(user));

//查詢使用者
const foundUser =userManager.getUser(1);
if(foundUser){
    console.log(`找到使用者：${foundUser.name}`);
}

//更新狀態
userManager.updateUserStatus(1, "active");
userManager.updateUserStatus(2,"pending");

//使用泛型函數
const numbers= createArray<number>(5,0);
const strings=createArray<string>(3,"Hello");

console.log("數字陣列:",numbers);
console.log("字串陣列:",strings);

//顯示所有使用者
console.log("所有使用者:",userManager.getAllUsers());
}

//執行主函數
main();

