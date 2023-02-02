# Tech-Blog
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## This is a blog for users to post their thoughts on all things tech-y.
## Table of Contents:
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Testing](#tests)
- [Questions](#questions)
## Installation 
Clone the repository from GitHub onto your machine in a local folder. This program will require Node.js and MySQL. Install node.js: [Installation Guide](https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs). Install MySQL: [Installation Guide](https://coding-boot-camp.github.io/full-stack/mysql/mysql-installation-guide). From the root of the project folder do an npm (Node Package Manager) install to get the package dependencies (type `npm install` on the command line). Dependecies used are: express.js, express-handlebars, express-session, mysql2, sequleize, dotenv, bcrypt, jest, and connect-session-sequleize.
## Usage 
Step one: From the command line enter into MySQL using the command `mysql -u root -p` and then enter your password. Step two: Enter `source db/schema.sql` to initialize the daatabase. Exit MySQL. Step three (optional): Seed the database using the command: `node seeds/index.js`. Step four: Enter `npm start` to start the server. Step five: Enter localhost:3001 in your browser. Voila! 

## License 
&copy; 2022 by Amy McCabe. 
This project is licensed under the MIT license.
https://opensource.org/licenses/MIT  
## Contributing 
To contribute to this project please make a new issue or pull request. 
## Tests 
Follow the usage instructions for seeding the project.
## Questions 
Contact me at: [mcca0168@umn.edu](mailto:mcca0168@umn.edu) or [GitHub](https://github.com/McAmy2001/)
