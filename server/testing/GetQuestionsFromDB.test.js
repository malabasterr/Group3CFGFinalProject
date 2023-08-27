// Importing the required module 'mysql2/promise' for establishing connections to a MySQL database.
const mysql = require('mysql2/promise');

// Importing the `getQuestionsFromDB` function from our local module.
const { getQuestionsFromDB } = require('../question-api/db'); 

// Mocking the entire 'mysql2/promise' module. 
// We're replacing the real `createConnection` function with a mock version.
// The mock version of `createConnection` returns an object with two mock methods: `execute` and `end`.
jest.mock('mysql2/promise', () => ({
  createConnection: jest.fn().mockReturnValue({ 
      execute: jest.fn(),  // mock the execute function
      end: jest.fn()       // mock the end function
  })
}));

// Defined group of related tests
describe('getQuestionsFromDB', () => {

  // After each test in this group, clear any saved calls to our mock functions.
  // This ensures that each test starts with a clean slate.
  afterEach(() => {
    jest.clearAllMocks();
  });

  // Defined a single test case.
  it('should fetch questions from the database', async () => {
    // Defined some mock data
    const mockData = [{ question: "What's your favorite color?" }, { question: "How old are you?" }];
  
    // When the `execute` function is called on our mock connection, 
    // make it return a promise that resolves to our mock data.
    mysql.createConnection().execute.mockResolvedValueOnce([mockData]);
  
    // Call the function we're testing and wait for it to complete.
    const result = await getQuestionsFromDB();
  
    // Assert that our mock `createConnection` function was called.
    expect(mysql.createConnection).toHaveBeenCalled();

    // Assert that the `execute` method on our mock connection was called with the correct SQL query.
    expect(mysql.createConnection().execute).toHaveBeenCalledWith('SELECT * FROM Questions');

    // Assert that the result of our function matches our mock data.
    expect(result).toEqual(mockData);
  });
});
