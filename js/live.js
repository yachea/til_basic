window.addEventListener("DOMContentLoaded", function () {
  // 데이터
  async function getData() {
    try {
      const res = await fetch("/apis/live.json");
      const result = await res.json();
      makeHtml(result);
    } catch (error) {
      console.log(error);
    }
  }

  // html 태그 만들고 배치하기

  function makeHtml(data) {
    let html = "";
    for (let i = 0; i < data.length; i++) {
      const obj = data[i];
      let tag = `
      <div class="swiper-slide">
  <a href="${obj.링크}" class="live_slide_item">
    <div class="live_image">
      <img
        src="${obj.이미지}"
        alt="${obj.alt}"
      />
    </div>
    <div class="live_info">
      <div class="live_state">
        <span class="live_wait">${obj.상태}</span>
      </div>
      <p class="live_item_title">
        ${obj.제목}
      </p>
      <div class="live_day">
        <div class="live_day_date">${obj.날짜}</div>
        <div class="live_day_time">${obj.시간}</div>
      </div>
      <div class="live_detail">
        <div class="live_detail_image">
          <img
            src="${obj.작은이미지}"
            alt="${obj.salt}"
          />
        </div>

        <p class="live_detail_title">
          ${obj.작은제목}
        </p>
      </div>
    </div>
  </a>
</div>`;
      html = html + tag;
    }
    const livePos = document.querySelector(".sw_live .swiper-wrapper");
    livePos.innerHTML = html;
    makeLiveSlide();
  }
  getData();
});

// 실제 데이터 개수 만큼 swiper-slide 태그 만들어 배치하기

// swiper 만들기
function makeLiveSlide() {
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
}
