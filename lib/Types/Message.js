"use strict";
const { proto } = require('../../WAProto/index.js');
// export the WAMessage Prototypes
exports.WAProto = proto;
const WAMessageStubType = proto.WebMessageInfo.StubType;
exports.WAMessageStubType = WAMessageStubType;
const WAMessageStatus = proto.WebMessageInfo.Status;
exports.WAMessageStatus = WAMessageStatus;
var WAMessageAddressingMode;
(function (WAMessageAddressingMode) {
    WAMessageAddressingMode["PN"] = "pn";
    WAMessageAddressingMode["LID"] = "lid";
})(WAMessageAddressingMode || (WAMessageAddressingMode = {}));
exports.WAMessageAddressingMode = WAMessageAddressingMode;