import React from 'react'
import './app.css'
import {
	BrowserRouter as Router,
	Route,
	Link,
} from 'react-router-dom'

const Page1 = React.lazy(() => import('./react/01 - controlled components/index'))
const Page2 = React.lazy(() => import('./react/02 - state management'))
const Page3 = React.lazy(() => import('./react/03 - hooks'))
const Links = React.lazy(() => import('./links'))

const App = () => {
	return (
		<Router>
			<div className='app'>
				<header className='app-header'>
					<Link to='/'>Home</Link>
				</header>
				<hr />
				<div className='app-content'>
					<React.Suspense fallback='Loading...'>
						<Route exact path='/' component={() => <Links />} />
						<Route path='/01' component={(props) => <Page1 {...props} />} />
						<Route path='/02' component={(props) => <Page2 {...props} />} />
						<Route path='/03' component={(props) => <Page3 {...props} />} />
					</React.Suspense>
				</div>
			</div>
		</Router>
	)
}

export default App
