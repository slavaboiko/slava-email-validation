import express from "express";
import bodyParser from "body-parser";

// Controllers (route handlers)
import * as validationRoutes from "./controllers/validation";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json({
    type: function() {
        return true;
    }
}));
app.use(bodyParser.urlencoded({extended: true}));

/**
 * Routes.
 */
app.post("/email/validate", validationRoutes.emailValidation);

export default app;
