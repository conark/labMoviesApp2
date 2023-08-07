
# Full Stack Development 2 - Assignment.

__Name:__ Natsumi Shimizu

## Features.

[A bullet-point list of the features developed for the React SPA app (only new/modified ones for the Movies app),]

+ Popular Movie List
+ Top Rated List
+ Must Watch Icon/List
+ Create own movie
+ Display created movie
+ Actor's List
+ Favourite Actors List
+ Filter with actor's name
+ Sort movies by rating dec/asc

## Feature Design.


### Popular Movie List

> Lists movies from the popular movies endpoint of TMDB.

![][01image]

### Top Rated List

> Lists movies from the toprated movies endpoint of TMDB.

![][02image]


### Must Watch Icon/List

> when playlist icon cliked on the upcoming page, playlist icon display on movie card header

![][03image]

> Display Must watch movies

![][04image]

### Create own movie

> Create own movies form save to moviesContext

![][05image]

### Display created movie

> Display created movie

![][06image]


### Actor's List

> Lists actors from the persons endpoint of TMDB.

![][07image]


### Favourite Actors List

> Lists favourite actors

![][08image]


### Filter by actor's name

> filter by actor's name from the persons endpoint of TMDB.


![][09image]

### Sort movies by rating dec/asc

> filter by actor's name from the sort endpoint of TMDB.


> sort by dec

![][10image]

> sort by asc

![][11image]




## Routes 

[List all the routes in your app and highlight those that are protected/private (require authentication).]

+ "/reviews/:id"(Protected) - Specific full text of a movies review
+ "/movies/favourites" - List of favourite Movies
+ "/movies/playlists" - List of Must watch(playlist) Movies
+ "/movies/upcoming" - List of upcoming Movies from the upcoming endpoint,
+ "/movies/popular" - List of popular Movies from the popular endpoint,
+ "/movies/toprated" - List of popular Movies from the top rate endpoint,
+ "/movies/:id" (Protected) - Detailed information of a specific movie.
+ "/" - Home page
+ "*" - navigate to homepage
+ "/reviews/form" - form for add review , using context
+ "/actors/:id"(Protected) - A specific actor's bio.
+ "/movies/actors/" - List of actors from the person endpoint,
+ "/movies/favouriteactors/" - List of favourite Movies
+ "/movies/addmovie/" - form for add own movie ,using context
+ "/movies/mymovie/" - List of created Movies





[01image]: ./images/01image.png
[02image]: ./images/02image.png
[03image]: ./images/03image.png
[04image]: ./images/04image.png
[05image]: ./images/05image.png
[06image]: ./images/06image.png
[07image]: ./images/07image.png
[08image]: ./images/08image.png
[09image]: ./images/09image.png
[10image]: ./images/10image.png
[11image]: ./images/11image.png