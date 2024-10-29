import mongoose, { Model } from "mongoose";

import defineOAuthClients from "./oauth/OAuthClients";
import defineOAuthAccessTokens from "./oauth/OAuthAccessTokens";
import defineOAuthAuthorizationCodes from "./oauth/OAuthAuthorizationTokens";
import defineOAuthRefreshTokens from "./oauth/OAuthRefreshTokens";
import defineUserModel from "./user/User";

/**
 * Models
 */
export class Models {
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
	constructor() {
		// User
		this.User = defineUserModel(mongoose);
		
		// OAuth models
		this.OAuthClients = defineOAuthClients(mongoose);
		this.OAuthAuthorizationCodes = defineOAuthAuthorizationCodes(mongoose);
		this.OAuthAccessTokens = defineOAuthAccessTokens(mongoose);
		this.OAuthRefreshTokens = defineOAuthRefreshTokens(mongoose);
	}
}
