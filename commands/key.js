const inquirer = require("inquirer");
const colors = require("colors");
const KeyManager = require("../lib/KeyManager");
const { isRequired } = require("../utils/validation");

const key = {
  async set() {
    const keymanager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "key",
        message: "Enter API Key ".green + "https://nomics.com".blue,
        validate: isRequired,
      },
    ]);

    const key = keymanager.setKey(input.key);

    if (key) {
      console.log("API Key Set".blue);
    }
  },
  show() {
    try {
      const keymanager = new KeyManager();
      const key = keymanager.getKey();

      console.log("Current API Key ", key.yellow);

      return key;
    } catch (err) {
      console.error(err.message.red);
    }
  },
  remove() {
    try {
      const keymanager = new KeyManager();
      keymanager.deleteKey();

      console.log("Key Removed".blue);

      return;
    } catch (err) {
      console.error(err.message.red);
    }
  },
};

module.exports = key;
