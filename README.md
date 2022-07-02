# reusebuildingmaterials

Installation

## Database
The steps to generate a MongoDB Atlas database are as follows: remove steps
1.	Navigate to the MongoDB homepage and Signup to Atlas
2.	Enter the name of the project and organization
3.	Select the ‘Shared Cluster’ as the type of cluster from the options given. 
4.	Choose the cloud provider and region as needed and click on ‘create cluster’. The creation of the cluster will take a few minutes.
5.	Click on ‘database access’ and click on ‘add new user’. Select the password authentication and enter username and password.
6.	Click on ‘Network access’ and make the database public so that it can be accessed globally.

After the database in Atlas has been built, the next step is obtaining a connection string so that the application may connect to the database. The following are the steps that need to be followed:
1.	Click on the connect button and choose ‘connect your application’.
2.	Choose then ‘NodeJS’ as the driver and select the version running on the system.
3.	Underneath ‘Add your connection string into your application code’ the connection string will be visible.
4.	Copy the connection string and paste it into the code editor and replace the <username>, <password> and <myFirstDatabase> with the respective information.
  
After completing these steps, the connection string is generated using MongoDB Atlas and the connection to the database is established. The information that is entered via the frontend of the website will, henceforth, be saved directly to the database. In addition, any changes made to entries, such as additions or deletions, will result in those changes being reflected in the database.


## Frontend and backend

## Deployment
Backend deployment Heroku: Login to Heroku and install the Heroku CLI. In the terminal, enter the commands displayed on Heroku's deploy page. After committing the changes, push the entire backend to Heroku. Replace the local port in the frontend with the new Heroku url.

Frontend deployment Netlify: Create an account and a new site on Netlify. Build the frontend by running running the command 'npm run build'. Drag and drop the build folder onto the created netlify page.

