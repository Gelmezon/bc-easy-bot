import { WearData } from "./WearData";
export class BcWear {



  private _id: string;

  private _createDate: Date;

  private _updateDate: Date;

  private _updateMemberNumber: string;

  private _updateMemberNickName: string;

  private _wearData: WearData[];

  private _wearName: string;

  private _autoSave: boolean;

  private _md5: string;

  private _randomCode: string;
  public get randomCode(): string {
    return this._randomCode;
  }
  public set randomCode(v: string) {
    this._randomCode = v;
  }

  public get md5(): string {
    return this._md5;
  }
  public set md5(v: string) {
    this._md5 = v;
  }

  public get autoSave(): boolean {
    return this._autoSave;
  }
  public set autoSave(v: boolean) {
    this._autoSave = v;
  }

  public get wearName(): string {
    return this._wearName;
  }
  public set wearName(v: string) {
    this._wearName = v;
  }

  public get wearData(): WearData[] {
    return this._wearData;
  }
  public set wearData(v: WearData[]) {
    this._wearData = v;
  }

  public get updateMemberNickName(): string {
    return this._updateMemberNickName;
  }
  public set updateMemberNickName(v: string) {
    this._updateMemberNickName = v;
  }


  public get updateMemberNumber(): string {
    return this._updateMemberNumber;
  }
  public set updateMemberNumber(v: string) {
    this._updateMemberNumber = v;
  }

  public get updateDate(): Date {
    return this._updateDate;
  }
  public set updateDate(v: Date) {
    this._updateDate = v;
  }


  public get createDate(): Date {
    return this._createDate;
  }
  public set createDate(v: Date) {
    this._createDate = v;
  }


  public get id(): string {
    return this._id;
  }
  public set id(v: string) {
    this._id = v;
  }

  constructor(id: string,
    createDate: Date,
    updateDate: Date,
    updateMemberNumber: string,
    updateMemberNickName: string,
    wearData: WearData[],
    wearName: string,
    autoSave: boolean,
    md5: string,
    randomCode: string) {
    this._id = id
    this._createDate = createDate
    this._updateDate = updateDate
    this._updateMemberNumber = updateMemberNumber
    this._updateMemberNickName = updateMemberNickName
    this._wearData = wearData
    this._wearName = wearName
    this._autoSave = autoSave
    this._md5 = md5
    this._randomCode = randomCode
  }

}