# REDCap + Tableau
REDCap Web Data Connector for Tableau

## For Windows users

 * make a directory on your computer to run the server
   - ex. `C:\Users\Sarah\SarahsTableauConnector`
 * install [git-bash](https://git-scm.com/download/win)
 * install [node](https://nodejs.org/en/download/)
 * open up git bash
 * move your current directory to the directory you made above
   - ex. in git-bash, type `cd C:\Users\Sarah\SarahsTableauConnector` 
 * make sure node is working by typing `node --version` into git-bash
   - you should get a value like *v6.10.3* on the next line
 * if that worked type git clone https://github.com/xHeliotrope/redcap-wdc.git
 * some downloading text should appear, once thats done, type `cd redcap-wdc`
 * type `npm install`
 * type `node app.js`
 * in a web browser, go to [localhost:3000](localhost:3000)
 * if Tableau is running on your computer, then enter in your REDCap URL and API Key
 * click submit
 * enjoy!


## For Developers

#### Testing in the simulator
 
 * have node
 * clone this repo
 * `npm install` in root dir
 * `node app.js`
 * enter API Token(recieved from REDCap admin for your project)
 * enter REDCap API URL
 * Click submit


