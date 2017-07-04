$(function(){

	createOptiscroll();
	Hammer.plugins.fakeMultitouch();
	
	loadingTimer = window.setTimeout(function(){
		//talObject.doneLoading = true;

		setTimeout(function(){
			talObject.scrollUpNoticeVisible = false;
		},5000);
	},2000);
}); 



var loadingTimer;
var scrollArea;
var scrollTarget = null;
var scrollDetails = {
	start: null,
	delta:null,
	direction: null,
};

function createOptiscroll() {
	if($('.js--optiscroll-content').length > 0){
		let scroller = $('.optiscroll')[0];
		scrollArea = new Optiscroll(scroller,{
			forceScrollbars: true,
			//wrapContent: false,
		});

		let nextLot = talObject.auction.startLot + talObject.auction.closingNext;
		$('.optiscroll-content').scrollTop($('#' + nextLot).offset().top);
		setTimeout(function(){
			$('.js--tal').removeClass('s-header-hidden');
		},500);

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

		$('.optiscroll').on('scrollstart',function(e){
			$('.optiscroll').addClass('s-scrolling');
			scrollDetails.start = e.detail.scrollTop;
			updateProgressIndicator(e.detail.scrollTop/e.detail.scrollHeight);
		}).on('scroll',function(e){
			scrollDetails.direction = (e.detail.scrollTop > scrollDetails.start)? 'down' : 'up' ;
			scrollDetails.delta = Math.abs(e.detail.scrollTop - scrollDetails.start);
			if(scrollDetails.direction === 'up' && scrollDetails.delta > 5){
				$('.js--tal').removeClass('s-header-hidden');
				scrollDetails.start = e.detail.scrollTop;
			}
			else if(scrollDetails.direction === 'down' && scrollDetails.delta > 5){
				$('.js--tal').addClass('s-header-hidden');
				scrollDetails.start = e.detail.scrollTop;
			}
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

