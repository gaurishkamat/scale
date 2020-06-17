import { SheetsManager } from 'jss';
declare class ScaleSheetManager {
    sheetManager: SheetsManager;
    keyMap: Map<any, any>;
    _get(key: any): import("jss").StyleSheet<string | number | symbol>;
    _set(key: any, sheet: any): void;
    _manage(key: any): void;
    unmanage(key: any): void;
    load(prevKey: any, nextKey: any, injectedValues: any): import("jss").StyleSheet<string | number | symbol>;
}
declare const manager: ScaleSheetManager;
export default manager;
