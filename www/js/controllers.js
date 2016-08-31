angular.module('starter').controller('ListagemController', function ($scope, CarroService) {

    CarroService.obterCarros().then(function (dados) {
        $scope.listaCarros = dados;
    });

}).controller('CarroEscolhidoController', function ($scope, $stateParams) {

    $scope.carroEscolhido = angular.fromJson($stateParams.carro);

    $scope.listaAcessorios = [{ nome: 'Alarmes', preco: 500 },
        { nome: 'Banco de Couro', preco: 2000 },
        { nome: 'Sistema Multimídia', preco: 900 }];

    $scope.isMarcado = false;

    $scope.mudou = function (acessorio, isMarcado) {

        if (isMarcado) {
            $scope.carroEscolhido.preco = $scope.carroEscolhido.preco + acessorio.preco;
        } else {
            $scope.carroEscolhido.preco = $scope.carroEscolhido.preco - acessorio.preco;
        }

    };

}).controller('FinalizarPedidoController', function ($scope, $stateParams, $ionicPopup, $state, CarroService) {

    $scope.carroPedido = angular.fromJson($stateParams.carroEscolhido);

    $scope.pedido = {};

    $scope.finalizarPedido = function () {

        var pedidoFinalizado = {

            params: {
                carro: $scope.carroPedido.nome,
                preco: $scope.carroPedido.preco,
                nome: $scope.pedido.nome,
                endereco: $scope.pedido.endereco,
                email: $scope.pedido.email
            }

        }

        CarroService.salvarPedido(pedidoFinalizado).then(function (mensagem) {

            $ionicPopup.alert({
                title: "Parabéns!",
                template: mensagem
            }).then(function () {
                $state.go('listagem');
            });

        }, function(erro) {

            $ionicPopup.alert({
                title: "Ocorreu uma falha!",
                template: "Observe os campos obrigatórios!"
            })

        });

    }

});