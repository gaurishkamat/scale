module.exports = {
  libraryServerPath: 'http://localhost:5000/',

  libraryTitle: "Scale Telekom Components",
  libraryDescription: "Scale Telekom Components design library",

  fontReplacer: function (jsonValue) {
    if (jsonValue === "system-ui") {
      return "TeleNeo";
    } else if (jsonValue === "-apple-system") {
      return "TeleNeo";
    } else if (/^TeleNeoWeb/.test(jsonValue)) {
      return jsonValue.replace(/^TeleNeoWeb/, "TeleNeo");
    }
  },
};
