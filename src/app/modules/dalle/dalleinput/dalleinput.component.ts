// import { Component, Input, OnInit } from '@angular/core';
// import { Configuration, OpenAIApi } from 'openai';

// @Component({
//   selector: 'app-dalleinput',
//   templateUrl: './dalleinput.component.html',
//   styleUrls: ['./dalleinput.component.scss'],
// })
// export class DalleinputComponent implements OnInit {
//   image = '';
//   openai: any;
//   description!: string;
//   isLoading = false;

//   public constructor() {}

//   ngOnInit() {
//     const configuration = new Configuration({
//       organization: 'org-Lwaz9hCUPAkP0PmpdV5BruhG',
//       apiKey: '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',
//     });

//     this.openai = new OpenAIApi(configuration);
//   }

//   async onSubmitForm() {
//     console.log(this.description);
//     //loading compnent here
//     this.isLoading = true;

//     const response = await this.openai.createImage({
//       prompt: this.description,
//       n: 1,
//       size: '256x256',
//     });

//     this.image = response.data.data[0].url;
//     this.isLoading = false;
//   }
// }

import { Component, Input, OnInit } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';

@Component({
  selector: 'app-dalleinput',
  templateUrl: './dalleinput.component.html',
  styleUrls: ['./dalleinput.component.scss'],
})
export class DalleinputComponent implements OnInit {
  image = '';
  openai: any;
  text = '';
  description!: string;
  isLoading = false;

  public constructor() {}

  ngOnInit() {
    const configuration = new Configuration({
      organization: 'org-P3kVyMdsfAMsunzKwevjoirr',
      apiKey: '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',
    });

    this.openai = new OpenAIApi(configuration);
  }

  async onSubmitForm() {
    console.log(this.description);
    this.isLoading = true;
    const response = await this.openai.createCompletion({
      model: 'text-davinci-003',
      prompt: this.description,
      temperature: 0.9,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.6,
      stop: [' Human:', ' AI:'],
    });

    console.log(response);
    this.text = response.data.choices[0].text;
    this.isLoading = false;
    /*
    const response = await this.openai.createImage({
      prompt: this.description,
      n: 1,
      size: "256x256",
    });

    this.image = response.data.data[0].url;
    */
  }
}
