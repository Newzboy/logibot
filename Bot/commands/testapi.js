module.exports = {
	name: 'testapi',
	description: 'Test of Host.io API',
	guildOnly: false,
  args: true, 
  execute(message, args) {
    message.send.reply(`Working on getting a free API haha. Arg test ${args}. CrossENV Check {ipapikey}`)
  }
};