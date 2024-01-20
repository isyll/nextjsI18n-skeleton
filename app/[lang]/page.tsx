import { _t } from '@/src/utils/i18n'
import PageProps from '@/types/pageprops'
import { getTranslations } from '@/src/utils/dictionaries'

export default async function Home({ params: { lang } }: PageProps) {
    const t = await getTranslations(lang)
    return <main></main>
}
