import mongoose, { Mongoose } from "mongoose";

import defineOAuthClients from "./oauth/OAuthClients";
import defineOAuthAccessTokens from "./oauth/OAuthAccessTokens";
import defineOAuthAuthorizationCodes from "./oauth/OAuthAuthorizationTokens";
import defineOAuthRefreshTokens from "./oauth/OAuthRefreshTokens";
import defineUserModel from "./user/User";
import databaseName, { mongodbUri } from "@/env";

/**
 * Models
 */
export default class Models {
	// User
	User;
	
	// OAuth
	OAuthClients;
	OAuthAuthorizationCodes;
	OAuthAccessTokens;
	OAuthRefreshTokens;
	
	/**
	 * Constructor
	 */
	constructor(mongoose: Mongoose) {
		// User
		this.User = defineUserModel(mongoose);
		
		// OAuth models
		this.OAuthClients = defineOAuthClients(mongoose);
		this.OAuthAuthorizationCodes = defineOAuthAuthorizationCodes(mongoose);
		this.OAuthAccessTokens = defineOAuthAccessTokens(mongoose);
		this.OAuthRefreshTokens = defineOAuthRefreshTokens(mongoose);
	}
	
	/**
	 * Instantitate this class with a connection
	 */
	static async create() {
		await mongoose.connect(mongodbUri());
		return new Models(mongoose);
	}
}
