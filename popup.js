const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popupMessage');
const closePopupBtn = document.getElementById('closePopupBtn');


// 팝업 닫기 버튼 클릭 시
closePopupBtn.addEventListener('click', closePopup);

// 팝업 외의 영역 클릭 시 팝업 닫기
window.addEventListener('click', (e) => {
    if (e.target === popup) {
        closePopup();
    }
});



