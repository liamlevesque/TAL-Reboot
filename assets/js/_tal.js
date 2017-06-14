$(function(){

	for(let i = 0; i < talObject.lots.length; i++){
		talObject.lots[i].closes = moment().add((i - talObject.preSoldOffset) * talObject.closeInterval,'seconds');
	};
	talObject.startTime =  new Date().getTime();
	setTimeout(updatetime, 1000);

}); 

function updatetime(){
	talObject.crudeInterval += 1000;

	let time = Math.floor((new Date().getTime() - talObject.startTime)/1000);
	let diff = (new Date().getTime() - talObject.startTime) - talObject.crudeInterval;
	
	talObject.time = moment();
	talObject.intervalCount = time;
	if(talObject.intervalCount % talObject.closeInterval === 0){
		let nextLot = (talObject.intervalCount/talObject.closeInterval) + talObject.preSoldOffset;
		talController.sellLot(nextLot);
		talObject.auction.closingNext = nextLot; 
	}
	setTimeout(updatetime, (1000-diff)); 
}

const talObject = {
		closeInterval: 30,
		startTime: null,
		crudeInterval: 0,
		intervalCount: 0,
		preSoldOffset: 20,
		time: moment(),
		auction: {
			startLot: 5000,
			endLot: 5145,
			totalLots: 146,
			closingNext: 21,
		},
		lots: lotlist,
		watchingLots: [],
		biddingLots: [],
		purchasedLots: [],
		groupBids:[],
		maxBids:[],
		bidder: 'v5001',
		userprofile: {
			name: 'Craig Froude',
			credit: 10000,
			spent: 0,
			bids: 0,
			acceptsNotifications: false,
			emailAddress: null,
			language: 'English',
		},
		lotDetailsVisible: false,
		maximumBidVisible: false,
		tempMaxBid: null,
		focusedLot: null,

		activeTab: 'auction',

		isGroupChoosing: false,
		tempGroup: {
			uid: null,
			lots: [],
			quantity: 0,
			maxbid: null,
			step: 1,
		},
		groupViewModalVisible: false,

		mobileSearchVisible: false,
		pastSearches: ['Cat 350','40 foot container','Gen Set'],
		categories: categories,
		categoriesVisible: false,
		activeCategory: null,
		categoryLots: [],
		searchLots: [],
		filteredResults: {},
		draggingLot: null,
	};



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

		/******************************************
			SEARCH
		******************************************/	
			toggleSearchVisible: function(e){
				talObject.mobileSearchVisible = !talObject.mobileSearchVisible;
				talObject.categoriesVisible = false;
				pushHistory('search','modal');

				$('.js--search-input').focus();
			},

			updateSearch: function(e) {
				if(talObject.filteredResults.input.length === 0) talController.clearSearch();

				let value = $(e.currentTarget).val();
				if(value.length === 0){	//IF NO SEARCH STRING ENTERED
					talObject.filteredResults.searching = false;
					return;
				} 
				else talObject.filteredResults.searching = true;

				// if(!isNaN(parseInt(value[0])) && (parseInt(value) >= talObject.lots[0].lotNumber && parseInt(value) <= talObject.lots[talObject.lots.length - 1].lotNumber)) {  //IF THIS IS A NUMBER
				// 	talObject.filteredResults.lotMatch = value;
				// } 
				talObject.filteredResults.noLotMatch = false;

				if(!isNaN(parseInt(value[0]))) {  //IF THIS IS A NUMBER
					talObject.filteredResults.lotMatch = value;
					if(!(parseInt(value) >= talObject.lots[0].lotNumber && parseInt(value) <= talObject.lots[talObject.lots.length - 1].lotNumber)){
						talObject.filteredResults.noLotMatch = true;
					}
				} 
				else{
					talObject.filteredResults.lotMatch = null;
					talObject.filteredResults.input = value.toLowerCase();
					talObject.filteredResults.categories = [];
					talObject.filteredResults.matches = talObject.lots.filter((lot) => {
						if (lot.description.toLowerCase().indexOf(talObject.filteredResults.input) >= 0){
							if(talObject.filteredResults.categories.indexOf(lot.category) === -1) talObject.filteredResults.categories.push(lot.category);
							return true;
						}
					})
				}
				
			},

			doCategorySearch: function(e){
				let value = $(e.currentTarget).data('value');
				talObject.activeCategory = value;
				talObject.categoryLots = talObject.lots.filter((lot) => {
					return (lot.category === talObject.activeCategory && lot.description.toLowerCase().indexOf(talObject.filteredResults.input) >= 0);
				});
				talObject.mobileSearchVisible = false;
			},

			doSearch: function(e) {
				if(talObject.filteredResults.lotMatch != null){
					goToLot(talObject.filteredResults.lotMatch);
					talObject.mobileSearchVisible = false;
				}else{
					goToLot($(e.currentTarget).data('value'));
					talObject.mobileSearchVisible = false;
				}
			},

			clearSearch: function() {
				talObject.filteredResults = {
					input: null,
					searching: false,
					lotMatch: null,
					noLotMatch: true,
					topMatch: null,
					categories: [],
					matches: [],
				};
				talController.clearCategory();
			},

		/******************************************
			CATEGORIES
		******************************************/	

			toggleCategoriesVisible: function(){
				talObject.categoriesVisible = !talObject.categoriesVisible;
			},

			goToCategory: function(e){
				talObject.activeCategory = $(e.currentTarget).data('value');
				talObject.categoryLots = talObject.lots.filter((lot) => {return lot.category === talObject.activeCategory});
				talObject.categoriesVisible = false;
			},

			clearCategory: function(e){
				talObject.activeCategory = null;
				talObject.categoryLots = [];
				scrollArea.destroy();
				createOptiscroll();
			},

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
				let lot = talObject.focusedLot;
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

		/******************************************
			GROUP BIDS
		******************************************/

			createGroupBid: function(e,context) {
				talController.activateGroupBid(context.lot);
			},

			dismissAndGroupBid: function(e,context){
				talController.dismissGroupViewModal();
				talObject.lotDetailsVisible = false;

				talController.activateGroupBid(talObject.focusedLot);
			},

			activateGroupBid: function(lot) {
				if(talObject.isGroupChoosing){
					talController.addOrRemoveIfExists(talObject.tempGroup,lot);
					return;
				}
				talObject.isGroupChoosing = true;
				talObject.tempGroup = {
					uid: new Date().toJSON(),
					lots: [],
					quantity: 1,
					maxbid: null,
					step: 1,
				}

				talObject.tempGroup.lots.push(lot);//ADD LOT REFERENCE TO THE GROUP OBJECT
				lot.group.push(talObject.tempGroup.uid);//ADD REFERENCE TO GROUP BID TO THE LOT OBJECT
			},

			addOrRemoveIfExists: function(list,item) {
				let i = 0;
				let exists = false;

				list.lots.forEach(function(obj){
					if(obj === item){
						list.lots.splice(i,1);
						item.group.splice(item.group.indexOf(list.uid),1);
						exists = true;
					}
					i++;
				});
				
				if(exists) return;
				list.lots.push(item);
				item.group.push(list.uid);
			},

			cancelGroupBid: function(e) {
				talObject.isGroupChoosing = false;
				talObject.groupBidModalVisible = false;
			},

			addToGroup: function(e,context){
				e.stopPropagation();
				talController.addOrRemoveIfExists(talObject.tempGroup,context.lot);
			},

			toggleGroupBidModalVisible: function() {
				talObject.groupBidModalVisible = !talObject.groupBidModalVisible;
			},

			setGroupQuantity: function(e,context){
				talObject.tempGroup.quantity = parseInt($(e.currentTarget).data('value'));
			},

			groupBiddingStep: function(e){
				talObject.tempGroup.step = $(e.currentTarget).data('targetstep');
				if(talObject.tempGroup.step === 2) $('.js--group-max-input').focus();
			},

			completeGroupBid: function(e){
				talObject.groupBidModalVisible = false;
				talObject.isGroupChoosing = false;

				let newGroup = {
					uid: talObject.tempGroup.uid,
					type: 'group',
					lots: talObject.tempGroup.lots,
					quantity: talObject.tempGroup.quantity,
					maxbid: talObject.tempGroup.maxbid,
				}

				talController.bidOnGroupLots(newGroup);

				talObject.biddingLots.push(newGroup);

				talController.goToTab('bids');
				pushHistory('bids', 'page');//PUSH STATE
			},

			bidOnGroupLots: function(group){
				let i = 1;

				group.lots.forEach(function(lot){
					if(i > group.quantity) return;

					if(typeof lot.bids[0] == 'undefined' || lot.bids[0].bid < group.maxbid){
						talController.incrementBid(lot,'max',talObject.bidder);
						i++;
					}
				}); 

			},

			showGroupViewModalFromLot: function (e,context) {
				let groupuid = context.lot.group[0];
				let group = talObject.biddingLots.find(el => { if(el.uid === groupuid) return el; });

				talController.loadGroupView(group,context.lot);
			},

			showGroupViewModal: function (e,context) {
				talController.loadGroupView(context.lot,context.lot.lots[0]);
			},

			loadGroupView: function(group,lot) {
				talObject.groupViewModalVisible = true;
				talObject.tempGroup = {};
				talObject.tempGroup = group;
				talObject.focusedLot = lot;
			},

			dismissGroupViewModal: function(){
				talObject.groupViewModalVisible = false;
			},

			switchGroupFocusedLot: function(e,context){
				talObject.focusedLot = talObject.tempGroup.lots[$(e.currentTarget).data('index')];
			},


		/******************************************
			DRAGGING
		******************************************/

			startDrag: function(e,context){
				talController.updateTouchStart(e);
				talObject.draggingLot = $(e.currentTarget);
			},
			doDrag: function(e,context){
				let relativeX = e.changedTouches[0].pageX - touchStart.x;
				if(relativeX > swipeDistance) $(e.currentTarget).addClass('s-swiped');
				if(relativeX < -20 && $(e.currentTarget).hasClass('s-swiped')) talController.resetDrag(talObject.draggingLot);
				else $(talObject.draggingLot).css('transform','translateX('+ relativeX + 'px)');
			},
			cancelDrag: function(e,context){

			},
			endDrag: function(e,context){
				let relativeX = e.changedTouches[0].pageX - touchStart.x;
				if(relativeX > swipeDistance) $(e.currentTarget).addClass('s-swiped');
				if(relativeX < -20 && $(e.currentTarget).hasClass('s-swiped')) talController.resetDrag(talObject.draggingLot);
				else $(talObject.draggingLot).css('transform','translateX(0)');
			},
			updateTouchStart: function(e){
				touchStart.x = e.changedTouches[0].pageX;
			},

			resetDrag: function(lot) {
				$(lot).removeClass('s-swiped');
				$(lot).css('transform','translateX(0)');
			},

			dragQuickBid: function(e,context){
				talController.resetDrag(talObject.draggingLot);
				talController.quickBid(e,context);
			},

			dragWatchLot: function(e,context){
				talController.resetDrag(talObject.draggingLot);
				talController.watchLot(e,context);
			},



	};

const swipeDistance = 150;

const touchStart = {
	x: 0,
	y: 0,
}

const incrementTable = [
	{
		upto: 99,
		increment: 5
	},
	{
		upto: 249,
		increment: 10
	},
	{
		upto: 499,
		increment: 25
	},
	{
		upto: 999,
		increment: 50
	},
	{
		upto: 2499,
		increment: 100
	},
	{
		upto: 9999,
		increment: 250
	},
	{
		upto: 24999,
		increment: 500
	},
	{
		upto: 149999,
		increment: 1000
	},
	{
		upto: 299999,
		increment: 2500
	},
	{
		upto: 999999,
		increment: 5000
	},
	{
		upto: 9999999,
		increment: 10000
	},
]


const talBinding = rivets.bind($('.js--tal'),{
		talObject: talObject,
		talController : talController
	}); 