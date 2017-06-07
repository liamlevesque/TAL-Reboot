$(function(){

	createOptiscroll();
	
});


var scrollArea;
var scrollTarget = null;

function createOptiscroll() {
	if($('.js--optiscroll-content').length > 0){
		let scroller = $('.optiscroll')[0];
		scrollArea = new Optiscroll(scroller,{
			forceScrollbars: true,
			//wrapContent: false,
		});

		$('.js--lot-scroll-hover-area').on('mouseenter',function(e){
			$('.optiscroll').addClass('s-scrolling');
			e.currentTarget.addEventListener('mousemove',function(e){
				let progress = getProgress(e);
				updateProgressIndicator(progress);
			});

		}).on('mouseleave',function(e){
			$('.optiscroll').removeClass('s-scrolling');
			e.currentTarget.removeEventListener('mousemove',function(e){
				let progress = getProgress(e);
				updateProgressIndicator(progress);
			});
		}).on('mousedown',function(e){
			goToLot(scrollTarget);
		});

		$('.optiscroll').on('scroll',function(e){
			$('.optiscroll').addClass('s-scrolling');
			updateProgressIndicator(e.detail.scrollTop/e.detail.scrollHeight);
		}).on('scrollstop',function(e){
			$('.optiscroll').removeClass('s-scrolling');
			//CHECK IF MOUSEOVER FIRST
		}); 

		$('.optiscroll-v').on('mouseenter',function(e){
			$('.optiscroll').addClass('s-scrolling');
		});

	}
}

function goToLot(targetLot) {
	var el = $('#'+targetLot)[0];
	scrollArea.scrollIntoView(el,100,{top: 30});
}

function getProgress(e){
	let thisBounds = e.currentTarget.getBoundingClientRect();
	let yDiff = e.clientY - thisBounds.top;
	let height = thisBounds.bottom - thisBounds.top;
	return yDiff/height;
}

function updateProgressIndicator(percentProgress){
	scrollTarget = talObject.auction.startLot + Math.floor((talObject.auction.endLot - talObject.auction.startLot) * percentProgress);
	
	if(percentProgress > 0.95) percentProgress = 0.95;
	else if(percentProgress < 0.05) percentProgress = 0.05;
	
	$('.js--lot-scroll-indicator').css('top', percentProgress * 100 + "%").text('Lot ' + scrollTarget);
}

