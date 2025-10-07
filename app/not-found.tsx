import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-4">404</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">Page not found</p>
        <Link 
          href="/" 
          className="inline-flex items-center px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
        >
          Go back home
        </Link>
      </div>
    </div>
  )
}
