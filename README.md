# reusebuildingmaterials

## Backend and frontend 
The initial step consists in installing the required software which are needed to make the application function. These are as follows:
1.	Install NodeJS
To install Node, either the LTS version or the current version needs to be downloaded https://nodejs.org/en/. It is recommended to work with the latest version, as this would include the latest updates.
2.	Install a code editor
This is where all the codes will be entered later. Any code editor would work. Here, the approach is explained using the code editor 'Visual Studio code'.( https://code.visualstudio.com )

In the code editor, create a backend (server) and a frontend (client) folder, and then add all of the files and folders in the server and client files in this repository to the code editor. The command 'npm install' will install the node modules in the frontend and backend.

Once the required dependencies for both the backend and the frontend have been installed from the respective package. json files (for example using, 'npm i express body-parser cors mongoose'), run the command 'npm i nodemon' in the terminal to install 'nodemon' in the server folder. When some changes are made, this dependency will automatically restart the server. 


## Database
The steps to generate a MongoDB Atlas database are as follows: 
1.	Navigate to the MongoDB homepage and Signup to Atlas
2.	Enter the name of the project and organization
3.	Select the 'Shared Cluster' as the type of cluster from the options given. 
4.	Choose the cloud provider and region as needed and click on 'create cluster'.
5.	Click on 'Network access' and make the database public so that it can be accessed globally.

After the database in Atlas has been built, the next step is obtaining a connection string so that the application may connect to the database. The following are the steps that need to be followed:
1.	Click on the connect button and choose 'connect your application'.
2.	Choose then 'NodeJS' as the driver and select the version running on the system.
3.	Underneath 'Add your connection string into your application code’ the connection string will be visible.
4.	Copy the connection string and paste it into the server folder in a .env file and replace the <username>, <password> and <myFirstDatabase> with the respective information.


## Deployment
Deployment of the backend to Heroku (https://www.heroku.com): Sign in to Heroku and download the Heroku CLI. Create a new Heroku app and enter the commands displayed on Heroku's deploy page in the terminal. Push the entire backend to Heroku after committing the changes. In the frontend, replace the local port with the new Heroku url.

Deployment of the frontend to Netlify (https://www.netlify.com): Create a Netlify account and a new site. Run the command 'npm run build' to build the frontend in the client terminal. Drag the build folder onto the newly created netlify page.
