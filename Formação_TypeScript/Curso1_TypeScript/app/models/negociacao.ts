export class Negociacao {
    /* constructor(_data){this._data = _data} == constructor(private _data: Date){} */
    constructor(
        // public readonly data: Date --> impede a modificacao
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) {}

    get volume(): number{ return this.quantidade * this.valor }

    get data(): Date{ 
        const data = new Date(this._data.getTime());
        return data
    }
}