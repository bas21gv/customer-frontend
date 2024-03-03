import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-post-customer',
  templateUrl: './post-customer.component.html',
  styleUrls: ['./post-customer.component.css']
})
export class PostCustomerComponent implements OnInit {
  ngOnInit(): void {
  }
  customer: Customer = new Customer();

  constructor(private customerService: CustomerService,
              private router: Router) { }

  createCustomer(): void {
    this.customerService.createCustomer(this.customer).subscribe({
      next: (response) => {
        console.log('Customer created successfully:', response);
        this.router.navigate(['/customer']);
      },
      error: (error) => {
        console.error('Error creating customer:', error);
      }
    });
  }

  

}
