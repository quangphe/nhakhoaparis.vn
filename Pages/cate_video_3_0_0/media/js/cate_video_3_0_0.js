// Loading
document.body.insertAdjacentHTML("beforeend", `
    <div class="loading_kn_1_0_0"></div>
    <style>
      .loading_kn_1_0_0{
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        width: 100vw;
        height: 100vh;
        background: #fff;
        background-image: url("media/images/loading_icon3.gif");
        background-repeat: no-repeat;
        background-position: center;
      }
    </style>
    `)
window.onload = () => {
    setTimeout(() => {
        document.querySelector('.loading_kn_1_0_0').remove();
    }, 700)
}

// Header
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
window.onscroll = function(){ menuFix() };

var header = document.getElementById("header_6_0_0__main");
var sticky = header.offsetTop;

function menuFix() {
    if (window.pageYOffset > sticky) {
        header.classList.add("menufix");
    } else {
        header.classList.remove("menufix");
    }
}

// Lưu dữ liệu vào biến headerData
let headerData = [];

const renderMenuItems = () => {
    const menuElement = document.getElementById('header_6_0_0__box2__menu');
    let html = '';
    headerData.forEach((item, index) => {
        html += renderMenuItem(item, index);
    });
    menuElement.innerHTML = html;
};

// Render nội dung của mỗi item
const renderMenuItem = (item, index) => {
    let html = `
        <li class="header_6_0_0__box2__menuSub">
            <div class="header_6_0_0__box2__title arr">${item.title}</div>
            <i class="icon-plus menu-icon" id="icon-plus">+</i>
            <div class="header_6_0_0__box2__menuSubBox">
                <div class="box">
                    <div class="row">
                        ${colHeader(item.group)}
                    </div>
                </div>
            </div>
        </li>
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
    const response = await fetch(`https://nhakhoaparis.vn/wp-json/api/v1/menu/`);
    const data = await response.json();
    const headerJSON = data.id_header_6_0_0_sub1;
    headerData = headerJSON.map((item) => {
        const titleMain = item.title.split("\r\n");
        const itemCol = item.col1.split("\r\n\r\n");
        return { title: titleMain[0], group: itemCol };
    });

    renderMenuItems();
};

getHeader();

// Chia row 
function colHeader(data) {
    data = data[0].split("<p>&nbsp;</p>");
    let html = ``;
    if (data.length % 2 === 0) {
        data.map((item) => {
            html += `
                <div class="col-lg-6">
                    <div class="titleChild">
                    ${item}
                    </div>
                </div>  
            `
        })
    } else {
        data.map((item) => {
            html += `
                <div class="col-lg-4">
                    <div class="titleChild">
                    ${item}
                    </div>
                </div>  
            `
        })
    }
    return html;
}

// Tabs video
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.cate_video_3_0_0__thumb');
    const slideItems = document.querySelectorAll('.cate_video_3_0_0__tab__item');
    const prevButton = document.querySelector('.cate_video_3_0_0__prev');
    const nextButton = document.querySelector('.cate_video_3_0_0__next');
    let currentSlide = 0;

    function showSlide(index) {
        slideItems.forEach(item => {
            item.style.display = 'none';
        });
        for (let i = index; i < index + getItemsToShow(); i++) {
            if (slideItems[i]) {
                slideItems[i].style.display = 'flex';
            }
        }
    }

    function getItemsToShow() {
        if (window.innerWidth <= 820 && window.innerWidth > 430) {
            return 4; // Hiển thị 4 item khi độ rộng màn hình từ 431px đến 820px
        } else if (window.innerWidth <= 430) {
            return 2; // Hiển thị 2 item khi độ rộng màn hình nhỏ hơn hoặc bằng 430px
        } else {
            return 6; // Mặc định hiển thị 6 item
        }
    }

    function nextSlide() {
        if (currentSlide < slideItems.length - 1) {
            currentSlide++;
            showSlide(currentSlide);
            updateButtons();
        }
    }

    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            showSlide(currentSlide);
            updateButtons();
        }
    }

    function updateButtons() {
        if (currentSlide <= 0) {
            prevButton.disabled = true;
        } else {
            prevButton.disabled = false;
        }
        if (currentSlide >= slideItems.length - getItemsToShow()) {
            nextButton.disabled = true;
        } else {
            nextButton.disabled = false;
        }
    }

    showSlide(currentSlide);
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    window.addEventListener('resize', function() {
        showSlide(currentSlide);
        updateButtons();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const tabItems = document.querySelectorAll('.cate_video_3_0_0__tab__item');
    const videoContainer = document.getElementById('cate_video_3_0_0__row');
    tabItems.forEach(item => {
        item.addEventListener('click', function() {
            // Xóa class 'active' khỏi tất cả các item
            tabItems.forEach(item => {
                item.classList.remove('active');
            });
            // Thêm class 'active' cho item được click
            item.classList.add('active');
            // Lấy data-id của item được click
            const dataId = item.getAttribute('data-id');
            // Filter dữ liệu từ JSON dataVideo theo cateGroup tương ứng với data-id
            const filteredData = dataVideo.filter(video => video.cateGroup === dataId);
            // Render dữ liệu vào videoContainer
            videoContainer.innerHTML = '';
            // Biến để kiểm tra xem đã render object đầu tiên hay chưa
            let firstObjectRendered = false;
            // Render object đầu tiên vào cate_video_3_0_0__box1
            if (filteredData.length > 0) {
                videoContainer.innerHTML += `
                    <div class="cate_video_3_0_0__box1 col-lg-8" id="video-container">
                        <a rel="noffollow" class="modal-clipNew" video="${filteredData[0].url}">
                            <div class="cate_video_3_0_0__box1__item">
                                <div class="cate_video_3_0_0__pic">
                                    <img width="750" height="421" src="${filteredData[0].thumb}" alt="${filteredData[0].title}" loading="lazy">
                                </div>
                                <div class="cate_video_3_0_0__text">
                                    <div class="cate_video_3_0_0__ttVideo">${filteredData[0].title}</div>
                                    <span>Lượt xem: ${filteredData[0].view}</span>
                                </div>
                            </div>
                        </a>
                    </div>
                `;
                firstObjectRendered = true;
            }
            // Render các object còn lại vào cate_video_3_0_0__box2
            if (filteredData.length > 1) {
                videoContainer.innerHTML += `
                    <div class="cate_video_3_0_0__box2 col-lg-4">
                        <div class="scrollbar" id="style-1">
                            <div class="force-overflow" id="force-overflow">
                                ${filteredData.slice(1).map(video => `
                                    <div class="cate_video_3_0_0__itemBox2">
                                        <a rel="noffollow" class="modal-clipNew" video="${video.url}" >
                                            <div class="cate_video_3_0_0__itemBox2__pic">
                                                <img width="200" height="112" src="${video.thumb}" alt="${video.title}" loading="lazy">
                                            </div>
                                            <div class="cate_video_3_0_0__itemBox2__content">
                                                <p>${video.title}</p>
                                                <span>Lượt xem: ${video.view}</span>
                                            </div>
                                        </a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>                    
                `;
            }

            const modal_clip = document.querySelectorAll('.modal-clipNew');
            modal_clip.forEach(item => {
                item.addEventListener('click', function() {                   
                    newVideo(item.getAttribute("video"));
                })
            })

        });
    });
    function newVideo(id) {
        document.body.insertAdjacentHTML('beforeend', `
            <div class="modal modal-clipBox" id="modal-clipNew" style="display:flex">
                <div class="modal-closePic" id="modal-closePic">×</div>
                <div class="modal-box modal-box-video animate-zoom">
                    <div class="modal-video">
                        <iframe id="youtube" src="//www.youtube-nocookie.com/embed/${id}?rel=0&amp;controls=1&amp;autoplay=1&amp;nocookie=true&amp;mute=true" frameborder="0" allowfullscreen=""></iframe>
                    </div>
                </div>
                <div class="modal-bg" id="modal-bg"></div>
            </div>                
        `);
        document.querySelector("#modal-closePic").addEventListener("click", function() {
            document.querySelector("#modal-clipNew").remove();
        } )                
        document.querySelector("#modal-bg").addEventListener("click", function() {
            document.querySelector("#modal-clipNew").remove();
        } )                
    }
});