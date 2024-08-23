const renderDataPerson = (data, name) => {
    const mainPerson = data.filter((item, index) => {
        return index === Number(name);
    })

    let html = `
        <div class="slide_item">
            <div class="person_7_0_0__item">
                <div class="person_7_0_0__itemChild">
                    <img width="555" height="280" src="${mainPerson[0].pushPs[0].image}" alt="${mainPerson[0].pushPs[0].name} - ${mainPerson[0].pushPs[0].service}" loading="lazy">
                    <div class="person_7_0_0__info">
                        <p class="person_7_0_0__name">${mainPerson[0].pushPs[0].name}</p>
                        <p class="person_7_0_0__sv">${mainPerson[0].pushPs[0].service}</p>
                    </div>
                </div>
                <div class="person_7_0_0__itemChild">
                    <img width="555" height="280" src="${mainPerson[0].pushPs[1].image}" alt="${mainPerson[0].pushPs[1].name} - ${mainPerson[0].pushPs[1].service}" loading="lazy">
                    <div class="person_7_0_0__info">
                        <p class="person_7_0_0__name">${mainPerson[0].pushPs[1].name}</p>
                        <p class="person_7_0_0__sv">${mainPerson[0].pushPs[1].service}</p>
                    </div>
                </div>
                <div class="person_7_0_0__itemChild">
                    <img width="555" height="280" src="${mainPerson[0].pushPs[2].image}" alt="${mainPerson[0].pushPs[2].name} - ${mainPerson[0].pushPs[2].service}" loading="lazy">
                    <div class="person_7_0_0__info">
                        <p class="person_7_0_0__name">${mainPerson[0].pushPs[2].name}</p>
                        <p class="person_7_0_0__sv">${mainPerson[0].pushPs[2].service}</p>
                    </div>
                </div>
                <div class="person_7_0_0__itemChild">
                    <img width="555" height="280" src="${mainPerson[0].pushPs[3].image}" alt="${mainPerson[0].pushPs[3].name} - ${mainPerson[0].pushPs[3].service}" loading="lazy">
                    <div class="person_7_0_0__info">
                        <p class="person_7_0_0__name">${mainPerson[0].pushPs[3].name}</p>
                        <p class="person_7_0_0__sv">${mainPerson[0].pushPs[3].service}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.getElementById('slide_person').innerHTML = html;
}

// Get API Person
const getPerson = async () => {
    const person = [];
    const response = await fetch(`https://nhakhoaparis.vn/wp-json/wp/v2/pages/81752`);
    const data = await response.json();

    // Lấy Dữ liệu person_7_0_0 từ API theo điều kiện
    const personJSON = data.acf.group_page_field.body_custom.filter((item) => {
        return item.acf_fc_layout == "person_7_0_0"
    });
    // console.log(personJSON[0].person_info);

    personJSON[0].person_info.map((item) => {
        const pushPerson = [];
        const personName = item.name_dv.split("\r\n");
        // console.log(personName);
        item.photo_info1.map((itemChild) => {
            itemChild.photo_info2.map((dataContent) => {
                const personData = dataContent.img_link.split("\r\n");
                // console.log(personData);
                pushPerson.push({ name: personData[0], service: personData[1], image: personData[2] });
            });
        });
        person.push({ name: personName[0], pushPs: pushPerson });
    });
    renderDataPerson(person, 0);

    var tabLinks = document.querySelectorAll(".person_7_0_0__tab__item");
    tabLinks.forEach(function (el) {
        el.addEventListener("click", function () {
            const element = el.getAttribute('data-id');
            tabLinks.forEach(function (el) {
                el.classList.remove('active');
            })
            el.classList.add('active');
            renderDataPerson(person, element);
            sliderTab();
        });
    });
    sliderTab();
};

getPerson();


function sliderTab() {
    // Slider mobile
    let dots = [];
    if (window.innerWidth <= 768) {
        const slider = document.querySelector('.person_7_0_0__item');
        const slideItems = document.querySelectorAll('.person_7_0_0__itemChild');
        let currentSlide = 0;

        function showSlide(index) {
            slideItems.forEach(item => {
                item.style.display = 'none';
            });
            if (slideItems[index]) {
                slideItems[index].style.display = 'block';
                activeDot(index);
            }
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slideItems.length;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slideItems.length) % slideItems.length;
            showSlide(currentSlide);
        }

        showSlide(currentSlide);

        const dotsContainer = document.createElement('div');
        dotsContainer.classList.add('person_7_0_0__dots');

        // Create dots for each slide
        slideItems.forEach((item, index) => {
            const dot = document.createElement('span');
            dot.classList.add('person_7_0_0__dot');
            dot.addEventListener('click', () => {
                showSlide(index);
                currentSlide = index;
            });
            dots.push(dot); // Thêm dot vào mảng dots
            dotsContainer.appendChild(dot);
        });

        activeDot(currentSlide);

        // Tạo thẻ div để chứa cả hai button
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('person_7_0_0__controls');

        // Tạo button prev
        const prevButton = document.createElement('button');
        prevButton.textContent = '❮';
        prevButton.addEventListener('click', prevSlide);
        prevButton.classList.add('person_7_0_0__prev'); // Thêm class vào button

        // Tạo button next
        const nextButton = document.createElement('button');
        nextButton.textContent = '❯';
        nextButton.addEventListener('click', nextSlide);
        nextButton.classList.add('person_7_0_0__next'); // Thêm class vào button

        // Thêm cả hai button vào thẻ div
        buttonContainer.appendChild(prevButton);
        buttonContainer.appendChild(nextButton);

        const controlsContainer = document.createElement('div');
        controlsContainer.classList.add('person_7_0_0__controlsContainer');
        controlsContainer.appendChild(dotsContainer);
        controlsContainer.appendChild(buttonContainer);

        // Thêm thẻ div chứa cả hai button vào slider
        slider.appendChild(controlsContainer);

        // Tạo sự kiện click cho dot
        dotsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('person_7_0_0__dot')) {
                const index = Array.from(dots).indexOf(e.target);
                showSlide(index);
            }
        });
    }

    function activeDot(index) {
        if (dots && dots[index]) {
            dots.forEach(dot => {
                dot.classList.remove('active');
            });
            dots[index].classList.add('active');
        }
    }
}
