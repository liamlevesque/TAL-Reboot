$(function(){
	//ON FIRST LOAD IF COMING FROM LOGIN PAGE ASSIGN THE BIDDER NUMBER TO THIS SESSION
	let hash = parseInt(window.location.hash.split('#')[1]);
	if(hash > 0) talObject.bidder = 'v' + hash;
	pushHistory('auction','page');
})

const baseTitle = "Ritchie Bros. Timed Auction | ";

function navigateHistory(type,name) {
	switch(type){
		case 'page':
			talController.goToTab(name);
			hideModals();
			break;
		case 'lot':
			talController.showLot(name);
			break;
		case 'search':
			talObject.mobileSearchVisible = true;
			break;
		default:
			talController.goToTab('auction');
	}
	
	document.title = baseTitle + name;
}

function hideModals(){
	talObject.maximumBidVisible = false;
	talObject.groupBidModalVisible = false;
	talObject.groupViewModalVisible = false;
	talObject.lotDetailsVisible = false;
	talObject.mobileSearchVisible = false;
}

function pushHistory(target,pagetype) {
	let destination = {
		type: pagetype,
		name: target
	}
	history.pushState(destination,baseTitle + target,'#'+target);
}

window.addEventListener('popstate', function(e) {
	navigateHistory(e.state.type,e.state.name);
});