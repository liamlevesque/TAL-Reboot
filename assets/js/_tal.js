const talObject = {
		doneLoading: false,

		closeInterval: 30,
		startTime: null,
		crudeInterval: 0,
		intervalCount: 0,
		preSoldOffset: 20,
		time: moment(),
		auction: {
			startLot: 5001,
			endLot: 5145,
			totalLots: 146,
			closingNext: 20,
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
		
		scrollUpNoticeVisible: true,
		draggingLot: null,
		swipeDistance: 150,
		touchStart: {
				x: 0,
				y: 0,
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


