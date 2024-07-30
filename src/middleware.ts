import { chain } from '@/middleware/util'

export const middleware = chain([
])

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|static|favicon.ico).*)'],
}