import express from "express";
import homeController from "../controllers/homeController.js";

let Router = express.Router();

let initWebRoutes = (app) => {
  Router.get("/", homeController.getHomePage);
  Router.get("/about", homeController.getAboutPage);
  return app.use("/", Router);
};
export default initWebRoutes;
