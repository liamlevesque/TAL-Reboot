        /******************************************
			QUICK BIDS
		******************************************/

			quickBid: function(e,context){
				talObject.focusedLot = context.lot;
				talObject.quickBidConfirmVisible = true;
			},
			
			focusedQuickBid: function(e,context) {
				talObject.quickBidConfirmVisible = true;
			},
			
			cancelQuickBid: function() {
				talObject.quickBidConfirmVisible = false;	
			},

			confirmQuickBid: function(e,context) {
				talController.placeQuickBid(talObject.focusedLot);
			},

			placeQuickBid: function(lot){
				//IF THERE'S A MAX BID ON THIS LOT
				if(lot.maxBid.bid > 0){
					//IF THE QUICK BID WOULD BE MORE THAN THE MAX BID
					if(talController.increment(lot.bids[0].bid) > lot.maxBid.bid){
						talController.incrementBid(lot,'quick',talObject.bidder);
						talController.clearMaxBid(lot);
					}
					//YOU'VE BEEN OUTBID
					else{
						talController.outBid(lot,null,false);
					}
				}
				else talController.incrementBid(lot,'quick',talObject.bidder);
				
				//ADD TO WATCH LIST AND BIDDING LIST (WHEN APPROPRIATE)
				talController.watchAndPush(lot);

				talObject.quickBidConfirmVisible = false;
			},

			watchAndPush: function(lot){
				let isBidding = lot.bids.filter((bid) => { 
					if(typeof bid != 'undefined' && bid.bidder === talObject.bidder)return 1; 
				})

				if(isBidding.length === 1){	
					talController.watchThisLot(lot,false);
					talObject.biddingLots.push(lot);
				}
			},

			incrementBid: function(lot,type,bidder){
				let currentBid = (lot.bids.length === 0 || typeof lot.bids[0] == 'undefined')? 0 : lot.bids[0].bid;

				lot.bids.unshift(talController.buildBid(bidder,talController.increment(currentBid),type));
			},

			pricedBid: function(lot,type,bidder,amt){
				lot.bids.unshift(talController.buildBid(bidder,amt,type));
				console.log(lot.bids);
			},

			buildBid: function(bidder,amt,type) {
				let bid = {
					bidder: bidder,
					bid: amt,
					time: new Date().toJSON(),
					type: type,
				};
				
				return bid;
			},

			increment: function(amt){
				for(let i = 0; i < incrementTable.length; i++){
					if(amt < incrementTable[i].upto) return incrementTable[i].increment + amt;
				}
			},

			outBid: function(lot,bid,max){
				
				if(max) talController.pricedBid(lot,'max',talObject.bidder,bid); //PLACE A BID AT YOUR MAX BEFORE PLACING AN INCREMENT BID BY THE OTHER BIDDER
				else talController.incrementBid(lot,'quick',talObject.bidder);
				//PLACE INCREMENT BID FOR OTHER BIDDER
				talController.incrementBid(lot,'max',lot.maxBid.bidder);
				//spawnNotification('You were Outbid','Another Bidder has outbid you.');
			},