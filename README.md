ACTIVITY SEARCH API V2
TYPES OF DATA AVAILABLE
Endurance:  Running, cycling, swimming, triathlons, duathlons, walking, mountain biking.
Team Sports: Baseball, basketball, soccer, football, hockey, lacrosse, softball.
Youth Camps:  Day camps, overnight camps, youth sports camps.
Tennis Leagues:  USTA sanctioned leagues, tournaments, clinics.
Parks & Recreation: City & county parks, recreational activities, YMCAs, JCCs, Boys and Girls Clubs.
Fitness:  Aerobics, dance, zumba, yoga, Pilates, ballet.
Classes: Crafts, painting, drawing, ceramics, performing arts, photography, theater.
Outdoor Adventure:  Sailing, hiking, climbing, kayaking, rafting, fishing, hunting.


front end: 
create html for home page 

create search bar for home page 

top 5 activities for home page divs 

click on gif, links to the output page 
search for an activity also links to the output page 

Output page: 
create html for output page 

outputs the location that activity is available at 

backend:
firebase stores what that user has clicked on/searched for? 

link on clicks to call activity api

link search to call the activity api 

link giphy api 

Javascript 
link javascript to search 

link javascript to giphys 


    Explain the key points of creating an MVP
        Start with a general idea. - search activity and output location
        Identify the target audience. - anyone seeking adventure
        Identify the problem that the product will address. - idk where this activity is? 
        Write down the primary goal of the product. - find locations with that activity 
        Identify and prioritize essential user stories. - As a user, I want to search for an activity and get all of the locations that I could do that activity at... nearest to me first? 
    
Motivation for it's development -Christa
    - So we all know staring at a computer screen day in and day out can be fun but as a team we wanted to find a way to breakup the mundane work day and give users a fun and easy way to get away from the screen and find their next adventure.  We created  The Adventure Setter!!!! 

Overall application's concept - Christa
    -The concept for our website is to land on a fun and engaging home page that gets the user excited about their next thrilling, heart pounding adventure.  Once the user seees what they're missing out on, they can click on our drop-down menu to then click the particular activity that is calling their name.  That clicked activity will then populate a list of local options in their area. Voila, after grabbing their wallet and putting some pants on, they are no longer a bored coder staring at their screen. 

I'm going to briefly go over all of our team member's roles and also a challenge I faced. 

Emily -- Linked Activities API, stored activity clicked in session storage, Google sign in functionality and styling and user auth with firebase

Kayla -- Setup picklist, connected that to Javascript and adding the functionality to get it to close when clicked elsewhere and send to Activity page when clicked on activity, overall styling and css and home page html setup.

Michael -- Giphy Images and placement, background image, mobile responsiveness 

Ashlyn -- Developed most of the HTML structure and styling of the output page.  Along with the scroll list and its functionality.

Christa -- Styling and CSS with some of the HTML structure for the output page.  Created the Navbar and Footers for home and output pages with them linking our two webpages together. 
Besides the innate challenges that come with using GitHub, my biggest challenge was probably styling the footer on the home page.  In order to get the placement of our gif images where we wanted, a lot of absolute positioning made.  We later found out that made sticking the footer to the bottom of our page very difficult without also having the gif images overlap our footer element. 

<!-- 
Weather API Request
The base URL for our weather API is 
https://www.amdoren.com/api/weather.php

Request Parameters
All the API request parameters are required.
Parameter   Description
api_key    Your assigned API key.
lat     Latitude of the location for which you would like to retrieve the weather forecast.
lon     Longitude of the location for which you would like to retrieve the weather forecast.

Please note that our Free Plan requires you to display the following message prominently with a backlink:
Powered by <a href="https://www.amdoren.com">Amdoren</a> -->
