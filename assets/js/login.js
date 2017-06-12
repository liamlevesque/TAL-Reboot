$(function(){

	$('.firstFocus').focus();

});

const loginObject = {
	auctionStarted: true,
	bidderNumber: null,
	pin: null,
	bidderHintVisible: true,
	pinHintVisible: false,
};

const loginController = {
	enterAuction: function(){
		window.location = '/index.html#' + loginObject.bidderNumber;
	},
	
	focusBidder: function(){
		loginObject.bidderHintVisible = true;
		loginObject.pinHintVisible = false;
	},

	focusPIN: function(){
		loginObject.bidderHintVisible = false;
		loginObject.pinHintVisible = true;
	},
};


const loginBinding = rivets.bind($('.js--login'),{
	loginObject: loginObject,
	loginController : loginController
}); 