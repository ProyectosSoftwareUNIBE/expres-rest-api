"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userRoute = (0, express_1.Router)();
var user_controller_1 = require("../controllers/user.controller");
userRoute.get('/user', user_controller_1.getUser);
//userRoute.get('user/:id');
userRoute.post('/user', user_controller_1.createUser);
exports.default = userRoute;
