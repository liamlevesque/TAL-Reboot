        /******************************************
			DRAGGING
		******************************************/

			startDrag: function(e,context){
				if(context.lot.status === 'sold')return;
				talController.updateTouchStart(e);
				talObject.draggingLot = $(e.currentTarget);
			},
			doDrag: function(e,context){
				if(context.lot.status === 'sold')return;
				let relativeX = e.changedTouches[0].pageX - talObject.touchStart.x;
				let relativeY = e.changedTouches[0].pageY - talObject.touchStart.y;
				if(relativeX < 0 || Math.abs(relativeX) < Math.abs(relativeY)) {
					//IF SWIPING MORE VERTICALLY, DON'T SWIPE HORIZONTALLY, AND RESET ALL SWIPES
					talController.resetDrag(context.lot)
					return;
				}
				else if(relativeX > talObject.swipeDistance) $(e.currentTarget).addClass('s-swiped-right');
				//else if(relativeX < -talObject.swipeDistance) $(e.currentTarget).addClass('s-swiped-left');
				else if(relativeX < -20 && $(e.currentTarget).hasClass('s-swiped')) talController.resetDrag(context.lot);
				else $(talObject.draggingLot).css('transform','translateX('+ relativeX + 'px)');
			},
			cancelDrag: function(e,context){

			},
			endDrag: function(e,context){
				if(context.lot.status === 'sold')return;
				let relativeX = e.changedTouches[0].pageX - talObject.touchStart.x;
				if(relativeX > talObject.swipeDistance) $(e.currentTarget).addClass('s-swiped-right');
				if(relativeX < -20 && $(e.currentTarget).hasClass('s-swiped-right')) talController.resetDrag(context.lot);
				else $(talObject.draggingLot).css('transform','translateX(0)');
			},
			updateTouchStart: function(e){
				talObject.touchStart.x = e.changedTouches[0].pageX;
				talObject.touchStart.y = e.changedTouches[0].pageY;
			},

			resetDrag: function(lot) {
				$('.s-swiped-right,.s-swiped-left,.s-all-actions').css('transform','translateX(0)').removeClass('s-swiped-left s-swiped-right s-all-actions');
				lot.moreActionsVisible = false;
				lot.swipeQuickBidding = false;
				// $(lot).removeClass('s-swiped-right s-swiped-left');
			},

			dragQuickBid: function(e,context){
				context.lot.swipeQuickBidding = true;
			},

			cancelDragQuickBid: function(e,context){
				context.lot.swipeQuickBidding = false;
				talController.resetDrag(context.lot);
			},

			dragConfirmQuickBid: function(e,context){
				talController.placeQuickBid(context.lot);
				talController.resetDrag(context.lot);
			},

			dragMaxBid: function(e,context){
				talController.resetDrag(context.lot);
				talController.toggleMaximumBidVisible(e,context);
			},

			dragGroupBid: function(e,context){
				talController.resetDrag(context.lot);
				talController.createGroupBid(e,context);
			},

			dragWatchLot: function(e,context){
				talController.resetDrag(context.lot);
				talController.watchLot(e,context);
			},

			revealMoreActionsMobile: function(e,context){
				context.lot.moreActionsVisible = true;
			},