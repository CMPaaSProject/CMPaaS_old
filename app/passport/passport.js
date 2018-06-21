module.exports = app => {
    const passport = require('passport');
    const LocalStrategy   = require('passport-local').Strategy;
    const JwtStrategy = require('passport-jwt').Strategy;
    const ExtractJwt = require('passport-jwt').ExtractJwt;

    const userModel = require('mongoose').model('User');

    //Security auth settings
    let extractors = [];
        extractors.push(ExtractJwt.fromHeader('x-access-token'));
        extractors.push(ExtractJwt.fromAuthHeaderAsBearerToken());
        extractors.push(ExtractJwt.fromBodyField('x-acceess-token'));
        extractors.push(ExtractJwt.fromAuthHeaderWithScheme('JWT'));
    
    let jwt_options = {
        secretOrKey: app.get('jwt_secret'),
        jwtFromRequest: ExtractJwt.fromExtractors(extractors)
    };

    passport.use(new JwtStrategy(jwt_options, function(jwt_payload, next) {
      userModel
          .findOne({_id: jwt_payload.id})
          .then(user => {
              if(!user) next(null, false);
              else next(null, user);
          }, error => {
              next(error, false);
          });
    }));

    passport.use(new LocalStrategy({passReqToCallback: true},
      function(req, username, password, done) {
        userModel.findOne({ username: req.body.username }, function(err, user) {
            if(err) return done(err, null, {message: 'User authentication error.'});
            if(!user) return done(null, false, {message: 'User authentication fail. Check your credentials.'});
            user.comparePassword(password, function(err, isMatch){
              if(err) return done(err, null, {message: 'User authentication error.'});
              if(!isMatch) return done(null, false, {message: 'User authentication fail. Wrong password.'});

              return done(null, user, {message: 'Authentication success.'});
            });
        });
      }
    ));
}