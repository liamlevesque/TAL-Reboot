function formatprice(amt){
	if(amt === 0) return 0;
	else if(!amt) return null;

	var price;

	if($('body').hasClass('INR')) 
		price = amt.toString().replace(/(\d)(?=(\d\d)+\d$)/g, '$1<span class="divider"></span>');
	else 
		price = amt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '<span class="divider"></span>');
	
	return price;
};
 
rivets.formatters.price = function(value){
	return formatprice(value);
};

rivets.formatters.nextIncrement = function(value){
	if(typeof value == "undefined") value = 0;
	return formatprice(talController.increment(value));
};

rivets.formatters.compare = function(value, comparisons){
	if(typeof value == "undefined" || typeof comparisons == "undefined") return false;
	
	if(typeof comparisons == "string"){
		var args = comparisons.split(',');
		if(args.includes(value)) return true;
	}
	else if(comparisons === value) return true;
	
	return false;
};

rivets.formatters.inversecompare = function(value, comparisons){
	if(typeof value == "undefined" || typeof comparisons == "undefined") return true;
	
	if(typeof comparisons == "string"){
		var args = comparisons.split(',');
		if(args.includes(value)) return false;
	}
	else if(comparisons === value) return false;
	
	return true;
};


rivets.formatters.compareplusone = function(value, comparisons){
	if(typeof value == "undefined" || typeof comparisons == "undefined") return false;
	
	if(comparisons + 1 === value) return true;
	
	return false;
};


rivets.formatters.greaterthan = function(value, comparisons){
	if(typeof value == "undefined" || typeof comparisons == "undefined") return false;

	if(value > comparisons) return true;
	else return false;
};

rivets.binders.addtextclass = function(el,value){
	if(value === "") return false;
	$(el).removeClass().addClass('s-'+ value);
};

rivets.binders.ccyclass = function(el,value){
	if(value === "") return false;
	$(el).addClass(value);
};

rivets.binders.percenttowidth = function(el,value){
	$(el).css({'transform':"scaleX("+value/100+")"});
};

rivets.binders.sortclasses = function(el,value){
	var thiscolumn = $(el).data('column');
	var direction = dataObject.sortdirection;
	$(el).removeClass('s-active-sort s-sort-asc s-sort-desc');
	
	if(value === thiscolumn) $(el).addClass('s-active-sort s-sort-'+direction);
};

rivets.binders.ischecked = function(el,value){
	if(value) $(el).prop('checked',true);
	else $(el).prop('checked',false);
};

rivets.binders.lotgroupdecor = function(el,value){
	if(value === 'start') $(el).addClass('s-group-start');
	if(value === 'mid') $(el).addClass('s-group');
	if(value === 'end') $(el).addClass('s-group-end');
};

rivets.formatters.indexof = function(list,item){
	if(typeof list === 'undefined' || typeof item === 'undefined') return false;
	if(list.indexOf(item) >= 0) return true;
	else return false;
};


rivets.formatters.divide = function(value,divisor){
	return Math.floor((value/divisor*100));
};

rivets.formatters.lengthToBool = function(value){
	if(typeof value === 'undefined' || value === null) return false;
	if(value.length === 0) return false;
	return true;
};

rivets.formatters.invalidinput = function(value){
	if(typeof value === 'undefined') return false;
	if(value.length === 0) return false;
	if(value.match(/[^A-Za-z0-9-_]/gi) != null) return false;
	return true;
};

rivets.formatters.lengthGreaterThanOne = function(value){
	if(typeof value === 'undefined') return false;
	if(value.length > 1) return true;
	return false;
};

rivets.formatters.inverseLengthToBool = function(value){
	if(typeof value === 'undefined') return true;
	if(value.length === 0) return true;
	return false;
};

rivets.formatters.length = function(value){
	if(typeof value === 'undefined') return 0;
	return value.length;
};

rivets.formatters.invert = function(value){
	console.log(value);
	if(typeof value != "undefined") return false;
	return true;
};

rivets.formatters.propertyList = function(obj) {
  return (function() {
    var properties = []
    for (key in obj) {
      properties.push({key: key, value: obj[key]})
    }
    return properties
  });
};

rivets.formatters.findShortcuts = function(arr,index){
	if(typeof arr[index] === 'undefined') return false;
	return arr[index].shortcuts;
};

rivets.formatters.plus = function(value,arg){
	if(typeof value == "undefined" || typeof arg == "undefined") return 0;
	return value + arg;
};

rivets.formatters.and = function(value,item){
	if(value && item) return true;
	return false;
};

rivets.formatters.or = function(value,item){
	if(value || item) return true;
	return false;
};

rivets.formatters.lengthand = function(value,item){
	if(typeof value != 'undefined' && value.length > 0 && !item) return true;
	return false;
};

rivets.binders.backgroundsrc = function(el,value){
	$(el).css({'background-image':value});
}

rivets.formatters.formatThousands = function(value){
	return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

rivets.formatters.disablePhotoDownload = function(value, arg){
	if(typeof value == "undefined" || typeof arg == "undefined") return true;
	if(arg.length === 0 && value) return false;
	return true;
}

rivets.formatters.countdownTime = function(value){
	if(typeof value == 'undefined') return '';
	//else return moment(new Date(value)).fromNow();
	var now = moment();
	var end = moment(new Date(value));
	var span = moment.duration(end - now);
	return span.days() + 'd ' + span.hours() + 'h ' + span.minutes() + 'm ' + span.seconds() + 's';
};

rivets.formatters.countdownTimer = function(now,closes){
	let end = moment(closes);
	var span = moment.duration(end - now);
	return span.days() + 'd ' + span.hours() + 'h ' + span.minutes() + 'm ' + span.seconds() + 's';
};

rivets.formatters.compareTime = function(now,closes) {
	let end = moment(closes);
	var span = moment.duration(end - now);
	if(span._milliseconds > 0) return false;
	return true; 
}

rivets.formatters.calendarTime = function(value){
	if(typeof value == 'undefined') return '';
	return moment(new Date(value)).calendar();
};

rivets.formatters.relativedate = function(value){
	if(typeof value == 'undefined') return '';
	var daysfromnow = moment().diff(moment(value),'days');
	if(daysfromnow > 0)return daysfromnow + " days ago";
	if(daysfromnow <= 0)return Math.abs(daysfromnow) + " days from now";
};

rivets.formatters.percent = function (value,base){
	if(typeof value == 'undefined' || typeof base == 'undefined') return 0;
	return (value - 1) / (base.length - 1) * 100;
}

rivets.formatters.lotnumber = function (value){
	if(typeof value == 'undefined') return 5000;
	return parseInt(value) + 5000;
}

rivets.formatters.plusone = function (value){
	if(typeof value == 'undefined') return 1;
	return parseInt(value) + 1;
}

rivets.formatters.totalBids = function(lots) {
	let totalbids = lots.reduce( (acc,lot) => {if(lot.bids[0].bidder === talObject.bidder) return acc + lot.bids[0].bid}, 0); 
	return formatprice(totalbids);
}

rivets.binders.rangeposition = function(el,value){
	$(el).css({'left':value+"%"}); 
}

rivets.formatters.rangevalues = function(value){
	let content = '';
	for(let i = 0; i < value.length; i++){
		content += i + ' ';
	}
	return content;
}

rivets.formatters.lotintervals = function(lots, first, last){
	if(typeof lots === 'undefined') return [];
	let list = [];
	let increment = Math.floor((last - first)/6);
	for(let i = 0;i<6;i++){
		if(first + increment*i < last) list.push(first + increment*i);
	}
	list.push(last);

	return list;

}


rivets.formatters.lotposition = function(lot, first, last){
	let lotNumber = 0;
	if(lot.type === 'group') lotNumber = lot.lots[0].lotNumber;
	else lotNumber = lot.lotNumber;
	
	return Math.floor(100 * ((lotNumber - first) / (last - first)));
}

rivets.formatters.lotpositionDelta = function(index, first, last){
	let lotNumber = talObject.lots[index].lotNumber;
	
	return Math.floor(100 * ((lotNumber - first) / (last - first)));
}

rivets.binders.vlocation = function(el,value){
	$(el).css('top',value + "%");
}



rivets.binders.rangeinput = {
    publishes: true,
    routine: function(el,value){
    	if(typeof value == 'undefined') el.value = 1;
        else el.value = parseInt(value);
    },
    getValue: function(el){
    	return parseInt(el.value);
    },
    bind: function (el) {
        el.addEventListener('input', this.publish);
    },
    unbind: function (el) {
        el.removeEventListener('input', this.publish);
    }
};


rivets.formatters.highbidder = function(bids,bidder){
	if(typeof bids === 'undefined' || typeof bids[0] == 'undefined' || typeof bidder == 'undefined' ) return 'notbid';
	if(bids[0].bidder === bidder) return 'highbidder';
	for(let i = 1; i < bids.length; i++){
		if(bids[i].bidder === bidder) return 'outbid';
	};
	return 'notbid';
};

rivets.formatters.highbidormaxbid = function(bids,bidder,match){
	if(typeof bids === 'undefined' || typeof bids[0] == 'undefined' || typeof bidder == 'undefined' || typeof match == 'undefined' ) return false;
	switch(match){
		case 'BIDDING':
			if(bids[0].bidder === bidder) return true;
			break;

		case 'MAXBID':
			if(bids[0].bidder === bidder && bids[0].type === 'max'){
				console.log('maxbid yes!');
				return true;
			} 
			break;

		case 'BID_NOT_MAXBID':
			if(bids[0].bidder === bidder && bids[0].type != 'max') return true;
			break;

		default:
			return false; 
	}
	
	return false;
};

rivets.binders.bidstatusclass = function(el,value){
	//console.log(value);

	switch(value){
		case 'highbidder':
			$(el).addClass('s-winning').removeClass('s-outbid');
			break;
		case 'outbid':
			$(el).addClass('s-outbid').removeClass('s-winning');
			break;

		default: 
			$(el).removeClass('s-winning s-outbid')
	}
};

rivets.binders.carouselposition = function(el,value){
	$(el).css('transform','translateX('+ (value * -100) +'%)')
}

