angular.module('starter')
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('listagem');

    $stateProvider
    .state('listagem', {
        url: '/listagem',
        templateUrl: 'templates/listagem.html',
        controller: 'ListagemController'
    }).state('carroescolhido', {
        url: '/carroescolhido/:carro',
        templateUrl: 'templates/carro-escolhido.html',
        controller: 'CarroEscolhidoController'
    }).state('finalizarpedido', {
        url: '/finalizarpedido/:carroEscolhido',
        templateUrl: 'templates/finalizar-pedido.html',
        controller: 'FinalizarPedidoController'
    });

})