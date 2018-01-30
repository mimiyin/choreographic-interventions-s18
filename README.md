# Syllabus - Work in Progress

- Spring 2017, Mondays, 7PM-9:55PM in Studio 1 @[111 2nd Avenue](https://goo.gl/maps/FfVoDSMxNSN2)
- Mimi Yin, mimi.yin@nyu.edu
- [Office Hours Signup](https://itp.nyu.edu/inwiki/Signup/Mimi)

### Course Structure | [See introductory description below.](#course-description)
Over the course of the semester, we will cover 4 topic areas that correspond to 4 parameters of choreography: Pathways, The Body (Form + Substance), Space and Time. Topics will be introduced through movement-based improvisation exercises. Computational strategies will be examined through code examples. For each topic, students will create a small movement study in 2 stages: the first analog, the second computational with the aim of fully exploring how technology "intervened" and changed the choreographic process.

The class will culminate in a showing of student work. Final projects can either be in the form of a tool to aid in movement practice, an interactive installation or a live performance.

Because course topics are organized around movement concepts, technical topics will be introduced and built upon week to week.
- What do cameras see? RGB, IR, Kinect, Mocap...
- Skeletons, Depth Maps and Silhouettes
- Basic programming concepts: Variables, Conditionals, Loops, Arrays
- 2D v. 3D
- Drawing and animation
- Random, noise, oscillation, easing, etc.
- Calculating velocity and acceleration
- Mapping values
- Manipulating text, sound and live image processing

"Soft Skills" we will practice:
- Sketching (as in drawing on paper) choreographic ideas.
- Defining rule sets for movement.
- Defining rules of interaction.
- Deconstructing choreography into parameters for code.
- Extracting choreographic ideas from code.

### Workbook
Each topic will be introduced through paper-based drawing exercises and code examples. [Google Drive Link](https://drive.google.com/drive/folders/0B_lnhZP0dCt8MHNPamxUTzJSMDg?usp=sharing)

### Programming Resources
- [p5.js](http://p5js.org/) | [Reference](http://p5js.org/reference/) | [Web Editor](http://alpha.editor.p5js.org/)
- [Coding Rainbow](http://thecodingtrain.com/)
- [Atom Editor](https://github.com/mimiyin/sense-me-move-me/wiki/Atom)
- [Kinectron](https://github.com/lisajamhoury/kinectron)
- [The Nature of Code Book](http://natureofcode.com/book/)

### Dance + Movement Resources
- Select chapters from [The Viewpoints Book](http://www.amazon.com/The-Viewpoints-Book-Practical-Composition/dp/1559362413) | [PDF](https://stilluntitledproject.files.wordpress.com/2014/11/anne-bogart-and-tina-landau-the-viewpoints-book.pdf)
- Select chapters from [Dynamic Alignment Through Imagery](http://www.amazon.com/Dynamic-Alignment-Through-Imagery-Edition/dp/0736067892) | [Google Books](https://books.google.com/books?id=CBwV_g8DhEMC&lpg=PA2&ots=nRQ2JS3SWv&dq=dynamic%20alignment%20chapters&pg=PP1#v=onepage&q&f=false)
- [Forsythe Technique Videos on Youtube](https://www.youtube.com/user/GrandpaSafari/videos)


### Dance students checking stuff out of ITP ER:
   - Check it out under my name
   - Bring your NYU ID
   - netid
   - Nxxxx id number

   ***
   ***

## Week 1: Introduction

### Questions
   * Why are we here?
   * What is interaction?
      * Do you need sensors to be interactive?
   * What is a choreographic intervention?
   * What are the parameters of choreography?
   * How is code an expressive medium?

### In-class
   * Analyze how we all entered the studio.
   * Introduce ourselves: What's your favorite resting position?
   * Introduction to computational thinking through dynamic drawing
   * Make a duet between a dancer and a drawer
   * Examples:
      * [Drawing Lines](http://alpha.editor.p5js.org/move.mimi/sketches/ByPtNLI4z) | [Fullscreen](http://alpha.editor.p5js.org/full/ByPtNLI4z) | 1-Mode-At-A-Time: [0](http://alpha.editor.p5js.org/move.mimi/sketches/SJwTOF8Ez) | [1](http://alpha.editor.p5js.org/move.mimi/sketches/HyNmKKL4f) | [2](http://alpha.editor.p5js.org/move.mimi/sketches/SkEk9KUNM) | [3](http://alpha.editor.p5js.org/move.mimi/sketches/ByPfqt84f)
      * [Drawing a Trail](http://alpha.editor.p5js.org/move.mimi/sketches/H1flrLLVG) | [Fullscreen](http://alpha.editor.p5js.org/full/H1flrLLVG)
      * [Zeno's Paradox](http://alpha.editor.p5js.org/move.mimi/sketches/H1NWIIL4z)

### Assignment
   * ITPers: Watch [Forsythe Technique Videos](https://www.youtube.com/user/GrandpaSafari/videos): They range from 10s to 1 minute. Very short!
      * 16 videos that start with Forsythe-Writing
      * 23 videos that start with Forsythe-Lines
      * [Avoidance](https://www.youtube.com/watch?v=cqGyFiEXXIQ)
      * [Line](https://www.youtube.com/watch?v=aOd0PtgS8KU)
   * Everyone: Read chapter 2 of [Viewpoints](https://stilluntitledproject.files.wordpress.com/2014/11/anne-bogart-and-tina-landau-the-viewpoints-book.pdf).
   * Everyone: Review [Chapter 0](https://docs.google.com/document/d/1NPHHaCppnEJoR90W6ZOtrV3JDu1qq5VPCieSIwfQ0Jc/edit?usp=sharing) and complete sections 1.0 - 1.2 of [Chapter 1](https://docs.google.com/document/d/1SUp-7bKs1Cvez7pBSe3I0tTccWTw2q0TqgK7nyGI8cM/edit?usp=sharing) of the Workbook

***

## Week 2: Interacting with Pathways

### Questions
   * What are all the ways to interact with a pathway?
   * How do you choreograph code?
   * The dramaturgy of lines and random().

### In-class
   * Interacting with a static pathway (rope)
   * Interacting with a moving pathway (live drawing)
   * Deconstructing linear and random() motion
   * Choreographing linear and random pathways
   * Examples
      * [Bobby McFerrin](https://www.youtube.com/watch?v=DoNIOqUz9NM)
      * [Linear Pathway](http://alpha.editor.p5js.org/move.mimi/sketches/rJWBguUNf)
      * [Linear Pathway - Deconstructed](http://alpha.editor.p5js.org/move.mimi/sketches/rJnOzuI4M)
      * Linear Pathway with Controls: [Code](http://alpha.editor.p5js.org/move.mimi/sketches/rkMpbedVM) | [Fullscreen](http://alpha.editor.p5js.org/full/rkMpbedVM)
      * [Random Pathway](http://alpha.editor.p5js.org/move.mimi/sketches/HkL0VOUVf)
      * [Graphing Random](http://alpha.editor.p5js.org/move.mimi/sketches/SkwF9OLEM)
      * Random Pathway with Controls: [Code](http://alpha.editor.p5js.org/move.mimi/sketches/ByBuJtIEz) | [Fullscreen](http://alpha.editor.p5js.org/full/ByBuJtIEz)

### Assignment
   * Complete sections 1.3-1.4 of Chapter 1 of the Workbook.
   * Create a 1 minute duet using a live drawer and a dancer.
      * You can use the drawing lines, linear pathway with controls and random pathway with controls examples or create your own mash-up of those 3. Duet must be repeatable.

***

## Week 3: Dynamic Pathways

### Questions
   * How do you choreograph code? cont'd
   * The dramaturgy of noise() and circles.

### In-class
   * Deconstructing noise() and circular motion
   * Choreographing noisy and circular pathways

### Assignment
   * Create a 1 minute duet between a programmed pathway and a dancer.
      * Pick from pathways we've discussed: linear, random, noisy, circular.
      * You can use more than 1 kind of pathway.
      * If you use a new kind of pathway (e.g. fractals), include an analysis of that pathway comparable to what we have done in class so that you are on comparable conceptual footing.

***
## Week 4 Show 2 Duets, Hello Kinect

### In-class
  * Introduction to Kinect v.2 camera
  * Kinectron server + p5.js
  * Drawing with the joints of the body

### Assignment
   * Read Chapter 7 of [Dynamic Alignment](https://books.google.com/books?id=CBwV_g8DhEMC&lpg=PA2&ots=nRQ2JS3SWv&dq=dynamic%20alignment%20chapters&pg=PP1#v=onepage&q&f=false)
   * Complete Sections 2.0-2.2 of Chapter 2 of the Workbook
***

## Week 5 Form + Substance: Re-architecture

### Questions
   * What are all the ways the body can fold?
   * What are all the ways the body can spiral?
   * What are all the ways the body is (as)symmetrical.
   * How would you walk if your head was facing back, in between your knees?

### In-class
   * Re-designing the skeleton in 2D and 3D
   * Review Kinect and Kinectron
   * Vector Math
   * 2D v. 3D

### Assignment
   * Bring a piece of clothing that changes the shape of your body to class next week.
   * Complete Sections 2.3-2.4 of Chapter 2 of the Workbook

***

## Week 6 Form + Substance: Distortion

### Questions
   * What is a body made of?
   * How can changing the way your body is represented change how you move?

### In-class
   * Show and tell clothes.
   * Play with shadows.
   * Play with Kinect funhouse mirrors
     * The Gumby Effect: Bending body contours.
     * Prickly Pears: Visualizing the sensation of pins and needles.
     * Rei Kawakubo: Bulging and pinching your insides.

### Assignment
   * Create a mirror that distorts or re-architects the body to move in new and unexpected ways.
   * Be clear about how you think the mirror is going to make people move.
   * You should test your mirror thoroughly to know what it is capable of. But others will be first to demo it.

***

## Week 7: Play with Mirrors, Preview of Week 8

### Assignment
   * Watch: Jiri Kylian | NDT : [Sweet Dreams](http://www.numeridanse.tv/en/video/1046_sweet-dreams)
   * Complete Chapter 3 of Workbook
***

## Week 8: Space

### Questions
   * Can space be emotional?
   * What are all the ways to define space?
   * What are all the ways to interact with a space?
   * How do you choreograph a "dynamic" space, one that changes over time?
   * What is the difference between a space and a terrain?
   * How do terrains influence movement?
   * Can we define virtual terrains with sound?

### In-class
* Play with visual spaces.
   * Interacting with dynamic spaces.
   * Defining spaces with bodies.
      * Mapping 3D Kinect data to a 2D floor projection
   * Interacting with sound terrains.
      * Multi-dimensional mapping to create terrains
      * Mapping linear motion to create non-linear terrains

### Assignment
   * Read pgs. 36-42 (Tempo and Duration) 147-149 (Jo Ha Kyu) of [The Viewpoints Book](https://stilluntitledproject.files.wordpress.com/2014/11/anne-bogart-and-tina-landau-the-viewpoints-book.pdf)
   * Complete Chapter 4 of the Workbook

***

## Week 9 Time

### Questions
   * What is the difference between timing and pacing?
   * What is the timing and pacing of [Gyorgy Ligeti's Poeme Symphonique](https://www.youtube.com/watch?v=QCp7bL-AWvw) Is there rhythm?

### In-class
   * Feeling the tempo: Walking _Grave_ to _Prestissimo_
   * Coding Pacing: Building interactive metronomes with % (modulo)
   * Designing interactions that encourage you to play with pacing
      * Building polyrhythms with interactive metronomes
      * Dynamic pacing with [Zeno's Paradox](https://en.wikipedia.org/wiki/Zeno%27s_paradoxes) and Decay
   * Discuss final projects

###  Assignment
   * Create an interactive space for your final. (Sensors not required.)

***

## Project Development: Weeks 10, 11, 12

Workshop and user-test final project ideas.

## Showing: Week 12

# Course Description
Even where there is no connection between 2 events, if they happen at the same time, in the same space, we find relationships nonetheless.

So then what is the point of hooking up dancers to sensing devices to connect them to various media if the relationships already exist in our minds? Simply seeing a cause-and-effect relationship between movement (input) and media (output) is not enough.

This course re-conceives interactive media as a form of choreographic intervention. Instead of asking how dancers can control media, we will turn the tables to ask how interactive systems can influence movement. How do you make someone feel soft inside? How do you shake an entire room? How do you orchestrate duets between strangers?

To accomplish this, choreographers will learn to apply computational thinking to choreography and programmers will learn to apply choreographic thinking to computation. And to whatever extent possible, we will attempt to embody code.

Using computer vision and a broad range of media from graphics and video, to sound and text, we will look at directing both how people move (quality of movement) as well as where they move (pathways and spatial relationships).

We will evaluate the strengths and weaknesses of the various sensing technologies available to us today. How wide is the gulf between what we can see and feel (strength, hardness, contortion) and what a computer can see and interpret (locations, contours, velocity, acceleration)? Class time will be split between movement exercises, playing with examples and deconstructing code.

The course is cross-listed with the Tisch Dance MFA department. All assignments will be collaborations between ITP and Tisch Dance students. The class will culminate in a final showing.

## Pre-requisites
The course is intended both for anyone looking to deepen their practice in working with movement-based interaction regardless of previous experience with movement technique or programming.

As a result, there is no pre-requisite for dance and no pre-requisite for code.

## Grading
- 40% for showing up (on time!) and participating with curiosity and enthusiasm.
- 10% for each topic study.
- 20% for the final project.
- More than 2 unexcused absences qualifies you for a failure.
- 2 lateness of 15 minutes or more qualifies as 1 unexcused absence.

