const talObject = {
		auction: {
			startLot: 5000,
			endLot: 5145,
			totalLots: 850,
			closingNext: 200,
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
	};

var scrollArea;

const talController = {
		stopProp: function(e){
			e.stopPropagation();
		},

		loadTab: function(e){
			talController.goToTab($(e.currentTarget).data('tab'));
		},

		goToTab: function(target){
			talObject.activeTab = target;

			if($('.optiscroll').length > 0){
				let scroller = $('.optiscroll')[0];
				scrollArea = new Optiscroll(scroller,{
					forceScrollbars: true,
					wrapContent: false,
				});
			}
		},

		toggleLotDetails: function(e,context){
			talObject.lotDetailsVisible = !talObject.lotDetailsVisible;
			
			if(talObject.lotDetailsVisible){
				talObject.focusedLot = context.lot;

				var mySwiper = new Swiper ('.swiper-container', {
					direction: 'horizontal',
					loop: true,
					pagination: '.swiper-pagination',
      				paginationClickable: 'true',
					speed: 300,
					effect: "coverflow",
				})
			}

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
				talController.placeBid(context.lot);
			},

			placeBid: function(lot){
				lot.bidder = talObject.bidder;
				lot.bid = increment(lot.bid);
				talController.watchThisLot(lot,false);
				talObject.biddingLots.push(lot);
			},

		/******************************************
			MAX BIDS
		******************************************/

			toggleMaximumBidVisible: function(e,context){
				talObject.maximumBidVisible = !talObject.maximumBidVisible;
				if(talObject.maximumBidVisible) talObject.focusedLot = context.lot;
			},

			setMaximumBid: function(){
				talObject.focusedLot.maxBid = talObject.tempMaxBid;
				talController.placeBid(talObject.focusedLot);
				talObject.maximumBidVisible = false;
			},

		/******************************************
			GROUP BIDS
		******************************************/

			createGroupBid: function(e,context) {
				if(talObject.isGroupChoosing){
					addOrRemoveIfExists(talObject.tempGroup,context.lot);
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

				talObject.tempGroup.lots.push(context.lot);
				context.lot.group.push(talObject.tempGroup.uid);
			},

			cancelGroupBid: function(e) {
				talObject.isGroupChoosing = false;
				talObject.groupBidModalVisible = false;
			},

			addToGroup: function(e,context){
				e.stopPropagation();
				addOrRemoveIfExists(talObject.tempGroup,context.lot);
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
						lot.bid = increment(lot.bid);
						i++;
					}
				});

				console.log(group);

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


function addOrRemoveIfExists(list,item) {
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
}

function increment(amt){
	for(let i = 0; i < incrementTable.length; i++){
		if(amt < incrementTable[i].upto) return incrementTable[i].increment + amt;
	}
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