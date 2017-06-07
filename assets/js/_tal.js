const talObject = {
		auction: {
			startLot: 5000,
			endLot: 5145,
			totalLots: 850,
			closingNext: 7,
		},
		lots: lotlist,
		watchingLots: [],
		biddingLots: [],
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
		tempMaxBid: 0,
		focusedLot: null,

		activeTab: 'auction',

		isGroupChoosing: false,
		tempGroup: {
			uid: null,
			lots: [],
			quantity: 0,
			maxbid: 0,
			step: 1,
		},
		groupViewModalVisible: false,

		mobileSearchVisible: false,
		pastSearches: ['Cat 350','40 foot container','Gen Set'],
		categories: categories,
		filteredResults: {},
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
				history.back();
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

		/******************************************
			SEARCH
		******************************************/	
			toggleSearchVisible: function(e){
				talObject.mobileSearchVisible = !talObject.mobileSearchVisible;
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
				}
				
			},

			doSearch: function(e) {
				if(talObject.filteredResults.lotMatch != null){
					goToLot(talObject.filteredResults.lotMatch);
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
				talController.placeBid(talObject.focusedLot);
				talObject.quickBidConfirmVisible = false;
			},

			placeBid: function(lot){
				lot.bidder = talObject.bidder;
				lot.bid = talController.increment(lot.bid);
				talController.watchThisLot(lot,false);
				talObject.biddingLots.push(lot);
			},

			increment: function(amt){
				for(let i = 0; i < incrementTable.length; i++){
					if(amt < incrementTable[i].upto) return incrementTable[i].increment + amt;
				}
			},

		/******************************************
			MAX BIDS
		******************************************/

			toggleMaximumBidVisible: function(e,context){
				talObject.maximumBidVisible = !talObject.maximumBidVisible;
				if(talObject.maximumBidVisible) talObject.focusedLot = context.lot;
			},

			setMaximumBid: function(){
				let bid = {
					bidder: talObject.bidder,
					bid: talObject.tempMaxBid,
					time: new Date().toJSON()
				}

				talObject.focusedLot.maxBids.push(bid);
				//talController.placeBid(talObject.focusedLot);
				talController.manageMaxBids(talObject.focusedLot);
				talObject.maximumBidVisible = false;
			},

			manageMaxBids: function(lot) {
				
				lot.maxBids.sort((a,b) => {return b.bid - a.bid});//SORT REVERSE BY BID VALUE (HIGHEST FIRST)
				
				if(lot.maxBids.length > 1) lot.bid = lot.maxBids[1].bid ; //IF THERE ARE OTHER MAX BIDS, THE HIGH BID IS NOW THE SECOND HIGHEST MAX BID
				else lot.bid = talController.increment(lot.bid);//OTHERWISE JUST BID AS NORMAL

				lot.bidder = lot.maxBids[0].bidder; 
				talObject.biddingLots.push(lot);

				//TODO: IF YOU'RE THE HIGH BIDDER SHOW HIGH, ELSE SHOW OUTBID MESSAGE
			}

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
					maxbid: 0,
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
			},

			bidOnGroupLots: function(group){
				let i = 1;

				group.lots.forEach(function(lot){
					if(i > group.quantity) return;

					if(lot.bid< group.maxbid){
						lot.bidder = talObject.bidder;
						lot.bid = talController.increment(lot.bid);
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

	};


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