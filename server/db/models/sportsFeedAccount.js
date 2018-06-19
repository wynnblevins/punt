mongoose.promise = Promise

// Define userSchema
const sportsFeedAccountSchema = new Schema({
	username: { type: String, unique: false },
	password: { type: String, unique: false },
});

// Create reference to User & export
const SportsFeedAccount = mongoose.model('SportsFeedAccount', sportsFeedAccountSchema);
module.exports = SportsFeedAccount;