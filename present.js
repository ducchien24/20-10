
// Cần hỗ trợ hãy liên hệ: 
// Mr-Nam http://facebook.com/nam.nodemy
// Các bạn muốn học lập trình thì tham gia Nhóm zalo tự học lập trình nhé: https://zalo.me/g/yhdkef092

var to = nameGirl;
var gift_image_url = giftImage || giftImageBase64;

var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");

function init() {
  var graphElem = document.querySelector('.present-box > .side.top .to');
  graphElem.setAttribute('data-before', eventName);
  document.querySelector('#card .title-card').innerHTML = `💘${titleCard}💘`;
  document.querySelector('#card .content-card').innerHTML = `${contentCard}`;
  document.querySelector('#card .honey').setAttribute('src', `${giftImage}`);


  document.querySelector('#rose .title-rose').innerHTML = `💘${titleCard}💘`;
  document.querySelector('#letters .title-letters').innerHTML = `💘${titleCard}💘`;
  var _giftLink, 
      _giftImg;
  var castle=document.querySelector('#castle')
      var valentines = document.querySelector('.valentines');
      var card = document.querySelector('.card');
  
      valentines.addEventListener('mouseenter', function () {
          card.style.transition = 'top 0.6s'; // thời gian tương đương với 'slow'
          card.style.top = '-90px';
      });
  
      valentines.addEventListener('mouseleave', function () {
          card.style.transition = 'top 0.6s'; // thời gian tương đương với 'slow'
          card.style.top = '0';
      });
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
  castle.addEventListener("click", function(e){
    document.getElementById('card').classList.add('card-show')
    document.getElementById('letters').classList.remove('letters-show');
  },false)
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    // document.getElementById('card').classList.add('card-show');
    document.getElementById('rose').classList.add('rose-show');
    document.getElementById('letters').classList.add('letters-show');
    
  }, false);
  
  
  
  nametag.innerText = to;
}

init();

