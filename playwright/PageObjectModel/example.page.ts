class Example{
  usernameTF:string;
  passwordTF:string;
  SubmitBtn:any

  constructor(){
    this.usernameTF = page.locator('#username');
    this.passwordTF = '#password';
    this.SubmitBtn = '#submit';
  }
}