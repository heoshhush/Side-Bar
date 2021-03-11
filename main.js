const sideBar = document.querySelector('.sideBar');
const showSideBarBtn = document.querySelector('.showSideBarBtn');
const cancelSideBar = document.querySelector('.cancelSideBar');

showSideBarBtn.addEventListener('click',() => {
    sideBar.classList.toggle('showing');
})

cancelSideBar.addEventListener('click', () => {
    sideBar.classList.remove('showing');
})
// 1) sideBar가 컨텐츠들다 뭉개지면서 열고닫히는 현상 발생!
// -> width를 조절해가며 다 뭉개버리는게 아니라, translate를 활용해서 위치만 옮겨준다!!!