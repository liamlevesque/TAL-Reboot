$(function(){

	for(let i = 0; i < talObject.lots.length; i++){
		talObject.lots[i].closes = moment().add((i - talObject.preSoldOffset) * talObject.closeInterval,'seconds');
	};
	talObject.startTime =  new Date().getTime();
	setTimeout(updatetime, 1000);

}); 

function updatetime(){
	talObject.crudeInterval += 1000;
	let diff = (new Date().getTime() - talObject.startTime) - talObject.crudeInterval;
	
	talObject.time = moment();
	talObject.intervalCount = Math.floor((new Date().getTime() - talObject.startTime)/1000);
	
	//IF A LOT SHOULD BE CLOSING NOW (IE A MULTIPLE OF THE CLOSE INTERVAL) SELL THAT LOT
	if(talObject.intervalCount % talObject.closeInterval === 0){
		let nextLot = (talObject.intervalCount/talObject.closeInterval) + talObject.preSoldOffset;
		talController.sellLot(nextLot);
		talObject.auction.closingNext = nextLot; 
	}
	setTimeout(updatetime, (1000-diff)); 
}

var hidden, visibilityChange; 
if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}

document.addEventListener(visibilityChange, handleVisibilityChange, false);

//WHEN YOU BRING FOCUS BACK TO THE TAL WINDOW, CLOSE ANY LOTS THAT SHOULD HAVE CLOSED WHILE YOU WERE GONE
function handleVisibilityChange(){
	if(!document[hidden]){
		talObject.intervalCount = Math.floor((new Date().getTime() - talObject.startTime)/1000);
		//let nextLot = Math.floor(talObject.intervalCount/talObject.closeInterval) + talObject.preSoldOffset;
		
		for(let i = 0; i < talObject.lots.length; i++){
			if(moment().isAfter(talObject.lots[i].closes) && talObject.lots[i].status != 'sold') talController.sellLot(i); 
			//console.log(talObject.lots[i].status, talObject.lots[i].lotNumber, nextLot);
		}
	}
}