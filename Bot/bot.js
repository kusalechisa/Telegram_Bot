const { Telegraf } = require("telegraf");
const TOKEN = "7444271355:AAGO5uwQrxJ0JE5AyP-OvjUeNe-UtT4GlKo";
const bot = new Telegraf(TOKEN);

const web_link = "https://kusarestaurantbot.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome to Our Restaurant:", {
    reply_markup: {
      keyboard: [[{ text: "Open Web", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
