function initMap() {
const loc={ lat: -35.093, lng: 150.644 }

  map = new google.maps.Map(document.querySelector(".map"), {
    center: loc,
    zoom: 8
  });
  const marker=new google.maps.Marker({
      position:loc, map:map
  })
}
$('#navbar a, .btn').on('click', function(event){
  if(this.bash !==''){
    event.preventDefault();
    const hash=this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top-100
    },800);
  }
});

window.addEventListener('scroll',function(){
  if(window.scrollY>150){
    document.querySelector('#navbar').style.opacity=0.9
  }else{
    document.querySelector('#navbar').style.opacity=1
  }
});