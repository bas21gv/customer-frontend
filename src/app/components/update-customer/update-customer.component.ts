import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customerId: number = 0;
  customer: Customer = {}; // Initialize the 'customer' property

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.customerId = params['id'];
      this.getCustomerById(this.customerId);
    });
  }

  getCustomerById(id: number) {
    this.customerService.getCustomerById(id).subscribe({
      next: (response) => {
        this.customer = response;
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  updateCustomer() {
    this.customerService.updateCustomer(this.customerId, this.customer).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['/customer']);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
