        /******************************************
			MAX BIDS
		******************************************/

			toggleMaximumBidVisible: function(e,context){
				talObject.maximumBidVisible = !talObject.maximumBidVisible;
				if(typeof context.lot != 'undefined' && talObject.maximumBidVisible) talObject.focusedLot = context.lot;
				$('.js--maxbid-focus').focus();
			},

			setMaximumBid: function(){
				let lot = talObject.focusedLot;
				let bid = parseInt(talObject.tempMaxBid);
				
				if(bid > lot.maxBid.bid) {
					//IF THERE IS CURRENTLY A MAX BID, PLACE A BID BY THE OTHER BIDDER AT THEIR MAX BEFORE PLACING YOUR OWN
					if(lot.maxBid.bid > 0) talController.pricedBid(lot,lot.maxBid.bidder,'max',lot.maxBid.bid);
					
					lot.maxBid.bidder = talObject.bidder;
					lot.maxBid.bid = bid;
					if(typeof lot.bids[0] === 'undefined' || lot.bids[0].bidder != talObject.bidder) talController.incrementBid(lot,'max',talObject.bidder);

					//ADD TO WATCH LIST AND BIDDING LIST (WHEN APPROPIRATE)
					talController.watchAndPush(lot);
				}
				else if(bid === lot.maxBid.bid){//IT'S A TIE!
					//QUICKLY (FOR THE PURPOSE OF THE PROTOTYE) THROW IN A BID AT THE NEXT INCREMENT (NOT SAFE,BUT SHOULD WORK)
					talController.incrementBid(lot,'max',talObject.bidder);
					//AND THEN PUT THE ORIGINAL BIDDER ON AT THEIR MAX
					talController.pricedBid(lot,lot.maxBid.bidder,'max',lot.maxBid.bid);
					spawnNotification('You were Outbid','Another Bidder had already placed a maximum bid at the same price. The first bidder in wins.');
				}
				else{//YOU WERE OUTBID
					talController.outBid(lot,bid,true);
				}

				talObject.maximumBidVisible = false;
				talObject.tempMaxBid = null;
			},

			clearMaxBid: function(lot){
				lot.maxBid.bid = 0;
				lot.maxBid.bidder = null;
			},