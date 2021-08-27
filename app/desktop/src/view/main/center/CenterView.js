// Ext.define('TutorialApp.view.main.center.CenterView', {
// 	extend: 'Ext.Container',
// 	xtype: 'centerview',
// 	cls: 'centerview',
// 	layout: 'card'
// });
var tab2 = Ext.create('Ext.panel.Panel', {
	//  renderTo: Ext.getBody(),
	  width: 400,
	  height: 900,
	  layout:'auto',
	  controller: 'center',
	  autishow:true,
  
	  requires: [
		  'TutorialApp.view.main.center.CenterViewController',
	 //     'Ext.form.Panel'
	  ],
  
	  items: [
		  {
			  xtype: 'panel',
			  title: 'Login page',
			  height: 900,
			  width: '100%',
			  id:'loginid',
			  autoShow:true,
			  items:[{
				  xtype:'textfield',
				  label:'username',
			  },{
				  xtype:'passwordfield',
				  label:'password',
			  },{
				  xtype:'button',
				  text:'login',
				  handler: function(){
							  
						  localStorage.setItem("TutorialLoggedIn", true);
  
						  // Remove Login Window
						  Ext.getCmp('loginid').destroy();
  
						  // Add the main view to the viewport
						  Ext.widget('app-main');
				  }
				  
			  }]
		  }
		  
	  ]
  });
  
  
  Ext.define('TutorialApp.view.main.center.CenterView', {
	  extend: 'Ext.Container',
	  xtype: 'centerview',
	  cls: 'centerview',
	  layout: 'card',
	  items: [tab2]
  });