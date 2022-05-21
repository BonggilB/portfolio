
    // 비슷한 동작이더라도 여러 방법을 사용했습니다.

window.onload=()=>{
    // 팝업이벤트
    let popEl = document.getElementById('Start');
    let chk01 = document.getElementById('chk01');
    let btnPopup = document.getElementById('btn-popup');
    popup();
    // 프로필 스위치
    let pro1 = true
    let pro2 = false
    // 쿠키
        function setCookie(name,value,expir){
                            // 쿠키 값에 만료기한 날짜 저장
            let date = new Date();
            date.setDate(date.getDate() + expir);
            document.cookie = name + '=' + value + ';expires=' + date +';path=/;';
        }
        function getCookie(name) {
                    // 활성화된 쿠키값이있는지 확인후 팝업호출여부 전송
            let value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
            return value? value[2] : null;
        }
    // 팝업 보이기/감추기
    function popup(){
                    // 스크립트우선순위를위해 딜레이100티켓 지정
        setTimeout(function() {
            popEl.style.opacity="1";
        }, 100);
                    // 팝업호출사인 받을시 팝업표시
        if(getCookie('mainPopup')!=='hidden'){
            popEl.classList.remove('dis-none');
        }
    }
    // 팝업닫기
    btnPopup.addEventListener('click',()=>{
                //이벤트리스너로 클릭감지시 팝업제거후 쿠키저장여부 확인,
        popEl.classList.add('dis-none');
        if(chk01.checked){
            setCookie('mainPopup','hidden',1);
        }
    });
    
    //앞으로의 스크립트는 스타일과 효과를위한부분입니다. 동작이 복잡하지 않을시 주석을 생략하겠습니다.
    // 스크롤 이벤트
    window.addEventListener('scroll', function(){
        // 헤더 배경색 변경
        let header = document.querySelector('.header')
        if(window.scrollY>40){
            header.style.backgroundColor="rgba(0,0,0,0.4)";
        }else if(window.scrollY<40){
            header.style.backgroundColor="#ffffff";
        };
        //프로필 인사말 페이드인아웃 변경
        let profade = document.querySelectorAll('.profade');
        setInterval(function() {
            if(window.scrollY<500){
                // for문으로 모든문서 자동호출
                // pro1,2스위치 재조정,
                // 인터벌을 사용하여 페이지가 넘어갔을때 오동작방지
                for(idx=0;idx<profade.length;idx++){
                    profade[idx].style.opacity="0";
                    profade[idx].style.transform = 'translate(-0%,30%)';
                }
                pro1 = true;
                pro2 = false;
            }return;
        },1500)
                // 하드코딩
        if(window.scrollY>500 && pro1 == true){
            profade[0].style.opacity="1";
            profade[0].style.transform = 'translate(0,0)';
        };
        if(window.scrollY>700 && pro1 == true){
            profade[1].style.opacity="1";
            profade[1].style.transform = "translate(0,0)";
            setTimeout(()=>{
                profade[2].style.opacity="1";
                profade[2].style.transform = "translate(0,0)";},300);
            setTimeout(()=>{
                profade[3].style.opacity="1";
                profade[3].style.transform = "translate(0,0)";},700);
            setTimeout(()=>{
            profade[4].style.opacity="1";
            profade[4].style.transform = "translate(0,0)";
            pro2 = true;},1100);
            pro1 = false;
        };
        //프로필2 소개글 페이드인아웃 변경
        if(window.scrollY<1000 && pro2 == false){
            //인터벌을 사용하지않고 pro2 를 boolean값과 스위치로 사용하여 오동작방지
            let intTxt = document.querySelectorAll('.int_txt');
            document.querySelector('.int_img').style.opacity="0";
            document.querySelector('.int_tit').style.opacity="0.5";
            for(idx=0;idx<intTxt.length;idx++){
                intTxt[idx].style.opacity="0";
                intTxt[idx].style.transform = "translate(-10%,0)";
                pro2 = true;
            }
        };
        if(window.scrollY>1000 && pro2 == true){
            //pro2값이 false가 되기전까진 무조건실행
            let intTxt = document.querySelectorAll('.int_txt');
            document.querySelector('.int_img').style.opacity="1";
            document.querySelector('.int_tit').style.opacity="1";
            intTxt[0].style.opacity="1";
            intTxt[0].style.transform = "translate(0,0)";
            setTimeout(()=>{
                intTxt[1].style.opacity="1";
                intTxt[1].style.transform = "translate(0,0)";},300);
            setTimeout(()=>{
                intTxt[2].style.opacity="1";
                intTxt[2].style.transform = "translate(0,0)";},600);
            setTimeout(()=>{
                intTxt[3].style.opacity="1";
                intTxt[3].style.transform = "translate(0,0)";},900);
            setTimeout(()=>{
                intTxt[4].style.opacity="1";
                intTxt[4].style.transform = "translate(0,0)";
                pro2 = false},1200);
            console.log(pro2);
        }
        
        // 포트폴리오 인사말
        let space = document.querySelectorAll('.spa_h');
        if(window.scrollY>2000){
            // js 로 css 연계하여 동작
            space[0].classList.add('spa_active');
            setTimeout(()=>{
                space[1].classList.add('spa_active');
            },900)
        };
        console.log(window.scrollY);
    });
    // 슬라이드
    let slide = document.querySelectorAll('.slide') ;
    var slideNum = 0 ;
    function CheckSl(){
        if(slideNum==0){
            slide[0].classList.add('active');
        }else if(slideNum==1){
            slide[1].classList.add('active');
        }else if(slideNum==2){
            slide[2].classList.add('active');
        }else{alert('오류 이 메세지는 아마 아무도 못보겠죠 ㅎㅎ');slide.setAttribute(Array,'0')}
    };
    function sliprev(){
        for(idx=0;idx<slide.length;idx++){
            slide[idx].classList.remove('active')
        }
        if (slideNum>0){
            slideNum -= 1
        }else{slideNum=2}
        CheckSl()
    };
    function slinext(){
        for(idx=0;idx<slide.length;idx++){
            slide[idx].classList.remove('active')
        }
        if (slideNum<2){
            slideNum +=1
        }else{slideNum=0}
        CheckSl()
    };
    
    // 포트폴리오 이야기 열기
    function Story(number){
        // 전달받은 함수값에따라 표시할내용 변경
        let Story = document.querySelectorAll('.Story_bg');
        Story[number].style.display="flex";
    };
    // 포트폴리오 이야기 닫기
    function Stclose(self){
        // self 함수명으로 넘어온값의 부모요소를찾아내서 동작
        let target = self.closest('.Story_bg');
            target.style.display="none";
    };
    function Stclosebg(self){
        self.style.display="none";
    };
}