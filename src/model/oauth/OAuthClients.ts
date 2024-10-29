import { Mongoose } from "mongoose";

/**
 * Define OAuth2 clients
 */
export default function defineOAuthClients(mongoose: Mongoose) {
	const { Schema } = mongoose;
	return mongoose.model(
		"OAuthClients",
		new Schema({
			_id: {
				type: String,
				auto: true,
			},
			userId: {
				type: String,
			},
			clientId: {
				type: String,
			},
			clientSecret: {
				type: String,
			},
			callbackUrl: {
				type: String,
			},
			grants: {
				type: [String],
				required: true,
				enum: ["authorization_code", "refresh_token"],
			},
		}),
		"oauth-clients"
	);
}
