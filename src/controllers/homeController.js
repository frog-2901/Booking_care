class homeController {
  getHomePage = (req, res) => {
    return res.render("homePage.ejs");
  };
  getAboutPage = (req, res) => {
    return res.render("aboutPage.ejs");
  };
}

export default new homeController();
