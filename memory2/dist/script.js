// Memory Game
// © 2014 Nate Wiley
// License -- MIT
// best in full screen, works on phones/tablets (min height for game is 500px..) enjoy ;)
// Follow me on Codepen

(function(){
	
	var Memory = {

		init: function(cards){
			this.$game = $(".game");
			this.$modal = $(".modal");
			this.$overlay = $(".modal-overlay");
			this.$restartButton = $("button.restart");
			this.cardsArray = $.merge(cards, cards);
			this.shuffleCards(this.cardsArray);
			this.setup();
		},

		shuffleCards: function(cardsArray){
			this.$cards = $(this.shuffle(this.cardsArray));
		},

		setup: function(){
			this.html = this.buildHTML();
			this.$game.html(this.html);
			this.$memoryCards = $(".card");
			this.paused = false;
     	this.guess = null;
			this.binding();
		},

		binding: function(){
			this.$memoryCards.on("click", this.cardClicked);
			this.$restartButton.on("click", $.proxy(this.reset, this));
		},
		// kinda messy but hey
		cardClicked: function(){
			var _ = Memory;
			var $card = $(this);
			if(!_.paused && !$card.find(".inside").hasClass("matched") && !$card.find(".inside").hasClass("picked")){
				$card.find(".inside").addClass("picked");
				if(!_.guess){
					_.guess = $(this).attr("data-id");
				} else if(_.guess == $(this).attr("data-id") && !$(this).hasClass("picked")){
					$(".picked").addClass("matched");
					_.guess = null;
				} else {
					_.guess = null;
					_.paused = true;
					setTimeout(function(){
						$(".picked").removeClass("picked");
						Memory.paused = false;
					}, 600);
				}
				if($(".matched").length == $(".card").length){
					_.win();
				}
			}
		},

		win: function(){
			this.paused = true;
			setTimeout(function(){
				Memory.showModal();
				Memory.$game.fadeOut();
			}, 1000);
		},

		showModal: function(){
			this.$overlay.show();
			this.$modal.fadeIn("slow");
		},

		hideModal: function(){
			this.$overlay.hide();
			this.$modal.hide();
		},

		reset: function(){
			this.hideModal();
			this.shuffleCards(this.cardsArray);
			this.setup();
			this.$game.show("slow");
		},

		// Fisher--Yates Algorithm -- https://bost.ocks.org/mike/shuffle/
		shuffle: function(array){
			var counter = array.length, temp, index;
	   	// While there are elements in the array
	   	while (counter > 0) {
        	// Pick a random index
        	index = Math.floor(Math.random() * counter);
        	// Decrease counter by 1
        	counter--;
        	// And swap the last element with it
        	temp = array[counter];
        	array[counter] = array[index];
        	array[index] = temp;
	    	}
	    	return array;
		},

		buildHTML: function(){
			var frag = '';
			this.$cards.each(function(k, v){
				frag += '<div class="card" data-id="'+ v.id +'"><div class="inside">\
				<div class="front"><img src="'+ v.img +'"\
				alt="'+ v.name +'" /></div>\
				<div class="back"><img src="https://camo.githubusercontent.com/930898e6415e4f4b102fd9637c1bf6531121070fa5215b7ca6c2f6f849d37325/687474703a2f2f656e676c69736870726f66732e7062776f726b732e636f6d2f662f6d656d6f72792d67616d652e706e67"\
				alt="Codepen" /></div></div>\
				</div>';
			});
			return frag;
		}
	};

	var cards = [
		{
			name: "burgerking",
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnI-Ye69EBw3vnWR7ongoVNEWPqa12dw4_AkVR-mIbKg&s",
			id: 1,
		},
		{
			name: "arbys",
			img: "https://1000logos.net/wp-content/uploads/2022/06/Logo-Arbys.png",
			id: 2
		},
		{
			name: "mcdonalds",
			img: "https://www.niagarafallstourism.com/site/assets/files/2300/mcdonalds.jpg",
			id: 3
		},
		{
			name: "chipotle",
			img: "https://www.zilliondesigns.com/blog/wp-content/uploads/Fast-Food-Logo-1.jpg",
			id: 4
		}, 
		{
			name: "pizzahut",
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtTg6YHBvy5LqNkXAKckaOhBVmXT7LaQtrFMYmAx-qHA&s",
			id: 5
		},
		{
			name: "chicfila",
			img: "https://images.saymedia-content.com/.image/t_share/MTc2MjcyOTIxMTM4ODk4MDkz/fast-food-restaurant-logos-and-their-hidden-meanings.png",
			id: 6
		},
		{
			name: "kfc",
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx5S1DvG4ySN0Rm32zs143xcttGgDK4tSsWtgIEa1k-A&s",
			id: 7
		},
		{
			name: "redrobbin",
			img: "https://brandslogos.com/wp-content/uploads/images/red-robin-logo-vector.svg",
			id: 8
		},
		{
			name: "dennys",
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5l7SbduDbJQ624CfFm3a5hx0Y-3fpmG5_Lu2dtjX7i5JlK1r1QZHVBvWLHntNHHhTF6c&usqp=CAU",
			id: 9
		},
		{
			name: "subway",
			img: "https://images.saymedia-content.com/.image/t_share/MTc2MjcyOTIxMTM4OTYzNjI5/fast-food-restaurant-logos-and-their-hidden-meanings.png",
			id: 10
		},
		{
			name: "littleceasers",
			img: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcL2NiOGMxMTNkLTM4NzItNGIwMi05MTk2LTUxYTMxYzgzZjBmNC0xMjEwLTY4MC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH19fQ==",
			id: 11
		},
		{
			name: "starbucks",
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAUgIvhbtqir75zs30C3F9JFoZV4cUEWShSzBTefQVzg&s",
			id: 12
		},
	];
    
	Memory.init(cards);


})();