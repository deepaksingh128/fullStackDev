import { atom, selector } from 'recoil'

export const fontSizeState = atom({
    key: 'fontSizeState',
    default: 14
});

export const fontSizeLabelState = selector({
    key: 'fontSizeLabelState',
    get: ({get}) => {
        const fontSize = get(fontSizeState);
        const unit = 'px';

        return `${fontSize}${unit}`
    }
});

export const textState = atom({
    key: 'textAtom',
    default: ''
});

export const textLengthState = selector({
    key: 'textLengthState',
    get: ({get}) => {
        const text = get(textState);

        return text.length;
    }
});