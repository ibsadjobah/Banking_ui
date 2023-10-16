/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TransactionDto } from '../../models/transaction-dto';

export interface FindAllByUserId$Params {
  userId: number;
}

export function findAllByUserId(http: HttpClient, rootUrl: string, params: FindAllByUserId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TransactionDto>>> {
  const rb = new RequestBuilder(rootUrl, findAllByUserId.PATH, 'get');
  if (params) {
    rb.path('userId', params.userId, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<TransactionDto>>;
    })
  );
}

findAllByUserId.PATH = '/api/v1/transactions/user/{userId}';
