# discord-bot-crescent
a super awesome discord bot

## commands you can use

`/roll` Roll a six-sided dice


`/ping` Check bot latency

## setup

1. clone the repo and install dependencies:

   ```bash
   npm install
   ```

2. create `.env` file in the folder root:

   ```env
   DISCORD_TOKEN=bot-token
   CLIENT_ID=application-id
   ```

3. register the slash commands when changing or adding commands:

   ```bash
   node register-commands.js
   ```

4. start it with:

   ```bash
   npm start
   ```

## troubleshoot

- reload Discord if commands are missing.
