// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-3-230
description: >
    Object.defineProperty - 'Attributes' is the global object that
    uses Object's [[Get]] method to access the 'get' property (8.10.5
    step 7.a)
includes:
    - runTestCase.js
    - fnGlobalObject.js
---*/

function testcase() {
        var obj = {};

        try {
            fnGlobalObject().get = function () {
                return "globalGetProperty";
            };

            Object.defineProperty(obj, "property", fnGlobalObject());

            return obj.property === "globalGetProperty";
        } finally {
            delete fnGlobalObject().get;
        }
    }
runTestCase(testcase);
