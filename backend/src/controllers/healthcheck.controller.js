import { asyncHandler } from "../utils/asyncHandler.js";
import config from "../config/index.js";

const healthCheckService = asyncHandler(async (req,res) => {
    const data = {
        apikey: config.API_KEY
    }
    return res
    .status(200)
    .json({
        success: true,
        message: "Backend service is running fine",
    })

});

export { 
    healthCheckService
}