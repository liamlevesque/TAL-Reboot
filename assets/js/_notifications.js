$(function(){
  if ('Notification' in window) { 
    Notification.requestPermission().then(function(result) {
      console.log(result);
    }); 
  }
});


function spawnNotification(theTitle,theBody,theImage) {
  if (!('Notification' in window)) return false;
  if(typeof theImage === 'undefined') theImage = '/assets/img/logo-square.png';
  var options = {
      body: theBody,
      icon: theImage
  }
  var n = new Notification(theTitle,options);
}