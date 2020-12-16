import { Component, OnInit } from '@angular/core';
import {Employee} from '../../Employee'
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Department = [
    'Hr',
    'Sales',
    'Finance',
    'Engineer',
    'Other',
  ];

  Day = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31
  ];

  Month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  Year = [
    2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010
  ];



  // employee: Employee = new Employee();
  // submitted = false;
  // //userDetail: FormGroup;
  // checked = [];
  // precio = 0;
  // department =['Hr','Sales', 'Finance', 'Engineer','Other'];
  // constructor(private employeeService: UserService,
  //   private formBuilder: FormBuilder) { }

  // ngOnInit() {
  //   this.userDetail = this.formBuilder.group({
  //     name: [null, Validators.compose([Validators.required, Validators.minLength(2),
  //     Validators.pattern('[a-zA-Z ]*$')])],
  //     salary: [null, Validators.required],
  //     gender: [null, Validators.required],
  //     day: [null, Validators.required],
  //     year: [null, Validators.required],
  //     month: [null, Validators.required]

  //   });

  
  // }

  // newEmployee(): void {
  //   this.submitted = false;
  //   this.employee = new Employee();
  // }

  

  // onSubmit() {
  //   this.submitted = true;
  // }

}
