app.controller('MainController', function (FlashCardsFactory, $scope) {
    
    $scope.cardsLoading = true;

    $scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
    ];

    $scope.currentCategory = null;

    $scope.flashCards = [];

    $scope.getCategoryCards = function (theCategory) {
        $scope.cardsLoading = true;
        $scope.currentCategory = theCategory;
        FlashCardsFactory.getFlashCardsByCategory(theCategory).then(function (cards) {
            $scope.flashCards = cards;
            $scope.cardsLoading = false;

        });
    };

    $scope.getAllCards = function () {
        $scope.cardsLoading = true;
        $scope.currentCategory = null;
        FlashCardsFactory.getFlashCards().then(function (cards) {
            $scope.flashCards = cards;
            $scope.cardsLoading = false;

        });
    };

    $scope.getAllCards();

});