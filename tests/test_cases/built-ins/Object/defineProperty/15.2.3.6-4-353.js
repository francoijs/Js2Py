// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-353
description: >
    ES5 Attributes - fail to update the data property ([[Writable]] is
    true, [[Enumerable]] is false, [[Configurable]] is false) to an
    accessor property
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        Object.defineProperty(obj, "prop", {
            value: 2010,
            writable: true,
            enumerable: false,
            configurable: false
        });
        var propertyDefineCorrect = obj.hasOwnProperty("prop");
        var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");

        function getFunc() {
            return 20;
        }
        try {
            Object.defineProperty(obj, "prop", {
                get: getFunc
            });
            return false;
        } catch (e) {
            var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");
            return propertyDefineCorrect && desc1.value === 2010 && obj.prop === 2010 && typeof desc2.get === "undefined" && e instanceof TypeError;
        }
    }
runTestCase(testcase);
