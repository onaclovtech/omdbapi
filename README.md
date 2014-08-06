omdbapi
=======

Service for making omdbapi calls using their API

Additional Notes
=================
Using omdbapi in your own app is easy now.

Simply reference email in your module:

     var app = angular.module('myapp', ['video']);

and then $email in your controller:

     function MyController($scope, $video)
     
Finally request a book:

     $video.search("","",""); // matches the rottentomatoes api call (may change in the future)

If you'd like to create a service for another data provider

Right now we'll call this version 0.1 but eventually the send will be locked down for all future releases and we'll have a 1.0 release.
