const searchEl = document.querySelector('.search');
const seacrhInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function () {
  seacrhInputEl.focus(); // input 요소가 아닌 search클래스 요소를 누르면 focus 적용 
});

seacrhInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  seacrhInputEl.setAttribute('placeholder', '통합검색');
});

seacrhInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  seacrhInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// window.addEventListener('scroll', function () { 
//   // 스크롤할때마다 함수가 실행돼서 용량이 큰 사이트라면 버벅일 수 있음
//   // 그래서 외부 라이브러리를 가져와서 사용함

window.addEventListener('scroll', _.throttle( function () {
  //console.log(window.scrollY);
  if(window.scrollY > 500) {
    // 배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity:0,
      display: 'none'
    });
    // 버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else{
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity:1,
      display: 'block'
    });
    // 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
},300));
// _.throttle(함수, 시간)

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7 -> 1.4 -> 2.1 -> 2.7 각각 요소들을 순서대로 나오게 하면서 투명도 높임
    opacity:1
  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper',{
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이의 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  autoplay: { // {}를 통해서 여러가지 옵션 설정 가능
    delay: 5000
  },
  loop: true,
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper',{
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리!
    promotionEl.classList.remove('hide');
  }
});


function random(min, max){
  // `.toFixed()`를 통해 반환딘 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

  
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    { // 옵션
      ease: Power1.easeInOut,
      y: size,
      repeat: -1, // 무한 반복
      yoyo: true,
      delay: random(0,delay)
    });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      tiggerHook: .8, // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller()); 
  // 감시하려고 하는 몇가지 화면에 보이는 섹션에 대한 정보를 입력하고 마무리하면, 특정한 섹션-> 애니메이션 추가 가능
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();