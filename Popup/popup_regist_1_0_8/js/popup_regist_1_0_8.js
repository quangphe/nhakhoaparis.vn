const popup_regist_1_0_8 = `
<div class="popup_regist_1_0_8__overlay" id="popup_regist_1_0_8__overlay"></div>
    <form class="popup_regist_1_0_8 popup_regist_1_0_8__boxTv" id="popup_regist_1_0_8">
        <div id="popup_regist_1_0_8__overlayClickForm" class="popup_regist_1_0_8__overlayForm">
            <div class="popup_regist_1_0_8__box">
                <div class="popup_regist_1_0_8__form" id="popup_regist_1_0_8__form">
                    <div class="popup_regist_1_0_8__title">
                        <img width="130" height="auto" src="images/logo.png" alt="Logo Nha Khoa Paris">
                        <span>Nhận khuyến mãi mới</span>
                        <div class="popup_regist_1_0_8__closeForm" id="close-form">╳</div>
                    </div>
                    <span> * Chương trình khuyến mãi có thể kết thúc trước thời gian đã công bố (khi hết suất khuyến
                        mãi)<br> - Hiện còn: 12 suất khuyến mãi</span>
                    <hr>
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
                        <div class="form-group">
                            <label>* Tên:</label>
                            <input id="iname" name="iname" type="textbox">
                            <div class="form-message"></div>
                        </div>
                        <div class="form-group">
                            <label>* Số điện thoại:</label>
                            <input id="imob" name="imob" type="textbox">
                            <div class="form-message"></div>
                        </div>
                        <div class="form-group">
                            <label>* Dịch vụ quan tâm:</label>
                            <select name="icity" id="icity">
                                <option value="- Chọn -">--- Chọn ---</option>
                                <option value="Bọc răng sứ">Bọc răng sứ</option>
                                <option value="Niềng răng">Niềng răng</option>
                                <option value="Trồng implant">Trồng implant</option>
                                <option value="Tẩy trắng răng">Tẩy trắng răng</option>
                                <option value="Hàn trám răng">Hàn trám răng</option>
                            </select>
                        </div>
                    </article>
                    <div class="popup_regist_1_0_8__btnSend">
                        <input id="popup_regist_1_0_8__clickSent" type="submit"
                            value="HOÀN THÀNH">
                    </div>
                </div>
            </div>
        </div>
    </form>
`;

const registBtnPopup_1_0_8 = document.querySelectorAll(".btnRegist");
for (let i = 0; i < registBtnPopup_1_0_8.length; i++) {
    registBtnPopup_1_0_8[i].addEventListener('click', () => {
        document.getElementsByTagName('body')[0].insertAdjacentHTML("beforeend", popup_regist_1_0_8);
        document.querySelector('.popup_regist_1_0_8 input[name="first_link"]').value = document.URL;
        document.querySelector('.popup_regist_1_0_8 input[name="website"]').value = document.referrer;
        // Validate Form
        if(document.querySelector('.popup_regist_1_0_8')){
            Validator({
                form: '#popup_regist_1_0_8',
                errorSelector: '.form-message',
                formGroupSelector: '.form-group',
                rules: [
                    Validator.isRequired('input[name="iname"]'),
                    Validator.isRequired('input[name="imob"]'),
                    Validator.isMobile('input[name="imob"]'),
                    // Validator.addInput('textarea[name="itext"]', () => {
                    //     return 'Đăng ký tư vấn miễn phí: '  + document.querySelector('#popup_regist_1_0_8 textarea[name="inote"]').value;
                    // }),
                ],
                onSubmit: function (data) {
                    if (document.querySelector('#popup_regist_1_0_8 input[name="email"]').value === '') {
                        console.log(data);
                        document.querySelector('input[type="submit"]').setAttribute("disabled", "");
                        document.querySelector('input[type="submit"]').value="Đang gửi thông tin...";
                        // sendForm(data, '/dang-ky-thanh-cong'); 
                    }
                    else {
                        console.log('NOT SPAM!!!', document.querySelector('#popup_regist_1_0_8 input[name="email"]').value)
                    }
                             
                    document.querySelector('.popup_regist_1_0_8').reset();
                }
            });
        }

        document.getElementById('close-form').addEventListener('click', () => {
            popup_regist_1_0_8__closeForm()
        })
        document.getElementById('popup_regist_1_0_8__overlay').addEventListener('click', () => {
            popup_regist_1_0_8__closeForm()
        })
        window.onclick = function (e) {
            if (e.target == document.querySelector('.popup_regist_1_0_8__boxTv')) {
                popup_regist_1_0_8__closeForm()
            }
        }
        function popup_regist_1_0_8__closeForm(){
            document.getElementById('popup_regist_1_0_8').remove();
            document.getElementById('popup_regist_1_0_8__overlay').remove();
        }
    })
}
