import Express from 'express';
import * as apiService from './ApiService';

let router = Express.Router();

router.post('/login', function(req, res) {
  apiService.login(req).then((user) => {
    req.session.currentUser = user;
    res.json(user);
  });
});

router.post('/logout', function(req, res) {
  req.session.currentUser = null;
  res.json("Successfully Logged Out!");
});

router.post('/addItem', function(req, res) {
  apiService.addItem(req).then((item) => {
    res.json(item);
  });
});

export default router;
