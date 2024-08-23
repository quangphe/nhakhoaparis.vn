const renderDataService = (data, name) => {
    const mainService = data.filter((item, index) => {
        return index === Number(name);
    });

    const svItem = mainService[0].pushSv.map((item) => {
        return `
            <a class="col-lg-4 service_9_0_0__content" href="${item.link}">
                <div class="service_9_0_0__pic picChildren">
                    <img width="353" height="395" src="https://nhakhoaparis.vn/${item.imgPic}" alt="${item.title}" loading="lazy">
                    <div class="service_9_0_0__icon">
                        <img width="71" height="71" src="https://nhakhoaparis.vn/${item.icon}" alt="icon" loading="lazy">
                    </div>
                    <h2 class="service_9_0_0__itemTitle">
                        ${item.title}
                    </h2>
                </div>
            </a>
        `;
    });
   
    document.getElementById('slide_service').innerHTML = `
        <div class="slide_item">
            <div class="service_9_0_0__item row">${svItem.join('')}</div>
        </div>
    `;
}

// Get API Service
const getService = async () => {
    const service = [];
    const response = await fetch(`https://nhakhoaparis.vn/wp-json/wp/v2/pages/81752`);
    const data = await response.json();
    const serviceJSON = data.acf.group_page_field.body_custom.filter((item) => {
        return item.acf_fc_layout == "service_9_0_0"
    });

    serviceJSON[0].info.map((item) => {
        const pushService = [];
        const serviceName = item.info_service_name.split("\r\n");
        item.info_service_data.map((itemChild) => {
            const serviceData = itemChild.content.split("\r\n");
            pushService.push({ imgPic: serviceData[0], icon: serviceData[2], link:serviceData[3], title: serviceData[4] });
        });
        service.push({ name: serviceName[1], pushSv: pushService, link: serviceName[2] });
    });
    
    // Kiểm tra màn hình là destop render 3 dịch vụ lớn
    window.innerWidth > 600 && renderDataService(service, 0);

    // Màn hính là PC và responsive Render 3 dịch vụ lớn
    window.innerWidth > 600 && window.addEventListener('resize', ()=> {
        renderDataService(service, 0);
    });

    var tabLinks = document.querySelectorAll(".service_9_0_0__tab__item");
    tabLinks.forEach(function (el) {
        el.addEventListener("click", function () {
            const element = el.getAttribute('data-id');
            tabLinks.forEach(function (el) {
                el.classList.remove('active');
            })
            el.classList.add('active');
            renderDataService(service, element);
        });
    });
};

getService();
window.addEventListener('resize', ()=>{
    getService();
});

// Lấy tất cả các thẻ a trong các thẻ li có class là service_9_0_0__tab__item
const links = document.querySelectorAll('.service_9_0_0__tab__item a');

// Hàm xử lý khi màn desktop
function handleDesktop() {
    links.forEach((link) => {
        const item = link.childNodes[1];
        const box = link.parentNode;
        box.insertBefore(item, box.children[0]);
        link.style.display = "none";
    });
}

// Kiểm tra kích thước màn hình để xác định hiển thị trên desktop hay mobile
function checkScreenWidth() {
    if (window.innerWidth > 600) {
        handleDesktop();
    } 
}

// Gọi hàm kiểm tra kích thước màn hình khi trang được tải
checkScreenWidth();

// Thêm sự kiện resize để xử lý khi thay đổi kích thước màn hình
window.addEventListener('resize', checkScreenWidth);
