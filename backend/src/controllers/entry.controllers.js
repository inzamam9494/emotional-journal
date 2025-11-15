import { Entry } from "../models/entry.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

const addEntry = async (req, res) => {
    try {
        const {emotion, note} = req.body;
        const newEntry = await Entry.create({emotion, note});
        res.status(201).json(new ApiResponse(201, newEntry, "Entry created successfully"));
    } catch (error) { 
        throw new ApiError(500, "Failed to create entry", error);
    }
}

const getEntries = async (req, res, next) => {
    try {
        const entries = await Entry.find().sort({createdAt: -1});
        res.status(200).json(new ApiResponse(200, entries, "Entries retrieved successfully"));
    } catch (error) {
        throw new ApiError(500, "Failed to retrieve entries", error);
    }
}

export { addEntry, getEntries };