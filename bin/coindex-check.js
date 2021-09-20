const { program } = require("commander");
const check = require("../commands/check");

program
  .command("price")
  .description("Check price of Cryptocurrency")
  .option(
    "--coin <type>",
    "Add Specific Coin Types in CSV Format",
    "BTC,ETH,XRP"
  )
  .option("--cur <currency>", "Change The Currency", "USD")
  .action((cmd) => check.price(cmd));
program.parse(process.argv);
