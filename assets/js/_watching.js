        /******************************************
			WATCH LOTS
		******************************************/	

			watchLot:function(e,context){
				talController.watchThisLot(context.lot,true);
			},

			watchFocusedLot: function(e) {
				talController.watchThisLot(talObject.focusedLot,true);
			},

			watchThisLot:function(lot,remove){
				let existing = lot.watching.indexOf(talObject.bidder);
				if(existing >= 0) { 
					if(remove){ 
						//REMOVE YOUR BIDDER NUMBER FROM THE WATCHING LIST ON THE LOT OBJECT
						lot.watching.splice(existing,1);
						
						//FIND THIS LOT IN THE LIST OF WATCHED LOTS AND REMOVE IT
						let index = talObject.watchingLots.findIndex(x => {return x.lotNumber === lot.lotNumber});
						talObject.watchingLots.splice(index,1);
					}
				}
				else{
					//ADD YOUR BIDDER # TO THE LOT'S WATCHING LIST
					lot.watching.push(talObject.bidder);
					//ADD THIS LOT TO YOUR WATCHING LIST
					talObject.watchingLots.push(lot);
				}

				//SORT THE LIST OF WATCHING BY LOT NUMBER
				talObject.watchingLots.sort((a,b) => {return a.lotNumber - b.lotNumber});

			},
