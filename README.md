# DESCRIPTION

This is an open-source independent web UI for interacting with OpenAI API in a chat-like manner.
The main purpose of the project is to replicate/extend ChatGPT functionality for testing and playground purposes,
while not being restricted by specific moderation/access decisions made on ChatGPT project.

Any replication, modification and repurposing of the codebase is welcome, as long as the original copyright
is credited.

***Please note*** that this UI accesses OpenAI models and infrastructure, just like ChatGPT. It does require 
creation of an OpenAI account, and while not explictly censored/moderated, can still lead to termination of that
account or other consequences where applicable.

Employing user discretion and common sense is therefore advised.

# INSTALLATION

## If yarn/npm already present

1. Install the required dependencies.
```bash
yarn install
```
or
```bash
npm install
```

2. Create a local ``` .env ``` file.

3. Add ```env API_KEY="{your_api_key}" ``` to the local ``` .env ``` file.

# USAGE

- For hot-reload development or an easy setup, run ```bash npm run start ``` or ```bash yarn start ``` depending on your package manager.

- To build minimized production code and artefacts, run ```bash npm run build ``` or ```bash yarn build ``` depending on your package manager.