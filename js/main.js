var app = {

	findByName : function() {
		console.log('findByName');
		this.store.findByName($('.search-key').val(), function(employees) {
			var l = employees.length;
			var e;
			$('.employee-list').empty();
			for ( var i = 0; i < l; i++) {
				e = employees[i];
				$('.employee-list').append(
						'<li><a href="#employees/' + e.id + '">' + e.firstName
								+ ' ' + e.lastName + '</a></li>');
			}
		});
	},

	
	// Part 3: Native Notification
	showAlert : function(message, title) {
		if (navigator.notification) {
			navigator.notification.alert(message, null, title, 'OK');
		} else {
			alert(title ? (title + ": " + message) : message);
		}
	},

	initialize: function() {
	    var self = this;
	    this.store = new MemoryStore(function() {
	        $('body').html(new HomeView(self.store).render().el);
	    });

	    
		
	}
	/*
	this.homeTpl = Handlebars.compile($("#home-tpl").html());
	this.employeeLiTpl = Handlebars.compile($("#employee-li-tpl").html());

    this.store = new MemoryStore(function() {
        self.renderHomeView();
    });
    
    
	// Part 3: Native Notification
		// Part 3: Native Notification
		this.store = new MemoryStore(function() {
			// will run it after it has successfully initialized
				self.showAlert('Store Initialized', 'Info');
			});
		$('.search-key').on('keyup', $.proxy(this.findByName, this));

	
	// Part 4: Use single page application

		this.store = new MemoryStore(function() {
			// use js to implement home view
				self.renderHomeView();
			});

	// Part 4: Use single page application
	renderHomeView : function() {
		var html = "<div class='header'><h1>Home</h1></div>"
				+ "<div class='search-view'>" + "<input class='search-key'/>"
				+ "<ul class='employee-list'></ul>" + "</div>"
		$('body').html(html);
		$('.search-key').on('keyup', $.proxy(this.findByName, this));
	},*/

};

app.initialize();