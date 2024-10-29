import mongoose, { Model } from "mongoose";

import defineOAuthClients from "./oauth/OAuthClients";
import defineOAuthAccessTokens from "./oauth/OAuthAccessTokens";
import defineOAuthAuthorizationCodes from "./oauth/OAuthAuthorizationTokens";
import defineOAuthRefreshTokens from "./oauth/OAuthRefreshTokens";

/**
 * Models
 */
export class Models {
	OAuthClients: Model<any>;
	OAuthAuthorizationCodes: Model<any>;
	OAuthAccessTokens: Model<any>;
	OAuthRefreshTokens: Model<any>;
	
	/**
	 * Constructor
	 */
	constructor() {
		// OAuth models
		this.OAuthClients = defineOAuthClients(mongoose);
		this.OAuthAuthorizationCodes = defineOAuthAuthorizationCodes(mongoose);
		this.OAuthAccessTokens = defineOAuthAccessTokens(mongoose);
		this.OAuthRefreshTokens = defineOAuthRefreshTokens(mongoose);
	}
}
