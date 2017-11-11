# How to use this repo
First clone this github repo and navigate to the project directory. Add your Twitter account credentials from https://apps.twitter.com by editing the config.js file with any text editor. Then follow the next steps.


# Installing required modules
In this node.js program, I used express and twitter modules. You can install the following modules with the following commands.

> npm install --save express

> npm install --save twitter




# Running the program
Then you can run the program with:
> npm start



By default the program runs on port 9111. You can go to http://localhost:9111/api/status/latest to see the output
> curl -i http://localhost:9111/api/status/latest