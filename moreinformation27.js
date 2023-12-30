/*

FULL STACK JS

replit:

(in server.js file) example

import express from "express"
import cors from "cors"
import reviews from "./api/reviews.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/reviews", reviews)
app.use("*", (req, res) =>
res.status(404).json({error: "not found"}))

export default app

YOUTUBE

Try to create some channel art on Canva or something like that


Mess around for the first 3 videos to see how you feel about it

Look up how to hold a camera,phone,edit a video,make a thumbnail,how to start
a youtube channel

When it comes to editing try to use great free software

Serious youtube is making at least 1 video a week

The point of the next 7 videos is to get better at the craft of making videos
just make them on whatever you feel like making a video on.

Try to use final cut or something similar for editing

Understand the youtube game

Understand these 3 things to be successful:

1. Getting people to click
2. Keep people watching
3. Leaving viewers satisfied

Figure out your niche

(a target and value) for niche

Ways to stand out more include:

- Depth of research
- Storytelling
- Editing
- Relatability and authenticity

Find out what the market and edge are and find other unique ways
to stand out

Build systems and leverage to do youtube easier in real life

Look up how to build systems and processes and
tools and templates to operationalize and scale a youtube channel and leverage for a youtube channel

BOOKS

The four hour workweek
The subtle art of not giving a fuck

DATABASE PROCESSING/PROGRAMMING 

Database Normalization is the process for structuring tables that minimizes
challenges facing database systems.

Database normalization challenges:

Insert anomaly,update anomaly, and deletion anomaly

Insert Anomaly

Insertion of one record leads to the insertion of several more required
data sets.

Update anomaly

Updating a record in a table column requires further updates
in other columns.

Deletion anomaly

Deletion of 1 record leads to the deletion of several more required data sets.

Normalization optimizes the database design by creating a single purpose
for each table.

JAVA

Public

Same Class yes
Same package subclass yes
Same package non-subclass yes
Different package subclass yes
Different package non-subclass yes

Private

Same Class yes                                 
Same package subclass no
Same package non-subclass no
Different package subclass no
Different package non-subclass no


If you make something protected, you can't use it outside the package

GENERATIVE AI

Can have issues of plagiarism in ChatGPT

ChatGpt has all the data on the internet and it kind of mixes
that data to create permutations,combinations depending on what you need
to do

It understands your question and it understands how your question was answered by 
someone else in the past. It kind of makes it's own approach based on that to give
you the answer

ChatGpt knows how to rhyme things can write songs in it in different styles
too like rap and can write stories on them too

Other things as well like HTML for it

GPT-4 can browse to other websites and give you feedback

In order to enable this you need GPT-4 and you need to enable browse with bing
option

Sometimes it will use the pre-existing knowledge that it already has to give
you answers so you have to specify clearly in the brackets saying browse internet
and this will happen specifically for cases where the information existed in 2021 so it
will prioritize information that it already has before it starts browsing the
internet

If there is too much text in 1 section it might or will separate it out

You can also browse the news and other things

Trying to summarize news today or whatever may not work sometimes

GPT 4 is relatively slower to answer questions than GPT 3.5 and it's
primarily because it's giving out very meaningful and useful answers
compared to what GPT 3.5 throws out

A limitation with GPT-4 is you can only ask 25 questions every 3 hours at this point
between april and may (or maybe other times too) primarily because it's
very computing heavy and consumes a lot of resources compared to GPT 3.5

At max it's maybe 200 to 300 questions a day.

SOFTWARE DESIGN

Make sure none of your services fail in case of an outage








































*/