(function () {
    let society = document.querySelector("#society");
    let create = document.querySelector("#create");
    let utils = window.app.Utils;
    let activatedRoutes = {};

    let routeConfig = {
        "": {
            show: () => {
                utils.showView(society);
                utils.hideAllView([create]);
            },
            init: () => {
                let model = new window.app.Model();
                let view = new window.app.View();
                new window.app.Controller(model, view);

            }
        },
        "society": {
            show: () => {
                utils.showView(society);
                utils.hideAllView([create]);
            },
            init: () => {
                let observer = new window.app.Observer();
                let model = new window.app.Model();
                let view = new window.app.View();
                new window.app.Controller(model, view, observer);
            }
        },
        "create": {
            show: () => {
                utils.showView(create);
                utils.hideAllView([society]);
            },
            init: () => {
                let observer = new window.app.Observer();
                let model = new window.app.Model();
                let view = new window.app.View();
                new window.app.Controller(model, view, observer);
            }
        }
    };

    function updateRoute() {
        let routeName = document.location.hash.replace(/^#/, '');
        if (activatedRoutes[routeName]) {
            activatedRoutes[routeName]();
        } else {
            let route = routeConfig[routeName];
            if (route) {
                route.init();
                route.show();
                activatedRoutes[routeName] = route.show;
            }
        }
    }

    window.app = window.app || {};
    window.app.Router = {
        updateRoute: updateRoute
    };
}());