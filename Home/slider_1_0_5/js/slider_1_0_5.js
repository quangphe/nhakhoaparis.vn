const getSlide_1_0_5 = async () => {
    const response = await fetch('https://nhakhoaparis.vn/wp-json/wp/v2/pages/81752');
    const data = await response.json();
    const dataSlide = data.acf.group_page_field.body_custom[0];
    const slidePc = [];
    const slideMb = [];
    dataSlide.slide_pc.forEach(item => {
        const array = item.slide_pc_img.split(' | ');
        slidePc.push({
            title: array[0],
            image: array[1],
            link: array[2]
        })
    })
    dataSlide.slide_mb.forEach(item => {
        const array = item.slide_mb_img.split(' | ');
        slideMb.push({
            title: array[0],
            image: array[1],
            link: array[2]
        })
    })
    return {pc: slidePc, mb: slideMb};
};

const renderSlide_1_0_5 = async () => {
    const data = await getSlide_1_0_5();
    if(window.innerWidth > 786){
        runSlide_1_0_5({
            data: data.pc,
            position: 'slider_1_0_5',
            isControl: true,
            controlNext: '<img src="images/right-arrow.svg" alt="">',
            controlPrev: '<img src="images/left-arrow.svg" alt="">',
            first: 'slider_1_0_5__pc'
        })
    } else {
        runSlide_1_0_5({
            data: data.mb,
            position: 'slider_1_0_5',
            isControl: true,
            controlNext: '<img src="images/right-arrow.svg" alt="">',
            controlPrev: '<img src="images/left-arrow.svg" alt="">',
            first: 'slider_1_0_5__mb'
        })
    }
}

window.addEventListener("resize", function() {
    renderSlide_1_0_5();
});

function runSlide_1_0_5({ data = [], position = '', isPagination = false, isControl = false, time = 6000000, controlPrev, controlNext, first }) {
    try {
        let index = 0;

        const innerSlide = document.createElement('div');
        innerSlide.classList.add('inner__slide');
        document.querySelector(`.${position}`).appendChild(innerSlide);
        document.querySelector(`.${position}`).children[0].classList.add(`${position}-index`);
        document.querySelector(`.${position}`).style = 'position: relative'


        const img = document.querySelector(`.${position} .${first} img`).clientHeight;
        document.querySelector(`.${position}`).setAttribute('style', 'min-height:' + img + 'px');

        const removeSlideIndex = () => {
            if (document.querySelector(`.${position}-index`)) {
                document.querySelector(`.${position}-index`).remove();
            }
        }
        const myTimer = () => {
            if (index >= data.length - 1) {
                renderCard(0);
                index = 0;
            } else {
                removeSlideIndex();
                renderCard(++index);
            }
        }
        let myInter = setInterval(myTimer, time)

        const activePagination = (index) => {
            const allPagination = document.querySelectorAll(`.${position} .pagination__item`);
            for (let i = 0; i < allPagination.length; i++) {
                allPagination[i].classList.remove('active');
            }
            document.getElementById(`pagination-${position}-${index}`).classList.add('active');
        }

        const renderCard = (index) => {
            document.querySelector(`.${position} .inner__slide`).innerHTML =  /*html*/`
            <a href="${data[index].link}" title="${data[index].title}">
                <img src="${data[index].image}" alt="${data[index].title}">
            </a>
            `;
            document.querySelector(`.${position} a`).setAttribute('style', 'height:' + img + 'px');
            isPagination ? activePagination(index) : '';

            const lazy = document.querySelectorAll(`.${position} .lazy`);
            lazy.forEach(item => {
                if (checkVisible(item)) {
                    const src = item.getAttribute('data-src');
                    item.setAttribute('src', src);
                }
            })
        }

        const changeSlide = (e) => {
            removeSlideIndex();
            const id = e.getAttribute('data-id');
            index = Number(id);
            renderCard(id);
            clearInterval(myInter);
            myInter = setInterval(myTimer, time);
        }

        const changeSlideControl = (id) => {
            if (id > data.length - 1) {
                id = 0;
                index = 0;
            } else if (id < 0) {
                id = data.length - 1;
                index = data.length - 1;
            }
            renderCard(id);
            clearInterval(myInter);
            myInter = setInterval(myTimer, time);
        }

        const pagination = () => {
            let html = '';
            for (let i = 0; i < data.length; i++) {
                html += `<span data-id='${i}' id="pagination-${position}-${i}" class="pagination__item"></span>`
            }
            document.querySelector(`.${position}`).insertAdjacentHTML("beforeend", `<div class="pagination">${html}</div>`);
            const paginationItem = document.querySelectorAll(`.${position} .pagination__item`);
            document.querySelector(`.${position} .pagination`).style = 'display: flex; gap: 5px;'
            paginationItem.forEach(item => {
                item.style = 'display: block; width: 10px; height: 10px; background: #d5d5d5; border-radius: 100%;'
            })

            for (let i = 0; i < paginationItem.length; i++) {
                paginationItem[i].addEventListener('click', () => changeSlide(paginationItem[i]));
            }
            isPagination ? activePagination(0) : '';
        }
        isPagination ? pagination() : '';

        const nextSlide = () => {
            removeSlideIndex();
            changeSlideControl(++index);
        }

        const prevSlide = () => {
            removeSlideIndex();
            changeSlideControl(--index);
        }

        const nextPrevSlide = () => {
            const box = document.createElement('div');
            const btnPrev = document.createElement('button');
            const btnNext = document.createElement('button');
            box.className = 'control';
            btnPrev.className = 'item__btn prev';
            btnPrev.innerHTML = controlPrev ? controlPrev : "";
            btnNext.className = 'item__btn next';
            btnNext.innerHTML = controlNext ? controlNext : "";
            box.appendChild(btnPrev);
            box.appendChild(btnNext);
            document.querySelector(`.${position}`).appendChild(box);

            document.querySelector(`.${position} .next`).addEventListener('click', nextSlide);
            document.querySelector(`.${position} .prev`).addEventListener('click', prevSlide);
        }
        isControl ? nextPrevSlide() : '';

        function checkVisible(elm) {
            let rect = elm.getBoundingClientRect();
            let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
            return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
        }
    } catch (error) {
        console.log(error)
    }
}
