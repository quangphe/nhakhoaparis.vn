// Hiển thị menu ra màn hình
const renderDataDoctor = (data, name) => {
    const cateName = data.filter((item) => {
        return item.name === name;
    });
    let html = `
        <div class="doctor_4_1_0__bg"></div>
        <div class="doctor_4_1_0__closePic">×</div>
        <div class="slide_item">
            <div class="doctor_4_1_0__item row">
                <div class="col-lg-6 doctor_4_1_0__text">
                    <div class="doctor_4_1_0__name">
                    ${cateName[0].title} ${cateName[0].name} 
                    </div>
                    ${cateName[0].group}
                    <a href="#" class="doctor_4_1_0__button">
                        <span>
                            <div class="doctor_4_1_0__more">Tìm hiểu thêm về bác sĩ</div>
                        </span>
                    </a>
                </div>
                <div class="col-lg-6 doctor_4_1_0__pic">
                    <picture>
                        <source media="(min-width:600px)" srcset="https://nhakhoaparis.vn/${cateName[0].image}">
                        <img width="556" height="480" src="https://nhakhoaparis.vn/${cateName[0].imageMB}"
                            alt="${cateName[0].title} ${cateName[0].name}">
                    </picture>
                </div>
            </div>
        </div>
    `;
    document.getElementById('slide_thumb3').innerHTML = html;
    
    document.querySelector('.doctor_4_1_0__closePic').addEventListener('click', function() {
        document.querySelector('.doctor_4_1_0__bg').style.display = 'none';
        document.querySelector('.slide_item').style.display = 'none';
        document.querySelector('.doctor_4_1_0__closePic').style.display = 'none';
    });
};

// Get API Doctor
const getDoctor = async () => {
    const response = await fetch(`https://nhakhoaparis.vn/wp-json/wp/v2/pages/81752`);
    const data = await response.json();
    const doctorJSON = data.acf.page_field[1].doctor_sub_fields[0].info1;
    
    const doctor = doctorJSON.map((item) => {
        const info1_ct = item.info1_ct.split("\r\n");
        const sub = item.sub.split("\r\n\r\n");
        return { title: info1_ct[0], name: info1_ct[1], image: info1_ct[2], imageMB: info1_ct[3], group: sub };
    });

    // renderDataDoctor(doctor, "PHILIPPE TAROT");

    var tabLinks = document.querySelectorAll(".doctor_4_1_0__tab__item");
    tabLinks.forEach(function (el) {
        el.addEventListener("click", function () {
            const element = el.getAttribute('data-id');
            tabLinks.forEach(function (el) {
                el.classList.remove('active');
            });
            el.classList.add('active');
            renderDataDoctor(doctor, element);

            document.querySelector('.slide_item').style.display = 'block';
            document.querySelector('.doctor_4_1_0__bg').style.display = 'block';
            document.querySelector('.doctor_4_1_0__closePic').style.display = 'flex';
        });
    });

    const heightBox = document.querySelector('#slide_thumb3').offsetHeight;
    document.querySelector('#slide_thumb3').style.minHeight = `${heightBox}px`
};

getDoctor();