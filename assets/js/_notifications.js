$(function(){
  Notification.requestPermission().then(function(result) {
    console.log(result);
  }); 
});

function spawnNotification(theTitle,theBody) {
  var options = {
      body: theBody,
      icon: '/assets/img/logo-square.png'
  }
  var n = new Notification(theTitle,options);
}