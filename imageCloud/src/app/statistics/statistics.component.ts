import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

// see http://learnangular2.com/forms/
// http://blog.angular-university.io/introduction-to-angular-2-forms-template-driven-vs-model-driven/#disqus_thread

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {

  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;

  /**
   * Constructor.
   */
  constructor(private fb: FormBuilder) {
    this.email = new FormControl('', [Validators.required, this.minimumLength]);
    this.password = new FormControl('', Validators.required);

    this.loginForm = this.fb.group({
      email: this.email,
      password: this.password
    });
  }

  minimumLength(ctrl: FormControl): ValidationErrors {
    return ctrl.value === 'test' ? null : { toolow: true };
  }

  doLogin(event: Event) {
    this.loginForm.reset();
  }
}
