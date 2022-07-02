# reusebuildingmaterials

## Backend and frontend 
The initial step consists in installing the required software which are needed to make the application function. These are as follows:
1.	Install NodeJS
To install Node, either the LTS version or the current version needs to be downloaded https://nodejs.org/en/. It is recommended to work with the latest version, as this would include the latest updates.
2.	Install a code editor
This is where all the codes will be entered later. Any code editor would work. In this thesis, the approach is explained using the code editor “Visual Studio code”.( https://code.visualstudio.com )

Create a backend (server) and a frontend (client) folder in the code editor and add all the files and folders in the server and client file in this repository to the code editor. Install the node modules in the frontend and backend with the command 'npm install'. 

Ones the required dependencies have been installed for both backend and frontend from the respective package.json files (eg: using the command 'npm i express body-parser cors mongoose'), the code 'npm i nodemon' can be entered into the terminal to install 'nodemon' in the server folder. This dependency will automatically restart the server whenever some changes are made.


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
3.	Underneath 'Add your connection string into your application code’ the connection string will be visible'
4.	Copy the connection string and paste it into the server folder in a .env file and replace the <username>, <password> and <myFirstDatabase> with the respective information.


## Deployment
Backend deployment Heroku: Login to Heroku and install the Heroku CLI. In the terminal, enter the commands displayed on Heroku's deploy page. After committing the changes, push the entire backend to Heroku. Replace the local port in the frontend with the new Heroku url.

Frontend deployment Netlify: Create an account and a new site on Netlify. Build the frontend by running running the command 'npm run build'. Drag and drop the build folder onto the created netlify page.
