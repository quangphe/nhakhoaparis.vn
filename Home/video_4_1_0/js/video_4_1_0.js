// Get API Person
const getVideo = async () => {
    const video = [];
    const response = await fetch(`https://nhakhoaparis.vn/wp-json/wp/v2/pages/81752`);
    const data = await response.json();
    const videoJSON = data.acf.page_field[5].video_sub_fields[0];
    // console.log(videoJSON);
    const videoObj = videoJSON.info1.split("\r\n");
    // console.log(videoObj);
    const videoContainer = [];
    console.log(videoContainer);
    videoContainer.push({ imgSrc: videoObj[0], videoTitle: videoObj[1], videoLink: videoObj[2], videoView: videoObj[3] })
    videoJSON.info2.map((item) => {
        const videoData = item.content.split("\r\n");
        // console.log(videoData);
        video.push({ img: videoData[0], title: videoData[1], link: videoData[2], view: videoData[3] });
    });
    return video; // Trả về mảng video đã được xử lý
};

const renderVideo = (dataVideo) => {
    let html = `
        <a href="">
            <div class="video_4_1_0__box1__item modal-clip" data-video="${dataVideo.videoLink}" onclick="counterFn()">
            <div class="video_4_1_0__pic">
                <img width="750" height="421" src="${dataVideo.imgSrc}" alt="${dataVideo.videoTitle}" loading="lazy">
            </div>
            <div class="video_4_1_0__text">
                <div class="video_4_1_0__ttVideo">${dataVideo.videoTitle}</div>
                <span>Lượt xem: ${dataVideo.videoView}</span>
            </div>
            </div>
        </a>
    `;
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = html;

}

const renderDataVideo = (data) => {
    if (data && data.length > 0) {
        let html = '';
        data.forEach((video) => {
            html += `
                <div class="video_4_1_0__itemBox2 modal-clip" data-video="${video.link}" onclick="counterFn()">
                    <a href="">
                        <div class="video_4_1_0__itemBox2__pic">
                            <img width="200" height="112" src="${video.img}" alt="" loading="lazy">
                        </div>
                        <div class="video_4_1_0__itemBox2__content">
                            <p>${video.title}</p>
                            <span>Lượt xem: ${video.view}</span>
                        </div>
                    </a>
                </div>
            `;
        });

        const forceOverflowElement = document.getElementById('force-overflow');
        if (forceOverflowElement) {
            forceOverflowElement.innerHTML = html;
        } else {
            console.log("Phần tử 'force-overflow' không tồn tại trong DOM.");
        }
    } else {
        console.log("Không có dữ liệu video để hiển thị.");
    }
};

window.onload = async () => {
    const videoMain = await getVideo();
    renderDataVideo(videoMain);
    renderVideo(dataVideo[0]);
    console.log(renderVideo(dataVideo[0]));
};