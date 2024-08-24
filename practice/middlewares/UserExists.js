const { User } = require('../db');

// Function to check if a username exists
async function isUsernameTaken(username) {
    try {
      // Query the database to find if any user has the given username
      const existingUser = await User.findOne({ username: username });
  
      // If existingUser is null, username is not taken; otherwise, it's taken
      return !!existingUser; // Convert to boolean (true if existingUser is not null)
    } catch (error) {
      // Handle any errors
      console.error('Error checking username:', error);
      return false; // Return false indicating username check failed
    }
}

module.exports = {
    isUsernameTaken
}