/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { findSumTransactionByDate } from '../fn/statistics/find-sum-transaction-by-date';
import { FindSumTransactionByDate$Params } from '../fn/statistics/find-sum-transaction-by-date';
import { getAmountBalance } from '../fn/statistics/get-amount-balance';
import { GetAmountBalance$Params } from '../fn/statistics/get-amount-balance';
import { highestDeposit } from '../fn/statistics/highest-deposit';
import { HighestDeposit$Params } from '../fn/statistics/highest-deposit';
import { highestTransfer } from '../fn/statistics/highest-transfer';
import { HighestTransfer$Params } from '../fn/statistics/highest-transfer';
import { TransactionSumDetails } from '../models/transaction-sum-details';

@Injectable({ providedIn: 'root' })
export class StatisticsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findSumTransactionByDate()` */
  static readonly FindSumTransactionByDatePath = '/api/v1/statistics/sum-by-date/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findSumTransactionByDate()` instead.
   *
   * This method doesn't expect any request body.
   */
  findSumTransactionByDate$Response(params: FindSumTransactionByDate$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TransactionSumDetails>>> {
    return findSumTransactionByDate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findSumTransactionByDate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findSumTransactionByDate(params: FindSumTransactionByDate$Params, context?: HttpContext): Observable<Array<TransactionSumDetails>> {
    return this.findSumTransactionByDate$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TransactionSumDetails>>): Array<TransactionSumDetails> => r.body)
    );
  }

  /** Path part for operation `highestTransfer()` */
  static readonly HighestTransferPath = '/api/v1/statistics/highest-transfer/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `highestTransfer()` instead.
   *
   * This method doesn't expect any request body.
   */
  highestTransfer$Response(params: HighestTransfer$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return highestTransfer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `highestTransfer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  highestTransfer(params: HighestTransfer$Params, context?: HttpContext): Observable<number> {
    return this.highestTransfer$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `highestDeposit()` */
  static readonly HighestDepositPath = '/api/v1/statistics/highest-deposit/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `highestDeposit()` instead.
   *
   * This method doesn't expect any request body.
   */
  highestDeposit$Response(params: HighestDeposit$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return highestDeposit(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `highestDeposit$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  highestDeposit(params: HighestDeposit$Params, context?: HttpContext): Observable<number> {
    return this.highestDeposit$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `getAmountBalance()` */
  static readonly GetAmountBalancePath = '/api/v1/statistics/accountBalance/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAmountBalance()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAmountBalance$Response(params: GetAmountBalance$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return getAmountBalance(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAmountBalance$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAmountBalance(params: GetAmountBalance$Params, context?: HttpContext): Observable<number> {
    return this.getAmountBalance$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

}
