app.controller('MainController', function($scope){
    $scope.szoveg = "Így működnek a változók az Angularban"
    console.log($scope.szoveg)

    $scope.emberek = [
        { nev: 'Wick', eletkor:20, csajok:['Bridget']},
        { nev: 'Lucifer', eletkor:10000, csajok:['Detective', 'Milliok']},
        { nev: 'Ragnar', eletkor:30, csajok:['Lagherta', 'Aslaugh']},
        { nev: 'Bulgasal', eletkor:600, csajok:['Min Si-ho']}
    ]
})