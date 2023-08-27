// Creating a mock database connection object.
// This object will have methods `execute` and `end` that are jest mock functions.
// `execute` will return a promise that resolves to an array with an empty array (simulating no rows returned from a query).
// `end` will return a promise that just resolves (simulating the end of a connection).
const mockConnection = {
    execute: jest.fn().mockResolvedValue([[]]),
    end: jest.fn().mockResolvedValue()
};

// Creating a jest mock function for the `createConnection` method of the mysql2/promise module.
// This mock function will return a promise that resolves to our mock connection object when called.
const mockCreateConnection = jest.fn().mockResolvedValue(mockConnection);

// Exporting our mocked `createConnection` method, so any code that imports `createConnection` from 'mysql2/promise' 
// will actually get our mock version of it.
module.exports = {
    createConnection: mockCreateConnection
};
