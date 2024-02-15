const bcrypt = require("bcryptjs");
const User = require("../models/User");
const gravatar = require("gravatar");
const normalize = require("normalize-url");

function createAdmin() {
  // Check if admin user exists, if not, create one
  User.findOne({ name: "admin" }, async (err, existingAdmin) => {
    if (err) {
      console.error(err);
      return;
    }

    if (!existingAdmin) {
      // Encrypt the password
      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash("123456", salt);

      const avatar = normalize(
        gravatar.url("admin@admin.com", {
          s: "200",
          r: "pg",
          d: "mm",
        }),
        { forceHttps: true }
      );

      // Create admin user
      const adminUser = new User({
        name: "admin",
        email: "admin@admin.com",
        password: password,
        avatar: avatar,
        isAdmin: true,
      });

      adminUser.save((err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Admin user created successfully.");
      });
    } else {
      console.log("Admin user already exists.");
    }
  });
}

module.exports = createAdmin;
