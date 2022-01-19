$(document).ready(function(){

    $('.humbarger').click(function(event){
    $('.menu-btn').slideToggle(500);
    event.preventDefault();
    
    $('.menu-list li a').click(function(event) {
        if ($(window).width() < 768) {
          $('.menu-list').slideUp(500);
          event.preventDefault(); 
        }
      });
});

});

var story = [
    '1. Gdy pijesz wodę, przytrzymaj przycisk przez 5 sekund.',
    '2. Poczekaj aż zaświecą sie 2 niebieskie diody.',
    '3. Gotowe! Teraz możesz umyć swirly za pomocą przycisku.',
   
];
var nextBtn = document.getElementById("dalej");
function changeText() {
    var textBox = document.getElementById("txt");
    var chapter = Number(textBox.dataset.chapter);
    if (chapter < story.length - 1) {
        textBox.dataset.chapter = chapter + 1;
        textBox.innerHTML = story[chapter + 1];

        if ((story.length - chapter) <= 2 ) {
            nextBtn.style.display = 'none';
        }
    }
}

nextBtn.addEventListener("click", changeText);

