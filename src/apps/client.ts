// Arquivo principal da sessão do bot do Discord.
import { IntentsBitField, Client } from "discord.js";
import dotenv from "dotenv";
import path from "path";

// Demarcando a configuração do arquivo .env
dotenv.config({path: path.resolve(__dirname, "../.env")});

// Criando a instancia do cliente com todas as intents do discord.
const client = new Client( 
  {
    intents: new IntentsBitField(32767)
  }
);

// Dando inicio a Ukiu.
client.login(process.env.DISCORD_TOKEN);

// Exportando o bot do discord.
export { client };