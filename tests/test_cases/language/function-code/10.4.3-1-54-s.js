// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 10.4.3-1-54-s
description: >
    Strict Mode - checking 'this' (Literal getter defined within
    strict mode)
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
"use strict";
var o = { get foo() { return this; } }
return o.foo===o;
}
runTestCase(testcase);
