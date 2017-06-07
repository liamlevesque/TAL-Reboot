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

	return formatprice(increment(value));
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

rivets.formatters.lengthand = function(value,item){
	if(value.length > 0 && !item) return true;
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





