const renderDataPerson = (data, name) => {
    const mainPerson = data.filter((item) => {
        return item.name === name;
    })

    let html = `
        <div class="slide_item">
            <div class="person_7_0_0__item">
                <div class="person_7_0_0__itemChild">
                    <img width="555" height="280" src="${mainPerson[0].pushPs[0].image}" alt="" loading="lazy">
                    <div class="person_7_0_0__info">
                        <p class="person_7_0_0__name">${mainPerson[0].pushPs[0].name}</p>
                        <p class="person_7_0_0__sv">${mainPerson[0].pushPs[0].service}</p>
                    </div>
                </div>
                <div class="person_7_0_0__itemChild">
                    <img width="555" height="280" src="${mainPerson[0].pushPs[1].image}" alt="" loading="lazy">
                    <div class="person_7_0_0__info">
                        <p class="person_7_0_0__name">${mainPerson[0].pushPs[1].name}</p>
                        <p class="person_7_0_0__sv">${mainPerson[0].pushPs[1].service}</p>
                    </div>
                </div>
                <div class="person_7_0_0__itemChild">
                    <img width="555" height="280" src="${mainPerson[0].pushPs[2].image}" alt="" loading="lazy">
                    <div class="person_7_0_0__info">
                        <p class="person_7_0_0__name">${mainPerson[0].pushPs[2].name}</p>
                        <p class="person_7_0_0__sv">${mainPerson[0].pushPs[2].service}</p>
                    </div>
                </div>
                <div class="person_7_0_0__itemChild">
                    <img width="555" height="280" src="${mainPerson[0].pushPs[3].image}" alt="" loading="lazy">
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
    const personJSON = data.acf.page_field[4].person_sub_fields[0].person_info;
    // console.log(personJSON);
    personJSON.map((item) => {
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
    renderDataPerson(person, "Niềng răng");

    var tabLinks = document.querySelectorAll(".person_7_0_0__tab__item");
    tabLinks.forEach(function (el) {
        el.addEventListener("click", function () {
            const element = el.getAttribute('data-id');
            tabLinks.forEach(function (el) {
                el.classList.remove('active');
            })
            el.classList.add('active');
            renderDataPerson(person, element);
        });
    });
};

getPerson();