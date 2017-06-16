const talController = {
		stopProp: function(e){
			e.stopPropagation();
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
				talObject.purchasedLots.push(lot);
				talObject.userprofile.spent += lot.bids[0].bid;
			}
		},