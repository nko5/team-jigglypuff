import User from '../models/user';

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
