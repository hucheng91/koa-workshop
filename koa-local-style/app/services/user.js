const User = require("../models/user");

async function findAll() {
    return User.findAll();
}
async function findById(id) {
    return User.findByPk(id);
}
async function add(name, email, imgUrl) {
    return User.create({ name, email, imgUrl });
}
async function remove(id) {
    const data = await User.destroy(id);
    return data;
}

module.exports = {
    findAll,
    findById,
    add,
    remove,
};
