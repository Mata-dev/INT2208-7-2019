import { AuthenticationService } from './authentication.service';
import { Quiz } from './../_models/quiz-detail/quiz';
import { Question } from './../_models/question/question';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { jsonpFactory } from '@angular/http/src/http_module';

const httpOptions = {
  headers: new Headers({
    // 'Content-Type': 'application/json',
    // 'Authorization': 'my-auth-token',
    // 'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin',

  })
};

@Injectable()
export class QuestionService {
  constructor(private http: Http,
    private authService: AuthenticationService) { }
  getQuestionsByQuizId(id: number): Observable<Question[]> {
    const getUrl = 'api/test';
    const questionArray: Question[] = [];
    const url = `${getUrl}/${id}`;
    const res = this.http.get(url).catch(this.handleError);
    res.subscribe(data => {
      const JSONarray = JSON.parse(data._body);
      JSONarray.forEach((element: {
        questionNumber: number,
        questionContent: string;
        optionA: string;
        optionB: string; optionC: string;
        optionD: string;
      }) => {
        questionArray.push(new Question(
          element.questionNumber,
          element.questionContent,
          element.optionA,
          element.optionB,
          element.optionC,
          element.optionD));
      });
    });
    return Observable.of(questionArray);
  }
  getAllQuizDetail(): Observable<Quiz[]> {
    const getUrl = 'api/testdetail';
    const headers: Headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authService.getToken()}`,
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
    });
    const quizArray: Quiz[] = [];
    this.http.get(getUrl, { headers: headers }).catch(this.handleError)
      .subscribe(data => {
        if (data.ok) {
          const JSONarray = JSON.parse(data._body);
          JSONarray.forEach((element: {
            quizNumber: number;
            language: string;
            catalogy: string;
            questionQuantity: number
            isCompleted: boolean
          }) => {
            quizArray.push(new Quiz(
              element.quizNumber,
              element.catalogy,
              element.language,
              element.questionQuantity,
              element.isCompleted));
          }
          );
        }
      });
    return Observable.of(quizArray);
  }
  submitAnswer(map: Map<number, string>, quizId: number) {
    const convMap = [];
    map.forEach((answer: string, questionId: number) => {
      convMap.push({ answer, questionId });
    });
    const headers: Headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authService.getToken()}`,
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
    });
    const getUrl = 'api/submit';
    const url = `${getUrl}/${quizId}`;
    return this.http.post(url, JSON.stringify(convMap), {headers: headers});
  }
  private handleError(error: Response) {
    return Observable.throw(error);
  }
}
