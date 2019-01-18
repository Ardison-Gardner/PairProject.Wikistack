//Modules
const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false
});

//Page model
const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  }
}, {
  hooks: {
    beforeValidate: (page) => {
      page.slug = generateSlug(page.title);
    }
  }
});

//User model
const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
});

//Slug generator
function generateSlug (title) {
  console.log('Title: ', title);
  return title.replace(/\s+/g, '_').replace(/\W/g, '');
}

//Exports
module.exports = {
  Page,
  User
};
