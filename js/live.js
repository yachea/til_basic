window.addEventListener("load", function () {
  // 데이터

  const liveApiData = [
    {
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      alt: "라이브",
      상태: "방송예정",
      제목: "[라마다 호텔] 해운대/여수/자은도/거제 4지점 라이브 특가🎊",
      날짜: "06월16일 (월)",
      시간: "18:00",
      작은이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/160/20250612044459.png",
      salt: "상세정보",
      작은제목: "[기획전] 푸꾸옥 자유여행 혜택 보기",
    },
    {
      링크: "#",
      이미지: "images/live1.jpg",
      alt: "라이브",
      상태: "방송예정",
      제목: "[휘닉스 브랜드 호텔&리조트] 여름맞이 평창&제주 특가",
      날짜: "06월17일 (화)",
      시간: "19:00",
      작은이미지: "images/live1.jpg",
      salt: "상세정보",
      작은제목: "휘닉스 리조트 평창",
    },
    {
      링크: "#",
      이미지: "images/live3.png",
      alt: "라이브",
      상태: "방송예정",
      제목: "[라마다 호텔] 해운대/여수/자은도/거제 4지점 라이브 특가🎊",
      날짜: "06월16일 (월)",
      시간: "18:00",
      작은이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/160/20250612044459.png",
      salt: "상세정보",
      작은제목: "[기획전] 푸꾸옥 자유여행 혜택 보기",
    },
    {
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      alt: "라이브",
      상태: "방송예정",
      제목: "[라마다 호텔] 해운대/여수/자은도/거제 4지점 라이브 특가🎊",
      날짜: "06월16일 (월)",
      시간: "18:00",
      작은이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/160/20250612044459.png",
      salt: "상세정보",
      작은제목: "[기획전] 푸꾸옥 자유여행 혜택 보기",
    },
    {
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      alt: "라이브",
      상태: "방송예정",
      제목: "[라마다 호텔] 해운대/여수/자은도/거제 4지점 라이브 특가🎊",
      날짜: "06월16일 (월)",
      시간: "18:00",
      작은이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/160/20250612044459.png",
      salt: "상세정보",
      작은제목: "[기획전] 푸꾸옥 자유여행 혜택 보기",
    },
    {
      링크: "#",
      이미지: "images/live1.jpg",
      alt: "라이브",
      상태: "방송예정",
      제목: "[라마다 호텔] 해운대/여수/자은도/거제 4지점 라이브 특가🎊",
      날짜: "06월16일 (월)",
      시간: "18:00",
      작은이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/160/20250612044459.png",
      salt: "상세정보",
      작은제목: "[기획전] 푸꾸옥 자유여행 혜택 보기",
    },
    {
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      alt: "라이브",
      상태: "방송예정",
      제목: "[라마다 호텔] 해운대/여수/자은도/거제 4지점 라이브 특가🎊",
      날짜: "06월16일 (월)",
      시간: "18:00",
      작은이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/160/20250612044459.png",
      salt: "상세정보",
      작은제목: "[기획전] 푸꾸옥 자유여행 혜택 보기",
    },
    {
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      alt: "라이브",
      상태: "방송예정",
      제목: "[라마다 호텔] 해운대/여수/자은도/거제 4지점 라이브 특가🎊",
      날짜: "06월16일 (월)",
      시간: "18:00",
      작은이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/160/20250612044459.png",
      salt: "상세정보",
      작은제목: "[기획전] 푸꾸옥 자유여행 혜택 보기",
    },
  ];

  // html 태그 만들고 배치하기
  const livePos = document.querySelector(".sw_live .swiper-wrapper");

  let html = `
<div class="swiper-slide">
  <a href="${liveApiData[0].링크}" class="live_slide_item">
    <div class="live_image">
      <img
        src="${liveApiData[0].이미지}"
        alt="${liveApiData[0].alt}"
      />
    </div>
    <div class="live_info">
      <div class="live_state">
        <span class="live_wait">${liveApiData[0].상태}</span>
      </div>
      <p class="live_item_title">
        ${liveApiData[0].제목}
      </p>
      <div class="live_day">
        <div class="live_day_date">${liveApiData[0].날짜}</div>
        <div class="live_day_time">${liveApiData[0].시간}</div>
      </div>
      <div class="live_detail">
        <div class="live_detail_image">
          <img
            src="${liveApiData[0].작은이미지}"
            alt="${liveApiData[0].salt}"
          />
        </div>

        <p class="live_detail_title">
          ${liveApiData[0].작은제목}
        </p>
      </div>
    </div>
  </a>
</div>
`;

  // 실제 데이터 개수 만큼 swiper-slide 태그 만들어 배치하기
  html = "";
  for (let i = 0; i < liveApiData.length; i++) {
    let tag = `
  <div class="swiper-slide">
  <a href="${liveApiData[i].링크}" class="live_slide_item">
    <div class="live_image">
      <img
        src="${liveApiData[i].이미지}"
        alt="${liveApiData[i].alt}"
      />
    </div>
    <div class="live_info">
      <div class="live_state">
        <span class="live_wait">${liveApiData[i].상태}</span>
      </div>
      <p class="live_item_title">
        ${liveApiData[i].제목}
      </p>
      <div class="live_day">
        <div class="live_day_date">${liveApiData[i].날짜}</div>
        <div class="live_day_time">${liveApiData[i].시간}</div>
      </div>
      <div class="live_detail">
        <div class="live_detail_image">
          <img
            src="${liveApiData[i].작은이미지}"
            alt="${liveApiData[i].salt}"
          />
        </div>

        <p class="live_detail_title">
          ${liveApiData[i].작은제목}
        </p>
      </div>
    </div>
  </a>
</div>
  `;
    html = html + tag;
  }

  livePos.innerHTML = html;

  // swiper 만들기
  new Swiper(".sw_live", {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
      nextEl: ".live_slide_next",
      prevEl: ".live_slide_prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 3,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 4,
      },
    },
  });
});
