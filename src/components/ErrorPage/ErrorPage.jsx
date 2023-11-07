import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  console.log(error)

  return (
    <div className="flex justify-center items-center">
      <div className="text-3xl text-center space-y-5">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <b>{error.data}</b>
        <p>{error.statusText || error.message}</p>
        <div>
          <Link to={'/'}>
            <button className='bg-cyan-600 text-white px-2 py-2 rounded-md cursor-pointer'>Go Home</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
