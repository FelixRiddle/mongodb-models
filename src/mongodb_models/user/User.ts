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
				name: {
					type: String,
					required: true,
				},
				password: {
					type: String,
					required: true,
					trim: true,
				},
				username: {
					type: String,
                    unique: true,
				},
				// Contact
				phoneNumber: {
					type: String,
				},
				email: {
					type: String,
					unique: true,
					lowercase: true,
					trim: true,
				},
			},
			{
				timestamps: true,
			}
		)
	);

	return userModel;
}
