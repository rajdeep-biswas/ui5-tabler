sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("com.ducky.tabler.controller.View1", {
		 onInit: async function () {
            var oModel = new sap.ui.model.json.JSONModel();
            await oModel.loadData("model/data.json");
            this.getView().setModel(oModel);
       
        	var json_keys = Object.keys(oModel.getData()["things"][0]);
        	
			var oTable = new sap.m.Table("table1", {
				headerToolbar : new sap.m.Toolbar({
		            content : [ new sap.m.Label({
		                text : "Products"
		            })]
		        })
			});
			
			var allCells = [];
			
			for(var key in json_keys) {
				var newCol = new sap.m.Column("col" + key, {
					header : new sap.m.Label({
		                text : json_keys[key]
		            })
				});
				oTable.addColumn(newCol);
				allCells.push(new sap.m.Text({ text : '{' + json_keys[key] +  '}' }));
			}

			var aColList = new sap.m.ColumnListItem("aColList", {
				cells: allCells
			});
			
			oTable.bindItems("/things", aColList);
		    oTable.setModel(oModel);
    		this.getView().byId("page").addContent(oTable);
        }
	});
});