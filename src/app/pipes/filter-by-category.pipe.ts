import { Pipe, PipeTransform } from '@angular/core';
import { ProductModel } from '../models/products.model';  // Modelinizin doğru yolu

@Pipe({
  name: 'filterByCategory'
})
export class FilterByCategoryPipe implements PipeTransform {
  transform(products: ProductModel[], category: string): ProductModel[] {
    return products.filter(product => product.urunKategori === category);
  }
}
