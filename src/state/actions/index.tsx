import * as constants from '../constants';

/* ===== Translate Panel Actions =====*/
export interface IChangeTranslateFromLanguage {
    type: constants.CHANGE_TRANSLATE_FROM_LANGUAGE;
    activeLanguage: string;
}

export interface IChangeTranslateToLanguage {
    type: constants.CHANGE_TRANSLATE_TO_LANGUAGE;
    activeLanguage: string;
}

export interface ISubmitTranslate {
    type: constants.SUBMIT_TRANSLATE;
    fromText: string;
}

export interface ITranslateFromTextChange {
    type: constants.TRANSLATE_FROM_TEXT_CHANGE;
    fromText: string;
}

export type TranslateAction = IChangeTranslateFromLanguage
    | IChangeTranslateToLanguage
    | ISubmitTranslate
    | ITranslateFromTextChange;

export type SubmitTranslate = ISubmitTranslate;

export function changeTranslateToLanguage(activeLang: string): IChangeTranslateToLanguage {
    return {
        type: constants.CHANGE_TRANSLATE_TO_LANGUAGE,
        activeLanguage: activeLang
    }
}

export function changeTranslateFromLanguage(activeLang: string): IChangeTranslateFromLanguage {
    return {
        type: constants.CHANGE_TRANSLATE_FROM_LANGUAGE,
        activeLanguage: activeLang
    }
}

export function submitTranslate(fromStr: string): ISubmitTranslate {
    return {
        type: constants.SUBMIT_TRANSLATE,
        fromText: fromStr
    }
}

export function translateFromTextChange(fromStr: string): ITranslateFromTextChange {
    return {
        type: constants.TRANSLATE_FROM_TEXT_CHANGE,
        fromText: fromStr
    }
}

