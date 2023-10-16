/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ContactDto } from '../models/contact-dto';
import { delete2 } from '../fn/contacts/delete-2';
import { Delete2$Params } from '../fn/contacts/delete-2';
import { findAll2 } from '../fn/contacts/find-all-2';
import { FindAll2$Params } from '../fn/contacts/find-all-2';
import { findAllByUserId1 } from '../fn/contacts/find-all-by-user-id-1';
import { FindAllByUserId1$Params } from '../fn/contacts/find-all-by-user-id-1';
import { findById2 } from '../fn/contacts/find-by-id-2';
import { FindById2$Params } from '../fn/contacts/find-by-id-2';
import { save2 } from '../fn/contacts/save-2';
import { Save2$Params } from '../fn/contacts/save-2';

@Injectable({ providedIn: 'root' })
export class ContactsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAll2()` */
  static readonly FindAll2Path = '/api/v1/contacts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll2$Response(params?: FindAll2$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ContactDto>>> {
    return findAll2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll2(params?: FindAll2$Params, context?: HttpContext): Observable<Array<ContactDto>> {
    return this.findAll2$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ContactDto>>): Array<ContactDto> => r.body)
    );
  }

  /** Path part for operation `save2()` */
  static readonly Save2Path = '/api/v1/contacts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save2$Response(params: Save2$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return save2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save2(params: Save2$Params, context?: HttpContext): Observable<number> {
    return this.save2$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findAllByUserId1()` */
  static readonly FindAllByUserId1Path = '/api/v1/contacts/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllByUserId1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllByUserId1$Response(params: FindAllByUserId1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ContactDto>>> {
    return findAllByUserId1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllByUserId1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllByUserId1(params: FindAllByUserId1$Params, context?: HttpContext): Observable<Array<ContactDto>> {
    return this.findAllByUserId1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ContactDto>>): Array<ContactDto> => r.body)
    );
  }

  /** Path part for operation `findById2()` */
  static readonly FindById2Path = '/api/v1/contacts/{contactId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById2$Response(params: FindById2$Params, context?: HttpContext): Observable<StrictHttpResponse<ContactDto>> {
    return findById2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById2(params: FindById2$Params, context?: HttpContext): Observable<ContactDto> {
    return this.findById2$Response(params, context).pipe(
      map((r: StrictHttpResponse<ContactDto>): ContactDto => r.body)
    );
  }

  /** Path part for operation `delete2()` */
  static readonly Delete2Path = '/api/v1/contacts/{contactId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete2()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete2$Response(params: Delete2$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete2(params: Delete2$Params, context?: HttpContext): Observable<void> {
    return this.delete2$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
