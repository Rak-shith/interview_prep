// class UserService {
//   constructor() {
//     // Mock database with sample users
//     this.database = new Map([
//       [1, { id: 1, name: 'Alice Johnson', email: 'alice@example.com' }],
//       [2, { id: 2, name: 'Bob Smith', email: 'bob@example.com' }],
//       [3, { id: 3, name: 'Carol Davis', email: 'carol@example.com' }],
//       [4, { id: 4, name: 'David Wilson', email: 'david@example.com' }],
//       [5, { id: 5, name: 'Eva Brown', email: 'eva@example.com' }],
//       [6, { id: 6, name: 'Frank Miller', email: 'frank@example.com' }],
//       [7, { id: 7, name: 'Grace Lee', email: 'grace@example.com' }],
//       [8, { id: 8, name: 'Henry Taylor', email: 'henry@example.com' }],
//       [9, { id: 9, name: 'Ivy Chen', email: 'ivy@example.com' }],
//       [10, { id: 10, name: 'Jack Williams', email: 'jack@example.com' }],
//       [11, { id: 11, name: 'Kate Rodriguez', email: 'kate@example.com' }],
//       [12, { id: 12, name: 'Liam O\'Connor', email: 'liam@example.com' }],
//       [13, { id: 13, name: 'Maya Patel', email: 'maya@example.com' }],
//       [14, { id: 14, name: 'Noah Anderson', email: 'noah@example.com' }],
//       [15, { id: 15, name: 'Olivia Thompson', email: 'olivia@example.com' }],
//       [16, { id: 16, name: 'Peter Kim', email: 'peter@example.com' }],
//       [17, { id: 17, name: 'Quinn Martinez', email: 'quinn@example.com' }],
//       [18, { id: 18, name: 'Rachel Green', email: 'rachel@example.com' }],
//       [19, { id: 19, name: 'Sam Wright', email: 'sam@example.com' }],
//       [20, { id: 20, name: 'Tina Clark', email: 'tina@example.com' }],
//     ]);
//   }

//   async getUserById(id) {
//     // Simulate network/database latency (100-300ms)
//     const delay = Math.floor(Math.random() * 200) + 100;
//     await new Promise(resolve => setTimeout(resolve, delay));
    
//     console.log(`Fetched user ${id} (took ${delay}ms)`);
//     return this.database.get(id) || null;
//   }

//   async getUsersByIds(ids) {
//     const users = [];
    
//     for (const id of ids) {
//       const user = await this.getUserById(id);
//       if (user) {
//         users.push(user);
//       }
//     }
    
//     return users;
//   }

//   // TODO: Implement optimized version here
//   async getUsersByIdsOptimized(ids) {
//     // Your solution goes here
//     const userPromises = ids.map(id => this.getUserById(id));
//     const results = await Promise.all(userPromises);
//     return results.filter(user => user !== null);
//   }
// }

// async function runPerformanceTest() {
//   const userService = new UserService();
//   const testIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   console.log('=== Performance Test ===\n');

//   console.log('🐌 Testing current implementation (sequential):');
//   const start1 = Date.now();
//   const users1 = await userService.getUsersByIds(testIds);
//   const time1 = Date.now() - start1;
  
//   console.log(`✅ Retrieved ${users1.length} users`);
//   console.log(`⏱️  Total time: ${time1}ms\n`);

//   // Uncomment this when you implement the optimized version:
  
//   console.log('🚀 Testing optimized implementation (parallel):');
//   const start2 = Date.now();
//   const users2 = await userService.getUsersByIdsOptimized(testIds);
//   const time2 = Date.now() - start2;
  
//   console.log(`✅ Retrieved ${users2.length} users`);
//   console.log(`⏱️  Total time: ${time2}ms`);
//   console.log(`🎯 Performance improvement: ${((time1 - time2) / time1 * 100).toFixed(1)}% faster\n`);
  

// }
// if (require.main === module) {
//   runPerformanceTest().catch(console.error);
// }

// module.exports = UserService;



function createDatabase() {
  return new Map([
    [1, { id: 1, name: 'Alice Johnson', email: 'alice@example.com' }],
    [2, { id: 2, name: 'Bob Smith', email: 'bob@example.com' }],
    [3, { id: 3, name: 'Carol Davis', email: 'carol@example.com' }],
    [4, { id: 4, name: 'David Wilson', email: 'david@example.com' }],
    [5, { id: 5, name: 'Eva Brown', email: 'eva@example.com' }],
    [6, { id: 6, name: 'Frank Miller', email: 'frank@example.com' }],
    [7, { id: 7, name: 'Grace Lee', email: 'grace@example.com' }],
    [8, { id: 8, name: 'Henry Taylor', email: 'henry@example.com' }],
    [9, { id: 9, name: 'Ivy Chen', email: 'ivy@example.com' }],
    [10, { id: 10, name: 'Jack Williams', email: 'jack@example.com' }],
    [11, { id: 11, name: 'Kate Rodriguez', email: 'kate@example.com' }],
    [12, { id: 12, name: 'Liam O\'Connor', email: 'liam@example.com' }],
    [13, { id: 13, name: 'Maya Patel', email: 'maya@example.com' }],
    [14, { id: 14, name: 'Noah Anderson', email: 'noah@example.com' }],
    [15, { id: 15, name: 'Olivia Thompson', email: 'olivia@example.com' }],
    [16, { id: 16, name: 'Peter Kim', email: 'peter@example.com' }],
    [17, { id: 17, name: 'Quinn Martinez', email: 'quinn@example.com' }],
    [18, { id: 18, name: 'Rachel Green', email: 'rachel@example.com' }],
    [19, { id: 19, name: 'Sam Wright', email: 'sam@example.com' }],
    [20, { id: 20, name: 'Tina Clark', email: 'tina@example.com' }],
  ]);
}

const database = createDatabase();

console.log(database, "databasedatabase");

async function getUsersByIds(ids) {
  const users = [];
  for (const id of ids) {
    const user = await getUserById(id);
    if (user) users.push(user);
  }
  return users;
}

async function getUserById(id) {
  const delay = Math.floor(Math.random() * 200) + 100;
  await new Promise(resolve => setTimeout(resolve, delay));

  console.log(`Fetched user ${id} (took ${delay}ms)`);
  return database.get(id) || null;
}

async function getUsersByIdsOptimized(ids) {
  const userPromises = ids.map(id => getUserById(id));
  console.log(userPromises,"userPromisesuserPromises");
  
  const results = await Promise.all(userPromises);
  return results.filter(user => user !== null);
}

async function runPerformanceTest() {
  const testIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  console.log('=== Performance Test ===\n');

  console.log('🐌 Testing current implementation (sequential):');
  const start1 = Date.now();
  const users1 = await getUsersByIds(testIds);
  const time1 = Date.now() - start1;

  console.log(`✅ Retrieved ${users1.length} users`);
  console.log(`⏱️  Total time: ${time1}ms\n`);

  console.log('🚀 Testing optimized implementation (parallel):');
  const start2 = Date.now();
  const users2 = await getUsersByIdsOptimized(testIds);
  const time2 = Date.now() - start2;

  console.log(`✅ Retrieved ${users2.length} users`);
  console.log(`⏱️  Total time: ${time2}ms`);
  console.log(`🎯 Performance improvement: ${((time1 - time2) / time1 * 100).toFixed(1)}% faster\n`);
}

if (require.main === module) {
  runPerformanceTest().catch(console.error);
}

module.exports = {
  getUserById,
  getUsersByIds,
  getUsersByIdsOptimized,
  runPerformanceTest
};
