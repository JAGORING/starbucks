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


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();