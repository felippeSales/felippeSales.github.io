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
    
    
    $urlRouterProvider.otherwise('/About');
    
    /*

    $stateProvider.state('Perfil', {
        url: "/Perfil/:id_usuario",
        templateUrl: "/static/pages/perfil.html",
        controller: 'PerfilCondominoController'
    });

    $stateProvider.state('QuadroDeAvisos', {
        url: "/QuadroDeAvisos",
        templateUrl: "/static/pages/quadro.html",
        controller: 'QuadroDeAvisosController'
    });

    $stateProvider.state('ListarCondominos', {
        url: "/Listar",
        templateUrl: "/static/pages/listar.html",
        controller: 'ListarCondominosController'
    });

    $stateProvider.state('Chat', {
        url: "/Chat",
        templateUrl: "/static/pages/chat.html",
        controller: 'ChatController'
    });

    $stateProvider.state('Forum', {
        url: "/Forum",
        templateUrl: "/static/pages/forum.html",
        controller: 'ForumController'
    });

    $stateProvider.state('Comentarios', {
        url: "/Comentarios/:id_discussao",
        templateUrl: "static/pages/forum_post.html",
        controller: "ComentariosController",
        params: {
            discussao: null
        }
    });

    $stateProvider.state('Notificacoes', {
        url: "/Notificacoes",
        templateUrl: "/static/pages/notificacoes.html",
        controller: 'QuadroDeAvisosController'
    });

    $stateProvider.state('Calendario', {
        url: "/Calendario",
        templateUrl: "/static/pages/calendario.html",
        controller: 'CalendarioController'
    });

    $stateProvider.state('GerenciarEspacoComum', {
        url: "/GerenciarEspacoComum",
        templateUrl: "/static/pages/gerenciar_espaco_comum.html",
        controller: 'GerenciarEspacoComumController'
    });

    $stateProvider.state('ReservarEspacoComum', {
        url: "/ReservarEspacoComum",
        templateUrl: "/static/pages/reservar_espaco_comum.html",
        controller: 'ReservarEspacoComumController'
    });
*/
});
