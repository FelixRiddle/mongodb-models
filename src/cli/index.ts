import yargs from "yargs";

/**
 * Run commands
 */
async function cli() {
	const argv = yargs(process.argv.slice(2))
		.usage("Usage: $0 <command> [options]")
		.command(
			"greet",
			"Greets a person",
			(yargs) => {
				return yargs
					.option("name", {
						alias: "n",
						type: "string",
						demandOption: true,
						describe: "Name of the person to greet",
					})
					.option("times", {
						alias: "t",
						type: "number",
						default: 1,
						describe: "Number of times to greet",
					});
			},
			(argv) => {
				for (let i = 0; i < argv.times; i++) {
					console.log(`Hello, ${argv.name}!`);
				}
			}
		)
		.help().argv;
}

cli();
