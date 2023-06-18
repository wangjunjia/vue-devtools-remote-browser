"use strict";exports.id=7135,exports.ids=[7135],exports.modules={87135:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"conf\": () => (/* binding */ conf),\n/* harmony export */   \"language\": () => (/* binding */ language)\n/* harmony export */ });\n/* harmony import */ var _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82526);\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    comments: {\n        blockComment: ['\x3c!--', '--\x3e']\n    },\n    brackets: [['<', '>']],\n    autoClosingPairs: [\n        { open: '<', close: '>' },\n        { open: \"'\", close: \"'\" },\n        { open: '\"', close: '\"' }\n    ],\n    surroundingPairs: [\n        { open: '<', close: '>' },\n        { open: \"'\", close: \"'\" },\n        { open: '\"', close: '\"' }\n    ],\n    onEnterRules: [\n        {\n            beforeText: new RegExp(\"<([_:\\\\w][_:\\\\w-.\\\\d]*)([^/>]*(?!/)>)[^<]*$\", 'i'),\n            afterText: /^<\\/([_:\\w][_:\\w-.\\d]*)\\s*>$/i,\n            action: {\n                indentAction: _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__/* .languages.IndentAction.IndentOutdent */ .Mj.IndentAction.IndentOutdent\n            }\n        },\n        {\n            beforeText: new RegExp(\"<(\\\\w[\\\\w\\\\d]*)([^/>]*(?!/)>)[^<]*$\", 'i'),\n            action: { indentAction: _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__/* .languages.IndentAction.Indent */ .Mj.IndentAction.Indent }\n        }\n    ]\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.xml',\n    ignoreCase: true,\n    // Useful regular expressions\n    qualifiedName: /(?:[\\w\\.\\-]+:)?[\\w\\.\\-]+/,\n    tokenizer: {\n        root: [\n            [/[^<&]+/, ''],\n            { include: '@whitespace' },\n            // Standard opening tag\n            [/(<)(@qualifiedName)/, [{ token: 'delimiter' }, { token: 'tag', next: '@tag' }]],\n            // Standard closing tag\n            [\n                /(<\\/)(@qualifiedName)(\\s*)(>)/,\n                [{ token: 'delimiter' }, { token: 'tag' }, '', { token: 'delimiter' }]\n            ],\n            // Meta tags - instruction\n            [/(<\\?)(@qualifiedName)/, [{ token: 'delimiter' }, { token: 'metatag', next: '@tag' }]],\n            // Meta tags - declaration\n            [/(<\\!)(@qualifiedName)/, [{ token: 'delimiter' }, { token: 'metatag', next: '@tag' }]],\n            // CDATA\n            [/<\\!\\[CDATA\\[/, { token: 'delimiter.cdata', next: '@cdata' }],\n            [/&\\w+;/, 'string.escape']\n        ],\n        cdata: [\n            [/[^\\]]+/, ''],\n            [/\\]\\]>/, { token: 'delimiter.cdata', next: '@pop' }],\n            [/\\]/, '']\n        ],\n        tag: [\n            [/[ \\t\\r\\n]+/, ''],\n            [\n                /(@qualifiedName)(\\s*=\\s*)(\"[^\"]*\"|'[^']*')/,\n                ['attribute.name', '', 'attribute.value']\n            ],\n            [\n                /(@qualifiedName)(\\s*=\\s*)(\"[^\">?\\/]*|'[^'>?\\/]*)(?=[\\?\\/]\\>)/,\n                ['attribute.name', '', 'attribute.value']\n            ],\n            [\n                /(@qualifiedName)(\\s*=\\s*)(\"[^\">]*|'[^'>]*)/,\n                ['attribute.name', '', 'attribute.value']\n            ],\n            [/@qualifiedName/, 'attribute.name'],\n            [/\\?>/, { token: 'delimiter', next: '@pop' }],\n            [/(\\/)(>)/, [{ token: 'tag' }, { token: 'delimiter', next: '@pop' }]],\n            [/>/, { token: 'delimiter', next: '@pop' }]\n        ],\n        whitespace: [\n            [/[ \\t\\r\\n]+/, ''],\n            [/\x3c!--/, { token: 'comment', next: '@comment' }]\n        ],\n        comment: [\n            [/[^<\\-]+/, 'comment.content'],\n            [/--\x3e/, { token: 'comment', next: '@pop' }],\n            [/\x3c!--/, 'comment.content.invalid'],\n            [/[<\\-]/, 'comment.content']\n        ]\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODcxMzUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDNkQ7QUFDdEQ7QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxVQUFVLHVCQUF1QjtBQUNqQyxVQUFVLHVCQUF1QjtBQUNqQyxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVUsdUJBQXVCO0FBQ2pDLFVBQVUsdUJBQXVCO0FBQ2pDLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIscUlBQW9DO0FBQ2xFO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxzQkFBc0IsY0FBYyx1SEFBNkI7QUFDakU7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx3QkFBd0I7QUFDdEM7QUFDQSx1Q0FBdUMsb0JBQW9CLElBQUksNEJBQTRCO0FBQzNGO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixvQkFBb0IsSUFBSSxjQUFjLFFBQVEsb0JBQW9CO0FBQ3JGO0FBQ0E7QUFDQSx5Q0FBeUMsb0JBQW9CLElBQUksZ0NBQWdDO0FBQ2pHO0FBQ0EseUNBQXlDLG9CQUFvQixJQUFJLGdDQUFnQztBQUNqRztBQUNBLCtCQUErQiwwQ0FBMEM7QUFDekUsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix3Q0FBd0M7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixrQ0FBa0M7QUFDeEQsMkJBQTJCLGNBQWMsSUFBSSxrQ0FBa0M7QUFDL0Usb0JBQW9CLGtDQUFrQztBQUN0RDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsb0NBQW9DO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnQ0FBZ0M7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0B2dWUvZGV2dG9vbHMvLi4vLi4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy94bWwveG1sLmpzP2FlMDgiXSwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5pbXBvcnQgeyBsYW5ndWFnZXMgfSBmcm9tICcuLi9maWxsZXJzL21vbmFjby1lZGl0b3ItY29yZS5qcyc7XG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJzwhLS0nLCAnLS0+J11cbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbWyc8JywgJz4nXV0sXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICc8JywgY2xvc2U6ICc+JyB9LFxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9XG4gICAgXSxcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJzwnLCBjbG9zZTogJz4nIH0sXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH1cbiAgICBdLFxuICAgIG9uRW50ZXJSdWxlczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBiZWZvcmVUZXh0OiBuZXcgUmVnRXhwKFwiPChbXzpcXFxcd11bXzpcXFxcdy0uXFxcXGRdKikoW14vPl0qKD8hLyk+KVtePF0qJFwiLCAnaScpLFxuICAgICAgICAgICAgYWZ0ZXJUZXh0OiAvXjxcXC8oW186XFx3XVtfOlxcdy0uXFxkXSopXFxzKj4kL2ksXG4gICAgICAgICAgICBhY3Rpb246IHtcbiAgICAgICAgICAgICAgICBpbmRlbnRBY3Rpb246IGxhbmd1YWdlcy5JbmRlbnRBY3Rpb24uSW5kZW50T3V0ZGVudFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBiZWZvcmVUZXh0OiBuZXcgUmVnRXhwKFwiPChcXFxcd1tcXFxcd1xcXFxkXSopKFteLz5dKig/IS8pPilbXjxdKiRcIiwgJ2knKSxcbiAgICAgICAgICAgIGFjdGlvbjogeyBpbmRlbnRBY3Rpb246IGxhbmd1YWdlcy5JbmRlbnRBY3Rpb24uSW5kZW50IH1cbiAgICAgICAgfVxuICAgIF1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIGRlZmF1bHRUb2tlbjogJycsXG4gICAgdG9rZW5Qb3N0Zml4OiAnLnhtbCcsXG4gICAgaWdub3JlQ2FzZTogdHJ1ZSxcbiAgICAvLyBVc2VmdWwgcmVndWxhciBleHByZXNzaW9uc1xuICAgIHF1YWxpZmllZE5hbWU6IC8oPzpbXFx3XFwuXFwtXSs6KT9bXFx3XFwuXFwtXSsvLFxuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbXG4gICAgICAgICAgICBbL1tePCZdKy8sICcnXSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxuICAgICAgICAgICAgLy8gU3RhbmRhcmQgb3BlbmluZyB0YWdcbiAgICAgICAgICAgIFsvKDwpKEBxdWFsaWZpZWROYW1lKS8sIFt7IHRva2VuOiAnZGVsaW1pdGVyJyB9LCB7IHRva2VuOiAndGFnJywgbmV4dDogJ0B0YWcnIH1dXSxcbiAgICAgICAgICAgIC8vIFN0YW5kYXJkIGNsb3NpbmcgdGFnXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLyg8XFwvKShAcXVhbGlmaWVkTmFtZSkoXFxzKikoPikvLFxuICAgICAgICAgICAgICAgIFt7IHRva2VuOiAnZGVsaW1pdGVyJyB9LCB7IHRva2VuOiAndGFnJyB9LCAnJywgeyB0b2tlbjogJ2RlbGltaXRlcicgfV1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBNZXRhIHRhZ3MgLSBpbnN0cnVjdGlvblxuICAgICAgICAgICAgWy8oPFxcPykoQHF1YWxpZmllZE5hbWUpLywgW3sgdG9rZW46ICdkZWxpbWl0ZXInIH0sIHsgdG9rZW46ICdtZXRhdGFnJywgbmV4dDogJ0B0YWcnIH1dXSxcbiAgICAgICAgICAgIC8vIE1ldGEgdGFncyAtIGRlY2xhcmF0aW9uXG4gICAgICAgICAgICBbLyg8XFwhKShAcXVhbGlmaWVkTmFtZSkvLCBbeyB0b2tlbjogJ2RlbGltaXRlcicgfSwgeyB0b2tlbjogJ21ldGF0YWcnLCBuZXh0OiAnQHRhZycgfV1dLFxuICAgICAgICAgICAgLy8gQ0RBVEFcbiAgICAgICAgICAgIFsvPFxcIVxcW0NEQVRBXFxbLywgeyB0b2tlbjogJ2RlbGltaXRlci5jZGF0YScsIG5leHQ6ICdAY2RhdGEnIH1dLFxuICAgICAgICAgICAgWy8mXFx3KzsvLCAnc3RyaW5nLmVzY2FwZSddXG4gICAgICAgIF0sXG4gICAgICAgIGNkYXRhOiBbXG4gICAgICAgICAgICBbL1teXFxdXSsvLCAnJ10sXG4gICAgICAgICAgICBbL1xcXVxcXT4vLCB7IHRva2VuOiAnZGVsaW1pdGVyLmNkYXRhJywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICAgICAgWy9cXF0vLCAnJ11cbiAgICAgICAgXSxcbiAgICAgICAgdGFnOiBbXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnJ10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLyhAcXVhbGlmaWVkTmFtZSkoXFxzKj1cXHMqKShcIlteXCJdKlwifCdbXiddKicpLyxcbiAgICAgICAgICAgICAgICBbJ2F0dHJpYnV0ZS5uYW1lJywgJycsICdhdHRyaWJ1dGUudmFsdWUnXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKEBxdWFsaWZpZWROYW1lKShcXHMqPVxccyopKFwiW15cIj4/XFwvXSp8J1teJz4/XFwvXSopKD89W1xcP1xcL11cXD4pLyxcbiAgICAgICAgICAgICAgICBbJ2F0dHJpYnV0ZS5uYW1lJywgJycsICdhdHRyaWJ1dGUudmFsdWUnXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKEBxdWFsaWZpZWROYW1lKShcXHMqPVxccyopKFwiW15cIj5dKnwnW14nPl0qKS8sXG4gICAgICAgICAgICAgICAgWydhdHRyaWJ1dGUubmFtZScsICcnLCAnYXR0cmlidXRlLnZhbHVlJ11cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbL0BxdWFsaWZpZWROYW1lLywgJ2F0dHJpYnV0ZS5uYW1lJ10sXG4gICAgICAgICAgICBbL1xcPz4vLCB7IHRva2VuOiAnZGVsaW1pdGVyJywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICAgICAgWy8oXFwvKSg+KS8sIFt7IHRva2VuOiAndGFnJyB9LCB7IHRva2VuOiAnZGVsaW1pdGVyJywgbmV4dDogJ0Bwb3AnIH1dXSxcbiAgICAgICAgICAgIFsvPi8sIHsgdG9rZW46ICdkZWxpbWl0ZXInLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgd2hpdGVzcGFjZTogW1xuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rLywgJyddLFxuICAgICAgICAgICAgWy88IS0tLywgeyB0b2tlbjogJ2NvbW1lbnQnLCBuZXh0OiAnQGNvbW1lbnQnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnQ6IFtcbiAgICAgICAgICAgIFsvW148XFwtXSsvLCAnY29tbWVudC5jb250ZW50J10sXG4gICAgICAgICAgICBbLy0tPi8sIHsgdG9rZW46ICdjb21tZW50JywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICAgICAgWy88IS0tLywgJ2NvbW1lbnQuY29udGVudC5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbL1s8XFwtXS8sICdjb21tZW50LmNvbnRlbnQnXVxuICAgICAgICBdXG4gICAgfVxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///87135\n")}};