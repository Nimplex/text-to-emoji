const { Plugin } = require("powercord/entities");

function texttoemoji(v) {
  v = v
    .replace(/ź/gm, "z")
    .replace(/ż/gm, "z")
    .replace(/ą/gm, "a")
    .replace(/ę/gm, "e")
    .replace(/ś/gm, "s")
    .replace(/ó/gm, "o")
    .replace(/ń/gm, "n")
    .replace(/\?/gm, "❓ ")
    .replace(/\!/gm, "❗ ");

  v = v
    .replace(/1/gm, "1️⃣ ")
    .replace(/2/gm, "2️⃣ ")
    .replace(/3/gm, "3️⃣ ")
    .replace(/4/gm, "4️⃣ ")
    .replace(/5/gm, "5️⃣ ")
    .replace(/6/gm, "6️⃣ ")
    .replace(/7/gm, "7️⃣ ")
    .replace(/8/gm, "8️⃣ ")
    .replace(/9/gm, "9️⃣ ")
    .replace(/0/gm, "0️⃣ ");
  v = v
    .replace(/a/gm, "🇦 ")
    .replace(/b/gm, "🇧 ")
    .replace(/c/gm, "🇨 ")
    .replace(/d/gm, "🇩 ")
    .replace(/e/gm, "🇪 ")
    .replace(/f/gm, "🇫 ")
    .replace(/g/gm, "🇬 ")
    .replace(/h/gm, "🇭 ")
    .replace(/i/gm, "🇮 ")
    .replace(/j/gm, "🇯 ")
    .replace(/k/gm, "🇰 ")
    .replace(/l/gm, "🇱 ")
    .replace(/m/gm, "🇲 ")
    .replace(/n/gm, "🇳 ")
    .replace(/o/gm, "🇴 ")
    .replace(/p/gm, "🇵 ")
    .replace(/q/gm, "🇶 ")
    .replace(/r/gm, "🇷 ")
    .replace(/s/gm, "🇸 ")
    .replace(/t/gm, "🇹 ")
    .replace(/u/gm, "🇺 ")
    .replace(/v/gm, "🇻 ")
    .replace(/w/gm, "🇼 ")
    .replace(/x/gm, "🇽 ")
    .replace(/y/gm, "🇾 ")
    .replace(/z/gm, "🇿 ");
  return v;
}

module.exports = class ToEmoji extends Plugin {
  startPlugin() {
    this.registerCommand(
      "texttoemoji",
      ["emoji"],
      "text to emoji\nAlias: `emoji`",
      "{c} [ text ]",
      args => ({
        send: true,
        result: texttoemoji(args.join(" "))
      })
    );
  }
};
