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

const registBtnPopup_1_0_1 = document.querySelectorAll(".notiRegist");
for (let i = 0; i < registBtnPopup_1_0_1.length; i++) {
    registBtnPopup_1_0_1[i].addEventListener('click', () => {
        document.getElementsByTagName('body')[0].insertAdjacentHTML("beforeend", popup_regist_1_0_1);
        document.querySelector('.popup_regist_1_0_1 input[name="first_link"]').value = document.URL;
        document.querySelector('.popup_regist_1_0_1 input[name="website"]').value = document.referrer;
        getLocation().then((data) => {
            document.querySelector('#form-contact input[name="location"]').value = data.city;
        });
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
}



