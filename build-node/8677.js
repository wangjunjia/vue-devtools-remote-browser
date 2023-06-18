"use strict";exports.id=8677,exports.ids=[8677],exports.modules={68677:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"conf\": () => (/* binding */ conf),\n/* harmony export */   \"language\": () => (/* binding */ language)\n/* harmony export */ });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\nvar conf = {\n    comments: {\n        lineComment: '//',\n        blockComment: ['(*', '*)']\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' }\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: \"'\", close: \"'\" }\n    ],\n    folding: {\n        markers: {\n            start: new RegExp('^\\\\s*//\\\\s*#region\\\\b|^\\\\s*\\\\(\\\\*\\\\s*#region(.*)\\\\*\\\\)'),\n            end: new RegExp('^\\\\s*//\\\\s*#endregion\\\\b|^\\\\s*\\\\(\\\\*\\\\s*#endregion\\\\s*\\\\*\\\\)')\n        }\n    }\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.fs',\n    keywords: [\n        'abstract',\n        'and',\n        'atomic',\n        'as',\n        'assert',\n        'asr',\n        'base',\n        'begin',\n        'break',\n        'checked',\n        'component',\n        'const',\n        'constraint',\n        'constructor',\n        'continue',\n        'class',\n        'default',\n        'delegate',\n        'do',\n        'done',\n        'downcast',\n        'downto',\n        'elif',\n        'else',\n        'end',\n        'exception',\n        'eager',\n        'event',\n        'external',\n        'extern',\n        'false',\n        'finally',\n        'for',\n        'fun',\n        'function',\n        'fixed',\n        'functor',\n        'global',\n        'if',\n        'in',\n        'include',\n        'inherit',\n        'inline',\n        'interface',\n        'internal',\n        'land',\n        'lor',\n        'lsl',\n        'lsr',\n        'lxor',\n        'lazy',\n        'let',\n        'match',\n        'member',\n        'mod',\n        'module',\n        'mutable',\n        'namespace',\n        'method',\n        'mixin',\n        'new',\n        'not',\n        'null',\n        'of',\n        'open',\n        'or',\n        'object',\n        'override',\n        'private',\n        'parallel',\n        'process',\n        'protected',\n        'pure',\n        'public',\n        'rec',\n        'return',\n        'static',\n        'sealed',\n        'struct',\n        'sig',\n        'then',\n        'to',\n        'true',\n        'tailcall',\n        'trait',\n        'try',\n        'type',\n        'upcast',\n        'use',\n        'val',\n        'void',\n        'virtual',\n        'volatile',\n        'when',\n        'while',\n        'with',\n        'yield'\n    ],\n    // we include these common regular expressions\n    symbols: /[=><!~?:&|+\\-*\\^%;\\.,\\/]+/,\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n    integersuffix: /[uU]?[yslnLI]?/,\n    floatsuffix: /[fFmM]?/,\n    // The main tokenizer for our languages\n    tokenizer: {\n        root: [\n            // identifiers and keywords\n            [\n                /[a-zA-Z_]\\w*/,\n                {\n                    cases: {\n                        '@keywords': { token: 'keyword.$0' },\n                        '@default': 'identifier'\n                    }\n                }\n            ],\n            // whitespace\n            { include: '@whitespace' },\n            // [< attributes >].\n            [/\\[<.*>\\]/, 'annotation'],\n            // Preprocessor directive\n            [/^#(if|else|endif)/, 'keyword'],\n            // delimiters and operators\n            [/[{}()\\[\\]]/, '@brackets'],\n            [/[<>](?!@symbols)/, '@brackets'],\n            [/@symbols/, 'delimiter'],\n            // numbers\n            [/\\d*\\d+[eE]([\\-+]?\\d+)?(@floatsuffix)/, 'number.float'],\n            [/\\d*\\.\\d+([eE][\\-+]?\\d+)?(@floatsuffix)/, 'number.float'],\n            [/0x[0-9a-fA-F]+LF/, 'number.float'],\n            [/0x[0-9a-fA-F]+(@integersuffix)/, 'number.hex'],\n            [/0b[0-1]+(@integersuffix)/, 'number.bin'],\n            [/\\d+(@integersuffix)/, 'number'],\n            // delimiter: after number because of .\\d floats\n            [/[;,.]/, 'delimiter'],\n            // strings\n            [/\"([^\"\\\\]|\\\\.)*$/, 'string.invalid'],\n            [/\"\"\"/, 'string', '@string.\"\"\"'],\n            [/\"/, 'string', '@string.\"'],\n            // literal string\n            [/\\@\"/, { token: 'string.quote', next: '@litstring' }],\n            // characters\n            [/'[^\\\\']'B?/, 'string'],\n            [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],\n            [/'/, 'string.invalid']\n        ],\n        whitespace: [\n            [/[ \\t\\r\\n]+/, ''],\n            [/\\(\\*(?!\\))/, 'comment', '@comment'],\n            [/\\/\\/.*$/, 'comment']\n        ],\n        comment: [\n            [/[^*(]+/, 'comment'],\n            [/\\*\\)/, 'comment', '@pop'],\n            [/\\*/, 'comment'],\n            [/\\(\\*\\)/, 'comment'],\n            [/\\(/, 'comment']\n        ],\n        string: [\n            [/[^\\\\\"]+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            [\n                /(\"\"\"|\"B?)/,\n                {\n                    cases: {\n                        '$#==$S2': { token: 'string', next: '@pop' },\n                        '@default': 'string'\n                    }\n                }\n            ]\n        ],\n        litstring: [\n            [/[^\"]+/, 'string'],\n            [/\"\"/, 'string.escape'],\n            [/\"/, { token: 'string.quote', next: '@pop' }]\n        ]\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjg2NzcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxRQUFRLFlBQVksR0FBRztBQUNqQyxVQUFVLHVCQUF1QjtBQUNqQyxVQUFVLHVCQUF1QjtBQUNqQyxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVUsUUFBUSxZQUFZLEdBQUc7QUFDakMsVUFBVSx1QkFBdUI7QUFDakMsVUFBVSx1QkFBdUI7QUFDakMsVUFBVSx1QkFBdUI7QUFDakMsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyw4Q0FBOEMsSUFBSSxjQUFjLEVBQUUsY0FBYyxFQUFFO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHFCQUFxQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx3QkFBd0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDJDQUEyQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQywrQkFBK0I7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxQ0FBcUM7QUFDekQ7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHZ1ZS9kZXZ0b29scy8uLi8uLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL2ZzaGFycC9mc2hhcnAuanM/NGMzNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmV4cG9ydCB2YXIgY29uZiA9IHtcbiAgICBjb21tZW50czoge1xuICAgICAgICBsaW5lQ29tbWVudDogJy8vJyxcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJygqJywgJyopJ11cbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIFsneycsICd9J10sXG4gICAgICAgIFsnWycsICddJ10sXG4gICAgICAgIFsnKCcsICcpJ11cbiAgICBdLFxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9XG4gICAgXSxcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH1cbiAgICBdLFxuICAgIGZvbGRpbmc6IHtcbiAgICAgICAgbWFya2Vyczoge1xuICAgICAgICAgICAgc3RhcnQ6IG5ldyBSZWdFeHAoJ15cXFxccyovL1xcXFxzKiNyZWdpb25cXFxcYnxeXFxcXHMqXFxcXChcXFxcKlxcXFxzKiNyZWdpb24oLiopXFxcXCpcXFxcKScpLFxuICAgICAgICAgICAgZW5kOiBuZXcgUmVnRXhwKCdeXFxcXHMqLy9cXFxccyojZW5kcmVnaW9uXFxcXGJ8XlxcXFxzKlxcXFwoXFxcXCpcXFxccyojZW5kcmVnaW9uXFxcXHMqXFxcXCpcXFxcKScpXG4gICAgICAgIH1cbiAgICB9XG59O1xuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxuICAgIHRva2VuUG9zdGZpeDogJy5mcycsXG4gICAga2V5d29yZHM6IFtcbiAgICAgICAgJ2Fic3RyYWN0JyxcbiAgICAgICAgJ2FuZCcsXG4gICAgICAgICdhdG9taWMnLFxuICAgICAgICAnYXMnLFxuICAgICAgICAnYXNzZXJ0JyxcbiAgICAgICAgJ2FzcicsXG4gICAgICAgICdiYXNlJyxcbiAgICAgICAgJ2JlZ2luJyxcbiAgICAgICAgJ2JyZWFrJyxcbiAgICAgICAgJ2NoZWNrZWQnLFxuICAgICAgICAnY29tcG9uZW50JyxcbiAgICAgICAgJ2NvbnN0JyxcbiAgICAgICAgJ2NvbnN0cmFpbnQnLFxuICAgICAgICAnY29uc3RydWN0b3InLFxuICAgICAgICAnY29udGludWUnLFxuICAgICAgICAnY2xhc3MnLFxuICAgICAgICAnZGVmYXVsdCcsXG4gICAgICAgICdkZWxlZ2F0ZScsXG4gICAgICAgICdkbycsXG4gICAgICAgICdkb25lJyxcbiAgICAgICAgJ2Rvd25jYXN0JyxcbiAgICAgICAgJ2Rvd250bycsXG4gICAgICAgICdlbGlmJyxcbiAgICAgICAgJ2Vsc2UnLFxuICAgICAgICAnZW5kJyxcbiAgICAgICAgJ2V4Y2VwdGlvbicsXG4gICAgICAgICdlYWdlcicsXG4gICAgICAgICdldmVudCcsXG4gICAgICAgICdleHRlcm5hbCcsXG4gICAgICAgICdleHRlcm4nLFxuICAgICAgICAnZmFsc2UnLFxuICAgICAgICAnZmluYWxseScsXG4gICAgICAgICdmb3InLFxuICAgICAgICAnZnVuJyxcbiAgICAgICAgJ2Z1bmN0aW9uJyxcbiAgICAgICAgJ2ZpeGVkJyxcbiAgICAgICAgJ2Z1bmN0b3InLFxuICAgICAgICAnZ2xvYmFsJyxcbiAgICAgICAgJ2lmJyxcbiAgICAgICAgJ2luJyxcbiAgICAgICAgJ2luY2x1ZGUnLFxuICAgICAgICAnaW5oZXJpdCcsXG4gICAgICAgICdpbmxpbmUnLFxuICAgICAgICAnaW50ZXJmYWNlJyxcbiAgICAgICAgJ2ludGVybmFsJyxcbiAgICAgICAgJ2xhbmQnLFxuICAgICAgICAnbG9yJyxcbiAgICAgICAgJ2xzbCcsXG4gICAgICAgICdsc3InLFxuICAgICAgICAnbHhvcicsXG4gICAgICAgICdsYXp5JyxcbiAgICAgICAgJ2xldCcsXG4gICAgICAgICdtYXRjaCcsXG4gICAgICAgICdtZW1iZXInLFxuICAgICAgICAnbW9kJyxcbiAgICAgICAgJ21vZHVsZScsXG4gICAgICAgICdtdXRhYmxlJyxcbiAgICAgICAgJ25hbWVzcGFjZScsXG4gICAgICAgICdtZXRob2QnLFxuICAgICAgICAnbWl4aW4nLFxuICAgICAgICAnbmV3JyxcbiAgICAgICAgJ25vdCcsXG4gICAgICAgICdudWxsJyxcbiAgICAgICAgJ29mJyxcbiAgICAgICAgJ29wZW4nLFxuICAgICAgICAnb3InLFxuICAgICAgICAnb2JqZWN0JyxcbiAgICAgICAgJ292ZXJyaWRlJyxcbiAgICAgICAgJ3ByaXZhdGUnLFxuICAgICAgICAncGFyYWxsZWwnLFxuICAgICAgICAncHJvY2VzcycsXG4gICAgICAgICdwcm90ZWN0ZWQnLFxuICAgICAgICAncHVyZScsXG4gICAgICAgICdwdWJsaWMnLFxuICAgICAgICAncmVjJyxcbiAgICAgICAgJ3JldHVybicsXG4gICAgICAgICdzdGF0aWMnLFxuICAgICAgICAnc2VhbGVkJyxcbiAgICAgICAgJ3N0cnVjdCcsXG4gICAgICAgICdzaWcnLFxuICAgICAgICAndGhlbicsXG4gICAgICAgICd0bycsXG4gICAgICAgICd0cnVlJyxcbiAgICAgICAgJ3RhaWxjYWxsJyxcbiAgICAgICAgJ3RyYWl0JyxcbiAgICAgICAgJ3RyeScsXG4gICAgICAgICd0eXBlJyxcbiAgICAgICAgJ3VwY2FzdCcsXG4gICAgICAgICd1c2UnLFxuICAgICAgICAndmFsJyxcbiAgICAgICAgJ3ZvaWQnLFxuICAgICAgICAndmlydHVhbCcsXG4gICAgICAgICd2b2xhdGlsZScsXG4gICAgICAgICd3aGVuJyxcbiAgICAgICAgJ3doaWxlJyxcbiAgICAgICAgJ3dpdGgnLFxuICAgICAgICAneWllbGQnXG4gICAgXSxcbiAgICAvLyB3ZSBpbmNsdWRlIHRoZXNlIGNvbW1vbiByZWd1bGFyIGV4cHJlc3Npb25zXG4gICAgc3ltYm9sczogL1s9Pjwhfj86JnwrXFwtKlxcXiU7XFwuLFxcL10rLyxcbiAgICBlc2NhcGVzOiAvXFxcXCg/OlthYmZucnR2XFxcXFwiJ118eFswLTlBLUZhLWZdezEsNH18dVswLTlBLUZhLWZdezR9fFVbMC05QS1GYS1mXXs4fSkvLFxuICAgIGludGVnZXJzdWZmaXg6IC9bdVVdP1t5c2xuTEldPy8sXG4gICAgZmxvYXRzdWZmaXg6IC9bZkZtTV0/LyxcbiAgICAvLyBUaGUgbWFpbiB0b2tlbml6ZXIgZm9yIG91ciBsYW5ndWFnZXNcbiAgICB0b2tlbml6ZXI6IHtcbiAgICAgICAgcm9vdDogW1xuICAgICAgICAgICAgLy8gaWRlbnRpZmllcnMgYW5kIGtleXdvcmRzXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1thLXpBLVpfXVxcdyovLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiB7IHRva2VuOiAna2V5d29yZC4kMCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdpZGVudGlmaWVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIHdoaXRlc3BhY2VcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxuICAgICAgICAgICAgLy8gWzwgYXR0cmlidXRlcyA+XS5cbiAgICAgICAgICAgIFsvXFxbPC4qPlxcXS8sICdhbm5vdGF0aW9uJ10sXG4gICAgICAgICAgICAvLyBQcmVwcm9jZXNzb3IgZGlyZWN0aXZlXG4gICAgICAgICAgICBbL14jKGlmfGVsc2V8ZW5kaWYpLywgJ2tleXdvcmQnXSxcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcnMgYW5kIG9wZXJhdG9yc1xuICAgICAgICAgICAgWy9be30oKVxcW1xcXV0vLCAnQGJyYWNrZXRzJ10sXG4gICAgICAgICAgICBbL1s8Pl0oPyFAc3ltYm9scykvLCAnQGJyYWNrZXRzJ10sXG4gICAgICAgICAgICBbL0BzeW1ib2xzLywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgLy8gbnVtYmVyc1xuICAgICAgICAgICAgWy9cXGQqXFxkK1tlRV0oW1xcLStdP1xcZCspPyhAZmxvYXRzdWZmaXgpLywgJ251bWJlci5mbG9hdCddLFxuICAgICAgICAgICAgWy9cXGQqXFwuXFxkKyhbZUVdW1xcLStdP1xcZCspPyhAZmxvYXRzdWZmaXgpLywgJ251bWJlci5mbG9hdCddLFxuICAgICAgICAgICAgWy8weFswLTlhLWZBLUZdK0xGLywgJ251bWJlci5mbG9hdCddLFxuICAgICAgICAgICAgWy8weFswLTlhLWZBLUZdKyhAaW50ZWdlcnN1ZmZpeCkvLCAnbnVtYmVyLmhleCddLFxuICAgICAgICAgICAgWy8wYlswLTFdKyhAaW50ZWdlcnN1ZmZpeCkvLCAnbnVtYmVyLmJpbiddLFxuICAgICAgICAgICAgWy9cXGQrKEBpbnRlZ2Vyc3VmZml4KS8sICdudW1iZXInXSxcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcjogYWZ0ZXIgbnVtYmVyIGJlY2F1c2Ugb2YgLlxcZCBmbG9hdHNcbiAgICAgICAgICAgIFsvWzssLl0vLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICAvLyBzdHJpbmdzXG4gICAgICAgICAgICBbL1wiKFteXCJcXFxcXXxcXFxcLikqJC8sICdzdHJpbmcuaW52YWxpZCddLFxuICAgICAgICAgICAgWy9cIlwiXCIvLCAnc3RyaW5nJywgJ0BzdHJpbmcuXCJcIlwiJ10sXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZycsICdAc3RyaW5nLlwiJ10sXG4gICAgICAgICAgICAvLyBsaXRlcmFsIHN0cmluZ1xuICAgICAgICAgICAgWy9cXEBcIi8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBuZXh0OiAnQGxpdHN0cmluZycgfV0sXG4gICAgICAgICAgICAvLyBjaGFyYWN0ZXJzXG4gICAgICAgICAgICBbLydbXlxcXFwnXSdCPy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvKCcpKEBlc2NhcGVzKSgnKS8sIFsnc3RyaW5nJywgJ3N0cmluZy5lc2NhcGUnLCAnc3RyaW5nJ11dLFxuICAgICAgICAgICAgWy8nLywgJ3N0cmluZy5pbnZhbGlkJ11cbiAgICAgICAgXSxcbiAgICAgICAgd2hpdGVzcGFjZTogW1xuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rLywgJyddLFxuICAgICAgICAgICAgWy9cXChcXCooPyFcXCkpLywgJ2NvbW1lbnQnLCAnQGNvbW1lbnQnXSxcbiAgICAgICAgICAgIFsvXFwvXFwvLiokLywgJ2NvbW1lbnQnXVxuICAgICAgICBdLFxuICAgICAgICBjb21tZW50OiBbXG4gICAgICAgICAgICBbL1teKihdKy8sICdjb21tZW50J10sXG4gICAgICAgICAgICBbL1xcKlxcKS8sICdjb21tZW50JywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvXFwqLywgJ2NvbW1lbnQnXSxcbiAgICAgICAgICAgIFsvXFwoXFwqXFwpLywgJ2NvbW1lbnQnXSxcbiAgICAgICAgICAgIFsvXFwoLywgJ2NvbW1lbnQnXVxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmc6IFtcbiAgICAgICAgICAgIFsvW15cXFxcXCJdKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKFwiXCJcInxcIkI/KS8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJyQjPT0kUzInOiB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bwb3AnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICBsaXRzdHJpbmc6IFtcbiAgICAgICAgICAgIFsvW15cIl0rLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy9cIlwiLywgJ3N0cmluZy5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF1cbiAgICB9XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///68677\n")}};