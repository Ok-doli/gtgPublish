// 메뉴 항목을 클릭했을 때 스타일 변경 함수
function setupMenuClickHandler(menuSelector) {
    const menuItems = document.querySelectorAll(menuSelector);

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // 메뉴 이벤트 수정이 필요
            // 모든 아이템에서 bold_16px 및 active 클래스를 제거합니다.
            menuItems.forEach(i => {
                i.classList.remove('bold_16px');
                i.classList.remove('active');
            });

            // 클릭된 아이템에 bold_16px 및 active 클래스를 추가합니다.
            this.classList.add('bold_16px');
            this.classList.add('active');
        });
    });
}