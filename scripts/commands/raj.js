const fs = require("fs");
module.exports.config = {
  name: "raj",
  version: "2.0.0",
  permission: 0,
  credits: "nayan",
  description: "",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("রাজ")==0 || (event.body.indexOf("raj")==0 || (event.body.indexOf("Raj")==0 || (event.body.indexOf("রাজ")==0)))) {
		var msg = {
				body: "রাজ বস এখন বিজি আছেন কি বলবেন আমাকে বলতে পারেন😻"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
