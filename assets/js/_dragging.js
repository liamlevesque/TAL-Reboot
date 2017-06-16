        /******************************************
			DRAGGING
		******************************************/

			startDrag: function(e,context){
				talController.updateTouchStart(e);
				talObject.draggingLot = $(e.currentTarget);
			},
			doDrag: function(e,context){
				let relativeX = e.changedTouches[0].pageX - talObject.touchStart.x;
				if(Math.abs(relativeX) < 5) return;
				else if(relativeX > talObject.swipeDistance) $(e.currentTarget).addClass('s-swiped-right');
				else if(relativeX < -talObject.swipeDistance) $(e.currentTarget).addClass('s-swiped-left');
				else if(relativeX < -20 && $(e.currentTarget).hasClass('s-swiped')) talController.resetDrag(talObject.draggingLot);
				else $(talObject.draggingLot).css('transform','translateX('+ relativeX + 'px)');
			},
			cancelDrag: function(e,context){

			},
			endDrag: function(e,context){
				let relativeX = e.changedTouches[0].pageX - talObject.touchStart.x;
				if(relativeX > talObject.swipeDistance) $(e.currentTarget).addClass('s-swiped-right');
				if(relativeX < -20 && $(e.currentTarget).hasClass('s-swiped-right')) talController.resetDrag(talObject.draggingLot);
				else $(talObject.draggingLot).css('transform','translateX(0)');
			},
			updateTouchStart: function(e){
				talObject.touchStart.x = e.changedTouches[0].pageX;
			},

			resetDrag: function(lot) {
				console.log('reset');
				$('.s-swiped-right,.s-swiped-left').css('transform','translateX(0)').removeClass('s-swiped-left s-swiped-right');
				// $(lot).removeClass('s-swiped-right s-swiped-left');
			},

			dragQuickBid: function(e,context){
				talController.resetDrag(talObject.draggingLot);
				talController.quickBid(e,context);
			},

			dragMaxBid: function(e,context){
				talController.resetDrag(talObject.draggingLot);
				talController.toggleMaximumBidVisible(e,context);
			},

			dragGroupBid: function(e,context){
				talController.resetDrag(talObject.draggingLot);
				talController.createGroupBid(e,context);
			},

			dragWatchLot: function(e,context){
				talController.resetDrag(talObject.draggingLot);
				talController.watchLot(e,context);
			},