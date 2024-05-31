import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";
import { UserServices } from "./user.services";

const createStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { password, student: studentData } = req.body;
        const result = await UserServices.createStudentIntoDB(password, studentData);
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Student create successfully',
            data: result
        })
    } catch (err) {
        next(err)
    }
};

export const UserControllers = {
    createStudent,
}