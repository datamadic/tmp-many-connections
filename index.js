fin.desktop.main(init);

function init() {
    var angularCdn = 'http://local:3000/angular.js?parent_app=',
    	appUrl = 'http://local:8080/app.html',
        numAqusitions = 18,
        timeout = 3000,
        script, app, i;

    app = new fin.desktop.Application({
        name: 'app',
        uuid: 'app',
        autoShow: true,
        url: appUrl
    }, function() {
        app.run()
    });


    for (i = 0; i < numAqusitions;  i++) {
        script = document.createElement('script');
        script.src = angularCdn + i;
        document.body.appendChild(script);
    }
}
