import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AuthPayloadKeySpecifier = ('data' | 'errors' | 'message' | 'success' | 'token' | AuthPayloadKeySpecifier)[];
export type AuthPayloadFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileKeySpecifier = ('createdAt' | 'encoding' | 'filename' | 'id' | 'mimetype' | 'name' | 'path' | 'rank' | 'size' | 'updatedAt' | FileKeySpecifier)[];
export type FileFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	encoding?: FieldPolicy<any> | FieldReadFunction<any>,
	filename?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	mimetype?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	rank?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('blockUser' | 'createResetPasswordProcessor' | 'resetPasswordProcessor' | 'signin' | 'signup' | 'singleUpload' | 'unblockUser' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	blockUser?: FieldPolicy<any> | FieldReadFunction<any>,
	createResetPasswordProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	resetPasswordProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	signin?: FieldPolicy<any> | FieldReadFunction<any>,
	signup?: FieldPolicy<any> | FieldReadFunction<any>,
	singleUpload?: FieldPolicy<any> | FieldReadFunction<any>,
	unblockUser?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('file' | 'files' | 'filesCount' | 'me' | 'tech' | 'teches' | 'user' | 'users' | 'usersCount' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	file?: FieldPolicy<any> | FieldReadFunction<any>,
	files?: FieldPolicy<any> | FieldReadFunction<any>,
	filesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	me?: FieldPolicy<any> | FieldReadFunction<any>,
	tech?: FieldPolicy<any> | FieldReadFunction<any>,
	teches?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	usersCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RequestErrorKeySpecifier = ('key' | 'message' | RequestErrorKeySpecifier)[];
export type RequestErrorFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResetPasswordKeySpecifier = ('foo' | 'id' | ResetPasswordKeySpecifier)[];
export type ResetPasswordFieldPolicy = {
	foo?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResetPasswordResponseKeySpecifier = ('data' | 'errors' | 'message' | 'success' | ResetPasswordResponseKeySpecifier)[];
export type ResetPasswordResponseFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TechKeySpecifier = ('desc' | 'id' | 'image' | 'link' | 'title' | TechKeySpecifier)[];
export type TechFieldPolicy = {
	desc?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('active' | 'blocked' | 'createdAt' | 'email' | 'fullname' | 'id' | 'image' | 'showEmail' | 'showFullname' | 'sudo' | 'updatedAt' | 'username' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	blocked?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	fullname?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	showEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	showFullname?: FieldPolicy<any> | FieldReadFunction<any>,
	sudo?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypedTypePolicies = TypePolicies & {
	AuthPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthPayloadKeySpecifier | (() => undefined | AuthPayloadKeySpecifier),
		fields?: AuthPayloadFieldPolicy,
	},
	File?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileKeySpecifier | (() => undefined | FileKeySpecifier),
		fields?: FileFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	RequestError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RequestErrorKeySpecifier | (() => undefined | RequestErrorKeySpecifier),
		fields?: RequestErrorFieldPolicy,
	},
	ResetPassword?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResetPasswordKeySpecifier | (() => undefined | ResetPasswordKeySpecifier),
		fields?: ResetPasswordFieldPolicy,
	},
	ResetPasswordResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResetPasswordResponseKeySpecifier | (() => undefined | ResetPasswordResponseKeySpecifier),
		fields?: ResetPasswordResponseFieldPolicy,
	},
	Tech?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TechKeySpecifier | (() => undefined | TechKeySpecifier),
		fields?: TechFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	}
};