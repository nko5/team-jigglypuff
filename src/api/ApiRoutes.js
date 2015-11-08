import Express from 'express';
import * as apiService from './ApiService';

let router = Express.Router();

router.post('/login', function(req, res) {
  apiService.login(req).then((user) => {
    req.session.currentUser = user;
    res.json(user);
  });
});

export default router;
