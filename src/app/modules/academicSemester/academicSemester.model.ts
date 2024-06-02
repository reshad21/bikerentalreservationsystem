import { Schema, model } from "mongoose";
import { AcademicSemesterName, Months } from "./academicSemester.constant";
import { TAcademicSemester } from "./academicSemester.interface";


const academicSemesterSchema = new Schema<TAcademicSemester>(
    {
        name: {
            type: String,
            required: true,
            enum: AcademicSemesterName,
        },
        year: {
            type: String,
            required: true,
        },
        code: {
            type: String,
            required: true,
        },
        startMonth: {
            type: String,
            enum: Months,
        },
        endMonth: {
            type: String,
            enum: Months,
        }
    }
)

export const AcademicSemester = model<TAcademicSemester>('AcademicSemester', academicSemesterSchema)