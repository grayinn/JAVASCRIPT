/**
 * ------------------ BIẾN, TOÁN TỬ, KIỂU DỮ LIỆU, FUNCTION ------------------
 */

// 1. Khai báo biến_tạo và lưu biến
var fullName = 'Nguyen Hong Nhung'
var age = 20

// alert(fullName)
// alert(age)

/* 2. Thuật ngữ built-in
phương thức, đối tượng và thuộc tính mà ngôn ngữ JavaScript cung cấp sẵn mà 
không cần phải định nghĩa lại hay tạo ra từ đầu. 
*/

//a. allert
alert(fullName)

//b. console
console.log('Day la mot dong log')
console.log(fullName)
console.warn(fullName)
console.error(fullName)

//c. confirm
confirm('Xac nhan ban du tuoi?')

//d. prompt
prompt('Nhap so tuoi cua ban..')

//e. set timeout - một lần sau 1 khoảng tg
setTimeout(function() {
    alert('Thong bao sau 1s')
}, 1000)

//f. set interval - xuyên suốt trong khoảng thời gian
setInterval(function() {
    console.log('Xuat hien 3s')
    // alert('Thong bao xuat hien trong 3s')
}, 3000)

// 3. Toán tử kiểu dữ liệu
//a. Toán tử số học - Arithmetic
var a = 2 + 5
console.log(a)
/*
+  Cộng
-  Trừ
*  Nhân
** Lũy Thừa
/  Chia
%  Chia lấy dư
++ Tăng 1 giá trị số
-- Giảm một giá trị số
*/

var a = 1
var b = 5

var c = a + b
console.log(c)

//b. Toán tủ gán - Assignment
var fullName = 'Nguyen Hong Nhung'
console.log(fullName)
/*
Toán tử             Ví dụ               Tương đương
=                   x = y               x = y
+=                  x += y              x = x + y
-=                  x -= y              x = x - y
*=                  x *= y              x = x * y
/=                  x /= y              x = x / y
**=                 x **= y             x = x ** y
*/

var a = 1 //Xem bên vế phải trước
a = a + 2  // Tương đương a += 2
a += 2

console.log(a)

//c. Toán tử so sánh - Comparison
var a = 5
var b = 5
/*
Toán tử             
==                  Bằng
.!=                 Không bằng
> <                 Lớn hơn/nhỏ hơn
>= <=               Lớn hơn hoặc bằng/nhỏ hơn hoặc bằng
*/

if (a == b) {
    alert('Dung')
}

var m = 1
var n = 4
if (m == n) {
    console.log ('Dieu kien dung!')
} else {
    console.log ('Dieu kien sai!')
}

//d. Toán tử logic - Logical
/*
1. &&  - And
2. ||  - Or
3. !   - Not
*/

//
var a = 1
var b = 2

if (a > 0 && b > 0) {
    alert('a & b lớn hơn 0')
}

//Toán tử ++ và --
//Prefix & Postfix
console.log('--- Hậu tố ---');

var number1 = 1;

console.log(number1++); // 1
console.log(number1); // 2

console.log(number1++); // 2
console.log(number1); // 3
// Trả về kết quả là 'number1 copy' khi thực thi number1++

console.log('--- Tiền tố ---');

var number2 = 1;

console.log(++number2); // 2
console.log(number2); // 2

console.log(++number2); // 3
console.log(number2); // 3
// Trả về kết quả sau khi được cộng 1/trừ 1

var number = 6
var output = number++ + --number
// 6 + 6 chứ không phải 7 + 5
console.log('output la: ', output)

//Toán tử chuỗi - String operator
var firstName = 'Nguyen'
var lastName = 'Nhung'

//c2
var name1 = 'Son'
name1 = name1 + ' Dang'
name1 += ' Dang'

console.log(name1)
console.log(firstName + ' ' + lastName)

// Kiểu dữ liệu Boolean
var isSuccess = true
console.log(isSuccess)

var x = 1
var y = 2
var isSuccess = x > y
console.log(isSuccess)

var age = 16
var canBuyAlcohol = age >= 18
console.log(canBuyAlcohol)

// If - else
if (true) {
    console.log('DIEU KIEN DUNG')
} else {
    console.log('DIEU KIEN SAI')
}

var isSuccess = 1 < 2
if (isSuccess) {
    console.log('DIEU KIEN DUNG')
} else {
    console.log('DIEU KIEN SAI')
}


/*
---------------- KIỂU DỮ LIỆU TRONG Javascript

1. Dữ liệu nguyên thủy - Primitive Data
-   Number
-   String
-   Boolean - chỉ có True hoặc False
-   Undefined
-   Null
-   Symbol


2. Dữ liệu phức tạp - Complex Data
-   Function
-   Object
*/

//a. Function
var myFunction = function() {
    alert('Hi, xin chao cac ban!')
}
//Gọi function
myFunction();

//b. Object - mở đóng dấu ngoặc nhọn - có key value ở trong
var myObject = {
    name2: 'Son Dang',
    age: 18,
    adress: 'Ha Noi',
    myFunction: function () {

    }
}
console.log('myObject:', myObject)

//Array - giống Object nhưng không cần phải định nghĩa key MÀ định nghĩa cái danh sách gì đó
var myArray = [
    'Java',
    'PHP',
    'Ruby'
]
console.log(myArray)

// XEM NÓ THUỘC KIỂU DỮ LIỆU NÀO - type of
// console.log(typeof myArray)
// console.log(typeof fullName)


//TOÁN TỬ SO SÁNH - P2
/**
 * ===
 * .!==
 */

var a = 1
var b = '1'

console.log(a == b)  //Chỉ quan tâm đến value nên TRUE
console.log(a === b)  //Quan tâm đến value và kiểu dữ liệu nên FALSE
 // Tương tự như toán tử khác !=

 // .!: toán tử not - phủ định
 // .!!: khẳng định

 // Falsy - 6 giá trị trong Js
 // 1. False
 // 2. 0
 // 3. '' hoặc " "
 // 4. null
 // 5. undefined
 // 6. NaN

 //KIỂM TRA ĐÂU LÀ GIÁ TRỊ NaN
 var age = 20
 var PI = 3.14
 var result = 50 / 'ABC'
 console.log(isNaN(result)) //ra true

 //hãy viết hàm isNumber tương tự thử thách trước, nhưng hãy đảm bảo thêm 
 //rằng NaN không được coi là một số.
 function isNumber(value) {
    return typeof value === 'number' && isFinite(value);
}


 //HIỂU HƠN VỀ CÂU LỆNH ĐIỀU KIỆN VÀ PHÉP SO SÁNH
 var result = 'A' || 'B' || 'C' || 'D' //Lấy giá trị cuối tức là D (nếu các giá trị trước đó A, B, C không thuộc 1 trong 6 FALSE)

 var result = 'A' && 'B' && 'C' && 'D' //Lấy giá trị đầu tiên - tức lấy A (bỏ qua các giá trị THUỘC FALSY)

 console.log('result', result)

 if (result) {
    console.log('DIEU KIEN DUNG')
 } else {
    console.log('DIEU KIEN')
 }


 /**
  * ---------------- HÀM (function) trong Javascript ----------------
  * 
  * 1. HÀM?
  * -   Một khối mã
  * -   Làm một việc cụ thể
  * 
  * 2. LOẠI HÀM?
  * -   Built-in
  * -   Tự định nghĩa
  * 
  * 3. TÍNH CHẤT?
  * -   Không thực thi khi định nghĩa, mà thực thi khi được gọi
  * -   Có thể nhận tham số
  * -   Có thể trả về 1 giá trị
  * 
  * 4. TẠO HÀM ĐẦU TIÊN
  */

 // Cách đặt tên hàm - 

 function showDialog() {
    alert('Hi, xin chao')
 }
// Gọi hàm
showDialog()

/**
 * THAM SỐ TRONG HÀM
 * 1. THAM SÔ?
 * -    Định nghĩa
 * -    Kiểu dữ liệu
 * -    Tính private
 * -    1 tham số
 * -    Nhiều tham số
 * 
 * 2. TRUYỀN THAM SỐ
 * -    1 tham số
 * -    Nhiều tham số
 * 
 * 3. ARGUMENTS?
 * -    Đối tượng arguments
 * -    Giới thiệu vòng for of - in ra cùng dòng cách nhau
 * Vòng lặp for, lặp đi lặp lại cho đến hết các đối tượng 
 */

function writeLog(message) {
    console.log(message)
}

writeLog('Text message')

//
function writeLog(message) {
    console.log(typeof message)
}
writeLog(123) //Kiểu dữ liệu

//
function writeLog(message, message2) {
    console.log(message)
    console.log(message2)
}
writeLog('Text message 1', 'Text message 2')

// Đối tượng arguments
function writeLog() {
    console.log(arguments)
}
writeLog('Log 1', 'Log 2', 'Log 3')

//Vòng lặp for
function writeLog() {
    for (var param of arguments) {
        console.log(param)
    }
}
writeLog('Log 1', 'Log 2', 'Log 3')
// Lặp đi lặp lại cho đến hết các đối tượng, in ra từng dòng

//in ra cùng dòng cách nhau. 
function writeLog() {
    var myString = ''
    for (var param of arguments) {
        myString += `${param} - ` 
    }
    console.log(myString)
}
writeLog('Log 1', 'Log 2', 'Log 3')


// RETURN TRONG HÀM
function cong(a, b) {
    return a + b  //Dưới hàng return sẽ bị bỏ qua
}
var result = cong(2, 8)
console.log(result)

//MỘT SỐ ĐIỀU CẦN BIẾT VỀ FUNCTION
/**
 * 1.   Khi function đặt trùng tên - lấy function định nghĩa sau
 * 2.   Khai báo biến trong hàm? - có thể
 * 3.   Định nghĩa hàm trong hàm
 */

//Ví dụ TH2 - khai báo biến trong hàm (phạm vi biến sẽ trong hàm)
function showMessage() {
    var fullNamee = 'Son Dang'
    console.log(fullName)
}
showMessage()

//Ví dụ TH3 - Định nghĩa hàm trong hàm
function showMessage() {
    function showMessage2() {
        console.log('Message 2')
    }
    showMessage2()
}
showMessage()

//CÁC LOẠI HÀM
/**
 * 1.   Declaration function - đã học
 * 2.   Expression function
 * 3.   Arrow function
 */

//1. Vd Declaration function
function showMessage() {

}

//1. Vd Expression function - toán tử gán ở trước function
var showMessage2 = function testName() {
}

setTimeout(function autoLogin() {
})

var myObject = {
    myFunction: function testName() {
    }
}