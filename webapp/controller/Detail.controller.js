sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"testapp/util/Formatter"
], function(Controller, formatter) {
	"use strict";

	return Controller.extend("testapp.controller.Detail", {

		formatter: formatter,
		
		_onHandleTelephonePress : function (oEvent){
			var sNumber = oEvent.getSource().getText();
			sap.m.URLHelper.triggerTel(sNumber);
		},
		
		_onHandleMailPress : function (oEvent){
			var sEmail = oEvent.getSource().getText();
			sap.m.URLHelper.triggerEmail(sEmail, "Info Request");
		},
		
		onBack: function () {
			this.navigation.navTo("idViewRoot--idViewMaster");
		}

	});

});
