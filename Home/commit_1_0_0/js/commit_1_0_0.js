// Submit Form
document.querySelector('.commit_1_0_0__box3__form input[name="first_link"]').value = document.URL;
document.querySelector('.commit_1_0_0__box3__form input[name="website"]').value = document.referrer;
// Validate Form
    Validator({
        form: '#commit_1_0_0__box3__form',
        errorSelector: '.form-message',
        formGroupSelector: '.form-group',
        rules: [
            Validator.isRequired('input[name="iname"]'),
            Validator.isRequired('input[name="imob"]'),
            Validator.isMobile('input[name="imob"]'),
            // Validator.addInput('textarea[name="itext"]', () => {
            //     return 'Đăng ký tư vấn miễn phí: '  + document.querySelector('#commit_1_0_0__box3__form textarea[name="inote"]').value;
            // }),
        ],
        onSubmit: function (data) {
            if (document.querySelector('#commit_1_0_0__box3__form input[name="email"]').value === '') {
                console.log(data);
                document.querySelector('input[type="submit"]').setAttribute("disabled", "");
                document.querySelector('input[type="submit"]').value="Đang gửi thông tin...";
                // sendForm(data, '/dang-ky-thanh-cong'); 
            }
            else {
                console.log('NOT SPAM!!!', document.querySelector('#commit_1_0_0__box3__form input[name="email"]').value)
            }
                     
            document.querySelector('.commit_1_0_0__box3__form').reset();
        }
    });

const renderDataCommit = (data, title) => {
    // console.log(data);
    const nameTab = data.filter((item) => {
        return item.title === title;
    });
    let html = `
        <div class="commit_1_0_0__box2__item">
            <div class="commit_1_0_0__box2__pic">
                <img src="${nameTab[0].image}" alt="${nameTab[0].title}" loading="lazy">
            </div>
            <div class="commit_1_0_0__box2__ct">
                <div class="commit_1_0_0__box2__tt">
                    ${nameTab[0].title}
                </div>
                <div class="commit_1_0_0__box2__subTitle">
                    ${nameTab[0].desc}
                </div>
                <a href="#" class="commit_1_0_0__box2__more popup_regist btnnktv">
                    <span>
                        <b>Đăng ký tư vấn</b>
                    </span>
                </a>
            </div>
        </div>
    `;
    document.getElementById('commit_1_0_0__box2').innerHTML = html;
} 

const renderDataAddress = (data, cityObj) => {
    const nameCity = data.filter((item) => {
        return item.cityObj === cityObj;
    });
    let html = '';
    nameCity.map((itemAdd) => {
        html+= `           
            <div class="commit_1_0_0__box3__sub">
                <a href="#" class="address">${itemAdd.addressCity}</a>
                <a href="#" class="icon__call popup_caller popupCall">Hotline</a>
                <a href="#" class="icon__time popup_regist popupRegist">Lịch hẹn</a>
            </div>
        `
    })
    
    document.getElementById('commit_1_0_0__box3__item').innerHTML = html;
}

// Get API Person
const getCommit = async () => {
    const commit = [];
    const response = await fetch(`https://nhakhoaparis.vn/wp-json/wp/v2/pages/81752`);
    const data = await response.json();
    // console.log(data);
    const commitJSON = data.acf.page_field[6].commit_sub_fields[0].info1;
    // console.log(commitJSON);
    commitJSON.map((item) => {
        const commitObj = item.content1.split("\r\n");
        // console.log(commitObj);
        commit.push({ icon: commitObj[0], title: commitObj[1], desc: commitObj[2], image: commitObj[3] });
    });

    const cityAddress = [];
    const addressJSON = data.acf.page_field[6].commit_sub_fields[0].contact_info;
    // console.log(addressJSON);
    const cityObj = data.acf.page_field[6].commit_sub_fields[0].contact_info.contact_city_name;
    addressJSON.map((item) => {
        const addressObj = item.contact_city_data.map((itemAddress) => {
            const address = itemAddress.content.split("\r\n");
            // console.log(address);
            cityAddress.push({ addressCity: address[0], link: address[1], cityObj: item.contact_city_name })
        })
    });

    renderDataAddress(cityAddress, "Hà Nội");
    var selectAddress = document.querySelector(".commit_1_0_0__box3__select");
        selectAddress.addEventListener ("change", function (e) {
                const element = e.target.value;
                renderDataAddress(cityAddress, element);
            });
            popupCall();
            popupRegist();

    if (window.innerWidth > 600) {
        renderDataCommit(commit, "Bảo hành trọn đời trên toàn quốc");

        var tabLinks = document.querySelectorAll(".commit_1_0_0__box1__tabs .tab");
        tabLinks.forEach(function (el) {
            el.addEventListener("click", function () {
                const element = el.getAttribute('data-id');
                tabLinks.forEach(function (el) {
                    el.classList.remove('active');
                })
                el.classList.add('active');
                renderDataCommit(commit, element);
            });
        });
    }
    
};

getCommit();

//  Popup Call
const popup_call_1_1_0 = `
    <div class="popup_call_1_1_0__overlay" id="popup_call_1_1_0__overlay"></div>
    <form class="popup_call_1_1_0 popup_call_1_1_0__boxTv" id="popup_call_1_1_0">
        <div id="popup_call_1_1_0__overlayClickform" class="overlay_form">
            <div class="popup_call_1_1_0__box">
                <article>
                    <div style="display:none">
                        <input name="email" type="textbox" value="">
                        <input name="iemail" value="no@email.com" type="textbox" placeholder="Email:">
                        <input id="gclid_field" name="referred" value="">
                        <input name="code_campaign" value="558803151">
                        <input name="name_campaign" value="[Paris] Thương Hiệu Tư Vấn - Sidebar">
                        <input name="first_link" value="">
                        <input name="website" value="">
                        <input name="location" value="">
                        <input name="itext" value="">
                    </div>
                    <div class="popup_call_1_1_0__header">
                        <img src="images/logo.png" alt="">
                        <div class="popup_call_1_1_0__pop-note">Gọi ngay để được tư vấn & đặt lịch hẹn</div>
                        <a href="tel:19006900" class="popup_call_1_1_0__pop-call"
                            onclick="gtag('event','touch', {event_category: 'call',event_label: '19006900'});"><i
                                class="pop-call-icon"></i> 1900 6900</a>
                        <div class="popup_call_1_1_0__header">
                            <div class="popup_call_1_1_0__header-note">Hoặc để lại số điện thoại của bạn<br>để nhận
                                cuộc gọi từ Nha Khoa Paris</div>
                        </div>
                    </div>
                    <div class="popup_call_1_1_0__content">
                        <div class="popup_call_1_1_0__inputPhone form-group">
                            <input name="imob" type="textbox" placeholder="Số điện thoại của bạn*:">
                            <div class="form-message"></div>
                        </div>
                        <div class="popup_call_1_1_0__btnSend">
                            <input id="pop_sent" type="submit" value="Yêu Cầu Gọi Lại">
                        </div>
                    </div>
                    <div id="popup_call_1_1_0__closePopup">✕</div>
                </article>
            </div>
        </div>
    </form>
`;

function popupCall() {   
    const callBtnPopup_1_1_0 = document.querySelectorAll(".popupCall");
    callBtnPopup_1_1_0.forEach(callBtn => {
        callBtn.addEventListener('click', () => {
            document.getElementsByTagName('body')[0].insertAdjacentHTML("beforeend", popup_call_1_1_0);
            document.querySelector('.popup_call_1_1_0 input[name="first_link"]').value = document.URL;
            document.querySelector('.popup_call_1_1_0 input[name="website"]').value = document.referrer;
            getLocation().then((data) => {
                document.querySelector('#form-contact input[name="location"]').value = data.city;
            });
            document.querySelector('.popup_call_1_1_0 input[name="itext"]').value = `Hẹn gọi lại tại chi nhánh: ${callBtn.parentNode.childNodes[1].innerText}`;
            // Validate Form
            if(document.querySelector('.popup_call_1_1_0')){
                Validator({
                    form: '#popup_call_1_1_0',
                    errorSelector: '.form-message',
                    formGroupSelector: '.form-group',
                    rules: [
                        Validator.isRequired('input[name="imob"]'),
                        Validator.isMobile('input[name="imob"]'),
                    ],
                    onSubmit: function (data) {
                        if (document.querySelector('#popup_call_1_1_0 input[name="email"]').value === '') {
                            console.log(data);
                            document.querySelector('input[type="submit"]').setAttribute("disabled", "");
                            document.querySelector('input[type="submit"]').value="Đang gửi thông tin...";
                            // sendForm(data, '/dang-ky-thanh-cong');    
                        }
                        else {
                            console.log('NOT SPAM!!!', document.querySelector('#popup_call_1_1_0 input[name="email"]').value)
                        }

                        document.querySelector('.popup_call_1_1_0').reset();
                    }
                });
            }

            document.getElementById('popup_call_1_1_0__closePopup').addEventListener('click', () => {
                popup_call_1_1_0__closeForm()
            })
            document.getElementById('popup_call_1_1_0__overlay').addEventListener('click', () => {
                popup_call_1_1_0__closeForm()
            })
            window.onclick = function (e) {
                if (e.target == document.querySelector('.popup_call_1_1_0__boxTv')) {
                    popup_call_1_1_0__closeForm()
                }
            }
            function popup_call_1_1_0__closeForm(){
                document.getElementById('popup_call_1_1_0').remove();
                document.getElementById('popup_call_1_1_0__overlay').remove();
            }
        })
    });
}

// Popup Regist
const popup_regist_1_0_1 = `
    <div class="popup_regist_1_0_1__overlay" id="popup_regist_1_0_1__overlay"></div>
    <form class="popup_regist_1_0_1 popup_regist_1_0_1__boxTv" id="popup_regist_1_0_1">
        <div id="popup_regist_1_0_1__overlayClickForm" class="overlay_form">
            <div class="popup_regist_1_0_1__box">
                <article>
                    <div style="display:none">
                        <input name="email" type="textbox" value="">
                        <input name="iemail" value="no@email.com" type="textbox" placeholder="Email:">
                        <input id="gclid_field" name="referred" value="">
                        <input name="code_campaign" value="558803151">
                        <input name="name_campaign" value="[Paris] Thương Hiệu Tư Vấn - Sidebar">
                        <input name="first_link" value="">
                        <input name="website" value="">
                        <input name="location" value="">
                        <input name="ilocation" value="">
                    </div>
                    <div class="popup_regist_1_0_1__header">
                        <img src="images/logo.png" alt="">
                        <p class="popup_regist_1_0_1__header_tt">Đăng kí tư vấn miễn phí</p>
                    </div>
                    <div class="popup_regist_1_0_1__contentBox">
                        <div class="popup_regist_1_0_1__inputBox">
                            <div class="form-group">
                                <input id="iname" name="iname" type="textbox" placeholder="Họ tên*:">
                                <div class="form-message"></div>
                            </div>
                            <div class="form-group">
                                <input id="imob" name="imob" type="textbox" placeholder="Điện thoại*:">
                                <div class="form-message"></div>
                            </div>
                            <div class="form-group">
                                <input id="iemail" name="iemail" type="textbox" placeholder="Email:">
                                <div class="form-message"></div>
                            </div>
                            <div class="form-group">
                                <textarea id="itext" type="hidden" name="itext" value=""
                                placeholder="Nhu cầu tư vấn"></textarea>
                                <div class="form-message"></div>
                            </div>
                        </div>
                        <div class="popup_regist_1_0_1__btnSend">
                            <input id="pop_sent" type="submit" value="HOÀN THÀNH">
                            <div class="popup_regist_1_0_1__contact">
                                Tư vấn trực tiếp 24/7: <a class="popup_regist_1_0_1__number"
                                    href="tel:1900.633.988">1900.6900</a>
                            </div>
                            </input>
                        </div>
                        <div id="popup_regist_1_0_1__closePopup">✕</div>
                </article>
            </div>
        </div>
    </form>
`;

function popupRegist() {
    const registBtnPopup_1_0_1 = document.querySelectorAll(".popupRegist");
    registBtnPopup_1_0_1.forEach(registBtn => {
        registBtn.addEventListener('click', () => {
            document.getElementsByTagName('body')[0].insertAdjacentHTML("beforeend", popup_regist_1_0_1);
            document.querySelector('.popup_regist_1_0_1 input[name="first_link"]').value = document.URL;
            document.querySelector('.popup_regist_1_0_1 input[name="website"]').value = document.referrer;
            getLocation().then((data) => {
                document.querySelector('#form-contact input[name="location"]').value = data.city;
            });
            document.querySelector('.popup_regist_1_0_1 input[name="ilocation"]').value = `Hẹn gọi lại tại chi nhánh: ${registBtn.parentNode.childNodes[1].innerText}`;
            // Validate Form
            if(document.querySelector('.popup_regist_1_0_1')){
                Validator({
                    form: '#popup_regist_1_0_1',
                    errorSelector: '.form-message',
                    formGroupSelector: '.form-group',
                    rules: [
                        Validator.isRequired('input[name="iname"]'),
                        Validator.isRequired('input[name="imob"]'),
                        Validator.isMobile('input[name="imob"]'),
                        // Validator.addInput('textarea[name="itext"]', () => {
                        //     return 'Đăng ký tư vấn miễn phí: '  + document.querySelector('#popup_regist_1_0_1 textarea[name="inote"]').value;
                        // }),
                    ],
                    onSubmit: function (data) {
                        if (document.querySelector('#popup_regist_1_0_1 input[name="email"]').value === '') {
                            console.log(data);
                            document.querySelector('input[type="submit"]').setAttribute("disabled", "");
                            document.querySelector('input[type="submit"]').value="Đang gửi thông tin...";
                            // sendForm(data, '/dang-ky-thanh-cong');    
                        }
                        else {
                            console.log('NOT SPAM!!!', document.querySelector('#popup_regist_1_0_1 input[name="email"]').value)
                        }
                            
                        document.querySelector('.popup_regist_1_0_1').reset();
                    }
                });
            }

            document.getElementById('popup_regist_1_0_1__closePopup').addEventListener('click', () => {
                popup_regist_1_0_1__closeForm()
            })
            document.getElementById('popup_regist_1_0_1__overlay').addEventListener('click', () => {
                popup_regist_1_0_1__closeForm()
            })
            window.onclick = function (e) {
                if (e.target == document.querySelector('.popup_regist_1_0_1__boxTv')) {
                    popup_regist_1_0_1__closeForm()
                }
            }
            function popup_regist_1_0_1__closeForm(){
                document.getElementById('popup_regist_1_0_1').remove();
                document.getElementById('popup_regist_1_0_1__overlay').remove();
            }
        })
    });
}

