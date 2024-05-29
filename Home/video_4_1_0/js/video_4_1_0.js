// const renderVideo = (data) => {

//     const link = data[0].videoLink;
//     const parts = link.split("=");
//     const id = parts[1];

//     let html = `
//         <a rel="noffollow" onclick="modalVideo('${id}')">
//             <div class="video_4_1_0__box1__item">
//                 <div class="video_4_1_0__pic">
//                     <img width="750" height="421" src="https://nhakhoaparis.vn/${data[0].imgSrc}" alt="${data[0].videoTitle}" loading="lazy">
//                 </div>
//                 <div class="video_4_1_0__text">
//                     <div class="video_4_1_0__ttVideo">${data[0].videoTitle}</div>
//                     <span>Lượt xem: ${data[0].videoView}</span>
//                 </div>
//             </div>
//         </a>
//     `;
//     const videoContainer = document.getElementById('video-container');
//     videoContainer.innerHTML = html;

// }

// const renderDataVideo = (data) => {
//     if (data && data.length > 0) {
//         let html = '';
//         data.forEach((video) => {

//             const link = video.link;
//             const parts = link.split("=");
//             const idVideo = parts[1];
//             html += `
//                 <div class="video_4_1_0__itemBox2" onclick="modalVideo('${idVideo}')">
//                     <a rel="noffollow">
//                         <div class="video_4_1_0__itemBox2__pic">
//                             <img width="200" height="112" src="https://nhakhoaparis.vn/${video.img}" alt="" loading="lazy">
//                         </div>
//                         <div class="video_4_1_0__itemBox2__content">
//                             <p>${video.title}</p>
//                             <span>Lượt xem: ${video.view}</span>
//                         </div>
//                     </a>
//                 </div>
//             `;
//         });

//         const forceOverflowElement = document.getElementById('force-overflow');
//         if (forceOverflowElement) {
//             forceOverflowElement.innerHTML = html;
//         } else {
//             console.log("Phần tử 'force-overflow' không tồn tại trong DOM.");
//         }
//     } else {
//         console.log("Không có dữ liệu video để hiển thị.");
//     }
// };

const modalVideo = (id) => {
    const html = /*html*/ `
    <div class="modal modal-clipBox" id="modal-clip" style="display:flex">
        <div class="modal-closePic" onclick="removeModal()">×</div>
        <div class="modal-box modal-box-video animate-zoom">
            <div class="modal-video">
                <iframe id="youtube" src="//www.youtube-nocookie.com/embed/${id}?rel=0&amp;controls=1&amp;autoplay=1&amp;nocookie=true&amp;mute=true" frameborder="0" allowfullscreen=""></iframe>
            </div>
        </div>
        <div class="modal-bg" id="modal-bg" onclick="removeModal()"></div>
    </div>
    `;
    document.body.insertAdjacentHTML("beforeend", html);
}

const removeModal = () => {
    document.getElementById('modal-clip').remove();
}

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
    // console.log(videoContainer);
    videoContainer.push({ imgSrc: videoObj[0], videoTitle: videoObj[1], videoLink: videoObj[2], videoView: videoObj[3] })
    videoJSON.info2.map((item) => {
        const videoData = item.content.split("\r\n");
        // console.log(videoData);
        video.push({ img: videoData[0], title: videoData[1], link: videoData[2], view: videoData[3] });
    });
    return { video, videoContainer }; // Trả về mảng video đã được xử lý
};

window.onload = async () => {
    const videoMain = await getVideo();
    renderDataVideo(videoMain.video);
    renderVideo(videoMain.videoContainer);
};