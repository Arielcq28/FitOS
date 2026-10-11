# FitOS

**Your workout routine, no more paper.**

FitOS is a fitness app built with one mission: to make the paper workout program obsolete.

## Why FitOS exists

I'm a regular person who loves to exercise. Working out is easy when I'm in a class, because the instructor tells me what to do, how to do it, and when to move on. But I can't always make it to class, and then I'm left following a piece of paper with my routine. Paper isn't easy to follow. It can't show me how a move is done, and more than once I've stood there staring at an exercise name, unable to remember how to perform it. I end up guessing, skipping it, or stopping mid-workout to look it up.

FitOS is the instructor in your pocket. For every exercise in your routine, it brings everything together on a single screen: the name of the move, the number of repetitions or the duration, how many sets to complete, the weight to use, and a short looping GIF of about ten seconds that shows the correct form. There are no pages to flip and no notes to decipher, so you can stop wondering how a move goes and simply train.

FitOS is for anyone who works out on their own and misses having an instructor, whether you follow a program from a coach, a trainer, or your own plan. It's especially useful for beginners who want to learn proper technique as they go, and for anyone tired of crumpled, sweaty, hard-to-read workout sheets.

## Status

FitOS is in early development. The first goal is the core workout view: one clear card per exercise with all the details above and its GIF demo. After that, the plan is to let people create and edit their own routines, build an exercise library with demo GIFs, add rest timers between sets, and track progress over time.

## Tech stack

FitOS is built with React and Vite. React makes it natural to model the app around reusable pieces, such as an exercise card that takes a name, reps or duration, sets, weight, and a GIF and renders them the same way every time. Vite keeps the development loop fast, with instant startup and hot reloading while you work on the interface.

## Features

- 📋 **Digital Workout Programs** – Access your workout plans anytime, anywhere.
- 💪 **Exercise Guidance** – View exercise instructions and proper technique to perform each movement correctly.
- 📈 **Progress Tracking** – Keep a complete history of your workouts and monitor your improvements over time.
- 🔄 **Easy Set Navigation** – Move seamlessly between exercises and sets with an intuitive interface.
- ⏱️ **Built-in Rest Timer** – Stay on schedule with an integrated timer—no need to use a separate watch or timer app.
- 📱 **Always Available** – Everything you need for your workout is stored in one place on your phone.

## Getting started

To run FitOS locally, clone the repository and install the dependencies with `npm install`. Then start the development server with `npm run dev` and open the address Vite prints in your terminal, usually `http://localhost:5173`. To create a production build, run `npm run build`, and use `npm run preview` to check it locally.

## Contributing

Ideas, feedback, and pull requests are welcome. If you've ever struggled to follow a paper routine, your story is exactly what FitOS is built for.

## License

To be defined.
