const renderDataService = (data, name) => {
    const mainService = data.filter((item) => {
        return item.name === name;
    })

    let html = `
        <div class="slide_item">
            <div class="service_9_0_0__item row">
                <div class="col-lg-4 service_9_0_0__content">
                    <div class="service_9_0_0__pic">
                        <img width="353" height="395" src="https://nhakhoaparis.vn/${mainService[0].pushSv[0].imgPic}" alt="" loading="lazy">
                        <div class="service_9_0_0__icon">
                            <img width="71" height="71" src="https://nhakhoaparis.vn/${mainService[0].pushSv[0].icon}" alt="" loading="lazy">
                        </div>
                    </div>
                    <div class="service_9_0_0__text">
                        ${mainService[0].pushSv[0].group.join('')}
                        <a target="_blank" href="#" class="read_more">Nhận ưu đãi >> </a>
                    </div>
                </div>
                <div class="col-lg-4 service_9_0_0__content">
                    <div class="service_9_0_0__pic">
                        <img width="353" height="395" src="https://nhakhoaparis.vn/${mainService[0].pushSv[1].imgPic}" alt="" loading="lazy">
                        <div class="service_9_0_0__icon">
                            <img width="70" height="71" src="https://nhakhoaparis.vn/${mainService[0].pushSv[1].icon}" alt="" loading="lazy">
                        </div>
                    </div>
                    <div class="service_9_0_0__text">
                        ${mainService[0].pushSv[1].group.join('')}
                        <a target="_blank" href="#" class="read_more">Nhận ưu đãi >> </a>
                    </div>
                </div>
                <div class="col-lg-4 service_9_0_0__content">
                    <div class="service_9_0_0__pic">
                        <img width="353" height="395" src="https://nhakhoaparis.vn/${mainService[0].pushSv[2].imgPic}" alt="" loading="lazy">
                        <div class="service_9_0_0__icon">
                            <img width="71" height="71" src="https://nhakhoaparis.vn/${mainService[0].pushSv[2].icon}" alt="" loading="lazy">
                        </div>
                    </div>
                    <div class="service_9_0_0__text">
                        ${mainService[0].pushSv[2].group.join('')}
                        <a target="_blank" href="#" class="read_more">Nhận ưu đãi >> </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.getElementById('slide_service').innerHTML = html;
}

// Get API Service
const getService = async () => {
    const service = [];
    const response = await fetch(`https://nhakhoaparis.vn/wp-json/wp/v2/pages/81752`);
    const data = await response.json();
    const serviceJSON = data.acf.page_field[2].service_sub_fields[0].info;
    console.log(serviceJSON);
    serviceJSON.map((item) => {
        const pushService = [];
        const serviceName = item.info_service_name.split("\r\n");
        // console.log(serviceName);
        item.info_service_data.map((itemChild) => {
            const serviceData = itemChild.content.split("\r\n");
            // console.log(serviceData);
            const serviceSub = itemChild.sub.split("\r\n");
            // console.log(serviceSub);
            pushService.push({ imgPic: serviceData[0], icon: serviceData[2], group: serviceSub });
        });
        service.push({ name: serviceName[1], pushSv: pushService });
    });
    
    renderDataService(service, "Niềng răng");

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