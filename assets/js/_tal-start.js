const talController = {
		stopProp: function(e){
			e.stopPropagation();
		},

		showNextLesson: function(e){
			talObject.activeLesson = ($(e.currentTarget).data('index') >= talObject.lessons.length)? 0 : talObject.activeLesson + 1;
			talObject.isLearningLesson = true;
			window.clearTimeout(loadingTimer);
		},

		clearLessonsArea: function(e){
			talObject.doneLoading = true;
		},

		loadTab: function(e){
			
			let target = $(e.currentTarget).data('tab');
			talController.goToTab(target);

			pushHistory(target, 'page');//PUSH STATE
		},

		goToTab: function(target){
			scrollArea.destroy();
			talObject.activeTab = target;
			createOptiscroll();
			$('.js--tal').removeClass('s-header-hidden');
		},

		toggleLotDetails: function(e,context){
			talObject.lotDetailsVisible = !talObject.lotDetailsVisible;
			if(talObject.lotDetailsVisible){
				talController.showLot(context.lot);
				pushHistory(context.lot.lotNumber, 'lot');//PUSH STATE
			}
			else{
				pushHistory(talObject.activeTab, 'tab');
			}
		},

		showLot: function(lot) {
			talObject.focusedLot = lot;

			var mySwiper = new Swiper ('.swiper-container', {
				direction: 'horizontal',
				loop: true,
				pagination: '.swiper-pagination',
  				paginationClickable: 'true',
				speed: 300,
				effect: "coverflow",
			})
		},

		sellLot: function(lotIndex){
			let lot = talObject.lots[lotIndex];
			lot.status = 'sold';
			
			//ADD TO PURCHASES IF YOU WERE THE TOP BIDDER
			if(typeof lot.bids[0] != 'undefined' && lot.bids[0].bidder === talObject.bidder){
				spawnNotification('You Won Lot '+ lot.lotNumber + ' for ' + lot.bids[0].bid ,lot.description,lot.photos[0].src);
				talObject.purchasedLots.push(lot);
				talObject.userprofile.spent += lot.bids[0].bid;
			}
			//IF YOU HAD BID BUT WERE OUTBID
			else if(talController.outbid(lot.bids)){
				spawnNotification('You did not win lot '+ lot.lotNumber ,lot.description,lot.photos[0].src);
			}
		},

		outbid: function(bids){
			if(typeof bids === 'undefined') return false;
			for(let i = 1;i<bids.length; i++){
				if(bids[i].bidder === talObject.bidder) return true;
			}
			return false;
		},