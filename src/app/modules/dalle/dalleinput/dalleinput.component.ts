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
  description!: string;
  isLoading = false;

  public constructor() {}

  ngOnInit() {
    const configuration = new Configuration({
      organization: 'org-Lwaz9hCUPAkP0PmpdV5BruhG',
      apiKey: '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',
    });

    this.openai = new OpenAIApi(configuration);
  }

  async onSubmitForm() {
    console.log(this.description);
    //loading compnent here
    this.isLoading = true;

    const response = await this.openai.createImage({
      prompt: this.description,
      n: 1,
      size: '256x256',
    });

    this.image = response.data.data[0].url;
    this.isLoading = false;
  }
}
