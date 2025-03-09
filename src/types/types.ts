export interface Paper {
  id: string;
  paper_name: string;
  subject: string;
  paper_link: string | null;
}

export interface Question {
  id: string;
  paper_id: string;
  sub_question: string;
  max_marks: number;
  exam_marks: number | null;
}
