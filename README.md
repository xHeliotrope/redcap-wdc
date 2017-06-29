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
 * if that worked type `git clone https://github.com/xHeliotrope/redcap-wdc.git`
 * some downloading text should appear, once thats done, type `cd redcap-wdc`
 * type `npm install`
 * type `node app.js`
 * if Tableau is running on your computer(version 9 or later) click on the **web data connector** datasource
 * navigate to [localhost:3000](localhost:3000) in the window that pops up
 * enter in your REDCap URL and API Key
 * click submit
 * enjoy!
 
 ## for Linux/Unix(Mac)
 * install [node](https://nodejs.org/en/download/)
 * open up your terminal
 * `git clone https://github.com/xHeliotrope/redcap-wdc.git`
 * `cd redcap-wdc`
 * `npm install`
 * `node app.js`
 * if Tableau is running on your computer(version 9 or later) click on the **web data connector** datasource
 * navigate to [localhost:3000](localhost:3000) in the window that pops up
 * enter in your REDCap URL and API Key
 * click submit
 * enjoy!
