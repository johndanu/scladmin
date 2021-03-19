export interface IQuiz{
    _id:String,
    InstituteName:string,
    InstituteID:string,
    Subject:string,
    SubjectId:string,
    QuizName:string,
    Questions:[
        {
            _id:string,
            Question:string,
            Answers:[String],
            CorrectAnswer:Number
        }
    ]
}