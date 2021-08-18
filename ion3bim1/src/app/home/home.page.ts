import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  login = '';
  senha = '';
  mensagem = '';

  validar(): void{
    if(this.login === 'admin' && this.senha === '1234'){
      this.mensagem = 'Logado com sucesso!'
    }else{
      this.mensagem = 'Login ou Senha incorretos!'
    }
  }

  constructor() {}

}
