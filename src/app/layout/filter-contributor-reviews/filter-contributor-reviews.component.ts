import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter-contributor-reviews',
  templateUrl: './filter-contributor-reviews.component.html',
  styleUrls: ['./filter-contributor-reviews.component.scss'],
})
export class FilterContributorReviewsComponent implements OnInit {
  form: Array<object>;

  constructor(private modalController: ModalController) {
  	this.form = [
      { val: 'Pepperoni', isChecked: true },
      { val: 'Sausage', isChecked: false },
      { val: 'Mushroom', isChecked: false }
    ];
  }

  ngOnInit() {}

  closeModal(): void {
    this.modalController.dismiss();
  }

}
