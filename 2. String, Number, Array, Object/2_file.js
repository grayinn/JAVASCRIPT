/**
 * ---------------------- CHUỖI TRONG JAVASCRIPT -------------------------
 
 * 1.   TẠO CHUỖI
 *      - Các cách tạo chuỗi - dùng ''
 *      - Nên dùng cách nào? Lý do?
 *      - Kiểm tra data type
 * 
 * 2.   MỘT SỐ CASE SỬ DỤNG BACKSLASH (\)
 * 3.   XEM ĐỘ DÀI CHUỖI
 * 4.   CHÚ Ý ĐỘ DÀI KHI VIẾT CODE - cộng chuỗi/xuống hàng
 * 5.   TEMPLATE STRING ES6
 */
var fullName = 'Son Dang la \'Sieu Nhan\''
console.log(fullName)
console.log(fullName.length)  //xem độ dài chuỗi

//Template string es6
var firstName = 'Son'
var lastName = 'Dang'
console.log('Toi la: ' + firstName + ' ' + lastName)

console.log(`Toi la: ${firstName} ${lastName}`) //chuỗi này đưa ra string


/**
 * LÀM VIỆC VỚI CHUỖI
 *      1. Length
 *      2. Find index - tìm vị trí
 *      3. Cut string
 *      4. Replace
 *      5. Convert to upper case
 *      6. Convert to lower case
 *      7. Trim
 *      8. Split
 *      9. Get a character by index
 */

var myString = 'Hoc JS tai F8'
console.log(myString.length) //1.

console.log(myString.indexOf('JS')) //2. Vị trí chuỗi đầu tiên số 4 (bắt đầu từ 0)
console.log(myString.indexOf('JS', 6)) // Vị trí ở sau vị trí chuỗi 1
console.log(myString.lastIndexOfindexOf('JS'))

console.log(myString.search('JS')) //

console.log(myString.slice(4, 6)) //3. Cut tring bắt đầu và kết thúc đoạn cắt

console.log(myString.replace('JS', 'Javascript')) //4. Replace - thay thế cái đầu tiên
console.log(myString.replace(/JS/g, 'Javascript')) // thay tất cả chữ JS = Javascript

console.log(myString.toUpperCase()) // 5,6. Viết hoa, viết thường

console.log(myString.trim('JS'))  //7. Trim (xử lý thừa 2 đầu khoảng trắng)

//8. Split - cắt 1 chuỗi thành 1 array (array là [])
var languages = 'Javascript, PHP, Ruby'
console.log(languages.split(', ')) // cắt dấu cách ở đầu luôn

var languages = 'Javascript'
console.log(languages.split('')) // cắt thành từng chữ cái một

//9. Get a character by index - lấy ký tự từ chuỗi cho trước
const myString2 = 'Hong Nhung'
console.log(myString2.charAt(0)) //Lấy ra chữ H, ko có thì truyền ra chuỗi rỗng


//PHAN BAI TAP - Tach chuoi ve mang
var coursesStr = 'HTML & CSS, JavaScript, ReactJS';

function strToArray(str) {
    var strToArray = str.split(', ')
    return strToArray
}
strToArray(coursesStr)

// Trả về độ dài của tham số content
function getContentLength(content) {
    return content.length
}
getContentLength('Javascript')



/**
 * --------------------- KIỂU SỐ (NUMBER) TRONG JAVASCRIPT --------------------------
 
 * 1. TẠO GIÁ TRỊ NUMBER
 *      - Các cách tạo
 *      - Dùng cách nào, tại sao?
 *      - Kiểm tra data type
 * 2. LÀM VIỆC VỚI NUMBER
 *      - To string - biến số thành chuỗi
 *      - To fixed - làm tròn
 */

var age = 18
var PI = 3000.254585695
console.log(PI.toFixed(3)) //làm tròn



/** 
 * ----------------------- MẢNG TRONG JAVASCRIPT - ARRAY -------------------------
 
 * 1. TẠO MẢNG
 *      - Cách tạo
 *      - Sử dụng cách nào? Tại sao?
 *      - Kiểm tra data type?
 * 2. TRUY XUẤT MẢNG
 *      - Độ dài mảng
 *      - Lấy phần tử theo Index
 */
var languages = [ //cách tạo
    'Javascript',
    'PHP',
    'Ruby'
]
console.log(languages)

//Kiểm tra /biến language/ có phải là một array hay ko
console.log(Array.isArray(languages))

//Truy xuất mảng
console.log(languages.length)
//Lấy phần tử theo index - (key, chỉ mục)
console.log(languages[2]) // nó sẽ lấy ra Ruby

/**
 * LÀM VIỆC VỚI ARRAY
 *      1. To string
 *      2. Join
 *      3. Pop
 *      4. Push
 *      5. Shift
 *      6. Unshift
 *      7. Splicing
 *      8. Concat
 *      9. Slicing
 */

var languages = [ //cách tạo
    'Javascript',
    'PHP',
    'Ruby'
]

// 1.
console.log(languages.toString())
console.log(typeof languages.toString())

// 2. Join - nối
console.log(languages.join(' - ')) //giống toString, ngăn cách abnwgf dấu gạch ngang
// hàm trả về 1 chuỗi là kết quả của việc nối từng phần tử của mảng với charactor.
function joinWithCharacter(array, character) {
      return array.join(character);
}

// hàm này sẽ trả về phần tử cuối cùng trong mảng.
function getLastElement(games) {
    return games[games.length - 1]
}

// hàm này sẽ trả về phần tử đầu tiên trong mảng.

// 3. Pop -  xóa phần tử cuối mảng, trả lại phần tử đã xóa
console.log(languages.pop())
console.log(languages) //mảng gốc còn lại

//4. Push - thêm 1/nhiều phần tử cuối mảng
console.log(languages.push('Dart')) //trả lại số lượng phần tử khi thêm 
console.log(languages) //mảng đã thêm

// 5. Shift - xóa đi phần tử đầu mảng, trả về phần tử đã xóa
console.log(languages.shift())
console.log(languages)

// 6. Unshift - thêm 1/nhiều phần tử đầu mảng, trả về số lượng
console.log(languages.unshift('Dart', 'Java'))
console.log(languages)

// 7. Splicing (Xóa, cắt, chèn)
//XÓA
languages.splice(1, 2) //tham số đầu: 1 là PHP, tham số hai: số lượng elements mà mình muốn xóa
//lúc này hắn sẽ xóa PHP và Ruby

//CHÈN
languages.splice(1, 0, 'Dart') //hắn sẽ chèn vào vị trí số 1 (Javascript -> dart -> php -> ruby)

//Đầu: vị trí cần chèn/xóa (vị trí con trỏ)
//Giữa: xóa mấy cái phía sau (slg muốn xóa)
//Cuối: muốn truyền vào

// 8. Concat - hợp nhất 2 mảng
var languages2 = [
    'Dart',
    'Java'
]
console.log(languages.concat(languages2))

// 9. Slice - cắt lấy 1 vài/ toàn bộ
console.log(languages.slice(1, 2))
//đầu, vị trí bắt đầu, vị trí muốn cắt



/**
 * -------------------------- OBJECT TRONG JAVASCRIPT -----------------------
 
 * Lưu trữ thông tin của một đối tượng cụ thể
 */

var myInfor = {
    name: 'Hong Nhung',
    age: 18,
    address: 'Da Nang, VN',
    myKey: '123'
}

myInfor.email = 'nguyenhongnhung@gmai.com' // thêm mới 1 key-value email
myInfor['my-email'] = 'nguyenhongnhung@gmai.com'

console.log(myInfor)

console.log(myInfor.name) //lấy một key-value ra ngoài (name)

var myKey = 'address'
console.log(myInfor.myKey)      //Lấy ra giá trị myKey: 123
console.log(myInfor[myKey])     //Lấy ra giá trị myKey: Da Nang, VN

//
var emailKey = 'email'

var myInfor = {
    name: 'Hong Nhung',
    age: 18,
    address: 'Da Nang, VN',
    myKey: '123',
    [emailKey]: 'nhung@gmail.com', //thêm một biến có sẵn vào
    getName: function() {          //thêm hàm vào trong Object
        return this.name
    }
}
console.log(typeof myInfor.getName)
console.log(myInfor.getName())     //gọi hàm

//Xóa cặp key-value trong Object
delete myInfor.age

//BÌNH THƯỜNG SẼ LÀ KEY-VALUE, không cần phải gọi ra - THUỘC TÍNH property
//NHƯNG TRONG TRƯỜNG HỢP LÀ FUNCTION --> GỌI LÀ *phương thức* - METHOD


// OBJECT CONSTRUCTOR - xây dựng đối tượng
function User(firstName, lastName, avatar) {
    this.firstName = firstName
    this.lastName = lastName
    this.avatar = avatar

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

var author = new User('Son', 'Dang', 'Avatar')
var user = new User('Vu', 'Nguyen', 'Avatar')

author.tittle = 'Chia sẻ dạo tại F8'
user.comment = 'Liệu có khóa asp.net k ad :D'

console.log(author)
console.log(user)

console.log(author.getName())
console.log(user.getName())



/**
 * Tóm lại, khi sử dụng this, bạn tạo ra các thuộc tính và phương thức riêng 
 * cho từng đối tượng được tạo. Khi sử dụng prototype, bạn tạo ra các thuộc tính 
 * và phương thức chung cho tất cả các đối tượng được tạo từ cùng một hàm tạo.
 */



// -------- OBJECT PROTOTYPE - BASIC (nguyên mẫu để tạo nên một đối tượng)

//      1. Prototype là gì?
//      2. Sử dụng khi nào?
function User(firstName, lastName, avatar) {
    this.firstName = firstName
    this.lastName = lastName
    this.avatar = avatar

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

User.prototype.className = 'F8'  // THÊM MỘT THUỘC TÍNH Ở BÊN NGOÀI HÀM TẠO
User.prototype.getClassName = function() {
    return this.className
}

var user = new User('Son', 'Dang', 'Avatar1')
var user2 = new User('Vu', 'Nguyen', 'Avatar2')

console.log(user.className)
console.log(user2)


// ĐỐI TƯỢNG DATE - lấy ra các giá trị tgian
var date = new Date()

console.log(date) //trả về tgian hiện tại
console.log(typeof date)
console.log(date.getFullYear())

var year = date.getFullYear()
var month = date.getMonth() + 1
var day = date.getDate()

console.log(`${day}/${month}/${year}`)

/**
 * hàm này sẽ trả về năm kế tiếp. Ví dụ, năm nay là 2022, 
 * hàm sẽ trả về 2023 là kiểu số.
 */
function getNextYear() {
    var getNextYear = new Date().getFullYear()
    return getNextYear + 1
}

getNextYear('2023')


/**
 * ----------------- MATH OBJECT
 
 *      - Math.PI
 *      - Math.round()
 *      - Math.abs() - giá trị tuyệt đối
 *      - Math.ceil() - làm tròn trên (vs 4,000000555 -> 5)
 *      - Math.floor() - làm tròn dưới (vd 4,999999  -> (vd 0,02515)
 *      - Math.min()
 *      - Math.max()
 */

console.log(Math.PI)
console.log(Math.round(4.125))
console.log(Math.floor(Math.random() * 100)) // random số từ 0 -> 100

// --------------------
var random = Math.floor(Math.random() * 5)
var bonus = [
    '50 coins',
    '4 coins',
    '10 coins',
    '6 coins',
]
console.log(bonus[random])   // random đều nhau, tỉ lệ nhận được các coins là bằng nhau

// Cách tạo ra tỉ lệ xảy ra 5%
var random = Math.random() * 100

if (random < 5) {    //số 5 đây là tỉ lệ random trúng là 5%, vd thay 50% thì đen đỏ :v
    console.log('Cường hóa thành công')
}

console.log(Math.min(-5, 1, 7, 52, 20))

/**
 * Hãy tạo hàm getRandomItem, hàm này nhận 
 * 1 tham số là mảng và sẽ trả về ngẫu nhiên 1 phần tử của mảng.
 */
// C1
getRandomItem('5', '2', '8', '-5', '45')
var arr=[] 
function getRandomItem(arr){ 
    var random = Math.floor(Math.random() * arr.length)
    return arr[random]
}

// C2
function getRandomItem(array) {
    // Kiểm tra nếu mảng rỗng
    if (array.length === 0) {
      return null;
    }
    // Sinh số ngẫu nhiên từ 0 đến độ dài của mảng
    var randomIndex = Math.floor(Math.random() * array.length);
    // Trả về phần tử ngẫu nhiên
    return array[randomIndex];
  }

var myArray = [1, 2, 3, 4, 5]
var randomItem = getRandomItem(myArray)
console.log(randomItem)


