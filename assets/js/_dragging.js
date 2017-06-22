        /******************************************
			DRAGGING
		******************************************/

			startDrag: function(e,context){
				talController.updateTouchStart(e);
				talObject.draggingLot = $(e.currentTarget);
			},
			doDrag: function(e,context){
				let relativeX = e.changedTouches[0].pageX - talObject.touchStart.x;
				let relativeY = e.changedTouches[0].pageY - talObject.touchStart.y;
				if(relativeX < 0 || Math.abs(relativeX) < Math.abs(relativeY)) {
					//IF SWIPING MORE VERTICALLY, DON'T SWIPE HORIZONTALLY, AND RESET ALL SWIPES
					talController.resetDrag()
					return;
				}
				else if(relativeX > talObject.swipeDistance) $(e.currentTarget).addClass('s-swiped-right');
				//else if(relativeX < -talObject.swipeDistance) $(e.currentTarget).addClass('s-swiped-left');
				else if(relativeX < -20 && $(e.currentTarget).hasClass('s-swiped')) talController.resetDrag();
				else $(talObject.draggingLot).css('transform','translateX('+ relativeX + 'px)');
			},
			cancelDrag: function(e,context){

			},
			endDrag: function(e,context){
				let relativeX = e.changedTouches[0].pageX - talObject.touchStart.x;
				if(relativeX > talObject.swipeDistance) $(e.currentTarget).addClass('s-swiped-right');
				if(relativeX < -20 && $(e.currentTarget).hasClass('s-swiped-right')) talController.resetDrag();
				else $(talObject.draggingLot).css('transform','translateX(0)');
			},
			updateTouchStart: function(e){
				talObject.touchStart.x = e.changedTouches[0].pageX;
				talObject.touchStart.y = e.changedTouches[0].pageY;
			},

			resetDrag: function() {
				$('.s-swiped-right,.s-swiped-left').css('transform','translateX(0)').removeClass('s-swiped-left s-swiped-right');
				// $(lot).removeClass('s-swiped-right s-swiped-left');
			},

			dragQuickBid: function(e,context){
				talController.resetDrag();
				talController.quickBid(e,context);
			},

			dragMaxBid: function(e,context){
				talController.resetDrag();
				talController.toggleMaximumBidVisible(e,context);
			},

			dragGroupBid: function(e,context){
				talController.resetDrag();
				talController.createGroupBid(e,context);
			},

			dragWatchLot: function(e,context){
				talController.resetDrag();
				talController.watchLot(e,context);
			},