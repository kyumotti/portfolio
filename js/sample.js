const contents = document.querySelectorAll("#container > div")
const sections = document.querySelectorAll("#container > div > section")
const lis =  document.querySelectorAll("aside > .quick > li")
console.log(lis)

// 윈도우 높이값을 가져와서 각각의 contents의 높이로 지정 
// 윈도우 resize가 되어도 동일하게 적용 
let devHeight = window.innerHeight
window.addEventListener("resize", (e)=> {
  devHeight = window.innerHeight
})
contents.forEach(item => {
  item.style.height = devHeight+"px"; 
})
console.log(devHeight)

// 화살표 함수
let scrollTo = (position) =>{
  window.scroll({
    top:position, 
    left:0,
    behavior: "smooth"
  })
  for(let i=0; i<sections.length; i++){
    if(position>= i*devHeight && position < (i+1)*devHeight){
      sections.forEach(item => {
        item.classList.remove("on")
      })
      sections[i].classList.add("on")
      lis.forEach(item => {
        item.classList.remove("on")
      })
      lis[i].classList.add("on")
    }
  }
}

// QUICK 메뉴를 눌렀울 때 해당하는 content로 이동 --> 스크롤이 content 높이값 만큼씩 움직이게 li.on을 붙여라
// let currIdx = 0;
for(let i = 0; i < lis.length; i++){
  lis[i].addEventListener("click", (e) => {
    e.preventDefault();
    scrollTo(i*devHeight);
    // window.scroll({
    //   left:0,
    //   top: i*devHeight,
    //   behavior: "smooth"
    // })
    lis.forEach(item => {
      item.classList.remove("on")
    })
    e.currentTarget.classList.add("on")
    // for (let v= 0; v < sections.length; v++) {
    //   if(i*devHeight >= v*devHeight && i*devHeight < (v+1)*devHeight) {
    //     sections[v].classList.add("on")
    //   }}
  })
  
}

// content에서 마우스 휠을 움직였을 때, 
// 위로 휠이 움직일 때 앞에 content로 이동, 
// 아래로 휠이 움직일 때 뒤에 content로 이동,
// 이동하고 나서 section.on, quick li.on 이 붙어야한다
  //함수 

for(let i = 0; i<contents.length; i++){
  contents[i].addEventListener("wheel", e => {
    if(e.deltaY < 0){ //이벤트 객체의 deltaY 속성을 통해 휠을 위/아래로 내린건지 알 수 있음 -> 음수면 위로 이동하고 양수면 아래로 이동
      //wheel up
      let prev = e.currentTarget.previousElementSibling.offsetTop;
      scrollTo(prev);
      // window.scroll({
      //   top:prev,
      //   left:0, 
      //   behavior: "smooth"
      // })
      // for (let v= 0; v < sections.length; v++) {
      //   if(prev >= v*devHeight && prev < (v+1)*devHeight) {
      //     sections[v].classList.add("on")
      //   }
      // }
      // if(prev >= 0*devHeight && prev < 1*devHeight){
      //   sections[0].classList.add("on")
      // }else if(prev >= 1*devHeight && prev <2*devHeight ){
      //   sections[1].classList.add("on")
      // }else if(prev >= 2*devHeight && prev <3*devHeight ){
      //   sections[2].classList.add("on")
      // }else if(prev >= 3*devHeight && prev <4*devHeight ){
      //   sections[3].classList.add("on")
      // }
    }else if (e.deltaY > 0){
      //wheel down
      let next = e.currentTarget.nextElementSibling.offsetTop;
      scrollTo(next)
      // window.scroll({
      //   top:next,
      //   left:0, 
      //   behavior: "smooth"
      // })
      // for (let v= 0; v < sections.length; v++) {
      //   if(next >= v*devHeight && next < (v+1)*devHeight) {
      //     sections[v].classList.add("on")
      //   }
      // }
    }
  })

}

// content1의 section은 0.5초 후에 .on이 붙어라 - setTimeout 
setTimeout(function(){sections[0].classList.add("on")},500);
