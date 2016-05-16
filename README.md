# Butterfly

Hi Eric,

Thank you for your time and your interest in Butterfly.

We have come up with an exercise that we’d like you to complete in order to advance in our selection process.

We’d like you to set up the following page: 
The 5 statement page that a user finds once he has responded to a Mood Tracking poll.

You will find the design files attached. (Sketch and pngs)

A. Header:
Top left button should send to support.butterfly.ai
Butterfly inc. is the Company Name

Done

B. Smiley (5 different smileys)
The edit smiley allows you to change the Smiley if you made a mistake on the previous page
“Awesome” varies with smileys



C. Statements (ratings)
Please implement all 5 questions (on render server should randomize an order)
If the user selects 1 or 2 stars, the extra feedback field appears (view example 1st statement)

In progress

D. “Anything to add” is a simple text field

In progress

E. Send Button active/inactive 

In progress
All text fields are not Mandatory ;-)

F. Reaction on button click (when all stars selected) is simple text - “thank you“(see design)

Of course this pages needs to be responsive for desktop and mobile devices. As well as work for retina screens.

Once everything is operational I will focus on responsiveness.

Technical details:
Create node.js server, that responds with html page based on query param (/?v=5 - Awesome! /?v=4 - Great! /?v=3 - OK, /?v=2 - Mmmmh... /?v=1 - Oops)
Try to achieve fast loading performance, because thousands of people on different networks will load this page.
Commit your code to Github with quick Readme expaining how to run it and ask alekseykulikov (https://github.com/alekseykulikov) to review.

Let us know how much time you spent (don’t spend much), try to make it fun hacking exercise :-)