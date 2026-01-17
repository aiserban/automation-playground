import { Product } from '../../support/product';
import prodProducts from '../prod/products'; // for testing purposes to avoid constantly replicating the data

const PRODUCTS: ReadonlyArray<Product> = Object.freeze(prodProducts);

export default PRODUCTS;
