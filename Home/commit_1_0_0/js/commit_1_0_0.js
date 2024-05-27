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

// Data tabs
const itemsWithHTML = [
    {
        html: `
            <div class="commit_1_0_0__box2__item">
                <div class="commit_1_0_0__box2__pic">
                    <img src="images/trang-chu-cam-ket-1.webp" alt="" loading="lazy">
                </div>
                <div class="commit_1_0_0__box2__ct">
                    <div class="commit_1_0_0__box2__tt">
                        Bảo hành trọn đời trên toàn quốc
                    </div>
                    <div class="commit_1_0_0__box2__subTitle">
                        Liên hệ chuyên gia tư vấn miễn phí
                    </div>
                    <a href="" class="commit_1_0_0__box2__more popup_regist btnnktv">
                        <span>
                            <b>Đăng ký tư vấn</b>
                        </span>
                    </a>
                </div>
            </div>
        `
    },
    {
        html: `
            <div class="commit_1_0_0__box2__item">
                <div class="commit_1_0_0__box2__pic">
                    <img src="images/trang-chu-cam-ket-2.webp" alt="" loading="lazy">
                </div>
                <div class="commit_1_0_0__box2__ct">
                    <div class="commit_1_0_0__box2__tt">
                        100% bác sĩ là thành viên Hiệp hội Nha khoa thẩm mỹ Châu Âu
                    </div>
                    <div class="commit_1_0_0__box2__subTitle">
                        Liên hệ chuyên gia tư vấn miễn phí
                    </div>
                    <a href="" class="commit_1_0_0__box2__more popup_regist btnnktv">
                        <span>
                            <b>Đăng ký tư vấn</b>
                        </span>
                    </a>
                </div>
            </div>
        `
    },
    {
        html: `
            <div class="commit_1_0_0__box2__item">
                <div class="commit_1_0_0__box2__pic">
                    <img src="images/trang-chu-cam-ket-3.webp" alt="" loading="lazy">
                </div>
                <div class="commit_1_0_0__box2__ct">
                    <div class="commit_1_0_0__box2__tt">
                        Hội chẩn đánh giá chuyên môn bởi hệ thống Bác sĩ trên 8 CN
                    </div>
                    <div class="commit_1_0_0__box2__subTitle">
                        Liên hệ chuyên gia tư vấn miễn phí
                    </div>
                    <a href="" class="commit_1_0_0__box2__more popup_regist btnnktv">
                        <span>
                            <b>Đăng ký tư vấn</b>
                        </span>
                    </a>
                </div>
            </div>
        `
    },
    {
        html: `
            <div class="commit_1_0_0__box2__item">
                <div class="commit_1_0_0__box2__pic">
                    <img src="images/trang-chu-cam-ket-4.webp" alt="" loading="lazy">
                </div>
                <div class="commit_1_0_0__box2__ct">
                    <div class="commit_1_0_0__box2__tt">
                        Ứng dụng công nghệ 3D thiết kế nụ cười chuẩn tỷ lệ vàng
                    </div>
                    <div class="commit_1_0_0__box2__subTitle">
                        Liên hệ chuyên gia tư vấn miễn phí
                    </div>
                    <a href="" class="commit_1_0_0__box2__more popup_regist btnnktv">
                        <span>
                            <b>Đăng ký tư vấn</b>
                        </span>
                    </a>
                </div>
            </div>
        `
    },
    {
        html: `
            <div class="commit_1_0_0__box2__item">
                <div class="commit_1_0_0__box2__pic">
                    <img src="images/trang-chu-cam-ket-5.webp" alt="" loading="lazy">
                </div>
                <div class="commit_1_0_0__box2__ct">
                    <div class="commit_1_0_0__box2__tt">
                        Quy trình nha khoa an toàn - không đau
                    </div>
                    <div class="commit_1_0_0__box2__subTitle">
                        Liên hệ chuyên gia tư vấn miễn phí
                    </div>
                    <a href="" class="commit_1_0_0__box2__more popup_regist btnnktv">
                        <span>
                            <b>Đăng ký tư vấn</b>
                        </span>
                    </a>
                </div>
            </div>
        `
    }
];

// Data address
const dataAddress = [
    {
        html: `
            <div class="commit_1_0_0__box3__item" id="op1">
                <div class="scrollbar" id="style-11">
                    <div class="force-overflow">
                        <div class="commit_1_0_0__box3__sub">
                            <a href="#" class="address">Số 110-112 Bà Triệu, Hoàn Kiếm, Hà Nội</a>
                            <a href="#" class="icon__call popup_caller popupCall">Hotline</a>
                            <a href="#" class="icon__time popup_regist popupRegist">Lịch hẹn</a>
                        </div>
                        <div class="commit_1_0_0__box3__sub">
                            <a href="#" class="address">Số 12 Thái Thịnh, Đống Đa, Hà Nội</a>
                            <a href="#" class="icon__call popup_caller popupCall">Hotline</a>
                            <a href="#" class="icon__time popup_regist popupRegist">Lịch hẹn</a>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        html: `
            <div class="commit_1_0_0__box3__item" id="op2">
                <div class="scrollbar" id="style-11">
                    <div class="force-overflow">
                        <div class="commit_1_0_0__box3__sub">
                            <a href="#" class="address">Số 179C, Đường 3/2, P.11, Q.10</a>
                            <a href="#" class="icon__call popup_caller popupCall">Hotline</a>
                            <a href="#" class="icon__time popup_regist popupRegist">Lịch hẹn</a>
                        </div>
                        <div class="commit_1_0_0__box3__sub">
                            <a href="#" class="address">Số 97 Cộng Hòa, P4, Q.Tân Bình</a>
                            <a href="#" class="icon__call popup_caller popupCall">Hotline</a>
                            <a href="#" class="icon__time popup_regist popupRegist">Lịch hẹn</a>
                        </div>
                        <div class="commit_1_0_0__box3__sub">
                            <a href="#" class="address">87 Nguyễn Thái Học, P. Cầu Ông Lãnh, Q. 1, TP
                                HCM</a>
                            <a href="#" class="icon__call popup_caller popupCall">Hotline</a>
                            <a href="#" class="icon__time popup_regist popupRegist">Lịch hẹn</a>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        html: `
            <div class="commit_1_0_0__box3__item" id="op3">
                <div class="scrollbar" id="style-11">
                    <div class="force-overflow">
                        <div class="commit_1_0_0__box3__sub">
                            <a href="#" class="address">Số 261-263 đường Hoàng Diệu, Phường Nam Dương,
                                Q. Hải Châu, Đà Nẵng</a>
                            <a href="#" class="icon__call popup_caller popupCall">Hotline</a>
                            <a href="#" class="icon__time popup_regist popupRegist">Lịch hẹn</a>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        html: `
            <div class="commit_1_0_0__box3__item" id="op4">
                <div class="scrollbar" id="style-11">
                    <div class="force-overflow">
                        <div class="commit_1_0_0__box3__sub">
                            <a href="#" class="address">Số 386 Tô Hiệu, Phường Hồ Nam, Lê Chân, Hải
                                Phòng</a>
                            <a href="#" class="icon__call popup_caller popupCall">Hotline</a>
                            <a href="#" class="icon__time popup_regist popupRegist">Lịch hẹn</a>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        html: `
            <div class="commit_1_0_0__box3__item" id="op5">
                <div class="scrollbar" id="style-11">
                    <div class="force-overflow">
                        <div class="commit_1_0_0__box3__sub">
                            <a href="#" class="address">Số 143, Nguyễn Văn Cừ, TP. Vinh</a>
                            <a href="#" class="icon__call popup_caller popupCall">Hotline</a>
                            <a href="#" class="icon__time popup_regist popupRegist">Lịch hẹn</a>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        html: `
            <div class="commit_1_0_0__box3__item" id="op6">
                <div class="scrollbar" id="style-11">
                    <div class="force-overflow">
                        <div class="commit_1_0_0__box3__sub">
                            <a href="#" class="address">Shop house 6 - 7, KĐT Times Garden, đường Lê
                                Thánh Tông, Hạ Long, Quảng Ninh</a>
                            <a href="#" class="icon__call popup_caller popupCall">Hotline</a>
                            <a href="#" class="icon__time popup_regist popupRegist">Lịch hẹn</a>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        html: `
            <div class="commit_1_0_0__box3__item" id="op7">
                <div class="scrollbar" id="style-11">
                    <div class="force-overflow">
                        <div class="commit_1_0_0__box3__sub">
                            <a href="#" class="address">Số 688A, Đường Cách mạng Tháng Tám, P. Chánh
                                Nghĩa, TP. Thủ Dầu Một, Bình Dương</a>
                            <a href="#" class="icon__call popup_caller popupCall">Hotline</a>
                            <a href="#" class="icon__time popup_regist popupRegist">Lịch hẹn</a>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        html: `
            <div class="commit_1_0_0__box3__item" id="op8">
                <div class="scrollbar" id="style-11">
                    <div class="force-overflow">
                        <div class="commit_1_0_0__box3__sub">
                            <a href="#" class="address">Số 519-521 Ngô Gia Tự - Phường Tiền An - Thành
                                phố Bắc Ninh</a>
                            <a href="#" class="icon__call popup_caller popupCall">Hotline</a>
                            <a href="#" class="icon__time popup_regist popupRegist">Lịch hẹn</a>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        html: `
            <div class="commit_1_0_0__box3__item" id="op9">
                <div class="scrollbar" id="style-11">
                    <div class="force-overflow">
                        <div class="commit_1_0_0__box3__sub">
                            <a href="#" class="address">Số 103 đường Nguyễn Trãi, Phường Ba Đình, Thanh
                                Hóa</a>
                            <a href="#" class="icon__call popup_caller popupCall">Hotline</a>
                            <a href="#" class="icon__time popup_regist popupRegist">Lịch hẹn</a>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
];

// Lấy danh sách các tab và nội dung tương ứng
const tabContentsContainer = document.getElementById('commit_1_0_0__box2');

// Hiển thị nội dung của object đầu tiên trong mảng khi trang web được tải
tabContentsContainer.innerHTML = itemsWithHTML[0].html;

const tabs = document.querySelectorAll('.commit_1_0_0__box1__tabs .tab');

// Gán sự kiện click cho mỗi tab
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        // Xóa lớp active khỏi tất cả các tab
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });

        // Thêm lớp active cho tab được click
        tab.classList.add('active');

        // Hiển thị nội dung tương ứng với tab được click
        tabContentsContainer.innerHTML = itemsWithHTML[index].html;
    });
});


// Hàm showFirstItem được gọi khi trang web được tải
function showFirstItem() {
    const listContainer = document.querySelector('.commit_1_0_0__box3__list');
    // Hiển thị đối tượng đầu tiên từ mảng dataAddress
    listContainer.innerHTML = dataAddress[0].html;
    popupCall();
    popupRegist();
}

// Gọi hàm showFirstItem khi trang web được tải
document.addEventListener('DOMContentLoaded', showFirstItem);

// Hàm showHide được gọi khi chọn một option từ dropdown list
function showHide() {
    const selectBox = document.getElementById('select-box');
    const selectedValue = selectBox.value;
    const listContainer = document.getElementById('commit_1_0_0__box3__list');

    // Xóa nội dung trước đó
    listContainer.innerHTML = '';

    // Tìm đối tượng dữ liệu tương ứng
    const selectedData = dataAddress.find(data => data.html.includes(`id="${selectedValue}"`));

    // Thêm nội dung HTML vào container danh sách
    if (selectedData) {
        listContainer.innerHTML = selectedData.html;
    }

    popupCall();
    popupRegist();
}

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