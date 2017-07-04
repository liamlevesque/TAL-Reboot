        /******************************************
			GROUP BIDS
		******************************************/

			createGroupBid: function(e,context) {
				talController.activateGroupBid(context.lot);
			},

			dismissAndGroupBid: function(e,context){
				talController.dismissGroupViewModal();
				talObject.lotDetailsVisible = false;

				talController.activateGroupBid(talObject.focusedLot);
			},

			activateGroupBid: function(lot) {
				if(talObject.isGroupChoosing){
					talController.addOrRemoveIfExists(talObject.tempGroup,lot);
					return;
				}
				talObject.isGroupChoosing = true;
				talObject.tempGroup = {
					uid: new Date().toJSON(),
					lots: [],
					quantity: 1,
					maxbid: null,
					step: 1,
				}

				talObject.tempGroup.lots.push(lot);//ADD LOT REFERENCE TO THE GROUP OBJECT
				lot.group.push(talObject.tempGroup.uid);//ADD REFERENCE TO GROUP BID TO THE LOT OBJECT
			},

			addOrRemoveIfExists: function(list,item) {
				let i = 0;
				let exists = false;

				list.lots.forEach(function(obj){
					if(obj === item){
						list.lots.splice(i,1);
						item.group.splice(item.group.indexOf(list.uid),1);
						exists = true;
					}
					i++;
				});
				
				if(exists) return;
				list.lots.push(item);
				item.group.push(list.uid);
			},

			cancelGroupBid: function(e) {
				talObject.isGroupChoosing = false;
				talObject.groupBidModalVisible = false;
			},

			addToGroup: function(e,context){
				e.stopPropagation();
				talController.addOrRemoveIfExists(talObject.tempGroup,context.lot);
			},

			toggleGroupBidModalVisible: function() {
				talObject.groupBidModalVisible = !talObject.groupBidModalVisible;
			},

			setGroupQuantity: function(e,context){
				talObject.tempGroup.quantity = parseInt($(e.currentTarget).data('value'));
			},

			groupBiddingStep: function(e){
				talObject.tempGroup.step = $(e.currentTarget).data('targetstep');
				if(talObject.tempGroup.step === 2){
					$('.js--group-max-input').drum({
						panelCount: talObject.increments.length,
						dial_w: 40,
						onChange: function(e){
							talObject.tempGroup.maxbid = $(e).val();
						},
					});

				}
			},

			completeGroupBid: function(e){
				talObject.groupBidModalVisible = false;
				talObject.isGroupChoosing = false;

				let newGroup = {
					uid: talObject.tempGroup.uid,
					type: 'group',
					lots: talObject.tempGroup.lots,
					quantity: talObject.tempGroup.quantity,
					maxbid: talObject.tempGroup.maxbid,
				}

				talController.bidOnGroupLots(newGroup);

				talObject.biddingLots.push(newGroup);

				talController.goToTab('bids');
				pushHistory('bids', 'page');//PUSH STATE
			},

			bidOnGroupLots: function(group){
				let i = 1;

				group.lots.forEach(function(lot){
					if(i > group.quantity) return;

					if(typeof lot.bids[0] == 'undefined' || lot.bids[0].bid < group.maxbid){
						talController.incrementBid(lot,'max',talObject.bidder);
						i++;
					}
				}); 

			},

			showGroupViewModalFromLot: function (e,context) {
				let groupuid = context.lot.group[0];
				let group = talObject.biddingLots.find(el => { if(el.uid === groupuid) return el; });

				talController.loadGroupView(group,context.lot);
			},

			showGroupViewModal: function (e,context) {
				talController.loadGroupView(context.lot,context.lot.lots[0]);
			},

			loadGroupView: function(group,lot) {
				talObject.groupViewModalVisible = true;
				talObject.tempGroup = {};
				talObject.tempGroup = group;
				talObject.focusedLot = lot;
			},

			dismissGroupViewModal: function(){
				talObject.groupViewModalVisible = false;
			},

			switchGroupFocusedLot: function(e,context){
				talObject.focusedLot = talObject.tempGroup.lots[$(e.currentTarget).data('index')];
			},