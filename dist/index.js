"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var user_route_1 = __importDefault(require("./routes/user.route"));
var typeorm_1 = require("typeorm");
var swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var app = (0, express_1.default)();
var port = process.env.PORT || 3000;
(0, typeorm_1.createConnection)();
// middlewares
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
// routes
app.use(user_route_1.default);
//swagger
var swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Ejemplo",
            version: "1.0.0"
        },
    },
    apis: ["./dist/controllers/**.js"]
};
var swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
