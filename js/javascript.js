angular.module("meusContatos",[]); 
angular.module("meusContatos").controller("meusContatosCtrl",function($scope){
    $scope.titulosContatos = "Lista de Contatos";
    $scope.contatos = [
        {nome: "Beatriz", telefone:   "11 970345345" },
        {nome: "Guilherme", telefone: "11 970361998" },
        {nome: "Neia", telefone:   "11 977483929" }
        ];
    $scope.cadastrarContato = function(contato){
        $scope.contatos.push(contato);
        delete $scope.contato;
    }
});