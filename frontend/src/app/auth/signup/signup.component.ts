import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  Router
} from '@angular/router';
import {
  AuthService
} from '../../services/auth.service';
import {
  ConfirmedValidator
} from '../../services/confirmed.validator';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.signForm = this.formBuilder.group({
      fullName: [null, [Validators.required, Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required]
    }, {
      validator: ConfirmedValidator('password', 'confirmPassword')
    });
  }
  onSignup() {
    const fullName = this.signForm.get('fullName').value;
    const email = this.signForm.get('email').value;
    const password = this.signForm.get('password').value;
    this.auth.createUser(fullName, email, password).then(
      (response: {
        message: string
      }) => {
        console.log(response.message);
        this.auth.loginUser(email, password).then(
          () => {
            this.router.navigate(['/forum']);
          }
        ).catch(
          (error) => {
            console.error(error);
            // this.errorMsg = error.message;
          }
        );
      }
    ).catch((error) => {
      console.error(error);
      // this.errorMsg = error.message;
    });
  }

}
