# Jasmine Angular example

Required installed NodeJS and Bower


## Build frontend

`cd jasmine`

`npm i && bower i`


## Start server

`gulp browser-sync`

[http://localhost:3000/#/](http://localhost:3000/#/)


## Webstorm karma unit tests run

Run -> Edit configurations 

Name: All tests

Configuration file: ...\unit-tests-example\jasmine\test\unit\karma.conf.js

Node interpreter: path\to\node.exe

Karma package: ...\unit-tests-example\jasmine\node_modules\karma

Save and execute Run -> Run 'All tests' (Shift + F10)
