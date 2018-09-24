module.exports = app => {
    const api = app.api.me;
    const authApi = app.api.auth;
    const multer = require('multer');
    const uuidv4 = require('uuid/v4');
    var storage = multer.diskStorage({
        destination: __dirname+"../../../public/profiles/",
        filename: function(req, file, cb){
            let extension = file.originalname.split('.')[1];
            let fileName = uuidv4();
            cb(null, fileName+'.'+extension);
        }
    });
    const upload = multer ({storage: storage});

    app
        .route(app.get('meApiRoute'))
        .get(authApi.authRequired, api.me)
        .put(authApi.authRequired, api.update);
    
    app
        .route(app.get('meApiRoute')+'/maps')
        .get(authApi.authRequired, api.myMaps);
    
    app
        .route(app.get('meApiRoute')+'/dashboard')
        .get(authApi.authRequired, api.dashboard);

    app
        .route(app.get('meApiRoute')+'/versions')
        .get(authApi.authRequired, api.myVersions);
    
    app
        .route(app.get('meApiRoute')+'/groups')
        .get(authApi.authRequired, api.myGroups)
    
    app
        .route(app.get('meApiRoute')+'/profileImage')
        .post(authApi.authRequired, upload.single('file'), api.myProfileImage)
}