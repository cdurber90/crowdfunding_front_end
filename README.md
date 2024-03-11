

# Help a Healthcare Hero!

Are you a healthcare hero in need that is struggling to make ends meet? Or are you simply a good samaritan looking to donate to a struggling nurse, allied health professional, ambulance officer or paramedic? Look no further! Simply search a healthcare hero in need and donate!

A link to the deployed project.[ ] A screenshot of the homepage[ ] A screenshot of the project creation page[ ] A screenshot of the project creation form[ ] A screenshot of a project with pledges



### A link to the deployed project [x]:

[Help a Healthcare Hero](https://heartfelt-brigadeiros-5e5799.netlify.app/)


### A screenshot of the home page [x]:

![Homepage](https://github.com/cdurber90/crowdfunding_front_end/blob/main/src/assets/homepage.png?raw=true)

### A screenshot the project creation page [x]:

![Create Account](https://github.com/cdurber90/crowdfunding_front_end/blob/main/src/assets/create-account.png?raw=true)

## API Specification:


| Endpoint      | Method| Body                           | Authentication | Implemented? |
| ------------- | ----- | ---------------------------    | --- | --- |
| /projects/    | `GET `  | List of all project objects    | N | Y |
| /projects/    | `POST`  | Project object without ID      | Y | Y |
| /projects/PK  | `GET`   | Specific project object        | Y | Y |
| /projects/PK  | `PUT`   | Update specific project object | Y | Y |
| /pledges/     | `GET`   | List of all pledge objects     | N | Y |
| /pledges/     | `POST`  | Pledge object without ID       | Y | Y |
| /pledges/PK   | `GET`   | Specific pledge object         | N | Y |
| /pledges/PK   | `PUT`   | Update specific pledge object  | Y | Y |
| /users/       | `GET`   | List of all user obkects       | N | Y |
| /users/       | `POST`  | User object without ID         | N | Y |
| /users/PK     | `GET`   | Specific user object           | N | Y |
| /users/PK     | `PUT`   | Update specific user object    | Y | Y |



## Database Schema:

![Database Schema](https://github.com/cdurber90/crowdfunding_back_end/blob/main/images/Flowchart.png?raw=true)


