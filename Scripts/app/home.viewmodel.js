function Movie(data) {
    this.title = ko.observable(data.title);
    this.year = ko.observable(data.year);
    this.like = ko.observable(data.like);
    this.dislike = ko.observable(data.dislike);
    this.genre = ko.observable(data.genre);
    this.id = ko.observable(data.id);
}

function MovieViewModel(app, dataModel) {
    var self = this;

    self.movies = ko.observableArray([]);
    self.title = ko.observable("");
    self.year = ko.observable("");
    self.genre = ko.observable("");
    self.like = ko.observable();
    self.dislike = ko.observable();
    self.newTitle = ko.observable("");
    self.newYear = ko.observable("");
    self.newGenre = ko.observable("");

    Sammy(function () {
        this.get('#home', function () {
            $.ajax({
                method: 'get',
                url: '/api/movies',
                contentType: "application/json; charset=utf-8",
                headers: {
                    'Authorization': 'Bearer ' + app.dataModel.getAccessToken()
                },
                success: function (data) {
                    var mappedMovies = $.map(data, function (item) { return new Movie(item) });
                    self.movies(mappedMovies);
                }
            });
        });
        this.get('/', function () { this.app.runRoute('get', '#home'); });
    });

    this.saveMovie = function () {
        var model = { 'Title': this.newTitle(), 'Year': this.newYear(), 'Genre': this.newGenre(), 'Like': '0', 'Dislike': '0' };
        $.ajax({
            method: 'POST',
            url: '/api/Movies',
            data: JSON.stringify(model),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                self.movies.push(new Movie(data));
                self.newTitle("");
                self.newYear("");
                self.newGenre("");
            }
        });
    };

    self.likeMovie = function (item) {
        item.like(item.like() + 1);
        var model = { 'ID': item.id(), 'Title': item.title(), 'Year': item.year(), 'Genre': item.genre(), 'Like': item.like(), 'Dislike': item.dislike() };

        $.ajax({
            method: 'PUT',
            url: '/api/Movies/' + item.id(),
            data: JSON.stringify(model),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
               //do something
            }
        });
    };
    this.dislikeMovie = function (item) {
        item.dislike(item.dislike() + 1); 
        var model = { 'ID': item.id(), 'Title': item.title(), 'Year': item.year(), 'Genre': item.genre(), 'Like': item.like(), 'Dislike': item.dislike() };

        $.ajax({
            method: 'PUT',
            url: '/api/Movies/' + item.id(),
            data: JSON.stringify(model),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                //do something
            }
        });
    };

    return self;
}



app.addViewModel({
    name: "Home",
    bindingMemberName: "home",
    factory: MovieViewModel
});
