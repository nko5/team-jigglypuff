import User from '../models/user';

export function login(req) {
  return new Promise((resolve, reject) => {
    const UserName = req.body['userName'].trim();

    User.findOne({ UserName }).exec()
    .then((user) => {
      if (user.length > 0) {
        resolve(user);
      }
      else {
        User.create({ UserName }).then((newUser) => {
          resolve(newUser);
        });
      }
    });
  });
}
