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
		return this._sqlErrors.messageSegments;
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

	/*
		Functions to populate the various arrays with objects
	*/
	addMessageType(typeIn, descIn) {
		//console.log(`typeIn: ${typeIn}, descIn: ${descIn}`);
		const msgType = {
			msgType: typeIn,
			msgDesc: descIn
		}
		this.messageTypes = msgType;
	},
	
	addMessageSegment(typeIn, segPosIn, subPosIn, textIn) {
		//console.log(`typeIn: ${typeIn}, segPosIn: ${segPosIn}, textIn: ${textIn}`);
		const msgSeg = {
			msgType: typeIn,
			msgPos: segPosIn,
			msgSubPos: subPosIn,
			segText: textIn
		}
		this.messageSegments = msgSeg
	},

	addMessageVariable(typeIn, segPosIn, subPosIn, varIn) {
		//console.log(`typeIn: ${typeIn}, segPosIn: ${segPosIn}, varIn: ${varIn}`);
		const msgVar = {
			msgType: typeIn,
			msgPos: segPosIn,
			msgSubPos: subPosIn,
			varText: varIn
		}
		this.messageVariables = msgVar
	},

	/*
		The work is done here.
		1. We get a random message type
		2. We then grab all the message pieces of the relevant type and put them
			into arrays, broken down by what they are
		3. We then put together a random message consisting of an opening segment, 
			a relevant variable, a middle segment and relevant variable, and a
			closing segment with a relevant variable.
	*/

	/*
		Remember - +1 because we're not zero-indexing these things 
	*/
	getRandomMessageType() {
		const randomType = (Math.floor(Math.random() * this.messageTypes.length) + 1);
		return randomType;
	},

	getRandomSegment() {
		const randomSegment = ((Math.floor(Math.random() * this.messageSegments.length) % 3) + 1);
		return randomSegment;
	},

	getRandomVariable() {
		const randomVariable = ((Math.floor(Math.random() * this.messageVariables.length) % 3) + 1);
		return randomVariable;
	},

	generateRandomMessage(){
		const messageTypeNo = this.getRandomMessageType();
		const messageSegmentOpenerNo = this.getRandomSegment();
		const messageVariableOpenerNo = this.getRandomVariable();
		const messageSegmentMidNo = this.getRandomSegment();
		const messageVariableMidNo = this.getRandomVariable();
		const messageSegmentCloserNo = this.getRandomSegment();
		const messageVariableCloserNo = this.getRandomVariable();

		let messageType;
		let messageSegmentOpener;
		let messageVariableOpener;
		let messageSegmentMid;
		let messageVariableMid;
		let messageSegmentCloser;
		let messageVariableCloser;

		
		//console.log(`type: ${messageTypeNo}`);
		//console.log(`opening segment: ${messageSegmentOpenerNo}, opening variable: ${messageVariableOpenerNo}`);
		//console.log(`mid segment: ${messageSegmentMidNo}, mid variable: ${messageVariableMidNo}`);
		//console.log(`closing segment: ${messageSegmentCloserNo}, closing variable: ${messageVariableCloserNo}`);
		
		// Proof of concept about finding the relevant object in the array
		// Might not be the most elegant, but it works at my skill level
		// Type
		for (i = 0; i < this.messageTypes.length; i++) {
			//console.log('Checking message types...')
			//console.log(this.messageTypes[i]);
			if (this.messageTypes[i].msgType === messageTypeNo) {
				//console.log('This is the one we want:')
				//console.log(`type: ${this.messageTypes[i].msgDesc}`);
				messageType = `${this.messageTypes[i].msgDesc}`
				break;
			}
		};

		// Opening segment
		for (i = 0; i < this.messageSegments.length; i++) {
			if (this.messageSegments[i].msgType === messageTypeNo && this.messageSegments[i].msgPos === 1 &&
				this.messageSegments[i].msgSubPos === messageSegmentOpenerNo) {
				//console.log(`opening segment: ${this.messageSegments[i].segText}`);
				messageSegmentOpener = `${this.messageSegments[i].segText}`
				break;
			}
		};

		// Opening variable
		for (i = 0; i < this.messageVariables.length; i++){
			if (this.messageVariables[i].msgType === messageTypeNo && this.messageVariables[i].msgPos === 1 &&
				this.messageVariables[i].msgSubPos === messageVariableOpenerNo) {
				//console.log(`opening variable: ${this.messageVariables[i].varText}`);
				messageVariableOpener = `${this.messageVariables[i].varText}`
				break;
			}
		};

		// Middle segment
		for (i = 0; i < this.messageSegments.length; i++) {
			if (this.messageSegments[i].msgType === messageTypeNo && this.messageSegments[i].msgPos === 2 &&
				this.messageSegments[i].msgSubPos === messageSegmentMidNo) {
				//console.log(`mid segment: ${this.messageSegments[i].segText}`);
				messageSegmentMid = `${this.messageSegments[i].segText}`
				break;
			}
		};

		// Middle variable
		for (i = 0; i < this.messageVariables.length; i++){
			if (this.messageVariables[i].msgType === messageTypeNo && this.messageVariables[i].msgPos === 2 &&
				this.messageVariables[i].msgSubPos === messageVariableMidNo) {
				//console.log(`mid variable: ${this.messageVariables[i].varText}`);
				messageVariableMid = `${this.messageVariables[i].varText}`
				break;
			}
		};

		// Closing segment
		for (i = 0; i < this.messageSegments.length; i++) {
			if (this.messageSegments[i].msgType === messageTypeNo && this.messageSegments[i].msgPos === 3 &&
				this.messageSegments[i].msgSubPos === messageSegmentCloserNo) {
				//console.log(`closing segment: ${this.messageSegments[i].segText}`);
				messageSegmentCloser = `${this.messageSegments[i].segText}`
				break;
			}
		};

		// Closing variable
		for (i = 0; i < this.messageVariables.length; i++){
			if (this.messageVariables[i].msgType === messageTypeNo && this.messageVariables[i].msgPos === 3 &&
				this.messageVariables[i].msgSubPos === messageVariableCloserNo) {
				//console.log(`closing variable: ${this.messageVariables[i].varText}`);
				messageVariableCloser = `${this.messageVariables[i].varText}`
				break;
			}
		};

		let sqlErrorMsg = `${messageType} alert! `
		sqlErrorMsg += `${messageSegmentOpener} ${messageVariableOpener} ${messageSegmentMid} ${messageVariableMid} `
		sqlErrorMsg += `${messageSegmentCloser} ${messageVariableCloser}`

		return sqlErrorMsg;
	},
};

// Populate things
// Placeholders will be replaced except where they might be funny if left in
messageMaker.addMessageType(1, `Security`);
messageMaker.addMessageSegment(1, 1, 1, `Login`);
messageMaker.addMessageSegment(1, 1, 2, `User`);
messageMaker.addMessageSegment(1, 1, 3, `Permission grant`);
messageMaker.addMessageSegment(1, 2, 1, `succeeded with code`);
messageMaker.addMessageSegment(1, 2, 2, `may or may not be authorized because`);
messageMaker.addMessageSegment(1, 2, 3, `failed. Failed so haaaard as a result of`);
messageMaker.addMessageSegment(1, 3, 1, `! Go think about what you've done`);
messageMaker.addMessageSegment(1, 3, 2, `, but you probably are only responsible for like 3% of that`);
messageMaker.addMessageSegment(1, 3, 3, `. Thought you'd like to know`);
messageMaker.addMessageVariable(1, 1, 1, `cheese`);
messageMaker.addMessageVariable(1, 1, 2, `[inconsolable wailing]`);
messageMaker.addMessageVariable(1, 1, 3, `something or other`);
messageMaker.addMessageVariable(1, 2, 1, `wombat`);
messageMaker.addMessageVariable(1, 2, 2, `[redacted for security purposes]`);
messageMaker.addMessageVariable(1, 2, 3, `- I was gonna tell you but you have to guess`);
messageMaker.addMessageVariable(1, 3, 1, `, snookums.`);
messageMaker.addMessageVariable(1, 3, 2, `... idiot.`);
messageMaker.addMessageVariable(1, 3, 3, `, ya big cutie.`);

messageMaker.addMessageType(2, `File`);
messageMaker.addMessageSegment(2, 1, 1, `Data file`);
messageMaker.addMessageSegment(2, 1, 2, `Log file`);
messageMaker.addMessageSegment(2, 1, 3, `Filegroup`);
messageMaker.addMessageSegment(2, 2, 1, `is full`);
messageMaker.addMessageSegment(2, 2, 2, `mmmmmmmmmmmmmmm`);
messageMaker.addMessageSegment(2, 2, 3, `cannot be, uh, found, opened, comprehended, because`);
messageMaker.addMessageSegment(2, 3, 1, `so maybe give it a few minutes`);
messageMaker.addMessageSegment(2, 3, 2, `tough luck that`);
messageMaker.addMessageSegment(2, 3, 3, `keeps its secrets`);
messageMaker.addMessageVariable(2, 1, 1, `like-you-can-tell-the-difference.mdf-ldf-does-it-matter`);
messageMaker.addMessageVariable(2, 1, 2, `uuuuuh, three?`);
messageMaker.addMessageVariable(2, 1, 3, `filevar1-3`);
messageMaker.addMessageVariable(2, 2, 1, `of stars`);
messageMaker.addMessageVariable(2, 2, 2, `, look, it's going through some stuff`);
messageMaker.addMessageVariable(2, 2, 3, `you stopped reading 3 words ago, didn't you`);
messageMaker.addMessageVariable(2, 3, 1, `sport.`);
messageMaker.addMessageVariable(2, 3, 2, `AND DON'T FORGET IT.`);
messageMaker.addMessageVariable(2, 3, 3, `... shiny shiny shoooooooes...`);

messageMaker.addMessageType(3, `Data`);
messageMaker.addMessageSegment(3, 1, 1, `WHAT THE HECK`);
messageMaker.addMessageSegment(3, 1, 2, `INSERT operation`);
messageMaker.addMessageSegment(3, 1, 3, `No`);
messageMaker.addMessageSegment(3, 2, 1, `isn't happening`);
messageMaker.addMessageSegment(3, 2, 2, `succeeded beyond your wildest dreams`);
messageMaker.addMessageSegment(3, 2, 3, `<funny message here>`);
messageMaker.addMessageSegment(3, 3, 1, `don't that beat all`);
messageMaker.addMessageSegment(3, 3, 2, `go think about what you've done`);
messageMaker.addMessageSegment(3, 3, 3, `AND DON'T FORGE - oh I've already done this one`);
messageMaker.addMessageVariable(3, 1, 1, `champ`);
messageMaker.addMessageVariable(3, 1, 2, `WAIT WHAT UH UH`);
messageMaker.addMessageVariable(3, 1, 3, `on index mumblemumble`);
messageMaker.addMessageVariable(3, 2, 1, `innit`);
messageMaker.addMessageVariable(3, 2, 2, `lucky so-and-so`);
messageMaker.addMessageVariable(3, 2, 3, `beep boop beep`);
messageMaker.addMessageVariable(3, 3, 1, `(gonna level with you, I don't have anything here)`);
messageMaker.addMessageVariable(3, 3, 2, `so try again in 10 minutes maybe?`);
messageMaker.addMessageVariable(3, 3, 3, `might as well go have a coffee while you're at it`);

/*
messageMaker.addMessageType(1, `security`);
messageMaker.addMessageSegment(1, 1, 1, `securityseg1-1`);
messageMaker.addMessageSegment(1, 1, 2, `securityseg1-2`);
messageMaker.addMessageSegment(1, 1, 3, `securityseg1-3`);
messageMaker.addMessageSegment(1, 2, 1, `securityseg2-1`);
messageMaker.addMessageSegment(1, 2, 2, `securityseg2-2`);
messageMaker.addMessageSegment(1, 2, 3, `securityseg2-3`);
messageMaker.addMessageSegment(1, 3, 1, `securityseg3-1`);
messageMaker.addMessageSegment(1, 3, 2, `securityseg3-2`);
messageMaker.addMessageSegment(1, 3, 3, `securityseg3-3`);
messageMaker.addMessageVariable(1, 1, 1, `securityvar1-1`);
messageMaker.addMessageVariable(1, 1, 2, `securityvar1-2`);
messageMaker.addMessageVariable(1, 1, 3, `securityvar1-3`);
messageMaker.addMessageVariable(1, 2, 1, `securityvar2-1`);
messageMaker.addMessageVariable(1, 2, 2, `securityvar2-2`);
messageMaker.addMessageVariable(1, 2, 3, `securityvar2-3`);
messageMaker.addMessageVariable(1, 3, 1, `securityvar3-1`);
messageMaker.addMessageVariable(1, 3, 2, `securityvar3-2`);
messageMaker.addMessageVariable(1, 3, 3, `securityvar3-3`);

messageMaker.addMessageType(2, `file`);
messageMaker.addMessageSegment(2, 1, 1, `fileseg1-1`);
messageMaker.addMessageSegment(2, 1, 2, `fileseg1-2`);
messageMaker.addMessageSegment(2, 1, 3, `fileseg1-3`);
messageMaker.addMessageSegment(2, 2, 1, `fileseg2-1`);
messageMaker.addMessageSegment(2, 2, 2, `fileseg2-2`);
messageMaker.addMessageSegment(2, 2, 3, `fileseg2-3`);
messageMaker.addMessageSegment(2, 3, 1, `fileseg3-1`);
messageMaker.addMessageSegment(2, 3, 2, `fileseg3-2`);
messageMaker.addMessageSegment(2, 3, 3, `fileseg3-3`);
messageMaker.addMessageVariable(2, 1, 1, `filevar1-1`);
messageMaker.addMessageVariable(2, 1, 2, `filevar1-2`);
messageMaker.addMessageVariable(2, 1, 3, `filevar1-3`);
messageMaker.addMessageVariable(2, 2, 1, `filevar2-1`);
messageMaker.addMessageVariable(2, 2, 2, `filevar2-2`);
messageMaker.addMessageVariable(2, 2, 3, `filevar2-3`);
messageMaker.addMessageVariable(2, 3, 1, `filevar3-1`);
messageMaker.addMessageVariable(2, 3, 2, `filevar3-2`);
messageMaker.addMessageVariable(2, 3, 3, `filevar3-3`);

messageMaker.addMessageType(3, `data`);
messageMaker.addMessageSegment(3, 1, 1, `dataseg1-1`);
messageMaker.addMessageSegment(3, 1, 2, `dataseg1-2`);
messageMaker.addMessageSegment(3, 1, 3, `dataseg1-3`);
messageMaker.addMessageSegment(3, 2, 1, `dataseg2-1`);
messageMaker.addMessageSegment(3, 2, 2, `dataseg2-2`);
messageMaker.addMessageSegment(3, 2, 3, `dataseg2-3`);
messageMaker.addMessageSegment(3, 3, 1, `dataseg3-1`);
messageMaker.addMessageSegment(3, 3, 2, `dataseg3-2`);
messageMaker.addMessageSegment(3, 3, 3, `dataseg3-3`);
messageMaker.addMessageVariable(3, 1, 1, `datavar1-1`);
messageMaker.addMessageVariable(3, 1, 2, `datavar1-2`);
messageMaker.addMessageVariable(3, 1, 3, `datavar1-3`);
messageMaker.addMessageVariable(3, 2, 1, `datavar2-1`);
messageMaker.addMessageVariable(3, 2, 2, `datavar2-2`);
messageMaker.addMessageVariable(3, 2, 3, `datavar2-3`);
messageMaker.addMessageVariable(3, 3, 1, `datavar3-1`);
messageMaker.addMessageVariable(3, 3, 2, `datavar3-2`);
messageMaker.addMessageVariable(3, 3, 3, `datavar3-3`);
*/