export class WearData {

    private _ArousalZone: string;

    private _Corlor: string;

    private _Name: string;

    private _Property: any;

    public get Property(): any {
        return this._Property
    }

    public set Property(v: any) {
        this._Property
    }


    public get Name(): string {
        return this._Name;
    }
    public set Name(v: string) {
        this._Name = v;
    }

    public get Corlor(): string {
        return this._Corlor;
    }
    public set Corlor(v: string) {
        this._Corlor = v;
    }

    public get ArousalZone(): string {
        return this._ArousalZone;
    }
    public set ArousalZone(v: string) {
        this._ArousalZone = v;
    }

    constructor(ArousalZone:string,Corlor:string,Name:string,Property:any){
        this._ArousalZone = ArousalZone
        this._Corlor = Corlor
        this._Name = Name
        this._Property = Property
    }
}