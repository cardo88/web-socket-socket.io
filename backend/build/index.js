"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); //middleware
const PORT = 3000;
app.get('/test', (req, res) => {
    console.log("hello world");
    res.send('V 1.0');
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
