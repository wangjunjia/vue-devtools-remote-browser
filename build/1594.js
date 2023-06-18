"use strict";(self["webpackChunk_vue_devtools"]=self["webpackChunk_vue_devtools"]||[]).push([[1594],{71594:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"conf\": () => (/* binding */ conf),\n/* harmony export */   \"language\": () => (/* binding */ language)\n/* harmony export */ });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\nvar conf = {\n    comments: {\n        lineComment: \"'\"\n    },\n    brackets: [\n        ['(', ')'],\n        ['[', ']'],\n        ['If', 'EndIf'],\n        ['While', 'EndWhile'],\n        ['For', 'EndFor'],\n        ['Sub', 'EndSub']\n    ],\n    autoClosingPairs: [\n        { open: '\"', close: '\"', notIn: ['string', 'comment'] },\n        { open: '(', close: ')', notIn: ['string', 'comment'] },\n        { open: '[', close: ']', notIn: ['string', 'comment'] }\n    ]\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.sb',\n    ignoreCase: true,\n    brackets: [\n        { token: 'delimiter.array', open: '[', close: ']' },\n        { token: 'delimiter.parenthesis', open: '(', close: ')' },\n        // Special bracket statement pairs\n        { token: 'keyword.tag-if', open: 'If', close: 'EndIf' },\n        { token: 'keyword.tag-while', open: 'While', close: 'EndWhile' },\n        { token: 'keyword.tag-for', open: 'For', close: 'EndFor' },\n        { token: 'keyword.tag-sub', open: 'Sub', close: 'EndSub' }\n    ],\n    keywords: [\n        'Else',\n        'ElseIf',\n        'EndFor',\n        'EndIf',\n        'EndSub',\n        'EndWhile',\n        'For',\n        'Goto',\n        'If',\n        'Step',\n        'Sub',\n        'Then',\n        'To',\n        'While'\n    ],\n    tagwords: ['If', 'Sub', 'While', 'For'],\n    operators: ['>', '<', '<>', '<=', '>=', 'And', 'Or', '+', '-', '*', '/', '='],\n    // we include these common regular expressions\n    identifier: /[a-zA-Z_][\\w]*/,\n    symbols: /[=><:+\\-*\\/%\\.,]+/,\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n    // The main tokenizer for our languages\n    tokenizer: {\n        root: [\n            // whitespace\n            { include: '@whitespace' },\n            // classes\n            [/(@identifier)(?=[.])/, 'type'],\n            // identifiers, tagwords, and keywords\n            [\n                /@identifier/,\n                {\n                    cases: {\n                        '@keywords': { token: 'keyword.$0' },\n                        '@operators': 'operator',\n                        '@default': 'variable.name'\n                    }\n                }\n            ],\n            // methods, properties, and events\n            [\n                /([.])(@identifier)/,\n                {\n                    cases: {\n                        $2: ['delimiter', 'type.member'],\n                        '@default': ''\n                    }\n                }\n            ],\n            // numbers\n            [/\\d*\\.\\d+/, 'number.float'],\n            [/\\d+/, 'number'],\n            // delimiters and operators\n            [/[()\\[\\]]/, '@brackets'],\n            [\n                /@symbols/,\n                {\n                    cases: {\n                        '@operators': 'operator',\n                        '@default': 'delimiter'\n                    }\n                }\n            ],\n            // strings\n            [/\"([^\"\\\\]|\\\\.)*$/, 'string.invalid'],\n            [/\"/, 'string', '@string']\n        ],\n        whitespace: [\n            [/[ \\t\\r\\n]+/, ''],\n            [/(\\').*$/, 'comment']\n        ],\n        string: [\n            [/[^\\\\\"]+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/\"C?/, 'string', '@pop']\n        ]\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzE1OTQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHFEQUFxRDtBQUMvRCxVQUFVLHFEQUFxRDtBQUMvRCxVQUFVO0FBQ1Y7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGlEQUFpRDtBQUMzRCxVQUFVLHVEQUF1RDtBQUNqRTtBQUNBLFVBQVUscURBQXFEO0FBQy9ELFVBQVUsOERBQThEO0FBQ3hFLFVBQVUsd0RBQXdEO0FBQ2xFLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxJQUFJLGNBQWMsRUFBRSxjQUFjLEVBQUU7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHdCQUF3QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxxQkFBcUI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHZ1ZS9kZXZ0b29scy8uLi8uLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3NiL3NiLmpzP2Y2NmUiXSwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgbGluZUNvbW1lbnQ6IFwiJ1wiXG4gICAgfSxcbiAgICBicmFja2V0czogW1xuICAgICAgICBbJygnLCAnKSddLFxuICAgICAgICBbJ1snLCAnXSddLFxuICAgICAgICBbJ0lmJywgJ0VuZElmJ10sXG4gICAgICAgIFsnV2hpbGUnLCAnRW5kV2hpbGUnXSxcbiAgICAgICAgWydGb3InLCAnRW5kRm9yJ10sXG4gICAgICAgIFsnU3ViJywgJ0VuZFN1YiddXG4gICAgXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfVxuICAgIF1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIGRlZmF1bHRUb2tlbjogJycsXG4gICAgdG9rZW5Qb3N0Zml4OiAnLnNiJyxcbiAgICBpZ25vcmVDYXNlOiB0cnVlLFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIuYXJyYXknLCBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycsIG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICAvLyBTcGVjaWFsIGJyYWNrZXQgc3RhdGVtZW50IHBhaXJzXG4gICAgICAgIHsgdG9rZW46ICdrZXl3b3JkLnRhZy1pZicsIG9wZW46ICdJZicsIGNsb3NlOiAnRW5kSWYnIH0sXG4gICAgICAgIHsgdG9rZW46ICdrZXl3b3JkLnRhZy13aGlsZScsIG9wZW46ICdXaGlsZScsIGNsb3NlOiAnRW5kV2hpbGUnIH0sXG4gICAgICAgIHsgdG9rZW46ICdrZXl3b3JkLnRhZy1mb3InLCBvcGVuOiAnRm9yJywgY2xvc2U6ICdFbmRGb3InIH0sXG4gICAgICAgIHsgdG9rZW46ICdrZXl3b3JkLnRhZy1zdWInLCBvcGVuOiAnU3ViJywgY2xvc2U6ICdFbmRTdWInIH1cbiAgICBdLFxuICAgIGtleXdvcmRzOiBbXG4gICAgICAgICdFbHNlJyxcbiAgICAgICAgJ0Vsc2VJZicsXG4gICAgICAgICdFbmRGb3InLFxuICAgICAgICAnRW5kSWYnLFxuICAgICAgICAnRW5kU3ViJyxcbiAgICAgICAgJ0VuZFdoaWxlJyxcbiAgICAgICAgJ0ZvcicsXG4gICAgICAgICdHb3RvJyxcbiAgICAgICAgJ0lmJyxcbiAgICAgICAgJ1N0ZXAnLFxuICAgICAgICAnU3ViJyxcbiAgICAgICAgJ1RoZW4nLFxuICAgICAgICAnVG8nLFxuICAgICAgICAnV2hpbGUnXG4gICAgXSxcbiAgICB0YWd3b3JkczogWydJZicsICdTdWInLCAnV2hpbGUnLCAnRm9yJ10sXG4gICAgb3BlcmF0b3JzOiBbJz4nLCAnPCcsICc8PicsICc8PScsICc+PScsICdBbmQnLCAnT3InLCAnKycsICctJywgJyonLCAnLycsICc9J10sXG4gICAgLy8gd2UgaW5jbHVkZSB0aGVzZSBjb21tb24gcmVndWxhciBleHByZXNzaW9uc1xuICAgIGlkZW50aWZpZXI6IC9bYS16QS1aX11bXFx3XSovLFxuICAgIHN5bWJvbHM6IC9bPT48OitcXC0qXFwvJVxcLixdKy8sXG4gICAgZXNjYXBlczogL1xcXFwoPzpbYWJmbnJ0dlxcXFxcIiddfHhbMC05QS1GYS1mXXsxLDR9fHVbMC05QS1GYS1mXXs0fXxVWzAtOUEtRmEtZl17OH0pLyxcbiAgICAvLyBUaGUgbWFpbiB0b2tlbml6ZXIgZm9yIG91ciBsYW5ndWFnZXNcbiAgICB0b2tlbml6ZXI6IHtcbiAgICAgICAgcm9vdDogW1xuICAgICAgICAgICAgLy8gd2hpdGVzcGFjZVxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXG4gICAgICAgICAgICAvLyBjbGFzc2VzXG4gICAgICAgICAgICBbLyhAaWRlbnRpZmllcikoPz1bLl0pLywgJ3R5cGUnXSxcbiAgICAgICAgICAgIC8vIGlkZW50aWZpZXJzLCB0YWd3b3JkcywgYW5kIGtleXdvcmRzXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL0BpZGVudGlmaWVyLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogeyB0b2tlbjogJ2tleXdvcmQuJDAnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQG9wZXJhdG9ycyc6ICdvcGVyYXRvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAndmFyaWFibGUubmFtZSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBtZXRob2RzLCBwcm9wZXJ0aWVzLCBhbmQgZXZlbnRzXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLyhbLl0pKEBpZGVudGlmaWVyKS8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJDI6IFsnZGVsaW1pdGVyJywgJ3R5cGUubWVtYmVyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIG51bWJlcnNcbiAgICAgICAgICAgIFsvXFxkKlxcLlxcZCsvLCAnbnVtYmVyLmZsb2F0J10sXG4gICAgICAgICAgICBbL1xcZCsvLCAnbnVtYmVyJ10sXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXJzIGFuZCBvcGVyYXRvcnNcbiAgICAgICAgICAgIFsvWygpXFxbXFxdXS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvQHN5bWJvbHMvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAb3BlcmF0b3JzJzogJ29wZXJhdG9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdkZWxpbWl0ZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gc3RyaW5nc1xuICAgICAgICAgICAgWy9cIihbXlwiXFxcXF18XFxcXC4pKiQvLCAnc3RyaW5nLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nJywgJ0BzdHJpbmcnXVxuICAgICAgICBdLFxuICAgICAgICB3aGl0ZXNwYWNlOiBbXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnJ10sXG4gICAgICAgICAgICBbLyhcXCcpLiokLywgJ2NvbW1lbnQnXVxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmc6IFtcbiAgICAgICAgICAgIFsvW15cXFxcXCJdKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvXCJDPy8sICdzdHJpbmcnLCAnQHBvcCddXG4gICAgICAgIF1cbiAgICB9XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///71594\n")}}]);