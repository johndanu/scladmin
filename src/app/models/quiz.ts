export interface IQuiz{
    _id:String,
   // InstituteName:string,
    InstituteID:string,
    SubjectName:string,
    //SubjectId:string,
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