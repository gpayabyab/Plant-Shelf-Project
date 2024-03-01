//The following middleware function is designed for routes requiring authentication in the application.
// It intercepts incoming requests, checks whether the user is logged in, and redirects the user to 
// the login page if they are not authenticated.

const withAuth = (req, res, next) => {

    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  