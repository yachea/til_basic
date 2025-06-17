window.addEventListener("load", function () {
  // API 데이터
  const ticketApiData = [
    {
      카테고리: "뮤지컬",
      데이터: [
        {
          uid: 1,
          링크: "#",
          이미지주소: "images/ticket1.gif",
          랭킹: "1",
          제목: "<슬립노모어 서울> (Sleep No More Seoul)",
          장소: "매키탄 호텔 (The McKithan Hotel)",
          날짜: "2025.07.24 ~2025.08.09",
          박스: [
            { 스타일: "red", 텍스트: "단독판매" },
            { 스타일: "blue", 텍스트: "좌석우위" },
          ],
        },
        {
          uid: 2,
          링크: "#",
          이미지주소: "images/ticket2.gif",
          랭킹: "2",
          제목: "뮤지컬 〈맘마미아!〉",
          장소: "LG아트센터 서울 LG SIGNATURE 홀",
          날짜: "2025.07.26 ~ 2025.10.25",
          박스: [{ 스타일: "red", 텍스트: "단독판매" }],
        },
        {
          uid: 3,
          링크: "#",
          이미지주소: "images/ticket3.gif",
          랭킹: "3",
          제목: "[NOL 스페셜 스테이지] 뮤지컬 〈팬텀〉 10주년 기념 공연",
          장소: "세종문화회관 대극장",
          날짜: "2025.07.12 ~2025.07.17",
          박스: [{ 스타일: "blue", 텍스트: "좌석우위" }],
        },
        {
          uid: 4,
          링크: "#",
          이미지주소: "images/ticket4.gif",
          랭킹: "4",
          제목: "뮤지컬 〈위키드〉 내한 공연(WICKED The Musical)",
          장소: "블루스퀘어 신한카드홀",
          날짜: "2025.07.12 ~2025.10.26",
          박스: [
            { 스타일: "red", 텍스트: "단독판매" },
            { 스타일: "blue", 텍스트: "좌석우위" },
          ],
        },
        {
          uid: 5,
          링크: "#",
          이미지주소: "images/ticket5.gif",
          랭킹: "5",
          제목: "뮤지컬 〈스트라빈스키〉",
          장소: "대학로 TOM(티오엠) 2관",
          날짜: "2025.07.28 ~2025.10.12",
          박스: [{ 스타일: "blue", 텍스트: "좌석우위" }],
        },
        {
          uid: 6,
          링크: "#",
          이미지주소: "images/ticket6.gif",
          랭킹: "6",
          제목: "뮤지컬 〈마리 퀴리〉",
          장소: "광림아트센터 BBCH홀",
          날짜: "2025.07.25 ~2025.10.19",
          박스: [],
        },
        {
          uid: 7,
          링크: "#",
          이미지주소: "images/ticket7.gif",
          랭킹: "7",
          제목: "뮤지컬 〈매디슨 카운티의 다리〉",
          장소: "광림아트센터 BBCH홀",
          날짜: "2025.05.01 ~2025.07.13",
          박스: [{ 스타일: "red", 텍스트: "단독판매" }],
        },
      ],
    },
    {
      카테고리: "콘서트",
      데이터: [],
    },
    {
      카테고리: "스포츠",
      데이터: [],
    },
    {
      카테고리: "전시/행사",
      데이터: [],
    },
    {
      카테고리: "클래식/무용",
      데이터: [],
    },
    {
      카테고리: "아동/가족",
      데이터: [],
    },
    {
      카테고리: "연극",
      데이터: [],
    },
    {
      카테고리: "레저/캠핑",
      데이터: [],
    },
  ];

  // 카테고리 html 태그 만들기
  let btHtml = ``;
  for (let i = 0; i < ticketApiData.length; i++) {
    const tag = ` <li><button>${ticketApiData[i].카테고리}</button></li>`;
    btHtml = btHtml + tag;
  }
  // 카테고리 버튼 출력장소 및 출력하기
  const btPos = document.querySelector(".ticket_button_list");
  btPos.innerHTML = btHtml;
  // 포커스 스타일 추가하기
  //  아래 숫자가 포커스 된 카테고리의 순서 이다.
  let focusIndex = 0;
  const btlist = document.querySelectorAll(".ticket_button_list li button");

  // focusIndex 번호의 button 태그에 클래스 추가
  btlist[focusIndex].classList.add("ticket_focus");

  // 클릭 시 포커스 이동하기
  btlist.forEach(function (item, index) {
    item.addEventListener("click", function () {
      focusIndex = index;
      resetBts();
    });
  });
  // 포커스 리셋 및 최종 포커스 적용하기
  function resetBts() {
    btlist.forEach(function (item) {
      item.classList.remove("ticket_focus");
    });
    btlist[focusIndex].classList.add("ticket_focus");
  }

  // html 태그 만들기
  let html = ``;

  //   실제 데이터 개수 만큼 slide html 만들기
  html = ``;
  for (let i = 0; i < ticketApiData[focusIndex].데이터.length; i++) {
    // 임시 태그
    let tag = `
    <div class="swiper-slide">
  <a href="${ticketApiData[focusIndex].데이터[i].링크}" class="ticket_slide_item">
    <div class="ticket_image">
      <img src="${ticketApiData[focusIndex].데이터[i].이미지주소}" alt="${ticketApiData[0].데이터[i].제목}" />
      <div class="ticket_rank">${ticketApiData[focusIndex].데이터[i].랭킹}</div>
    </div>
    <div class="ticket_info">
      <p class="ticket_item_title">
        ${ticketApiData[focusIndex].데이터[i].제목}
      </p>
      <p class="ticket_item_place">
        ${ticketApiData[focusIndex].데이터[i].장소}
      </p>
      <p class="ticket_item_day">${ticketApiData[focusIndex].데이터[i].날짜}</p>
      <div class="ticket_item_option">`;

    for (let j = 0; j < ticketApiData[focusIndex].데이터[i].박스.length; j++) {
      tag =
        tag +
        `<span class="ticket_${ticketApiData[focusIndex].데이터[i].박스[j].스타일}">${ticketApiData[focusIndex].데이터[i].박스[j].텍스트}</span>`;
    }

    tag =
      tag +
      `</div>
    </div>
  </a>
</div>
    `;

    html = html + tag;
  }

  // 태그 출력 장소 지정하기
  const ticketPos = document.querySelector(".sw_ticket .swiper-wrapper");
  ticketPos.innerHTML = html;

  //  swiper 슬라이드
  new Swiper(".sw_ticket", {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 3,
    navigation: {
      nextEl: ".ticket_slide_next",
      prevEl: ".ticket_slide_prev",
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
