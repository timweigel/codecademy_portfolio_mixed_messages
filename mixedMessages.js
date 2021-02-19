/*=============================================================================
//	Author:			Tim Weigel
//	Creation date:	17 Feb 2021
//	Description:	Mixed Messages portfolio project.
					Goal: Create a random messaage generator
					that creates messages from at least three
					different pieces of data.
=============================================================================*/

// Gonna make an object for this
const messageMaker = {
	_sqlErrors: {
		messageTypes: [],
		messageSegments: [],
		messageVariables: [],
	},

	/*
		Some getters and setters to start with
	*/
	get messageTypes() {
		return this._sqlErrors.messageTypes;
	},

	set messageTypes(messageTypeIn) {
		this._sqlErrors.messageTypes.push(messageTypeIn);
	},

	get messageSegments() {
		return this._sqlErrors.messageType;
	},

	set messageSegments(messageSegmentIn) {
		this._sqlErrors.messageSegments.push(messageSegmentIn);
	},

	get messageVariables() {
		return this._sqlErrors.messageVariables;
	},

	set messageVariables(messageVariableIn) {
		this._sqlErrors.messageVariables.push(messageVariableIn);
	},

	
}