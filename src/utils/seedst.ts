//loook at data in 26
import connection from '../config/connections.js';
import { User, Thought } from '../models/index.js';

// Define a helper function for generating random names
const getRandomName = (count) => {
  const names = [];
  for (let i = 0; i < count; i++) {
    names.push(`name${i}`);
  }
  return names;
};

connection.on('error', (err) => console.error('Connection error:', err));

connection.once('open', async () => {
  console.log('Connected to the database');

  try {
    // Delete the collections if they exist
    const thoughtCheck = await connection.db?.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck?.length) {
      console.log('Dropping "thoughts" collection...');
      await connection.dropCollection('thoughts');
    }

    const userCheck = await connection.db?.listCollections({ name: 'users' }).toArray();
    if (userCheck?.length) {
      console.log('Dropping "users" collection...');
      await connection.dropCollection('users');
    }

    // Generate random users and thoughts
    const users = [];
    const thoughts = [];

    for (let i = 0; i < 5; i++) {
      const username = `user${i}`;
      const email = `user${i}@example.com`;

      users.push({
        username,
        email,
      });

      for (let j = 0; j < 5; j++) {
        const thoughtText = `Thought ${j} for ${username}`;
        const thought = {
          thoughtText,
          username,
        };
        thoughts.push(thought);
      }
    }

    // Seed the database
    await User.insertMany(users);
    await Thought.insertMany(thoughts);

    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete! 🌱');
    process.exit(0);
  } catch (err) {
    console.error('Error during seeding:', err);
    process.exit(1);
  }
});

export { getRandomName };
//start working here