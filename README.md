# AnimeX-WebApplication  :   YouTube link : https://www.youtube.com/watch?v=6dZF_f-8rdQ&ab_channel=DeepaAvhad
Web Application that includes different anime quotes, game quiz, quote generator.
This Web App includes use of:
1.  Free 'AnimeChan' API 
2.  Node.js with Express
3.  Vanilla JavaScript
4.  Locally hosted bootstrap and CSS.
5.  One Jest test.



# How to run the web application:
# 1. By downloading code base and running locally.
1. I have installed all npm modules like bootstrap and jest. So simply download the code base from git including node_modules & on terminal run command:
    # cd animex/backend-nodejs
    # npm start 
   then in browser like google chrome open http://localhost:8080/ 
   
2. I have wriiten one jest test, which checks whether all options are set correctly in quiz game. To run it:
   # npm test
   
# 2. By using the google cloud link : https://animex-28091996.wl.r.appspot.com/
  Use the above link to directly see the web app. I have uploaded the web application in google cloud using following commands:
  # gcloud init
    -setup google account and give project name animex-28091996
  # gcloud projects describe animex-28091996
  # gcloud app create --project=animex-28091996
  # cd your_directory
  # gcloud app deploy
    
    
# 3. YouTube link to web application recording : https://www.youtube.com/watch?v=6dZF_f-8rdQ&ab_channel=DeepaAvhad




# This Application has 4 parts:

# 0. Home Page 
On refreshing page everytime, user can see a random anime quotes with a flashy background.
Then the three options for user to choose: More Quotes, BattleField Challenge, Create own quotes.

# 1. More Quotes Page
Here list of about 100 animes are shown in the form of pagination, on clicking them user can see one or more anime quotes.
If user want more anime quotes they can search explicity using search bar.

# 2. BattleField Page 
A simple quiz game for anime lovers. There are total 10 questions. For each question a flashcard is shown for 10 seconds followed by options.
When game is over, overall score with which anime character the user corresponds to is shown.

# 3. Creat Own Quotes Page
There are pre-templates with anime backgrounds, user can choose any template and create their own quotes.
User can download their own created quote-template as well.


# Features used:
1. Loaders for fetching large amounts of data
2. Animations and background designs.
3. Timers and countdown
4. Search input with data sanitization
5. Mobile optimized to some extent.
6. Downloading option.
7. Pagination


# My Learnings :

1. Use of Jest
2. Animations.
3. Time Interval.
4. Pagination

 
   
   


