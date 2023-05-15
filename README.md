Screenshots of our pages are as follows:
# Login Page
![login page](https://github.com/MQCOMP3120/group-project-group-aa/blob/main/SCREENSHOTS/LoginPage.png)
# Sign Up Page
![register page](https://github.com/MQCOMP3120/group-project-group-aa/blob/main/SCREENSHOTS/SignUpPage.png)
# Program Page
![program page](https://github.com/MQCOMP3120/group-project-group-aa/blob/main/SCREENSHOTS/ProgramPage.png)
# Day Page
![day page](https://github.com/MQCOMP3120/group-project-group-aa/blob/main/SCREENSHOTS/DayPage.png)
# Day Page (Expanded View)
![day page expanded](https://github.com/MQCOMP3120/group-project-group-aa/blob/main/SCREENSHOTS/DayPage_Expanded.png)
# Edit Program Page
![edit program page](https://github.com/MQCOMP3120/group-project-group-aa/blob/main/SCREENSHOTS/EditProgramPage.png)
# Edit Day Page
![edit day page](https://github.com/MQCOMP3120/group-project-group-aa/blob/main/SCREENSHOTS/EditDayPage.png)


## An outline of the application you were aiming to build, target users, data sources etc (similar to the proposal)
The main purpose of our application is to provide an easy way for the user to create and record gym workouts, seeing progressive overload over time. The goal of the application is for the experience to be as simple and distraction free as possible, allowing the user to put their focus into the current workout.
Our target audience is gym-goers with a little bit of experience in following a program who need a simple and intuitive way of recording their progress. Our target audience probably isn’t first time gym goers who need guidance on programs or technique as our focus will not be on providing a program or recommendations.
Our project is mainly frontend focused, however, we have a simple backend set up that lists programs, days as children of programs and exercises as children of days. 

## A description of what you have been able to implement in this MVP, use your milestones to highlight what you've achieved
What we have achieved for our Gym Application project “FitTrackr” is firstly we have implemented a login page and the ability for our user to sign up to the application for the use of viewing the exercises they want to complete for each day and to create new programs if they want to try new workouts.  In Week 8 for the week 9 milestone our group started to create the frontend of our application and built a generic framework of each page to be eventually linked together in the upcoming weeks. Each group member was assigned a page on our program to work on that included implementing front end features for each page that were necessary for our gym application. During this milestone we planned to create a generic database to hold our data however we all agreed to first create our frontend functions first because moving on to different areas of functionality for our application. During the week 9 to week 10 milestone our group continued to create our frontend code and by the end of this milestone each frontend component for each page were fully functional and complete. We also linked all pages together so we understood where on the application each page is linked together and the functionality of how the user will interact with the application. We had our backend and frontend during this milestone with only minimal functionality that was aimed for our group in the group proposal. However our generic database was not yet built and was aimed to be complete for the milestone. For the Week 10 to week 11 milestone our backend was up and running with each group member assigning the json file objects for each page needed to be implemented. This was done by producing a generic database to hold our data for the programs, exercises and days of workouts for our application so the user can interact with the application. During our week 11 to week 12 milestones we continued to work on our backend so our application can be operational for use and our application to function accordingly for our users. Lastly during our week 12 to 13 milestone we finished our css code and did playthroughs of our application to see if there were any bugs within our files to be fixed. We smoothed out any complications with our code and completed our application. 

## A guide to the project source code - where should we look for what you have done
In our source code frontend end this is where our App.js File is stored, this is used to link all of our pages accordingly so our application functions for the user. There are three folders within our frontend code for our application. This includes ‘components’ ‘pages’ and ‘services’. Within the components folder this is where the components are stored so our frontend attains the components from the backend so the application obtains the data stored in the backend. These components essentially allow the application to store the data that is collected when the user uses the application. The pages file is where all the pages' frontend code is stored.  These pages are what the user sees when they use the application and are all linked accordingly from the app.js file. The final folder in the services folder, which contains two files called ‘days.js’ and ‘user.js’. These files are used to call the backend components so the objects are displayed on the application. This services folder is essential in our application because it is where the backend json files are called so the components can be used for the user. 

The backend source code has files that configure the backend, allow the backend to function and allows routing to be implemented on our application. There are also three folders in our backend source code that are used so the backend and frontend can be configured, which are ‘controllers’, ‘data’ and ‘models’. The controllers folder is used so the application can handle the requests and responses from the user. This essentially allows the user to interact with our application. The data folder is where the data is stored for our application, these are json files that are called in the frontend. Lastly, the models folder is used for all the schema files and the functions required for the schema to operate.

## A summary of what your next steps would be if you were to continue the project
Due to time constraints, our FitTrackr application has not been deployed as we have decided to reallocate our resources in addressing vital development time during our weekly sprints. With more time to continue our project, Group AA would happily change this and successfully deploy FitTrackr onto the web.

There are a number of small missing functionality that we would like to address if given the opportunity to continue the project. Our Program page would face some issues as we were unable to successfully call our back-end when displaying our exercises titles. The reasons for this are not known and had to be omitted, instead simply displaying the ‘exercises’ text in place of the missing code. The register page would additionally benefit from possessing stronger authentication and security checks for the account details inputted by our users to ensure their accounts are safely secured. Examples of this include two-step authentication, requiring at least one capital letter, number and symbol in our password fields, and at least five characters in said fields.

After fixing these small issues, Group AA would then focus on developing new front-end functionality that were listed as potential goals but were not able to be implemented. An important feature that we were not able to implement was the addition of custom exercises that users can create and upload themselves. This would allow FitTrackr customers to fill in any missing workouts that we do not already possess in our database or to simply include their own unique exercise that does not match conventional methods. Additionally, we would include a visual tick checkbox on our day list to indicate if the schedule for the day was fully completed. This checkbox would not be interactable and is simply a visual indicator if all the listed workouts have been checked off by the user during their session, allowing them to keep note if they have been faithfully following their fitness program.

## A summary of the main roles and contributions of each team member and how you managed interaction and communication through the project
The main roles and contributions of each team member for our Gym Application project “FitTrackr":
    - Thi Thanh Trang Nguyen: frontend and backend for the Register and Login pages 
    - Justin Jeong:  frontend and backend for the Program page.
    - Alex:  frontend and backend for the Individual Day page.
    - Liam Flannery: frontend and backend for the Program Manager page and the logo for our App.
Managed interaction and communication through the project:
    - Formulating a plan and list of goals for our project.
    - Weekly meetings via Zoom and Facebook messenger.
    - Sharing and updating our project goals.
    - Constantly keeping the team updated during project development.
