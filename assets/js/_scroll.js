$(function(){

	let scroller = $('.optiscroll')[0];
	scrollArea = new Optiscroll(scroller,{
		forceScrollbars: true,
		wrapContent: false,
	});


	$('.optiscroll').on('scroll',function(e){
		// let vposition = e.detail.scrollbarV.percent;
		// $('.js--lot-scroll-indicator').css('top',vposition + "%").text('Lot '+vposition);
		$('.optiscroll').addClass('s-scrolling');
		updateProgressIndicator(e.detail.scrollTop/e.detail.scrollHeight);
	}).on('scrollstop',function(e){
		$('.optiscroll').removeClass('s-scrolling');
		//CHECK IF MOUSEOVER FIRST
	}); 

	$('.optiscroll-v').on('mouseenter',function(e){
		$('.optiscroll').addClass('s-scrolling');
	});

	$('.js--lot-scroll-hover-area').on('mouseenter',function(e){
		
		$('.optiscroll').addClass('s-scrolling');
		e.currentTarget.addEventListener('mousemove',function(e){
			let progress = getProgress(e);
			updateProgressIndicator(progress);
		});

	}).on('mousedown',function(e){
		
		var targetBounds = $('.js--optiscroll-content')[0].getBoundingClientRect();
		var totalHeight = targetBounds.bottom - targetBounds.top;
		var yPixels = Math.floor(getProgress(e) * totalHeight);
		scrollArea.scrollTo(false, yPixels, 100);

	}).on('mouseleave',function(e){
		
		$('.optiscroll').removeClass('s-scrolling');
		e.currentTarget.removeEventListener('mousemove',function(e){
			let progress = getProgress(e);
			updateProgressIndicator(progress);
		});
	});

	function getProgress(e){
		let thisBounds = e.currentTarget.getBoundingClientRect();
		let yDiff = e.clientY - thisBounds.top;
		let height = thisBounds.bottom - thisBounds.top;
		return yDiff/height;
	}

	function updateProgressIndicator(percentProgress){
		let hoveredLot = talObject.auction.startLot + Math.floor((talObject.auction.endLot - talObject.auction.startLot) * percentProgress);
		
		if(percentProgress > 0.95) percentProgress = 0.95;
		else if(percentProgress < 0.05) percentProgress = 0.05;
		
		$('.js--lot-scroll-indicator').css('top', percentProgress * 100 + "%").text('Lot ' + hoveredLot);
	}
});