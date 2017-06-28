        /******************************************
			SEARCH
		******************************************/	
			toggleSearchVisible: function(e){
				talObject.mobileSearchVisible = !talObject.mobileSearchVisible;
				talObject.categoriesVisible = false;
				pushHistory('search','modal');

				$('.js--search-input').focus();
			},

			updateSearch: function(e) {
				if(talObject.filteredResults.input.length === 0) talController.clearSearch();

				let value = $(e.currentTarget).val();
				if(value.length === 0){	//IF NO SEARCH STRING ENTERED
					talObject.filteredResults.searching = false;
					return;
				} 
				else talObject.filteredResults.searching = true;

				// if(!isNaN(parseInt(value[0])) && (parseInt(value) >= talObject.lots[0].lotNumber && parseInt(value) <= talObject.lots[talObject.lots.length - 1].lotNumber)) {  //IF THIS IS A NUMBER
				// 	talObject.filteredResults.lotMatch = value;
				// } 
				talObject.filteredResults.noLotMatch = false;

				if(!isNaN(parseInt(value[0]))) {  //IF THIS IS A NUMBER
					talObject.filteredResults.lotMatch = value;
					if(!(parseInt(value) >= talObject.lots[0].lotNumber && parseInt(value) <= talObject.lots[talObject.lots.length - 1].lotNumber)){
						talObject.filteredResults.noLotMatch = true;
					}
				} 
				else{
					talObject.filteredResults.lotMatch = null;
					talObject.filteredResults.input = value.toLowerCase();
					talObject.filteredResults.categories = [];
					talObject.filteredResults.matches = talObject.lots.filter((lot) => {
						if (lot.description.toLowerCase().indexOf(talObject.filteredResults.input) >= 0){
							if(talObject.filteredResults.categories.indexOf(lot.category) === -1) talObject.filteredResults.categories.push(lot.category);
							return true;
						}
					})
				}
				
			},

			doCategorySearch: function(e){
				let value = $(e.currentTarget).data('value');
				talObject.activeCategory = value;
				talObject.categoryLots = talObject.lots.filter((lot) => {
					return (lot.category === talObject.activeCategory && lot.description.toLowerCase().indexOf(talObject.filteredResults.input) >= 0);
				});
				talObject.mobileSearchVisible = false;
			},

			doSearch: function(e) {
				if(talObject.filteredResults.lotMatch != null){
					goToLot(talObject.filteredResults.lotMatch);
					talObject.mobileSearchVisible = false;
				}else{
					goToLot($(e.currentTarget).data('value'));
					talObject.mobileSearchVisible = false;
				}
			},

			clearSearch: function() {
				talObject.filteredResults = {
					input: null,
					searching: false,
					lotMatch: null,
					noLotMatch: true,
					topMatch: null,
					categories: [],
					matches: [],
				};
				talController.clearCategory();
			},


		/******************************************
			CATEGORIES
		******************************************/	

			toggleCategoriesVisible: function(){
				talObject.categoriesVisible = !talObject.categoriesVisible;
			},

			goToCategory: function(e){
				talObject.activeCategory = $(e.currentTarget).data('value');
				talObject.categoryLots = talObject.lots.filter((lot) => {return lot.category === talObject.activeCategory});
				talObject.categoriesVisible = false;
				talObject.mobileSearchVisible = false;
			},

			clearCategory: function(e){
				talObject.activeCategory = null;
				talObject.categoryLots = [];
				scrollArea.destroy();
				createOptiscroll();
			},

			toggleFiltersVisible: function(){
				talObject.filtersVisible = !talObject.filtersVisible;
			},

			updateSort: function(e){
				talObject.sortName = $(e.currentTarget).data('value');
				talObject.sortOptionsVisible = false;
			},

			toggleSortOptionsVisible: function(e){
				talObject.sortOptionsVisible = !talObject.sortOptionsVisible;
			},