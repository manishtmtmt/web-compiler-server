"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadCode = exports.saveCode = void 0;
const Code_1 = require("../models/Code");
const saveCode = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fullCode } = req.body;
    try {
        const newCode = yield Code_1.Code.create({
            fullCode,
        });
        return res.status(201).json({ url: newCode._id, status: "saved!" });
    }
    catch (error) {
        return res.status(500).json({ message: "Error saving code" });
    }
});
exports.saveCode = saveCode;
const loadCode = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { urlId } = req.body;
    try {
        const existingCode = yield Code_1.Code.findById(urlId);
        if (!existingCode) {
            return res.status(404).json({ message: "Code not found" });
        }
        return res.status(200).json({ fullCode: existingCode.fullCode });
    }
    catch (error) {
        return res.status(500).json({ message: "Error loading code" });
    }
});
exports.loadCode = loadCode;
