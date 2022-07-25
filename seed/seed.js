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


const createStrokes = async () => {
  const stroke = [
    { holeNum: 1,
      clubUsed: "Driver"
    },
    { holeNum: 1,
      clubUsed: "6 iron"
    }
  ];
  await Stroke.insertMany(stroke);
  console.log('Created strokes.');
};

const createGames = async () => {
  let course = await Course.findOne()
  let strokes = await Stroke.find()
  const game =
    {
      courseId: course._id,
      strokes: strokes
    };
  await Game.create(game);
  console.log('Created game.');
};

const run = async () => {
  await createCourse()
  const course = await Course.find()
  console.log(course)
  await createStrokes()
  const stroke = await Stroke.find() 
  console.log(stroke)
  await createGames()
  const game = await Game.find()
  console.log(game)
  // await createUsers()
  // const users = await Users.find()

  db.close()
}

run()