import User from '../models/user';
import Item from '../models/item';
import Trade from '../models/trade';

export function login(req) {
  return new Promise((resolve, reject) => {
    const UserName = req.body['userName'].trim();

    User.find({ UserName }).limit(1).exec()
    .then((user) => {
      if (user.length > 0) {
        resolve(user[0]);
      }
      else {
        User.create({ UserName }).then((newUser) => {
          resolve(newUser);
        });
      }
    });
  });
}

export function addItem(req) {
  return new Promise((resolve, reject) => {
    const item = req.body;

    Item.create(item).then((newItem) => {
      resolve(newItem);
    });
  });
}
