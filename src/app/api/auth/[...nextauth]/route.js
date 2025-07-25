
import AuthOpt from '@/component/AuthOpt'
import NextAuth from 'next-auth'


const handler = NextAuth(AuthOpt)

export { handler as GET, handler as POST }