//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
/**
 *  -    HTML DOM (Document Object Model) - Mô hình tài liệu thể hiện dưới dạng đối tượng
 * 
 *  Từ file html tạo ra một mô hình cây (là HTML DOM). 3 thành phần
 *  1. Elements (<html, head, h1, a, class, id,) - là cái thẻ trong html
 *  2. Attribute (link,  href) - thuộc tính trong thẻ
 *  3. Text ("my link: ")
 * 
 *  -    Hình vuông: là một Node
 *  -    WEB hệ thống hóa thành mô hình DOM. Có thể thay đổi 3 thành phần này (có thể thay đổi cả web)
 *      
 */

//-------------------------------------------------------------
//-------------------------------------------------------------

// Javascript - cung cấp bộ công cụ phương tiện để có thể chọc vào cái HTML DOM

// Browser: HTML -> DOM -> WEB API
// API: Application programming interface (một ứng dụng mở ra con đg cho 
//ứng dụng khác nhìn thấy, giao tiếp được)


//-------------------------------------------
// DOCUMENT OBJECT (đại diện cho cả website)

console.log(document);
document.write('Hello guys!')


// -------------------- GET ELEMENT METHOD()------------------
// Element: ID, class, tag, CSS selector, HTML collection (form)

//  1. ID
var headingNode = document.getElementById('heading')
console.log(headingNode)

// console.log({
//     element: headingNode
// })

//  2. Class
var headingNodes = document.getElementsByClassName('heading') // trả về nhiều elements
console.log(headingNodes)

//  3. Tag - tên thẻ
var headingNodes = document.getElementsByTagName('h1')
console.log(headingNodes)

var headingNodes = document.getElementsByTagName('p')
console.log(headingNodes)

//  4. CSS selector
var headingNode = document.querySelector('.heading')
console.log(headingNode)

var headingNode = document.querySelector('.heading-2')

var headingNode = document.querySelector('.box .heading-2')

var headingNode = document.querySelector('.box .heading-2:first-child') // lấy ra th đầu

var headingNode = document.querySelector('.box .heading-2:nth-child(2)') // lấy ra th số 2

//  5. HTML Collection (form, thẻ a, thẻ img,..)
console.log(document.forms['form-1'])

console.log(document.forms.testForm)

//  6. Button



//----------------------------

// -------------------- GET ELEMENT METHOD 2 ()------------------
var boxNode = document.querySelector('.box-1')

// Công việc 1: Sử dụng tới 'boxNode'
console.log(boxNode)

// Công việc 2: Sử dụng tới các li elements là con của '.box-1'
console.log(boxNode.querySelectorAll('li'))
console.log(boxNode.getElementsByTagName('li'))

/**
 * ------------------- ÔN LẠI KIẾN THỨC ----------------------------------
 *      1. getElementById (trả về trực tiếp element) - lấy element (consolog ra là thấy)
 *      2. getElementsByClassName
 *      3. getElementsByTagName
 *      4. querySelector (trả về trực tiếp 1 element) - lấy element (consolog ra là thấy)
 *      5. querySlectorAll
 * 
 *      6. HTML Collection
 *      7. document.write
 */

// -------------------- ATTRIBUTE NODE (id, class, tittle) ------------------

// -------------------- TEXT NODE (chữ trong element) ------------------

// -------------------- DOM ATTRIBUTE (THUỘC TÍNH THẺ) -----------------

//------------ THÊM ATTRIBUTE (ko cần phải hợp lệ với elements)
// C1. Truy xuất trực tiếp
var headingElement = document.querySelector('h1')
// thêm tag title và thẻ h1
headingElement.title = 'Heading'
// thêm id vào thẻ h1
headingElement.id = 'Heading'
// thêm class vào thẻ h1
headingElement.className = 'Heading'
// thêm thẻ a (thẻ a mới) - nhớ đổi lại querySlector('a')
headingElement.href = 'Heading'

// Cách 2 - set attribute trong 1 elements - qua PHƯƠNG THỨC (thuộc tính href có giá trị heading)
headingElement.setAttribute('href', 'heading')

var headingElement = document.querySelector('h1')
headingElement.setAttribute('data-title','F8 - Học lập trình để đi làm')

//------------- GET RA ATTRIBUTE
headingElement.getAttribute('class') //lấy ra attribute <h1 class="heading-test"></h1>

headingElement.title = 'Title test'
headingElement.getAttribute('title') // get attribute tạo trong file js



/**
 * -------------------- INNERTEXT VS TEXTCONTENT PROPERTY ----------
 *  Lấy ra + sửa đổi nội dung Take note nằm trong element
 */

var headingElement = document.querySelector('.heading')

headingElement
// Geter - Cách để lấy ra
console.log(headingElement.innerText)
console.log(headingElement.textContent)

// Seter - Cách để sửa đổi - gán
headingElement.innerText = 'New heading'
headingElement.textContent = 'New heading'

// Sự khách nhau giữa innerText và textContent
// innerText: Lấy ra cái giao diện hiện thấy
// textContent: Lấy ra cái trong hệ thống có


/**
 * ----------------- INNER HTML vs OUTER HTML PROPERTY --------------
 *      Cách thêm 1 element vào một element trong DOM, đồng thời thêm cả attribute + takenote
 */

// Cho class box - thêm thẻ h1 vào trong elements

var boxElement = document.querySelector('.box')

boxElement.innerText = '<h1>Heading</h1>' // Không dùng được

// -> inner 
boxElement.innerHTML = '<h1>New Heading</h1>' 
boxElement.innerHTML = '<h1 title="Heading">New Heading</h1>' // chèn giá trị h1 vào trong thẻ box

// get thằng h1
console.log(document.querySelector('h1').innerText)
console.log(boxElement.innerHTML) // lấy ra nội dung HTML

// outerHTML
var boxElement = document.querySelector('.box') //box đã cho trước
boxElement.outerHTML = '<span>Test</span>' // vì là outer nên nó ghi đè vào div box luôn và cái div box biến mất

console.log(boxElement) // nhưng khi console.log ra thì cái thẻ div box vẫn còn đó chứ ko bị xóa đi
// còn trong bộ nhớ thôi - nhưng trong DOM thật ko còn nữa
// tức là ko lấy ra/dùng được nữa

/**
 * BÀI TẬP: Các bạn hãy viết hàm render nhận vào 1 tham số là html, hàm render sẽ có nhiệm vụ 
 * chèn giá trị của html vào trong thẻ ul đã cho trước.
 */

function render(html) {
    var itemElement = document.querySelector('ul')
    itemElement.innerHTML = html
}

/**
 * Các bạn hãy viết hàm render có 1 tham số courses, hàm render sẽ thêm các item 
 * của mảng courses để tạo thành 1 danh sách các khóa học trên giao diện.
 */
var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    var ul = document.querySelector('.courses-list')  //course-list là class sẵn bên html
    var html = courses.map(
        function(course) {
            return `<li>${course}</li>`
        }
    )
    return ul.innerHTML = `${html.join(' ')}`
}

render(courses)
/**
 *  Gợi ý:
 *  - Sử dụng phương thức map kết hợp với join để tạo chuỗi HTML từ mảng courses.
    - Gán chuỗi HTML vừa tạo vào thuộc innerHTML của thẻ ul giống bài trước nhé.
 */

// Xem trong này có thuộc tính gi
var boxElement = document.querySelector('.box')
console.log([boxElement])
// Cần gì? -> tìm thuộc tính phù hợp
// DOcument -> attribute node -> element node-> text node


// --------------- DOM CSS ---------------------------

var boxElement = document.querySelector('.box')
// console.log(boxElement.style)  
// mở ra sẽ có các thuộc tính css

// DOM style - mục đích CẦN THÊM CSS - chứ ko CSS CHÍNH - CSS inline
boxElement.style.width = '100px'
boxElement.style.height = '200px'
boxElement.style.backgroundColor = 'red'

// Cách viết ít dòng hơn
Object.assign(boxElement.style, {
    width: '200px',
    height: '100px',
    backgroundColor: 'green'
})

// Lấy ra giá trị
console.log(boxElement.style.backgroundColor) // lấy ra thuộc tính css chứ KP "chiều ngang" của đối tượng

/**
 * Các bạn hãy thay đổi màu nền của thẻ div có class là .red thành màu #f00 
 * và màu chữ của thẻ p thành màu #f05123.
 */
var boxElement = document.querySelector('.red')
boxElement.style.backgroundColor = '#f00'

var boxElement2 = document.querySelector('p')
boxElement2.style.color = '#f05123'



//--------------------------------------------------------
//--------- CLASSLIST PROPERTY ----------------------------
/**
 *      add - thêm class vào element
 *      contains - ktra class nằm trong element
 *      remove - loại bỏ class khỏi el
 *      toggle - nếu đang có class, gọi tới sẽ xóa bỏ. Ko có thì nó thêm
 */

var boxElement = document.querySelector('.box')

console.log(boxElement.classList)
console.log(boxElement.classList.value) // trả về value trong class

// add - thêm class
boxElement.classList.add('red', 'blue')

// Kiểm tra class có tồn tại teong element ko
console.log(boxElement.classList.contains('red'))

// remove
boxElement.classList.remove('red')
// remote chữ màu đỏ sau 3s
setTimeout(() => {
    boxElement.classList.remove('red')
}, 3000)

// toggle
setTimeout(() => {
    boxElement.classList.toggle('red')  // sau 3s sẽ bị xóa bỏ thg red đi.
}, 3000) // còn nếu ko có red thì nó sẽ thêm red vào sau 3s

// Hiệu ứng nhấp nháy
setInterval(() => {
    boxElement.classList.toggle('red')
}, 1000)



//----------------------- DOM EVENTS ----------------------

// Sự kiện người dùng + trình duyệt diễn ra
/**
 *      1. Attribute events
 *      2. Assign event using the element node
 * 
 *       Biết được tên sự kiện (w3s, search dom events)
 */

//  1. event click - attribute event - thêm on ở trước

//     <h1 onclick="console.log(Math.random)">DOM events</h1> - bên js

//  2. Assign event using the element node
var h1Element = document.querySelector('h1') // select thằng đầu tiên thôi

h1Element.onclick = function() {
    console.log(Math.random())
}

// click vào target - trả về 1 đối tượng
h1Element.onclick = function(e) {
    console.log(e.target)
}

// Có nhiều thẻ h1 click vào thẻ nào thì giá trị thẻ đó hiện ra
// CLICK VÀO CÁI NÀO RA CÁI ĐÓ - NHIỀU Á
var h1Element = document.querySelectorAll('h1') 
for(var i = 0; i < h1Element.clientHeight; ++i) {
    // console.log(h1Element[i]) // ra tất cả h1
    h1Element[i].onclick = function(e) {
        console.log(e.target) // chính là cái mà bạn chọn
    }
}

// BÀI TẬP: Cho trước thẻ button, các bạn hãy viết code JS sao cho 
//khi click vào button sẽ đổi màu chữ button sang màu #fff.
var h1Element = document.querySelector('button')

h1Element.onclick = () => {
    h1Element.style.color = "#fff"
}


//-------------- DOM EVENTS -----------------

//      1. input / select
//      2. Key up / down

// input - TEXT
var inputElement = document.querySelector('input[type="text"]')

inputElement.onchange = function(e) {
    console.log(e.target.value)
}

inputElement.oninput = function(e) {
    console.log(e.target.value) // lấy trực tiếp khi gõ
}

// checkbox
var inputElement = document.querySelector('input[type="checkbox"]')
inputElement.onchange = function(e) {
    console.log(e.target.checked) // đã check hay chưa
}

inputElement.onchange = function(e) {
    console.log(e.target) // lấy ra target
}

// select
var inputElement = document.querySelector('select')
inputElement.onchange = function(e) {
    console.log(e.target)
}

inputElement.onchange = function(e) {
    console.log(e.target.value) // lấy ra value
}

// Key up / down
var inputElement = document.querySelector('input[type="text"]')

inputElement.onkeyup = function(e) {
    console.log(e.target.value)
}

// Xử lý sự kiện trên bàn phím. Ex:
document.onkeydown = function(e) {
    switch(e.which) {
        case 27:
            console.log('EXIT')
            break
        case 13:
            console.log('SEND CHAT')
            break
    }
}

/**
 * -------------- DOM EVENTS -------------------
 *      1. preventDefault  - loại bỏ hành vi mặc định của trình duyệt trên thẻ html
 *      2. stopPropagation - loại bỏ sự kiện "nổi bọt"
 */

// 1. preventDefault
// 2. stopPropagation
document.querySelector('div').onclick = function() {
    console.log('DIV')
}

document.querySelector('button').onclick = function(e) {
    e.stopPropagation()
    console.log('Click me!')
}

/**
 *  EVENT LISTENER
 *      1. Xử lý nhiều việc khi 1 event xảy ra
 *      2. Lắng nghe/ Hủy bỏ lắng nghe
 */

// 1. DOM EVENT - Xử lý nhiều việc khi 1 event xảy ra
var btn = document.getElementById('btn')
btn.onclick = function() {  
    console.log('Viec 1')
    console.log('Viec 2')
    alert('Viec 3')
}
// 1. DOM EVENT - Lắng nghe/ Hủy bỏ lắng nghe
// set timeout

setTimeout(function() {
    btn.onclick = function() {  
        console.log('Viec 1')
        console.log('Viec 2')
        alert('Viec 3')
    }
}, 3000)

