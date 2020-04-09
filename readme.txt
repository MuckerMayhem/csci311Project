INSTALL INSTRUCTIONS:

1. If you have access to the repository on github, check that the runner is in the "Idle" state 
   and then re-run the last action to have the runner auto-compile and upload the javascript portion of the project.

	1.1 If all that you have is the source files, or the runner is down, then the following dependencies are needed for install:
		Nodejs (https://nodejs.org/en/)
		npmjs  (https://www.npmjs.com/)
	1.2 Once installation of the dependencies is complete, navigate to the root of the project and execute the following command in terminal:
		'npm install'
	1.3 Once the command finishes, run the next command:
		'npm run build'
	1.4 Once building is complete, navigate to the 'dist' folder in the project root (If this isn't there, something went wrong!). 
	    These are the javascript/html/css files of the project. Upload them to public_html/ on the server.
	
2. Once all javascript/html/css files are on the server, then upload the 'server' folder to the server.
   The resulting directory structure at this stage should look like this:
	public_html/
			server/
			js/	
			css/
			media/
			img/
			index.html/
			config.php
			favicon.ico
3. Then, navigate to the 'sql' directory in the project root, upload these to the server and execute them from the MySQL Command Line to build the database.