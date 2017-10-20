import { HttpClient } from "@angular/common/http";
// rxjs
import { Observable } from "rxjs/Observable";

import { environment } from "../../../environments/environment";
import { Field } from "../models/field.model";
import { Injectable } from "@angular/core";

@Injectable()
export class FieldService {

    private readonly URL = environment.urlBackend + 'fields';

    constructor(
        protected httpClient: HttpClient,
    ) { }

    public create(field: Field): Observable<Field> {
        return this.httpClient.post<Field>(this.URL, field);
    }

    public delete(id: string): Observable<Field> {
        return this.httpClient.delete<Field>(`${this.URL}/${id}`);
    }

    public get(id: string): Observable<Field> {
        return this.httpClient.get<Field>(`${this.URL}/${id}`);
    }

    public list(customerId: string): Observable<Array<Field>> {
        return this.httpClient.get<Array<Field>>(`${this.URL}/${customerId}.json`);
    }

    public update(id: string, field: Field): Observable<Field> {
        return this.httpClient.put<Field>(`${this.URL}/${id}`, field);
    }
}
