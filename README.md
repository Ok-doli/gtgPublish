## 2024-09-08
### 수정 사항 : 공통 CSS
-아래의 코드 !important; 제거 및 파란색 체크박스 css 공통 삽입 , button-Blue 공통 파란색 버튼 생성

input, textarea, button {
    appearance: none !important;
    -moz-appearance: none !important;
    -webkit-appearance: none !important;
    border-radius: 0 !important;
    -webkit-border-radius: 0 !important;
    -moz-border-radius: 0 !important;

}

Button, html [type="button"] {
  -webkit-appearance: none !important;
}

### 이슈

## 2024-09-07  
### 수정 사항 : 공통 CSS

- demiLight_16px 추가
- #F8F9FC, #DBDBDB 색상 추가 및 명도 순으로 재정렬
- checkIcon.svg 배경 white → none으로 변경

### 이슈

- html, body의 공통 속성으로 *overflow:hidden* 이 설정되어있음. 화면 하단 섹션이 잘려서 임시적으로 주석처리 하였음. `/* overflow: hidden; 2024-09-07 임시 주석 */`
- 위 작업으로 가로 스크롤도 생성되어버림. main 섹션의 가로폭은 반응형 레이아웃이라 전체 화면이 될 텐데 <mark>왜 가로 스크롤이 생기는지 알 수 없음</mark> <span style="font-size: 2px;">help..!</span>
- 같은 설정임에도 폰트 색상이 미묘하게 달라보임. 비교를 위해 아래 이미지 참고 (상 : 작업물, 하 : 피그마)
<img width="585" alt="스크린샷 2024-09-07 오후 3 16 20" src="https://github.com/user-attachments/assets/ac80482a-340d-4579-8f69-382b1b84f49c">
<img width="450" alt="피그마 이미지" src="https://github.com/user-attachments/assets/515bb3d8-23c6-4f45-9217-be56ca268008">


- ~~css 실력 이슈~~

### 작업 일정

- (9/8) **시청할 영상** 페이지 수정사항 반영 및 **내 영상** 페이지 제작
- (9/9 ~ 11) **내 정보, 내 정보 수정** 페이지 제작
- (9/12) 수정사항 반영
