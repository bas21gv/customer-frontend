import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';

const baseUrl = 'http://localhost:8080/api/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  createCustomer(customer: Customer): Observable<Customer>{
    return this.http.post(baseUrl, customer);
  }

  getAllCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(baseUrl);
  }

  getCustomerById(id: number): Observable<Customer>{
    return this.http.get<Customer>(`${baseUrl}/${id}`);
  }

  updateCustomer(id: number, customer: Customer): Observable<Customer>{
    return this.http.put<Customer>(`${baseUrl}/${id}`, customer);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`, { responseType: 'text' });
  }
}
