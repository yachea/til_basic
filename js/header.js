console.log("geader.js 코드 실행");

// html 의 태그구조를 모두 읽어들었다면 그때 찾아라.
// 아래 구문 외워야 하나요?
//  const : 웹브라우저에 보관하겠다. (불변, 상수- 절대 바꿀수없음)
//  let : 웹브라우저에 보관하겠다. (변수- 자주자주 갱신될것같은거)
//  var : 웹브라우저에 보관하겠다. (변수- 수시로 내용물이 바뀌는거 옛날거임. 쓰면x)
//  영어단어 : 변수명
// const 변수명 = 보관데이터; (오른쪽을 왼쪽에 담는다)
// 변수명: 반드시 명사로 지어야 함. 영어

window.addEventListener("DOMContentLoaded", function () {
  // 상단영역
  const headerTop = document.querySelector(".header_top");

  //   로고
  const logo = document.querySelector(".logo");
  //   제품검색
  const search = document.querySelector(".search");
  //   세일제품배너
  const sale = document.querySelector(".sale");
  //   링크사이트목록
  const linkSite = document.querySelector(".link_site");
  //   메인메뉴 a 태그들 : 여러개
  const mainMenuA = document.querySelectorAll(".main_menu li a");
  //   멤버메뉴 a 태그들 : 여러 개
  const memberMenuA = document.querySelectorAll(".member_menu li a");

  // 웹브라우저의 스크롤을 체크하겠다.
  window.addEventListener("scroll", function () {
    // 스크롤바의 최상단
    const scY = window.scrollY;
    console.log(scY);
    if (scY > 0) {
      console.log("스크롤되었다");
      headerTop.classList.add("header_top_scroll");
      logo.classList.add("logo_hide");
      sale.classList.add("sale_hide");
      linkSite.classList.add("link_site_hide");
      search.classList.add("search_scroll");
      // 메인메뉴 class 추가
      mainMenuA.forEach(function (item) {
        item.classList.add("height_62");
      });
      memberMenuA.forEach(function (item) {
        item.classList.add("height_62");
      });
      // 회원메뉴 class 추가
    } else {
      console.log("스크롤최상단");
      logo.classList.remove("logo_hide");
      sale.classList.remove("sale_hide");
      linkSite.classList.remove("link_site_hide");
      search.classList.remove("search_scroll");
      headerTop.classList.remove("header_top_scroll");
      mainMenuA.forEach(function (item) {
        item.classList.remove("height_62");
      });
      memberMenuA.forEach(function (item) {
        item.classList.remove("height_62");
      });
    }
  });
});
