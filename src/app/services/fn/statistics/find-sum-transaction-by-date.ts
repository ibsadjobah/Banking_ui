/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TransactionSumDetails } from '../../models/transaction-sum-details';

export interface FindSumTransactionByDate$Params {
  userId: number;
  'start-date': string;
  'end-date': string;
}

export function findSumTransactionByDate(http: HttpClient, rootUrl: string, params: FindSumTransactionByDate$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TransactionSumDetails>>> {
  const rb = new RequestBuilder(rootUrl, findSumTransactionByDate.PATH, 'get');
  if (params) {
    rb.path('userId', params.userId, {});
    rb.query('start-date', params['start-date'], {});
    rb.query('end-date', params['end-date'], {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<TransactionSumDetails>>;
    })
  );
}

findSumTransactionByDate.PATH = '/api/v1/statistics/sum-by-date/{userId}';
