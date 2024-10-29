import { Models } from "mongodb_models";
import { Model } from "mongoose";
import bcrypt from "bcrypt";

/**
 * User model
 * 
 * Different than mongodb models this one will have functionality closer to an application requirements
 */
export default class User {
	
	Model;
	Document;
	
	/**
	 * Constructor
	 */
	constructor(models: Models, document: Document) {
		this.Model = models.User;
		this.Document = document;
	}
	
	/**
     * Get user
     */
	async getUser(id: string) {
        return await this.Model.findById(id);
    }
	
	/**
	 * Hash password
	 */
	async hashPassword(password: string) {
        return await bcrypt.hash(password, 10);
    }
	
	/**
	 * Is email taken
	 */
	isEmailTaken(err: any) {
		if (err.name === "MongoError" && err.code === 11000) {
			return true;
		}
		
		return false;
	}
	
	/**
	 * Validate password
	 */
	validatePassword(password: string) {
		// Too intrinsic to guarantee type perfection
		const userPassword = (this.Document as any).password;
		
		return bcrypt.compareSync(password, userPassword);
    }
}
