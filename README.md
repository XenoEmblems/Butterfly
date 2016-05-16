# Butterfly Exercise

#How to use? 
Clone the repository and use node server.js in the terminal. The localhost is 8080

#Finished
Built question and thank you pages.

Randomized Questions on load.

Low ratings bring up a textarea.

You can edit your smileys and click to go to a new page.

Logo links to support.Butterfly.ai

All of this is functional for all the pages

#In Progress
Responsiveness to all devices

Node/Express HTML pages respond to queries

#I've spent two days of time doing this exercise:
During each part I will explain what I have done for each


A. Header:
Top left button should send to support.butterfly.ai
Butterfly inc. is the Company Name

Eric: This is self explanatory. I was able to do this once I learned how SVG and Sketch worked. Then it was simply wrapping an a tag around it.


B. Smiley (5 different smileys)
The edit smiley allows you to change the Smiley if you made a mistake on the previous page
“Awesome” varies with smileys

Eric: Learning how SVG worked I was able to group the Smiley selector and put it on the HTML. I set up click event that makes the Face selector appear when the edit rectangle is selected in clickevents.js ("Rect-22")



C. Statements (ratings)
Please implement all 5 questions (on render server should randomize an order)
If the user selects 1 or 2 stars, the extra feedback field appears (view example 1st statement)

Eric: This was really fun to do because it took problem solving. First I wanted to randomize all the divs each time the page is loaded. I used for loop that randomized the order of the divs with the class "question" in clickevents.js. I used a simple star rating plugin for the stars for the sake of time (http://jsfiddle.net/moob/zexvtoz1/13/). I then set up a clickevent that if the value for the radio button is 1 or 2 then the text area will appear. Otherwise it will not appear or disappear.

In progress

D. “Anything to add” is a simple text field

Self explanatory. This didn't take any time.

In progress

E. Send Button active/inactive

Eric: I created a button that links the user to the Thank You page. Though at the moment you can click it even if nothing is filled. In the next version I would make sure that you can't click it until all the radio buttons are filled.

All text fields are not Mandatory ;-)

F. Reaction on button click (when all stars selected) is simple text - “thank you“(see design)

Eric: Finally self explanatory. I set that up really quickly.

Of course this pages needs to be responsive for desktop and mobile devices. As well as work for retina screens.

I'm very good when it comes to responsiveness and I can make the page responsive for all devices like I did with m.dunkeyscastle.com and made it responsive for all devices. (I know its m dot and its nearly obsolete but that's what the client wanted.) I wanted to prioritize functionality over responsiveness for the coding exercise. By Thursday when we meet I will have the pages responsive.

Technical details:
Create node.js server, that responds with html page based on query param (/?v=5 - Awesome! /?v=4 - Great! /?v=3 - OK, /?v=2 - Mmmmh... /?v=1 - Oops)

Eric: I had the most trouble here. I set up the node server and made it so it loaded first on the Awesome page. Then I wanted to create queries on each of the faces when you reselect and either load a new page or redesign the current one. Even with Body-parser and setting parameters for the queries it wasn't working. For now I just set it that each link goes to a different page. I would do a sprint and learn how queries can respond and change html pages.


Try to achieve fast loading performance, because thousands of people on different networks will load this page.

Eric: Overall the pages load pretty quickly. There isn't any JavaScript or large images that are making the load time longer.

Commit your code to Github with quick Readme expaining how to run it and ask alekseykulikov (https://github.com/alekseykulikov) to review.

Let us know how much time you spent (don’t spend much), try to make it fun hacking exercise :-)

Eric: Thank you so much for sending me this challenge! This was a lot of fun and will love to keep cracking at it. ;)
