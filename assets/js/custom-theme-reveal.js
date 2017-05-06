$(function() {


var changeColor;

Reveal.addEventListener('intro', function(event) {
  changeColor = 'white';
}, false);

Reveal.addEventListener('seccion', function(event) {
  changeColor = 'green';
}, false);


Reveal.addEventListener('vamos', function(event) {
  changeColor = 'red';
}, false);


Reveal.addEventListener('slidechanged', function(event) {

	var tl = new TimelineMax();
	var customContent;

	for (var i = 0; i < event.currentSlide.children.length ; i++){
		var tag = event.currentSlide.children[i].localName;

		if (tag == "h1"){
			var customContent = $(event.currentSlide.children[i]);

			contentSplit = new SplitText(customContent, {
				type: "words"
			});

			TweenLite.set(customContent, {
				perspective: 700
			});
			tl.staggerFrom(contentSplit.words, .75, {
				autoAlpha: 0,
				y: 500,
				transformOrigin: "50% top 1000",
				ease: Power1.easeOutIn
			}, 0.25);
		}	else if (tag == "h2" || tag == "h3"){
			var customContent = $(event.currentSlide.children[i]);

			contentSplit = new SplitText(customContent, {
				type: "words"
			});
			tl.staggerFrom(contentSplit.words, .5, {
				autoAlpha: 0,
				y: 80,
				ease: Power1.easeOutIn
			}, 0.05);

		} else if (tag == "ul" || tag == "dl"){

      for (var p = 0; p < event.currentSlide.children[i].children.length ; p++){

				var customContent = $(event.currentSlide.children[i].children[p]);

				tl.staggerFrom(customContent, 0.5, {
					autoAlpha: 0,
					x: 200,
					ease: Power2.easeOutIn
				}, 0.05);

			}
		} else if (tag == "p"){
      var customContent = $(event.currentSlide.children[i]);

      contentSplit = new SplitText(customContent, {
        type: "lines"
      });

      tl.staggerFrom(contentSplit.lines, .75, {
        autoAlpha: 0,
        x: -150,
        ease: Power1.easeOutIn
      }, 0.25);
    }
	}
}, false);



});