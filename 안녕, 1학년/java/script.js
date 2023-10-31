function startgame() {
  alert("오늘은 겨울 방학식날,");
  alert("정들었던 1학년 친구들, 우리 반, 선생님...");
  alert("오늘로 마지막이네.");
  alert("지금까지 함께 했던 1학년 층을 둘러보고 싶어.");
  alert("작별 인사도 할 겸.");
  document.getElementById('title-screen').style.display = 'none';
  document.getElementById('5floor').style.display = 'block';
}

function goToRoom(roomId) {
  // 숨길 모든 방 요소
  const rooms = document.querySelectorAll('.room');
  rooms.forEach(room => {
    room.style.display = 'none';
  });

  // 해당 roomId에 해당하는 방 요소를 표시
  document.getElementById(roomId).style.display = 'block';

  // room 변수를 업데이트
  room = roomId;
}

function lettuce() {
  alert("상추 배양기는 이제 전원이 꺼져있다...");
  alert("하지만 안에는 아직도 온기가 남아있어.");
  alert("모두가 마음 담아 기르던 상추의 흔적이야.");
  document.getElementById('5floor').style.display = 'none';
  document.getElementById('1-5').style.display = 'block';
}


function blackboard() {
  alert("'010-XXXX-XXXX 연락해!'");
  alert("'현동쌤 보고 싶을거에요ㅠㅠ'");
  alert("'@pepper_min.t'");
  alert("칠판 가득하게 이별의 메세지와 연락처들이 빼곡하게 적혀있다.");
  alert("어쩐지 졸업하는 것만 같네...");
  document.getElementById('5floor').style.display = 'none';
  document.getElementById('1-5').style.display = 'block';
}

function pickupbasket() {
  alert("한 해동안 발표를 책임 져 준 순서 뽑기통이야.");
  alert("손으로 하나하나 열심히 만든 정성이 묻어있어.");
  alert("하지만 어쩐지 내 번호는 뽑히지 않았으면 좋겠네...");
  document.getElementById('5floor').style.display = 'none';
  document.getElementById('1-6').style.display = 'block';
}

function teacherdesk() {
  alert("교탁 뒷편을 들여다보니...");
  alert("'오송현 바보'");
  alert("'지윤서 바보'");
  alert("'고서현 바보'");
  alert("...");
  alert("친구들의 애정이 가득 담긴 낙서들이다.");
  document.getElementById('5floor').style.display = 'none';
  document.getElementById('1-6').style.display = 'block';
}

function charger() {
  alert("항상 빼곡하게 태블릿이 꽂혀 있었는데...");
  alert("이제는 텅 비었네.");
  alert("하지만 여전히 전원은 켜져 있다.");
  alert("아마 단순히 까먹은 거겠지?");
  document.getElementById('5floor').style.display = 'none';
  document.getElementById('1-7').style.display = 'block';
}

function papers() {
  alert("한 해 동안의 안내장들이 수북하게 쌓여 있다.");
  alert("일 년 동안의 일정들을 한 번에 보는 기분이야.");
  alert("아마 곧 이면지로 활용되겠지?");
  document.getElementById('5floor').style.display = 'none';
  document.getElementById('1-7').style.display = 'block';
}

function blind() {
  alert("쨍한 햇빛을 가려주던 블라인드다.");
  alert("사실 한 60% 정도 가려주는 것 같기는 하지만...");
  alert("왜 암막 커튼으로 만들지 않은 걸까?");
  alert("창가에 앉으면 항상 눈이 부시다...");
  document.getElementById('5floor').style.display = 'none';
  document.getElementById('1-8').style.display = 'block';
}

function tv() {
  alert("수업의 대부분을 책임져 주던 TV다.");
  alert("구조 상 가까이 앉으면 목이 아프다...");
  alert("지금은 '신호 없음'이 떠있다.");
  alert("곧 있으면 방학식 방송이 나오겠지?");
  document.getElementById('5floor').style.display = 'none';
  document.getElementById('1-8').style.display = 'block';
}

function bottle() {
  alert("이 물병은 언제부터 여기 있었을까...?");
  alert("누구의 것일까...?");
  alert("이걸 치우는 건 아마...");
  alert("후배들의 몫이겠지...");
  document.getElementById('5floor').style.display = 'none';
  document.getElementById('1-9').style.display = 'block';
}

function bim() {
  alert("판서가 조금 더 편해지는 빔 프로젝터다.");
  alert("오래 보고 있다보면 시력이 나빠지는 기분이 들지만...");
  alert("목 아픈 TV를 50분 내내 보는 것보다야 낫지.");
  document.getElementById('5floor').style.display = 'none';
  document.getElementById('1-9').style.display = 'block';
}

function bathroom5() {
  alert("여자 화장실이다.");
  alert("남자 화장실은 없다.");
  alert("당연하지, 여고니까.");
}

function washroom5() {
  alert("세면실이다.");
  alert("급식을 먹고 항상 양치를 했지.");
  alert("...");
  alert("사람이 가끔 까먹을 때가 있을 수도 있지.");
}

function musicroom() {
  alert("음악실은 잠겨 있다.");
  alert("하긴, 방학식 날 열어둘 이유는 없지");
  alert("...");
  alert("열어보자.");
        let answer = prompt("우리 학교 교가에 나오는 산의 이름은?");
        if (answer.toLowerCase() === "구룡산") {
          alert("자물쇠가 열렸다.");
             document.getElementById('5floor').style.display = 'none';
    document.getElementById('inmusicroom').style.display = 'block';
  } else {
    alert("...");
    alert("틀린 모양이다.");
    alert("들어가지 말자.");
  }
}

function ukulele() {
  alert("우쿨렐레다.");
  alert("선생님께서 항상 친절하게 가르쳐주셨지.");
}

function piano() {
  alert("피아노다.");
  alert("선생님께서는 항상 즐겁게 반주를 쳐주셨지.");
  alert("...");
  alert("반주가 아까울 때가 가끔 있었어.");
  alert("선생님, 죄송합니다...");
}

function scienceroom() {
  alert("과학실은 잠겨 있다.");
  alert("하긴, 방학식 날 열어둘 이유는 없지");
  alert("...");
  alert("열어보자.");
        let answer = prompt("수소의 원자 번호는?");
        if (answer.toLowerCase() === "1") {
          alert("자물쇠가 열렸다.");
             document.getElementById('5floor').style.display = 'none';
    document.getElementById('inscienceroom').style.display = 'block';
  } else {
    alert("...");
    alert("틀린 모양이다.");
    alert("들어가지 말자.");
  }
}

function earthmodel() {
  alert("지구본이다.");
  alert("대한민국은 여기쯤 있겠지.");
  alert("...");
  alert("터가 좀 안 좋은 것 같아...");
}

function gown() {
  alert("실험용 가운이다.");
  alert("...");
  alert("선생님만 입지 마시고 저희도 주세요!");
}

function desk() {
  alert("세월의 흔적이 묻어있는 책상이다.");
  alert("선배들로부터 물려받은 낙서와 칼집...");
  alert("우리도 조금 더 보태서 후배들에게 물려주기로 한다.");
}

function boardmarker() {
  alert("여러가지 색의 보드마카다.");
  alert("분명 어제 새걸로 갈았는데...");
  alert("항상 안 나오는 게 하나씩은 있다.");
}

function highdesk() {
  alert("스탠딩 책상이다.");
  alert("잠이 쏟아지는 야자 시간에 주로 애용된다.");
  alert("...");
  alert("일어나서 안 잔다고는 하지 않았다.");
}

function magnet() {
  alert("자석이다.");
  alert("안내사항을 게시하는 데에 주로 사용된다.");
  alert("그치만 언제나 부족하다.");
}

function rollingpaper() {
  alert("커다란 색지가 교탁에 놓여있다.");
  alert("롤링페이퍼용 종이 같다.");
  alert("하지만 아직 가운데 이름 조차 쓰여 있지 않다.");
  alert("누구를 위한 롤링페이퍼가 될까?");
}

function blanket() {
  alert("교실 한구석에서 굴러다니는 담요다.");
  alert("어느 반에 가나 하나 쯤은 있는 것 같아.");
  alert("...");
  alert("주인은 저 담요를 찾고 있기는 할까?");
}

function remote() {
  alert("교탁 위에 리모컨이 놓여 있다.");
  alert("항상 필요 할 때는 안 보이고 안 찾을 때만 보인다니까!");
}

function ground() {
  alert("어째서 매일 청소를 하는데도 이렇게나 머리카락이 많은걸까.");
  alert("...");
  alert("누군가 털갈이를 하고 있는 게 분명해.");
}

function artroom() {
  alert("미술실은 잠겨 있다.");
  alert("하긴, 방학식 날 열어둘 이유는 없지");
  alert("...");
  alert("열어보자.");
        let answer = prompt("르네상스 시대 작품 '천지창조'의 작가는?");
        if (answer.toLowerCase() === "미켈란젤로") {
          alert("자물쇠가 열렸다.");
             document.getElementById('4floor').style.display = 'none';
    document.getElementById('inartroom').style.display = 'block';
  } else {
    alert("...");
    alert("틀린 모양이다.");
    alert("들어가지 말자.");
  }
}

function basket() {
  alert("노란 물통이 줄을 지어 서있다.");
  alert("옆으로는 얼룩덜룩한 걸레들이 쌓여 있다.");
  alert("수채화는 미술의 기본이지!");
}

function statue() {
  alert("석고 조각상 두 구다.");
  alert("...");
  alert("어쩐지 이상한 괴담이 있을 것만 같다.");
  alert("어두울 때는 보고 싶지 않아...");
}

function homeroom() {
  alert("기술가정실은 잠겨 있다.");
  alert("하긴, 방학식 날 열어둘 이유는 없지");
  alert("...");
  alert("열어보자.");
        let answer = prompt("주제 또는 중심 아이디어를 중심에 두고 이와 연관된 하위 주제나 개념을 가지로 뻗어나가듯 나타내는 아이디어 발상법은?");
        if (answer.toLowerCase() === "마인드맵") {
          alert("자물쇠가 열렸다.");
             document.getElementById('4floor').style.display = 'none';
    document.getElementById('inhomeroom').style.display = 'block';
  } else {
    alert("...");
    alert("틀린 모양이다.");
    alert("들어가지 말자.");
  }
}

function clock() {
  alert("벽시계다.");
  alert("자세히 보니 시간이 가지 않아.");
  alert("...");
  alert("언젠가는 이 시계도 시간이 흘렀던 적이 있겠지?");
}

function gass() {
  alert("가스레인지다.");
  alert("안전상의 이유로 불은 켜지지 않는다.");
  alert("옛날에는 요리 실습도 했던 모양이다.");
  alert("아마 코로나 이후로 없어졌겠지.");
}

function teacherroom() {
  alert("1년동안 문턱이 닳도록 드나들었던 1학년 교무실이다.");
  alert("선생님들은 모두 방학식 준비로 바쁘신 모양이다.");
  alert("앞으로는 올 일이 많지 않겠지...?");
  alert("그렇게 생각하니 조금 슬퍼진다.");
}


function bathroom4() {
  alert("여자 화장실이다.");
  alert("옆은 남자 화장실이다.");
  alert("당연하지, 선생님도 사람이니까.");
}

function washroom4() {
  alert("세면실이다.");
  alert("급식을 먹고 항상 양치를 했지.");
  alert("...");
  alert("사람이 가끔 까먹을 때가 있을 수도 있지.");
}

function vacation() {
  alert("슬슬 방학식이 시작 될 시간이야.");
  alert("어서 반으로 돌아가자.");
  alert("...");
  alert("교장 선생님의 짧은 연설 몇마디를 끝으로, 방학식은 마무리 됐다.");
  alert("'다음에 학교에 올 때는 2학년이겠네.'");
  alert("그렇게 생각하며 아이들이 어수선히 빠져나가고 있는 교실을 돌아 보았다.");
  alert("'좋은 일만 있었던 건 아니지만'");
  alert("'나중에 돌아 봤을 때는 좋은 기억만 날 것 같아.'");
  alert("'안녕, 1학년.'");
  document.getElementById('4floor').style.display = 'none';
  document.getElementById('end').style.display = 'block';
}