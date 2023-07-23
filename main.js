// console.log: in ra manf hình console

console.log("hello world!")
console.log("Ngoc Tien Nguyen")
console.log("17")
console.log("truong hoc")

/* global - local variable
global: 1 biến có thể gọi tất cả / mọi nơi trong đoạn code của mình
var: biến số (khai báo biến) 
- const: hàm số */
var name= "Thay Phonggg" 
/*name: tên biến - có thể thay đổi (tùy vào ngữ cảnh sd)
=: gán
"Thầy Phong": giá trị biến*/
console.log(name);
// Phương pháp + chuỗi
console.log(name + " đi code dạo")
console.log(name + " di choi ")

var userName= "ngoc tien xd"
console.log(userName + " dang nhap")
// truyền data vào console.log thì sd `${}`
console.log(`${userName} đăng nhập`);

/*KIỂU DỮ LIỆU
1. số - number: số nguyên  - số thực;*/
var NumInteger = 16; 
console.log(`số nguyên: ${NumInteger}`);
var NumFloat = 11.5;
console.log("số nguyên: " + NumInteger);

// 2. Kiểu chuỗi string ""
console.log('hocj code cufng thay PhOnG arrghhhh')

// 3. Boolean - Dung / sai 
console.log (true)
console.log(false)

// undefined - không xác định(// vẫn mang trong mình một giá trị bất kì)
console.log(undefined);

//5. null - rỗng và không mang bất kì giá trị hay dữ liệu nào
console.log(null)

//6. ARRAY- nơi lưu trữ các dữ liệu (luwu trữ trg ngoặc vuông, bên trg có thể là chuỗi, số, boolean)
var listArray = [" tienxd", 17, "female", false]
console.log( name + listArray[0])
console.log(`${listArray[2]} + "tuoi"`)
console.log(listArray[1]);
console.log(`${listArray[2]}`)
console.log(`${listArray}`)

//7.Object - đối tượng (yao guan xin de: key-values)
var conmeo = {
    name: "đường",
    age: 2,
    fur: "red",
    type:"",
}
console.log (conmeo)
console.log(conmeo.age)
console.log(conmeo.type)
