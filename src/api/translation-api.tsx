
export function getTranslation(fromLanguage: string, toLanguage: string, fromText: string): Promise <string> {
    return performTranslationRequest(fromLanguage, toLanguage, fromText).then((res: Response) => {
        return res.json();
    }).then((translation) => {
        return translation.translations[toLanguage.toLowerCase()];
    });
}

function performTranslationRequest(fromLang: string, toLang: string, fromTxt: string): Promise <Response> {
    return fetch(`http://localhost:9000/translate/${fromTxt}`);
}
