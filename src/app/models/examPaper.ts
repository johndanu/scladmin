export interface IExamPaper {
InstituteID:String,
  SubjectName:String,
  ExamPaperName:String,
  Hit: Number,
  Questions: [
      {
      Question:String,
      Answers:[],
      CorrectAnswer:Number,
      Path:Object ,
      Explanation:String
      }
  ],
  Grade:Number
}