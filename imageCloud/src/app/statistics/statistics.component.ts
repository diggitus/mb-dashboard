import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

// see http://learnangular2.com/forms/
// http://blog.angular-university.io/introduction-to-angular-2-forms-template-driven-vs-model-driven/#disqus_thread

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {

  loginForm: FormGroup;

  /**
   * Constructor.
   */
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: new FormControl('', Validators.required, this.minimumLength),
      password: new FormControl('', Validators.required)
    });
  }

  minimumLength(ctrl: FormControl): Observable<ValidationErrors | null> {
    return ctrl.valueChanges
      .debounceTime(200)
      .map(value => {
        if (value === 'test') {
          return null;
        } else {
          ctrl.setErrors({ toolow: true }); // TODO: search for a better solution
          return { toolow: true };
        }
      });
  }

  doLogin(event: Event) {
    this.loginForm.reset();
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
