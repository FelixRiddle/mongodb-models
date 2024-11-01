import dotenv from "dotenv";

/**
 * Initialize dotenv in order
 */
export function initializeDotenv() {
	// First the default env
	dotenv.config({
		path: ".env",
	});

	if (isTesting()) {
		dotenv.config({
			path: ".env.testing",
			override: true,
		});
	} else if (isDevelopment()) {
		dotenv.config({
			path: ".env.development",
			override: true,
		});
	} else {
		dotenv.config({
			path: ".env.production",
			override: true,
		});
	}

	// Then the local env
	dotenv.config({
		path: ".env.local",
		override: true,
	});

	// Specific locals
	if (isTesting()) {
		// Then the development env
		dotenv.config({
			path: ".env.testing.local",
			override: true,
		});
	} else if (isDevelopment()) {
		dotenv.config({
			path: ".env.development.local",
			override: true,
		});
	} else {
		dotenv.config({
			path: ".env.production.local",
			override: true,
		});
	}
}

/**
 * Unbiased database name
 */
export function defaultDatabaseName() {
	return process.env.DATABASE_NAME ?? "perseverancia";
}

/**
 * Get development database name
 */
export function developmentDatabaseName() {
	return process.env.DATABASE_NAME ?? "perseverancia-development";
}

/**
 * Production database name
 */
export function productionDatabaseName() {
	return process.env.PRODUCTION_DATABASE_NAME ?? "perseverancia-production";
}

/**
 * Testing database name
 */
export function testingDatabaseName() {
	return process.env.TESTING_DATABASE_NAME ?? "perseverancia-testing";
}

/**
 * Check if it's testing mode
 */
export function isTesting() {
	return process.env.NODE_ENV === "testing";
}

/**
 * Check if it's development
 */
export function isDevelopment() {
	return !process.env.NODE_ENV || process.env.NODE_ENV === "development";
}

/**
 * Mongodb uri
 */
export function mongodbUri() {
	return (
		process.env.MONGODB_URI ||
		`mongodb://localhost:${
			process.env.MONGODB_PORT || 27017
		}/${databaseName()}`
	);
}

/**
 * Use NODE_ENV to get the database name
 *
 * Preferred for detection of database name
 *
 * Note that to prevent wrongly synchronizing the database each one of the
 * methods requires a specific definition of the variable name in the environment
 */
export default function databaseName() {
	if (process.env.NODE_ENV === "production") {
		return productionDatabaseName();
	} else if (isDevelopment()) {
		return developmentDatabaseName();
	} else if (isTesting()) {
		return testingDatabaseName();
	} else {
		return defaultDatabaseName();
	}
}
