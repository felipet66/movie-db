import { BaseResourceModel } from '../models/base-resource.model';

import { Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


export abstract class BaseResourceService<T extends BaseResourceModel> {

  protected http: HttpClient;
  public resources: any;

  constructor(
    protected apiPath: string,
    protected injector: Injector
  ) {
    this.http = injector.get(HttpClient);
  }

  getAll(): Observable<T[]> {
    return this.http.get(this.apiPath).pipe(
      map(resource => this.resources = resource),
      catchError(this.handleError)
    );
  }

  filterBy(data: string): any {
    const url = this.apiPath + data;
    return this.http.get(url).pipe(
      map(resource => this.resources = resource),
      catchError(this.handleError)
    );
  }

  protected handleError(error: any): Observable<any> {
    console.log('ERRO NA REQUISIÇÃO => ', error);
    return throwError(error);
  }

}