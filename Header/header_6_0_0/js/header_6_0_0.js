// Xử lý click menu mobile
document.getElementById("toggle").addEventListener("click", () => {
    document.getElementById("headerMenu").classList.add("active");
    document.getElementById("menu-bg").classList.add("active");
});
document.getElementById("menu-bg").addEventListener("click", () => {
    document.getElementById("headerMenu").classList.remove("active");
    document.getElementById("menu-bg").classList.remove("active");
});

// Xử lý scroll menu
window.addEventListener("scroll", function() {
    var headerBoxTop = document.querySelector(".header_6_0_0__boxTop");
    var headerBox1 = document.querySelector(".header_6_0_0__box1");
    var headerBox1Left = document.querySelector(".header_6_0_0__box1Left");
    var headerBox2 = document.querySelector(".header_6_0_0__box2");
    var headerLogoBox2 = document.querySelector(".header_6_0_0__box2__logosb");

    headerBoxTop.style.display = window.scrollY > 0 ? "none" : "block";
    headerBox1.style.display = window.scrollY > 0 ? "none" : "block";
    headerBox1Left.style.display = window.scrollY > 0 ? "none" : "flex";
    headerBox2.style.display = "block";
    headerBox2.style.background = window.scrollY > 0 ? "#fff" : "#ebecf0";
    headerLogoBox2.style.display = window.scrollY > 0 ? "block" : "none";
});

// Lưu dữ liệu vào biến headerData
let headerData = [];

// Render nội dung của mỗi item
const renderMenuItem = (item) => {
    let html = `
        <div class="header_6_0_0__box2__title arr">${item.title}</div>
        <i class="icon-plus menu-icon" id="icon-plus">+</i>
        <div class="header_6_0_0__box2__menuSubBox">
            <div class="box">
                <div class="row">
                    ${colHeader(item.group)}
                </div>
            </div>
        </div>
    `;
    return html;
};



// Thêm sự kiện hover/click vào từng item trong danh sách ul
document.querySelectorAll('.header_6_0_0__box2__menuSub').forEach((item, index) => {
    // let menuSubBox = item.querySelector('.header_6_0_0__box2__menuSubBox');

    if (screen.width > 1024) {
        // Xử lý sự kiện khi di chuột vào mục
        item.addEventListener('mouseover', function() {
            // Kiểm tra nếu nội dung chưa được render thì mới render
            if (!item.getAttribute('data-rendered')) {
                item.innerHTML = renderMenuItem(headerData[index]);
                item.setAttribute('data-rendered', 'true');
            }
        });
    } 
    if (screen.width <= 1024) {
        // Xử lý sự kiện khi click vào mục
        item.addEventListener('click', function() {
            if (!item.getAttribute('data-rendered')) {
                item.innerHTML = renderMenuItem(headerData[index]);
                item.setAttribute('data-rendered', 'false');
                item.classList.toggle('active');
            } else {
                item.classList.toggle('active');
            }

            // Tìm icon trong item và thay đổi nội dung của nó
            let icon = item.querySelector('.menu-icon');
            if (icon) {
                if (icon.textContent === '+') {
                    icon.textContent = '-';
                } else {
                    icon.textContent = '+';
                }
            }
        });
    }

    
});


// Get API Header
const getHeader = async () => {
    const response = await fetch(`https://nhakhoaparis.vn/wp-json/wp/v2/pages/59018`);
    const data = await response.json();
    const headerJSON = data.acf.page_field[0].header_sub[0].id_header_6_0_0_sub1;
    headerData = headerJSON.map(item => {
        const titleMain = item.title.split("\r\n");
        const itemCol = item.col1.split("\r\n\r\n");
        return { title: titleMain[0], group: itemCol };
    });
};

getHeader();

// Chia row
function colHeader(data) {
    let html = '';
    data.forEach(item => {
        html += `
            <div class="col-lg-${data.length % 2 === 0 ? '6' : '4'}">
                <div class="titleChild">${item}</div>
            </div>
        `;
    });
    return html;
}
