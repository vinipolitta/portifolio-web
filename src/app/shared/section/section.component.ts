import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  @Input() title: string = '';
  @Input() titleDescription: string = '';
  @Input() subTitle: string = '';
  @Input() subTitleDescripton: string = '';
  @Input() textH3: string = '';
  @Input() socialMidia: boolean = true;
  @Input() bgContent: string = 'read-more-primary';

  downloadCv() {
    const link = document.createElement('a');
    link.href = '../../../assets/pdf/Vinicius Politta Curriculo.pdf';
    link.download = 'Vinicius Politta Curriculo.pdf';
    link.click();
  }
}
