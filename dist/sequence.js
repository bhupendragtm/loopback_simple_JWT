"use strict";
// Copyright IBM Corp. and LoopBack contributors 2018,2020. All Rights Reserved.
// Node module: @loopback/example-todo
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySequence = void 0;
// import {MiddlewareSequence} from '@loopback/rest';
// export class MySequence extends MiddlewareSequence {}
const rest_1 = require("@loopback/rest");
// import {
//   AuthenticateFn,
//   AuthenticationBindings,
//   AUTHENTICATION_STRATEGY_NOT_FOUND,
//   USER_PROFILE_NOT_FOUND,
// } from '@loopback/authentication';
// import { inject } from '@loopback/core';
class MySequence extends rest_1.MiddlewareSequence {
}
exports.MySequence = MySequence;
//# sourceMappingURL=sequence.js.map