import bcrypt from "bcrypt";
import { Mongoose, Schema } from "mongoose";

/**
 * Define user model
 */
export default function defineUserModel(mongoose: Mongoose) {
	// Define user model
	const userModel = mongoose.model(
		"User",
		new Schema(
			{
				// pfp
				image: {
					type: String,
					default: "",
				},
				email: {
					type: String,
					unique: true,
					lowercase: true,
					trim: true,
				},
				name: {
					type: String,
					required: true,
				},
				password: {
					type: String,
					required: true,
					trim: true,
				},
				token: String,
				expires: Date,
			},
			{
				timestamps: true,
			}
		)
	);

	return userModel;
}
