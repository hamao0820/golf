/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/templates/index.html":
/*!**********************************!*\
  !*** ./src/templates/index.html ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<!doctype html>\\n<html lang=\\\"ja\\\">\\n    <head>\\n        <meta charset=\\\"UTF-8\\\" />\\n        <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\" />\\n        <title>GOLF</title>\\n    </head>\\n    <body></body>\\n</html>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://golf/./src/templates/index.html?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://golf/./src/scss/style.scss?");

/***/ }),

/***/ "./src/ts/Main/main.ts":
/*!*****************************!*\
  !*** ./src/ts/Main/main.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst logic_1 = __importDefault(__webpack_require__(/*! ../logic/logic */ \"./src/ts/logic/logic.ts\"));\nclass Main {\n    constructor() {\n        const logic = new logic_1.default();\n        logic.execute();\n    }\n}\nnew Main();\n\n\n//# sourceURL=webpack://golf/./src/ts/Main/main.ts?");

/***/ }),

/***/ "./src/ts/logic/judger.ts":
/*!********************************!*\
  !*** ./src/ts/logic/judger.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Judger {\n    static check(lead, target) {\n        const leadRank = lead.getLead().rank;\n        switch (leadRank) {\n            case 'A': {\n                return target.rank === '2';\n            }\n            case '2': {\n                return target.rank === 'A' || target.rank === '3';\n            }\n            case '3': {\n                return target.rank === '2' || target.rank === '4';\n            }\n            case '4': {\n                return target.rank === '3' || target.rank === '5';\n            }\n            case '5': {\n                return target.rank === '4' || target.rank === '6';\n            }\n            case '6': {\n                return target.rank === '5' || target.rank === '7';\n            }\n            case '7': {\n                return target.rank === '6' || target.rank === '8';\n            }\n            case '8': {\n                return target.rank === '7' || target.rank === '9';\n            }\n            case '9': {\n                return target.rank === '8' || target.rank === '10';\n            }\n            case '10': {\n                return target.rank === '9' || target.rank === 'J';\n            }\n            case 'J': {\n                return target.rank === '10' || target.rank === 'Q';\n            }\n            case 'Q': {\n                return target.rank === 'J' || target.rank === 'K';\n            }\n            case 'K': {\n                return target.rank === 'Q';\n            }\n        }\n    }\n}\nexports[\"default\"] = Judger;\n\n\n//# sourceURL=webpack://golf/./src/ts/logic/judger.ts?");

/***/ }),

/***/ "./src/ts/logic/logic.ts":
/*!*******************************!*\
  !*** ./src/ts/logic/logic.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar _Logic_deck, _Logic_stock, _Logic_layout, _Logic_lead;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst column_1 = __importDefault(__webpack_require__(/*! ../tools/column */ \"./src/ts/tools/column.ts\"));\nconst deck_1 = __importDefault(__webpack_require__(/*! ../tools/deck */ \"./src/ts/tools/deck.ts\"));\nconst layout_1 = __importDefault(__webpack_require__(/*! ../tools/layout */ \"./src/ts/tools/layout.ts\"));\nconst lead_1 = __importDefault(__webpack_require__(/*! ../tools/lead */ \"./src/ts/tools/lead.ts\"));\nconst stock_1 = __importDefault(__webpack_require__(/*! ../tools/stock */ \"./src/ts/tools/stock.ts\"));\nconst view_1 = __importDefault(__webpack_require__(/*! ../ui/view */ \"./src/ts/ui/view.ts\"));\nconst judger_1 = __importDefault(__webpack_require__(/*! ./judger */ \"./src/ts/logic/judger.ts\"));\nclass Logic {\n    constructor() {\n        _Logic_deck.set(this, void 0);\n        _Logic_stock.set(this, void 0);\n        _Logic_layout.set(this, void 0);\n        _Logic_lead.set(this, void 0);\n        __classPrivateFieldSet(this, _Logic_deck, new deck_1.default(), \"f\");\n        const columns = Array.from({ length: layout_1.default.ColumnNum }, () => new column_1.default(Array.from({ length: column_1.default.CardsNum }, () => __classPrivateFieldGet(this, _Logic_deck, \"f\").handOutCard())));\n        __classPrivateFieldSet(this, _Logic_layout, new layout_1.default(columns), \"f\");\n        __classPrivateFieldSet(this, _Logic_stock, new stock_1.default(Array.from(__classPrivateFieldGet(this, _Logic_deck, \"f\").getCards())), \"f\");\n        __classPrivateFieldSet(this, _Logic_lead, new lead_1.default(__classPrivateFieldGet(this, _Logic_stock, \"f\").drawCard()), \"f\");\n        return;\n    }\n    start() {\n        new view_1.default();\n        return;\n    }\n    execute() {\n        this.start();\n        return;\n    }\n    getLayoutSize() {\n        return __classPrivateFieldGet(this, _Logic_layout, \"f\").size;\n    }\n    getLayout() {\n        return __classPrivateFieldGet(this, _Logic_layout, \"f\").getLayout();\n    }\n    getStock() {\n        return __classPrivateFieldGet(this, _Logic_stock, \"f\").getStock();\n    }\n    getStockSize() {\n        return __classPrivateFieldGet(this, _Logic_stock, \"f\").size;\n    }\n    getLead() {\n        return __classPrivateFieldGet(this, _Logic_lead, \"f\").getLead();\n    }\n    drawCardFromStock() {\n        __classPrivateFieldGet(this, _Logic_lead, \"f\").addLeads(__classPrivateFieldGet(this, _Logic_stock, \"f\").drawCard());\n    }\n    canTake(col) {\n        return __classPrivateFieldGet(this, _Logic_layout, \"f\").canTake(col) && judger_1.default.check(__classPrivateFieldGet(this, _Logic_lead, \"f\"), __classPrivateFieldGet(this, _Logic_layout, \"f\").getLastCard(col));\n    }\n    takeCardFromLayout(col) {\n        __classPrivateFieldGet(this, _Logic_lead, \"f\").addLeads(__classPrivateFieldGet(this, _Logic_layout, \"f\").takeCard(col));\n    }\n    isEnd() {\n        return !__classPrivateFieldGet(this, _Logic_layout, \"f\").isRemain() || !__classPrivateFieldGet(this, _Logic_stock, \"f\").canDraw();\n    }\n    isWin() {\n        return !__classPrivateFieldGet(this, _Logic_layout, \"f\").isRemain();\n    }\n    isLose() {\n        return (!__classPrivateFieldGet(this, _Logic_stock, \"f\").canDraw() &&\n            Array(layout_1.default.ColumnNum)\n                .fill(0)\n                .map((_, i) => __classPrivateFieldGet(this, _Logic_layout, \"f\").canTake(i) && judger_1.default.check(__classPrivateFieldGet(this, _Logic_lead, \"f\"), __classPrivateFieldGet(this, _Logic_layout, \"f\").getLastCard(i)))\n                .every((b) => !b));\n    }\n}\n_Logic_deck = new WeakMap(), _Logic_stock = new WeakMap(), _Logic_layout = new WeakMap(), _Logic_lead = new WeakMap();\nexports[\"default\"] = Logic;\n\n\n//# sourceURL=webpack://golf/./src/ts/logic/logic.ts?");

/***/ }),

/***/ "./src/ts/tools/card.ts":
/*!******************************!*\
  !*** ./src/ts/tools/card.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar _Card_rank, _Card_suit, _Card_isFaceUp;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Card {\n    constructor(rank, suit, isFaceUp = false) {\n        _Card_rank.set(this, void 0);\n        _Card_suit.set(this, void 0);\n        _Card_isFaceUp.set(this, void 0);\n        __classPrivateFieldSet(this, _Card_isFaceUp, isFaceUp, \"f\");\n        __classPrivateFieldSet(this, _Card_rank, rank, \"f\");\n        __classPrivateFieldSet(this, _Card_suit, suit, \"f\");\n    }\n    get rank() {\n        return __classPrivateFieldGet(this, _Card_rank, \"f\");\n    }\n    get suit() {\n        return __classPrivateFieldGet(this, _Card_suit, \"f\");\n    }\n    get isFaceUp() {\n        return __classPrivateFieldGet(this, _Card_isFaceUp, \"f\");\n    }\n    faceUp() {\n        __classPrivateFieldSet(this, _Card_isFaceUp, true, \"f\");\n    }\n}\n_Card_rank = new WeakMap(), _Card_suit = new WeakMap(), _Card_isFaceUp = new WeakMap();\nCard.rankMap = {\n    1: 'A',\n    2: '2',\n    3: '3',\n    4: '4',\n    5: '5',\n    6: '6',\n    7: '7',\n    8: '8',\n    9: '9',\n    10: '10',\n    11: 'J',\n    12: 'Q',\n    13: 'K',\n};\nCard.cardRankNum = 13;\nCard.cardRankArr = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];\nCard.cardSuitArr = ['Clubs', 'Spades', 'Hearts', 'Diamonds'];\nexports[\"default\"] = Card;\n\n\n//# sourceURL=webpack://golf/./src/ts/tools/card.ts?");

/***/ }),

/***/ "./src/ts/tools/column.ts":
/*!********************************!*\
  !*** ./src/ts/tools/column.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar _Column_cards;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Column {\n    constructor(cards) {\n        _Column_cards.set(this, void 0);\n        __classPrivateFieldSet(this, _Column_cards, cards, \"f\");\n    }\n    get cards() {\n        return __classPrivateFieldGet(this, _Column_cards, \"f\");\n    }\n    takeCard() {\n        if (!this.canTake)\n            throw Error;\n        const card = __classPrivateFieldGet(this, _Column_cards, \"f\").pop();\n        if (!card)\n            throw Error;\n        return card;\n    }\n    get size() {\n        return __classPrivateFieldGet(this, _Column_cards, \"f\").length;\n    }\n    canTake() {\n        return __classPrivateFieldGet(this, _Column_cards, \"f\").length >= 1;\n    }\n    getLastCard() {\n        if (!this.canTake)\n            throw Error;\n        return this.cards[__classPrivateFieldGet(this, _Column_cards, \"f\").length - 1];\n    }\n}\n_Column_cards = new WeakMap();\nColumn.CardsNum = 7;\nexports[\"default\"] = Column;\n\n\n//# sourceURL=webpack://golf/./src/ts/tools/column.ts?");

/***/ }),

/***/ "./src/ts/tools/deck.ts":
/*!******************************!*\
  !*** ./src/ts/tools/deck.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar _Deck_cards;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst card_1 = __importDefault(__webpack_require__(/*! ./card */ \"./src/ts/tools/card.ts\"));\nclass Deck {\n    constructor() {\n        _Deck_cards.set(this, void 0);\n        const cards = [];\n        for (let i = 1; i <= card_1.default.cardRankNum; i++) {\n            cards.push(new card_1.default(card_1.default.rankMap[i], 'Clubs'));\n            cards.push(new card_1.default(card_1.default.rankMap[i], 'Spades'));\n            cards.push(new card_1.default(card_1.default.rankMap[i], 'Hearts'));\n            cards.push(new card_1.default(card_1.default.rankMap[i], 'Diamonds'));\n        }\n        __classPrivateFieldSet(this, _Deck_cards, this.shuffle(cards), \"f\");\n    }\n    handOutCard() {\n        const card = __classPrivateFieldGet(this, _Deck_cards, \"f\").pop();\n        if (!card)\n            throw Error;\n        return card;\n    }\n    getCards() {\n        return __classPrivateFieldGet(this, _Deck_cards, \"f\");\n    }\n    shuffle(cards) {\n        const shuffled = [...cards];\n        for (let i = cards.length - 1; 0 < i; i--) {\n            const r = Math.floor(Math.random() * (i + 1));\n            const tmp = shuffled[i];\n            shuffled[i] = shuffled[r];\n            shuffled[r] = tmp;\n        }\n        return shuffled;\n    }\n}\n_Deck_cards = new WeakMap();\nexports[\"default\"] = Deck;\n\n\n//# sourceURL=webpack://golf/./src/ts/tools/deck.ts?");

/***/ }),

/***/ "./src/ts/tools/layout.ts":
/*!********************************!*\
  !*** ./src/ts/tools/layout.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar _Layout_columns;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Layout {\n    constructor(columns) {\n        _Layout_columns.set(this, void 0);\n        __classPrivateFieldSet(this, _Layout_columns, columns, \"f\");\n    }\n    get size() {\n        return __classPrivateFieldGet(this, _Layout_columns, \"f\").map((column) => column.size).reduce((c, p) => c + p, 0);\n    }\n    canTake(col) {\n        if (col < 0 || Layout.ColumnNum <= col)\n            return false;\n        return __classPrivateFieldGet(this, _Layout_columns, \"f\")[col].canTake();\n    }\n    takeCard(col) {\n        return __classPrivateFieldGet(this, _Layout_columns, \"f\")[col].takeCard();\n    }\n    getLayout() {\n        return __classPrivateFieldGet(this, _Layout_columns, \"f\");\n    }\n    getLastCard(col) {\n        return __classPrivateFieldGet(this, _Layout_columns, \"f\")[col].getLastCard();\n    }\n    isRemain() {\n        return this.size >= 1;\n    }\n}\n_Layout_columns = new WeakMap();\nLayout.ColumnNum = 5;\nexports[\"default\"] = Layout;\n\n\n//# sourceURL=webpack://golf/./src/ts/tools/layout.ts?");

/***/ }),

/***/ "./src/ts/tools/lead.ts":
/*!******************************!*\
  !*** ./src/ts/tools/lead.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar _Lead_cards;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Lead {\n    constructor(card) {\n        _Lead_cards.set(this, void 0);\n        __classPrivateFieldSet(this, _Lead_cards, [card], \"f\");\n    }\n    addLeads(card) {\n        __classPrivateFieldGet(this, _Lead_cards, \"f\").push(card);\n        return;\n    }\n    getLead() {\n        return __classPrivateFieldGet(this, _Lead_cards, \"f\")[__classPrivateFieldGet(this, _Lead_cards, \"f\").length - 1];\n    }\n}\n_Lead_cards = new WeakMap();\nexports[\"default\"] = Lead;\n\n\n//# sourceURL=webpack://golf/./src/ts/tools/lead.ts?");

/***/ }),

/***/ "./src/ts/tools/stock.ts":
/*!*******************************!*\
  !*** ./src/ts/tools/stock.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar _Stock_cards;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Stock {\n    constructor(cards) {\n        _Stock_cards.set(this, void 0);\n        __classPrivateFieldSet(this, _Stock_cards, cards, \"f\");\n    }\n    canDraw() {\n        return this.size >= 1;\n    }\n    drawCard() {\n        if (!this.canDraw())\n            throw Error;\n        const card = __classPrivateFieldGet(this, _Stock_cards, \"f\").pop();\n        if (!card)\n            throw Error;\n        return card;\n    }\n    get size() {\n        return __classPrivateFieldGet(this, _Stock_cards, \"f\").length;\n    }\n    getStock() {\n        return __classPrivateFieldGet(this, _Stock_cards, \"f\");\n    }\n}\n_Stock_cards = new WeakMap();\nexports[\"default\"] = Stock;\n\n\n//# sourceURL=webpack://golf/./src/ts/tools/stock.ts?");

/***/ }),

/***/ "./src/ts/ui/controller.ts":
/*!*********************************!*\
  !*** ./src/ts/ui/controller.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar _Controller_view, _Controller_model;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Controller {\n    constructor(view, model) {\n        _Controller_view.set(this, void 0);\n        _Controller_model.set(this, void 0);\n        __classPrivateFieldSet(this, _Controller_view, view, \"f\");\n        __classPrivateFieldSet(this, _Controller_model, model, \"f\");\n    }\n    handleClickStock() {\n        __classPrivateFieldGet(this, _Controller_model, \"f\").drawCardFromStock();\n        __classPrivateFieldGet(this, _Controller_view, \"f\").update();\n    }\n    handleClickLayout(column) {\n        if (__classPrivateFieldGet(this, _Controller_model, \"f\").canTake(column)) {\n            __classPrivateFieldGet(this, _Controller_model, \"f\").takeCardFromLayout(column);\n            __classPrivateFieldGet(this, _Controller_view, \"f\").update();\n        }\n    }\n    handleClickRetryButton() {\n        __classPrivateFieldGet(this, _Controller_view, \"f\").clear();\n        __classPrivateFieldGet(this, _Controller_model, \"f\").retry();\n    }\n}\n_Controller_view = new WeakMap(), _Controller_model = new WeakMap();\nexports[\"default\"] = Controller;\n\n\n//# sourceURL=webpack://golf/./src/ts/ui/controller.ts?");

/***/ }),

/***/ "./src/ts/ui/model.ts":
/*!****************************!*\
  !*** ./src/ts/ui/model.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar _Model_logic;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst logic_1 = __importDefault(__webpack_require__(/*! ../logic/logic */ \"./src/ts/logic/logic.ts\"));\nclass Model {\n    constructor() {\n        _Model_logic.set(this, void 0);\n        __classPrivateFieldSet(this, _Model_logic, new logic_1.default(), \"f\");\n    }\n    getLayoutSize() {\n        return __classPrivateFieldGet(this, _Model_logic, \"f\").getLayoutSize();\n    }\n    getLayout() {\n        return __classPrivateFieldGet(this, _Model_logic, \"f\").getLayout();\n    }\n    getStock() {\n        return __classPrivateFieldGet(this, _Model_logic, \"f\").getStock();\n    }\n    getStockSize() {\n        return __classPrivateFieldGet(this, _Model_logic, \"f\").getStockSize();\n    }\n    getLead() {\n        return __classPrivateFieldGet(this, _Model_logic, \"f\").getLead();\n    }\n    drawCardFromStock() {\n        __classPrivateFieldGet(this, _Model_logic, \"f\").drawCardFromStock();\n    }\n    takeCardFromLayout(col) {\n        __classPrivateFieldGet(this, _Model_logic, \"f\").takeCardFromLayout(col);\n    }\n    canTake(col) {\n        return __classPrivateFieldGet(this, _Model_logic, \"f\").canTake(col);\n    }\n    isEnd() {\n        return __classPrivateFieldGet(this, _Model_logic, \"f\").isEnd();\n    }\n    isWin() {\n        return __classPrivateFieldGet(this, _Model_logic, \"f\").isWin();\n    }\n    isLose() {\n        return __classPrivateFieldGet(this, _Model_logic, \"f\").isLose();\n    }\n    retry() {\n        __classPrivateFieldGet(this, _Model_logic, \"f\").start();\n    }\n}\n_Model_logic = new WeakMap();\nexports[\"default\"] = Model;\n\n\n//# sourceURL=webpack://golf/./src/ts/ui/model.ts?");

/***/ }),

/***/ "./src/ts/ui/view.ts":
/*!***************************!*\
  !*** ./src/ts/ui/view.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar _View_controller, _View_model, _View_messageDialog, _View_gameBlock, _View_layoutBlock, _View_stockBlock, _View_leadBlock;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst controller_1 = __importDefault(__webpack_require__(/*! ./controller */ \"./src/ts/ui/controller.ts\"));\nconst model_1 = __importDefault(__webpack_require__(/*! ./model */ \"./src/ts/ui/model.ts\"));\nclass View {\n    constructor() {\n        _View_controller.set(this, void 0);\n        _View_model.set(this, void 0);\n        _View_messageDialog.set(this, void 0);\n        _View_gameBlock.set(this, void 0);\n        _View_layoutBlock.set(this, void 0);\n        _View_stockBlock.set(this, void 0);\n        _View_leadBlock.set(this, void 0);\n        __classPrivateFieldSet(this, _View_model, new model_1.default(), \"f\");\n        __classPrivateFieldSet(this, _View_controller, new controller_1.default(this, __classPrivateFieldGet(this, _View_model, \"f\")), \"f\");\n        __classPrivateFieldSet(this, _View_messageDialog, document.createElement('dialog'), \"f\");\n        __classPrivateFieldSet(this, _View_gameBlock, document.createElement('div'), \"f\");\n        __classPrivateFieldSet(this, _View_layoutBlock, document.createElement('div'), \"f\");\n        __classPrivateFieldSet(this, _View_stockBlock, document.createElement('div'), \"f\");\n        __classPrivateFieldSet(this, _View_leadBlock, document.createElement('div'), \"f\");\n        __classPrivateFieldGet(this, _View_layoutBlock, \"f\").classList.add('layout');\n        __classPrivateFieldGet(this, _View_stockBlock, \"f\").classList.add('stock');\n        __classPrivateFieldGet(this, _View_leadBlock, \"f\").classList.add('lead');\n        this.display();\n    }\n    createCardFrame() {\n        const $card = document.createElement('div');\n        $card.classList.add('card');\n        return $card;\n    }\n    createFaceUpCard(card) {\n        const $card = this.createCardFrame();\n        $card.classList.add('face-up');\n        const suitEntityRef = card.suit === 'Clubs'\n            ? '&clubs;'\n            : card.suit === 'Diamonds'\n                ? '&diams;'\n                : card.suit === 'Hearts'\n                    ? '&hearts;'\n                    : '&spades;';\n        const suitColor = card.suit === 'Hearts' || card.suit === 'Diamonds' ? 'red' : '';\n        $card.innerHTML = `<p class=\"card-rank\"> ${card.rank} </p><p style=\"color:${suitColor}\"> ${suitEntityRef} </p>`;\n        return $card;\n    }\n    displayLayout() {\n        const layout = __classPrivateFieldGet(this, _View_model, \"f\").getLayout();\n        layout.forEach((column, i) => {\n            const $column = document.createElement('div');\n            $column.classList.add('column');\n            column.cards.forEach((card, j) => {\n                const $card = this.createFaceUpCard(card);\n                $card.style.zIndex = String(j);\n                if (j === column.size - 1)\n                    $card.addEventListener('click', () => __classPrivateFieldGet(this, _View_controller, \"f\").handleClickLayout(i));\n                $column.appendChild($card);\n            });\n            __classPrivateFieldGet(this, _View_layoutBlock, \"f\").appendChild($column);\n        });\n    }\n    displayStock() {\n        const $stockPile = document.createElement('div');\n        $stockPile.classList.add('stock-pile');\n        for (let i = 0; i < __classPrivateFieldGet(this, _View_model, \"f\").getStockSize(); i++) {\n            const $card = this.createCardFrame();\n            $card.style.zIndex = String(i);\n            $card.style.bottom = `${i * 1}px`;\n            $card.style.left = `${i * 0.3}px`;\n            $card.innerHTML = `<p>残り${i + 1}枚</p>`;\n            if (i === __classPrivateFieldGet(this, _View_model, \"f\").getStockSize() - 1) {\n                $card.addEventListener('click', () => __classPrivateFieldGet(this, _View_controller, \"f\").handleClickStock(), { once: true });\n            }\n            $stockPile.appendChild($card);\n        }\n        __classPrivateFieldGet(this, _View_stockBlock, \"f\").appendChild($stockPile);\n    }\n    displayLead() {\n        const $leadPile = document.createElement('div');\n        $leadPile.classList.add('lead-pile');\n        const lead = __classPrivateFieldGet(this, _View_model, \"f\").getLead();\n        const $card = this.createFaceUpCard(lead);\n        $leadPile.appendChild($card);\n        __classPrivateFieldGet(this, _View_leadBlock, \"f\").appendChild($leadPile);\n    }\n    displayDialog(message) {\n        const $container = document.createElement('div');\n        $container.classList.add('dialog-container');\n        $container.style.width = '100%';\n        $container.style.height = '100%';\n        $container.innerHTML = `<div class=\"dialog-message\">${message}</div>`;\n        const $buttons = document.createElement('div');\n        $buttons.setAttribute('class', 'dialog-buttons');\n        const $closeButton = document.createElement('button');\n        $closeButton.innerText = '閉じる';\n        $closeButton.addEventListener('click', () => this.closeDialog());\n        const $retryButton = document.createElement('button');\n        $retryButton.innerText = 'もう一度遊ぶ';\n        $retryButton.addEventListener('click', () => __classPrivateFieldGet(this, _View_controller, \"f\").handleClickRetryButton(), { once: true });\n        $retryButton.addEventListener('click', () => this.closeDialog());\n        $buttons.style.display = 'flex';\n        $buttons.appendChild($closeButton);\n        $buttons.appendChild($retryButton);\n        $container.appendChild($buttons);\n        __classPrivateFieldGet(this, _View_messageDialog, \"f\").appendChild($container);\n        document.body.appendChild(__classPrivateFieldGet(this, _View_messageDialog, \"f\"));\n    }\n    openDialog() {\n        __classPrivateFieldGet(this, _View_messageDialog, \"f\").showModal();\n    }\n    closeDialog() {\n        __classPrivateFieldGet(this, _View_messageDialog, \"f\").close();\n    }\n    display() {\n        const $playArea = document.createElement('div');\n        $playArea.classList.add('play-area');\n        $playArea.appendChild(__classPrivateFieldGet(this, _View_stockBlock, \"f\"));\n        $playArea.appendChild(__classPrivateFieldGet(this, _View_leadBlock, \"f\"));\n        __classPrivateFieldGet(this, _View_gameBlock, \"f\").appendChild(__classPrivateFieldGet(this, _View_layoutBlock, \"f\"));\n        __classPrivateFieldGet(this, _View_gameBlock, \"f\").appendChild($playArea);\n        document.body.appendChild(__classPrivateFieldGet(this, _View_gameBlock, \"f\"));\n        this.displayLayout();\n        this.displayLead();\n        this.displayStock();\n        if (__classPrivateFieldGet(this, _View_model, \"f\").isWin()) {\n            this.displayDialog('おめでとうございます！!成功です');\n            this.openDialog();\n            return;\n        }\n        if (__classPrivateFieldGet(this, _View_model, \"f\").isLose()) {\n            this.displayDialog('残念！！もう一度挑戦してみましょう');\n            this.openDialog();\n            return;\n        }\n    }\n    clear() {\n        document.body.innerHTML = '';\n        __classPrivateFieldSet(this, _View_gameBlock, document.createElement('div'), \"f\");\n        __classPrivateFieldSet(this, _View_layoutBlock, document.createElement('div'), \"f\");\n        __classPrivateFieldSet(this, _View_stockBlock, document.createElement('div'), \"f\");\n        __classPrivateFieldSet(this, _View_leadBlock, document.createElement('div'), \"f\");\n        __classPrivateFieldSet(this, _View_messageDialog, document.createElement('dialog'), \"f\");\n        __classPrivateFieldGet(this, _View_layoutBlock, \"f\").classList.add('layout');\n        __classPrivateFieldGet(this, _View_stockBlock, \"f\").classList.add('stock');\n        __classPrivateFieldGet(this, _View_leadBlock, \"f\").classList.add('lead');\n    }\n    update() {\n        this.clear();\n        this.display();\n    }\n}\n_View_controller = new WeakMap(), _View_model = new WeakMap(), _View_messageDialog = new WeakMap(), _View_gameBlock = new WeakMap(), _View_layoutBlock = new WeakMap(), _View_stockBlock = new WeakMap(), _View_leadBlock = new WeakMap();\nexports[\"default\"] = View;\n\n\n//# sourceURL=webpack://golf/./src/ts/ui/view.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/ts/Main/main.ts");
/******/ 	__webpack_require__("./src/templates/index.html");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scss/style.scss");
/******/ 	
/******/ })()
;