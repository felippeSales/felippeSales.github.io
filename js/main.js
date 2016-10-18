var app = angular.module('FelipeSite', ['ui.router']);

app.run(function () {
    console.log("Setting up angular!!");
});

app.config(function ($stateProvider, $urlRouterProvider) {
    
    
    $stateProvider.state('About', {
        url: "/About",
        templateUrl: "/templates/about.html",
    });
    
    $stateProvider.state('Experience', {
        url: "/Experience",
        templateUrl: "/templates/experience.html",
    });
    
    $stateProvider.state('Skills', {
        url: "/Skills",
        templateUrl: "/templates/skills.html",
    });
    
    $stateProvider.state('Portfolio', {
        url: "/Portfolio",
        templateUrl: "/templates/portfolio.html",
    });
    
    $urlRouterProvider.otherwise('/About');
    
});
