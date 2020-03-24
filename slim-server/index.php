<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use Middlewares\TrailingSlash;

require __DIR__ . '/vendor/autoload.php';

$app = AppFactory::create();
$app->add(new TrailingSlash(false)); // remove trailing slashes

// GET /
$app->get('/', function (Request $request, Response $response, array $args) {
    // TODO serve the html for the react app instead of "Hello world!"
    $response->getBody()->write("Hello world!");
    return $response;
});

// GET /cards

// GET /cards/{id}

// POST /cards

// PATCH /cards/{id}

// DELETE /cards/all

// DELETE /cards/{id}


$app->addErrorMiddleware(true, false, false);
$app->run();
