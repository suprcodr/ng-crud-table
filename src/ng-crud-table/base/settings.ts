import {Message} from './message';
import {SelectionType, SelectionMode} from '../types';

export class Settings {
  public api?: string;
  public crud?: boolean;
  public primaryKeys?: string[];
  public tableWidth?: number;
  public scrollHeight?: number;
  public sortable?: boolean = true;
  public filter?: boolean = true;
  public initLoad?: boolean = true;
  public clientSide?: boolean = true;
  public multipleSort?: boolean;
  public messages?: Message;
  public trackByProp?: string;
  public groupRowsBy?: string[];
  public filterDelay?: number = 500;
  public globalFilter?: boolean;
  public setWidthColumnOnMove?: boolean;
  public selectionType?: SelectionType;
  public selectionMode?: SelectionMode;

  constructor(init: Partial<Settings>) {
    this.messages = new Message();
    if (init) {
      const messages = Object.assign({}, this.messages, init.messages);
      Object.assign(this, init, {messages: messages});
    }
  }

}
