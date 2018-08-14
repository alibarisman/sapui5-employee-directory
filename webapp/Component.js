sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"testapp/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("testapp.Component", {

		metadata: {
			manifest: "json"
		},

		createContent: function() {
            //create root view
            var oView = sap.ui.view({
                id: "idViewRoot",
                viewName: "testapp.view.Root",
                type: "XML",
                viewData: {
                    component: this
                }
            });

            // done
            return oView;
        },

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});