import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app';
  memberName='Kode-Mafia'
  
  language: string = 'TypeScript';
  listofLanguages: string[] = ['Java', 'C#', 'C++', 'Python', 'JavaScript', 'TypeScript'];

  addLanguage(){
    console.log('addLanguage() called!');
    this.listofLanguages.push(this.language);
    console.log(this.listofLanguages);
  }
}

 