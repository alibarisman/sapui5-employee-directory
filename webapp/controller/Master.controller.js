sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("testapp.controller.Master", {

		handleListSelect: function(oEvent) {
            this.navigation.navTo("idViewRoot--idViewDetail", oEvent.getParameter("listItem").getBindingContext());
        },
        
        handleSearch : function (evt) {
			// create model filter
			var filters = [];
			var query = evt.getParameter("query");
			if (query && query.length > 0) {
				var filter = new sap.ui.model.Filter("name", sap.ui.model.FilterOperator.Contains, query);
				filters.push(filter);
			}
		
			// update list binding
			var list = this.getView().byId("employeeList");
			var binding = list.getBinding("items");
			binding.filter(filters);
		}

	});

});