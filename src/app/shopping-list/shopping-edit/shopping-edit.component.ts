import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  onAddItem() {
    const ingredeientName = this.nameInputRef.nativeElement.value;
    const ingredeientAmount = this.amountInputRef.nativeElement.value;
    const newIngredeient = new Ingredient(ingredeientName, ingredeientAmount);
    this.shoppingListService.addIngredient(newIngredeient);
  }
}
