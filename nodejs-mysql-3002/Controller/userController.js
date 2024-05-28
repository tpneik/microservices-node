// userController.js
const User = require('../database/models/user');
const isProductExist = require('../database/constrain/constrain');

// Create a new user
async function createUser(req, res) {
	try {
		console.log(`Someone is calling createUser`)
		const { username, password, email } = req.body;
		const user = await User.create({ username, password, email });
		console.log(`Calling createUser successfully`)
		res.status(200).json(user);
	} catch (error) {
		console.log(`Calling createUser failed`)
		console.error("Error creating user:", error);
		res.status(500).json({ error: "Error creating user" });
	}
}

// Get a user by ID
async function getUserById(req, res) {
	try {
		console.log(`Someone is calling getUserById`)
		console.log(req.params.userId)
		const user = await User.findByPk(req.params.userId);
		if (!user) {
			console.log(`Calling getUserById failed`)
			res.status(500).json({user: "Not found!"})
		} else {
			console.log(`Calling getUserById successfully`)
			res.status(200).json(user);
		}
	} catch (error) {
		console.error("Error fetching user:", error);
		res.status(500).json({ error: "Error fetching user" });
	}
}

async function getAllUsers(req, res) {
	try {
		console.log(`Someone is calling getAllUsers`)
		const users = await User.findAll();
		console.log(`Calling getAllUsers successfully`)
		res.status(200).json(users); 
	} catch (error) {
		console.error('Error fetching users:', error);
		res.status(500).json({ error: 'Failed to retrieve users' }); 
	}
}


// Update a user
// async function updateUser(req, res) {
//   try {
//     const user = await User.findByPk(req.params.userId);
//     if (!user) {
//       res.status(404).json({ error: "User not found" });
//     } else {
//       // Update user fields (e.g., username, email) based on req.body
//       await user.update(req.body); 
//       res.json(user); // Send the updated user back
//     }
//   } catch (error) {
//     console.error("Error updating user:", error);
//     res.status(500).json({ error: "Error updating user" });
//   }
// }

// // Delete a user
// async function deleteUser(req, res) {
//   try {
//     const user = await User.findByPk(req.params.userId);
//     if (!user) {
//       res.status(404).json({ error: "User not found" });
//     } else {
//       await user.destroy();
//       res.sendStatus(204); // Successful deletion (no content)
//     }
//   } catch (error) {
//     console.error("Error deleting user:", error);
//     res.status(500).json({ error: "Error deleting user" });
//   }
// }

module.exports = {
	createUser,
	getUserById,
	getAllUsers
//   updateUser,
//   deleteUser
};