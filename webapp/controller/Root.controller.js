sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("testapp.controller.Root", {
		
		onInit: function(oEvent) {

            this.oRoot = this.getView().byId("idRoot");

            var that = this;
            this.oRoot.getMasterPages().forEach(function(oPage) {
                oPage.getController().navigation = that;
            });

        },


        navTo: function(sPageId, oContext) {
            this.oRoot.to(sPageId);
            if (oContext) {
                this.oRoot.getPage(sPageId).setBindingContext(oContext);
            }
        },


        navBack: function() {
            this.oRoot.back();
        }

	});
});