const { faker } = require('@faker-js/faker');

faker.locale = 'en';

function generateUsers () {
  let users = [];
  for (var id = 0; id < 50; id++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const  password = faker.internet.password();
    const active = Math.round(Math.random());

    users.push({
      "id": id + 1,
      "first_name": firstName,
      "last_name": lastName,
      "email": email,
      "password": password,
      "is_active": active
    })
  }
  return { "users": users }
}
module.exports = generateUsers
