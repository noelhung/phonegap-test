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
	
	registerEvents: function() {
	    var self = this;
	    // Check of browser supports touch events...
	    if (document.documentElement.hasOwnProperty('ontouchstart')) {
	        // ... if yes: register touch event listener to change the "selected" state of the item
	        $('body').on('touchstart', 'a', function(event) {
	            $(event.target).addClass('tappable-active');
	        });
	        $('body').on('touchend', 'a', function(event) {
	            $(event.target).removeClass('tappable-active');
	        });
	    } else {
	        // ... if not: register mouse events instead
	        $('body').on('mousedown', 'a', function(event) {
	            $(event.target).addClass('tappable-active');
	        });
	        $('body').on('mouseup', 'a', function(event) {
	            $(event.target).removeClass('tappable-active');
	        });
	    }
	    
	    $(window).on('hashchange', $.proxy(this.route, this));
	},
	
	route: function() {
	    var hash = window.location.hash;
	    if (!hash) {
	        $('body').html(new HomeView(this.store).render().el);
	        return;
	    }
	    var match = hash.match(app.detailsURL);
	    if (match) {
	        this.store.findById(Number(match[1]), function(employee) {
	            $('body').html(new EmployeeView(employee).render().el);
	        });
	    }
	},
	
	initialize: function() {
	    var self = this;
	    this.registerEvents();
	    this.detailsURL = /^#employees\/(\d{1,})/;
	    this.store = new MemoryStore(function() {
	        self.showAlert('Store Initialized', 'Info');
	    	self.route();
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

document.addEventListener("deviceready", onDeviceReady2, false);
function onDeviceReady2(){
app.showAlert("on device ready", "Error");
}