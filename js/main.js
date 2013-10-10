var app = {

    findByName: function() {
        console.log('findByName');
        this.store.findByName($('.search-key').val(), function(employees) {
            var l = employees.length;
            var e;
            $('.employee-list').empty();
            for (var i=0; i<l; i++) {
                e = employees[i];
                $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
            }
        });
    },
    
    //Part 5: Use js to render HTML
    renderHomeView: function() {
        var html =
                "<div class='header'><h1>Home</h1></div>" +
                "<div class='search-view'>" +
                "<input class='search-key'/>" +
                "<ul class='employee-list'></ul>" +
                "</div>"
        $('body').html(html);
        $('.search-key').on('keyup', $.proxy(this.findByName, this));
    },
    
    //Part 4: Native Notification
    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        } 
    },
     
    
    initialize: function() {
        var self = this;
        if (false){
        	//Part 4: Native Notification
	        this.store = new MemoryStore(function() {
	        	//will run it after it has successfully initialized
	            self.showAlert('Store Initialized', 'Info');
	        });
	        $('.search-key').on('keyup', $.proxy(this.findByName, this));
	        
        }else{
        	
        	//Part 5: Use js to render HTML
	        this.store = new MemoryStore(function() {
	        	//use js to implement home view
	            self.renderHomeView();
	        });
        }
        
        
    }

};

app.initialize();