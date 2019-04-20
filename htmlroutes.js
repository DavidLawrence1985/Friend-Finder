// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.




module.exports = function(app) {

    app.get("/survery", function(req, res){
        res.sendfile(path.join(__dirname, "survery.html"));
    });


    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "home.html"));
    });

   
  };