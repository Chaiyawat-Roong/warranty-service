export class Product {
    id?: string;
    name?: string;
    serial?: string;
    date?: Date;
    exptime?: number;
    exptype?: string;
    insurer?: string;
  
    constructor(data: Partial<Product>) {
      Object.assign(this, data);
    }
  }
  