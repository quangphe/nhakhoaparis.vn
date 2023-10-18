// Get API Header
const getHeader = async () => {
    const header = [];
    const response = await fetch(`https://nhakhoaparis.vn/wp-json/wp/v2/pages/59018`);
    const data = await response.json();
    const headerJSON = data.acf.page_field[0].header_sub[0].id_header_6_0_0_sub1;
    headerJSON.map((item) => {
        const titleMain = item.title.split("\r\n");
        const itemCol = item.col1.split("\r\n\r\n");
        header.push({ title: titleMain[0], group: itemCol });
    });
    return header;
};

// Xử lý click menu mobile
document.getElementById("toggle").addEventListener("click", () => {
    document.getElementById("headerMenu").classList.add("active");
    document.getElementById("menu-bg").classList.add("active");
});
document.getElementById("menu-bg").addEventListener("click", () => {
    document.getElementById("headerMenu").classList.remove("active");
    document.getElementById("menu-bg").classList.remove("active");
});

// Chia row 
function colHeader(data) {
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

// Render hiển thị menu
const renderDataHeader = (data) => {
    let html = '';
    data.map((item) => {
        html += `
            <li class="header_6_0_0__box2__menuSub">
                <a rel="" href="#" class="header_6_0_0__box2__title arr">${item.title}
                </a>
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
    });
    document.getElementById('header_6_0_0__box2__menu').innerHTML = html;
}

window.onload = async () => {
    const headerMain = await getHeader();
    renderDataHeader(headerMain);
}
