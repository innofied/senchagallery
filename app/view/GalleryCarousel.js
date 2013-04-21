Ext.define('SenchaGallery.view.GalleryCarousel', {
				extend : 'Ext.carousel.Carousel',
				xtype : 'gallerycarousel',
				requires : ['Ext.TitleBar'],
				config : {
								fullscreen : true,
								modal : true,
								html : '<div class="close-gallery" data-action="close_carousel"></div>',
								cls : 'gallery-carousel',
								showAnimation : 'popIn',
								hideAnimation : 'popOut',
								indicator : false,
								listeners : {
												// Call image count checker for each image change
												activeitemchange : function(carousel, newPanel){
																this.changeImageCount(newPanel);
												}
								}
				},
				
				initialize : function(){
								var me = this;
								
								// Create a bottom bar which will show the image count
								me.bottomBar = Ext.create('Ext.TitleBar', {
												xtype : 'titlebar',
												baseCls : Ext.baseCSSPrefix + 'infobar',
												name : 'info_bar',
												title : '',
												docked : 'bottom',
												cls : 'gallery-bottombar',
												items : [{
																xtype : 'button',
																align : 'left',
																iconCls : 'nav gallery-left',
																ui : 'plain',
																handler : function(){
																				me.previous();
																}
												}, {
																xtype : 'button',
																align : 'right',
																iconCls : 'nav gallery-right',
																ui : 'plain',
																handler : function(){
																				me.next();
																}
												}]
								});
								
								me.add(me.bottomBar);								
								me.callParent(arguments);
				},
				
				/**
				 * Change image count at bottom bar
				 */
				changeImageCount : function(activePanel){
								var me = this;								
								me.bottomBar.setTitle(activePanel.config.index + ' of ' + me.totalCount);
				}
});

