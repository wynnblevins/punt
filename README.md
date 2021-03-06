## Heroku Deployment
View the live version of this app [here](https://peaceful-plains-44637.herokuapp.com/)

## Prerequisites
In order to run the PUNT prediction program, you need to have a set of credentials for the mysportsfeed.com API.  Also, you will need MongoDB, Yarn and Node installed on your development machine.

## To Run Locally
If your local MongoDB service isnt running, you will need to start it by running the following command: 
`service mongod start`
Next, you will need to install node modules through yarn by typing the following:
`yarn install`
Finally, start your local development server with yarn by running: 
`yarn start`
The application will now be live on [localhost:3000](http://localhost:3000)

## How To Debug
Assuming dependencies are installed, run the following:
`yarn client`
...this will start the front end application.  Next, to start the backend, from within Visual Studio Code, open the server/server.js file and select debug->start debugging.  Again, the application will be on localhost:3000 but one can debug the application by placing breakpoints inside their VSCode window.  