export interface IQuiz{
    _id:String,
    InstituteID:string,
    SubjectName:string,
    ExamPaperName:string,
    Questions:[
        {
            _id:string,
            Question:string,
            Answers:[String],
            CorrectAnswer:Number,
            path:Object
        }
    ],
    Grade:Number
}