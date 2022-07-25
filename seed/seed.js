const db = require('../db')
const { Game, Stroke, Users, Course } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// const createUsers = async () => {
//   const users = [
//     {
//       name: 'Steve'
//     },
//     {
//       name: 'David',
//     }

//   ];

//   await Users.insertMany(users);
//   console.log('Created Users.');
// };

const createCourse = async () => {
  const course = 
    {
      courseName: "SpringBrook",
      coursePar: [{
        hole: 1,
        par: 4
      },
        {
          hole: 2,
          par: 5
        }]
    };
  await Course.insertMany(course);
  console.log('Created course.');
};

// const createGames = async () => {
//   const games =
//     {};
//   await Game.insertMany(games);
//   console.log('Created games.');
// };

// const createStrokes = async () => {
//   const stroke = [
//     { holeNum: 1,
//       clubUsed: "Driver"
//     },
//     { holeNum: 1,
//       clubUsed: "6 iron"
//     },
//     { holeNum: 1,
//       clubUsed: "Sandwedge"
//     },
//     { holeNum: 1,
//       clubUsed: "Putter"
//     },
//   ];
//   await Stroke.insertMany(stroke);
//   console.log('Created strokes.');
// };





const run = async () => {
  await createCourse()
  const course = await Course.find()
  console.log(course)
  // await createStrokes()
  // const stroke = await Stroke.find() 
  // await createGames()
  // const game = await Game.find()
  // await createUsers()
  // const users = await Users.find()

  db.close()
}

run()