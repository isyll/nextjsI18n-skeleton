import Dict from '@/types/dict'

function getFromDictionary(keys: Array<string>, dict: Dict | string): string {
    if (typeof dict === 'string') return dict

    if (keys.length === 0) return ''

    if (!dict) return dict

    const key = keys.shift() || ''

    return getFromDictionary(keys, dict[key])
}

export function _t(key: string, dict: Dict): string {
    const keys = key.split('.')
    const ret = getFromDictionary(keys, dict)

    if (!ret) return key

    if (typeof ret !== 'string') {
        console.error('getFromDictionary returned a ' + typeof ret)
        return key
    }

    return ret
}
