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

const callBtnPopup_1_1_0 = document.querySelectorAll(".notiCall");
for (let i = 0; i < callBtnPopup_1_1_0.length; i++) {
    callBtnPopup_1_1_0[i].addEventListener('click', () => {
        document.getElementsByTagName('body')[0].insertAdjacentHTML("beforeend", popup_call_1_1_0);
        document.querySelector('.popup_call_1_1_0 input[name="first_link"]').value = document.URL;
        document.querySelector('.popup_call_1_1_0 input[name="website"]').value = document.referrer;
        getLocation().then((data) => {
            document.querySelector('#form-contact input[name="location"]').value = data.city;
        });
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
            // document.getElementById('popup_call_1_1_0').remove();
        }
    })
}



