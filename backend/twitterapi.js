const express = require('express');
const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const session = require('express-session');

const app = express();

// Configure session
app.use(session({
  secret: 'your_secret_key',
  resave: true,
  saveUninitialized: true
}));

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Twitter API credentials
const twitterConfig = {
  consumerKey: 'KkuZyhi2fkg881gGFq4YMUljW',
  consumerSecret: '47W0rsWiIeGj6a3GMHh4xVGLe6xpgeZtN8FNgiJYrJmoee1W2F',
  callbackURL: 'http://localhost:3000/auth/twitter/callback' // Update the callback URL
};

// Serialize user into the session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user from the session
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

// Use Twitter strategy for login
passport.use(new TwitterStrategy(twitterConfig,
  (token, tokenSecret, profile, done) => {
    // Save the user profile to session
    return done(null, profile);
  }
));

// Middleware to check if the user is authenticated
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

// Route for Twitter login
app.get('/auth/twitter', passport.authenticate('twitter'));

// Callback route after Twitter has authenticated the user
app.get('/auth/twitter/callback',
  passport.authenticate('twitter', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/');
  }
);

// Route to display user information after login
app.get('/', ensureAuthenticated, (req, res) => {
  res.json(req.user);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
