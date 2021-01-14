sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("com.ducky.tabler.controller.View1", {
		 onInit: async function () {
   //         var data = {
   //             "source":"view1.controller.json"
   //         };
			// var oModel = new sap.ui.model.json.JSONModel();
   //         oModel.setData(data);
   //         this.getView().setModel(oModel,"basicModel");
           
   //         oModel = new sap.ui.model.json.JSONModel();
   //         await oModel.loadData("model/data.json");
   //         this.getView().setModel(oModel,"fileModel");
           
   //         // console.log("Data From controller - "+ JSON.stringify(this.getView().getModel("basicModel").getData()));
   //         // console.log("Data From file - "+ JSON.stringify(this.getView().getModel("fileModel").getData()));
           
			// var oTable = new sap.m.Table("table1");
			
			// for(var key_name in oModel.getData()["things"][0]) {
			// 	var newCol = new sap.m.Column("col" + key_name, {
			// 		header : new sap.m.Label({
		 //               text : key_name
		 //           })
			// 	});
			// 	oTable.addColumn(newCol);
			// }
			
			// var oCell = [];

   //         for(var k in oModel.getData()["things"]) {
			// 	for(var key_name in oModel.getData()["things"][k]) {
			// 		var cell1 = new sap.m.Text({
   //                 	text: oModel.getData()["things"][k][key_name]
   //                 });
   //                 oCell.push(cell1);
			// 		console.log(key_name, oModel.getData()["things"][k][key_name]);
			// 	}
			// }
			
			// var aColList = new sap.m.ColumnListItem("aColList", {
			// 	cells: oCell
			// });
			
			// oTable.bindItems("/fileModel", aColList);

   // 		this.getView().byId("page").addContent(oTable);
   
   
			var oModel = new sap.ui.model.json.JSONModel();
            await oModel.loadData("model/data.json");
            this.getView().setModel(oModel);
        }
	});
});