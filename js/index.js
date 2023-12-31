// loading 화면
const loader = document.querySelector(".loader");
const html = document.querySelector("html");

html.style.overflow = "hidden";

window.addEventListener("load", ()=> {
  setTimeout(() => {
    loader.style.opacity="0";
    html.style.overflow = "auto";

    setTimeout(()=> {
      loader.style.display = "none";
    },400)
  },1500);
  scrollTo(0)
})

// email me hover 이벤트
const emailBtn = document.querySelector(".top_link > a:nth-child(2)");
emailBtn.addEventListener("mouseover", e => {
  e.currentTarget.classList.add("on")
})
emailBtn.addEventListener("mouseout", e => {
  e.currentTarget.classList.remove("on")
})

// 햄버거 gnb메뉴
// 헴버거 메뉴 아이콘 클릭시 gnb가 나오고 현재 섹션은 작아지기
const slideBG = document.querySelector("div.slide_bg");
const slideGnb = document.querySelector("ul.slide_gnb");
const slideGnbLi = document.querySelectorAll("ul.slide_gnb>li.menuLi");
const hamBtn = document.querySelector("a.ham_btn");
const container = document.querySelector("#container")
const hamCloseBtn = document.querySelector("a.ham_close_btn"); 

  hamBtn.addEventListener("click", e => {
    for(let i = 0; i<contents.length; i++){
      e.preventDefault();
      slideBG.classList.add("open")
      slideGnb.classList.add("open")
      hamCloseBtn.classList.add("open")
      if(scrollY >= i*devHeight-5 && scrollY < (i+1)*devHeight){
        console.log(scrollY)
        console.log(devHeight)
        contents.forEach(item => {
          item.classList.remove("open")
        })
        contents[i].classList.add("open")
        // body.classList.add("on")
      }
      hamCloseBtn.addEventListener("click", (e)=> {
        e.preventDefault();
        slideBG.classList.remove("open");
        slideGnb.classList.remove("open");
        hamCloseBtn.classList.remove("open");
        contents[i].classList.remove("open");
        // body.classList.remove("on")
      })

    }
})


// 햄버거 메뉴 li클릭시 해당하는 섹션으로 이동
for(let i=0; i<slideGnbLi.length; i++){
  slideGnbLi[i].addEventListener("click",e=> {
    e.preventDefault();
    slideBG.classList.remove("open")
    slideGnb.classList.remove("open")
    hamCloseBtn.classList.remove("open")
    contents.forEach(item => {
      item.classList.remove("open")
    })
    scrollTo(i*devHeight); 
    
    if(e.currentTarget == slideGnbLi[1]){
      bgText1.classList.add("on")
      bgText2.classList.add("on")
      designBG.classList.remove("on")
      transBG.classList.remove("on")
      bgcircleS.classList.remove("on")
      bgcircleM.classList.remove("on")
      bgcircleL.classList.remove("on")
    }else{
      bgText1.classList.remove("on")
      bgText2.classList.remove("on")
      if(e.currentTarget == slideGnbLi[3]){
        designBG.classList.add("on")
        transBG.classList.add("on")
        bgcircleS.classList.remove("on")
        bgcircleM.classList.remove("on")
        bgcircleL.classList.remove("on")
      }else{
        designBG.classList.remove("on")
        transBG.classList.remove("on")
        if(e.currentTarget == slideGnbLi[4]){
          bgcircleS.classList.add("on")
          bgcircleM.classList.add("on")
          bgcircleL.classList.add("on")
        }else{
          bgcircleS.classList.remove("on")
          bgcircleM.classList.remove("on")
          bgcircleL.classList.remove("on")
        }
      }

    }
  })
}

// 첫 스크롤시 메인페이지에 그라디언트 효과 추가
const btmGradient = document.querySelector(".btm_gradient"); 

window.addEventListener("scroll", ()=> {
  let scrollY = window.scrollY;
  let windowHeight = window.innerHeight;
  if(scrollY <= windowHeight*2){
    btmGradient.style.opacity = scrollY/windowHeight *3;
  }
})

// 메인 페이지 Headline 
// let spanText = function spanText(text) {
//   var string = text.innerText;
//   var spaned = '';
//   for (let i = 0; i < string.length; i++) {
//     if(string.substring(i, i + 1) === ' ') spaned += string.substring(i, i + 1);
//     else spaned += '<span>' + string.substring(i, i + 1) + '</span>';
//   }
//   text.innerHTML = spaned;
// }

// var headline = document.querySelector("#main>section>h2");
// spanText(headline);

// page 넘김
const contents = document.querySelectorAll("#container > div"); 
const sections = document.querySelectorAll("#container > div >section"); 
const quickMenu = document.querySelectorAll("ul.quick > li");


// 각각의 컨텐츠들의 높이를 브라우저 높이만큼으로 설정
let devHeight = window.innerHeight; 
console.log(devHeight)
window.addEventListener("resize", (e)=> {
  devHeight = window.innerHeight
})
contents.forEach(content => {
  content.style.height = devHeight+"px"; 
})


// 화살표 함수 
let scrollTo = (position) => {
  window.scroll({
    top:position, 
    left:0,
    behavior: "smooth"
  });
  // for(let i=0; i<contents.length; i++){
  //   if(position>= i*devHeight && position <(i+1)*devHeight){
  //     quickMenu.forEach(menu => {
  //       menu.classList.remove("on")
  //     })
  //     quickMenu[i].classList.add("on")
  //   }
  // }
}

// quickmenu를 클릭했을때 해당하는 컨텐츠로 이동 (브라우저 높이만큼 스크롤 이동)
for(let i=0; i<quickMenu.length;i++){
  quickMenu[i].addEventListener("click", e=> {
    e.preventDefault();
    scrollTo(i*devHeight); 
    quickMenu.forEach(menu => {
      menu.classList.remove("on")
    })
    quickMenu[i].classList.add("on");
      for (let v= 0; v < sections.length; v++) {
        if(i*devHeight >= v*devHeight && i*devHeight < (v+1)*devHeight) {
          sections.forEach(item => {
            item.classList.remove("on")
          })
          sections[v].classList.add("on")
      }}
    // if(e.currentTarget == quickMenu[1]){
    //   bgText1.classList.add("on")
    //   bgText2.classList.add("on")
    //   designBG.classList.remove("on")
    //   transBG.classList.remove("on")
    //   bgcircleS.classList.remove("on")
    //   bgcircleM.classList.remove("on")
    //   bgcircleL.classList.remove("on")
    // }else{
    //   bgText1.classList.remove("on")
    //   bgText2.classList.remove("on")
    //   if(e.currentTarget == quickMenu[3]){
    //     designBG.classList.add("on")
    //     transBG.classList.add("on")
    //     bgcircleS.classList.remove("on")
    //     bgcircleM.classList.remove("on")
    //     bgcircleL.classList.remove("on")
    //   }else{
    //     designBG.classList.remove("on")
    //     transBG.classList.remove("on")
    //     if(e.currentTarget == quickMenu[4]){
    //       bgcircleS.classList.add("on")
    //       bgcircleM.classList.add("on")
    //       bgcircleL.classList.add("on")
    //     }else{
    //       bgcircleS.classList.remove("on")
    //       bgcircleM.classList.remove("on")
    //       bgcircleL.classList.remove("on")
    //     }
    //   }
    // }
  })
}

// const bgText1 = document.querySelector("#profile .text1")
// const bgText2 = document.querySelector("#profile .text2")
// const designBG = document.querySelector("#design .designBG")
// const bgcircleS = document.querySelector(".bgcircle_s")
// const bgcircleM = document.querySelector(".bgcircle_m")
// const bgcircleL = document.querySelector(".bgcircle_l")
// const transBG = document.querySelector(".transBG")

// for(let k = 0; k<contents.length;k++){
//   contents[k].addEventListener("wheel", e => {
//     if(e.deltaY< 0){ // wheel up 
//       if(e.currentTarget == contents[2]||e.currentTarget == contents[4]){
//         bgText1.classList.add("on")
//         bgText2.classList.add("on")
//         designBG.classList.add("on")
//         transBG.classList.add("on")
//         bgcircleS.classList.remove("on")
//         bgcircleM.classList.remove("on")
//         bgcircleL.classList.remove("on")
//       }else {
//         bgText1.classList.remove("on")
//         bgText2.classList.remove("on")
//         designBG.classList.remove("on")
//         transBG.classList.remove("on")
//       }
//     }else if(e.deltaY>0){ //wheel down
//       if(e.currentTarget == contents[0]){
//         bgText1.classList.add("on")
//         bgText2.classList.add("on")

//       }else{
//         bgText1.classList.remove("on")
//         bgText2.classList.remove("on")
//         if(e.currentTarget == contents[2]){
//           designBG.classList.add("on")
//           transBG.classList.add("on")
//         }else{
//           designBG.classList.remove("on")
//           transBG.classList.remove("on")
//           if(e.currentTarget == contents[3]){
//             bgcircleS.classList.add("on")
//             bgcircleM.classList.add("on")
//             bgcircleL.classList.add("on")
//           }else{
//             bgcircleS.classList.remove("on")
//             bgcircleM.classList.remove("on")
//             bgcircleL.classList.remove("on")
//           }
//         }
//       }
//     }
//   })
// }
const contInner = document.querySelector("#publishing .page3_inner")



// 마우스 휠 이벤트
// 3번째 content에서는 가로스크롤
// 가로 스크롤이 끝나면 다시 세로 스크롤
for(let k = 0; k<contents.length;k++){
  contents[k].addEventListener("wheel", e=> {
    if(e.currentTarget == contents[2]) {
      if(e.deltaY<0){ //wheel up
        slideNum--;
        console.log(slideNum);
        if(slideNum < 0){
          slideNum = 0;
          let prev = e.currentTarget.previousElementSibling.offsetTop;
          scrollTo(prev);
          quickMenu.forEach(menu => {
            menu.classList.remove("on")
          })
          quickMenu[k-1].classList.add("on")
          sections[1].classList.add("on")
        }
        slider.style.transform = `translateX(${-slideNum*slideW}px)`;
        roll.forEach(item => {
          item.classList.remove("on")
        })
        roll[slideNum].classList.add("on")
      }else if(e.deltaY>0){ //wheel down
        slideNum++; 
        if(slideNum>projects.length -1){
          slideNum = 2;
          let next = e.currentTarget.nextElementSibling.offsetTop;
          scrollTo(next);
          quickMenu.forEach(menu => {
            menu.classList.remove("on")
          })
          quickMenu[k+1].classList.add("on")
          sections[3].classList.add("on")
        }
        slider.style.transform = `translateX(${-slideNum*slideW}px)`;
        roll.forEach(item => {
          item.classList.remove("on")
        })
        roll[slideNum].classList.add("on")
      }
    }else{
      if(e.deltaY<0){ // wheel up 
        let prev = e.currentTarget.previousElementSibling.offsetTop;
        scrollTo(prev)
          quickMenu.forEach(menu => {
           menu.classList.remove("on")
         })
         quickMenu[k-1].classList.add("on");
        for (let v= 0; v < sections.length; v++) {
          if(prev >= v*devHeight && prev < (v+1)*devHeight) {
            sections.forEach(item => {
              item.classList.remove("on")
            })
            sections[v].classList.add("on")
          }
        }
      } else if(e.deltaY>0){ //wheel down
        let next = e.currentTarget.nextElementSibling.offsetTop;
        scrollTo(next)
          quickMenu.forEach(menu => {
            menu.classList.remove("on")
          })
          quickMenu[k+1].classList.add("on")
        for (let v= 0; v < sections.length; v++) {
          if(next >= v*devHeight && next < (v+1)*devHeight) {
            sections.forEach(item => {
              item.classList.remove("on")
            })
            sections[v].classList.add("on")
        }
      }
      }
    }

  })
}



// publishing 섹션에서의 가로 스크롤
const slider = document.querySelector(".page3_inner");
const projects = document.querySelectorAll(".page3_inner > div");
let slideW = document.querySelector(".work1").offsetWidth;
let start_pos = 0; 
let slideNum = 0;

window.addEventListener("resize", (e)=> {
  slideW = document.querySelector(".work1").offsetWidth;
});

// 가로 스크롤 함수
// function row_slider(width){
//   // for(let i = 0; i < projects.length; i++){
//     slider.style.transform = `translateX(${-slideNum*width}px)`;
//   }
// // }


// publishing pagination 클릭 이벤트
const roll = document.querySelectorAll("ul.pagination > li"); 
for(let i = 0; i<roll.length; i++){
  roll[i].addEventListener("click", e => {
    slider.style.transform = `translateX(${-i*slideW}px)`;

    roll.forEach(item => {
      item.classList.remove("on")
    })
    roll[i].classList.add("on")
  })
}



// design 섹션 팝업창
// const popwork1 = document.querySelector(".pop1");
// const popupBG = document.querySelector(".popupBG");
// const popCloseBtn = document.querySelector(".pop_close_btn");

// popwork1.addEventListener("click", e=> {
//   popupBG.classList.add("on")
// })
// popCloseBtn.addEventListener("click", e=> {
//   e.preventDefault();
//   popupBG.classList.remove("on")
// })

// 웹접근성 결과 페이지
const veriBtn = document.querySelector(".veri_btn");
console.log(veriBtn)
const verification = document.querySelector(".verification");
const backIcon = document.querySelector(".back_ico");
const body = document.querySelector("body");
const publishing = document.querySelector("#publishing");

veriBtn.addEventListener("click", e=>{
  e.preventDefault();
  verification.classList.add("on")
  // body.classList.add("on")
  // publishing.classList.add("on")
})
backIcon.addEventListener("click", e=>{
  e.preventDefault();
  verification.classList.remove("on")
  // body.classList.remove("on")
  // publishing.classList.remove("on")
})

// 웹접근성 결과 페이지 내 탭메뉴
const tabMenu = document.querySelectorAll("ul.tabMenu>li");
const htmlimg = document.querySelector(".veri_result > li.html")
const css = document.querySelector(".veri_result > li.css")
const access = document.querySelector(".veri_result > li.access")
const all = document.querySelectorAll(".veri_result > li")

for(let i = 0; i < tabMenu.length; i++){
  tabMenu[i].addEventListener("click", (e)=> {
    tabMenu.forEach(item => {
      item.classList.remove("on")
    })
    e.currentTarget.classList.add("on")
    all.forEach(item => {
      item.style.display = "none"
    })
    let className = e.currentTarget.getAttribute("class"); 
    switch(className) {
      case "html on":
        htmlimg.style.display = "block"
        break;
  
      case "css on":
        css.style.display = "block"
        break;
  
      case "access on": 
        access.style.display = "block"
        break;
      
      default:
        break;
    }
})
}