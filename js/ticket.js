window.addEventListener("load", function () {
  // 데이터
  const ticketApiData = [
    {이미지: "images/ticket1.gif",
      alt: "슬립노모어".
      랭크: "1",
      상품타이틀: "슬립노모어 서울",
      장소: "LG아트센터 서울 LG SIGNATURE 홀",
      날짜: "2025.07.26 ~ 2025.10.25",
      박스: ["단독판매","좌석우위"],
},
];

  // html 만들고 배치하기
  const ticketPos = document.querySelector(".sw_ticket .swiper-wrapper");
  let html = `
<div class="swiper-slide">
  <a href="#" class="ticket_slide_item">
    <div class="ticket_image">
      <img src="${ticketApiData[0].이미지}" alt="슬립노모어" />
      <div class="ticket_rank">1</div>
    </div>
    <div class="ticket_info">
      <p class="ticket_item_title">
        슬립노모어 서울 (Sleep No More Seoul)
      </p>
      <p class="ticket_item_place">
        LG아트센터 서울 LG SIGNATURE 홀
      </p>
      <p class="ticket_item_day">2025.07.26 ~ 2025.10.25</p>
      <div class="ticket_item_option">
        <span class="ticket_red">단독판매</span>
        <span class="ticket_blue">좌석우위</span>
      </div>
    </div>
  </a>
</div>
`;

  //  swiper 슬라이드
  new Swiper(".sw_ticket", {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 4,
    navigation: {
      nextEl: ".ticket_slide_next",
      prevEl: ".ticket_slide_prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
});
