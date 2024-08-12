
var index = 0;
function changeIMG(){
    index++;
    var i = ["img/banner2.jpg","img/river.jpg","img/hotel.jpg","img/city1.jpg","img/natural.jpg","img/samac.jpg","img/beach1.jpg"];
    if(index==i.length) index=0;
    document.getElementById("imgs").src = i[index]; 
}
setInterval(changeIMG,1500);


/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
// lấy phần tử body và lưu nó vào biến box
// Lấy phần tử <select> và lưu vào biến selectElement
box = document.querySelector("body"); 
const selectElement = document.querySelector("select");

// Lấy giá trị đã chọn từ local storage (nếu có) và lưu vào biến savedColor.
const savedColor = localStorage.getItem("selectedColor");

// Khôi phục giá trị đã lưu (nếu có) 
//Nếu có giá trị đã lưu trong savedColor, thiết lập giá trị của <select> thành savedColor và gọi hàm change(savedColor) để thay đổi màu nền của <body>.
if (savedColor) {
  selectElement.value = savedColor;
  change(savedColor);
}

// Sự kiện onchange cho <select>
//Thêm sự kiện onchange cho phần tử <select>. Khi người dùng thay đổi giá trị, hàm được gọi để thay đổi màu nền và lưu giá trị đã chọn vào local storage.
selectElement.addEventListener("change", function () { //khi người dùng thay đổi giá trị của <select>, sự kiện change được kích hoạt--Mã sẽ lấy giá trị đã chọn, thay đổi màu nền và lưu giá trị đã chọn vào local storage để có thể khôi phục lại sau khi trang web được tải lại.
  const selectedColor = this.value;      //lấy giá trị đã chọn từ phần tử <select> và lưu vào biến selectedColor. Trong ngữ cảnh này, this đề cập đến phần tử <select>.
  change(selectedColor);   //Hàm change(selectedColor) được gọi để thay đổi màu nền của phần tử <body> thành màu đã chọn.
  // được sử dụng để lưu giá trị đã chọn vào local storage với khóa "selectedColor".
  localStorage.setItem("selectedColor", selectedColor); // được sử dụng để lưu giá trị đã chọn vào local storage với khóa "selectedColor"
});

// Hàm thay đổi màu nền
function change(color) {
  box.style.background = color;
}


/******************************************************************************************************************** */
function changeImg(id){
  let imgPa = document.getElementById(id).getAttribute('src'); //hàm này lấy giá trị src của hình ảnh nhỏ đó thông qua phương thức getAttribute('src')
  document.getElementById('img-tall').setAttribute('src',imgPa);
}
//nếu người dùng nhấp chuột vào hình ảnh nhỏ với id là "one", hàm changeImg('one') sẽ được gọi. Nó sẽ lấy giá trị src của hình ảnh "one" và gán giá trị đó cho thuộc tính src của hình ảnh lớn (với id là "img-tall"). Sau đó, hình ảnh lớn sẽ thay đổi thành hình ảnh "one". 
