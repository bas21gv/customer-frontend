import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent implements OnInit {

  customers: Customer[] = []; // Define an array to store the customers


  constructor(private customerService: CustomerService) { }
  ngOnInit(): void {
    this.getAllCustomers();
  }
  getAllCustomers(): void {
    this.customerService.getAllCustomers().subscribe({
      next: (response) => {
        this.customers = response; // Assign the response to the customers array
      },
      error: (error) => {
        console.error(error); // Handle the error if any
      }
    });
  }
  deleteCustomer(id: number): void {
    this.customerService.deleteCustomer(id).subscribe({
      next: (response: any) => {
        console.log('Customer deleted successfully:', response);
        this.getAllCustomers(); // Refresh the customer list after deleting a customer
      },
      error: (error: any) => {
        console.error('Error deleting customer:', error);
      }
    });
  }
}
