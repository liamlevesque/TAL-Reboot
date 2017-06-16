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