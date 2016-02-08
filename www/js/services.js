angular.module('starter.services', ['ngResource'])

.factory("Shops", function($resource, baseUrl)
{
    return $resource(baseUrl+"shops/:id", {id: "@id"});
})


.factory("Products", function($resource, baseUrl)
{
    return $resource(baseUrl+"products/:id", {id: "@id"});
})