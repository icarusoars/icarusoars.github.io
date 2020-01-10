//function for displaying the right divs and figures
//when clicking different tabs and scrolling through posts
var Tabs = (function() {
  var s;

  return {
    settings: {
      //get header ul items
      tabs: document.getElementsByClassName('tabs__item'),
      //get divs displaying content of header ul items
      tab: document.getElementsByClassName('tab'),
      //get all left-half screen figures
      img: document.getElementsByClassName('preview__img'),
      //get all the post divs
      post: document.getElementsByClassName('preview'),
      aboutme: document.getElementsByClassName('aboutme')
    },

    init: function() {
      s = this.settings;
      this.display();
      this.click();
    },

    display: function() {
      if (s.tab.length) {
        [].forEach.call(s.tab, function(tab, idx) {
          if (idx > 0) tab.style.display = 'none';          
        });
        s.tab[0].classList.add('active');
        s.tabs[0].classList.add('active');

        [].forEach.call(s.img, function(img, idx) {
          img.style.display = 'none';
        });

        //display the first image (formal pic)
        s.img[s.img.length-2].style.display = 'block';
        // s.img[0].style.display = 'block';

        //switch to correct image when posts tab is scrolled
        if (s.post.length) {
          var currentIdx = 0,
              prevIdx = currentIdx;

          [].forEach.call(s.post, function(preview, idx) {
            preview.addEventListener('mouseenter', function() {
              prevIdx = currentIdx;
              currentIdx = idx;
              //clear all other images being displayed
              [].forEach.call(s.img, function(img, idx) {
                img.style.display = 'none';
              });
              s.img[currentIdx].style.display = 'block';
            });
          });
        }

        //switch to correct image when aboutme tab is scrolled
        if (s.aboutme.length) {
          var currentIdx = 0,
              prevIdx = currentIdx;

          [].forEach.call(s.aboutme, function(aboutme, idx) {
            aboutme.addEventListener('mouseenter', function() {
              prevIdx = currentIdx;
              currentIdx = idx;
              //clear all other images being displayed
              [].forEach.call(s.img, function(img, idx) {
                img.style.display = 'none';
              });
              s.img[currentIdx + s.post.length].style.display = 'block';
            });
          });
        }

      }
    },

    click: function() {
      if (s.tabs.length) {
        var currentIdx = 0,
            prevIdx = currentIdx;

        [].forEach.call(s.tabs, function(tab, idx) {
          tab.addEventListener('click', function() {
            prevIdx = currentIdx;
            currentIdx = idx;

            //display and change class properties of
            //tab uls and tabs when clicked
            if (prevIdx !== currentIdx) {
              s.tab[prevIdx].style.display = 'none';
              s.tab[prevIdx].classList.remove('active');
              s.tabs[prevIdx].classList.remove('active');
              s.tab[currentIdx].style.display = 'block';
              s.tab[currentIdx].classList.add('active');
              s.tabs[currentIdx].classList.add('active');
            }

            //display image for about_me tab
            if(s.tabs[0].classList.contains('active')){
              [].forEach.call(s.img, function(img, idx) {
                img.style.display = 'none';
              });
              s.img[s.img.length-2].style.display = 'block';
            }
            //display image for projects tab
            if(s.tabs[1].classList.contains('active')){
              [].forEach.call(s.img, function(img, idx) {
                img.style.display = 'none';
              });
              s.img[s.img.length-1].style.display = 'block';
            }
            //display image for categories tab
            if(s.tabs[3].classList.contains('active')){
              [].forEach.call(s.img, function(img, idx) {
                img.style.display = 'none';
              });
              s.img[0].style.display = 'block';
            }
            //display image for posts tab
            if(s.tabs[2].classList.contains('active')){
              [].forEach.call(s.img, function(img, idx) {
                img.style.display = 'none';
              });
              s.img[0].style.display = 'block';
            }
          });
        });
      }
    }

  }
})();



var wow = new WOW({
  animateClass: 'fade-in'
});

var rellax = new Rellax('.rellax');

document.addEventListener('DOMContentLoaded', function() {
  Tabs.init();
  Preview.init();
  wow.init();
});


// handling collapsible boxes 
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("coll_active");
    var content = this.nextElementSibling;
    content.classList.toggle("coll_content_active");
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      console.log("REACHED");
    }
  });
}