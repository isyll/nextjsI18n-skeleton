import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextRequest } from 'next/server'
import { i18n } from './i18n-config'

function getLocale(request: NextRequest): string {
    const headers: Record<string, string> = {}
    request.headers.forEach((value, key) => (headers[key] = value))
    const languages = new Negotiator({ headers }).languages()

    try {
        return match(languages, i18n.locales, i18n.defaultLocale)
    } catch {
        return i18n.defaultLocale
    }
}

export function middleware(request: NextRequest) {
    const { pathname, search } = request.nextUrl
    const pathnameHasLocale = i18n.locales.some(
        (locale) =>
            pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
    )

    if (pathnameHasLocale) return

    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}${search}`

    return Response.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        '/((?!(?:fr|en|api|_next/static|_next/image)(?:/|$))(?!.*\\.[^.]*$).*/?)',
        '/',
    ],
}
