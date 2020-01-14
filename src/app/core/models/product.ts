export class Product {
    'id'?: number;
'pvp': number;
'iva': number;
'discount': number;
'shelfIds':  any;

constructor(data?:any){
    Object.assign(this, data);
}
}
