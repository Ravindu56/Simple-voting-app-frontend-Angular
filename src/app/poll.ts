import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Poll as PollData } from './poll.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Poll {
  private baseUrl = 'http://localhost:8080/api/polls';

  constructor(private http: HttpClient) { }

  cretePoll(poll: PollData): Observable<PollData> {
    return this.http.post<PollData>(`${this.baseUrl}`, poll);
  }

  getPolls(): Observable<PollData[]> {
    return this.http.get<PollData[]>(`${this.baseUrl}`);
  }

  vote(pollId: number, optionText: string): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/vote`, { pollId, optionText });
  }

}
