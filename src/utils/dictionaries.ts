import { i18n } from '@/i18n-config'
import { _t } from '@/src/utils/i18n'
import 'server-only'

const dictionaries: { [key: string]: any } = {}

i18n.locales.forEach((locale) => {
    dictionaries[locale] = () =>
        import(`@/dictionaries/${locale}.json`).then((module) => module.default)
})

const getDictionary = async (locale: string) => await dictionaries[locale]()

export type Translator = (key: string) => string

export const getTranslations = async (lang: string): Promise<Translator> => {
    const dict = await getDictionary(lang)
    return (key: string) => _t(key, dict)
}
